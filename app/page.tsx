import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  GraduationCap,
  Calendar,
  PartyPopperIcon as Party,
  MessageCircle,
  Star,
  Award,
  BookOpen,
  Users,
} from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-16 text-primary-foreground md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Tu futuro comienza aquí</h1>
              <p className="text-lg text-primary-foreground/90">
                Aprende inglés con profesores nativos y certificados. Preparación especializada para exámenes Cambridge.
              </p>
              <div className="flex gap-4">
                <Button asChild className="bg-white text-primary hover:bg-primary hover:text-white transition-colors">
                  <Link href="/contact">Solicita Información</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white hover:text-primary transition-colors"
                >
                  <Link href="/about">Conoce Más</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-64 md:h-96">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pica-enhance-20250209144059-removebg-preview%20(2)-tqod4a4p3OqWeHtVYcbomGULHV4z1f.png"
                alt="English World"
                className="absolute inset-0 h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">¿Por qué elegirnos?</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: GraduationCap,
                title: "Profesores Cualificados",
                description: "Nativos y certificados con amplia experiencia en enseñanza.",
              },
              {
                icon: Calendar,
                title: "Horarios Flexibles",
                description: "Grupos reducidos en diferentes horarios para tu comodidad.",
              },
              {
                icon: Party,
                title: "Eventos y Actividades",
                description: "Actividades extra para practicar inglés de forma divertida.",
              },
              {
                icon: MessageCircle,
                title: "Seguimiento Personalizado",
                description: "Evaluación continua y apoyo constante en tu aprendizaje.",
              },
              {
                icon: Star,
                title: "Metodología Probada",
                description: "Enfoque comunicativo para un aprendizaje efectivo y rápido.",
              },
              {
                icon: Award,
                title: "Centro Oficial Cambridge",
                description: "Preparación especializada para exámenes oficiales.",
              },
              {
                icon: BookOpen,
                title: "Recursos Exclusivos",
                description: "Acceso a materiales y plataformas de aprendizaje online.",
              },
              {
                icon: Users,
                title: "Comunidad de Aprendizaje",
                description: "Ambiente acogedor y motivador para practicar inglés.",
              },
            ].map((item, index) => (
              <Card key={index} className="hover-card">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Lo que dicen nuestros estudiantes</h2>
          <Carousel className="w-full max-w-xs mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg">
            <CarouselContent>
              {[
                {
                  name: "María G.",
                  text: "Gracias a English World, aprobé mi examen FCE con distinción. Los profesores son increíbles y el ambiente de estudio es genial.",
                  course: "Curso B2 First",
                },
                {
                  name: "Carlos R.",
                  text: "La flexibilidad de horarios y la atención personalizada me han permitido mejorar mi inglés mientras trabajo. ¡Altamente recomendado!",
                  course: "Clases particulares",
                },
                {
                  name: "Laura M.",
                  text: "Los eventos y actividades extra son muy divertidos. He hecho nuevos amigos mientras practico inglés. ¡Una experiencia fantástica!",
                  course: "Curso conversación C1",
                },
              ].map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <CardContent className="flex flex-col items-center p-6 text-center">
                      <Star className="h-8 w-8 text-yellow-400 mb-4" />
                      <p className="mb-4 italic">"{testimonial.text}"</p>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.course}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Últimas Noticias</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Nuevos cursos intensivos de verano",
                description: "Prepárate para el próximo curso académico con nuestros intensivos de julio y agosto.",
                date: "15 de mayo, 2025",
              },
              {
                title: "Resultados excelentes en la última convocatoria Cambridge",
                description: "Nuestros estudiantes han logrado un 98% de aprobados en los exámenes de marzo.",
                date: "2 de mayo, 2025",
              },
              {
                title: "English World se expande: Nueva sede en el centro",
                description: "Ampliamos nuestras instalaciones para ofrecer más horarios y comodidad.",
                date: "20 de abril, 2025",
              },
            ].map((news, index) => (
              <Card key={index} className="hover-card">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">{news.title}</h3>
                  <p className="mb-4 text-muted-foreground">{news.description}</p>
                  <p className="text-sm text-primary">{news.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Centro Preparador Oficial</h2>
          <div className="flex justify-center items-center">
            <div className="text-center max-w-xl">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qrd8INIMUe7gyjUjcJKZHQTsfzB0G3.png"
                alt="Cambridge English Exam Preparation Centre"
                className="h-32 w-auto object-contain mx-auto"
              />
              <p className="mt-6 text-lg text-muted-foreground">
                Como centro preparador oficial de Cambridge English, garantizamos la más alta calidad en la preparación
                para los exámenes oficiales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Preguntas Frecuentes</h2>
          <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
            {[
              {
                question: "¿Cuánto duran los cursos?",
                answer:
                  "La duración de los cursos varía según el nivel y la intensidad. Generalmente, ofrecemos cursos trimestrales, semestrales y anuales. También tenemos opciones intensivas de verano.",
              },
              {
                question: "¿Cómo puedo conocer mi nivel de inglés?",
                answer:
                  "Ofrecemos una prueba de nivel gratuita que puedes realizar en nuestra academia. Basándonos en los resultados, te recomendaremos el curso más adecuado.",
              },
              {
                question: "¿Cuál es el tamaño de los grupos?",
                answer:
                  "Nuestros grupos son reducidos, con un máximo de 8 estudiantes por clase. Esto nos permite ofrecer atención personalizada y maximizar el tiempo de práctica de cada alumno.",
              },
              {
                question: "¿Ofrecen preparación específica para exámenes Cambridge?",
                answer:
                  "Sí, somos un centro preparador oficial de Cambridge y ofrecemos cursos especializados para cada nivel de examen, desde A2 Key hasta C2 Proficiency.",
              },
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-secondary/80 to-secondary/60 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">¿Listo para empezar tu viaje con el inglés?</h2>
          <p className="mb-8 text-lg text-white/90">
            Únete a English World y descubre una nueva forma de aprender inglés
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/contact">Contactar Ahora</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

