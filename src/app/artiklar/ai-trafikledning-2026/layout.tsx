import type { Metadata } from "next";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: { absolute: "AI Trafikledning 2026 – Spara miljoner | NOGO Media" },
  description:
    "AI-agenter är inte framtidsteknik. Så automatiserar svenska åkerier 85–95 % av manuellt trafikledningsarbete 2026. Inkl. ROI-räknare.",
  alternates: { canonical: "/artiklar/ai-trafikledning-2026" },
  openGraph: {
    type: "article",
    title: "AI Trafikledning 2026 – Spara miljoner | NOGO Media",
    description:
      "Så kan svenska åkerier automatisera 85–95% av manuellt trafikledningsarbete med AI-automation. Inkl. interaktiv ROI-räknare.",
    url: "/artiklar/ai-trafikledning-2026",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "NOGO Media — AI Trafikledning 2026" }],
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
      <BreadcrumbJsonLd
        items={[
          { name: "Artiklar", path: "/blogg" },
          { name: "AI Trafikledning 2026", path: "/artiklar/ai-trafikledning-2026" },
        ]}
      />
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
