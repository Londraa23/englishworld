"use client"

import { motion } from "framer-motion"

export function ContactoHero() {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex flex-col items-center justify-center bg-night pt-20 overflow-hidden">
      <div className="absolute inset-0 noise-overlay opacity-10" />
      <div className="absolute inset-0 dot-grid opacity-[0.05]" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-dm-mono text-sky text-sm tracking-widest uppercase mb-6 block"
        >
          // CONTÁCTANOS
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-satoshi font-bold text-5xl md:text-6xl text-white tracking-tight-apple leading-display mb-4"
        >
          Estamos aquí.
          <br />
          <span className="text-red">Escríbenos.</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-dm-sans text-lg text-white/60 max-w-2xl mx-auto leading-body"
        >
          Resolvemos todas tus dudas sin compromiso. 
          Respuesta garantizada en menos de 24h.
        </motion.p>
      </div>
    </section>
  )
}
