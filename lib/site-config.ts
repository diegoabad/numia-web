const rawUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://numia.studio";

/** URL pública del sitio (sin barra final). Definí NEXT_PUBLIC_SITE_URL en producción. */
export const siteUrl = rawUrl.replace(/\/$/, "");

export const siteConfig = {
  name: "Numia Digital Studio",
  shortName: "Numia",
  title: "Numia — Digital Studio",
  description:
    "Construimos la presencia digital de tu negocio a través del diseño web, e-commerce, redes sociales, identidad visual y desarrollo a medida.",
  ogDescription:
    "Construimos la presencia digital de tu negocio a través del diseño web, e-commerce, redes sociales, identidad visual y desarrollo a medida.",
  url: siteUrl,
  locale: "es_AR",
  language: "es",
  email: "hola@numia.studio",
  phone: "+54 11 0000 0000",
  phoneHref: "tel:+541100000000",
  location: "Buenos Aires, Argentina",
  hours: "Lunes a viernes, 9 a 19 h",
  socials: [
    { label: "Instagram", href: "https://instagram.com/numia.studio" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/numia-studio" },
    { label: "Behance", href: "https://www.behance.net/numiastudio" },
  ],
  keywords: [
    "Numia",
    "Numia Digital Studio",
    "diseño web",
    "software a medida",
    "e-commerce",
    "identidad visual",
    "diseño de producto",
    "UX UI",
    "estudio digital",
    "Buenos Aires",
    "Argentina",
    "desarrollo web",
    "branding",
  ],
  themeColor: "#ed0a78",
  backgroundColor: "#f7f6f2",
} as const;
