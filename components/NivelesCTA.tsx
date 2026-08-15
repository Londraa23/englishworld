"use client"

import { motion } from "framer-motion"
import { ArrowRight, MessageSquare } from "lucide-react"
import Link from "next/link"

export function NivelesCTA() {
  return (
    <section className="py-24 bg-sand relative overflow-hidden">
      <div className="absolute inset-0 noise-overlay" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          className="font-satoshi font-bold text-3xl md:text-5xl text-navy tracking-tight-apple mb-4"
        >
          ¿No sabes qué nivel eres?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ delay: 0.1 }}
          className="font-dm-sans text-lg text-navy/60 mb-10"
        >
          Haz la prueba gratuita de Cambridge en 15 minutos.
        </motion.p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: 0.2 }}
          >
            <a
              href="https://www.cambridgeenglish.org/test-your-english/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-navy text-white font-satoshi font-bold px-8 py-4 rounded-full transition-all hover:bg-navy/90 hover:scale-105 active:scale-95 shadow-lg"
            >
              Hacer prueba
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/contacto"
              className="group inline-flex items-center gap-3 border-2 border-navy text-navy font-satoshi font-bold px-8 py-4 rounded-full transition-all hover:bg-navy/5 hover:scale-105 active:scale-95"
            >
              Hablar con nosotros
              <MessageSquare className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
