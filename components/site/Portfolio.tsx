"use client";

import type { StaticImageData } from "next/image";
import { useState } from "react";
import { ArrowUpRight, Calendar, Tag } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import imgInstitucional from "@/assets/portfolio-institucional.jpg";
import imgLanding from "@/assets/portfolio-landing.jpg";
import imgRedes from "@/assets/portfolio-redes.jpg";
import imgDesarrollo from "@/assets/portfolio-desarrollo.jpg";
import imgBranding from "@/assets/portfolio-branding.jpg";
import imgEcommerce from "@/assets/portfolio-ecommerce.jpg";

type Project = {
  id: string;
  name: string;
  category: string;
  image: StaticImageData;
  year: string;
  client: string;
  description: string;
  tags: string[];
  gallery: StaticImageData[];
  accent: string;
};

const projects: Project[] = [
  {
    id: "casa-aurora",
    name: "Casa Aurora",
    category: "Web Institucional",
    image: imgInstitucional,
    year: "2025",
    client: "Estudio de arquitectura",
    description:
      "Sitio institucional con foco en portfolio de obras, equipo y filosofía de diseño. Navegación fluida y storytelling visual para transmitir la identidad del estudio.",
    tags: ["Diseño UX/UI", "Responsive", "SEO On-page", "CMS"],
    gallery: [imgInstitucional, imgBranding],
    accent: "from-pink to-pink-soft",
  },
  {
    id: "lumina-launch",
    name: "Lumina Launch",
    category: "Landing Page",
    image: imgLanding,
    year: "2025",
    client: "SaaS de productividad",
    description:
      "Landing de alta conversión para lanzamiento de producto. Hero con video, secciones de beneficios, testimonios y formulario optimizado.",
    tags: ["Conversión", "A/B Testing", "Analytics", "Express"],
    gallery: [imgLanding],
    accent: "from-plum to-orange",
  },
  {
    id: "frutta-social",
    name: "Frutta Social",
    category: "Redes Sociales",
    image: imgRedes,
    year: "2024",
    client: "Marca lifestyle",
    description:
      "Diseño de feed cohesivo + plantillas para historias y reels. Sistema visual replicable que mantiene la identidad en cada publicación.",
    tags: ["Identidad visual", "Plantillas", "Reels", "Calendario"],
    gallery: [imgRedes],
    accent: "from-lime to-[oklch(0.55_0.16_118)]",
  },
  {
    id: "reserva-now",
    name: "Reserva Now",
    category: "Desarrollo a Medida",
    image: imgDesarrollo,
    year: "2025",
    client: "Cadena gastronómica",
    description:
      "Sistema de reservas online con panel de administración, gestión de turnos, notificaciones automáticas por WhatsApp y reportes en tiempo real.",
    tags: ["Full-stack", "Dashboard", "API", "Automatización"],
    gallery: [imgDesarrollo],
    accent: "from-orange to-pink-soft",
  },
  {
    id: "lisylux",
    name: "LisyLux Brand",
    category: "Branding Web",
    image: imgBranding,
    year: "2024",
    client: "Marca de cosmética",
    description:
      "Identidad de marca completa: logo, paleta, tipografía y aplicaciones. Manual de marca + activos digitales listos para producción.",
    tags: ["Logo", "Manual de marca", "Papelería", "Mockups"],
    gallery: [imgBranding],
    accent: "from-pink to-lime",
  },
  {
    id: "sullobay",
    name: "Sullobay Shop",
    category: "E-commerce",
    image: imgEcommerce,
    year: "2025",
    client: "Tienda de indumentaria",
    description:
      "E-commerce responsive con catálogo, carrito, checkout y pasarela de pagos. Integración con sistema de stock y envíos.",
    tags: ["E-commerce", "Mobile-first", "Pagos", "Stock"],
    gallery: [imgEcommerce],
    accent: "from-pink-soft to-orange",
  },
];

