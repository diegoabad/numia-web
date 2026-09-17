"use client";

import { useEffect, useRef } from "react";

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

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function Work() {
  const trackRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const rail = railRef.current;
    const stage = stageRef.current;
    if (!track || !rail || !stage) return;

    const reduced = prefersReducedMotion();
    let ticking = false;
    const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));

    const update = () => {
      ticking = false;
      const cards = [...rail.querySelectorAll<HTMLElement>(".project")];
      if (!cards.length) return;

      if (reduced) {
        rail.style.transform = "none";
        cards.forEach((card) => {
          card.style.opacity = "1";
        });
        return;
      }

      const distance = Math.max(1, track.offsetHeight - window.innerHeight);
      const progress = clamp(-track.getBoundingClientRect().top / distance, 0, 1);
      const styles = getComputedStyle(stage);
      const padX =
        (Number.parseFloat(styles.paddingLeft) || 0) +
        (Number.parseFloat(styles.paddingRight) || 0);
      const view = Math.max(1, stage.clientWidth - padX);
      const maxX = Math.max(0, rail.scrollWidth - view);
      rail.style.transform = `translate3d(${(-progress * maxX).toFixed(2)}px, 0, 0)`;

      if (maxX < 8) {
        cards.forEach((card) => {
          card.style.opacity = "1";
        });
        return;
      }

      const stageRect = stage.getBoundingClientRect();
      const focusX = stageRect.left + Math.min(stageRect.width * 0.38, 280);

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const abs = Math.min(1, Math.abs(cardCenter - focusX) / Math.max(1, stageRect.width * 0.55));
        card.style.opacity = (1 - abs * 0.42).toFixed(3);
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
    <section className="work" id="proyectos">
      <div className="work__carousel" ref={trackRef}>
        <div className="work__carousel-pin">
          <div className="work__intro section-pad">
            <p className="kicker">Proyectos / selección</p>
            <h2 className="display">
              Lo que ya
              <br />
              <em>hicimos.</em>
            </h2>
            <p className="work__lead">
              Casos reales que respaldan lo que podemos construir para tu negocio.
            </p>
          </div>

          <div className="work__carousel-stage section-pad" ref={stageRef}>
            <div className="work__carousel-rail" ref={railRef}>
              {projects.map((project) => (
                <article className="project" key={project.stamp}>
                  <span className="project__stamp" aria-hidden="true">
                    {project.stamp}
                  </span>
                  <div className="project__body">
                    <p className="project__type">{project.type}</p>
                    <h3 className="project__title">{project.title}</h3>
                    <p className="project__copy">{project.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
