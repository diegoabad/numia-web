const items = [
  "Diseño",
  "Código",
  "Marca",
  "Producto",
  "Web",
  "Software",
  "Negocio",
  "E-commerce",
] as const;

function Track({ id }: { id: string }) {
  return (
    <div className="marquee__set">
      {items.flatMap((label) => [
        <span key={`${id}-${label}`}>{label}</span>,
        <i key={`${id}-${label}-dot`} />,
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
