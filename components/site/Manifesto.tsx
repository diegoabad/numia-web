"use client";

import { useEffect } from "react";

const lead = "Tenés una idea. Nosotros te ayudamos a hacerla realidad.";

const bodyParagraphs = [
  "En Numia combinamos diseño y tecnología para crear soluciones pensadas alrededor de cada negocio.",
  "Podemos ayudarte a crear tu página web, empezar a vender online, mejorar la imagen de tu marca o desarrollar una herramienta que simplifique tu trabajo.",
  "Vos nos contás qué necesitás. Nosotros buscamos la mejor manera de hacerlo realidad.",
] as const;

const leadWords = lead.split(/\s+/);

function isAccent(word: string) {
  const clean = word.replace(/[.,;:!?]/g, "").toLowerCase();
  return (
    clean === "diseño" ||
    clean === "tecnología" ||
    clean === "negocio" ||
    clean === "realidad" ||
    clean === "herramienta"
  );
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function Manifesto() {
  useEffect(() => {
    const track = document.getElementById("mtrack");
    const spans = () => [
      ...document.querySelectorAll<HTMLElement>("#mlead span"),
      ...document.querySelectorAll<HTMLElement>("#mtext span"),
    ];
    if (!track) return;

    const reduced = prefersReducedMotion();
    if (reduced) {
      spans().forEach((word) => word.classList.add("lit"));
      return;
    }

    let ticking = false;
    const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));

    const update = () => {
      ticking = false;
      const wordsEls = spans();
      if (!wordsEls.length) return;

      const rect = track.getBoundingClientRect();
      const distance = Math.max(1, track.offsetHeight - window.innerHeight);
      const progress = clamp(-rect.top / distance, 0, 1);
      const lightProgress = clamp(progress / 0.7, 0, 1);
      const litCount = Math.ceil(lightProgress * wordsEls.length);

      wordsEls.forEach((word, index) => {
        word.classList.toggle("lit", index < litCount);
      });
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section className="manifesto section-pad" id="estudio">
      <div className="manifesto__track" id="mtrack">
        <div className="manifesto__pin">
          <p className="kicker reveal">Estudio digital</p>
          <p className="manifesto__lead" id="mlead">
            {leadWords.map((word, i) => (
              <span key={`lead-${word}-${i}`}>
                {word}
                {i < leadWords.length - 1 ? " " : ""}
              </span>
            ))}
          </p>
          <div className="manifesto__text" id="mtext">
            {bodyParagraphs.map((paragraph, pi) => {
              const words = paragraph.split(/\s+/);
              return (
                <p className="manifesto__para" key={paragraph}>
                  {words.map((word, i) => (
                    <span
                      key={`body-${pi}-${word}-${i}`}
                      className={isAccent(word) ? "mag" : undefined}
                    >
                      {word}
                      {i < words.length - 1 ? " " : ""}
                    </span>
                  ))}
                </p>
              );
            })}
          </div>
          <div className="manifesto__layers" aria-hidden="true">
            <span className="layer layer-a">N</span>
            <span className="layer layer-b">U</span>
            <span className="layer layer-c">M</span>
            <span className="manifesto__stars">
              <i className="star star--w star-1" />
              <i className="star star--p star-2" />
              <i className="star star--w star-3" />
              <i className="star star--p star-4" />
              <i className="star star--w star-5" />
              <i className="star star--p star-6" />
              <i className="star star--w star-7" />
              <i className="star star--p star-8" />
              <i className="star star--w star-9" />
              <i className="star star--p star-10" />
              <i className="star star--w star-11" />
              <i className="star star--p star-12" />
              <i className="star star--w star-13" />
              <i className="star star--p star-14" />
              <i className="star star--w star-15" />
              <i className="star star--p star-16" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
