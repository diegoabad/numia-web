import Image from "next/image";
import { navLinks } from "@/lib/nav-links";

export function Topbar() {
  return (
    <header className="topbar">
      <a className="brand" href="#inicio" aria-label="Numia, volver al inicio">
        <Image
          src="/images/logo-header.webp"
          alt="Numia Digital Studio"
          width={178}
          height={27}
          priority
          sizes="178px"
        />
      </a>
      <div className="topbar__meta">
        <div>
          <span className="dot-live" /> Buenos Aires · ARGENTINA
        </div>
      </div>
      <nav className="nav" aria-label="Navegación principal">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <button
        className="menu-btn"
        type="button"
        aria-label="Abrir menú"
        aria-expanded="false"
        aria-controls="mobile-panel"
      >
        <span />
        <span />
      </button>
    </header>
  );
}
