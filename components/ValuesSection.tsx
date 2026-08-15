"use client"

import { motion } from "framer-motion"
import { Sparkles, Users, Globe, CheckCircle } from "lucide-react"

const values = [
  {
    icon: Sparkles,
    title: "Excelencia",
    body: "Nunca bajar el nivel. Siempre mejorar.",
    color: "text-red",
    bg: "bg-red/10",
  },
  {
    icon: Users,
    title: "Comunidad",
    body: "Aprender juntos es aprender mejor.",
    color: "text-navy",
    bg: "bg-navy/10",
  },
  {
    icon: Globe,
    title: "Apertura",
    body: "El inglés conecta culturas. Eso nos importa.",
    color: "text-sky",
    bg: "bg-sky/10",
  },
  {
    icon: CheckCircle,
    title: "Honestidad",
    body: "Te decimos lo que necesitas oír.",
    color: "text-gold",
    bg: "bg-gold/10",
  },
]

export function ValuesSection() {
  return (
    <section className="py-24 bg-sand relative overflow-hidden">
      <div className="absolute inset-0 noise-overlay" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <span className="font-dm-mono text-red text-sm tracking-widest uppercase mb-4 block">
            // NUESTROS VALORES
          </span>
          <h2 className="font-satoshi font-bold text-4xl md:text-5xl text-navy tracking-tight-apple leading-display mb-6">
            Lo que nos guía cada día.
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col gap-4"
            >
              <div className={`${value.bg} w-12 h-12 rounded-xl flex items-center justify-center ${value.color}`}>
                <value.icon className="w-6 h-6" />
              </div>
              <h3 className="font-satoshi font-bold text-xl text-navy mt-2">
                {value.title}
              </h3>
              <p className="font-dm-sans text-navy/70 text-sm leading-relaxed">
                {value.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
