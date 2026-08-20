import { LegalLayout } from "@/components/LegalLayout"

export const metadata = {
  title: "Aviso Legal | English World Zaragoza",
  description: "Información legal del titular de la web de English World, academia de inglés en Zaragoza.",
  alternates: {
    canonical: "https://www.academiaenglishworld.com/aviso-legal",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function AvisoLegalPage() {
  return (
    <LegalLayout title="Aviso Legal" updated="15 de agosto de 2026">
      <p>
        En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la
        Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se
        facilitan a continuación los datos identificativos del titular de este
        sitio web.
      </p>

      <h2>1. Datos identificativos</h2>
      <ul>
        <li><strong>Titular:</strong> Rebeca Carlile Esteban</li>
        <li><strong>NIF:</strong> 25443006S</li>
        <li><strong>Nombre comercial:</strong> English World</li>
        <li><strong>Domicilio:</strong> Calle Celso Emilio Ferreiro 17, 50017 Zaragoza, España</li>
        <li><strong>Correo electrónico:</strong> contacto@academiaenglishworld.com</li>
        <li><strong>Teléfono:</strong> 651 85 99 39</li>
        <li><strong>Actividad:</strong> Academia de idiomas y centro preparador de exámenes oficiales Cambridge</li>
      </ul>

      <h2>2. Objeto</h2>
      <p>
        El presente sitio web tiene como finalidad informar sobre los cursos,
        niveles, exámenes oficiales y servicios de English World, así como
        permitir a los usuarios solicitar información y ponerse en contacto
        con la academia.
      </p>

      <h2>3. Condiciones de uso</h2>
      <p>
        El acceso y uso de este sitio web atribuye la condición de usuario y
        supone la aceptación, desde dicho acceso, de las condiciones
        generales de uso aquí recogidas. El usuario se compromete a hacer un
        uso adecuado de los contenidos y servicios que English World ofrece a
        través de su web, y a no emplearlos para incurrir en actividades
        ilícitas o contrarias a la buena fe y al ordenamiento legal.
      </p>

      <h2>4. Propiedad intelectual e industrial</h2>
      <p>
        Todos los contenidos del sitio web (textos, imágenes, logotipos,
        diseño, código fuente y demás elementos) son propiedad de English
        World o de terceros que han autorizado su uso, y están protegidos por
        la normativa de propiedad intelectual e industrial vigente. Queda
        prohibida su reproducción, distribución o modificación total o
        parcial sin autorización expresa del titular.
      </p>

      <h2>5. Enlaces a terceros</h2>
      <p>
        Este sitio puede incluir enlaces o contenidos incrustados de
        terceros (por ejemplo, un mapa de Google Maps). English World no se
        hace responsable del contenido de dichos sitios ni de las prácticas
        de privacidad que apliquen, siendo responsabilidad de cada usuario
        revisar las condiciones de los servicios de terceros que decida
        utilizar.
      </p>

      <h2>6. Legislación aplicable</h2>
      <p>
        Las presentes condiciones se rigen por la legislación española.
        Para cualquier controversia derivada del acceso o uso de este sitio
        web, las partes se someten a los juzgados y tribunales del domicilio
        del usuario, salvo que la normativa aplicable disponga otra cosa.
      </p>

      <h2>7. Contacto</h2>
      <p>
        Para cualquier consulta relacionada con este aviso legal, puede
        escribir a <a href="mailto:contacto@academiaenglishworld.com">contacto@academiaenglishworld.com</a>.
      </p>
    </LegalLayout>
  )
}
