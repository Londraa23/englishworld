import { LegalLayout } from "@/components/LegalLayout"

export const metadata = {
  title: "Política de Privacidad | English World Zaragoza",
  description: "Cómo tratamos tus datos personales en English World, academia de inglés en Zaragoza.",
  alternates: {
    canonical: "https://www.academiaenglishworld.com/privacidad",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacidadPage() {
  return (
    <LegalLayout title="Política de Privacidad" updated="15 de agosto de 2026">
      <p>
        En English World nos tomamos en serio la protección de tus datos
        personales. Esta política explica qué datos recogemos, para qué los
        usamos y qué derechos tienes, de acuerdo con el Reglamento (UE)
        2016/679 (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos
        Personales y garantía de los derechos digitales (LOPDGDD).
      </p>

      <h2>1. Responsable del tratamiento</h2>
      <ul>
        <li><strong>Titular:</strong> Rebeca Carlile Esteban</li>
        <li><strong>NIF:</strong> 25443006S</li>
        <li><strong>Nombre comercial:</strong> English World</li>
        <li><strong>Domicilio:</strong> Calle Celso Emilio Ferreiro 17, 50017 Zaragoza, España</li>
        <li><strong>Correo electrónico:</strong> contacto@academiaenglishworld.com</li>
      </ul>

      <h2>2. ¿Qué datos recogemos?</h2>
      <p>
        Solo recogemos los datos que nos facilitas voluntariamente a través
        de nuestros formularios de contacto e inscripción:
      </p>
      <ul>
        <li>Nombre y apellidos</li>
        <li>Número de teléfono</li>
        <li>Correo electrónico (si lo facilitas)</li>
        <li>Información sobre tu nivel de inglés, curso de interés y comentarios que añadas voluntariamente</li>
      </ul>
      <p>
        No recogemos datos de categorías especiales (salud, ideología, etc.)
        ni datos de menores sin el consentimiento de sus padres o tutores.
      </p>

      <h2>3. ¿Para qué usamos tus datos?</h2>
      <ul>
        <li>Responder a tus consultas sobre nuestros cursos y servicios.</li>
        <li>Gestionar tu solicitud de información o inscripción.</li>
        <li>Contactarte por teléfono, email o WhatsApp en relación con tu solicitud.</li>
      </ul>
      <p>
        No utilizamos tus datos para fines distintos a los indicados, ni los
        empleamos para elaborar perfiles automatizados con efectos legales
        sobre ti.
      </p>

      <h2>4. Base legal</h2>
      <p>
        La base legal para el tratamiento de tus datos es tu
        <strong> consentimiento</strong>, que nos das al rellenar y enviar
        voluntariamente nuestros formularios de contacto.
      </p>

      <h2>5. ¿Con quién compartimos tus datos?</h2>
      <p>
        No vendemos ni cedemos tus datos a terceros con fines comerciales.
        Tus datos solo pueden ser accedidos por:
      </p>
      <ul>
        <li>El personal de English World encargado de gestionar consultas e inscripciones.</li>
        <li>
          Proveedores tecnológicos que nos ayudan a operar la web y que
          actúan como encargados del tratamiento (por ejemplo, el proveedor
          de envío de formularios de contacto o de hospedaje web), únicamente
          en la medida necesaria para prestar dicho servicio.
        </li>
      </ul>

      <h2>6. Plazo de conservación</h2>
      <p>
        Conservamos tus datos mientras exista una relación o interés
        legítimo relacionado con tu consulta o inscripción, y en todo caso
        durante los plazos legalmente exigibles. Puedes solicitar su
        supresión en cualquier momento (ver sección de derechos).
      </p>

      <h2>7. Tus derechos</h2>
      <p>
        Puedes ejercer en cualquier momento tus derechos de acceso,
        rectificación, supresión, oposición, limitación del tratamiento y
        portabilidad de tus datos, escribiendo a
        {" "}
        <a href="mailto:contacto@academiaenglishworld.com">contacto@academiaenglishworld.com</a>{" "}
        indicando el derecho que deseas ejercer y adjuntando copia de un
        documento que acredite tu identidad.
      </p>
      <p>
        Si consideras que no hemos tratado tus datos correctamente, tienes
        derecho a presentar una reclamación ante la Agencia Española de
        Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>).
      </p>

      <h2>8. Seguridad</h2>
      <p>
        Aplicamos medidas técnicas y organizativas razonables para proteger
        tus datos personales frente a accesos no autorizados, pérdida o
        alteración.
      </p>

      <h2>9. Cambios en esta política</h2>
      <p>
        Podemos actualizar esta política de privacidad para adaptarla a
        cambios normativos o en nuestros servicios. La fecha de la última
        actualización aparece al inicio de esta página.
      </p>
    </LegalLayout>
  )
}
