"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ChevronLeft, CheckCircle2, Sparkles, ArrowRight, Phone } from "lucide-react"
import { Stepper } from "./Stepper"
import { FieldError } from "./FieldError"
import { WhatsAppButton } from "./WhatsAppButton"
import { StepParaQuien } from "./steps/StepParaQuien"
import { StepContacto } from "./steps/StepContacto"
import { StepExperiencia } from "./steps/StepExperiencia"
import { StepCuando } from "./steps/StepCuando"

/* ─────────────────────── Types ─────────────────────── */

interface FormData {
  paraQuien: "yo" | "hijo" | "adolescente" | ""
  nombre: string
  telefono: string
  haEstudiadoIngles: "si" | "no" | ""
  nivel: string
  cuando: "esta_semana" | "este_mes" | "mirando" | ""
}

const initialFormData: FormData = {
  paraQuien: "",
  nombre: "",
  telefono: "",
  haEstudiadoIngles: "",
  nivel: "",
  cuando: "",
}

const steps = [
  { id: "quien", label: "Quién" },
  { id: "contacto", label: "Contacto" },
  { id: "experiencia", label: "Experiencia" },
  { id: "cuando", label: "Cuándo" },
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

/* ─────────────────────── Component ─────────────────────── */

export function QuizForm() {
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
  const [currentStep, setCurrentStep] = useState(0)
  const [direction, setDirection] = useState(0)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [phase, setPhase] = useState<"form" | "done">("form")
  const [enriched, setEnriched] = useState(false)
  const [quizStartedFired, setQuizStartedFired] = useState(false)

  const update = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => { const n = { ...prev }; delete n[field]; return n })
  }

  const validateStep = (): boolean => {
    const e: Record<string, string> = {}
    if (currentStep === 0) {
      if (!formData.paraQuien) e.paraQuien = "Selecciona una opción"
    }
    if (currentStep === 1) {
      if (!formData.nombre.trim()) e.nombre = "Tu nombre es necesario"
      if (!formData.telefono.trim()) e.telefono = "Necesitamos tu teléfono"
      else if (!/^[0-9+\-\s]{6,15}$/.test(formData.telefono.trim()))
        e.telefono = "Introduce un número válido"
    }
    if (currentStep === 2) {
      if (!formData.haEstudiadoIngles) e.haEstudiadoIngles = "Selecciona una opción"
    }
    if (currentStep === 3) {
      if (!formData.cuando) e.cuando = "Selecciona una opción"
    }
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const submitLead = async (estado: "Parcial" | "Completo"): Promise<boolean> => {
    try {
      const res = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          estado,
          ...trackingParams.current,
        }),
      })
      if (!res.ok) throw new Error(`Request failed (${res.status})`)
      return true
    } catch (err) {
      console.error("Error saving lead", err)
      const detail = err instanceof Error ? err.message : String(err)
      setErrors({ submit: `No se pudo enviar. Inténtalo de nuevo. [${detail}]` })
      return false
    }
  }

  const nextStep = async () => {
    if (!validateStep()) return

    if (currentStep === 0) {
      if (!quizStartedFired) {
        fireFbq("trackCustom", "QuizStarted")
        setQuizStartedFired(true)
      }
      setDirection(1)
      setCurrentStep(1)
      return
    }

    if (currentStep === 1) {
      setIsSubmitting(true)
      const ok = await submitLead("Parcial")
      setIsSubmitting(false)
      if (!ok) return
      fireFbq("track", "Lead")
      setPhase("done")
      setEnriched(false)
      return
    }

    if (currentStep === 2) {
      setDirection(1)
      setCurrentStep(3)
      return
    }

    if (currentStep === 3) {
      setIsSubmitting(true)
      const ok = await submitLead("Completo")
      setIsSubmitting(false)
      if (!ok) return
      fireFbq("trackCustom", "LeadEnriquecido")
      setPhase("done")
      setEnriched(true)
      return
    }
  }

  const prevStep = () => {
    setDirection(-1)
    setCurrentStep((s) => Math.max(s - 1, 0))
  }

  const continueEnrichment = () => {
    setPhase("form")
    setDirection(1)
    setCurrentStep(2)
  }

  /* ── Done screen (reached after partial capture, or after full completion) ── */
  if (phase === "done") {
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
            ¡Perfecto, {formData.nombre.split(" ")[0]}!
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="font-dm-sans text-navy/55 text-base leading-relaxed">
            Ya tenemos tus datos. Te llamamos en menos de 24h.<br />
            <span className="text-red font-medium">¡Bienvenido/a a English World!</span>
          </motion.p>

          {!enriched && (
            <motion.button
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }}
              whileTap={{ scale: 0.97 }}
              onClick={continueEnrichment}
              className="mt-6 w-full flex items-center justify-center gap-2 bg-cream border border-sand text-navy font-satoshi font-semibold text-sm py-3 rounded-xl transition-colors hover:border-navy/20"
            >
              Cuéntanos un poco más para preparar tu clase ideal
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          )}

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }} className="mt-6 flex flex-col sm:flex-row gap-3">
            <WhatsAppButton className="flex-1 flex items-center justify-center gap-2 bg-emerald-500 text-white font-satoshi font-bold text-sm py-3 rounded-xl shadow-lg shadow-emerald-500/20 hover:bg-emerald-500/90 transition-colors">
              Escríbenos por WhatsApp
            </WhatsAppButton>
            <a
              href="tel:+34651859939"
              className="flex-1 flex items-center justify-center gap-2 border-2 border-navy text-navy font-satoshi font-bold text-sm py-3 rounded-xl hover:bg-navy/5 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Llámanos
            </a>
          </motion.div>

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
    <div id="quiz-form" className="w-full max-w-md mx-auto px-4">
      <div className="mb-4 flex items-center gap-2.5 bg-red/10 border border-red/20 rounded-2xl px-4 py-2.5">
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red" />
        </span>
        <p className="font-dm-sans text-xs sm:text-[13px] text-red leading-snug">
          Plazas limitadas para el curso 2026-27 · Matrícula con descuento hasta el 15 de septiembre
        </p>
      </div>

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
                <StepParaQuien value={formData.paraQuien} onChange={(v) => update("paraQuien", v)} error={errors.paraQuien} />
              )}
              {currentStep === 1 && (
                <StepContacto
                  nombre={formData.nombre}
                  telefono={formData.telefono}
                  onChangeNombre={(v) => update("nombre", v)}
                  onChangeTelefono={(v) => update("telefono", v)}
                  errors={{ nombre: errors.nombre, telefono: errors.telefono }}
                />
              )}
              {currentStep === 2 && (
                <StepExperiencia
                  haEstudiadoIngles={formData.haEstudiadoIngles}
                  nivel={formData.nivel}
                  onChangeHaEstudiado={(v) => { update("haEstudiadoIngles", v); if (v === "no") update("nivel", "") }}
                  onChangeNivel={(v) => update("nivel", v)}
                  error={errors.haEstudiadoIngles}
                />
              )}
              {currentStep === 3 && (
                <StepCuando value={formData.cuando} onChange={(v) => update("cuando", v)} error={errors.cuando} />
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
              Atrás
            </motion.button>
          )}

          <motion.button whileTap={{ scale: 0.97 }} onClick={nextStep} disabled={isSubmitting}
            className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl
              bg-navy text-white font-satoshi font-bold text-sm disabled:opacity-60
              shadow-lg shadow-navy/15 transition-colors duration-200 hover:bg-navy/90 active:bg-navy/80"
          >
            {isSubmitting
              ? "Enviando..."
              : currentStep === 3
                ? "Finalizar"
                : currentStep === 1
                  ? "Continuar"
                  : "Siguiente"}
            {!isSubmitting && <ChevronRight className="w-4 h-4" />}
          </motion.button>
        </div>
        <FieldError message={errors.submit} />
      </div>

      <p className="mt-3 font-dm-sans text-[10px] text-navy/30 text-center leading-relaxed">
        🔒 Tus datos están seguros. Solo los usaremos para contactarte.
      </p>
    </div>
  )
}
