import { IsoMark } from "./IsoMark";
import { ContactWhatsAppPill } from "./ContactWhatsAppPill";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__title-wrap">
        <div className="hero__title-block">
          <h1 className="hero__title" aria-label="Creamos, diseñamos y conectamos">
            <span className="line-mask">
              <span>CREAMOS</span>
            </span>
            <span className="line-mask line--indent">
              <span className="hero__accent">DISEÑAMOS</span>
            </span>
            <span className="line-mask">
              <span>
                CONECTAMOS<span className="hero__dot">.</span>
              </span>
            </span>
          </h1>
          <div className="hero__visual">
            <IsoMark className="hero__iso mk--draw" />
          </div>
        </div>
      </div>

      <div className="hero__bottom">
        <div className="hero__copy-row">
          <p className="hero__lead">
            Creamos <strong>soluciones digitales</strong> para hacer crecer{" "}
            <em className="hero__lead-end">tu negocio.</em>
          </p>
          <div className="hero__body">
            <p>
              Diseñamos <strong>páginas web, tiendas online y contenido para redes</strong> para hacer
              crecer tu negocio.
            </p>
            <p>
              También desarrollamos <strong>automatizaciones y soluciones con IA</strong> para
              simplificar y mejorar el día a día de tu negocio.
            </p>
          </div>
        </div>

        <div className="hero__actions">
          <ContactWhatsAppPill label="Contanos tu idea" icon="arrow" />
        </div>
      </div>

      <div className="hero__index" aria-hidden="true">
        N°01
      </div>
    </section>
  );
}
