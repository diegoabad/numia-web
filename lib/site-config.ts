const rawUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://numia.studio";

/** URL pública del sitio (sin barra final). Definí NEXT_PUBLIC_SITE_URL en producción. */
export const siteUrl = rawUrl.replace(/\/$/, "");

export const siteConfig = {
  name: "NUMIA Digital Studio",
  shortName: "NUMIA",
  title:
    "NUMIA Digital Studio – Diseño digital que potencia tu marca",
  description:
    "Diseño web, landing pages, desarrollos a medida y redes sociales para marcas que quieren verse profesionales y vender más.",
  ogDescription:
    "Diseño digital premium: webs, landings, desarrollos a medida y redes sociales.",
  url: siteUrl,
  locale: "es_AR",
  language: "es",
  email: "hola@numia.studio",
  phone: "+54 9 11 0000-0000",
  whatsappUrl: "https://wa.me/5491100000000",
  instagramUrl: "https://instagram.com/numia.studio",
  twitterHandle: "@numia.studio",
  keywords: [
    "NUMIA",
    "diseño web",
    "diseño digital",
    "landing page",
    "página web",
    "desarrollo web a medida",
    "redes sociales",
    "branding digital",
    "Buenos Aires",
    "Argentina",
    "estudio digital",
    "e-commerce",
    "sitio institucional",
  ],
  themeColor: "#d9468f",
} as const;
