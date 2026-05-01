"use client";

import { useReveal } from "@/hooks/use-reveal";

type Props = {
  tag?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  invert?: boolean;
};

export function SectionHeader({ tag, title, subtitle, align = "center", invert }: Props) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} mb-12 ${
        align === "center" ? "mx-auto text-center" : ""
      } max-w-2xl`}
    >
      {tag && (
        <span
          className={`mb-3 inline-block text-xs font-bold uppercase tracking-[0.18em] ${
            invert ? "text-lime" : "text-pink"
          }`}
        >
          {tag}
        </span>
      )}
      <h2
        className={`font-display text-balance text-3xl leading-tight md:text-5xl ${
          invert ? "text-cream" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            invert ? "text-white/65" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
