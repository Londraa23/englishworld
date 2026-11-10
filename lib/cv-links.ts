import { createHmac, timingSafeEqual } from "crypto"

// CVs live in a private Blob store. The sheet gets a link to /api/cv that carries an
// HMAC of the blob pathname, so only people with the sheet can open them.

function secret(): string {
  const key = process.env.CV_LINK_SECRET || process.env.BLOB_READ_WRITE_TOKEN
  if (!key) throw new Error("Missing CV_LINK_SECRET / BLOB_READ_WRITE_TOKEN")
  return key
}

export function signCvPath(pathname: string): string {
  return createHmac("sha256", secret()).update(pathname).digest("hex")
}

export function isValidCvSignature(pathname: string, signature: string): boolean {
  const expected = Buffer.from(signCvPath(pathname), "hex")
  const given = Buffer.from(signature, "hex")
  return given.length === expected.length && timingSafeEqual(given, expected)
}

export function cvLink(origin: string, pathname: string): string {
  return `${origin}/api/cv?p=${encodeURIComponent(pathname)}&s=${signCvPath(pathname)}`
}
