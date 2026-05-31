"use client"

import { motion } from "framer-motion"
import { Plane, MapPin, Phone, Mail } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

function CompassRose() {
  return (
    <motion.svg
      viewBox="0 0 400 400"
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.03]"
      animate={{ rotate: 360 }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
    >
      {/* Main compass points */}
      <path
        d="M200 40 L210 200 L200 360 L190 200 Z"
        fill="#FBF5E6"
      />
      <path
        d="M40 200 L200 210 L360 200 L200 190 Z"
        fill="#FBF5E6"
      />
      {/* Diagonal points */}
      <path
        d="M85 85 L195 195 L315 315 L205 205 Z"
        fill="#FBF5E6"
        opacity="0.5"
      />
      <path
        d="M315 85 L205 195 L85 315 L195 205 Z"
        fill="#FBF5E6"
        opacity="0.5"
      />
      {/* Center circle */}
      <circle cx="200" cy="200" r="20" fill="none" stroke="#FBF5E6" strokeWidth="2" />
      <circle cx="200" cy="200" r="40" fill="none" stroke="#FBF5E6" strokeWidth="1" />
    </motion.svg>
  )
}

export function FinalCTA() {
  const contactItems = [
    { icon: MapPin, text: "Zaragoza, España" },
    { icon: Phone, text: "651 85 99 39" },
    { icon: Mail, text: "contacto@academiaenglishworld.com" },
  ]

  return (
    <section
      id="contacto"
      className="relative min-h-screen bg-night flex items-center justify-center overflow-hidden"
    >
      {/* Background decorations */}
      <CompassRose />
      
      {/* Red glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red/8 rounded-full blur-[100px]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center"
      >
        {/* Label */}
        <motion.span
          variants={itemVariants}
          className="font-dm-mono text-sm text-sky tracking-wide"
        >
          ¿LISTO PARA DESPEGAR?
        </motion.span>

        {/* Headline */}
        <motion.h2
          variants={itemVariants}
          className="mt-6 font-satoshi font-bold text-white tracking-tight-apple leading-display"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          Tu historia en inglés
        </motion.h2>
        <motion.h2
          variants={itemVariants}
          className="font-satoshi font-bold text-red tracking-tight-apple leading-display"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          empieza hoy.
        </motion.h2>

        {/* Body */}
        <motion.p
          variants={itemVariants}
          className="mt-6 font-dm-sans text-white/60 max-w-lg mx-auto leading-body"
        >
          Únete a English World y descubre una nueva forma de aprender inglés.
          Plazas limitadas — grupos reducidos.
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={itemVariants} className="mt-10">
          <motion.a
            href="/contacto"
            whileHover="hover"
            whileTap="tap"
            className="
              inline-flex items-center gap-3
              bg-red text-white
              font-satoshi font-bold text-xl
              px-12 py-5 rounded-full
              transition-all duration-200
            "
          >
            <motion.div
              variants={{
                hover: { 
                  x: [0, 5, 10, 80], 
                  y: [0, -5, -10, -80],
                  rotate: [0, -10, -20, -30],
                  opacity: [1, 1, 1, 0],
                  transition: { duration: 0.8, ease: "easeIn" }
                },
                tap: { scale: 0.95 }
              }}
              className="relative"
            >
              <Plane className="w-6 h-6" />
              {/* Trail effect */}
              <motion.div 
                variants={{
                  hover: { 
                    opacity: [0, 0.4, 0],
                    scale: [0.5, 1.2, 0.2],
                    transition: { duration: 0.8 }
                  }
                }}
                className="absolute inset-0 bg-white/20 rounded-full blur-md"
              />
            </motion.div>
            <span className="relative z-10">Reserva tu plaza</span>
          </motion.a>
        </motion.div>

        {/* Contact info */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-wrap justify-center gap-8"
        >
          {contactItems.map((item) => (
            <span
              key={item.text}
              className="flex items-center gap-2 font-dm-sans text-sm text-white/40"
            >
              <item.icon className="w-4 h-4" />
              {item.text}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
