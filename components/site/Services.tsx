"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import {
  Rocket,
  Briefcase,
  Code2,
  Smartphone,
  Check,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type Service = {
  icon: LucideIcon;
  name: string;
  price: string;
  desc: string;
  chips: string[];
  bullets: string[];
  longDesc: string;
  deliverables: string[];
  timeline: string;
};

const services: Service[] = [
  {
    icon: Rocket,
    name: "Landing Page",
    price: "$180.000",
    desc: "Página enfocada en captar clientes, vender productos o promocionar servicios.",
    chips: ["Conversión", "1 sección", "Express"],
    bullets: ["Diseño a medida", "Mobile first", "Formulario de contacto"],
    longDesc:
      "Una landing pensada al detalle para convertir visitas en clientes. Estructura clara, copy persuasivo y un diseño que refleja tu marca desde el primer scroll.",
    deliverables: [
      "Diseño único 100% personalizado",
      "Optimización SEO básica",
      "Integración con WhatsApp y email",
      "Analytics y píxeles de conversión",
      "Velocidad de carga optimizada",
      "Hosting y dominio guiado",
    ],
    timeline: "Entrega en 7 a 10 días",
  },
  {
    icon: Briefcase,
    name: "Web Institucional",
    price: "$230.000",
    desc: "Sitio profesional ideal para empresas, marcas y emprendimientos.",
    chips: ["Multi-página", "Branding", "SEO"],
    bullets: ["Hasta 5 secciones", "Panel editable", "Diseño premium"],
    longDesc:
      "Tu carta de presentación digital. Comunicamos con claridad quién sos, qué ofrecés y por qué elegirte, con una experiencia coherente en todos los dispositivos.",
    deliverables: [
      "Hasta 5 páginas (Home, Nosotros, Servicios, Blog, Contacto)",
      "Diseño responsive premium",
      "SEO técnico y on-page",
      "Formularios y mapas integrados",
      "Blog o sección de novedades",
      "Capacitación para gestionar contenido",
    ],
    timeline: "Entrega en 2 a 3 semanas",
  },
  {
    icon: Code2,
    name: "Desarrollo a Medida",
    price: "A convenir",
    desc: "Aplicaciones web y soluciones digitales hechas a tu medida.",
    chips: ["Custom", "Backend", "Escalable"],
    bullets: ["Paneles admin", "Integraciones API", "Base de datos"],
    longDesc:
      "Cuando lo estándar no alcanza. Diseñamos y desarrollamos sistemas únicos que automatizan tu negocio: reservas, gestión, paneles, integraciones y mucho más.",
    deliverables: [
      "Análisis funcional y arquitectura",
      "Panel de administración a medida",
      "Sistema de usuarios y roles",
      "Integraciones (pagos, email, APIs)",
      "Base de datos segura y escalable",
      "Soporte y mejoras continuas",
    ],
    timeline: "Cotización personalizada según alcance",
  },
  {
    icon: Smartphone,
    name: "Pack Redes Sociales",
    price: "$40.000",
    desc: "4 diseños profesionales y cohesivos para Instagram y redes.",
    chips: ["Instagram", "4 posts", "Branding"],
    bullets: ["Identidad visual", "Plantillas editables", "Formato feed/story"],
    longDesc:
      "Un feed que enamora. Creamos piezas alineadas a tu identidad para que cada publicación sume a tu marca y comunique con coherencia.",
    deliverables: [
      "4 diseños originales",
      "Versiones para feed y stories",
      "Paleta y tipografías de marca",
      "Archivos editables incluidos",
      "Guía rápida de uso",
      "Revisiones incluidas",
    ],
    timeline: "Entrega en 4 a 6 días",
  },
];

