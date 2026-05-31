"use client"

import { motion } from "framer-motion"
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
      {/* Outer gold ring */}
      <div className="absolute inset-0 rounded-full border-[3px] border-gold" />
      
      {/* Inner navy ring with gap */}
      <div className="absolute inset-3 rounded-full border-[3px] border-navy" />
      
      {/* Badge content */}
      <motion.div
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-8 rounded-full bg-white flex flex-col items-center justify-center shadow-lg"
      >
        <svg viewBox="0 0 100 100" className="w-20 h-20 mb-2" role="img" aria-label="Escudo oficial de Cambridge English">
          <defs>
            <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#002868" />
              <stop offset="100%" stopColor="#5B9BD5" />
            </linearGradient>
          </defs>
          {/* Shield shape */}
          <path
            d="M50 10 L80 25 L80 55 Q80 75 50 90 Q20 75 20 55 L20 25 Z"
            fill="url(#shieldGrad)"
          />
          {/* Inner details */}
          <path
            d="M50 20 L70 30 L70 52 Q70 68 50 80 Q30 68 30 52 L30 30 Z"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
          />
          {/* Star */}
          <polygon
            points="50,35 53,45 63,45 55,52 58,62 50,56 42,62 45,52 37,45 47,45"
            fill="#C8A225"
          />
        </svg>
        
        <span className="font-satoshi font-bold text-navy text-sm tracking-tight-apple">
          CAMBRIDGE
        </span>
        <span className="font-dm-sans text-xs text-navy/70">
          English
        </span>
      </motion.div>
      
      {/* Circular text */}
      <svg viewBox="0 0 280 280" className="absolute inset-0 w-full h-full">
        <defs>
          <path
            id="textPath"
            d="M 140 140 m -110 0 a 110 110 0 1 1 220 0 a 110 110 0 1 1 -220 0"
          />
        </defs>
        <text className="fill-navy font-dm-mono text-[11px]">
          <textPath href="#textPath" startOffset="0%">
            CAMBRIDGE ENGLISH · EXAM PREPARATION CENTRE · ZARAGOZA ·
          </textPath>
        </text>
      </svg>
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
