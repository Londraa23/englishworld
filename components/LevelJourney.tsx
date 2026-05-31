"use client"

import { motion } from "framer-motion"
import * as Tooltip from "@radix-ui/react-tooltip"
import { GraduationCap, ArrowRight } from "lucide-react"
import { InteractiveEmoji } from "./InteractiveEmoji"

const levels = [
  {
    id: "a2",
    label: "A2",
    description: "Primeros pasos — vocabulario básico y conversación simple.",
    isHighlighted: false,
  },
  {
    id: "b1",
    label: "B1",
    description: "Independencia — expresarte en situaciones cotidianas.",
    isHighlighted: false,
  },
  {
    id: "b2",
    label: "B2",
    description: "Fluidez — debatir, opinar y escribir con confianza.",
    isHighlighted: true,
  },
  {
    id: "c1",
    label: "C1",
    description: "Dominio — casi nativo, apto para entornos profesionales.",
    isHighlighted: false,
  },
  {
    id: "c2",
    label: "C2",
    description: "Excelencia — dominio pleno del idioma.",
    isHighlighted: false,
  },
  {
    id: "grad",
    label: "",
    icon: GraduationCap,
    description: "Graduado — el mundo es tuyo.",
    isHighlighted: false,
  },
]

function WorldMapBackground() {
  return (
      <svg
        viewBox="0 0 800 400"
        className="absolute inset-0 w-full h-full opacity-[0.04]"
        preserveAspectRatio="xMidYMid slice"
        role="img"
        aria-label="Patrón decorativo de mapa mundial"
      >
      <path
        d="M50,200 Q100,150 150,180 Q200,210 250,170 Q300,130 350,160 Q400,190 450,150 Q500,110 550,140 Q600,170 650,130 Q700,90 750,120"
        fill="none"
        stroke="#FBF5E6"
        strokeWidth="2"
      />
      <path
        d="M50,250 Q100,220 150,260 Q200,300 250,270 Q300,240 350,280 Q400,320 450,290 Q500,260 550,300 Q600,340 650,310 Q700,280 750,320"
        fill="none"
        stroke="#FBF5E6"
        strokeWidth="2"
      />
      <circle cx="150" cy="180" r="30" fill="none" stroke="#FBF5E6" strokeWidth="1" />
      <circle cx="350" cy="220" r="40" fill="none" stroke="#FBF5E6" strokeWidth="1" />
      <circle cx="550" cy="170" r="35" fill="none" stroke="#FBF5E6" strokeWidth="1" />
    </svg>
  )
}

function LevelStop({ 
  level, 
  index 
}: { 
  level: typeof levels[number]
  index: number 
}) {
  const Icon = level.icon

  return (
    <Tooltip.Provider delayDuration={200}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            whileHover="hover"
            whileTap="tap"
            className="flex flex-col items-center cursor-pointer group"
          >
            {/* Flag icon placeholder */}
            <InteractiveEmoji 
              className="mb-2 text-xs"
              scale={1.4}
              rotate={20}
            >
              {index % 2 === 0 ? "🇬🇧" : "🇺🇸"}
            </InteractiveEmoji>
            
            {/* Level circle */}
            <motion.div
              variants={{
                hover: { scale: 1.15, rotate: Icon ? [0, -10, 10, 0] : 0 },
                tap: { scale: 0.95 }
              }}
              className={`
                relative w-12 h-12 rounded-full
                flex items-center justify-center
                font-satoshi font-semibold text-sm
                transition-all duration-300
                ${level.isHighlighted
                  ? "bg-gold text-white"
                  : "bg-white/10 text-white border border-white/30"
                }
              `}
            >
              {Icon ? (
                <Icon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
              ) : (
                level.label
              )}
              
              {/* Pulse animation for highlighted */}
              {level.isHighlighted && (
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 rounded-full border-2 border-gold"
                />
              )}
            </motion.div>
            
            {/* Level label */}
            <span className="mt-2 font-dm-sans text-sm text-white/80">
              {Icon ? "Grad" : level.label}
            </span>
          </motion.div>
        </Tooltip.Trigger>

        <Tooltip.Portal>
          <Tooltip.Content
            sideOffset={8}
            className="
              max-w-[200px] px-4 py-3
              bg-white text-navy
              rounded-lg shadow-xl
              font-dm-sans text-sm
              z-50
            "
          >
            <p className="font-semibold mb-1">{Icon ? "Graduado" : `Nivel ${level.label}`}</p>
            <p className="text-navy/70 text-xs">{level.description}</p>
            <Tooltip.Arrow className="fill-white" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

export function LevelJourney() {
  return (
    <section id="niveles" className="relative bg-navy py-24 md:py-32 overflow-hidden">
      <WorldMapBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            className="font-dm-mono text-sm text-sky/70 tracking-wide"
          >
            {"// EL CAMINO"}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-satoshi font-bold text-white tracking-tight-apple leading-display"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            ¿En qué punto
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: 0.15 }}
            className="font-satoshi font-bold text-gold tracking-tight-apple leading-display"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            del viaje estás?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: 0.2 }}
            className="mt-6 font-dm-sans text-white/60 max-w-lg mx-auto leading-body"
          >
            Desde los primeros pasos hasta la excelencia.
            Estamos contigo en cada etapa.
          </motion.p>
        </div>

        {/* Desktop: Horizontal path */}
        <div className="hidden md:block relative">
          {/* SVG Path */}
          <svg
            viewBox="0 0 800 100"
            className="w-full h-24 mb-4"
            preserveAspectRatio="xMidYMid meet"
          >
            <motion.path
              d="M 60 50 Q 200 30 300 50 Q 400 70 500 50 Q 600 30 740 50"
              fill="none"
              stroke="#5B9BD5"
              strokeWidth="2"
              strokeDasharray="8 8"
              opacity="0.4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              role="img"
              aria-label="Línea punteada que representa el progreso a través de los niveles"
            />
          </svg>

          {/* Level stops */}
          <div className="flex justify-between px-8">
            {levels.map((level, index) => (
              <LevelStop key={level.id} level={level} index={index} />
            ))}
          </div>
        </div>

        {/* Mobile: Vertical timeline */}
        <div className="md:hidden flex flex-col gap-6">
          {levels.map((level, index) => {
            const Icon = level.icon
            return (
              <motion.div
                key={level.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div
                  className={`
                    w-12 h-12 rounded-full flex-shrink-0
                    flex items-center justify-center
                    font-satoshi font-semibold text-sm
                    ${level.isHighlighted
                      ? "bg-gold text-white"
                      : "bg-white/10 text-white border border-white/30"
                    }
                  `}
                >
                  {Icon ? <Icon className="w-5 h-5" /> : level.label}
                </div>
                <div>
                  <p className="font-satoshi font-semibold text-white">
                    {Icon ? "Graduado" : `Nivel ${level.label}`}
                  </p>
                  <p className="font-dm-sans text-sm text-white/60">
                    {level.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="https://www.cambridgeenglish.org/test-your-english/general-english/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="
              inline-flex items-center gap-2
              bg-transparent text-white
              border-2 border-gold
              font-satoshi font-semibold
              px-6 py-3 rounded-full
              transition-colors duration-200
              hover:bg-gold/10
            "
          >
            Descubre tu nivel gratis
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
