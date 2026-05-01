"use client";

import { Sparkles, MessageCircle, Zap, TrendingUp, type LucideIcon } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { useReveal } from "@/hooks/use-reveal";

const items: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Sparkles,
    title: "Diseño moderno y profesional",
    text: "Cada proyecto es único, con una estética cuidada que refleja tu identidad de marca.",
  },
  {
    icon: MessageCircle,
    title: "Atención personalizada",
    text: "Trabajamos juntas desde la idea hasta la entrega, con comunicación cercana y sin apuro.",
  },
  {
    icon: Zap,
    title: "Entrega rápida",
    text: "Sabemos que tu tiempo vale. Cumplimos los plazos sin sacrificar la calidad.",
  },
  {
    icon: TrendingUp,
    title: "Pensado para vender",
    text: "No solo hacemos diseño bonito: creamos experiencias digitales que convierten y destacan tu marca.",
  },
];

export function Why() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="por-que" className="bg-background px-[5%] py-24">
      <SectionHeader tag="¿Por qué elegirnos?" title="Lo que nos hace diferentes" />
      <div
        ref={ref}
        className={`stagger ${visible ? "is-visible" : ""} mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4`}
      >
        {items.map((it) => {
          const Icon = it.icon;
          return (
            <div
              key={it.title}
              className="group lift rounded-3xl bg-lime/20 p-7 text-center hover:bg-lime/35 hover:shadow-soft"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-card text-pink shadow-soft transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                <Icon className="h-7 w-7" strokeWidth={1.75} />
              </div>
              <h3 className="mb-2 font-display text-lg">{it.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{it.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
