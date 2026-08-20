import { NextRequest, NextResponse } from "next/server"
import { google } from "googleapis"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { nombre, telefono, haEstudiadoIngles, nivel } = body as {
      nombre?: string
      telefono?: string
      haEstudiadoIngles?: string
      nivel?: string
    }

    if (!nombre?.trim() || !telefono?.trim()) {
      return NextResponse.json({ error: "Faltan datos obligatorios" }, { status: 400 })
    }

    const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL
    const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n")
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID

    if (!clientEmail || !privateKey || !spreadsheetId) {
      console.error("Missing Google Sheets env vars")
      return NextResponse.json({ error: "Configuración incompleta" }, { status: 500 })
    }

    const auth = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    })
    const sheets = google.sheets({ version: "v4", auth })

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Leads!A:E",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[
          new Date().toISOString(),
          nombre,
          telefono,
          haEstudiadoIngles === "si" ? "Sí" : "No",
          nivel || "",
        ]],
      },
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("Error saving lead to Google Sheets", err)
    return NextResponse.json({ error: "Error interno" }, { status: 500 })
  }
}
