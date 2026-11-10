import { NextRequest, NextResponse } from "next/server"
import { get } from "@vercel/blob"
import { isValidCvSignature } from "@/lib/cv-links"

export const runtime = "nodejs"

export async function GET(req: NextRequest) {
  const pathname = req.nextUrl.searchParams.get("p") || ""
  const signature = req.nextUrl.searchParams.get("s") || ""

  if (!pathname.startsWith("cv/") || !/^[0-9a-f]{64}$/.test(signature) || !isValidCvSignature(pathname, signature)) {
    return NextResponse.json({ error: "Enlace no válido" }, { status: 403 })
  }

  const result = await get(pathname, { access: "private" })
  if (!result || result.statusCode !== 200) {
    return NextResponse.json({ error: "CV no encontrado" }, { status: 404 })
  }

  const filename = pathname.split("/").pop() || "cv"
  return new NextResponse(result.stream, {
    headers: {
      "Content-Type": result.blob.contentType,
      "Content-Disposition": `inline; filename="${filename}"`,
      "Cache-Control": "private, no-store",
      "X-Robots-Tag": "noindex",
    },
  })
}
