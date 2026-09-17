import { siteConfig } from "@/lib/site-config";

export type WhatsAppIntent =
  | "general"
  | "web"
  | "ecommerce"
  | "redes"
  | "presupuesto";

const brand = siteConfig.name;

const messages: Record<WhatsAppIntent, string> = {
  general: `Hola! Estuve mirando la página web de ${brand} y me gustaría charlar sobre un proyecto.`,
  web: `Hola! Estuve mirando la página web de ${brand} y me interesa el servicio de Diseño Web.`,
  ecommerce: `Hola! Estuve mirando la página web de ${brand} y me interesa el servicio de E-commerce.`,
  redes: `Hola! Estuve mirando la página web de ${brand} y me interesa el servicio de Redes Sociales.`,
  presupuesto: `Hola! Estuve mirando la página web de ${brand} y me gustaría pedir un presupuesto personalizado.`,
};

export function whatsappHref(intent: WhatsAppIntent = "general") {
  const text = encodeURIComponent(messages[intent]);
  return `https://wa.me/${siteConfig.whatsapp}?text=${text}`;
}