export function Services() {
  const [active, setActive] = useState<Service | null>(null);
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="servicios" className="bg-cream px-[5%] py-24">
      <SectionHeader
        tag="Lo que hacemos"
        title="Servicios que hacen la diferencia"
        subtitle="Cada proyecto está pensado para que tu marca comunique con claridad y convierta visitas en clientes."
      />
      <div
        ref={ref}
        className={`stagger ${visible ? "is-visible" : ""} mx-auto grid max-w-6xl grid-cols-1 gap-6 md:auto-rows-fr md:grid-cols-2`}
      >
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <article
              key={s.name}
              className="group lift relative grid h-full min-h-[21.5rem] w-full grid-rows-[auto_auto_auto_1fr_auto] gap-y-2.5 overflow-hidden rounded-3xl bg-card p-6 shadow-[0_2px_16px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_-15px_color-mix(in_oklab,var(--pink)_30%,transparent)] md:min-h-[23rem] md:gap-y-3 md:p-7"
            >
              <span className="absolute inset-x-0 top-0 z-10 h-1 origin-left scale-x-0 gradient-pink-orange transition-transform duration-500 group-hover:scale-x-100" />

              <div className="grid grid-cols-[3rem_1fr] items-center gap-x-3 gap-y-0">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-pink-pale text-pink transition-all duration-500 group-hover:rotate-6 group-hover:scale-105 group-hover:bg-pink group-hover:text-white">
                  <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                </div>
                <div className="flex min-w-0 flex-col gap-1">
                  <h3 className="font-display text-lg leading-snug md:text-xl">{s.name}</h3>
                  <p className="text-lg font-bold tracking-tight text-pink md:text-xl">{s.price}</p>
                </div>
              </div>

              <div className="mt-[10px] flex min-h-[2.25rem] flex-wrap content-start gap-2">
                {s.chips.map((c) => (
                  <span
                    key={c}
                    className="rounded-full bg-pink-pale/70 px-3 py-1 text-[11px] font-medium text-pink"
                  >
                    {c}
                  </span>
                ))}
              </div>

              <div className="-mt-1 flex items-start md:-mt-1.5">
                <p className="text-sm leading-snug text-muted-foreground">{s.desc}</p>
              </div>

              <ul className="mt-3 grid min-h-0 content-start gap-2 self-stretch sm:grid-cols-2 sm:gap-x-5 md:mt-4">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm leading-snug text-foreground/85">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-pink" strokeWidth={2.5} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => setActive(s)}
                className="btn-shine inline-flex w-fit cursor-pointer items-center justify-center gap-1.5 self-start rounded-full border-2 border-pink px-5 py-2 text-sm font-semibold text-pink transition-all hover:-translate-y-0.5 hover:bg-pink hover:text-primary-foreground hover:shadow-glow-pink"
              >
                Saber más
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </button>
            </article>
          );
        })}
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-h-[90vh] max-w-2xl gap-0 overflow-y-auto rounded-3xl p-6 sm:p-8">
          {active && (
            <div className="flex flex-col gap-6">
              <DialogHeader className="space-y-4 text-left">
                <div className="flex flex-wrap items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-pink-pale text-pink">
                    <active.icon className="h-6 w-6" strokeWidth={1.75} />
                  </div>
                  <div className="min-w-0 flex-1 space-y-2">
                    <div className="flex flex-wrap gap-2">
                      {active.chips.map((c) => (
                        <span
                          key={c}
                          className="rounded-full bg-pink-pale/70 px-3 py-1 text-[11px] font-medium text-pink"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                    <DialogTitle className="font-display text-2xl leading-tight sm:text-3xl">
                      {active.name}
                    </DialogTitle>
                    <p className="text-2xl font-bold text-pink">{active.price}</p>
                  </div>
                </div>
                <DialogDescription className="text-base leading-relaxed text-muted-foreground">
                  {active.longDesc}
                </DialogDescription>
              </DialogHeader>

              <div>
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-foreground/60">
                  Qué incluye
                </h4>
                <ul className="grid gap-3 sm:grid-cols-2 sm:gap-x-8">
                  {active.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2.5 text-sm text-foreground/85">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-pink" strokeWidth={2.5} />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-sm italic text-muted-foreground">{active.timeline}</p>

              <a
                href="#cta"
                onClick={() => setActive(null)}
                className="inline-flex w-fit items-center justify-center gap-1.5 rounded-full bg-pink px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-pink/90"
              >
                Quiero este servicio
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </a>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
