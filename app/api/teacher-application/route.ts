import { NextRequest, NextResponse } from "next/server"
import { google } from "googleapis"
import { put } from "@vercel/blob"
import { cvLink } from "@/lib/cv-links"
import { CV_MAX_BYTES, CV_TYPES, availabilityToText } from "@/lib/teacher-application"

export const runtime = "nodejs"

const SHEET = "Profesores"
const HEADER = [
  "Fecha", "Nombre", "Email", "Teléfono", "Nacionalidad",
  "Experiencia", "Titulación", "Experiencia Cambridge", "Disponibilidad", "Horas/semana",
  "Incorporación", "Mensaje", "CV", "fbclid", "utm_source", "utm_medium", "utm_campaign",
]

function text(form: FormData, key: string, max = 300): string {
  const value = form.get(key)
  return typeof value === "string" ? value.trim().slice(0, max) : ""
}

function slugify(value: string): string {
  return value.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-zA-Z0-9]+/g, "-").replace(/^-|-$/g, "").toLowerCase() || "candidato"
}

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData()
    const nombre = text(form, "nombre", 120)
    const email = text(form, "email", 160)
    const telefono = text(form, "telefono", 30)
    const slots = text(form, "disponibilidad", 500).split(",").filter(Boolean)
    const cv = form.get("cv")

    if (!nombre || !email || !telefono || text(form, "consentimiento") !== "si") {
      return NextResponse.json({ error: "Faltan datos obligatorios" }, { status: 400 })
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Email no válido" }, { status: 400 })
    }
    if (!(cv instanceof File) || cv.size === 0) {
      return NextResponse.json({ error: "Falta el CV" }, { status: 400 })
    }
    const extension = CV_TYPES[cv.type]
    if (!extension || cv.size > CV_MAX_BYTES) {
      return NextResponse.json({ error: "El CV debe ser PDF o Word de menos de 4 MB" }, { status: 400 })
    }

    const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL
    const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n")
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID

    if (!clientEmail || !privateKey || !spreadsheetId || !process.env.BLOB_READ_WRITE_TOKEN) {
      console.error("Missing Google Sheets or Blob env vars")
      return NextResponse.json({ error: "Configuración incompleta" }, { status: 500 })
    }

    const blob = await put(`cv/${slugify(nombre)}.${extension}`, cv, {
      access: "private",
      addRandomSuffix: true,
      contentType: cv.type,
    })

    const auth = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    })
    const sheets = google.sheets({ version: "v4", auth })

    // First application creates the tab, so there's nothing to set up by hand.
    const { data } = await sheets.spreadsheets.get({ spreadsheetId, fields: "sheets.properties.title" })
    if (!data.sheets?.some((s) => s.properties?.title === SHEET)) {
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId,
        requestBody: { requests: [{ addSheet: { properties: { title: SHEET, gridProperties: { frozenRowCount: 1 } } } }] },
      })
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: `${SHEET}!A1`,
        valueInputOption: "RAW",
        requestBody: { values: [HEADER] },
      })
    }

    const origin = req.headers.get("origin") || req.nextUrl.origin
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${SHEET}!A:Q`,
      // RAW so a candidate can't inject spreadsheet formulas through the form
      valueInputOption: "RAW",
      requestBody: {
        values: [[
          new Date().toISOString(),
          nombre,
          email,
          telefono,
          text(form, "nacionalidad", 80),
          text(form, "experiencia", 40),
          text(form, "titulacion", 200),
          text(form, "cambridge", 10),
          availabilityToText(slots),
          text(form, "horas", 20),
          text(form, "incorporacion", 60),
          text(form, "mensaje", 1500),
          cvLink(origin, blob.pathname),
          text(form, "fbclid", 300),
          text(form, "utmSource", 100),
          text(form, "utmMedium", 100),
          text(form, "utmCampaign", 100),
        ]],
      },
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("Error saving teacher application", err)
    return NextResponse.json({ error: "Error interno" }, { status: 500 })
  }
}
