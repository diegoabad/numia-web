import { navLinks } from "@/lib/nav-links";

export function MobilePanel() {
  return (
    <div className="mobile-panel" aria-hidden="true">
      <nav className="mobile-panel__nav" aria-label="Navegación móvil">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <p className="mobile-panel__meta">
        <span className="dot-live" /> Buenos Aires · ARGENTINA
      </p>
    </div>
  );
}
