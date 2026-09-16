"use client";

import { useEffect } from "react";

const body =
  "Combinamos diseño, comunicación y tecnología para crear soluciones que potencien tu negocio, fortalezcan tu marca y conecten con las personas. Desde la primera idea hasta el resultado final, pensamos cada proyecto para que se vea bien, funcione mejor y tenga un propósito.";

const words = body.split(/\s+/);

function isAccent(word: string) {
  const clean = word.replace(/[.,;:!?]/g, "").toLowerCase();
  return clean === "diseño" || clean === "tecnología" || clean === "funcione" || clean === "mejor";
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function Manifesto() {
  useEffect(() => {
    const track = document.getElementById("mtrack");
    const spans = () => [...document.querySelectorAll<HTMLElement>("#mtext span")];
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
      // Termina de iluminar ~70% del sticky; el resto queda trabado con el texto completo
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
          <p className="manifesto__lead reveal">
            Tenés una idea. Nosotros te ayudamos a hacerla realidad.
          </p>
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
