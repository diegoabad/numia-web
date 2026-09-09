const steps = [
  {
    n: "01",
    title: "Entender",
    copy: "Objetivo, operación, restricciones, usuarios y qué resultado concreto tiene que mover el proyecto.",
  },
  {
    n: "02",
    title: "Reducir",
    copy: "Priorizamos. Quitamos capas innecesarias y definimos una primera versión que ya pueda generar valor.",
  },
  {
    n: "03",
    title: "Construir",
    copy: "Diseño y desarrollo avanzan juntos. Prototipamos, probamos, corregimos y cerramos decisiones con evidencia.",
  },
  {
    n: "04",
    title: "Escalar",
    copy: "Medimos lo que ocurre en producción y evolucionamos el sistema sin convertirlo en una deuda imposible.",
  },
] as const;

export function Process() {
  return (
    <section className="process section-pad" id="proceso">
      <div className="process__grid">
        <div className="process__side">
          <p className="kicker reveal">Proceso / sin humo</p>
          <h2 className="display reveal">
            Claro.
            <br />
            Rápido.
            <br />
            <em>Iterativo.</em>
          </h2>
          <p className="process__lead reveal">
            Cuatro etapas, siempre las mismas. Sabés en qué punto está tu proyecto y qué sigue
            después.
          </p>
        </div>
        <div className="process__steps">
          {steps.map((step) => (
            <article className="step reveal" key={step.n}>
              <span className="step__n">{step.n}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
