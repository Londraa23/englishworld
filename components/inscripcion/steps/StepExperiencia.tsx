"use client"

import { motion, AnimatePresence } from "framer-motion"
import { FieldError } from "../FieldError"

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

interface StepExperienciaProps {
  haEstudiadoIngles: "si" | "no" | ""
  nivel: string
  onChangeHaEstudiado: (value: "si" | "no") => void
  onChangeNivel: (value: string) => void
  error?: string
}

export function StepExperiencia({ haEstudiadoIngles, nivel, onChangeHaEstudiado, onChangeNivel, error }: StepExperienciaProps) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-satoshi font-bold text-xl text-navy">Tu experiencia 📚</h3>
        <p className="font-dm-sans text-navy/45 text-sm mt-0.5">Así preparamos tu clase ideal</p>
      </div>

      <div>
        <label className="block font-dm-sans text-xs text-navy/60 font-medium mb-2">
          ¿Has estudiado inglés antes?
        </label>
        <div className="grid grid-cols-2 gap-2">
          {(["si", "no"] as const).map((opt) => (
            <motion.button key={opt} whileTap={{ scale: 0.97 }}
              onClick={() => onChangeHaEstudiado(opt)}
              className={`py-3 rounded-xl font-satoshi font-semibold text-sm transition-all duration-200 border
                ${haEstudiadoIngles === opt
                  ? "bg-navy text-white border-navy shadow-md shadow-navy/15"
                  : "bg-cream/40 text-navy border-sand hover:border-navy/20"}`}
            >
              {opt === "si" ? "✅ Sí" : "🆕 No, nunca"}
            </motion.button>
          ))}
        </div>
        <FieldError message={error} />
      </div>

      <AnimatePresence>
        {haEstudiadoIngles === "si" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden space-y-4"
          >
            <div>
              <label className="block font-dm-sans text-xs text-navy/60 font-medium mb-2">
                ¿Qué nivel crees que tienes?
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                {niveles.map((n) => (
                  <motion.button key={n.value} whileTap={{ scale: 0.97 }}
                    onClick={() => onChangeNivel(n.value)}
                    className={`text-left px-3 py-2 rounded-lg transition-all duration-200 border
                      ${nivel === n.value
                        ? "bg-sky/10 border-sky text-navy"
                        : "bg-cream/40 border-sand hover:border-navy/15"}`}
                  >
                    <span className="font-satoshi font-semibold text-xs block">{n.label}</span>
                    <span className="font-dm-sans text-[10px] text-navy/35 leading-tight">{n.desc}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
