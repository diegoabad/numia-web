const projects = [
  {
    stamp: "01",
    title: "Virtual Catálogo",
    type: "Producto digital / E-commerce",
    copy: "Stock, pedidos, depósitos y experiencia de compra en una sola lógica.",
  },
  {
    stamp: "02",
    title: "Wally Billing",
    type: "SaaS / UX / Automatización",
    copy: "Facturación pensada para personas que no quieren pensar en facturación.",
  },
  {
    stamp: "03",
    title: "SalaYa",
    type: "Branding / Web / Experiencia",
    copy: "Una marca y un producto para ordenar turnos, adicionales y operación.",
  },
] as const;

export function Work() {
  return (
    <section className="work section-pad" id="proyectos">
      <div className="work__intro">
        <p className="kicker reveal">Proyectos / selección</p>
        <h2 className="display reveal">
          Lo que ya
          <br />
          <em>hicimos.</em>
        </h2>
        <p className="work__lead reveal">
          Casos reales que respaldan lo que podemos construir para tu negocio.
        </p>
      </div>

      <div className="work__grid">
        {projects.map((project) => (
          <article className="project reveal" key={project.stamp}>
            <div className="project__visual" aria-hidden="true">
              <span className="project__stamp">{project.stamp}</span>
            </div>
            <div className="project__body">
              <p className="project__type">{project.type}</p>
              <h3 className="project__title">{project.title}</h3>
              <p className="project__copy">{project.copy}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
