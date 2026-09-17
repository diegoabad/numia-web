"use client";

import { useEffect, useRef } from "react";
import { whatsappHref } from "@/lib/whatsapp";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" focusable="false" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0 0 12.04 2zm0 1.82c4.46 0 8.09 3.63 8.09 8.09 0 4.46-3.63 8.09-8.09 8.09-1.42 0-2.81-.37-4.03-1.07l-.29-.17-3.12.82.83-3.04-.19-.31a8.04 8.04 0 0 1-1.21-4.32c0-4.46 3.63-8.09 8.01-8.09zm4.42 10.51c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.16 1.52.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12h12.5M13.5 6.5 19 12l-5.5 5.5"
      />
    </svg>
  );
}

export function ContactWhatsAppPill({
  label = "Escribinos por WhatsApp",
  icon = "whatsapp",
}: {
  label?: string;
  icon?: "whatsapp" | "arrow";
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-inview");
      return;
    }

    const reveal = () => {
      el.classList.add("is-inview");
      observer.disconnect();
    };

    const shouldReveal = () => {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight * 0.98;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting || shouldReveal()) reveal();
      },
      { threshold: [0, 0.01, 0.05], rootMargin: "20% 0px 25% 0px" },
    );

    if (shouldReveal()) reveal();
    else observer.observe(el);

    const onScroll = () => {
      if (!el.classList.contains("is-inview") && shouldReveal()) reveal();
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <a
      ref={ref}
      className={`contact-pill contact-pill--wa${icon === "arrow" ? " contact-pill--cta" : ""}`}
      href={whatsappHref("general")}
      target="_blank"
      rel="noreferrer"
    >
      {icon === "arrow" ? (
        <>
          <span className="contact-pill__label">{label}</span>
          <span className="contact-pill__chevron" aria-hidden="true">
            <ArrowIcon />
          </span>
        </>
      ) : (
        <>
          <span className="contact-pill__icon" aria-hidden="true">
            <WhatsAppIcon />
          </span>
          <span className="contact-pill__label">{label}</span>
        </>
      )}
    </a>
  );
}
