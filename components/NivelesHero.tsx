"use client"

import { motion } from "framer-motion"
import { ArrowRight, ExternalLink } from "lucide-react"

export function NivelesHero() {
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
          // TODOS LOS NIVELES
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-satoshi font-bold text-5xl md:text-7xl text-white tracking-tight-apple leading-display mb-4"
        >
          Encuentra tu nivel.
          <br />
          <span className="text-red">Encuentra tu camino.</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-dm-sans text-lg text-white/70 max-w-2xl mx-auto leading-body mb-10"
        >
          Desde los primeros pasos hasta la excelencia bilingüe.
          Tenemos el grupo perfecto para ti.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="https://www.cambridgeenglish.org/test-your-english/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 border-2 border-gold text-gold font-satoshi font-bold px-8 py-4 rounded-full transition-all hover:bg-gold hover:text-navy"
          >
            ¿Cuál es mi nivel?
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
