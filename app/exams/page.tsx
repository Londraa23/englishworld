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

