import { siteConfig } from "@/lib/site-config";
import { whatsappHref } from "@/lib/whatsapp";

export function Closing() {
  return (
    <section className="closing" id="contacto">
      <div className="closing__copy section-pad">
        <p className="kicker reveal">¿TENÉS ALGO EN MENTE?</p>
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
        <div className="closing__bottom reveal">
          <a
            className="contact-pill"
            href={whatsappHref("general")}
            target="_blank"
            rel="noreferrer"
          >
            Escribinos por WhatsApp <span>↗</span>
          </a>
          <div className="closing__meta">
            <span>{siteConfig.location}</span>
          </div>
        </div>

        <div className="closing__cols">
          <div className="reveal">
            <h3>Escribinos</h3>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <a href={whatsappHref("general")} target="_blank" rel="noreferrer">
              {siteConfig.phone}
            </a>
          </div>
          <div className="reveal">
            <h3>Estudio</h3>
            <p>{siteConfig.location}</p>
            <p>{siteConfig.hours}</p>
          </div>
          <div className="reveal">
            <h3>Redes</h3>
            {siteConfig.socials.map((social) => (
              <a key={social.href} href={social.href} target="_blank" rel="noreferrer">
                {social.label}
              </a>
            ))}
          </div>
          <div className="reveal">
            <h3>Respuesta</h3>
            <p>Respondemos en menos de 24 h</p>
          </div>
        </div>

        <div className="foot">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo.png" alt={siteConfig.name} />
          <span>© 2026 numia digital studio</span>
          <span>Hecho en Buenos Aires</span>
        </div>
      </div>
    </section>
  );
}
