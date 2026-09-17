import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site-config";

export const alt = `${siteConfig.name} — Creamos, diseñamos y conectamos`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: 72,
          background: "#f7f6f2",
          color: "#0c0c0e",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 20,
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#ed0a78",
          }}
        >
          Numia Digital Studio
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
            maxWidth: 940,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 74,
              fontWeight: 600,
              lineHeight: 0.92,
              letterSpacing: "-0.06em",
              textTransform: "uppercase",
            }}
          >
            <div style={{ display: "flex" }}>Creamos</div>
            <div style={{ display: "flex", color: "#ed0a78" }}>Diseñamos</div>
            <div style={{ display: "flex" }}>Conectamos.</div>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              lineHeight: 1.35,
              color: "#5c5954",
              maxWidth: 720,
            }}
          >
            {siteConfig.ogDescription}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 18,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#8a8680",
          }}
        >
          Buenos Aires · Argentina
        </div>
      </div>
    ),
    { ...size },
  );
}
