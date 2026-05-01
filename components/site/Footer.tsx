import Image from "next/image";
import { Instagram, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import logoFull from "@/assets/numia-logo-full.png";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#proceso", label: "Proceso" },
  { href: "#testimonios", label: "Testimonios" },
];

const socials = [
  {
    href: "https://instagram.com/numia.studio",
    label: "Instagram",
    handle: "@numia.studio",
    Icon: Instagram,
    external: true,
  },
  {
    href: "https://wa.me/5491100000000",
    label: "WhatsApp",
    handle: "+54 9 11 0000-0000",
    Icon: WhatsAppIcon,
    external: true,
  },
  {
    href: "mailto:hola@numia.studio",
    label: "Email",
    handle: "hola@numia.studio",
    Icon: Mail,
    external: false,
  },
];

export function Footer() {
  return (
    <footer
      id="contacto"
      className="relative overflow-hidden px-[5%] pt-20 pb-8 text-foreground/80"
      style={{
        background:
          "linear-gradient(160deg, var(--cream-warm) 0%, var(--pink-pale) 55%, color-mix(in oklab, var(--pink) 14%, var(--cream-warm)) 100%)",
      }}
    >
      <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-pink/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-orange/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <a href="#hero" aria-label="Numia Digital Studio" className="inline-flex">
            <Image
              src={logoFull}
              alt="Numia Digital Studio"
              className="h-16 w-auto md:h-20"
              sizes="200px"
              loading="lazy"
            />
          </a>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-foreground/70">
            Diseño digital premium para marcas que quieren verse profesionales y vender más. Webs,
            landings, desarrollos a medida y redes sociales.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-card/70 px-4 py-2 text-xs font-medium text-foreground/70 backdrop-blur-sm">
            <MapPin className="h-3.5 w-3.5 text-pink" strokeWidth={2} />
            Buenos Aires, Argentina
          </div>
        </div>

        <div className="md:col-span-3">
          <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-pink">Explorar</h3>
          <ul className="space-y-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group inline-flex items-center gap-1.5 text-foreground/75 transition-colors hover:text-pink"
                >
                  {l.label}
                  <ArrowUpRight className="h-3.5 w-3.5 -translate-y-px opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-pink">Contacto</h3>
          <ul className="space-y-3">
            {socials.map(({ href, label, handle, Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="group flex items-center gap-3 rounded-xl bg-card/60 px-3.5 py-2.5 text-sm text-foreground/80 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-pink hover:text-primary-foreground hover:shadow-[0_8px_24px_-10px_var(--pink)]"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-pink/10 text-pink transition-colors group-hover:bg-white/15 group-hover:text-white">
                    <Icon className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                  <span className="flex flex-col leading-tight">
                    <span className="text-xs font-semibold uppercase tracking-wider opacity-70">
                      {label}
                    </span>
                    <span className="text-sm font-medium">{handle}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative mx-auto mt-16 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-pink/15 pt-6 text-xs text-foreground/60 md:flex-row">
        <p>© {new Date().getFullYear()} NUMIA Digital Studio. Todos los derechos reservados.</p>
        <p className="flex items-center gap-1.5">
          Hecho con <span className="text-pink">♥</span> en Buenos Aires
        </p>
      </div>
    </footer>
  );
}
