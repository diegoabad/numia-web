import type { Metadata, Viewport } from "next";
import { Inter_Tight, Manrope } from "next/font/google";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig, siteUrl } from "@/lib/site-config";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: siteConfig.backgroundColor },
    { media: "(prefers-color-scheme: dark)", color: "#0c0c0e" },
  ],
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=5", sizes: "48x48" },
      { url: "/favicon.png?v=5", type: "image/png", sizes: "296x320" },
    ],
    shortcut: "/favicon.ico?v=5",
    apple: [{ url: "/apple-touch-icon.png?v=5", type: "image/png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: "/",
    languages: {
      "es-AR": "/",
      es: "/",
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    alternateLocale: ["es"],
    url: siteUrl,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.ogDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.ogDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  appleWebApp: {
    capable: true,
    title: siteConfig.shortName,
    statusBarStyle: "default",
  },
  category: "business",
  other: {
    "geo.region": "AR-C",
    "geo.placename": "Buenos Aires",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR" className={`${interTight.variable} ${manrope.variable}`}>
      <head>
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://www.instagram.com" />
      </head>
      <body>
        <a className="skip-link" href="#contenido-principal">
          Saltar al contenido principal
        </a>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
