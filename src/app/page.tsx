import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "AI-automation för åkerier & transport | NOGO Media",
  description:
    "NOGO Media bygger AI-automation för svenska åkerier. Ruttoptimering, trafikledning och TMS-integration — utan att ni byter system. Baserade i Norrköping.",
  keywords: [
    "AI-automation åkeri",
    "ruttoptimering",
    "trafikledning",
    "TMS-integration",
    "åkeri automation Sverige",
    "NOGO Media",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "AI-automation för åkerier & transport | NOGO Media",
    description:
      "AI-automation för svenska åkerier. Ruttoptimering, trafikledning och TMS-integration — utan att ni byter system.",
    url: "/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NOGO Media — AI-automation för svenska åkerier",
      },
    ],
  },
};
import LogoCloud from "@/components/LogoCloud";
const DispatchWorkflow = dynamic(
  () => import("@/components/dispatch-workflow/DispatchWorkflow")
);
import {
  FeatureGrid1,
  FeatureRealtime,
  FeatureTeam,
  FeatureSecurity,
  IntegrationSection,
  MoreFeatures,
} from "@/components/FeatureSection";
import Testimonial from "@/components/Testimonial";
import SocialProof from "@/components/SocialProof";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoCloud />

      <DispatchWorkflow />

      <FeatureGrid1 />

      <Testimonial
        quote="Efter flera år i transportbranschen såg vi att det är en väldigt komplex bransch med väldigt omoderna system som gör trafikledarna väldigt låsta. Då fick vi idén att utveckla ett verktyg som pratar med alla transportsystem."
        author="Hugo Svensson"
        role="VD & Grundare"
        company="NOGO Media"
      />

      <FeatureRealtime />

      <FeatureTeam />
      <FeatureSecurity />
      <IntegrationSection />
      <MoreFeatures />
      <SocialProof />

      <div id="faq">
        <FAQSection />
      </div>

      <CTASection />
    </>
  );
}
