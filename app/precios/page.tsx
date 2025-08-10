import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const plans = [
  {
    name: "Mensual",
    price: 100,
    description: "Perfecto para probar nuestros servicios",
    features: ["Acceso a todas las clases", "Material de estudio incluido", "Prueba de nivel gratuita"],
    discount: 0,
  },
  {
    name: "Trimestral",
    price: 270,
    description: "Ideal para preparación a corto plazo",
    features: [
      "Acceso a todas las clases",
      "Material de estudio incluido",
      "Prueba de nivel gratuita",
      "1 simulacro de examen gratis",
    ],
    discount: 10,
  },
  {
    name: "Anual",
    price: 960,
    description: "La mejor opción para tu preparación completa",
    features: [
      "Acceso a todas las clases",
      "Material de estudio incluido",
      "Prueba de nivel gratuita",
      "4 simulacros de examen gratis",
      "Asesoramiento personalizado",
    ],
    discount: 15,
  },
]

export default function PreciosPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold text-center">Nuestros Planes</h1>
      <p className="mb-12 text-center text-lg text-muted-foreground">
        Elige el plan que mejor se adapte a tus necesidades y objetivos
      </p>
      <div className="grid gap-8 md:grid-cols-3">
        {plans.map((plan) => {
          const discountedPrice = plan.price * (1 - plan.discount / 100)
          return (
            <Card key={plan.name} className="flex flex-col">
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-4">
                  <span className="text-4xl font-bold">{discountedPrice.toFixed(2)}€</span>
                  {plan.discount > 0 && (
                    <>
                      <span className="ml-2 text-muted-foreground line-through">{plan.price.toFixed(2)}€</span>
                      <span className="ml-2 text-green-600">-{plan.discount}%</span>
                    </>
                  )}
                </div>
                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/contact">Elegir Plan</Link>
                </Button>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

