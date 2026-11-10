// Shared between the /profesores form and /api/teacher-application.

export const DAYS = [
  { id: "mon", label: "Mon" },
  { id: "tue", label: "Tue" },
  { id: "wed", label: "Wed" },
  { id: "thu", label: "Thu" },
  { id: "fri", label: "Fri" },
] as const

export const SLOTS = [
  { id: "morning", label: "Morning", hours: "9–14h" },
  { id: "afternoon", label: "Afternoon", hours: "15–18h" },
  { id: "evening", label: "Evening", hours: "18–21h" },
] as const

export const EXPERIENCE = [
  { value: "none", label: "No experience yet" },
  { value: "<1", label: "Less than 1 year" },
  { value: "1-3", label: "1–3 years" },
  { value: "3+", label: "More than 3 years" },
] as const

export const QUALIFICATIONS = ["CELTA", "TEFL / TESOL", "DELTA", "Teaching degree", "Other"] as const

export const CV_MAX_BYTES = 4 * 1024 * 1024 // Vercel functions reject bodies over 4.5 MB
export const CV_TYPES: Record<string, string> = {
  "application/pdf": "pdf",
  "application/msword": "doc",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "docx",
}

/** "mon-morning,tue-evening" → "Lun: mañana · Mar: tarde-noche" for the sheet */
export function availabilityToText(slots: string[]): string {
  const es: Record<string, string> = {
    mon: "Lun", tue: "Mar", wed: "Mié", thu: "Jue", fri: "Vie",
    morning: "mañana (9–14)", afternoon: "tarde (15–18)", evening: "noche (18–21)",
  }
  return DAYS.map((d) => {
    const daySlots = SLOTS.filter((s) => slots.includes(`${d.id}-${s.id}`)).map((s) => es[s.id])
    return daySlots.length ? `${es[d.id]}: ${daySlots.join(", ")}` : null
  })
    .filter(Boolean)
    .join(" · ")
}
