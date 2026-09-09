import type { CSSProperties } from "react";
import { IsoMark } from "./IsoMark";
import { Marquee } from "./Marquee";

const claim =
  "Diseñamos y construimos marcas, webs y software a medida para negocios que necesitan algo más que una pantalla bonita.";

const claimWords = claim.split(" ");

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__title-wrap">
        <div className="hero__title-block">
          <h1 className="hero__title" aria-label="Diseño, código y negocio">
            <span className="line-mask">
              <span>DISEÑO</span>
            </span>
            <span className="line-mask line--indent">
              <span className="hero__accent">CÓDIGO</span>
            </span>
            <span className="line-mask">
              <span>
                NEGOCIO<span className="hero__dot">.</span>
              </span>
            </span>
          </h1>
          <div className="hero__visual">
            <IsoMark className="hero__iso mk--draw" />
          </div>
        </div>
      </div>
      <p className="hero__claim">
        {claimWords.map((word, i) => (
          <span key={`${word}-${i}`} style={{ "--i": i } as CSSProperties}>
            {word}
          </span>
        ))}
      </p>
      <Marquee />
      <div className="hero__index" aria-hidden="true">
        N°01
      </div>
    </section>
  );
}
