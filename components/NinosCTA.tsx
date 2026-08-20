"use client"

import { motion } from "framer-motion"
import { ArrowRight, Phone } from "lucide-react"
import Link from "next/link"

export function NinosCTA() {
  return (
    <section className="py-24 bg-night relative overflow-hidden">
      <div className="absolute inset-0 noise-overlay" />

      <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          className="font-satoshi font-bold text-3xl md:text-5xl text-white tracking-tight-apple mb-4"
        >
          Reserva su plaza para este curso.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ delay: 0.1 }}
          className="font-dm-sans text-lg text-white/60 mb-10"
        >
          Cuéntanos la edad de tu hijo/a y te contactamos para encontrar el grupo perfecto.
        </motion.p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/inscripcion"
              className="group inline-flex items-center gap-3 bg-red text-white font-satoshi font-bold px-8 py-4 rounded-full transition-all hover:bg-red/90 hover:scale-105 active:scale-95 shadow-lg"
            >
              Solicita información
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: 0.25 }}
          >
            <a
              href="tel:+34651859939"
              className="group inline-flex items-center gap-3 border-2 border-white/40 text-white font-satoshi font-bold px-8 py-4 rounded-full transition-all hover:bg-white/10 hover:scale-105 active:scale-95"
            >
              <Phone className="w-5 h-5" />
              651 85 99 39
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
