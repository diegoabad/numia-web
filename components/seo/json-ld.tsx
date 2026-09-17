import { siteConfig, siteUrl } from "@/lib/site-config";

export function JsonLd() {
  const sameAs = siteConfig.socials.map((social) => social.href);
  const logoUrl = `${siteUrl}/images/logo.png`;
  const ogImage = `${siteUrl}/opengraph-image`;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: siteConfig.name,
        alternateName: siteConfig.shortName,
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: logoUrl,
        },
        image: logoUrl,
        email: siteConfig.email,
        telephone: siteConfig.phoneHref.replace("tel:", ""),
        sameAs,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Buenos Aires",
          addressRegion: "CABA",
          addressCountry: "AR",
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "sales",
            email: siteConfig.email,
            telephone: siteConfig.phoneHref.replace("tel:", ""),
            availableLanguage: ["Spanish"],
            areaServed: "AR",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: "es-AR",
        publisher: { "@id": `${siteUrl}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: siteConfig.title,
        description: siteConfig.description,
        inLanguage: "es-AR",
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#organization` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: ogImage,
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#business`,
        name: siteConfig.name,
        description: siteConfig.description,
        url: siteUrl,
        image: [logoUrl, ogImage],
        email: siteConfig.email,
        telephone: siteConfig.phoneHref.replace("tel:", ""),
        priceRange: "$$",
        areaServed: [
          { "@type": "City", name: "Buenos Aires" },
          { "@type": "Country", name: "Argentina" },
        ],
        provider: { "@id": `${siteUrl}/#organization` },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Buenos Aires",
          addressRegion: "CABA",
          addressCountry: "AR",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
        sameAs,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servicios Numia",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Diseño web",
                description:
                  "Sitios web, landing pages y webs profesionales pensadas para hacer crecer tu negocio.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "E-commerce",
                description:
                  "Tiendas online y catálogos para vender productos con medios de pago y gestión de pedidos.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Redes sociales",
                description:
                  "Contenido mensual para feed e historias, alineado a la identidad de tu marca.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Soluciones a medida",
                description:
                  "Diseño gráfico, desarrollo a medida, apps mobile y automatizaciones con IA.",
              },
            },
          ],
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
