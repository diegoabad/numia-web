import { navLinks } from "@/lib/nav-links";

export function Topbar() {
  return (
    <header className="topbar">
      <a className="brand" href="#inicio" aria-label="Numia, volver al inicio">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/logo.png" alt="Numia Digital Studio" />
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
      <button className="menu-btn" type="button" aria-label="Abrir menú" aria-expanded="false">
        <span />
        <span />
      </button>
    </header>
  );
}
