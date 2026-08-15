"use client"

import { motion } from "framer-motion"
import { BookOpen, CheckCircle, Award } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Material oficial actualizado",
    body: "Trabajamos con los libros y recursos oficiales de Cambridge.",
  },
  {
    icon: CheckCircle,
    title: "Simulacros completos",
    body: "Exámenes de práctica con corrección detallada y feedback.",
  },
  {
    icon: Award,
    title: "Examinadores en plantilla",
    body: "Emma es examinadora oficial Cambridge. Sabe exactamente qué buscan.",
  },
]

export function PreparationSection() {
  return (
    <section className="py-24 bg-navy relative overflow-hidden text-white">
      <div className="absolute inset-0 noise-overlay opacity-10" />
      <div className="absolute inset-0 diagonal-stripes opacity-5" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center mb-16">
        <span className="font-dm-mono text-sky/70 text-sm tracking-widest uppercase mb-4 block">
          // NUESTRA PREPARACIÓN
        </span>
        <h2 className="font-satoshi font-bold text-4xl md:text-5xl tracking-tight-apple leading-display mb-6">
          No solo apruebas.
          <br />
          <span className="text-gold">Destacas.</span>
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                <feature.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-satoshi font-bold text-xl mb-4 tracking-tight-apple">
                {feature.title}
              </h3>
              <p className="font-dm-sans text-sm text-white/60 leading-relaxed max-w-[280px]">
                {feature.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
