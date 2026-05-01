import { WhatsAppIcon } from "./WhatsAppIcon";

const WSP = "https://wa.me/5491100000000?text=Hola%20NUMIA,%20quiero%20pedir%20un%20presupuesto";

export function CTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden px-[5%] py-28 text-center"
      style={{ background: "linear-gradient(135deg, var(--pink) 0%, oklch(0.45 0.22 0) 100%)" }}
    >
      <div className="animate-cta-blob-1 pointer-events-none absolute -right-24 -top-36 h-[420px] w-[420px] rounded-full bg-white/10 blur-[1px] will-change-transform" />
      <div className="animate-cta-blob-2 pointer-events-none absolute -bottom-28 left-[4%] h-[280px] w-[280px] rounded-full bg-white/[0.06] blur-[1px] will-change-transform" />
      <div className="animate-cta-blob-3 pointer-events-none absolute left-[6%] top-[12%] h-[150px] w-[150px] rounded-full bg-white/[0.09] will-change-transform md:h-[180px] md:w-[180px]" />
      <div className="animate-cta-blob-4 pointer-events-none absolute top-[8%] right-[18%] h-[72px] w-[72px] rounded-full bg-white/[0.14] will-change-transform md:h-[96px] md:w-[96px]" />
      <div className="animate-cta-blob-5 pointer-events-none absolute -left-20 bottom-[12%] h-[240px] w-[240px] rounded-full bg-white/[0.07] blur-[2px] will-change-transform md:h-[300px] md:w-[300px]" />
      <div className="animate-cta-blob-6 pointer-events-none absolute top-[34%] right-[26%] h-[100px] w-[100px] rounded-full bg-white/[0.11] will-change-transform md:top-[36%] md:right-[28%] md:h-[130px] md:w-[130px]" />

      <span className="relative inline-block text-xs font-bold uppercase tracking-[0.18em] text-white/80">
        ¿Lista para empezar?
      </span>
      <h2 className="relative mx-auto mt-3 max-w-2xl font-display text-3xl leading-tight text-white md:text-5xl">
        Tu marca merece{" "}
        <em className="relative not-italic">
          <span className="relative z-10 bg-gradient-to-r from-lime to-[oklch(0.92_0.18_120)] bg-clip-text text-transparent drop-shadow-[0_2px_12px_color-mix(in_oklab,var(--lime)_60%,transparent)]">
            verse profesional
          </span>
          <svg
            aria-hidden="true"
            viewBox="0 0 300 12"
            preserveAspectRatio="none"
            className="absolute -bottom-1 left-0 h-2 w-full text-lime/80"
          >
            <path
              d="M2 8 Q 75 2, 150 7 T 298 5"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </em>
      </h2>
      <p className="relative mx-auto mt-6 max-w-xl text-base text-white/85">
        Hablemos y creemos una imagen digital que venda. Sin compromiso, solo buenas ideas.
      </p>
      <a
        href={WSP}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-shine relative mt-10 inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-white px-9 py-4 text-base font-bold text-pink shadow-[0_16px_40px_-10px_rgba(0,0,0,0.3)] transition-transform hover:-translate-y-1 active:translate-y-0"
      >
        <WhatsAppIcon className="h-5 w-5 text-pink" /> Escribime por WhatsApp
      </a>
    </section>
  );
}
