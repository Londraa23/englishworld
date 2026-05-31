"use client"

import { motion } from "framer-motion"

const steps = [
  {
    num: "01",
    title: "Prueba de nivel",
    desc: "Evaluamos tu punto de partida con precisión.",
    color: "bg-gold text-navy",
  },
  {
    num: "02",
    title: "Grupo personalizado",
    desc: "Te asignamos el grupo y horario que más te conviene.",
    color: "bg-red text-white",
  },
  {
    num: "03",
    title: "Clases en vivo",
    desc: "Dinámica, práctica y orientada a la comunicación real.",
    color: "bg-sky text-white",
  },
  {
    num: "04",
    title: "Progreso medido",
    desc: "Simulacros, feedback y preparación para el examen oficial.",
    color: "bg-cream text-navy",
  },
]

export function MethodologySection() {
  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 noise-overlay opacity-10" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-20">
          <span className="font-dm-mono text-sky/70 text-sm tracking-widest uppercase mb-4 block">
            // CÓMO LO HACEMOS
          </span>
          <h2 className="font-satoshi font-bold text-4xl md:text-5xl text-white tracking-tight-apple leading-display mb-6">
            Un método que funciona.
          </h2>
        </div>

        <div className="relative">
          {/* Horizontal Line Desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px border-t border-dashed border-white/20 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex flex-col items-start lg:items-center lg:text-center group"
              >
                <div className={`${step.color} w-24 h-24 rounded-full flex items-center justify-center font-satoshi font-bold text-2xl mb-8 relative shadow-2xl transition-transform group-hover:scale-110`}>
                  {step.num}
                  {/* Subtle Glow */}
                  <div className={`absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity ${step.color}`} />
                </div>
                
                <h3 className="font-satoshi font-bold text-xl text-white mb-4">
                  {step.title}
                </h3>
                <p className="font-dm-sans text-sm text-white/60 leading-relaxed max-w-[240px]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
