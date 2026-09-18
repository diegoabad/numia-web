import type { Metadata } from "next";
import { PartnersLanding } from "@/components/partners/PartnersLanding";
import { siteConfig, siteUrl } from "@/lib/site-config";
import "./partners.css";

const title = "Partner Comercial | Generá ingresos extra";
const description =
  "Encontrá interesados en web, tienda online u otros servicios digitales. Numia se encarga del resto y vos ganás comisiones de hasta el 20%.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/partners",
  },
  openGraph: {
    title: `${title} | ${siteConfig.name}`,
    description,
    url: `${siteUrl}/partners`,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${siteConfig.name}`,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PartnersPage() {
  return <PartnersLanding />;
}
