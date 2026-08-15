import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/niveles", label: "Niveles" },
  { href: "/exams", label: "Exámenes" },
  { href: "/contacto", label: "Contacto" },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 noise-overlay" />

      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-[1.2fr_0.8fr_1fr] gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 w-fit">
              <div className="relative w-7 h-7 shrink-0">
                <Image src="/logo-transparent.png" alt="English World" fill sizes="28px" className="object-contain" />
              </div>
              <span className="font-satoshi font-semibold text-lg tracking-tight-apple">
                English World
              </span>
            </Link>
            <p className="font-dm-sans text-sm text-white/60 leading-body max-w-xs">
              Academia de inglés y Centro Preparador Oficial Cambridge en Zaragoza.
              Profesores nativos, grupos reducidos y resultados reales.
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-4">
            <span className="font-dm-mono text-gold text-xs tracking-widest uppercase">
              // NAVEGACIÓN
            </span>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-dm-sans text-sm text-white/70 hover:text-white transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <span className="font-dm-mono text-gold text-xs tracking-widest uppercase">
              // CONTACTO
            </span>
            <ul className="flex flex-col gap-3 font-dm-sans text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gold" />
                <span>Calle Celso Emilio Ferreiro 17, Zaragoza</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 shrink-0 text-gold" />
                <a href="tel:+34651859939" className="hover:text-white transition-colors">
                  651 85 99 39
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 shrink-0 text-gold" />
                <a href="mailto:contacto@academiaenglishworld.com" className="hover:text-white transition-colors">
                  contacto@academiaenglishworld.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 shrink-0 text-gold" />
                <span>Lunes a Viernes, 9:00 – 21:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-dm-sans text-xs text-white/40">
            © {year} English World. Todos los derechos reservados.
          </p>
          <nav className="flex items-center gap-4 font-dm-sans text-xs text-white/40">
            <Link href="/aviso-legal" className="hover:text-white transition-colors">
              Aviso legal
            </Link>
            <Link href="/privacidad" className="hover:text-white transition-colors">
              Privacidad
            </Link>
            <Link href="/cookies" className="hover:text-white transition-colors">
              Cookies
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
