const projects = [
  {
    theme: "light",
    stamp: "01",
    year: "2026",
    type: "Producto digital / E-commerce / Operación",
    title: (
      <>
        Virtual <em>catálogo</em>
      </>
    ),
    copy: "Stock, pedidos, depósitos y experiencia de compra en una sola lógica. Tecnología aplicada a una operación real.",
    tags: ["Producto", "E-commerce", "Operación"],
  },
  {
    theme: "dark",
    stamp: "02",
    year: "2026",
    type: "SaaS / UX / Automatización",
    title: (
      <>
        Wally <em>billing</em>
      </>
    ),
    copy: "Facturación pensada para personas que no quieren pensar en facturación. Flujo simple, estructura sólida.",
    tags: ["SaaS", "UX", "Automatización"],
  },
  {
    theme: "pink",
    stamp: "03",
    year: "2026",
    type: "Branding / Web / Experiencia",
    title: (
      <>
        Salaya <em>salas</em>
      </>
    ),
    copy: "Una marca y un producto para ordenar turnos, adicionales y operación en salas de ensayo.",
    tags: ["Marca", "Web", "Producto"],
  },
] as const;

export function Work() {
  return (
    <section className="work" id="trabajo">
      <div className="work__intro section-pad">
        <p className="kicker reveal">Selección / trabajo</p>
        <h2 className="display reveal">
          Proyectos que
          <br />
          <em>se mueven.</em>
        </h2>
      </div>

      <div className="work__stack">
      {projects.map((project) => (
        <article
          className={`wpanel wpanel--${project.theme}`}
          data-panel
          key={project.stamp}
        >
          <span className="wpanel__mark" aria-hidden="true">
            {project.stamp}
          </span>
          <div className="wpanel__in">
            <p className="wpanel__idx">
              {project.stamp} / 03 · {project.year}
            </p>
            <div>
              <p className="wpanel__type">{project.type}</p>
              <h3 className="wpanel__title">{project.title}</h3>
            </div>
            <div className="wpanel__meta">
              <p>{project.copy}</p>
              <div className="wpanel__tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </article>
      ))}
      </div>
    </section>
  );
}
