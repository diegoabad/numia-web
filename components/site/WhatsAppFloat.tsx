import { WhatsAppIcon } from "./WhatsAppIcon";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5491100000000"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-7 right-7 z-50 flex h-14 w-14 animate-pink-pulse items-center justify-center rounded-full bg-pink text-primary-foreground transition-transform hover:scale-110"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
