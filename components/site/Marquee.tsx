const items = [
  "Diseño web",
  "E-commerce",
  "Redes sociales",
  "Branding",
  "Identidad visual",
  "Desarrollo web",
  "Aplicaciones",
  "Diseño gráfico",
  "Packaging",
  "Sistemas a medida",
  "Automatizaciones",
  "Landing pages",
  "Tiendas online",
  "Contenido digital",
  "Integraciones",
] as const;

/** Dos vueltas del set: alcanza para llenar el viewport y mantener el loop sin huecos. */
const loopItems = [...items, ...items];

function Track({ id }: { id: string }) {
  return (
    <div className="marquee__set">
      {loopItems.flatMap((label, index) => [
        <span key={`${id}-${label}-${index}`}>{label}</span>,
        <i key={`${id}-${label}-${index}-dot`} />,
      ])}
    </div>
  );
}

export function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        <Track id="a" />
        <Track id="b" />
      </div>
    </div>
  );
}
