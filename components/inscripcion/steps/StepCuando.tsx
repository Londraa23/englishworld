"use client"

import { motion } from "framer-motion"
import { FieldError } from "../FieldError"

const opciones = [
  { value: "esta_semana", label: "Esta semana", emoji: "⚡" },
  { value: "este_mes", label: "Este mes", emoji: "📅" },
  { value: "mirando", label: "Solo estoy mirando", emoji: "👀" },
] as const

interface StepCuandoProps {
  value: string
  onChange: (value: string) => void
  error?: string
}

export function StepCuando({ value, onChange, error }: StepCuandoProps) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-satoshi font-bold text-xl text-navy">Una última cosa ⏱️</h3>
        <p className="font-dm-sans text-navy/45 text-sm mt-0.5">¿Cuándo te gustaría empezar?</p>
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
