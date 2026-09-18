import Image from "next/image";
import Link from "next/link";
import { ContactWhatsAppPill } from "./ContactWhatsAppPill";
import { siteConfig } from "@/lib/site-config";
import { whatsappHref } from "@/lib/whatsapp";

export function Closing() {
  return (
    <section className="closing" id="contacto">
      <div className="closing__stage">
        <div className="closing__main section-pad">
          <p className="kicker reveal">¿Tenés algo en mente?</p>
          <div className="closing__hero">
            <h2 className="closing__title">
              <span className="line-mask">
                <span>Contanos</span>
              </span>
              <span className="line-mask">
                <span>
                  <em>tu idea.</em>
                </span>
              </span>
            </h2>
            <div className="closing__row">
              <p className="closing__lead reveal">
                No hace falta que tengas todo definido.
                <br />
                Contanos qué necesitás y vemos juntos cómo hacerlo realidad.
              </p>
              <div className="closing__bottom">
                <ContactWhatsAppPill label="Escribinos por WhatsApp" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="closing__copy section-pad">
        <div className="closing__cols">
          <div>
            <h3>Escribinos</h3>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </div>
          <div>
            <h3>Ubicación</h3>
            <p>{siteConfig.location}</p>
          </div>
          <div>
            <h3>Sumate</h3>
            <Link href="/partners">Trabajá con nosotros</Link>
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
          <span className="foot__copy">© 2026 {siteConfig.name}</span>
          <p className="foot__made">
            Hecho con
            <span className="sr-only"> amor </span>
            <span className="foot__heart" aria-hidden="true">
              <svg viewBox="0 0 24 24" focusable="false" width="14" height="14">
                <path
                  fill="currentColor"
                  d="M12 21s-6.7-4.35-9.33-8.2C.8 10.1 1.2 6.7 4.05 5.2c1.86-.98 4.1-.5 5.45 1.12L12 9.1l2.5-2.78c1.35-1.62 3.59-2.1 5.45-1.12 2.85 1.5 3.25 4.9 1.38 7.6C18.7 16.65 12 21 12 21z"
                />
              </svg>
            </span>
            por
            <Image
              src="/images/logo-footer.webp"
              alt={siteConfig.name}
              width={52}
              height={12}
              sizes="52px"
            />
          </p>
          <nav className="foot__legal" aria-label="Información legal">
            <Link href="/terminos">Términos</Link>
            <Link href="/privacidad">Privacidad</Link>
            <Link href="/cookies">Cookies</Link>
          </nav>
        </div>
      </div>
    </section>
  );
}
