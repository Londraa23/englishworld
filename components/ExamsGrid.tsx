"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const exams = [
  {
    name: "A2 Key",
    level: "A2",
    desc: "El primer paso oficial. Reconocido internacionalmente para demostrar habilidades en inglés básico.",
    for: "Estudiantes que empiezan su camino Cambridge.",
    skills: ["Reading", "Writing", "Listening", "Speaking"],
    colors: "bg-cream text-navy",
    levelColor: "text-red",
  },
  {
    name: "B1 Preliminary",
    level: "B1",
    desc: "Demuestra que puedes usar inglés en situaciones cotidianas y laborales simples.",
    for: "Quienes buscan su primera certificación sólida.",
    skills: ["Reading", "Writing", "Listening", "Speaking"],
    colors: "bg-navy text-white",
    levelColor: "text-gold",
  },
  {
    name: "B2 First (FCE)",
    level: "B2",
    desc: "El más demandado. Requerido por cientos de universidades y empresas en todo el mundo.",
    for: "Acceso a universidades europeas y entornos internacionales.",
    skills: ["Reading", "Writing", "Listening", "Speaking"],
    colors: "bg-red text-white",
    levelColor: "text-cream",
    badge: "MÁS DEMANDADO",
  },
  {
    name: "C1 Advanced (CAE)",
    level: "C1",
    desc: "Para quienes necesitan demostrar un dominio avanzado en contextos académicos o profesionales.",
    for: "Másters, doctorados y puestos de alto nivel.",
    skills: ["Reading", "Writing", "Listening", "Speaking"],
    colors: "bg-sand text-navy",
    levelColor: "text-sky",
  },
  {
    name: "C2 Proficiency (CPE)",
    level: "C2",
    desc: "La certificación más prestigiosa de Cambridge. Equivalente al nivel nativo.",
    for: "Perfeccionistas y profesionales del idioma.",
    skills: ["Reading", "Writing", "Listening", "Speaking"],
    colors: "bg-night text-white",
    levelColor: "text-gold",
  },
]

export function ExamsGrid() {
  return (
    <section className="py-24 bg-cream relative overflow-hidden">
      <div className="absolute inset-0 noise-overlay" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <span className="font-dm-mono text-red text-sm tracking-widest uppercase mb-4 block">
            // LOS EXÁMENES
          </span>
          <h2 className="font-satoshi font-bold text-4xl md:text-5xl text-navy tracking-tight-apple leading-display mb-6">
            Elige tu certificación.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exams.map((exam, index) => (
            <motion.div
              key={exam.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-3xl p-8 flex flex-col ${exam.colors} shadow-xl`}
            >
              {exam.badge && (
                <div className="absolute top-6 right-6">
                   <span className="bg-red text-white font-dm-mono text-[10px] px-3 py-1 rounded-full uppercase">
                    {exam.badge}
                  </span>
                </div>
              )}

              <div className="flex items-center justify-between mb-8">
                <h3 className="font-satoshi font-bold text-2xl md:text-3xl tracking-tight-apple">
                  {exam.name}
                </h3>
                <span className={`font-dm-mono text-xs border border-current opacity-40 px-2 py-0.5 rounded-full`}>
                  {exam.level}
                </span>
              </div>

              <p className="font-dm-sans text-sm opacity-80 mb-6 leading-relaxed">
                {exam.desc}
              </p>

              <div className="mb-8">
                <span className="font-dm-mono text-[10px] opacity-40 uppercase tracking-widest block mb-2">
                  IDEAL PARA:
                </span>
                <p className="font-dm-sans text-sm font-medium">
                  {exam.for}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-10 mt-auto">
                {exam.skills.map(skill => (
                  <span key={skill} className="font-dm-mono text-[10px] bg-white/10 px-2 py-0.5 rounded-md">
                    {skill}
                  </span>
                ))}
              </div>

              <button className="group flex items-center gap-2 font-satoshi font-bold text-sm tracking-tight hover:opacity-70 transition-opacity">
                Más info
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
