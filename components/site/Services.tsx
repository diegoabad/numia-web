import { whatsappHref } from "@/lib/whatsapp";

const mainServices = [
  {
    theme: "light",
    stamp: "01",
    label: "Diseño web",
    intent: "web" as const,
    title: (
      <>
        Tu negocio también necesita un buen lugar en <em>internet.</em>
      </>
    ),
    copy: "Diseñamos sitios claros, modernos y adaptados a todos los dispositivos para que puedas mostrar lo que hacés, generar confianza y convertir visitas en consultas.",
    plans: [
      {
        name: "Básico",
        price: "$350.000",
        detail: "Una web simple y profesional para presentar tu negocio.",
      },
      {
        name: "Intermedio",
        price: "$450.000",
        detail: "Más secciones y contenido para mostrar mejor tus servicios.",
      },
      {
        name: "Premium",
        price: "$700.000",
        detail: "Mayor personalización, diseño y funcionalidades.",
      },
    ],
    foot: "Pago único · Responsive · SEO básico · Diseño y desarrollo",
    cta: "Quiero mi web",
  },
  {
    theme: "dark",
    stamp: "02",
    label: "E-commerce",
    intent: "ecommerce" as const,
    title: (
      <>
        Tu tienda, abierta todos los <em>días.</em>
      </>
    ),
    copy: "Creamos tiendas online pensadas para que vender sea simple: mostrar tus productos, recibir pedidos, cobrar y gestionar tu negocio desde un mismo lugar.",
    plans: [
      {
        name: "Simple",
        price: "$600.000",
        detail: "Todo lo necesario para empezar a vender online.",
      },
      {
        name: "Full",
        price: "$900.000",
        detail: "Más personalización y funcionalidades para una operación más completa.",
      },
    ],
    foot: "Pago único · Productos · Pagos · Envíos · Responsive",
    cta: "Quiero vender online",
  },
  {
    theme: "pink",
    stamp: "03",
    label: "Redes sociales",
    intent: "redes" as const,
    title: (
      <>
        Que tus redes también hablen por tu <em>negocio.</em>
      </>
    ),
    copy: "Creamos contenido visual para que tu marca se vea profesional, mantenga una identidad consistente y tenga presencia durante todo el mes.",
    plans: [
      {
        name: "4 posteos",
        price: "$120.000 / mes",
        detail: "Contenido mensual para mantener presencia constante.",
      },
      {
        name: "8 posteos",
        price: "$200.000 / mes",
        detail: "Mayor frecuencia y variedad de piezas para tu marca.",
      },
    ],
    foot: "Diseño de piezas · Adaptación a tu identidad · Contenido mensual",
    cta: "Quiero mejorar mis redes",
  },
] as const;

const extraServices = [
  {
    title: "Identidad visual",
    copy: "Logos, colores, tipografías y recursos para construir una identidad reconocible.",
  },
  {
    title: "Diseño gráfico",
    copy: "Piezas digitales, gráficas impresas, packaging y materiales para tu negocio.",
  },
  {
    title: "Desarrollo a medida",
    copy: "Sistemas y herramientas desarrolladas alrededor de cómo funciona tu negocio.",
  },
  {
    title: "Apps y automatizaciones",
    copy: "Apps, automatizaciones e integraciones para simplificar tareas y procesos.",
  },
] as const;

export function Services() {
  return (
    <section className="services" id="servicios">
      <div className="services__intro section-pad">
        <p className="kicker reveal">Servicios / 03</p>
        <div className="services__intro-grid">
          <h2 className="services__title reveal">
            Todo lo que necesitás para
            <br />
            darle forma a tu <em>negocio.</em>
          </h2>
          <p className="services__lead reveal">
            Desde una web o una tienda online hasta el contenido de tus redes. Elegí por dónde
            empezar y nosotros nos encargamos de hacerlo realidad.
          </p>
        </div>
      </div>

      <div className="services__stack">
        {mainServices.map((service) => (
          <article
            className={`wpanel wpanel--${service.theme} spanel`}
            data-panel
            key={service.stamp}
          >
            <span className="wpanel__mark" aria-hidden="true">
              {service.stamp}
            </span>
            <div className="wpanel__in spanel__in">
              <p className="wpanel__idx">
                {service.stamp} / {service.label}
              </p>
              <div className="spanel__body">
                <h3 className="wpanel__title">{service.title}</h3>
                <p className="spanel__copy">{service.copy}</p>
                <div className="spanel__plans">
                  {service.plans.map((plan) => (
                    <div className="spanel__plan" key={plan.name}>
                      <p className="spanel__plan-name">{plan.name}</p>
                      <p className="spanel__plan-price">{plan.price}</p>
                      <p className="spanel__plan-detail">{plan.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="spanel__foot">
                <p className="spanel__note">{service.foot}</p>
                <a
                  className="spanel__cta"
                  href={whatsappHref(service.intent)}
                  target="_blank"
                  rel="noreferrer"
                >
                  {service.cta} <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </article>
        ))}
        <div className="services__hold" aria-hidden="true" />
      </div>

      <div className="services__extra section-pad">
        <div className="services__extra-head">
          <p className="kicker reveal">También podemos ayudarte con</p>
          <h3 className="services__extra-title reveal">¿Necesitás algo diferente?</h3>
          <p className="services__extra-lead reveal">
            No todos los proyectos entran en una categoría. También trabajamos en soluciones de
            diseño y tecnología adaptadas a cada negocio.
          </p>
        </div>
        <div className="services__extra-grid">
          {extraServices.map((item) => (
            <article className="xservice reveal" key={item.title}>
              <h4 className="xservice__title">{item.title}</h4>
              <p className="xservice__copy">{item.copy}</p>
            </article>
          ))}
        </div>
        <a
          className="services__extra-cta reveal"
          href={whatsappHref("presupuesto")}
          target="_blank"
          rel="noreferrer"
        >
          Presupuesto personalizado <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
