import { whatsappHref } from "@/lib/whatsapp";

const mainServices = [
  {
    theme: "light",
    stamp: "01",
    label: "Presencia digital",
    intent: "web" as const,
    title: <>Diseño <em>web</em></>,
    lead: "Una web clara, profesional y pensada para hacer crecer tu negocio.",
    copy: "",
    includes: "Adaptada a celular · Optimizada para Google · Botón de WhatsApp · Formulario de contacto · Carga rápida",
    plans: [
      {
        name: "Landing Page",
        price: "$349.999",
        monthly: "$40.000 / mes",
        detail:
          "Una página directa y atractiva para presentar tu negocio, servicio o producto y generar consultas.",
      },
      {
        name: "Web Profesional",
        price: "$449.999",
        monthly: "$40.000 / mes",
        detail:
          "Un sitio completo para mostrar quién sos, qué ofrecés y todo lo que tus clientes necesitan conocer sobre tu negocio.",
      },
      {
        name: "Web Premium",
        price: "$699.999",
        monthly: "$40.000 / mes",
        detail:
          "Una web con mayor nivel de diseño y personalización, pensada para marcas que buscan una presencia digital más cuidada y diferencial.",
      },
    ],
    cta: "Hablemos de tu web",
  },
  {
    theme: "dark",
    stamp: "02",
    label: "Ventas online",
    intent: "ecommerce" as const,
    title: <>E-<em>commerce</em></>,
    lead: "Una tienda online clara, profesional y pensada para hacer crecer tus ventas.",
    copy: "",
    includes:
      "Adaptada a celular · Optimizada para Google · Botón de WhatsApp · Formulario de contacto · Carga rápida · Analíticas",
    plans: [
      {
        name: "Catálogo Online",
        price: "$599.999",
        monthly: "$60.000 / mes",
        detail:
          "Mostrá tus productos, precios y variantes de forma clara para que tus clientes puedan conocerlos y hacer consultas o pedidos fácilmente.",
      },
      {
        name: "Tienda Online",
        price: "$799.999",
        monthly: "$80.000 / mes",
        detail:
          "Vendé directamente desde tu web con carrito de compras, medios de pago, opciones de envío y gestión de pedidos.",
      },
      {
        name: "Tienda Premium",
        price: "$999.999",
        monthly: "$80.000 / mes",
        detail:
          "Una tienda con mayor nivel de diseño y personalización, pensada para marcas que buscan una experiencia de compra más cuidada y profesional.",
      },
    ],
    cta: "Hablemos de tu tienda",
  },
  {
    theme: "pink",
    stamp: "03",
    label: "Redes sociales",
    intent: "redes" as const,
    title: <>Redes</>,
    lead: "Contenido pensado para que tu marca se vea activa, profesional y coherente.",
    copy: "",
    includes:
      "Diseño de publicaciones · Adaptado a tu identidad · Textos para cada publicación · Contenido para feed e historias · Calendario mensual · Entrega lista para publicar",
    plans: [
      {
        name: "Presencia",
        price: "$119.999 / mes",
        detail:
          "4 publicaciones mensuales para mantener tus redes activas, con una imagen cuidada y contenido alineado con tu negocio.",
      },
      {
        name: "Impulso",
        price: "$199.999 / mes",
        detail:
          "8 publicaciones mensuales para comunicar con mayor frecuencia, mostrar más de tu negocio y fortalecer tu presencia en redes.",
      },
    ],
    cta: "Hablemos de tus redes",
  },
] as const;

