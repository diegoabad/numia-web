import { navLinks } from "@/lib/nav-links";

export function MobilePanel() {
  return (
    <div className="mobile-panel" aria-hidden="true">
      {navLinks.map((link) => (
        <a key={link.href} href={link.href}>
          {link.label}
        </a>
      ))}
    </div>
  );
}
