import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "NOGO Media — AI-automation för svenska åkerier";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            letterSpacing: "-2px",
            marginBottom: 24,
          }}
        >
          NOGO
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#6b7280",
            maxWidth: 700,
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          AI-automation för svenska åkerier & transport
        </div>
        <div
          style={{
            fontSize: 18,
            color: "#9ca3af",
            marginTop: 24,
          }}
        >
          nogomedia.se
        </div>
      </div>
    ),
    { ...size }
  );
}
