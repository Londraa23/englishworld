import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, User } from "lucide-react"

export default function BlogPage() {
  const news = [
    {
      title: "Nuevos cursos intensivos de verano 2025",
      description:
        "Prepárate para el próximo curso académico con nuestros intensivos de julio y agosto. Grupos reducidos y horarios flexibles para todos los niveles.",
      date: "15 de mayo, 2025",
      author: "English World",
      readTime: "2 min",
      category: "Cursos",
    },
    {
      title: "Resultados excelentes en la última convocatoria Cambridge",
      description:
        "Nuestros estudiantes han logrado un 98% de aprobados en los exámenes de marzo. Descubre cómo nuestro método de preparación garantiza el éxito.",
      date: "2 de mayo, 2025",
      author: "English World",
      readTime: "3 min",
      category: "Exámenes",
    },
    {
      title: "English World se expande: Nueva sede en el centro",
      description:
        "Ampliamos nuestras instalaciones para ofrecer más horarios y comodidad. Nuevas aulas equipadas con la última tecnología para mejorar tu experiencia de aprendizaje.",
      date: "20 de abril, 2025",
      author: "English World",
      readTime: "4 min",
      category: "Novedades",
    },
    {
      title: "Club de conversación: Nueva actividad semanal",
      description:
        "Únete a nuestro nuevo club de conversación todos los viernes. Practica inglés en un ambiente relajado y conoce a otros estudiantes.",
      date: "15 de abril, 2025",
      author: "English World",
      readTime: "2 min",
      category: "Actividades",
    },
    {
      title: "Preparación específica para exámenes IELTS",
      description:
        "Nuevo programa especializado en preparación IELTS. Metodología probada para alcanzar la puntuación que necesitas.",
      date: "1 de abril, 2025",
      author: "English World",
      readTime: "3 min",
      category: "Cursos",
    },
    {
      title: "Workshop: Técnicas de estudio efectivas",
      description:
        "Aprende las mejores técnicas para maximizar tu tiempo de estudio y mejorar tu rendimiento en los exámenes.",
      date: "15 de marzo, 2025",
      author: "English World",
      readTime: "3 min",
      category: "Eventos",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold">Noticias y Actualizaciones</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {news.map((item, index) => (
          <Card key={index} className="hover-card">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">{item.category}</span>
                <span className="text-sm text-muted-foreground">{item.date}</span>
              </div>
              <CardTitle className="text-xl">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">{item.description}</p>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{item.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{item.readTime}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

