"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  User,
  Phone,
  BookOpen,
  GraduationCap,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Check,
} from "lucide-react"

/* ─────────────────────── Types ─────────────────────── */

interface FormData {
  nombre: string
  telefono: string
  haEstudiadoIngles: "si" | "no" | ""
  nivel: string
  anosEstudiando: string
  cursoInteres: string
  horarioPreferido: string
  comoNosConociste: string
  comentarios: string
}

const initialFormData: FormData = {
  nombre: "",
  telefono: "",
  haEstudiadoIngles: "",
  nivel: "",
  anosEstudiando: "",
  cursoInteres: "",
  horarioPreferido: "",
  comoNosConociste: "",
  comentarios: "",
}

/* ─────────────────────── Step Config ─────────────────────── */

const steps = [
  { id: "personal", label: "Datos", icon: User },
  { id: "experiencia", label: "Experiencia", icon: BookOpen },
  { id: "curso", label: "Curso", icon: GraduationCap },
  { id: "extra", label: "Extra", icon: MessageCircle },
]

const niveles = [
  { value: "principiante", label: "Principiante", desc: "No sé casi nada" },
  { value: "a1", label: "A1", desc: "Nivel básico" },
  { value: "a2", label: "A2", desc: "Nivel elemental" },
  { value: "b1", label: "B1", desc: "Intermedio" },
  { value: "b2", label: "B2", desc: "Intermedio alto" },
  { value: "c1", label: "C1", desc: "Avanzado" },
  { value: "c2", label: "C2", desc: "Dominio" },
  { value: "nosabe", label: "No lo sé", desc: "Necesito prueba de nivel" },
]

const cursos = [
  { value: "grupal-general", label: "Curso grupal general" },
  { value: "particular", label: "Clases particulares" },
  { value: "cambridge-a2", label: "Preparación Cambridge A2 (KET)" },
  { value: "cambridge-b1", label: "Preparación Cambridge B1 (PET)" },
  { value: "cambridge-b2", label: "Preparación Cambridge B2 (FCE)" },
  { value: "cambridge-c1", label: "Preparación Cambridge C1 (CAE)" },
  { value: "cambridge-c2", label: "Preparación Cambridge C2 (CPE)" },
  { value: "ninos", label: "Clases para niños" },
  { value: "intensivo", label: "Curso intensivo" },
  { value: "conversacion", label: "Conversación" },
  { value: "nosabe", label: "No estoy seguro/a" },
]

const horarios = [
  { value: "manana", label: "🌅 Mañanas" },
  { value: "tarde", label: "🌇 Tardes" },
  { value: "flexible", label: "🔄 Flexible" },
]

const anosOpciones = [
  { value: "menos-1", label: "Menos de 1 año" },
  { value: "1-3", label: "1 – 3 años" },
  { value: "3-5", label: "3 – 5 años" },
  { value: "5-10", label: "5 – 10 años" },
  { value: "mas-10", label: "Más de 10 años" },
]

/* ─────────────────────── Animation ─────────────────────── */

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
}

/* ─────────────────────── Component ─────────────────────── */

