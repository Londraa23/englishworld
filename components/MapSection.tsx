"use client"

import { motion } from "framer-motion"

export function MapSection() {
  return (
    <section className="py-24 bg-night relative overflow-hidden">
      <div className="absolute inset-0 noise-overlay opacity-10" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-12 text-center">
          <span className="font-dm-mono text-sky/60 text-sm tracking-widest uppercase mb-4 block">
            // CÓMO LLEGAR
          </span>
          <h2 className="font-satoshi font-bold text-4xl md:text-5xl text-white tracking-tight-apple">
            Nos encontrarás fácil.
          </h2>
        </div>

        <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            className="w-full h-[400px] transition-all duration-700 md:grayscale group-hover:grayscale-0"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2981.189564887754!2d-0.88746!3d41.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5914ed0385cf55%3A0x6e9a7e0a9d0a0f2b!2sCalle%20Celso%20Emilio%20Ferreiro%2C%2017%2C%2050017%20Zaragoza!5e0!3m2!1ses!2ses!4v1711100000000!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="font-dm-sans text-white/40 text-sm">
            Calle Celso Emilio Ferreiro 17, 50017 Zaragoza
          </p>
        </div>
      </div>
    </section>
  )
}
