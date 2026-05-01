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
          background: "linear-gradient(135deg, #c0266e 0%, #9d174d 45%, #7c2d12 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            maxWidth: 900,
          }}
        >
          <div
            style={{
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.85)",
            }}
          >
            Estudio digital
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.05,
              color: "white",
              letterSpacing: "-0.02em",
            }}
          >
            {siteConfig.shortName}
          </div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.35,
              color: "rgba(255,255,255,0.92)",
              maxWidth: 720,
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
