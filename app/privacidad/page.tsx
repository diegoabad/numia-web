import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig, siteUrl } from "@/lib/site-config";
import "../terminos/terminos.css";

const title = "Políticas de Privacidad";
const description =
  "Política de Privacidad de Numia Digital Studio: qué datos recopilamos, para qué los usamos y cuáles son tus derechos.";

const host = siteUrl.replace(/^https?:\/\//, "");

const sections = [
  {
    title: "1. Responsable del tratamiento",
    paragraphs: [
      `${siteConfig.name} es el nombre comercial bajo el cual se tratan los datos personales recopilados a través de ${host}, con sede en ${siteConfig.location} (en adelante, "el Responsable"). Para consultas sobre privacidad podés escribir a ${siteConfig.email}.`,
    ],
  },
  {
    title: "2. Marco legal",
    paragraphs: [
      "El tratamiento de datos personales se rige por la Ley N.º 25.326 de Protección de los Datos Personales de la República Argentina y sus normas reglamentarias.",
      "Al usar este sitio, escribirnos o enviar un formulario, aceptás las prácticas descritas en esta política.",
    ],
  },
  {
    title: "3. Datos que recopilamos",
    paragraphs: [
      "Recopilamos los datos que nos das de forma voluntaria por WhatsApp, correo o el formulario del sitio: nombre o razón social, correo electrónico, teléfono y la descripción de tu consulta o proyecto.",
      "No pedimos datos sensibles, como información de salud, ideología, religión u origen racial.",
    ],
  },
  {
    title: "4. Para qué los usamos",
    paragraphs: [
      "Usamos esos datos para responder tu consulta o presupuesto, gestionar la relación comercial si hay un proyecto, y enviarte comunicaciones relacionadas con ese trabajo.",
      "No los usamos para publicidad no solicitada, newsletters masivos ni campañas de marketing sin tu consentimiento.",
    ],
  },
  {
    title: "5. Base del tratamiento",
    paragraphs: [
      "El tratamiento se basa en tu consentimiento, al escribirnos o enviar un formulario, y en la ejecución del contrato cuando se acuerda un proyecto.",
      "Podés retirar el consentimiento en cualquier momento. Eso no afecta la legalidad de lo ya tratado.",
    ],
  },
  {
    title: "6. Dónde se guardan y cómo se cuidan",
    paragraphs: [
      "Los datos se guardan en herramientas de uso profesional, con medidas de seguridad razonables. No almacenamos datos de tarjetas ni de cuentas bancarias: los cobros se hacen por transferencia o por plataformas de pago externas, que tienen sus propias políticas.",
    ],
  },
  {
    title: "7. Con quién se comparten",
    paragraphs: [
      "No vendemos, alquilamos ni cedemos tus datos con fines comerciales.",
      "Podemos compartir solo lo necesario con proveedores que intervienen en un proyecto, por ejemplo hosting o herramientas de trabajo, y que deben tratar esa información de forma confidencial. También podemos informarla si lo exige una orden judicial o un requerimiento legal.",
    ],
  },
  {
    title: "8. Cookies",
    paragraphs: [
      "Este sitio no usa cookies de publicidad ni de analítica, ni un panel de consentimiento de cookies. Si más adelante se incorporan cookies que no sean estrictamente necesarias, se pedirá consentimiento antes de activarlas y se actualizará esta política.",
      "El detalle está en la Política de Cookies.",
    ],
  },
  {
    title: "9. Transferencias fuera de Argentina",
    paragraphs: [
      "Algunos servicios que usamos, como correo o almacenamiento en la nube, pueden procesar datos en servidores fuera de Argentina. En esos casos elegimos proveedores que ofrecen garantías adecuadas de protección.",
    ],
  },
  {
    title: "10. Cuánto tiempo los conservamos",
    paragraphs: [
      "Conservamos los datos el tiempo necesario para gestionar la consulta o el proyecto, y como máximo 5 años desde la última comunicación, salvo que una ley obligue a guardarlos más tiempo. Cumplido ese plazo, se eliminan.",
    ],
  },
  {
    title: "11. Tus derechos",
    paragraphs: [
      "Según la Ley 25.326 podés acceder a tus datos, pedir que se corrijan si están incompletos o desactualizados, solicitar que se supriman cuando ya no hagan falta, y oponerte al tratamiento.",
      `Para ejercerlos, escribinos a ${siteConfig.email} con tu nombre y el pedido concreto. El acceso se responde dentro de los 10 días corridos. La rectificación o la supresión, dentro de los 5 días hábiles.`,
    ],
  },
  {
    title: "12. Menores de edad",
    paragraphs: [
      "Este sitio y sus servicios están dirigidos a personas mayores de 18 años. No buscamos datos de menores. Si detectamos que recibimos datos de un menor sin autorización de quien ejerce su responsabilidad parental, los eliminamos.",
    ],
  },
  {
    title: "13. Enlaces a otros sitios",
    paragraphs: [
      `${siteConfig.name} no responde por las prácticas de privacidad de sitios de terceros a los que enlacemos, como redes sociales, WhatsApp o plataformas de pago. Conviene leer sus políticas antes de dejarles datos.`,
    ],
  },
  {
    title: "14. Cambios de esta política",
    paragraphs: [
      "Podemos actualizar esta política. Los cambios rigen desde que se publican en este sitio. Si el cambio es importante, vamos a avisar de una forma razonable, por ejemplo con un aviso en el sitio o por correo si sos cliente activo.",
    ],
  },
  {
    title: "15. Autoridad de control",
    paragraphs: [
      "Si considerás que el tratamiento de tus datos no cumple la ley, podés reclamar ante la Agencia de Acceso a la Información Pública (AAIP), autoridad de aplicación en Argentina.",
    ],
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/privacidad",
  },
  openGraph: {
    title: `${title} | ${siteConfig.name}`,
    description,
    url: `${siteUrl}/privacidad`,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacidadPage() {
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
        <h1>Políticas de Privacidad</h1>
        <p className="legal__updated">Última actualización: septiembre 2026</p>
        <p className="legal__lead">
          En {siteConfig.name} respetamos tu privacidad. Esta política explica qué datos recopilamos,
          cómo los usamos y cuáles son tus derechos, según la Ley N.º 25.326 de Protección de Datos
          Personales de la República Argentina.
        </p>

        {sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>
                {paragraph === "El detalle está en la Política de Cookies." ? (
                  <>
                    El detalle está en la <Link href="/cookies">Política de Cookies</Link>.
                  </>
                ) : (
                  paragraph
                )}
              </p>
            ))}
            {section.title.startsWith("15.") ? (
              <p>
                <a href="https://www.argentina.gob.ar/aaip" target="_blank" rel="noreferrer">
                  www.argentina.gob.ar/aaip
                </a>
              </p>
            ) : null}
          </section>
        ))}
      </main>
    </div>
  );
}
