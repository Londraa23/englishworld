"use client"

import { motion } from "framer-motion"

export function InscripcionMapSection() {
  return (
    <section className="py-16 bg-cream relative overflow-hidden">
      <div className="absolute inset-0 noise-overlay opacity-10" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="mb-8 text-center">
          <span className="font-dm-mono text-red text-sm tracking-widest uppercase mb-4 block">
            // CÓMO LLEGAR
          </span>
          <h2 className="font-satoshi font-bold text-3xl md:text-4xl text-navy tracking-tight-apple">
            Nos encontrarás fácil.
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          className="rounded-3xl overflow-hidden shadow-xl border border-navy/10 w-full h-[320px] sm:h-[380px]"
        >
          <iframe
            src="https://maps.google.com/maps?q=Calle+Celso+Emilio+Ferreiro+17,+50017+Zaragoza&t=h&z=18&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de English World en Zaragoza (vista satélite)"
          />
        </motion.div>

        <p className="mt-4 text-center font-dm-sans text-navy/50 text-sm">
          Calle Celso Emilio Ferreiro 17, 50017 Zaragoza
        </p>
      </div>
    </section>
  )
}
