import { IsoMark } from "./IsoMark";
import { ContactWhatsAppPill } from "./ContactWhatsAppPill";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__title-wrap">
        <div className="hero__title-block">
          <p className="hero__title" aria-hidden="true">
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
          </p>
          <div className="hero__visual">
            <IsoMark className="hero__iso mk--draw" />
          </div>
        </div>
      </div>

      <div className="hero__bottom">
        <div className="hero__copy-row">
          <h1 className="hero__lead">
            Diseño <strong>web</strong> y <strong>soluciones digitales</strong> para hacer crecer{" "}
            <em className="hero__lead-end">tu negocio.</em>
          </h1>
          <div className="hero__body">
            <p>
              Creamos <strong>páginas web, tiendas online y contenido para redes</strong> que ayudan a
              tu marca a verse mejor, comunicar con claridad y llegar a más clientes.
            </p>
            <p>
              Además, desarrollamos <strong>software, automatizaciones y soluciones con IA</strong>{" "}
              para simplificar procesos y ahorrar tiempo.
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
