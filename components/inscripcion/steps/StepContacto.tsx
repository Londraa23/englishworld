"use client"

import { User, Phone } from "lucide-react"
import { FieldError } from "../FieldError"

interface StepContactoProps {
  nombre: string
  telefono: string
  onChangeNombre: (value: string) => void
  onChangeTelefono: (value: string) => void
  errors: { nombre?: string; telefono?: string }
}

export function StepContacto({ nombre, telefono, onChangeNombre, onChangeTelefono, errors }: StepContactoProps) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-satoshi font-bold text-xl text-navy">Casi listo 🎯</h3>
        <p className="font-dm-sans text-navy/45 text-sm mt-0.5">Déjanos tus datos y te contactamos</p>
      </div>

      <div>
        <label htmlFor="lead-nombre" className="block font-dm-sans text-xs text-navy/60 font-medium mb-1.5">
          Nombre completo <span className="text-red">*</span>
        </label>
        <div className="relative">
          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-navy/20" />
          <input
            id="lead-nombre" type="text" placeholder="Ej: María García"
            value={nombre} onChange={(e) => onChangeNombre(e.target.value)}
            className={`w-full bg-cream/40 pl-10 pr-3 py-3 rounded-xl font-dm-sans text-base text-navy
              border transition-colors duration-200 focus:outline-none placeholder:text-navy/20
              ${errors.nombre ? "border-red/40 bg-red/5" : "border-sand focus:border-sky"}`}
          />
        </div>
        <FieldError message={errors.nombre} />
      </div>

      <div>
        <label htmlFor="lead-telefono" className="block font-dm-sans text-xs text-navy/60 font-medium mb-1.5">
          Número de teléfono <span className="text-red">*</span>
        </label>
        <div className="relative">
          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-navy/20" />
          <input
            id="lead-telefono" type="tel" placeholder="Ej: 612 345 678"
            value={telefono} onChange={(e) => onChangeTelefono(e.target.value)}
            className={`w-full bg-cream/40 pl-10 pr-3 py-3 rounded-xl font-dm-sans text-base text-navy
              border transition-colors duration-200 focus:outline-none placeholder:text-navy/20
              ${errors.telefono ? "border-red/40 bg-red/5" : "border-sand focus:border-sky"}`}
          />
        </div>
        <FieldError message={errors.telefono} />
      </div>

      <p className="font-dm-sans text-[11px] text-navy/35 leading-relaxed">
        🔒 Sin compromiso. Solo los usaremos para contactarte.
      </p>
    </div>
  )
}
