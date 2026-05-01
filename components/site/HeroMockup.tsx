import { Sparkles, Rocket } from "lucide-react";

export function HeroMockup() {
  return (
    <div className="relative flex animate-float-up justify-center">
      <div className="relative w-full max-w-[460px]">
        <div className="relative z-20 rounded-2xl bg-plum p-3 pb-0 shadow-[0_30px_80px_-20px_color-mix(in_oklab,var(--pink)_30%,transparent)]">
          <div className="mb-2 flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-white/30" />
            <span className="h-2 w-2 rounded-full bg-white/30" />
            <span className="h-2 w-2 rounded-full bg-white/30" />
          </div>
          <div className="relative flex h-[220px] flex-col items-center justify-center gap-2.5 overflow-hidden rounded-t-lg bg-gradient-to-br from-pink-pale via-white to-lime/20">
            <div className="h-2.5 w-3/5 rounded-md bg-pink/25" />
            <div className="h-2.5 w-[45%] rounded-md bg-lime/40" />
            <div className="h-2.5 w-[30%] rounded-md bg-orange/30" />
            <div className="mt-2 h-6 w-24 rounded-full bg-pink" />
          </div>
        </div>

        <div className="absolute -bottom-6 -right-6 z-30 w-[100px] rounded-2xl bg-plum p-1.5 shadow-[0_20px_50px_-12px_color-mix(in_oklab,var(--pink)_35%,transparent)]">
          <div className="flex h-[140px] flex-col items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-pink-pale via-white to-lime/25">
            <div className="h-1.5 w-3/5 rounded-md bg-pink/30" />
            <div className="h-1.5 w-[45%] rounded-md bg-lime/50" />
            <div className="h-1.5 w-[35%] rounded-md bg-pink/30" />
            <div className="h-4 w-12 rounded-full bg-pink" />
          </div>
        </div>

        <div className="absolute -top-3 left-0 z-40 flex items-center gap-1.5 rounded-xl bg-card px-3 py-2 text-xs font-semibold text-pink shadow-soft">
          <Sparkles className="h-3.5 w-3.5" strokeWidth={2.25} /> Diseño premium
        </div>
        <div className="absolute -left-6 bottom-6 z-40 flex items-center gap-1.5 rounded-xl bg-card px-3 py-2 text-xs font-semibold text-orange shadow-soft">
          <Rocket className="h-3.5 w-3.5" strokeWidth={2.25} /> Entrega rápida
        </div>
      </div>
    </div>
  );
}
