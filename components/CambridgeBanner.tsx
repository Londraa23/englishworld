"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Sparkles } from "lucide-react"

function CambridgeBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -8 }}
      whileInView={{ opacity: 1, rotate: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      className="relative w-[280px] h-[280px] mx-auto"
    >
      <motion.div
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-8 rounded-full bg-white flex flex-col items-center justify-center shadow-lg p-6"
      >
        <div className="relative w-full h-full">
          <Image
            src="/cambridge-logo.png"
            alt="Cambridge English"
            fill
            sizes="216px"
            className="object-contain"
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

export function CambridgeBanner() {
  return (
    <section id="examenes" className="relative bg-sand py-24 md:py-32">
      {/* Dot grid pattern */}
      <div className="absolute inset-0 dot-grid pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-dm-mono text-sm text-red tracking-wide">
              {"// CERTIFICACIÓN OFICIAL"}
            </span>

            <h2
              className="mt-4 font-satoshi font-bold text-navy tracking-tight-apple leading-display"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Centro Preparador
            </h2>
            <h2
              className="font-satoshi font-bold text-navy tracking-tight-apple leading-display"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Oficial Cambridge.
            </h2>

            <p className="mt-4 font-dm-sans text-navy/70 max-w-sm leading-body">
              La preparación de más alta calidad, avalada por Cambridge English.
              Niveles disponibles desde A2 hasta C2 Proficiency.
            </p>

            <p className="mt-2 font-dm-sans text-sm text-navy/50">
              ¿No sabes tu nivel? Haz la prueba gratuita ahora mismo.
            </p>

            <motion.a
              href="https://www.cambridgeenglish.org/test-your-english/general-english/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="
                mt-6 inline-flex items-center gap-2
                bg-navy text-white
                font-satoshi font-semibold
                px-6 py-3 rounded-full
                transition-colors duration-200
                hover:bg-navy/90
              "
            >
              <Sparkles className="w-5 h-5" />
              Hacer prueba gratuita
            </motion.a>
          </motion.div>

          {/* Right column - Badge */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <CambridgeBadge />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
