// Horario reducido temporal (2 franjas) hasta esta fecha; después, horario normal.
const TEMP_SCHEDULE_UNTIL = new Date("2026-09-07T23:59:59+02:00")

export function isTemporarySchedule(now: Date = new Date()): boolean {
  return now.getTime() < TEMP_SCHEDULE_UNTIL.getTime()
}

export function getSchedule(now: Date = new Date()) {
  if (isTemporarySchedule(now)) {
    return {
      days: "Lunes a Jueves",
      hours: "11:00 – 13:00 y 18:00 – 20:00",
      openingHours: "Mo-Th 11:00-13:00,18:00-20:00",
    }
  }

  return {
    days: "Lunes a Jueves",
    hours: "9:00 – 21:00",
    openingHours: "Mo-Th 09:00-21:00",
  }
}
