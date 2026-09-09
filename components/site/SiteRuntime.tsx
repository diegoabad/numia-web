"use client";

import { useEffect, useRef, useState } from "react";
import { IsoMark } from "./IsoMark";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function SiteRuntime() {
  const [count, setCount] = useState("00");
  const [done, setDone] = useState(false);
  const [visible, setVisible] = useState(true);
  const barRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const body = document.body;
    const reduced = prefersReducedMotion();

    if (reduced) {
      body.classList.add("is-loaded");
      setVisible(false);
    } else {
      const start = performance.now();
      let frame = 0;
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / 1050);
        const eased = 1 - Math.pow(1 - t, 3);
        const n = Math.floor(eased * 100);
        setCount(String(n).padStart(2, "0"));
        if (barRef.current) barRef.current.style.width = `${n}%`;
        if (t < 1) {
          frame = requestAnimationFrame(tick);
        } else {
          window.setTimeout(() => {
            setDone(true);
            body.classList.add("is-loaded");
            window.setTimeout(() => setVisible(false), 1100);
          }, 180);
        }
      };
      frame = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(frame);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-inview");
          if (entry.target.classList.contains("stat")) {
            animateCounter(entry.target.querySelector("[data-counter]"));
          }
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    document.querySelectorAll(".reveal, .split-reveal, .closing__title").forEach((el) => {
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const parallax = [...document.querySelectorAll<HTMLElement>("[data-parallax]")];
    const mtrack = document.getElementById("mtrack");
    const manifestoWords = [
      ...document.querySelectorAll<HTMLElement>("#mtext span"),
    ];
    const reduced = prefersReducedMotion();
    let ticking = false;

    if (reduced) {
      manifestoWords.forEach((word) => word.classList.add("lit"));
    }

    const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));

    const onFrame = () => {
      ticking = false;

      if (!reduced && mtrack && manifestoWords.length) {
        const trackRect = mtrack.getBoundingClientRect();
        const pin = mtrack.querySelector<HTMLElement>(".manifesto__pin");
        const pinH = pin?.offsetHeight ?? window.innerHeight;
        const progress = clamp(
          -trackRect.top / Math.max(1, trackRect.height - pinH),
          0,
          1,
        );
        const litCount = Math.round(progress * manifestoWords.length * 1.18);
        manifestoWords.forEach((word, index) => {
          word.classList.toggle("lit", index < litCount);
        });
      }

      parallax.forEach((el) => {
        const speed = Number.parseFloat(el.dataset.parallax || "0.1");
        const r = el.getBoundingClientRect();
        const center = r.top + r.height / 2 - window.innerHeight / 2;
        el.style.transform = `translate3d(0, ${center * -speed}px, 0)`;
      });
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
    return () => {
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
      panel.setAttribute("aria-hidden", String(!open));
      document.body.classList.toggle("is-menu-open", open);
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
      <div className="noise" aria-hidden="true" />
      {visible ? (
        <div className={`preloader${done ? " is-done" : ""}`} aria-hidden="true">
          <div className="preloader__inner">
            <IsoMark className="preloader__iso" />
            <div className="preloader__bar">
              <i ref={barRef} />
            </div>
            <div className="preloader__count">{count}</div>
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
