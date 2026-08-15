"use client"

import { motion } from "framer-motion"

const team = [
  {
    name: "Rebeca C.",
    bio: "Al frente de English World, cuidando cada detalle de la academia para que cada alumno se sienta en buenas manos.",
    initials: "RC",
    color: "bg-red",
  },
  {
    name: "Montse C.",
    bio: "Acompaña a cada alumno con paciencia hasta que hablar inglés deja de dar miedo.",
    initials: "MC",
    color: "bg-navy",
  },
  {
    name: "Mathew J.",
    bio: "Hace que hablar inglés en clase sea lo más natural del mundo.",
    initials: "MJ",
    color: "bg-gold",
  },
]

export function TeamSection() {
  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 noise-overlay opacity-10" />
      <div className="absolute inset-0 diagonal-stripes opacity-5" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <span className="font-dm-mono text-sky/70 text-sm tracking-widest uppercase mb-4 block">
            // EL EQUIPO
          </span>
          <h2 className="font-satoshi font-bold text-4xl md:text-5xl text-white tracking-tight-apple leading-display mb-6">
            Profesores que cambian perspectivas.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              whileHover={{ y: -10 }}
              className="bg-cream rounded-2xl p-8 flex flex-col h-full shadow-2xl relative group overflow-hidden"
            >
              {/* Card Decoration */}
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-navy/5 rounded-full blur-2xl group-hover:bg-navy/10 transition-colors" />

              <div className="flex items-center gap-4 mb-6">
                <div className={`${member.color} w-16 h-16 rounded-full flex items-center justify-center font-satoshi font-bold text-white text-xl shadow-inner`}>
                  {member.initials}
                </div>
                <h3 className="font-satoshi font-bold text-xl text-navy leading-none">
                  {member.name}
                </h3>
              </div>

              <p className="font-dm-sans text-navy/70 text-sm leading-relaxed flex-grow">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
