import Image from "next/image";
import logoSrc from "@/assets/numia-logo.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <a
      href="#hero"
      className={`inline-flex items-center ${className}`}
      aria-label="Numia Digital Studio - Inicio"
    >
      <Image
        src={logoSrc}
        alt="Numia Digital Studio"
        className="h-7 w-auto md:h-8"
        priority
        sizes="120px"
      />
    </a>
  );
}
