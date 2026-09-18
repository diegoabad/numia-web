import { NextResponse } from "next/server";
import type { PartnerFormPayload } from "@/lib/partners-content";
import { siteConfig } from "@/lib/site-config";

export const runtime = "nodejs";

function isNonEmpty(v: unknown) {
  return typeof v === "string" && v.trim().length > 0;
}

function validate(body: unknown): { ok: true; data: PartnerFormPayload } | { ok: false; error: string } {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Datos inválidos." };
  }

  const b = body as Record<string, unknown>;
  const required = ["nombre", "edad", "provincia", "ciudad", "whatsapp", "email", "ocupacion", "experiencia"] as const;

  for (const key of required) {
    if (!isNonEmpty(b[key])) {
      return { ok: false, error: "Completá todos los campos obligatorios." };
    }
  }

  const canales = Array.isArray(b.canales)
    ? b.canales.filter((c): c is string => typeof c === "string" && c.length > 0)
    : [];

  if (!canales.length) {
    return { ok: false, error: "Elegí al menos una forma de conseguir clientes." };
  }

  const email = String(b.email).trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "El email no parece válido." };
  }

  return {
    ok: true,
    data: {
      nombre: String(b.nombre).trim(),
      edad: String(b.edad).trim(),
      provincia: String(b.provincia).trim(),
      ciudad: String(b.ciudad).trim(),
      whatsapp: String(b.whatsapp).trim(),
      email,
      ocupacion: String(b.ocupacion).trim(),
      experiencia: String(b.experiencia).trim(),
      canales,
      motivo: isNonEmpty(b.motivo) ? String(b.motivo).trim() : "",
      source: isNonEmpty(b.source) ? String(b.source).trim() : "partners",
    },
  };
}

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "JSON inválido." }, { status: 400 });
  }

  const parsed = validate(json);
  if (!parsed.ok) {
    return NextResponse.json({ ok: false, error: parsed.error }, { status: 400 });
  }

  const payload = {
    ...parsed.data,
    receivedAt: new Date().toISOString(),
    brand: siteConfig.name,
  };

  const webhook = process.env.PARTNERS_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        console.error("[partners] webhook failed", res.status);
      }
    } catch (err) {
      console.error("[partners] webhook error", err);
    }
  } else {
    console.info("[partners] nuevo registro", payload);
  }

  return NextResponse.json({ ok: true });
}
