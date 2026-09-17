const steps = [
  {
    n: "01",
    title: "Nos conocemos",
    copy: "Nos contás sobre tu negocio, tu idea y qué necesitás. Nosotros te escuchamos y buscamos entender qué querés lograr.",
  },
  {
    n: "02",
    title: "Pensamos la solución",
    copy: "Definimos qué vamos a hacer, qué necesitás realmente y cuál es la mejor forma de llevarlo adelante.",
  },
  {
    n: "03",
    title: "Lo hacemos realidad",
    copy: "Diseñamos y desarrollamos tu proyecto, compartiendo avances para que puedas acompañar el proceso.",
  },
  {
    n: "04",
    title: "Lo ponemos en marcha",
    copy: "Dejamos todo listo para empezar a usarlo y te acompañamos en los primeros pasos.",
  },
] as const;

export function Process() {
  return (
    <section className="process section-pad" id="proceso">
      <div className="process__grid">
        <div className="process__side">
          <p className="kicker reveal">Nuestro proceso</p>
          <h2 className="display reveal">
            De la idea
            <br />
            a la <em>realidad.</em>
          </h2>
          <p className="process__lead reveal">
            Un proceso simple y acompañado para transformar tu idea en algo concreto.
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
