const stats = [
  { value: "04", label: "disciplinas\nintegradas" },
  { value: "15", label: "días para\nun primer release*" },
  { value: "01", label: "equipo\nde punta a punta" },
  { value: "100", label: "% foco en\nlo que importa" },
] as const;

export function Stats() {
  return (
    <section className="stats section-pad" id="cifras">
      <div className="stats__head">
        <p className="kicker reveal">LO QUE MEDIMOS</p>
        <p className="stats__small reveal">
          No vendemos “pantallas”. Construimos infraestructura digital que se pueda usar, mantener y
          escalar.
        </p>
      </div>
      <div className="stats__grid">
        {stats.map((stat) => (
          <div className="stat reveal" key={stat.value + stat.label}>
            <span className="stat__n" data-counter={stat.value}>
              00
            </span>
            <span className="stat__label">
              {stat.label.split("\n").map((line, i) => (
                <span key={line}>
                  {i > 0 ? <br /> : null}
                  {line}
                </span>
              ))}
            </span>
          </div>
        ))}
      </div>
      <div className="fineprint">
        *Según alcance. El objetivo siempre es llegar rápido a algo real, usable y medible.
      </div>
    </section>
  );
}
