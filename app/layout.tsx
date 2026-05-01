import type { Metadata, Viewport } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig, siteUrl } from "@/lib/site-config";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: siteConfig.themeColor },
    { media: "(prefers-color-scheme: dark)", color: "#1a0a12" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48 32x32 16x16" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", type: "image/png" }],
  },
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
    title: siteConfig.name,
    description: siteConfig.ogDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.ogDescription,
    creator: siteConfig.twitterHandle,
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
  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.language} className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="min-h-screen antialiased">
        <a
          href="#contenido-principal"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-pink focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-primary-foreground focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring"
        >
          Saltar al contenido principal
        </a>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
