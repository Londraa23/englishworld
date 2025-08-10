import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, PartyPopper, Gift, Users } from "lucide-react"

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold">Eventos</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PartyPopper className="h-5 w-5" />
              Christmas Party
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Celebra la Navidad con nosotros. Juegos, música y actividades en inglés. 22 de Diciembre, 18:00h.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gift className="h-5 w-5" />
              Spring Giveaway
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Participa en nuestro sorteo de primavera. Cursos gratuitos y material de estudio. Marzo 2025.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Conversation Club
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Únete a nuestro club de conversación semanal. Practica inglés en un ambiente relajado. Todos los viernes.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Movie Nights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Proyección de películas en versión original con actividades y debate. Último jueves de cada mes.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

