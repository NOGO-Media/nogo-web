import type { Metadata } from "next";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "AI Trafikledning 2026 – Så kan svenska åkerier spara miljoner",
  description:
    "AI-agenter för transportbranschen är inte längre framtidsteknik. Så kan svenska åkerier automatisera 85–95% av manuellt trafikledningsarbete. Inkl. ROI-räknare.",
  alternates: { canonical: "/artiklar/ai-trafikledning-2026" },
  openGraph: {
    type: "article",
    title: "AI Trafikledning 2026 – Så kan svenska åkerier spara miljoner",
    description:
      "Så kan svenska åkerier automatisera 85–95% av manuellt trafikledningsarbete med AI-automation. Inkl. interaktiv ROI-räknare.",
    url: "/artiklar/ai-trafikledning-2026",
    publishedTime: "2026-04-01T00:00:00Z",
    authors: ["NOGO Media AB"],
    tags: ["AI", "trafikledning", "automation", "åkeri", "ROI"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Trafikledning 2026 – Spara miljoner med AI-automation",
    description:
      "Så kan svenska åkerier automatisera 85–95% av manuellt trafikledningsarbete. Inkl. ROI-räknare.",
  },
};

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ArticleJsonLd
        title="AI Trafikledning 2026 – Så kan svenska åkerier spara miljoner"
        description="Så kan svenska åkerier automatisera 85–95% av manuellt trafikledningsarbete med AI-automation."
        url="/artiklar/ai-trafikledning-2026"
        publishedTime="2026-04-01T00:00:00Z"
        tags={["AI", "trafikledning", "automation", "åkeri", "ROI"]}
      />
      {children}
    </>
  );
}
