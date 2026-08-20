import { LegalLayout } from "@/components/LegalLayout"

export const metadata = {
  title: "Política de Cookies | English World Zaragoza",
  description: "Qué cookies y tecnologías similares utiliza la web de English World.",
  alternates: {
    canonical: "https://www.academiaenglishworld.com/cookies",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function CookiesPage() {
  return (
    <LegalLayout title="Política de Cookies" updated="15 de agosto de 2026">
      <p>
        Una cookie es un pequeño archivo que se almacena en tu navegador
        cuando visitas una web. En esta página te explicamos qué cookies y
        tecnologías similares utiliza academiaenglishworld.com y con qué
        finalidad.
      </p>

      <h2>1. Cookies técnicas (necesarias)</h2>
      <p>
        Son las estrictamente necesarias para que la web funcione
        correctamente (por ejemplo, recordar tus preferencias de
        navegación). No requieren consentimiento porque no recogen datos
        con fines publicitarios ni de perfilado.
      </p>

      <h2>2. Cookies analíticas</h2>
      <p>
        Utilizamos <strong>Vercel Analytics</strong> para conocer, de forma
        agregada y anónima, cómo se usa la web (páginas más visitadas,
        origen del tráfico, etc.) y así poder mejorarla. Vercel Analytics
        está diseñado para no utilizar cookies de seguimiento individual ni
        recopilar datos personales identificables. Más información en la
        política de privacidad de Vercel:
        {" "}
        <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
          vercel.com/legal/privacy-policy
        </a>.
      </p>

      <h2>3. Contenido incrustado de terceros</h2>
      <p>
        Algunas páginas de este sitio incluyen un mapa interactivo de{" "}
        <strong>Google Maps</strong> para mostrar la ubicación de la
        academia. Al cargar ese mapa, Google puede instalar sus propias
        cookies según su política de privacidad, ajena a English World. Más
        información en{" "}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
          policies.google.com/privacy
        </a>.
      </p>

      <h2>4. Cómo desactivar o eliminar las cookies</h2>
      <p>
        Puedes permitir, bloquear o eliminar las cookies instaladas en tu
        equipo configurando las opciones de tu navegador:
      </p>
      <ul>
        <li>Google Chrome: Configuración → Privacidad y seguridad → Cookies</li>
        <li>Mozilla Firefox: Ajustes → Privacidad y seguridad</li>
        <li>Safari: Preferencias → Privacidad</li>
        <li>Microsoft Edge: Configuración → Cookies y permisos del sitio</li>
      </ul>
      <p>
        Ten en cuenta que bloquear ciertas cookies puede afectar al
        funcionamiento de algunos elementos de la web, como el mapa
        interactivo.
      </p>

      <h2>5. Más información</h2>
      <p>
        Para cualquier duda sobre esta política de cookies, puedes
        escribirnos a{" "}
        <a href="mailto:contacto@academiaenglishworld.com">contacto@academiaenglishworld.com</a>.
      </p>
    </LegalLayout>
  )
}
