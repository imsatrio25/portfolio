import { ImageResponse } from "next/og";

export const alt = "Imam Satrio — AI Engineer";
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
          padding: "0 96px",
          background: "#0a0a0a",
          color: "#fff",
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
            fontSize: 32,
            color: "#10b981",
            marginBottom: 24,
          }}
        >
          imamsatrio.dev
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 84,
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          Imam Satrio
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 44,
            color: "#a1a1aa",
            marginTop: 16,
          }}
        >
          AI Engineer
        </div>
      </div>
    ),
    size
  );
}
