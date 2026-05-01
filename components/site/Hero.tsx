import { HeroMockup } from "./HeroMockup";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-[5%] pb-16 pt-28"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-[500px] w-[500px] animate-drift rounded-full bg-pink/15 blur-3xl" />
      <div
        className="pointer-events-none absolute -left-20 bottom-0 h-[300px] w-[300px] animate-drift rounded-full bg-lime/25 blur-3xl"
        style={{ animationDirection: "alternate-reverse" }}
      />
      <div className="pointer-events-none absolute left-2/5 top-2/5 h-[200px] w-[200px] animate-drift rounded-full bg-orange/15 blur-3xl" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-16 md:grid-cols-2">
        <div className="animate-float-up">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-pink-pale px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-pink">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-pink" />
            Diseño digital premium
          </span>
          <h1 className="font-display text-balance text-4xl leading-[1.08] md:text-6xl">
            Diseño digital que <em className="not-italic gradient-text">hace crecer</em> tu marca
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
            En NUMIA Digital Studio creamos páginas web, landing pages y diseños visuales para
            marcas que quieren verse profesionales y vender más.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#cta"
              className="btn-shine inline-flex cursor-pointer items-center gap-2 rounded-full bg-pink px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow-pink transition-transform hover:-translate-y-1 active:translate-y-0"
            >
              Pedir presupuesto →
            </a>
            <a
              href="#servicios"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border-2 border-foreground px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:-translate-y-1 hover:border-pink hover:text-pink"
            >
              Ver servicios ↓
            </a>
          </div>
        </div>

        <div className="animate-float-y">
          <HeroMockup />
        </div>
      </div>
    </section>
  );
}
