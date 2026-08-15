"use client"

import { motion } from "framer-motion"
import { Calendar, ArrowRight } from "lucide-react"

export function ExamsHero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center bg-night pt-20 overflow-hidden">
      <div className="absolute inset-0 noise-overlay" />
      <div className="absolute inset-0 dot-grid opacity-[0.05]" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-dm-mono text-sky text-sm tracking-widest uppercase mb-6 block"
        >
          // CENTRO OFICIAL CAMBRIDGE
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-satoshi font-bold text-5xl md:text-7xl text-white tracking-tight-apple leading-display mb-4"
        >
          Exámenes que
          <br />
          <span className="text-red">el mundo reconoce.</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-dm-sans text-lg text-white/70 max-w-2xl mx-auto leading-body mb-10"
        >
          Como Centro Preparador Oficial Cambridge English, te preparamos para 
          superar los exámenes que certifican tu nivel ante cualquier 
          universidad o empresa del mundo.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="#calendario"
            className="group inline-flex items-center gap-2 bg-red text-white font-satoshi font-bold px-8 py-4 rounded-full transition-all hover:bg-red/90 hover:scale-105 active:scale-95 shadow-lg"
          >
            Ver calendario de exámenes
            <Calendar className="w-5 h-5 ml-1" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