export function LeadForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [currentStep, setCurrentStep] = useState(0)
  const [direction, setDirection] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const update = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => { const n = { ...prev }; delete n[field]; return n })
  }

  const validateStep = (): boolean => {
    const e: Record<string, string> = {}
    if (currentStep === 0) {
      if (!formData.nombre.trim()) e.nombre = "Tu nombre es necesario"
      if (!formData.telefono.trim()) e.telefono = "Necesitamos tu teléfono"
      else if (!/^[0-9+\-\s]{6,15}$/.test(formData.telefono.trim()))
        e.telefono = "Introduce un número válido"
    }
    if (currentStep === 1) {
      if (!formData.haEstudiadoIngles) e.haEstudiadoIngles = "Selecciona una opción"
      if (formData.haEstudiadoIngles === "si") {
        if (!formData.nivel) e.nivel = "Selecciona tu nivel"
        if (!formData.anosEstudiando) e.anosEstudiando = "Selecciona una opción"
      }
    }
    if (currentStep === 2) {
      if (!formData.cursoInteres) e.cursoInteres = "Selecciona un curso"
    }
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const nextStep = () => { if (!validateStep()) return; setDirection(1); setCurrentStep((s) => Math.min(s + 1, steps.length - 1)) }
  const prevStep = () => { setDirection(-1); setCurrentStep((s) => Math.max(s - 1, 0)) }

  const handleSubmit = () => {
    if (!validateStep()) return
    const lines = [
      `🎓 *Nuevo lead - English World*`, ``,
      `👤 *Nombre:* ${formData.nombre}`,
      `📱 *Teléfono:* ${formData.telefono}`,
      `📚 *¿Ha estudiado inglés?:* ${formData.haEstudiadoIngles === "si" ? "Sí" : "No"}`,
    ]
    if (formData.haEstudiadoIngles === "si") {
      lines.push(`📊 *Nivel:* ${niveles.find((n) => n.value === formData.nivel)?.label || formData.nivel}`)
      lines.push(`⏳ *Años estudiando:* ${anosOpciones.find((a) => a.value === formData.anosEstudiando)?.label || formData.anosEstudiando}`)
    }
    lines.push(`🎯 *Curso interesado:* ${cursos.find((c) => c.value === formData.cursoInteres)?.label || formData.cursoInteres}`)
    if (formData.horarioPreferido) lines.push(`🕐 *Horario preferido:* ${horarios.find((h) => h.value === formData.horarioPreferido)?.label || formData.horarioPreferido}`)
    if (formData.comoNosConociste) lines.push(`📣 *Cómo nos conoció:* ${formData.comoNosConociste}`)
    if (formData.comentarios) lines.push(`💬 *Comentarios:* ${formData.comentarios}`)
    window.open(`https://wa.me/34651859939?text=${encodeURIComponent(lines.join("\n"))}`, "_blank")
    setSubmitted(true)
  }

  /* ── Error helper ── */
  const FieldError = ({ field }: { field: string }) =>
    errors[field] ? (
      <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-red text-xs font-dm-sans mt-1 pl-1">
        {errors[field]}
      </motion.p>
    ) : null

  /* ── Success ── */
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
            ¡Mensaje enviado!
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="font-dm-sans text-navy/55 text-base leading-relaxed">
            Nos pondremos en contacto contigo muy pronto.<br />
            <span className="text-red font-medium">¡Bienvenido/a a English World!</span>
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

  /* ── Main Form ── */
  return (
    <div className="w-full max-w-md mx-auto px-4">
      {/* Card wrapper */}
      <div className="bg-white rounded-3xl shadow-lg shadow-navy/5 border border-sand/60 p-5 sm:p-6">

        {/* ── Stepper ── */}
        <div className="flex items-center mb-6">
          {steps.map((step, i) => {
            const isActive = i === currentStep
            const isComplete = i < currentStep
            return (
              <div key={step.id} className="flex items-center flex-1 last:flex-none">
                {/* Step dot */}
                <div className="flex flex-col items-center">
                  <motion.div
                    animate={{
                      backgroundColor: isComplete ? "#CF142B" : isActive ? "#002868" : "#E8DCC8",
                      scale: isActive ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.25 }}
                    className="w-8 h-8 rounded-full flex items-center justify-center relative"
                  >
                    {isComplete ? (
                      <Check className="w-4 h-4 text-white" strokeWidth={3} />
                    ) : (
                      <span className={`font-satoshi font-bold text-xs ${isActive ? "text-white" : "text-navy/25"}`}>
                        {i + 1}
                      </span>
                    )}
                  </motion.div>
                  <span className={`font-dm-sans text-[10px] mt-1 whitespace-nowrap ${isActive ? "text-navy font-medium" : isComplete ? "text-red" : "text-navy/25"}`}>
                    {step.label}
                  </span>
                </div>
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="flex-1 h-0.5 mx-2 mt-[-14px] rounded-full overflow-hidden bg-sand/80">
                    <motion.div
                      animate={{ width: isComplete ? "100%" : "0%" }}
                      transition={{ duration: 0.35 }}
                      className="h-full bg-red rounded-full"
                    />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* ── Step content ── */}
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

              {/* Step 0: Personal */}
              {currentStep === 0 && (
                <div className="space-y-4">
                  <div>
                    <h3 className="font-satoshi font-bold text-xl text-navy">¡Hola! 👋</h3>
                    <p className="font-dm-sans text-navy/45 text-sm mt-0.5">Cuéntanos un poco sobre ti</p>
                  </div>

                  <div>
                    <label htmlFor="lead-nombre" className="block font-dm-sans text-xs text-navy/60 font-medium mb-1.5">
                      Nombre completo <span className="text-red">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-navy/20" />
                      <input
                        id="lead-nombre" type="text" placeholder="Ej: María García"
                        value={formData.nombre} onChange={(e) => update("nombre", e.target.value)}
                        className={`w-full bg-cream/40 pl-10 pr-3 py-3 rounded-xl font-dm-sans text-sm text-navy
                          border transition-colors duration-200 focus:outline-none placeholder:text-navy/20
                          ${errors.nombre ? "border-red/40 bg-red/5" : "border-sand focus:border-sky"}`}
                      />
                    </div>
                    <FieldError field="nombre" />
                  </div>

                  <div>
                    <label htmlFor="lead-telefono" className="block font-dm-sans text-xs text-navy/60 font-medium mb-1.5">
                      Número de teléfono <span className="text-red">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-navy/20" />
                      <input
                        id="lead-telefono" type="tel" placeholder="Ej: 612 345 678"
                        value={formData.telefono} onChange={(e) => update("telefono", e.target.value)}
                        className={`w-full bg-cream/40 pl-10 pr-3 py-3 rounded-xl font-dm-sans text-sm text-navy
                          border transition-colors duration-200 focus:outline-none placeholder:text-navy/20
                          ${errors.telefono ? "border-red/40 bg-red/5" : "border-sand focus:border-sky"}`}
                      />
                    </div>
                    <FieldError field="telefono" />
                  </div>
                </div>
              )}

              {/* Step 1: Experiencia */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <div>
                    <h3 className="font-satoshi font-bold text-xl text-navy">Tu experiencia 📚</h3>
                    <p className="font-dm-sans text-navy/45 text-sm mt-0.5">Así sabremos desde dónde empezar</p>
                  </div>

                  <div>
                    <label className="block font-dm-sans text-xs text-navy/60 font-medium mb-2">
                      ¿Has estudiado inglés antes? <span className="text-red">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {(["si", "no"] as const).map((opt) => (
                        <motion.button key={opt} whileTap={{ scale: 0.97 }}
                          onClick={() => { update("haEstudiadoIngles", opt); if (opt === "no") { update("nivel", ""); update("anosEstudiando", "") } }}
                          className={`py-3 rounded-xl font-satoshi font-semibold text-sm transition-all duration-200 border
                            ${formData.haEstudiadoIngles === opt
                              ? "bg-navy text-white border-navy shadow-md shadow-navy/15"
                              : "bg-cream/40 text-navy border-sand hover:border-navy/20"}`}
                        >
                          {opt === "si" ? "✅ Sí" : "🆕 No, nunca"}
                        </motion.button>
                      ))}
                    </div>
                    <FieldError field="haEstudiadoIngles" />
                  </div>

                  <AnimatePresence>
                    {formData.haEstudiadoIngles === "si" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden space-y-4"
                      >
                        {/* Nivel */}
                        <div>
                          <label className="block font-dm-sans text-xs text-navy/60 font-medium mb-2">
                            ¿Qué nivel crees que tienes? <span className="text-red">*</span>
                          </label>
                          <div className="grid grid-cols-2 gap-1.5">
                            {niveles.map((n) => (
                              <motion.button key={n.value} whileTap={{ scale: 0.97 }}
                                onClick={() => update("nivel", n.value)}
                                className={`text-left px-3 py-2 rounded-lg transition-all duration-200 border
                                  ${formData.nivel === n.value
                                    ? "bg-sky/10 border-sky text-navy"
                                    : "bg-cream/40 border-sand hover:border-navy/15"}`}
                              >
                                <span className="font-satoshi font-semibold text-xs block">{n.label}</span>
                                <span className="font-dm-sans text-[10px] text-navy/35 leading-tight">{n.desc}</span>
                              </motion.button>
                            ))}
                          </div>
                          <FieldError field="nivel" />
                        </div>

                        {/* Años */}
                        <div>
                          <label className="block font-dm-sans text-xs text-navy/60 font-medium mb-2">
                            ¿Cuánto tiempo llevas? <span className="text-red">*</span>
                          </label>
                          <div className="flex flex-wrap gap-1.5">
                            {anosOpciones.map((a) => (
                              <motion.button key={a.value} whileTap={{ scale: 0.97 }}
                                onClick={() => update("anosEstudiando", a.value)}
                                className={`px-3 py-2 rounded-lg text-xs font-dm-sans transition-all duration-200 border
                                  ${formData.anosEstudiando === a.value
                                    ? "bg-sky/10 border-sky text-navy font-medium"
                                    : "bg-cream/40 border-sand hover:border-navy/15 text-navy/60"}`}
                              >
                                {a.label}
                              </motion.button>
                            ))}
                          </div>
                          <FieldError field="anosEstudiando" />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

              {/* Step 2: Curso */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <div>
                    <h3 className="font-satoshi font-bold text-xl text-navy">¿Qué te interesa? 🎯</h3>
                    <p className="font-dm-sans text-navy/45 text-sm mt-0.5">Selecciona el curso que más te encaja</p>
                  </div>

                  <div>
                    <label className="block font-dm-sans text-xs text-navy/60 font-medium mb-2">
                      Curso de interés <span className="text-red">*</span>
                    </label>
                    <div className="grid grid-cols-1 gap-1.5 max-h-[200px] overflow-y-auto pr-1 scrollbar-thin">
                      {cursos.map((c) => (
                        <motion.button key={c.value} whileTap={{ scale: 0.98 }}
                          onClick={() => update("cursoInteres", c.value)}
                          className={`w-full text-left px-3 py-2.5 rounded-lg transition-all duration-200 border font-dm-sans text-sm
                            ${formData.cursoInteres === c.value
                              ? "bg-red/8 border-red/60 text-navy font-medium"
                              : "bg-cream/40 border-sand hover:border-navy/15 text-navy/60"}`}
                        >
                          {c.label}
                        </motion.button>
                      ))}
                    </div>
                    <FieldError field="cursoInteres" />
                  </div>

                  <div>
                    <label className="block font-dm-sans text-xs text-navy/60 font-medium mb-2">
                      Horario preferido
                    </label>
                    <div className="grid grid-cols-3 gap-1.5">
                      {horarios.map((h) => (
                        <motion.button key={h.value} whileTap={{ scale: 0.97 }}
                          onClick={() => update("horarioPreferido", h.value)}
                          className={`py-2.5 rounded-lg font-dm-sans text-xs transition-all duration-200 border text-center
                            ${formData.horarioPreferido === h.value
                              ? "bg-gold/10 border-gold/60 text-navy font-medium"
                              : "bg-cream/40 border-sand hover:border-navy/15 text-navy/50"}`}
                        >
                          {h.label}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Extra */}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <div>
                    <h3 className="font-satoshi font-bold text-xl text-navy">Casi listo ✨</h3>
                    <p className="font-dm-sans text-navy/45 text-sm mt-0.5">¿Algo más que quieras contarnos?</p>
                  </div>

                  <div>
                    <label htmlFor="lead-como" className="block font-dm-sans text-xs text-navy/60 font-medium mb-1.5">
                      ¿Cómo nos conociste?
                    </label>
                    <select id="lead-como" value={formData.comoNosConociste}
                      onChange={(e) => update("comoNosConociste", e.target.value)}
                      className="w-full bg-cream/40 px-3 py-3 rounded-xl font-dm-sans text-sm text-navy
                        border border-sand focus:border-sky transition-colors duration-200 focus:outline-none appearance-none cursor-pointer"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="instagram">Instagram</option>
                      <option value="facebook">Facebook</option>
                      <option value="google">Google</option>
                      <option value="amigo">Un amigo/conocido</option>
                      <option value="paso-por-delante">Pasé por delante</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="lead-comentarios" className="block font-dm-sans text-xs text-navy/60 font-medium mb-1.5">
                      Comentarios adicionales
                    </label>
                    <textarea id="lead-comentarios" placeholder="Ej: Horarios especiales, dudas…"
                      value={formData.comentarios} onChange={(e) => update("comentarios", e.target.value)}
                      rows={2}
                      className="w-full bg-cream/40 px-3 py-3 rounded-xl font-dm-sans text-sm text-navy
                        border border-sand focus:border-sky transition-colors duration-200 focus:outline-none resize-none placeholder:text-navy/20"
                    />
                  </div>

                  {/* Summary */}
                  <div className="bg-cream/60 rounded-xl p-3 space-y-1.5">
                    <p className="font-dm-mono text-[10px] text-navy/30 uppercase tracking-wider">Resumen</p>
                    <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-0.5 font-dm-sans text-xs">
                      <span className="text-navy/40">Nombre</span>
                      <span className="text-navy font-medium truncate">{formData.nombre}</span>
                      <span className="text-navy/40">Teléfono</span>
                      <span className="text-navy font-medium">{formData.telefono}</span>
                      <span className="text-navy/40">Experiencia</span>
                      <span className="text-navy font-medium">{formData.haEstudiadoIngles === "si" ? "Sí" : "No"}</span>
                      {formData.nivel && (<>
                        <span className="text-navy/40">Nivel</span>
                        <span className="text-navy font-medium">{niveles.find((n) => n.value === formData.nivel)?.label}</span>
                      </>)}
                      <span className="text-navy/40">Curso</span>
                      <span className="text-navy font-medium truncate">{cursos.find((c) => c.value === formData.cursoInteres)?.label}</span>
                    </div>
                  </div>
                </div>
              )}

            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Navigation ── */}
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

          {currentStep < steps.length - 1 ? (
            <motion.button whileTap={{ scale: 0.97 }} onClick={nextStep}
              className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl
                bg-navy text-white font-satoshi font-bold text-sm
                shadow-lg shadow-navy/15 transition-colors duration-200 hover:bg-navy/90 active:bg-navy/80"
            >
              Siguiente
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          ) : (
            <motion.button whileTap={{ scale: 0.97 }} onClick={handleSubmit}
              className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl
                bg-red text-white font-satoshi font-bold text-sm
                shadow-lg shadow-red/15 transition-colors duration-200 hover:bg-red/90 active:bg-red/80"
            >
              Enviar por WhatsApp
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          )}
        </div>

      </div>

      {/* Privacy */}
      <p className="mt-3 font-dm-sans text-[10px] text-navy/30 text-center leading-relaxed">
        🔒 Tus datos están seguros. Solo los usaremos para contactarte.
      </p>
    </div>
  )
}
