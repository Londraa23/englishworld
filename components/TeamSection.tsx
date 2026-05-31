"use client"

import { motion } from "framer-motion"

const team = [
  {
    name: "Sarah M.",
    role: "NATIVE TEACHER",
    bio: "Especialista en conversación y exámenes B2/C1. Hace que hablar inglés sea lo más natural del mundo.",
    origin: "London, UK",
    initials: "SM",
    color: "bg-red",
    certs: ["CELTA"],
  },
  {
    name: "James R.",
    role: "NATIVE TEACHER",
    bio: "Experto en gramática avanzada y preparación C2. Su método hace complejos los conceptos más simples.",
    origin: "Chicago, USA",
    initials: "JR",
    color: "bg-navy",
    certs: ["DELTA"],
  },
  {
    name: "Emma K.",
    role: "CAMBRIDGE EXAMINER",
    bio: "Examinadora oficial Cambridge. Conoce exactamente lo que buscan los evaluadores.",
    origin: "Dublin, Ireland",
    initials: "EK",
    color: "bg-gold",
    certs: ["CELTA", "Examiner"],
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
                <div>
                  <h3 className="font-satoshi font-bold text-xl text-navy leading-none mb-1">
                    {member.name}
                  </h3>
                  <span className="font-dm-mono text-[10px] text-red/60 tracking-wider">
                    {member.role}
                  </span>
                </div>
              </div>

              <p className="font-dm-sans text-navy/70 text-sm leading-relaxed mb-8 flex-grow">
                {member.bio}
              </p>

              <div className="flex items-center gap-2 mb-6">
                <span className="font-dm-mono text-xs text-navy/40 uppercase tracking-widest">
                  {member.origin}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-navy/5">
                {member.certs.map((cert) => (
                  <span
                    key={cert}
                    className="font-dm-mono text-[10px] text-navy/60 bg-navy/5 px-2 py-0.5 rounded-full"
                  >
                    {cert}
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
