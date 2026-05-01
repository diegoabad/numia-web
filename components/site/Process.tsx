"use client";

import { SectionHeader } from "./SectionHeader";
import { useReveal } from "@/hooks/use-reveal";

const steps = [
  {
    n: "01",
    title: "Me contás tu idea",
    text: "Hablamos de tus objetivos, tu marca y lo que necesitás transmitir.",
  },
  {
    n: "02",
    title: "Definimos la propuesta",
    text: "Preparamos una propuesta personalizada con tiempos y presupuesto claro.",
  },
  {
    n: "03",
    title: "Diseño + revisiones",
    text: "Creamos el diseño e incorporamos tus cambios hasta que quede perfecto.",
  },
  {
    n: "04",
    title: "Entrega final",
    text: "Te entregamos todo listo para usar, con soporte post-entrega incluido.",
  },
];

export function Process() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="proceso" className="bg-pink-pale px-[5%] py-24">
      <SectionHeader
        tag="Cómo trabajamos"
        title="Del concepto a tu pantalla"
        subtitle="Un proceso simple y transparente, diseñado para que te sientas acompañada en cada paso."
      />
      <div
        ref={ref}
        className={`stagger ${visible ? "is-visible" : ""} relative mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4`}
      >
        <div className="absolute left-[10%] right-[10%] top-7 hidden h-0.5 gradient-pink-orange md:block" />
        {steps.map((s) => (
          <div key={s.n} className="group relative z-10 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-pink bg-card font-display text-xl font-bold text-pink shadow-[0_4px_16px_-4px_var(--pink)] transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-110 group-hover:bg-pink group-hover:text-white">
              {s.n}
            </div>
            <h3 className="mb-1.5 font-semibold">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
