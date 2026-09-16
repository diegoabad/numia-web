import type { CSSProperties } from "react";
import { IsoMark } from "./IsoMark";
import { Marquee } from "./Marquee";

const claimTokens = [
  { text: "Creamos", accent: false },
  { text: "y", accent: false },
  { text: "desarrollamos", accent: false },
  { text: "la", accent: false },
  { text: "presencia digital", accent: true },
  { text: "de", accent: false },
  { text: "tu", accent: false },
  { text: "negocio", accent: true },
  { text: "a", accent: false },
  { text: "través", accent: false },
  { text: "del", accent: false },
  { text: "diseño web,", accent: true },
  { text: "e-commerce,", accent: true },
  { text: "redes sociales,", accent: true },
  { text: "identidad visual", accent: true },
  { text: "y", accent: false },
  { text: "soluciones digitales", accent: true },
  { text: "a", accent: false },
  { text: "medida.", accent: true },
] as const;

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__title-wrap">
        <div className="hero__title-block">
          <h1 className="hero__title" aria-label="Creamos, diseñamos y conectamos">
            <span className="line-mask">
              <span>CREAMOS</span>
            </span>
            <span className="line-mask line--indent">
              <span className="hero__accent">DISEÑAMOS</span>
            </span>
            <span className="line-mask">
              <span>
                CONECTAMOS<span className="hero__dot">.</span>
              </span>
            </span>
          </h1>
          <div className="hero__visual">
            <IsoMark className="hero__iso mk--draw" />
          </div>
        </div>
      </div>
      <p className="hero__claim">
        {claimTokens.map((token, i) => (
          <span
            key={`${token.text}-${i}`}
            className={token.accent ? "hero__claim-key" : undefined}
            style={{ "--i": i } as CSSProperties}
          >
            {token.text}
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
