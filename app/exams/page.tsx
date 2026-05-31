<<<<<<< HEAD
import { Navbar } from "@/components/Navbar"
import { PageTransition } from "@/components/PageTransition"
import { Footer } from "@/components/Footer"
import { ExamsHero } from "@/components/ExamsHero"
import { ExamsGrid } from "@/components/ExamsGrid"
import { PreparationSection } from "@/components/PreparationSection"
import { CalendarSection } from "@/components/CalendarSection"

export const metadata = {
  title: "Exámenes Cambridge | Centro Oficial | English World",
  description: "Prepara tus exámenes oficiales Cambridge (A2, B1, B2, C1, C2) con English World. Somos Centro Preparador Oficial en Zaragoza con examinadores nativos.",
  alternates: {
    canonical: "https://academiaenglishworld.com/exams",
  },
  openGraph: {
    title: "Exámenes Cambridge | Centro Oficial | English World",
    description: "Prepara tus exámenes oficiales Cambridge en Zaragoza. Centro Preparador Oficial.",
    url: "https://academiaenglishworld.com/exams",
    siteName: "English World",
    images: [
      {
        url: "/og-exams.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_ES",
    type: "website",
  },
}

export default function ExamsPage() {
  return (
    <main className="bg-night">
      <Navbar />
      <PageTransition>
        <ExamsHero />
        <ExamsGrid />
        <PreparationSection />
        <CalendarSection />
      </PageTransition>
      <Footer />
    </main>
  )
}
=======
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, GraduationCap } from "lucide-react"

export default function ExamsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold">Calendario de Exámenes</h1>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Próximas Convocatorias</h2>
          <div className="space-y-4">
            {[
              {
                exam: "B2 First (FCE)",
                date: "15 de Marzo, 2025",
                type: "Paper-based",
                deadline: "1 de Febrero, 2025",
              },
              {
                exam: "C1 Advanced (CAE)",
                date: "22 de Marzo, 2025",
                type: "Computer-based",
                deadline: "8 de Febrero, 2025",
              },
              {
                exam: "B1 Preliminary (PET)",
                date: "5 de Abril, 2025",
                type: "Paper-based",
                deadline: "22 de Febrero, 2025",
              },
            ].map((event) => (
              <Card key={event.exam}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5" />
                    {event.exam}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p>
                      <strong>Fecha:</strong> {event.date}
                    </p>
                    <p>
                      <strong>Tipo:</strong> {event.type}
                    </p>
                    <p>
                      <strong>Fecha límite de inscripción:</strong> {event.deadline}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Información Importante
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p>
                Todos los exámenes se realizan en nuestro centro autorizado Cambridge. Es necesario presentar un
                documento de identidad válido el día del examen.
              </p>
              <h3 className="font-semibold">Proceso de Inscripción:</h3>
              <ol className="list-decimal space-y-2 pl-4">
                <li>Contacta con nosotros para reservar tu plaza</li>
                <li>Realiza el pago de las tasas de examen</li>
                <li>Recibirás un email con la confirmación y los detalles</li>
                <li>Prepárate con nuestros cursos específicos</li>
              </ol>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

>>>>>>> b4879b962bb657922e8ed398700147642d303a33
