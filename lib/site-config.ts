const rawUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://numia.studio";

/** URL pública del sitio (sin barra final). Definí NEXT_PUBLIC_SITE_URL en producción. */
export const siteUrl = rawUrl.replace(/\/$/, "");

export const siteConfig = {
  name: "Numia Digital Studio",
  shortName: "Numia",
  title: "Diseño Web, Ecommerce y Software en Argentina | Numia Digital Studio",
  description:
    "Numia Digital Studio crea páginas web, tiendas online, contenido para redes, software y automatizaciones con IA para negocios de toda Argentina. Conocé nuestros servicios.",
  ogDescription:
    "Numia Digital Studio crea páginas web, tiendas online, contenido para redes, software y automatizaciones con IA para negocios de toda Argentina.",
  url: siteUrl,
  locale: "es_AR",
  language: "es",
  email: "hola@numiadigitalstudio.com.ar",
  phone: "+54 9 11 5655-0059",
  phoneHref: "tel:+5491156550059",
  whatsapp: "5491156550059",
  location: "Buenos Aires, Argentina",
  hours: "Lunes a viernes, 9 a 18 h",
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/numia.digitalstudio" },
    { label: "Facebook", href: "https://www.facebook.com/numia.studio" },
  ],
  keywords: [
    "Numia Digital Studio",
    "Numia",
    "diseño web",
    "desarrollo web",
    "páginas web",
    "landing page",
    "tienda online",
    "e-commerce",
    "ecommerce Argentina",
    "redes sociales",
    "contenido para redes",
    "identidad visual",
    "diseño gráfico",
    "automatizaciones",
    "inteligencia artificial",
    "bots con IA",
    "aplicaciones mobile",
    "software a medida",
    "desarrollo a medida",
    "estudio digital",
    "agencia digital Buenos Aires",
    "Buenos Aires",
    "Argentina",
    "UX UI",
    "branding",
  ],
  themeColor: "#ed0a78",
  backgroundColor: "#f7f6f2",
} as const;