const extraServices = [
  {
    title: "Diseño Gráfico",
    copy:
      "Creamos piezas visuales para tu negocio: invitaciones digitales, piezas para redes, material impreso, vectorización de logos y otros diseños que necesites.",
  },
  {
    title: "Desarrollo a Medida",
    copy:
      "Desarrollamos sistemas pensados para la forma en que trabaja tu negocio: gestión de stock, turnos, ventas, clientes, pedidos y otros procesos internos.",
  },
  {
    title: "Aplicaciones Mobile",
    copy:
      "Creamos aplicaciones para celular adaptadas a las necesidades de tu negocio, tanto para tus clientes como para tu equipo.",
  },
  {
    title: "Automatizaciones y bots con IA",
    copy:
      "Automatizamos tareas y procesos, y creamos asistentes que pueden responder consultas, tomar datos y reducir trabajo manual para ahorrar tiempo en tu negocio.",
  },
] as const;

export function Services() {
  return (
    <section className="services" id="servicios">
      <div className="services__stack">
        <div className="services__intro section-pad">
          <p className="kicker reveal">Servicios</p>
          <div className="services__intro-grid">
            <h2 className="services__title reveal">
              Todo lo que necesitás para
              <br />
              impulsar tu <em>negocio.</em>
            </h2>
            <p className="services__lead reveal">
              No importa si estás empezando o si ya tenés un negocio en marcha. Podemos ayudarte a
              mejorar tu presencia digital, vender online, comunicar mejor o simplificar la forma en
              la que trabajás.
            </p>
          </div>
        </div>

        {mainServices.map((service) => (
          <article
            className={`wpanel wpanel--${service.theme} spanel`}
            data-panel
            key={service.stamp}
          >
            <div className="wpanel__in spanel__in">
              <p className="wpanel__idx">
                {service.stamp} / {service.label}
              </p>
              <div className="spanel__body">
                <div className="spanel__main">
                  <h3 className="wpanel__title">{service.title}</h3>
                  {service.lead ? <p className="spanel__lead">{service.lead}</p> : null}
                  {service.copy ? <p className="spanel__copy">{service.copy}</p> : null}
                  {service.includes ? (
                    <div className="spanel__includes">
                      <p className="spanel__includes-label">Incluye</p>
                      <p className="spanel__includes-list">{service.includes}</p>
                    </div>
                  ) : null}
                  {service.cta ? (
                    <a
                      className="spanel__cta"
                      href={whatsappHref(service.intent)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {service.cta} <span aria-hidden="true">→</span>
                    </a>
                  ) : null}
                </div>
                <div className="spanel__plans">
                  {service.plans.map((plan) => (
                    <div className="spanel__plan" key={plan.name}>
                      <p className="spanel__plan-name">{plan.name}</p>
                      <p className="spanel__plan-price">
                        {"monthly" in plan && plan.monthly ? `Desarrollo ${plan.price}` : plan.price}
                      </p>
                      {"monthly" in plan && plan.monthly ? (
                        <p className="spanel__plan-monthly">Mantenimiento {plan.monthly}</p>
                      ) : null}
                      <p className="spanel__plan-detail">{plan.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}

        <article className="wpanel wpanel--light spanel" data-panel>
          <div className="wpanel__in spanel__in">
            <p className="wpanel__idx">04 / Soluciones a medida</p>
            <div className="spanel__body">
              <div className="spanel__main">
                <h3 className="wpanel__title">
                  ¿Necesitás algo <em>diferente?</em>
                </h3>
                <p className="spanel__lead">
                  No todos los proyectos entran en una categoría. También trabajamos en soluciones de
                  diseño y tecnología adaptadas a cada negocio.
                </p>
                <a
                  className="spanel__cta"
                  href={whatsappHref("presupuesto")}
                  target="_blank"
                  rel="noreferrer"
                >
                  Quiero consultar un presupuesto <span aria-hidden="true">→</span>
                </a>
              </div>
              <div className="spanel__plans spanel__plans--extras">
                {extraServices.map((item) => (
                  <div className="spanel__plan" key={item.title}>
                    <p className="spanel__plan-name">{item.title}</p>
                    <p className="spanel__plan-detail">{item.copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>

        <div className="services__hold" aria-hidden="true" />
      </div>
    </section>
  );
}
