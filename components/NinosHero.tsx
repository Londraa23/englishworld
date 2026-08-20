"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

const trustItems = [
  "Inglés desde los 4 años",
  "Profesores nativos o bilingües",
  "Grupos reducidos",
]

export function NinosHero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center bg-night pt-20 overflow-hidden">
      <div className="absolute inset-0 noise-overlay" />
      <div className="absolute inset-0 diagonal-stripes opacity-[0.03]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-dm-mono text-sky text-sm tracking-widest uppercase mb-6 block"
        >
          {"// INGLÉS PARA NIÑOS Y ADOLESCENTES"}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-satoshi font-bold text-5xl md:text-7xl text-white tracking-tight-apple leading-display mb-4"
        >
          Que el inglés
          <br />
          <span className="text-red">les guste desde pequeños.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-dm-sans text-lg text-white/70 max-w-2xl mx-auto leading-body mb-10"
        >
          Clases de inglés en Zaragoza para niños desde los 4 años y
          adolescentes, con la metodología Communicative Approach y
          preparación oficial para los exámenes Cambridge.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/inscripcion"
            className="group inline-flex items-center gap-2 bg-red text-white font-satoshi font-bold px-8 py-4 rounded-full transition-all hover:bg-red/90 hover:scale-105 active:scale-95 shadow-lg"
          >
            Reservar plaza para mi hijo/a
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6"
        >
          {trustItems.map((item) => (
            <span key={item} className="flex items-center gap-2 font-dm-sans text-sm text-white/50">
              <CheckCircle className="w-4 h-4 text-gold" />
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
