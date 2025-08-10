"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pica-enhance-20250209144059-removebg-preview%20(2)-tqod4a4p3OqWeHtVYcbomGULHV4z1f.png"
              alt="English World Logo"
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-primary">English World</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:space-x-4 lg:space-x-6">
            <Link href="/" className="text-sm font-medium hover:text-primary font-medium transition-colors">
              Inicio
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary font-medium transition-colors">
              Quiénes Somos
            </Link>
            <Link href="/niveles" className="text-sm font-medium hover:text-primary font-medium transition-colors">
              Niveles
            </Link>

            <Link href="/exams" className="text-sm font-medium hover:text-primary font-medium transition-colors">
              Exámenes
            </Link>

            <Link href="/contact" className="text-sm font-medium hover:text-primary font-medium transition-colors">
              Contáctanos
            </Link>
          </nav>

          {/* Mobile Navigation Button */}
          <Button variant="ghost" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="space-y-1 pb-3 pt-2">
              <Link
                href="/"
                className="block px-3 py-2 text-base font-medium hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-base font-medium hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Quiénes Somos
              </Link>
              <Link
                href="/niveles"
                className="block px-3 py-2 text-base font-medium hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Niveles
              </Link>
              <Link
                href="/events"
                className="block px-3 py-2 text-base font-medium hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Eventos
              </Link>
              <Link
                href="/exams"
                className="block px-3 py-2 text-base font-medium hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Exámenes
              </Link>
              <Link
                href="/precios"
                className="block px-3 py-2 text-base font-medium hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Precios
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-base font-medium hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Contáctanos
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

