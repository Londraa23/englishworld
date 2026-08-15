"use client"

import { motion } from "framer-motion"
import { Send } from "lucide-react"
import Link from "next/link"

const examDates = [
  { exam: "Cambridge A2 Key", level: "A2", date: "Marzo 2026", status: "Abierta", statusType: "success", statusLabel: "Plazas disponibles" },
  { exam: "Cambridge B1 Prelim", level: "B1", date: "Abril 2026", status: "Abierta", statusType: "success", statusLabel: "Plazas disponibles" },
  { exam: "Cambridge B2 FCE", level: "B2", date: "Mayo 2026", status: "Abierta", statusType: "warning", statusLabel: "Últimas plazas" },
  { exam: "Cambridge C1 CAE", level: "C1", date: "Junio 2026", status: "Próx. apertura", statusType: "muted", statusLabel: "Próx. apertura" },
  { exam: "Cambridge C2 CPE", level: "C2", date: "Junio 2026", status: "Próx. apertura", statusType: "muted", statusLabel: "Próx. apertura" },
]

export function CalendarSection() {
  return (
    <section id="calendario" className="py-24 bg-sand relative overflow-hidden">
      <div className="absolute inset-0 noise-overlay" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <span className="font-dm-mono text-red text-sm tracking-widest uppercase mb-4 block">
            // PRÓXIMAS CONVOCATORIAS
          </span>
          <h2 className="font-satoshi font-bold text-4xl md:text-5xl text-navy tracking-tight-apple leading-display mb-6">
            Fechas de examen 2026.
          </h2>
        </div>

        <div className="bg-white/40 backdrop-blur-sm rounded-[2rem] border border-white/20 overflow-hidden shadow-xl">
          {/* Header Row */}
          <div className="hidden md:grid grid-cols-5 gap-4 p-8 border-b border-navy/5 font-dm-mono text-[10px] text-navy/40 uppercase tracking-widest">
            <div>Examen</div>
            <div>Nivel</div>
            <div>Fecha</div>
            <div>Inscripción</div>
            <div>Estado</div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-navy/5">
            {examDates.map((row, index) => (
              <motion.div
                key={row.exam}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-5 gap-4 p-6 md:p-8 items-center hover:bg-navy/5 transition-colors group"
              >
                <div className="font-satoshi font-bold text-navy group-hover:text-red transition-colors tracking-tight-apple">
                  {row.exam}
                </div>
                <div>
                  <span className="font-dm-mono text-xs bg-navy/5 text-navy/60 px-2 py-0.5 rounded-full md:hidden mr-2">Nivel</span>
                  <span className="font-dm-sans text-sm text-navy">{row.level}</span>
                </div>
                <div>
                  <span className="font-dm-mono text-xs bg-navy/5 text-navy/60 px-2 py-0.5 rounded-full md:hidden mr-2">Fecha</span>
                  <span className="font-dm-sans text-sm text-navy">{row.date}</span>
                </div>
                <div>
                  <span className="font-dm-mono text-xs bg-navy/5 text-navy/60 px-2 py-0.5 rounded-full md:hidden mr-2">Inscripción</span>
                  <span className="font-dm-sans text-sm text-navy">{row.status}</span>
                </div>
                <div>
                  <span className={`
                    font-dm-mono text-[10px] px-3 py-1 rounded-full uppercase tracking-tighter shadow-sm
                    ${row.statusType === 'success' ? 'bg-green-100 text-green-700' : ''}
                    ${row.statusType === 'warning' ? 'bg-red-100 text-red-700' : ''}
                    ${row.statusType === 'muted' ? 'bg-navy/10 text-navy/40' : ''}
                  `}>
                    {row.statusLabel}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contacto"
            className="group inline-flex items-center gap-3 font-satoshi font-bold text-navy hover:text-red transition-colors"
          >
            ¿Quieres inscribirte? Contáctanos
            <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
