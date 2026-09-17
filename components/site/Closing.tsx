import { ContactWhatsAppPill } from "./ContactWhatsAppPill";
import { siteConfig } from "@/lib/site-config";
import { whatsappHref } from "@/lib/whatsapp";

export function Closing() {
  return (
    <section className="closing" id="contacto">
      <div className="closing__copy section-pad">
        <div className="closing__main">
          <p className="kicker reveal">¿TENÉS ALGO EN MENTE?</p>
          <div className="closing__hero">
            <h2 className="closing__title">
              <span className="line-mask">
                <span>HAGAMOS</span>
              </span>
              <span className="line-mask">
                <span>ALGO QUE</span>
              </span>
              <span className="line-mask">
                <span className="closing__accent">IMPORTE.</span>
              </span>
            </h2>
            <div className="closing__bottom">
              <ContactWhatsAppPill />
            </div>
          </div>
        </div>

        <div className="closing__cols">
          <div>
            <h3>Escribinos</h3>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </div>
          <div>
            <h3>Estudio</h3>
            <p>
              {siteConfig.location}
              <span className="closing__sep">·</span>
              {siteConfig.hours}
            </p>
          </div>
          <div>
            <h3>Redes</h3>
            <nav className="closing__socials" aria-label="Redes">
              {siteConfig.socials.map((social) => (
                <a key={social.href} href={social.href} target="_blank" rel="noreferrer">
                  {social.label}
                </a>
              ))}
              <a href={whatsappHref("general")} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </nav>
          </div>
        </div>

        <div className="foot">
          <span className="foot__copy">© 2026 Numia Digital Studio</span>
          <p className="foot__made">
            Hecho con
            <span className="foot__heart" aria-label="amor">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path
                  fill="currentColor"
                  d="M12 21s-6.7-4.35-9.33-8.2C.8 10.1 1.2 6.7 4.05 5.2c1.86-.98 4.1-.5 5.45 1.12L12 9.1l2.5-2.78c1.35-1.62 3.59-2.1 5.45-1.12 2.85 1.5 3.25 4.9 1.38 7.6C18.7 16.65 12 21 12 21z"
                />
              </svg>
            </span>
            por
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo-numia-footer.png" alt={siteConfig.name} />
          </p>
          <span className="foot__spacer" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
