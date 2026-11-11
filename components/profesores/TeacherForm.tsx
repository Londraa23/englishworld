"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ChevronLeft, CheckCircle2, Sparkles, User, Mail, Phone, Globe, FileText, Upload, X } from "lucide-react"
import { Stepper } from "@/components/inscripcion/Stepper"
import { FieldError } from "@/components/inscripcion/FieldError"
import { DAYS, SLOTS, EXPERIENCE, QUALIFICATIONS, CV_MAX_BYTES, CV_TYPES } from "@/lib/teacher-application"

/* ─────────────────────── Types ─────────────────────── */

interface FormData {
  nombre: string
  email: string
  telefono: string
  nacionalidad: string
  edad: string
  experiencia: string
  titulacion: string[]
  cambridge: string
  disponibilidad: string[]
  horas: string
  incorporacion: string
  mensaje: string
  consentimiento: boolean
}

const initialFormData: FormData = {
  nombre: "",
  email: "",
  telefono: "",
  nacionalidad: "",
  edad: "",
  experiencia: "",
  titulacion: [],
  cambridge: "",
  disponibilidad: [],
  horas: "",
  incorporacion: "",
  mensaje: "",
  consentimiento: false,
}

const steps = [
  { id: "you", label: "About you" },
  { id: "availability", label: "Availability" },
  { id: "cv", label: "CV" },
]

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
}

