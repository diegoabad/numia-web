"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#proceso", label: "Proceso" },
  { href: "#testimonios", label: "Testimonios" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-[5%] py-4 backdrop-blur-md transition-shadow ${
        scrolled
          ? "bg-background/85 shadow-[0_2px_24px_-12px_color-mix(in_oklab,var(--pink)_40%,transparent)]"
          : "bg-background/70"
      } border-b border-pink/5`}
    >
      <Logo />
      <ul className="hidden items-center gap-8 md:flex">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="link-underline cursor-pointer text-sm font-medium text-muted-foreground transition-colors hover:text-pink"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="#cta"
        className="btn-shine cursor-pointer rounded-full bg-pink px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_8px_24px_-8px_var(--pink)] transition-transform hover:-translate-y-0.5 active:translate-y-0"
      >
        Pedir presupuesto
      </a>
    </nav>
  );
}
