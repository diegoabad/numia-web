import { siteConfig, siteUrl } from "@/lib/site-config";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: siteConfig.name,
        url: siteUrl,
        logo: `${siteUrl}/favicon.png`,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        sameAs: [siteConfig.instagramUrl, siteConfig.whatsappUrl],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Buenos Aires",
          addressCountry: "AR",
        },
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
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#services`,
        name: siteConfig.name,
        description: siteConfig.description,
        url: siteUrl,
        image: `${siteUrl}/favicon.png`,
        areaServed: { "@type": "Country", name: "Argentina" },
        provider: { "@id": `${siteUrl}/#organization` },
        priceRange: "$$",
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
