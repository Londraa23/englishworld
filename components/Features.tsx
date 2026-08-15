"use client"

import { motion } from "framer-motion"
import { GraduationCap, Clock, Award } from "lucide-react"

const features = [
  {
    icon: GraduationCap,
    title: "Profesores nativos y certificados",
    body: "No solo dominan el idioma — saben cómo enseñarlo. Con energía, paciencia y mucho humor.",
    tag: "// CALIDAD HUMANA",
    color: "red",
    rotation: -1.5,
    translateY: 8,
  },
  {
    icon: Clock,
    title: "Horarios que se adaptan a ti",
    body: "Grupos reducidos en múltiples franjas horarias. Porque la vida no para.",
    tag: "// FLEXIBILIDAD TOTAL",
    color: "navy",
    rotation: 0,
    translateY: 0,
  },
  {
    icon: Award,
    title: "Centro Oficial Cambridge",
    body: "La preparación más rigurosa para los exámenes que abren puertas en todo el mundo.",
    tag: "// CERTIFICACIÓN OFICIAL",
    color: "gold",
    rotation: 1.5,
    translateY: 8,
  },
]

const colorClasses = {
  red: {
    iconBg: "bg-red",
    border: "border-l-red border-t-red",
    tag: "text-red/60",
  },
  navy: {
    iconBg: "bg-navy",
    border: "border-l-navy border-t-navy",
    tag: "text-navy/60",
  },
  gold: {
    iconBg: "bg-gold",
    border: "border-l-gold border-t-gold",
    tag: "text-gold",
  },
}

export function Features() {
  return (
    <section id="nosotros" className="relative bg-cream py-24 md:py-32">
      {/* Diagonal stripes pattern */}
      <div className="absolute inset-0 diagonal-stripes pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            className="font-dm-mono text-sm text-red tracking-wide"
          >
            {"// POR QUÉ NOSOTROS"}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-satoshi font-bold text-navy tracking-tight-apple leading-display"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            No es una clase.
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: 0.15 }}
            className="font-satoshi font-bold text-navy tracking-tight-apple leading-display"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Es una experiencia.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: 0.2 }}
            className="mt-6 font-dm-sans text-navy/60 max-w-xl mx-auto leading-body"
          >
            Todo lo que hacemos está pensado para que aprender inglés
            sea lo mejor de tu semana.
          </motion.p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const colors = colorClasses[feature.color as keyof typeof colorClasses]
            const Icon = feature.icon

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                whileHover={{ y: -6, rotate: 0 }}
                style={{
                  rotate: feature.rotation,
                  translateY: feature.translateY,
                }}
                className="
                  bg-white rounded-2xl p-8 shadow-lg
                  border-l-4 border-t-4 border-r-0 border-b-0
                  transition-shadow duration-300
                  hover:shadow-xl
                "
                // Apply border colors via inline style
              >
                <div
                  className={`
                    w-[52px] h-[52px] rounded-full
                    flex items-center justify-center
                    ${colors.iconBg}
                  `}
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                </div>

                <h3 className="mt-6 font-satoshi font-semibold text-xl text-navy tracking-tight-apple">
                  {feature.title}
                </h3>

                <p className="mt-2 font-dm-sans text-sm text-navy/70 leading-body">
                  {feature.body}
                </p>

                <span className={`mt-4 block font-dm-mono text-xs ${colors.tag}`}>
                  {feature.tag}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