function fireFbq(event: "track" | "trackCustom", name: string) {
  if (typeof window === "undefined") return
  const fbq = (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq
  if (fbq) fbq(event, name)
}

const inputClass = (hasError?: string) =>
  `w-full bg-cream/40 py-3 rounded-xl font-dm-sans text-base text-navy
  border transition-colors duration-200 focus:outline-none placeholder:text-navy/20
  ${hasError ? "border-red/40 bg-red/5" : "border-sand focus:border-sky"}`

const chipClass = (active: boolean) =>
  `py-2.5 px-3 rounded-xl font-satoshi font-semibold text-sm transition-all duration-200 border
  ${active ? "bg-navy text-white border-navy shadow-md shadow-navy/15" : "bg-cream/40 text-navy border-sand hover:border-navy/20"}`

function Label({ htmlFor, children, required }: { htmlFor?: string; children: React.ReactNode; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="block font-dm-sans text-xs text-navy/60 font-medium mb-1.5">
      {children} {required && <span className="text-red">*</span>}
    </label>
  )
}

/* ─────────────────────── Component ─────────────────────── */

export function TeacherForm() {
  const trackingParams = useRef({ fbclid: "", utmSource: "", utmMedium: "", utmCampaign: "" })
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    trackingParams.current = {
      fbclid: params.get("fbclid") || "",
      utmSource: params.get("utm_source") || "",
      utmMedium: params.get("utm_medium") || "",
      utmCampaign: params.get("utm_campaign") || "",
    }
  }, [])

  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [cv, setCv] = useState<File | null>(null)
  const [currentStep, setCurrentStep] = useState(0)
  const [direction, setDirection] = useState(0)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const fileInput = useRef<HTMLInputElement>(null)

  const update = <K extends keyof FormData>(field: K, value: FormData[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => { const n = { ...prev }; delete n[field]; return n })
  }

  const toggle = (field: "titulacion" | "disponibilidad", value: string) => {
    const current = formData[field]
    update(field, current.includes(value) ? current.filter((v) => v !== value) : [...current, value])
  }

  const pickCv = (file: File | undefined) => {
    setErrors((prev) => { const n = { ...prev }; delete n.cv; return n })
    if (!file) return
    if (!CV_TYPES[file.type]) return setErrors((e) => ({ ...e, cv: "Please upload a PDF or Word file" }))
    if (file.size > CV_MAX_BYTES) return setErrors((e) => ({ ...e, cv: "The file must be smaller than 4 MB" }))
    setCv(file)
  }

  const validateStep = (): boolean => {
    const e: Record<string, string> = {}
    if (currentStep === 0) {
      if (!formData.nombre.trim()) e.nombre = "Please tell us your name"
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) e.email = "Please enter a valid email"
      if (!/^[0-9+\-\s()]{6,20}$/.test(formData.telefono.trim())) e.telefono = "Please enter a valid phone number"
      if (!formData.nacionalidad.trim()) e.nacionalidad = "Where are you from?"
    }
    if (currentStep === 1) {
      if (formData.disponibilidad.length === 0) e.disponibilidad = "Tap the slots when you could teach"
      if (!formData.experiencia) e.experiencia = "Choose an option"
    }
    if (currentStep === 2) {
      if (!cv) e.cv = "Please attach your CV"
      if (!formData.consentimiento) e.consentimiento = "We need your consent to process your application"
    }
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const submit = async (): Promise<boolean> => {
    const body = new window.FormData()
    for (const [key, value] of Object.entries(formData)) {
      body.append(key, Array.isArray(value) ? value.join(",") : typeof value === "boolean" ? (value ? "si" : "no") : value)
    }
    for (const [key, value] of Object.entries(trackingParams.current)) body.append(key, value)
    if (cv) body.append("cv", cv)

    try {
      const res = await fetch("/api/teacher-application", { method: "POST", body })
      if (!res.ok) throw new Error(`Request failed (${res.status})`)
      return true
    } catch (err) {
      console.error("Error sending application", err)
      const detail = err instanceof Error ? err.message : String(err)
      setErrors({ submit: `We couldn't send your application. Please try again. [${detail}]` })
      return false
    }
  }

  const nextStep = async () => {
    if (!validateStep()) return

    if (currentStep < steps.length - 1) {
      if (currentStep === 0) fireFbq("trackCustom", "TeacherApplicationStarted")
      setDirection(1)
      setCurrentStep((s) => s + 1)
      return
    }

    setIsSubmitting(true)
    const ok = await submit()
    setIsSubmitting(false)
    if (!ok) return
    fireFbq("track", "SubmitApplication")
    setSubmitted(true)
  }

  const prevStep = () => {
    setDirection(-1)
    setCurrentStep((s) => Math.max(s - 1, 0))
  }

  /* ── Success screen ── */
  if (submitted) {
    return (
      <div className="flex items-center justify-center px-6 py-16">
        <motion.div initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", damping: 15 }} className="text-center max-w-sm mx-auto relative">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring", damping: 12 }}
            className="w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-500/10 flex items-center justify-center">
            <motion.div initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 0.4, type: "spring", damping: 10 }}>
              <CheckCircle2 className="w-11 h-11 text-emerald-500" />
            </motion.div>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="font-satoshi font-bold text-2xl text-navy mb-2">
            Thank you, {formData.nombre.split(" ")[0]}!
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="font-dm-sans text-navy/55 text-base leading-relaxed">
            We&apos;ve received your application and CV. We&apos;ll review it and get in touch with you soon.<br />
            <span className="text-red font-medium">Talk soon!</span>
          </motion.p>

          {[...Array(5)].map((_, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 0 }} animate={{ opacity: [0, 1, 0], y: [-10, -60 - i * 15], x: [0, (i % 2 === 0 ? 1 : -1) * (15 + i * 12)] }}
              transition={{ delay: 0.4 + i * 0.08, duration: 1.2, ease: "easeOut" }} className="absolute left-1/2 top-1/4 pointer-events-none">
              <Sparkles className="w-4 h-4 text-gold" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    )
  }

  /* ── Main form ── */
  return (
    <div id="teacher-form" className="w-full max-w-md mx-auto px-4">
      <div className="bg-white rounded-3xl shadow-lg shadow-navy/5 border border-sand/60 p-5 sm:p-6">
        <Stepper steps={steps} currentStep={currentStep} />

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentStep}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              {currentStep === 0 && (
                <div className="space-y-4">
                  <div>
                    <h3 className="font-satoshi font-bold text-xl text-navy">Hi there! 👋</h3>
                    <p className="font-dm-sans text-navy/45 text-sm mt-0.5">Tell us a bit about yourself</p>
                  </div>

                  <div>
                    <Label htmlFor="t-nombre" required>Full name</Label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-navy/20" />
                      <input id="t-nombre" type="text" autoComplete="name" placeholder="e.g. Emma Johnson"
                        value={formData.nombre} onChange={(e) => update("nombre", e.target.value)}
                        className={`${inputClass(errors.nombre)} pl-10 pr-3`} />
                    </div>
                    <FieldError message={errors.nombre} />
                  </div>

                  <div>
                    <Label htmlFor="t-email" required>Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-navy/20" />
                      <input id="t-email" type="email" autoComplete="email" placeholder="you@example.com"
                        value={formData.email} onChange={(e) => update("email", e.target.value)}
                        className={`${inputClass(errors.email)} pl-10 pr-3`} />
                    </div>
                    <FieldError message={errors.email} />
                  </div>

                  <div>
                    <Label htmlFor="t-telefono" required>Phone / WhatsApp</Label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-navy/20" />
                      <input id="t-telefono" type="tel" autoComplete="tel" placeholder="e.g. 612 345 678"
                        value={formData.telefono} onChange={(e) => update("telefono", e.target.value)}
                        className={`${inputClass(errors.telefono)} pl-10 pr-3`} />
                    </div>
                    <FieldError message={errors.telefono} />
                  </div>

                  <div>
                    <Label htmlFor="t-nacionalidad" required>Where are you from?</Label>
                    <div className="relative">
                      <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-navy/20" />
                      <input id="t-nacionalidad" type="text" placeholder="e.g. UK, Ireland, USA…"
                        value={formData.nacionalidad} onChange={(e) => update("nacionalidad", e.target.value)}
                        className={`${inputClass(errors.nacionalidad)} pl-10 pr-3`} />
                    </div>
                    <FieldError message={errors.nacionalidad} />
                  </div>

                  <div>
                    <Label htmlFor="t-edad">How old are you?</Label>
                    <input id="t-edad" type="text" inputMode="numeric" maxLength={2} placeholder="e.g. 28"
                      value={formData.edad} onChange={(e) => update("edad", e.target.value.replace(/\D/g, ""))}
                      className={`${inputClass()} px-3`} />
                    <p className="font-dm-sans text-xs text-navy/45 mt-1.5">Optional, but it helps us match you with the right groups 🙂</p>
                  </div>
                </div>
              )}

              {currentStep === 1 && (
                <div className="space-y-4">
                  <div>
                    <h3 className="font-satoshi font-bold text-xl text-navy">When can you teach? 🗓️</h3>
                    <p className="font-dm-sans text-navy/45 text-sm mt-0.5">Tap every slot that works for you</p>
                  </div>

                  <div>
                    <div className="grid grid-cols-[auto_repeat(5,minmax(0,1fr))] gap-1.5 items-center">
                      <span />
                      {DAYS.map((d) => (
                        <span key={d.id} className="text-center font-satoshi font-bold text-xs text-navy/60">{d.label}</span>
                      ))}
                      {SLOTS.map((s) => (
                        <div key={s.id} className="contents">
                          <span className="pr-1 font-dm-sans text-[11px] leading-tight text-navy/60">
                            {s.label}<br /><span className="text-navy/35">{s.hours}</span>
                          </span>
                          {DAYS.map((d) => {
                            const key = `${d.id}-${s.id}`
                            const active = formData.disponibilidad.includes(key)
                            return (
                              <motion.button key={key} type="button" whileTap={{ scale: 0.9 }} onClick={() => toggle("disponibilidad", key)}
                                aria-pressed={active} aria-label={`${d.label} ${s.label}`}
                                className={`h-10 rounded-lg border transition-colors duration-200 flex items-center justify-center
                                  ${active ? "bg-navy border-navy" : "bg-cream/40 border-sand hover:border-navy/20"}`}>
                                {active && <CheckCircle2 className="w-4 h-4 text-white" />}
                              </motion.button>
                            )
                          })}
                        </div>
                      ))}
                    </div>
                    <FieldError message={errors.disponibilidad} />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="min-w-0">
                      <Label htmlFor="t-horas">Hours per week</Label>
                      <input id="t-horas" type="text" inputMode="numeric" placeholder="e.g. 15"
                        value={formData.horas} onChange={(e) => update("horas", e.target.value)}
                        className={`${inputClass()} px-3`} />
                    </div>
                    <div className="min-w-0">
                      <Label htmlFor="t-incorporacion">Available from</Label>
                      <input id="t-incorporacion" type="text" placeholder="e.g. Right away"
                        value={formData.incorporacion} onChange={(e) => update("incorporacion", e.target.value)}
                        className={`${inputClass()} px-3`} />
                    </div>
                  </div>

                  <div>
                    <Label required>Teaching experience</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {EXPERIENCE.map((opt) => (
                        <motion.button key={opt.value} type="button" whileTap={{ scale: 0.97 }} onClick={() => update("experiencia", opt.label)}
                          className={chipClass(formData.experiencia === opt.label)}>
                          {opt.label}
                        </motion.button>
                      ))}
                    </div>
                    <FieldError message={errors.experiencia} />
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-4">
                  <div>
                    <h3 className="font-satoshi font-bold text-xl text-navy">Almost done 🎯</h3>
                    <p className="font-dm-sans text-navy/45 text-sm mt-0.5">Your qualifications and CV</p>
                  </div>

                  <div>
                    <Label>Qualifications</Label>
                    <div className="flex flex-wrap gap-2">
                      {QUALIFICATIONS.map((q) => (
                        <motion.button key={q} type="button" whileTap={{ scale: 0.97 }} onClick={() => toggle("titulacion", q)}
                          className={chipClass(formData.titulacion.includes(q))}>
                          {q}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label>Have you prepared students for Cambridge exams?</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {["Yes", "No"].map((opt) => (
                        <motion.button key={opt} type="button" whileTap={{ scale: 0.97 }} onClick={() => update("cambridge", opt)}
                          className={chipClass(formData.cambridge === opt)}>
                          {opt}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label required>Your CV</Label>
                    <input ref={fileInput} type="file" className="hidden"
                      accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      onChange={(e) => { pickCv(e.target.files?.[0]); e.target.value = "" }} />
                    {cv ? (
                      <div className="flex items-center gap-3 bg-cream/40 border border-sand rounded-xl px-3 py-3">
                        <FileText className="w-5 h-5 text-red shrink-0" />
                        <span className="flex-1 min-w-0 truncate font-dm-sans text-sm text-navy">{cv.name}</span>
                        <button type="button" onClick={() => setCv(null)} aria-label="Remove CV"
                          className="p-1 rounded-lg text-navy/40 hover:text-navy hover:bg-sand/60 transition-colors">
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <button type="button" onClick={() => fileInput.current?.click()}
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={(e) => { e.preventDefault(); pickCv(e.dataTransfer.files?.[0]) }}
                        className={`w-full flex flex-col items-center gap-1.5 py-5 rounded-xl border-2 border-dashed transition-colors duration-200
                          ${errors.cv ? "border-red/40 bg-red/5" : "border-sand bg-cream/40 hover:border-sky"}`}>
                        <Upload className="w-5 h-5 text-navy/40" />
                        <span className="font-satoshi font-semibold text-sm text-navy">Upload your CV</span>
                        <span className="font-dm-sans text-[11px] text-navy/40">PDF or Word · max 4 MB</span>
                      </button>
                    )}
                    <FieldError message={errors.cv} />
                  </div>

                  <div>
                    <Label htmlFor="t-mensaje">Anything else you&apos;d like to tell us?</Label>
                    <textarea id="t-mensaje" rows={3} placeholder="Optional"
                      value={formData.mensaje} onChange={(e) => update("mensaje", e.target.value)}
                      className={`${inputClass()} px-3 resize-none`} />
                  </div>

                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input type="checkbox" checked={formData.consentimiento} onChange={(e) => update("consentimiento", e.target.checked)}
                      className="mt-0.5 w-4 h-4 accent-navy shrink-0" />
                    <span className="font-dm-sans text-[12px] text-navy/55 leading-relaxed">
                      I agree that English World may store my details and CV to assess my application, as described in the{" "}
                      <Link href="/privacidad" prefetch={false} className="underline hover:text-navy">privacy policy</Link>.
                    </span>
                  </label>
                  <FieldError message={errors.consentimiento} />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-5 flex gap-2">
          {currentStep > 0 && (
            <motion.button whileTap={{ scale: 0.97 }} onClick={prevStep}
              className="flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl
                bg-cream/60 border border-sand text-navy font-satoshi font-semibold text-sm
                transition-colors duration-200 hover:border-navy/20 active:bg-sand/50"
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </motion.button>
          )}

          <motion.button whileTap={{ scale: 0.97 }} onClick={nextStep} disabled={isSubmitting}
            className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl
              bg-navy text-white font-satoshi font-bold text-sm disabled:opacity-60
              shadow-lg shadow-navy/15 transition-colors duration-200 hover:bg-navy/90 active:bg-navy/80"
          >
            {isSubmitting
              ? "Sending..."
              : currentStep === steps.length - 1
                ? "Send my application"
                : "Next"}
            {!isSubmitting && <ChevronRight className="w-4 h-4" />}
          </motion.button>
        </div>
        <FieldError message={errors.submit} />
      </div>

      <p className="mt-3 font-dm-sans text-[10px] text-navy/30 text-center leading-relaxed">
        🔒 Your details and CV are only used to review your application.
      </p>
    </div>
  )
}
