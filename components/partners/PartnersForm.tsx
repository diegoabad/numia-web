"use client";

import { useState, type FormEvent } from "react";
import { partnersContent } from "@/lib/partners-content";

type Status = "idle" | "loading" | "success" | "error";

export function PartnersForm() {
  const { form, success } = partnersContent;
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [canales, setCanales] = useState<string[]>([]);

  const toggleCanal = (value: string) => {
    setCanales((prev) =>
      prev.includes(value) ? prev.filter((c) => c !== value) : [...prev, value],
    );
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setStatus("loading");

    const fd = new FormData(e.currentTarget);
    const payload = {
      nombre: String(fd.get("nombre") ?? ""),
      edad: String(fd.get("edad") ?? ""),
      provincia: String(fd.get("provincia") ?? ""),
      ciudad: String(fd.get("ciudad") ?? ""),
      whatsapp: String(fd.get("whatsapp") ?? ""),
      email: String(fd.get("email") ?? ""),
      ocupacion: String(fd.get("ocupacion") ?? ""),
      experiencia: String(fd.get("experiencia") ?? ""),
      canales,
      motivo: String(fd.get("motivo") ?? ""),
      source: "partners",
    };

    try {
      const res = await fetch("/api/partners", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setError(data.error || "No pudimos enviar el formulario. Probá de nuevo.");
        setStatus("error");
        return;
      }
      setStatus("success");
      window.requestAnimationFrame(() => {
        document.getElementById("registro")?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    } catch {
      setError("Hubo un problema de conexión. Probá de nuevo.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <section className="pl-success" id="registro" aria-live="polite">
        <p className="pl-kicker">Numia Partners</p>
        <h2 className="pl-success__title">{success.title}</h2>
        <p className="pl-success__lead">{success.lead}</p>
        <p className="pl-success__body">{success.body}</p>
        <ul className="pl-success__list">
          {success.next.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <section className="pl-form" id="registro">
      <div className="pl-form__intro">
        <p className="pl-kicker">Registro</p>
        <h2 className="pl-section__title">{form.title}</h2>
        <p className="pl-section__lead">{form.lead}</p>
      </div>

      <form className="pl-form__grid" onSubmit={onSubmit} noValidate>
        <label className="pl-field">
          <span>Nombre y apellido</span>
          <input name="nombre" type="text" autoComplete="name" required />
        </label>
        <label className="pl-field">
          <span>Edad</span>
          <input name="edad" type="number" min={16} max={99} inputMode="numeric" required />
        </label>
        <label className="pl-field">
          <span>Provincia</span>
          <input name="provincia" type="text" autoComplete="address-level1" required />
        </label>
        <label className="pl-field">
          <span>Ciudad</span>
          <input name="ciudad" type="text" autoComplete="address-level2" required />
        </label>
        <label className="pl-field">
          <span>WhatsApp</span>
          <input
            name="whatsapp"
            type="tel"
            autoComplete="tel"
            placeholder="11 5555-5555"
            required
          />
        </label>
        <label className="pl-field">
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>

        <fieldset className="pl-fieldset">
          <legend>¿Actualmente trabajás o estudiás?</legend>
          <div className="pl-choices">
            {form.ocupacion.map((opt) => (
              <label key={opt.value} className="pl-choice">
                <input type="radio" name="ocupacion" value={opt.value} required />
                <span>{opt.label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className="pl-fieldset">
          <legend>¿Tenés experiencia vendiendo?</legend>
          <div className="pl-choices">
            {form.experiencia.map((opt) => (
              <label key={opt.value} className="pl-choice">
                <input type="radio" name="experiencia" value={opt.value} required />
                <span>{opt.label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className="pl-fieldset pl-fieldset--full">
          <legend>¿Cómo pensás conseguir clientes?</legend>
          <div className="pl-choices pl-choices--wrap">
            {form.canales.map((opt) => (
              <label key={opt.value} className="pl-choice">
                <input
                  type="checkbox"
                  checked={canales.includes(opt.value)}
                  onChange={() => toggleCanal(opt.value)}
                />
                <span>{opt.label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <label className="pl-field pl-field--full">
          <span>¿Por qué te gustaría sumarte?</span>
          <textarea name="motivo" rows={3} maxLength={400} placeholder="Respuesta corta (opcional)" />
        </label>

        {error ? (
          <p className="pl-form__error" role="alert">
            {error}
          </p>
        ) : null}

        <div className="pl-form__actions">
          <button className="pl-cta" type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Enviando…" : "Quiero ser Partner"}
          </button>
          <p className="pl-form__note">Sin costo de ingreso. Te contactamos a la brevedad.</p>
        </div>
      </form>
    </section>
  );
}
