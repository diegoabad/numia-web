import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site-config";

export const alt = siteConfig.name;
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
          justifyContent: "center",
          padding: 72,
          background: "#f7f6f2",
          color: "#0c0c0e",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            maxWidth: 920,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#ed0a78",
            }}
          >
            Estudio digital · Argentina
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 72,
              fontWeight: 600,
              lineHeight: 0.9,
              letterSpacing: "-0.07em",
              textTransform: "uppercase",
            }}
          >
            <div style={{ display: "flex" }}>Diseño</div>
            <div style={{ display: "flex" }}>Código</div>
            <div style={{ display: "flex" }}>Negocio.</div>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              lineHeight: 1.35,
              color: "#716e69",
              maxWidth: 680,
            }}
          >
            {siteConfig.ogDescription}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
