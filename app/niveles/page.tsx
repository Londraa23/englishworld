import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NivelesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="mb-8 text-4xl font-bold">Nuestros Niveles</h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              level: "A2 - Key (KET)",
              description: "Nivel básico para comunicarse en situaciones cotidianas simples.",
              skills: [
                "Comprensión básica del inglés escrito y hablado",
                "Comunicación en situaciones cotidianas",
                "Escritura de notas y mensajes breves",
                "Vocabulario esencial para el día a día",
              ],
            },
            {
              level: "B1 - Preliminary (PET)",
              description: "Nivel intermedio bajo para desenvolverse en situaciones habituales.",
              skills: [
                "Comprensión de textos y conversaciones cotidianas",
                "Expresión de opiniones y planes",
                "Escritura de cartas y textos sencillos",
                "Vocabulario para trabajo y estudio",
              ],
            },
            {
              level: "B2 - First (FCE)",
              description: "Nivel intermedio alto para comunicarse con fluidez.",
              skills: [
                "Comprensión de ideas complejas",
                "Comunicación fluida con nativos",
                "Escritura de textos detallados",
                "Vocabulario amplio y variado",
              ],
            },
            {
              level: "C1 - Advanced (CAE)",
              description: "Nivel avanzado para comunicarse con precisión y fluidez.",
              skills: [
                "Comprensión de textos extensos",
                "Expresión fluida y espontánea",
                "Escritura de textos complejos",
                "Vocabulario sofisticado",
              ],
            },
            {
              level: "C2 - Proficiency (CPE)",
              description: "Nivel de maestría, el más alto nivel de competencia.",
              skills: [
                "Comprensión total del idioma",
                "Expresión precisa y matizada",
                "Escritura académica y profesional",
                "Dominio completo del vocabulario",
              ],
            },
          ].map((nivel) => (
            <Card key={nivel.level} className="hover-card">
              <CardHeader>
                <CardTitle className="text-xl">{nivel.level}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">{nivel.description}</p>
                <ul className="space-y-2">
                  {nivel.skills.map((skill) => (
                    <li key={skill} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-8 text-white md:p-12">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="mb-4 text-3xl font-bold">¿No sabes tu nivel?</h2>
              <p className="mb-6">
                Realiza nuestra prueba de nivel gratuita y te ayudaremos a encontrar el curso perfecto para ti.
              </p>
              <Button asChild variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                <Link href="/contact">Solicitar Prueba de Nivel</Link>
              </Button>
            </div>
            <div className="text-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pica-enhance-20250209144059-removebg-preview%20(2)-tqod4a4p3OqWeHtVYcbomGULHV4z1f.png"
                alt="English World Logo"
                className="mx-auto h-32 w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

