"use client"

import { motion } from "framer-motion"
import { FieldError } from "../FieldError"

const opciones = [
  { value: "yo", label: "Para mí", emoji: "🙋" },
  { value: "hijo", label: "Para mi hijo/a", emoji: "👦" },
  { value: "adolescente", label: "Para un adolescente", emoji: "🎓" },
] as const

interface StepParaQuienProps {
  value: string
  onChange: (value: string) => void
  error?: string
}

export function StepParaQuien({ value, onChange, error }: StepParaQuienProps) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-satoshi font-bold text-xl text-navy">¡Hola! 👋</h3>
        <p className="font-dm-sans text-navy/45 text-sm mt-0.5">¿Para quién buscas clases?</p>
      </div>

      <div className="space-y-2">
        {opciones.map((opt) => (
          <motion.button
            key={opt.value}
            whileTap={{ scale: 0.97 }}
            onClick={() => onChange(opt.value)}
            className={`w-full flex items-center gap-3 py-3 px-4 rounded-xl font-satoshi font-semibold text-sm transition-all duration-200 border
              ${value === opt.value
                ? "bg-navy text-white border-navy shadow-md shadow-navy/15"
                : "bg-cream/40 text-navy border-sand hover:border-navy/20"}`}
          >
            <span className="text-lg">{opt.emoji}</span>
            {opt.label}
          </motion.button>
        ))}
      </div>
      <FieldError message={error} />
    </div>
  )
}
