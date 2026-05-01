"use client";

import { SectionHeader } from "./SectionHeader";
import { useReveal } from "@/hooks/use-reveal";

const items = [
  {
    text: "NUMIA transformó completamente mi presencia digital. La landing page que diseñaron me trajo consultas desde el primer día.",
    initials: "MG",
    name: "María González",
    role: "Coach de bienestar",
  },
  {
    text: "Necesitábamos un sistema a medida para gestionar reservas y NUMIA lo desarrolló exactamente como lo imaginaba. Rápido, prolijo y sin sorpresas.",
    initials: "SR",
    name: "Sofía Ramírez",
    role: "Dueña de estudio de yoga",
  },
  {
    text: "Profesionalismo, rapidez y un resultado que superó mis expectativas. Mi emprendimiento ahora se ve tan profesional como las grandes marcas.",
    initials: "LM",
    name: "Laura Méndez",
    role: "Emprendedora, tienda online",
  },
];

export function Testimonials() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="testimonios" className="bg-background px-[5%] py-24">
      <SectionHeader
        tag="Testimonios"
        title="Lo que dicen nuestros clientes"
        subtitle="La satisfacción de quienes confían en nosotros es nuestro mayor logro."
      />
      <div
        ref={ref}
        className={`stagger ${visible ? "is-visible" : ""} mx-auto grid max-w-5xl gap-6 md:grid-cols-3`}
      >
        {items.map((t) => (
          <figure
            key={t.name}
            className="lift relative rounded-3xl bg-secondary p-7 hover:bg-pink-pale/60 hover:shadow-soft"
          >
            <span className="absolute left-4 top-0 font-display text-7xl leading-none text-pink/15 transition-all duration-500 group-hover:text-pink/30">
              &ldquo;
            </span>
            <div className="mb-3 text-base text-orange">★★★★★</div>
            <blockquote className="mb-5 text-sm italic leading-relaxed text-muted-foreground">
              {t.text}
            </blockquote>
            <figcaption className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full gradient-pink-orange text-sm font-bold text-white shadow-glow-pink">
                {t.initials}
              </div>
              <div>
                <p className="text-sm font-bold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
