import { navLinks } from "@/lib/nav-links";

/** Panel cerrado: sin aria-hidden (evita conflicto con <a>); se oculta con CSS visibility. */
export function MobilePanel() {
  return (
    <div className="mobile-panel" id="mobile-panel">
      <nav className="mobile-panel__nav" aria-label="Navegación móvil">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} tabIndex={-1}>
            {link.label}
          </a>
        ))}
      </nav>
      <p className="mobile-panel__meta">
        <span className="dot-live" aria-hidden="true" /> Buenos Aires · ARGENTINA
      </p>
    </div>
  );
}
