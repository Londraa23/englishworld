"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function NosotrosHero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center bg-night pt-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 noise-overlay" />
      <div className="absolute inset-0 dot-grid opacity-10" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-dm-mono text-sky text-sm tracking-widest uppercase mb-6 block"
        >
          // NUESTRA HISTORIA
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-satoshi font-bold text-5xl md:text-7xl text-white tracking-tight-apple leading-display mb-4"
        >
          Más que una academia.
          <br />
          <span className="text-red">Una comunidad.</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-dm-sans text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-body mb-12"
        >
          Somos un equipo de profesores nativos y certificados apasionados
          por enseñar inglés de verdad. Desde Zaragoza, para el mundo.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8 text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  )
}
