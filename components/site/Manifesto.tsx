const manifesto =
  "Tomamos pocos proyectos por vez. Cada uno arranca con una pregunta incómoda: qué tiene que pasar para que esto realmente funcione. Después diseñamos, escribimos el código y lo dejamos andando.";

const words = manifesto.split(/\s+/);

function isAccent(word: string) {
  return word.includes("incómoda") || word.includes("funcione");
}

export function Manifesto() {
  return (
    <section className="manifesto section-pad" id="estudio">
      <div className="manifesto__track" id="mtrack">
        <div className="manifesto__pin">
          <p className="kicker reveal">Estudio digital</p>
          <h2 className="manifesto__text" id="mtext">
            {words.map((word, i) => (
              <span key={`${word}-${i}`} className={isAccent(word) ? "mag" : undefined}>
                {word}
                {i < words.length - 1 ? " " : ""}
              </span>
            ))}
          </h2>
          <div className="manifesto__layers" aria-hidden="true">
            <span className="layer layer-a">N</span>
            <span className="layer layer-b">U</span>
            <span className="layer layer-c">M</span>
          </div>
        </div>
      </div>
    </section>
  );
}
