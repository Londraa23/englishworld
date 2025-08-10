import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, BookOpen, Trophy, School, Clock, Target } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* Historia Section */}
        <section className="mb-16">
          <h1 className="mb-8 text-4xl font-bold">Nuestra Historia</h1>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground">
                English World nació en 2014 con una visión clara: revolucionar la manera de enseñar inglés en Zaragoza.
                Desde entonces, hemos ayudado a cientos de estudiantes a alcanzar sus metas lingüísticas.
              </p>
              <p className="text-lg text-muted-foreground">
                Nuestra academia se ha convertido en un referente en la preparación de exámenes Cambridge, manteniendo
                una tasa de éxito superior al 95% en todas las convocatorias.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-primary">10+</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Años de Experiencia</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-primary">2500+</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Alumnos Satisfechos</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-primary">95%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Tasa de Aprobados</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-primary">100%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Profesores Nativos</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Metodología Section */}
        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold">Nuestra Metodología</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: BookOpen,
                title: "Aprendizaje Activo",
                description: "Clases dinámicas centradas en la comunicación real y práctica del idioma.",
              },
              {
                icon: Users,
                title: "Grupos Reducidos",
                description: "Máximo 8 alumnos por clase para garantizar atención personalizada.",
              },
              {
                icon: Trophy,
                title: "Enfoque Práctico",
                description: "Preparación específica para situaciones reales y exámenes oficiales.",
              },
            ].map((item) => (
              <Card key={item.title} className="hover-card">
                <CardHeader>
                  <div className="mb-2 flex items-center gap-2">
                    <item.icon className="h-6 w-6 text-primary" />
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

{/* Instalaciones Section */}
<section className="mb-16">
  <h2 className="mb-8 text-3xl font-bold">Nuestras Instalaciones</h2>
  <div className="grid gap-8 md:grid-cols-2">
    <div className="space-y-4">
      <p className="text-lg text-muted-foreground">
        Contamos con instalaciones modernas y completamente equipadas para garantizar la mejor experiencia de
        aprendizaje:
      </p>
      <ul className="space-y-3">
        <li className="flex items-center gap-2">
          <School className="h-5 w-5 text-primary" />
          <span>Aulas climatizadas con tecnología multimedia</span>
        </li>
        <li className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-primary" />
          <span>Sala de estudio disponible fuera del horario de clases</span>
        </li>
        <li className="flex items-center gap-2">
          <Target className="h-5 w-5 text-primary" />
          <span>Biblioteca con recursos para todos los niveles</span>
        </li>
      </ul>
    </div>
    
    {/* Grid de imágenes */}
    <div className="grid grid-cols-2 gap-4">
      <Card className="overflow-hidden">
        <img
          src="/header.png"
          alt="Fachada de English World"
          className="h-48 w-full object-cover"
        />
      </Card>
      <Card className="overflow-hidden">
        <img
          src="/clase_r.png"
          alt="Aula principal"
          className="h-48 w-full object-cover"
        />
      </Card>
      <Card className="overflow-hidden">
        <img
          src="/clase_m.png"
          alt="Segunda clase"
          className="h-48 w-full object-cover"
        />
      </Card>
      <Card className="overflow-hidden">
        <img
          src="/header_der.png"
          alt="Sala de estar"
          className="h-48 w-full object-cover"
        />
      </Card>
    </div>
  </div>
</section>


        {/* CTA Section */}
        <section className="rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-8 text-white md:p-12">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="mb-4 text-3xl font-bold">¿Quieres conocernos mejor?</h2>
              <p className="mb-6">
                Ven a visitarnos y descubre por qué somos la mejor opción para aprender inglés en Zaragoza.
              </p>
              <Button asChild variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                <Link href="/contact">Solicitar Visita</Link>
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
        </section>
      </div>
    </div>
  )
}

