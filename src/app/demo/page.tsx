import type { Metadata } from "next";
import DemoDashboard from "@/components/demo/DemoDashboard";

export const metadata: Metadata = {
  title: "NOGO Dispatch — Demo",
  description:
    "Interaktiv demo av NOGO Dispatch — ruttplanering och disponering för svenska åkerier.",
  keywords: ["dispatch demo", "ruttplanering demo", "åkeri demo", "NOGO dispatch"],
  alternates: { canonical: "/demo" },
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  openGraph: {
    title: "NOGO Dispatch — Interaktiv demo",
    description:
      "Testa NOGO:s AI-drivna dispatch-system. Ruttoptimering, orderhantering och fordonsplanering i en interaktiv demo.",
    url: "/demo",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "NOGO Dispatch demo" }],
  },
};

export default function DemoPage() {
  return <DemoDashboard />;
}
