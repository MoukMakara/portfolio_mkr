import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} — ${site.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #08090b 0%, #0f1420 100%)",
          color: "#ededef",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, color: "#6ea2ff", letterSpacing: 2 }}>{site.focus.join("  •  ")}</div>
        <div style={{ fontSize: 96, fontWeight: 700, marginTop: 24 }}>{site.name}</div>
        <div style={{ fontSize: 44, color: "#9b9ea8", marginTop: 12 }}>{site.title}</div>
        <div style={{ fontSize: 26, color: "#6f727c", marginTop: 48 }}>
          Java · Spring Boot · Next.js · PostgreSQL · Python · FastAPI · AI Engineering
        </div>
      </div>
    ),
    size,
  );
}
