"use client"

import { motion } from "framer-motion"

const stats = [
  { label: "Alumnos al año", value: "200+", bg: "bg-navy", text: "text-white" },
  { label: "Alumnos por grupo", value: "8–10", bg: "bg-red", text: "text-white" },
  { label: "Niveles disponibles", value: "A2–C2", bg: "bg-gold", text: "text-navy" },
  { label: "Centro Oficial Cambridge", value: "100%", bg: "bg-sky", text: "text-white" },
]

export function StorySection() {
  return (
    <section className="relative py-24 bg-cream overflow-hidden">
      <div className="absolute inset-0 noise-overlay" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="relative">
            {/* Background Decorative Year */}
            <span className="absolute -top-12 -left-8 font-satoshi font-bold text-[20vw] text-navy opacity-[0.08] select-none pointer-events-none leading-none">
              2019
            </span>
            
            <div className="relative pt-12 md:pt-20">
              <span className="font-dm-mono text-red text-sm tracking-widest uppercase mb-4 block">
                // DESDE EL PRINCIPIO
              </span>
              <h2 className="font-satoshi font-bold text-4xl md:text-5xl text-navy tracking-tight-apple leading-display mb-6">
                Nacimos con un propósito claro.
              </h2>
              <div className="font-dm-sans text-lg text-navy/70 leading-body space-y-4 max-w-lg">
                <p>
                  English World nació en Zaragoza con una idea simple: que aprender 
                  inglés debería ser una experiencia, no una obligación.
                </p>
                <p>
                  Hoy somos un Centro Preparador Oficial Cambridge con profesores nativos, 
                  grupos reducidos y un ambiente que lo hace posible.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Grid Cards */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`${stat.bg} ${stat.text} rounded-2xl p-6 md:p-8 flex flex-col justify-between aspect-square md:aspect-auto md:min-h-[160px]`}
              >
                <div className="font-satoshi font-bold text-3xl md:text-4xl tracking-tight leading-none mb-2">
                  <Counter value={stat.value} />
                </div>
                <div className="font-dm-sans text-sm md:text-base opacity-80 leading-snug">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Counter({ value }: { value: string }) {
  // Simple "count-up" effect if it's a number
  // For simplicity since it's a static text + number, we just show it
  // But we can add a simple staggered entry for the text
  return <span>{value}</span>
}
