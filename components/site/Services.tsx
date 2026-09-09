const services = [
  {
    title: "Web & e-commerce",
    copy: "Webs institucionales, landing pages, tiendas y experiencias editoriales con foco en conversión, velocidad y SEO.",
    tags: "Diseño · Next.js · SEO",
  },
  {
    title: "Software a medida",
    copy: "Sistemas de stock, ventas, operaciones, dashboards, automatizaciones e integraciones con herramientas reales del negocio.",
    tags: "Producto · Node · PostgreSQL",
  },
  {
    title: "Diseño de producto",
    copy: "UX/UI, arquitectura de información, prototipos y sistemas visuales capaces de sostener productos complejos sin fricción.",
    tags: "UX · UI · Sistemas",
  },
  {
    title: "Identidad & gráfico",
    copy: "Marcas, piezas de comunicación, packaging y sistemas gráficos que funcionan igual de bien en pantalla que fuera de ella.",
    tags: "Marca · Sistema · Piezas",
  },
  {
    title: "Automatización & IA",
    copy: "Bots de WhatsApp, integraciones entre sistemas y asistentes con IA que sacan de encima el trabajo repetitivo.",
    tags: "WhatsApp · APIs · IA",
  },
  {
    title: "Soporte & evolución",
    copy: "Después de lanzar seguimos: medimos, corregimos y agregamos lo que el uso real pide. Abono mensual, sin sorpresas.",
    tags: "Métricas · Mejoras · Abono",
  },
] as const;

export function Services() {
  return (
    <section className="services section-pad" id="servicios">
      <div className="services__head">
        <div>
          <p className="kicker reveal">Servicios / 06</p>
          <h2 className="services__title reveal">
            De la idea
            <br />a <em>producción.</em>
          </h2>
        </div>
        <p className="services__lead reveal">
          Podés contratarnos para una pieza suelta o para todo el recorrido, del primer boceto al
          mantenimiento.
        </p>
      </div>
      <div className="services__list">
        {services.map((service) => (
          <a className="service reveal" href="#contacto" key={service.title}>
            <span className="service__title">{service.title}</span>
            <span className="service__copy">{service.copy}</span>
            <span className="service__tags">{service.tags}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
