import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig, siteUrl } from "@/lib/site-config";
import "../terminos/terminos.css";

const title = "Política de Cookies";
const description =
  "Política de Cookies de Numia Digital Studio: qué tecnologías de almacenamiento usa este sitio y cómo gestionarlas.";

const host = siteUrl.replace(/^https?:\/\//, "");

const sections = [
  {
    title: "1. Qué son las cookies",
    paragraphs: [
      "Las cookies son pequeños archivos de texto que un sitio guarda en tu navegador cuando lo visitás. Sirven para recordar algo de esa visita, por ejemplo si ya viste un aviso, o datos anónimos sobre cómo se navega.",
      "Esta política también cubre tecnologías parecidas, como el almacenamiento local del navegador (localStorage y sessionStorage).",
    ],
  },
  {
    title: "2. Responsable",
    paragraphs: [
      `${siteConfig.name}, con sede en ${siteConfig.location}, es responsable de ${host}. Para consultas sobre esta política podés escribir a ${siteConfig.email}.`,
    ],
  },
  {
    title: "3. Cookies necesarias",
    paragraphs: [
      "Hoy este sitio no instala cookies HTTP propias para identificarte, medir visitas ni recordar un consentimiento. No hay un panel de preferencias de cookies porque no usamos cookies no esenciales.",
    ],
  },
  {
    title: "4. Almacenamiento de la sesión",
    paragraphs: [
      "Usamos sessionStorage, que no es una cookie HTTP, para recordar si ya viste la introducción del sitio. Así no se vuelve a mostrar en la misma visita.",
      "Ese dato queda solo en tu navegador, no se envía a nuestros servidores y se borra al cerrar la sesión del navegador.",
    ],
  },
  {
    title: "5. Cookies analíticas",
    paragraphs: [
      "No usamos Google Analytics ni otra herramienta de analítica. No se instalan cookies como _ga ni equivalentes.",
      "Si más adelante sumamos analítica, se pedirá consentimiento antes de activarla y se actualizará esta política.",
    ],
  },
  {
    title: "6. Cookies de marketing",
    paragraphs: [
      "No usamos cookies de publicidad, remarketing ni píxeles de redes sociales. Si en el futuro incorporamos alguna herramienta de ese tipo, se actualizará esta política y se pedirá consentimiento antes de activarla.",
    ],
  },
  {
    title: "7. Servicios de terceros",
    paragraphs: [
      "No usamos Google Tag Manager, CookieYes, mapas de calor ni chats en vivo de terceros.",
      "Los formularios del sitio se procesan en nuestro servidor y no instalan cookies. Los enlaces a WhatsApp, Instagram o Facebook salen de este sitio y se rigen por las políticas de esos servicios.",
    ],
  },
  {
    title: "8. Cómo gestionarlas",
    paragraphs: [
      "Como no hay cookies no esenciales, no mostramos un banner para aceptarlas o rechazarlas. Si eso cambia, el banner va a aparecer antes de activarlas y vas a poder aceptarlas, rechazarlas o configurarlas.",
    ],
  },
  {
    title: "9. Cómo bloquearlas desde el navegador",
    paragraphs: [
      "Todos los navegadores permiten bloquear o borrar cookies y datos del sitio desde su configuración. Bloquear también el almacenamiento de la sesión puede hacer que la introducción del sitio vuelva a aparecer en cada visita.",
    ],
  },
  {
    title: "10. Cambios de esta política",
    paragraphs: [
      "Podemos actualizar esta política si incorporamos herramientas nuevas o cambian las que usamos. Los cambios rigen desde su publicación en este sitio.",
    ],
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/cookies",
  },
  openGraph: {
    title: `${title} | ${siteConfig.name}`,
    description,
    url: `${siteUrl}/cookies`,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CookiesPage() {
  return (
    <div className="legal">
      <header className="legal__top">
        <Link className="legal__brand" href="/" aria-label={`${siteConfig.name}, ir al inicio`}>
          <Image
            src="/images/logo-header.webp"
            alt={siteConfig.name}
            width={148}
            height={22}
            priority
            sizes="148px"
          />
        </Link>
        <Link className="legal__back" href="/">
          Volver al sitio
        </Link>
      </header>

      <main className="legal__main" id="contenido-principal">
        <p className="legal__kicker">Legal</p>
        <h1>Política de Cookies</h1>
        <p className="legal__updated">Última actualización: septiembre 2026</p>
        <p className="legal__lead">
          Esta política explica qué cookies y tecnologías similares usa {host}, para qué, y cómo podés
          gestionarlas. Hoy el sitio no usa cookies de analítica ni de publicidad.
        </p>

        {sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
      </main>
    </div>
  );
}
