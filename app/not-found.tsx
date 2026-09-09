import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página no encontrada",
  description: "La página solicitada no existe en Numia Digital Studio.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="not-found">
      <div>
        <p className="kicker">ERROR / 404</p>
        <h1>NO ESTÁ.</h1>
        <p>La página que buscás no existe o fue movida.</p>
        <Link href="/">Volver al inicio</Link>
      </div>
    </div>
  );
}
