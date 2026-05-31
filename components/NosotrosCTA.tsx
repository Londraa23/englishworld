"use client"

import { motion } from "framer-motion"
import { Mail, ArrowRight } from "lucide-react"
import Link from "next/link"

export function NosotrosCTA() {
  return (
    <section className="py-20 bg-night relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 noise-overlay opacity-10" />
      <div className="absolute inset-0 dot-grid opacity-[0.05]" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-satoshi font-bold text-3xl md:text-5xl text-white tracking-tight-apple mb-4"
        >
          ¿Quieres conocernos?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-dm-sans text-lg text-white/60 mb-10"
        >
          Ven a una clase de prueba gratuita.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ delay: 0.2 }}
        >
          <Link
            href="/contacto"
            className="group relative inline-flex items-center gap-3 bg-red text-white font-satoshi font-bold px-8 py-4 rounded-full overflow-hidden transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-3">
              Contáctanos
              <Mail className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