export function Portfolio() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden px-[5%] py-24"
      style={{
        background:
          "linear-gradient(140deg, var(--cream-warm) 0%, color-mix(in oklab, var(--pink) 12%, var(--cream-warm)) 100%)",
      }}
    >
      <div className="pointer-events-none absolute -top-24 right-1/4 h-72 w-72 rounded-full bg-pink/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-orange/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          tag="Portfolio"
          title="Trabajos que hablan por sí solos"
          subtitle="Una selección de proyectos que reflejan nuestro enfoque: diseño con propósito y resultados medibles."
        />

        <Carousel opts={{ align: "start", loop: true }} className="relative">
          <CarouselContent className="-ml-4">
            {projects.map((p) => (
              <CarouselItem key={p.id} className="basis-full pl-4 sm:basis-1/2 lg:basis-1/3">
                <button
                  type="button"
                  onClick={() => setActive(p)}
                  className="group relative block aspect-[4/5] w-full cursor-pointer overflow-hidden rounded-3xl text-left shadow-[0_10px_30px_-12px_color-mix(in_oklab,var(--pink)_30%,transparent)] transition-transform duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_color-mix(in_oklab,var(--pink)_45%,transparent)]"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.accent}`} />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image.src}
                    alt={p.name}
                    loading="lazy"
                    width={p.image.width}
                    height={p.image.height}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/80 via-black/45 to-black/25 transition-opacity duration-500 group-hover:from-black/72 group-hover:via-black/38 group-hover:to-black/18"
                    aria-hidden
                  />
                  <span className="absolute left-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-pink backdrop-blur-sm">
                    {p.category}
                  </span>

                  <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col justify-end bg-gradient-to-t from-plum-deep/95 via-plum-deep/60 to-transparent p-5 pt-16">
                    <p className="text-xs uppercase tracking-widest text-white/70">{p.client}</p>
                    <h3 className="mt-1 font-display text-2xl text-white">{p.name}</h3>
                    <span className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-pink transition-transform duration-300 group-hover:scale-105">
                      Ver proyecto <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="-left-2 cursor-pointer border-pink/20 bg-white text-pink hover:bg-pink hover:text-white md:-left-12" />
          <CarouselNext className="-right-2 cursor-pointer border-pink/20 bg-white text-pink hover:bg-pink hover:text-white md:-right-12" />
        </Carousel>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-5xl overflow-hidden p-0 sm:rounded-3xl">
          {active && (
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-square md:aspect-auto">
                <div className={`absolute inset-0 bg-gradient-to-br ${active.accent}`} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={active.image.src}
                  alt={active.name}
                  width={active.image.width}
                  height={active.image.height}
                  className="relative h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-4 p-6 md:p-8">
                <DialogHeader className="space-y-2 text-left">
                  <span className="inline-flex w-fit rounded-full bg-pink/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-pink">
                    {active.category}
                  </span>
                  <DialogTitle className="font-display text-3xl text-plum-deep">{active.name}</DialogTitle>
                </DialogHeader>

                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-pink" />
                    {active.year}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Tag className="h-3.5 w-3.5 text-pink" />
                    {active.client}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-foreground/80">{active.description}</p>

                <div className="flex flex-wrap gap-2">
                  {active.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-pink/20 bg-white px-2.5 py-1 text-xs font-medium text-plum-deep"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {active.gallery.length > 1 && (
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    {active.gallery.map((g, i) => (
                      <div
                        key={i}
                        className="aspect-square overflow-hidden rounded-lg border border-pink/10"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={g.src} alt="" width={g.width} height={g.height} className="h-full w-full object-cover" />
                      </div>
                    ))}
                  </div>
                )}

                <a
                  href="#contacto"
                  onClick={() => setActive(null)}
                  className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink to-orange px-5 py-2.5 text-sm font-semibold text-white shadow-glow-pink transition-transform hover:scale-[1.02]"
                >
                  Quiero algo así <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
