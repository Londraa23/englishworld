import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pica-enhance-20250209144059-removebg-preview%20(2)-tqod4a4p3OqWeHtVYcbomGULHV4z1f.png"
              alt="English World Logo"
              className="h-16 w-auto mb-4"
            />
            <h3 className="mb-4 text-lg font-semibold">English World</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Calle Celso Emilio Ferreiro 17, Zaragoza
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <Link href="tel:+34651859939">651 85 99 39</Link>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <Link href="mailto:contacto@academiaenglishworld.com">contacto@academiaenglishworld.com</Link>
              </p>
              <div className="space-y-2">
                <p>Lunes a Viernes:</p>
                <p className="font-semibold">9:00 - 21:00</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:underline">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:underline">
                  Eventos
                </Link>
              </li>
              <li>
                <Link href="/exams" className="hover:underline">
                  Calendario de Exámenes
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Certificaciones</h3>
            <p className="mb-4">Centro preparador oficial de Cambridge English</p>
            <p>Niveles disponibles: A2 - C2</p>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/10 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} English World. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

