"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

const levels = [
  {
    level: "A2",
    name: "Key English Test",
    title: "Los primeros pasos del viaje.",
    desc: "Aprende a presentarte, hablar de tu día a día y entender conversaciones simples.",
    skills: ["Vocabulario esencial", "Gramática básica", "Conversación cotidiana"],
    pills: ["Grupal", "Individual"],
    colors: "bg-cream text-navy",
    levelColor: "text-red",
  },
  {
    level: "B1",
    name: "Preliminary English",
    title: "Ya te defiendes. Ahora expándete.",
    desc: "Habla de experiencias, planes y opiniones con confianza creciente.",
    skills: ["Narrar experiencias", "Escribir textos simples", "Escucha activa"],
    pills: ["Grupal", "Individual"],
    colors: "bg-navy text-white",
    levelColor: "text-gold",
  },
  {
    level: "B2",
    name: "First Certificate (FCE)",
    title: "El nivel que abre puertas.",
    desc: "Debatir, opinar, escribir ensayos y moverte en entornos internacionales.",
    skills: ["Debate y argumentación", "Escritura avanzada", "Comprensión compleja"],
    pills: ["Grupal", "Individual"],
    colors: "bg-red text-white",
    levelColor: "text-cream",
    popular: true,
  },
  {
    level: "C1",
    name: "Advanced (CAE)",
    title: "Casi nativo.",
    desc: "Comunicación fluida en entornos académicos y profesionales de alto nivel.",
    skills: ["Registro formal e informal", "Análisis crítico", "Presentaciones"],
    pills: ["Grupal", "Individual"],
    colors: "bg-sand text-navy",
    levelColor: "text-sky",
  },
  {
    level: "C2",
    name: "Proficiency (CPE)",
    title: "La cima.",
    desc: "Dominio total del idioma en cualquier contexto. El nivel más exigente y reconocido del mundo.",
    skills: ["Dominio nativo", "Literatura y matices", "Máxima certificación"],
    pills: ["Grupal", "Individual"],
    colors: "bg-night text-white",
    levelColor: "text-gold",
  },
]

export function LevelsGrid() {
  return (
    <section className="py-24 bg-cream relative overflow-hidden">
      <div className="absolute inset-0 noise-overlay" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="font-dm-mono text-red text-sm tracking-widest uppercase mb-4 block">
            // LOS NIVELES
          </span>
          <h2 className="font-satoshi font-bold text-4xl md:text-6xl text-navy tracking-tight-apple leading-display mb-4">
            De A2 a C2.
          </h2>
          <p className="font-dm-sans text-lg text-navy/60">
            Cada nivel, una nueva versión de ti.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {levels.map((lvl, index) => (
            <motion.div
              key={lvl.level}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`
                relative rounded-[2.5rem] p-8 md:p-10 flex flex-col shadow-xl
                ${lvl.colors}
                ${lvl.level === "B2" ? "lg:col-span-1 lg:row-span-1" : ""}
                ${lvl.level === "C1" ? "lg:col-span-1" : ""}
              `}
            >
              {lvl.popular && (
                <div className="absolute top-6 right-6">
                  <span className="bg-red text-white font-dm-mono text-[10px] px-3 py-1 rounded-full uppercase tracking-tighter shadow-lg">
                    MÁS POPULAR
                  </span>
                </div>
              )}

              <div className={`font-satoshi font-bold text-7xl md:text-8xl mb-2 ${lvl.levelColor} leading-none tracking-tight-apple opacity-90`}>
                {lvl.level}
              </div>
              
              <div className="font-dm-mono text-xs uppercase tracking-widest opacity-60 mb-6">
                {lvl.name}
              </div>

              <h3 className="font-satoshi font-bold text-xl md:text-2xl mb-4 leading-tight tracking-tight-apple">
                {lvl.title}
              </h3>

              <p className="font-dm-sans text-sm md:text-base opacity-70 mb-8 leading-relaxed">
                {lvl.desc}
              </p>

              <div className="space-y-3 mb-10 flex-grow">
                {lvl.skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-3">
                    <CheckCircle className={`w-4 h-4 flex-shrink-0 ${lvl.level === 'A2' || lvl.level === 'C1' ? 'text-gold' : 'text-gold'}`} />
                    <span className="font-dm-sans text-sm opacity-80">{skill}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
                {lvl.pills.map((pill) => (
                  <span
                    key={pill}
                    className="font-dm-mono text-[10px] uppercase border border-current opacity-40 px-2 py-0.5 rounded-full"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
