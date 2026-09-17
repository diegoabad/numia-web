"use client";

import { useEffect, useRef, useState } from "react";
import { IsoMark } from "./IsoMark";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function SiteRuntime() {
  const [done, setDone] = useState(false);
  const [visible, setVisible] = useState(true);
  const barRef = useRef<HTMLSpanElement>(null);
  const countRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const body = document.body;
    const reduced = prefersReducedMotion();
    let seen = false;
    try {
      seen = sessionStorage.getItem("numia-ready") === "1";
    } catch {
      seen = false;
    }

    if (reduced || seen) {
      body.classList.add("is-loaded");
      setVisible(false);
      return;
    }

    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / 420);
      const eased = 1 - Math.pow(1 - t, 3);
      const n = Math.floor(eased * 100);
      if (countRef.current) countRef.current.textContent = String(n).padStart(2, "0");
      if (barRef.current) barRef.current.style.width = `${n}%`;
      if (t < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        try {
          sessionStorage.setItem("numia-ready", "1");
        } catch {
          /* ignore */
        }
        setDone(true);
        body.classList.add("is-loaded");
        window.setTimeout(() => setVisible(false), 420);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const targets = [
      ...document.querySelectorAll<HTMLElement>(".reveal, .split-reveal, .closing__title"),
    ];
    if (!targets.length) return;

    const reduced = prefersReducedMotion();
    if (reduced) {
      targets.forEach((el) => el.classList.add("is-inview"));
      return;
    }

    let observer: IntersectionObserver;

    const reveal = (el: HTMLElement) => {
      if (el.classList.contains("is-inview")) return;
      el.classList.add("is-inview");
      if (el.classList.contains("stat")) {
        animateCounter(el.querySelector("[data-counter]"));
      }
      observer?.unobserve(el);
    };

    const shouldReveal = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      // Entró al viewport o ya se pasó (scroll rápido)
      return rect.top < window.innerHeight * 0.98;
    };

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting || shouldReveal(el)) reveal(el);
        });
      },
      { threshold: [0, 0.01, 0.1], rootMargin: "12% 0px 18% 0px" },
    );

    targets.forEach((el) => {
      if (shouldReveal(el)) reveal(el);
      else observer.observe(el);
    });

    const sweep = () => {
      targets.forEach((el) => {
        if (!el.classList.contains("is-inview") && shouldReveal(el)) reveal(el);
      });
    };

    window.addEventListener("scroll", sweep, { passive: true });
    window.addEventListener("resize", sweep);
    const boot = window.setTimeout(sweep, 120);

    return () => {
      observer.disconnect();
      window.clearTimeout(boot);
      window.removeEventListener("scroll", sweep);
      window.removeEventListener("resize", sweep);
    };
  }, []);

  useEffect(() => {
    const parallax = [...document.querySelectorAll<HTMLElement>("[data-parallax]")];
    let ticking = false;

    const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));

    const syncStuckPanels = () => {
      document.querySelectorAll<HTMLElement>("[data-panel]").forEach((panel) => {
        const stickyTop = Number.parseFloat(getComputedStyle(panel).top) || 0;
        const top = panel.getBoundingClientRect().top;
        // Un poco antes de clavar, para que no se vea la curva contra el fondo
        panel.classList.toggle("is-stuck", top <= stickyTop + 20);
      });
    };

    const onFrame = () => {
      ticking = false;

      if (progressRef.current) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const p = clamp(max > 0 ? window.scrollY / max : 0, 0, 1);
        progressRef.current.style.transform = `scaleX(${p.toFixed(4)})`;
      }

      parallax.forEach((el) => {
        const speed = Number.parseFloat(el.dataset.parallax || "0.1");
        const r = el.getBoundingClientRect();
        const center = r.top + r.height / 2 - window.innerHeight / 2;
        el.style.transform = `translate3d(0, ${(center * -speed).toFixed(2)}px, 0)`;
      });

      // Solo sincroniza paneles sticky cuando hay scroll reciente
      syncStuckPanels();
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(onFrame);
      }
    };
    const onResize = () => {
      onFrame();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    onFrame();
    const boot = window.setTimeout(onFrame, 100);
    return () => {
      window.clearTimeout(boot);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    const menuBtn = document.querySelector<HTMLButtonElement>(".menu-btn");
    const panel = document.querySelector<HTMLElement>(".mobile-panel");
    if (!menuBtn || !panel) return;

    const setOpen = (open: boolean) => {
      panel.classList.toggle("open", open);
      menuBtn.setAttribute("aria-expanded", String(open));
      menuBtn.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
      menuBtn.setAttribute("aria-controls", "mobile-panel");
      panel.querySelectorAll("a").forEach((a) => {
        if (open) a.removeAttribute("tabindex");
        else a.setAttribute("tabindex", "-1");
      });
      document.body.classList.toggle("is-menu-open", open);
      if (open) {
        const first = panel.querySelector<HTMLAnchorElement>("a");
        first?.focus();
      }
    };
    const toggle = () => setOpen(!panel.classList.contains("open"));
    const close = () => setOpen(false);

    const onResize = () => {
      if (window.innerWidth > 1100) close();
    };

    menuBtn.addEventListener("click", toggle);
    const links = panel.querySelectorAll("a");
    links.forEach((a) => a.addEventListener("click", close));
    window.addEventListener("resize", onResize);
    return () => {
      menuBtn.removeEventListener("click", toggle);
      links.forEach((a) => a.removeEventListener("click", close));
      window.removeEventListener("resize", onResize);
      document.body.classList.remove("is-menu-open");
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true">
        <i ref={progressRef} />
      </div>
      {visible ? (
        <div className={`preloader${done ? " is-done" : ""}`} aria-hidden="true">
          <div className="preloader__inner">
            <IsoMark className="preloader__iso" />
            <div className="preloader__bar">
              <i ref={barRef} />
            </div>
            <div className="preloader__count" ref={countRef}>
              00
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

function animateCounter(el: Element | null) {
  if (!(el instanceof HTMLElement) || el.dataset.done) return;
  el.dataset.done = "1";
  const raw = el.dataset.counter ?? "0";
  const target = Number.parseInt(raw, 10);
  const digits = raw.length;
  const t0 = performance.now();
  const duration = 1200;
  const run = (now: number) => {
    const p = Math.min(1, (now - t0) / duration);
    const v = Math.round(target * (1 - Math.pow(1 - p, 3)));
    el.textContent = String(v).padStart(digits, "0");
    if (p < 1) requestAnimationFrame(run);
  };
  requestAnimationFrame(run);
}
