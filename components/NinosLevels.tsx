"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const yleLevels = [
  {
    level: "Starters",
    age: "6–7 años",
    desc: "El primer contacto con el inglés en formato de examen: vocabulario básico y familiarización con el idioma de forma lúdica.",
  },
  {
    level: "Movers",
    age: "8–9 años",
    desc: "Comunicación en situaciones cotidianas sencillas: presentarse, hablar de la familia, describir imágenes.",
  },
  {
    level: "Flyers",
    age: "10–12 años",
    desc: "El nivel más alto de los Young Learners English de Cambridge, la antesala del A2 Key.",
  },
]

export function NinosLevels() {
  return (
    <section className="py-24 bg-cream relative overflow-hidden">
      <div className="absolute inset-0 noise-overlay" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="font-dm-mono text-red text-sm tracking-widest uppercase mb-4 block">
            {"// YOUNG LEARNERS ENGLISH"}
          </span>
          <h2 className="font-satoshi font-bold text-4xl md:text-6xl text-navy tracking-tight-apple leading-display mb-4">
            Starters, Movers y Flyers.
          </h2>
          <p className="font-dm-sans text-lg text-navy/60 max-w-2xl mx-auto">
            Los exámenes oficiales de Cambridge pensados para los más pequeños,
            en formato de juego y sin nota de aprobado o suspenso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {yleLevels.map((lvl, index) => (
            <motion.div
              key={lvl.level}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-sand/60"
            >
              <div className="font-dm-mono text-xs text-navy/40 uppercase tracking-widest mb-2">
                {lvl.age}
              </div>
              <h3 className="font-satoshi font-bold text-2xl text-navy mb-3">
                {lvl.level}
              </h3>
              <p className="font-dm-sans text-sm text-navy/60 leading-relaxed">
                {lvl.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          className="mt-10 text-center"
        >
          <p className="font-dm-sans text-navy/60 mb-4">
            ¿Tu hijo/a ya tiene más nivel? Seguimos su progreso hasta{" "}
            <Link href="/niveles" className="text-red font-semibold hover:underline">
              A2 Key, B1 Preliminary y el resto de niveles oficiales
            </Link>
            .
          </p>
        </motion.div>
      </div>
    </section>
  )
}
