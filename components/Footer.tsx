"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Globe, MapPin, Clock, Phone, Mail, CheckCircle } from "lucide-react"
import { InteractiveEmoji } from "./InteractiveEmoji"

const navLinks = [
  { href: "/nosotros", label: "Sobre Nosotros" },
  { href: "/niveles", label: "Niveles" },
  { href: "/exams", label: "Exámenes" },
  { href: "/contacto", label: "Contacto" },
]

const levels = ["A2", "B1", "B2", "C1", "C2"]

export function Footer() {
  return (
    <footer className="bg-night border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Column 1 - Brand & Contact */}
          <div>
            <Link href="/" className="flex items-center gap-2 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <Globe className="w-6 h-6 text-white" />
              </motion.div>
              <span className="font-satoshi font-bold text-xl text-white tracking-tight-apple">
                English World
              </span>
            </Link>

            <p className="mt-1 font-dm-sans text-sm text-white/50">
              Tu futuro comienza aquí.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3 font-dm-sans text-sm text-white/60">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Calle Celso Emilio Ferreiro 17, Zaragoza</span>
              </div>
              <div className="flex items-center gap-3 font-dm-sans text-sm text-white/60">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span>Lunes a Viernes: 9:00 – 21:00</span>
              </div>
              <div className="flex items-center gap-3 font-dm-sans text-sm text-white/60">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:651859939" className="hover:text-sky transition-colors">
                  651 85 99 39
                </a>
              </div>
              <div className="flex items-center gap-3 font-dm-sans text-sm text-white/60">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a
                  href="mailto:contacto@academiaenglishworld.com"
                  className="hover:text-sky transition-colors"
                >
                  contacto@academiaenglishworld.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 2 - Navigation */}
          <div>
            <span className="font-dm-mono text-xs text-sky/60 tracking-wide">
              NAVEGACIÓN
            </span>

            <nav className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="
                    block font-dm-sans text-sm text-white/70
                    transition-colors duration-150
                    hover:text-sky
                  "
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3 - Certifications */}
          <div>
            <span className="font-dm-mono text-xs text-sky/60 tracking-wide">
              CERTIFICACIONES
            </span>

            <p className="mt-4 font-dm-sans text-sm text-white/70">
              Centro Preparador Oficial Cambridge English
            </p>
            <p className="mt-1 font-dm-sans text-sm text-white/70">
              Niveles disponibles: A2 · B1 · B2 · C1 · C2
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {levels.map((level) => (
                <span
                  key={level}
                  className="
                    flex items-center gap-1
                    font-dm-mono text-xs text-gold
                    border border-gold rounded-full
                    px-2 py-0.5
                  "
                >
                  <CheckCircle className="w-3 h-3" />
                  {level}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-dm-sans text-xs text-white/30">
            © 2026 English World. Todos los derechos reservados.
          </p>
          <p className="font-dm-sans text-xs text-white/30 flex items-center gap-1">
            Hecho con 
            <InteractiveEmoji scale={1.5} rotate={15} hoverY={-2}>
              ❤️
            </InteractiveEmoji> 
            en Zaragoza.
          </p>
        </div>
      </div>
    </footer>
  )
}
