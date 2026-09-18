import Image from "next/image";
import Link from "next/link";
import { PartnersForm } from "./PartnersForm";
import { partnersContent } from "@/lib/partners-content";
import { siteConfig } from "@/lib/site-config";

export function PartnersLanding() {
  const c = partnersContent;

  return (
    <div className="pl">
      <header className="pl-top">
        <Link className="pl-top__brand" href="/" aria-label={`${siteConfig.name}, ir al sitio`}>
          <Image
            src="/images/logo-header.webp"
            alt={siteConfig.name}
            width={148}
            height={22}
            priority
            sizes="148px"
          />
        </Link>
        <a className="pl-top__cta" href="#registro">
          {c.hero.cta}
        </a>
      </header>

      <main id="contenido-principal">
        <section className="pl-hero" id="inicio">
          <div className="pl-hero__bg" aria-hidden="true" />
          <div className="pl-hero__inner">
            <p className="pl-hero__brand">{c.brand}</p>
            <h1 className="pl-hero__title">{c.hero.title}</h1>
            <p className="pl-hero__lead">{c.hero.lead}</p>
            <ul className="pl-hero__perks">
              {c.hero.perks.map((perk) => (
                <li key={perk}>
                  <span aria-hidden="true">✓</span>
                  {perk}
                </li>
              ))}
            </ul>
            <a className="pl-cta pl-cta--hero" href="#registro">
              {c.hero.cta}
            </a>
          </div>
        </section>

        <section className="pl-section pl-how" id="como-funciona">
          <div className="pl-section__inner">
            <p className="pl-kicker">Proceso</p>
            <h2 className="pl-section__title">¿Cómo funciona?</h2>
            <p className="pl-section__lead">
              Vos conseguís oportunidades. Nosotros hacemos el proyecto. No tenés que armar páginas ni
              cobrarte vos.
            </p>
            <ol className="pl-steps">
              {c.steps.map((step) => (
                <li key={step.n} className="pl-step">
                  <span className="pl-step__n">{step.n}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="pl-section pl-earn" id="comisiones">
          <div className="pl-section__inner">
            <p className="pl-kicker">Comisiones</p>
            <h2 className="pl-section__title">{c.earnings.title}</h2>
            <div className="pl-tiers" aria-label="Escala de comisiones">
              {c.earnings.tiers.map((tier, i) => (
                <span key={tier} className="pl-tier">
                  {tier}
                  {i < c.earnings.tiers.length - 1 ? (
                    <span className="pl-tier__arrow" aria-hidden="true">
                      →
                    </span>
                  ) : null}
                </span>
              ))}
            </div>
            <div className="pl-table-wrap">
              <table className="pl-table">
                <thead>
                  <tr>
                    <th scope="col">Venta</th>
                    <th scope="col">Ejemplo de comisión</th>
                  </tr>
                </thead>
                <tbody>
                  {c.earnings.rows.map((row) => (
                    <tr key={row.sale}>
                      <td>{row.sale}</td>
                      <td>{row.commission}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="pl-note">{c.earnings.note}</p>
            <p className="pl-example">{c.earnings.example}</p>
          </div>
        </section>

        <section className="pl-section pl-tools" id="herramientas">
          <div className="pl-section__inner">
            <p className="pl-kicker">Acompañamiento</p>
            <h2 className="pl-section__title">Nosotros te damos las herramientas</h2>
            <p className="pl-section__lead">
              ¿Cómo vendés algo si no sabés nada? Te damos el material, los mensajes y el soporte para
              que no estés solo.
            </p>
            <ul className="pl-tools__list">
              {c.tools.map((tool) => (
                <li
                  key={tool.title}
                  className={`pl-tool${"highlight" in tool && tool.highlight ? " pl-tool--hot" : ""}`}
                >
                  <h3>{tool.title}</h3>
                  <p>{tool.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="pl-section pl-needs" id="requisitos">
          <div className="pl-section__inner">
            <p className="pl-kicker">Requisitos</p>
            <h2 className="pl-section__title">Qué necesitás vos</h2>
            <p className="pl-section__lead">
              No necesitás experiencia en programación ni diseño.
            </p>
            <ul className="pl-checklist">
              {c.needs.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="pl-note">{c.needs.note}</p>
          </div>
        </section>

        <section className="pl-section pl-sell" id="servicios">
          <div className="pl-section__inner">
            <p className="pl-kicker">Oferta</p>
            <h2 className="pl-section__title">Servicios que podés ofrecer</h2>
            <ul className="pl-services">
              {c.services.map((service) => (
                <li key={service.title}>
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>
                </li>
              ))}
            </ul>
            <p className="pl-note">
              No necesitás conocer técnicamente cada servicio. Ante proyectos especiales, nuestro
              equipo evalúa la necesidad y prepara la propuesta.
            </p>
          </div>
        </section>

        <section className="pl-section pl-safety" id="seguridad">
          <div className="pl-section__inner">
            <p className="pl-kicker">Modelo</p>
            <h2 className="pl-section__title">{c.safety.title}</h2>
            <p className="pl-section__lead">{c.safety.lead}</p>
            <ul className="pl-checklist pl-checklist--dark">
              {c.safety.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="pl-section pl-who" id="para-quien">
          <div className="pl-section__inner">
            <p className="pl-kicker">Perfil</p>
            <h2 className="pl-section__title">¿Para quién puede ser?</h2>
            <p className="pl-section__lead">Este programa puede servirte si sos:</p>
            <ul className="pl-audience">
              {c.audience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="pl-example">No hace falta que seas vendedor profesional.</p>
            <a className="pl-cta" href="#registro">
              {c.hero.cta}
            </a>
          </div>
        </section>

        <section className="pl-section pl-faq" id="faq">
          <div className="pl-section__inner">
            <p className="pl-kicker">FAQ</p>
            <h2 className="pl-section__title">Preguntas frecuentes</h2>
            <div className="pl-faq__list">
              {c.faq.map((item) => (
                <details key={item.q} className="pl-faq__item">
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <div className="pl-section pl-register">
          <div className="pl-section__inner">
            <PartnersForm />
          </div>
        </div>
      </main>

      <footer className="pl-foot">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
        <Link href="/">Volver al sitio</Link>
      </footer>
    </div>
  );
}
