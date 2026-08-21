"use client"

import { motion } from "framer-motion"
import { Users, Sparkles, BookOpen, Award } from "lucide-react"

const reasons = [
  {
    icon: Users,
    title: "Grupos reducidos",
    body: "Máximo 8 alumnos por grupo, para que cada niño/a reciba atención personalizada.",
    color: "text-red",
    bg: "bg-red/10",
  },
  {
    icon: Sparkles,
    title: "Metodología Communicative Approach",
    body: "Aprenden hablando desde el primer día, no memorizando reglas gramaticales sueltas.",
    color: "text-navy",
    bg: "bg-navy/10",
  },
  {
    icon: BookOpen,
    title: "Horarios flexibles",
    body: "Grupos en distintas franjas horarias para compaginar con el colegio y las extraescolares.",
    color: "text-sky",
    bg: "bg-sky/10",
  },
  {
    icon: Award,
    title: "Centro Oficial Cambridge",
    body: "La misma certificación reconocida internacionalmente que preparamos para adultos, adaptada a cada edad.",
    color: "text-gold",
    bg: "bg-gold/10",
  },
]

export function NinosWhy() {
  return (
    <section className="py-24 bg-sand relative overflow-hidden">
      <div className="absolute inset-0 noise-overlay" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center">
          <span className="font-dm-mono text-red text-sm tracking-widest uppercase mb-4 block">
            {"// POR QUÉ ENGLISH WORLD"}
          </span>
          <h2 className="font-satoshi font-bold text-4xl md:text-5xl text-navy tracking-tight-apple leading-display">
            Pensado para que no se rindan.
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col gap-4"
            >
              <div className={`${reason.bg} w-12 h-12 rounded-xl flex items-center justify-center ${reason.color}`}>
                <reason.icon className="w-6 h-6" />
              </div>
              <h3 className="font-satoshi font-bold text-lg text-navy mt-2">
                {reason.title}
              </h3>
              <p className="font-dm-sans text-navy/70 text-sm leading-relaxed">
                {reason.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
