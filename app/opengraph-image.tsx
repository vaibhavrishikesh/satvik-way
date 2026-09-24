import { ImageResponse } from "next/og";
import { brand } from "@/lib/brand";

export const alt = `${brand.name} — ${brand.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#227200",
          color: "#ffffff",
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: 8, textTransform: "uppercase", color: "#ff7800" }}>
          {brand.monogram}
        </div>
        <div style={{ fontSize: 78, fontWeight: 700, marginTop: 18, textTransform: "uppercase" }}>{brand.name}</div>
        <div style={{ fontSize: 26, marginTop: 16, color: "#eaf6c8" }}>{brand.tagline}</div>
      </div>
    ),
    { ...size },
  );
}
