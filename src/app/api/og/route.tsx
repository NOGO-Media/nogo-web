import { ImageResponse } from "next/og";

// Dynamic OG image generator. Takes ?title=<text>&kind=<artikel|losning|brand>
// returns a 1200×630 PNG. Used as og:image-URL per page so social-share-CTR
// får distinkta bilder utan att behöva en .png per route-segment.
//
// Usage från page.tsx:
//   openGraph: {
//     images: [{
//       url: `/api/og?title=${encodeURIComponent("AI-automation för åkerier")}`,
//       width: 1200, height: 630,
//     }],
//   }

export const runtime = "edge";

const BG_GRADIENT = "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)";
const ACCENT_GREEN = "#10b981";
const TEXT_LIGHT = "#f3f4f6";
const TEXT_DIM = "#9ca3af";

function kindLabel(kind: string | null): string {
  switch (kind) {
    case "artikel":
      return "ARTIKEL";
    case "losning":
      return "LÖSNING";
    case "blogg":
      return "BLOGG";
    case "brand":
      return "NOGO MEDIA";
    default:
      return "NOGO MEDIA";
  }
}

export async function GET(request: Request): Promise<Response> {
  const { searchParams } = new URL(request.url);
  const titleRaw = searchParams.get("title") ?? "AI-automation för svenska åkerier";
  const kind = searchParams.get("kind");

  // Sanera + truncate så ImageResponse inte kraschar på extremt långa titlar.
  const title = titleRaw.length > 110 ? `${titleRaw.slice(0, 107)}...` : titleRaw;
  const eyebrow = kindLabel(kind);

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          background: BG_GRADIENT,
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Accent ring top-right */}
        <div
          style={{
            position: "absolute",
            top: "-200px",
            right: "-200px",
            width: "500px",
            height: "500px",
            borderRadius: "9999px",
            background: `radial-gradient(circle, ${ACCENT_GREEN}33 0%, transparent 70%)`,
          }}
        />

        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            color: ACCENT_GREEN,
            fontSize: "28px",
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "40px",
          }}
        >
          <span
            style={{
              width: "32px",
              height: "4px",
              background: ACCENT_GREEN,
              borderRadius: "2px",
            }}
          />
          {eyebrow}
        </div>

        {/* Title */}
        <div
          style={{
            color: TEXT_LIGHT,
            fontSize: title.length > 60 ? "64px" : "80px",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "auto",
            display: "flex",
          }}
        >
          {title}
        </div>

        {/* Footer brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: TEXT_DIM,
            fontSize: "32px",
            fontWeight: 500,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ color: TEXT_LIGHT, fontWeight: 700 }}>NOGO Media</span>
            <span>·</span>
            <span>nogomedia.se</span>
          </div>
          <div style={{ color: ACCENT_GREEN }}>AI-automation för åkerier</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
