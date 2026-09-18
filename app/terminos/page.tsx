import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig, siteUrl } from "@/lib/site-config";
import "./terminos.css";

const title = "Términos y Condiciones";
const description =
  "Términos y Condiciones de Numia Digital Studio para la contratación de servicios y el uso de este sitio web.";

const sections = [
  {
    title: "1. Identificación del prestador",
    paragraphs: [
      `${siteConfig.name} es el nombre comercial bajo el cual se ofrecen servicios de diseño, desarrollo y comunicación digital, con sede en ${siteConfig.location} (en adelante, "el Prestador"). Para consultas podés escribir a ${siteConfig.email}.`,
    ],
  },
  {
    title: "2. Alcance de los servicios",
    paragraphs: [
      "El Prestador ofrece diseño y desarrollo de páginas web, landing pages, sitios profesionales, catálogos y tiendas online, contenido para redes sociales, diseño gráfico, software y desarrollo a medida, aplicaciones mobile, y automatizaciones y bots con inteligencia artificial.",
      "Cada proyecto se acuerda de forma individual mediante una propuesta escrita que detalla el alcance, los entregables, los plazos y el precio. Los valores publicados en el sitio son de referencia y no constituyen una oferta cerrada.",
    ],
  },
  {
    title: "3. Proceso de contratación",
    paragraphs: [
      "La relación comercial comienza con una consulta inicial, sin costo. El Prestador elabora una propuesta formal que el Cliente debe aprobar por escrito (correo electrónico o mensaje) antes del inicio de cualquier trabajo.",
      "La aprobación de la propuesta implica la aceptación de estos Términos y Condiciones.",
    ],
  },
  {
    title: "4. Precios y forma de pago",
    paragraphs: [
      "Los precios publicados se expresan en pesos argentinos (ARS). Cuando corresponde, distinguen el valor de desarrollo y el mantenimiento mensual. Son de referencia: el precio definitivo queda en la propuesta de cada proyecto.",
      "El desarrollo se abona según esa propuesta. El mantenimiento mensual, si se contrata, se factura aparte y no está incluido en el desarrollo.",
      "Las tarifas publicadas pueden actualizarse para proyectos futuros. Eso no modifica una propuesta ya aprobada.",
    ],
  },
  {
    title: "5. Plazos de entrega",
    paragraphs: [
      "Los plazos estimados se detallan en la propuesta de cada proyecto. Están condicionados a la entrega oportuna de materiales, contenidos y devoluciones por parte del Cliente. Las demoras imputables al Cliente no son responsabilidad del Prestador.",
      "Cualquier ampliación de alcance durante el proyecto puede extender los plazos y ajustar el precio.",
    ],
  },
  {
    title: "6. Revisiones y cambios",
    paragraphs: [
      "Cada propuesta especifica la cantidad de rondas de revisión incluidas. Los cambios fuera del alcance original, o que excedan las revisiones pactadas, se cotizan y facturan por separado.",
      "Se considera cambio de alcance cualquier funcionalidad, sección, pieza o diseño no contemplado en la propuesta aprobada.",
    ],
  },
  {
    title: "7. Propiedad intelectual",
    paragraphs: [
      "Una vez abonado el 100 % del desarrollo, el Cliente obtiene los derechos de uso sobre los diseños y desarrollos entregados en ese proyecto. El Prestador conserva el derecho de exhibir el trabajo en su portfolio y materiales de promoción, salvo acuerdo de confidencialidad expreso.",
      "Las herramientas, librerías, frameworks, plantillas y licencias de terceros utilizados en el proyecto se rigen por sus propios términos de uso.",
    ],
  },
  {
    title: "8. Contenidos aportados por el Cliente",
    paragraphs: [
      "El Cliente es responsable de contar con los derechos necesarios sobre textos, imágenes, logotipos, marcas y cualquier otro material que entregue para el proyecto.",
      "El Prestador no asume responsabilidad por infracciones de derechos de autor o de marca derivadas de contenidos provistos por el Cliente.",
    ],
  },
  {
    title: "9. Cancelaciones",
    paragraphs: [
      "Si el Cliente cancela un proyecto ya iniciado, corresponde abonar el trabajo realizado hasta ese momento, según la propuesta. Lo que no se hizo no se cobra.",
      "Si la cancelación la inicia el Prestador sin incumplimiento del Cliente, no se cobra el trabajo no realizado.",
    ],
  },
  {
    title: "10. Confidencialidad",
    paragraphs: [
      "Ambas partes se comprometen a tratar como confidencial la información sensible compartida durante el proyecto. Esta obligación no alcanza a la información que ya sea pública o que deba divulgarse por un requerimiento legal.",
    ],
  },
  {
    title: "11. Limitación de responsabilidad",
    paragraphs: [
      "El Prestador no responde por daños indirectos, lucro cesante, pérdida de datos o interrupciones del negocio derivadas del uso, o de la imposibilidad de uso, de lo entregado.",
      "La responsabilidad total del Prestador frente al Cliente no puede superar el importe abonado por el proyecto en cuestión.",
    ],
  },
  {
    title: "12. Mantenimiento",
    paragraphs: [
      "El mantenimiento y el soporte posteriores a la entrega no están incluidos, salvo que se contraten. Si se contratan, es un plan mensual, sin permanencia mínima.",
      "Se puede dejar avisando antes del próximo período. El servicio sigue hasta el fin del mes ya abonado. El alcance queda en la propuesta.",
    ],
  },
  {
    title: "13. Uso de este sitio web",
    paragraphs: [
      `El acceso a ${siteUrl.replace(/^https?:\/\//, "")} es gratuito y de carácter informativo. Los textos, imágenes y diseños publicados son propiedad de ${siteConfig.name} y no pueden reproducirse sin autorización escrita.`,
      "El Prestador no garantiza la disponibilidad continua del sitio y puede modificar o discontinuar cualquier sección sin aviso previo.",
    ],
  },
  {
    title: "14. Privacidad y datos personales",
    paragraphs: [
      "Los datos que nos envíes por formulario, correo o mensaje (nombre, correo, teléfono y la descripción de tu consulta o proyecto) se usan solo para responderte y, si avanzamos, para gestionar el trabajo. No se venden ni se usan para publicidad de terceros.",
      `Podés pedir la eliminación de tus datos escribiendo a ${siteConfig.email}.`,
      "El detalle está en la Política de Privacidad.",
    ],
  },
  {
    title: "15. Modificaciones",
    paragraphs: [
      "El Prestador puede actualizar estos Términos y Condiciones. Los cambios rigen desde su publicación en este sitio. Para un proyecto ya contratado se aplican los términos vigentes al momento de aprobar la propuesta.",
    ],
  },
  {
    title: "16. Ley aplicable y jurisdicción",
    paragraphs: [
      "Estos términos se rigen por las leyes de la República Argentina. Ante una controversia, las partes se someten a los tribunales ordinarios de la Ciudad Autónoma de Buenos Aires, con renuncia a cualquier otro fuero que pudiera corresponder.",
    ],
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/terminos",
  },
  openGraph: {
    title: `${title} | ${siteConfig.name}`,
    description,
    url: `${siteUrl}/terminos`,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TerminosPage() {
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
        <h1>Términos y Condiciones</h1>
        <p className="legal__updated">Última actualización: septiembre 2026</p>
        <p className="legal__lead">
          Al solicitar un presupuesto, contratar un servicio o usar este sitio, aceptás estos Términos y
          Condiciones. Si tenés una duda antes de contratar, escribinos a{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>

        {sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>
                {paragraph === "El detalle está en la Política de Privacidad." ? (
                  <>
                    El detalle está en la <Link href="/privacidad">Política de Privacidad</Link>.
                  </>
                ) : (
                  paragraph
                )}
              </p>
            ))}
          </section>
        ))}
      </main>
    </div>
  );
}
