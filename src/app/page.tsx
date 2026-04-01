import Hero from "@/components/Hero";
import LogoCloud from "@/components/LogoCloud";
import {
  FeatureGrid1,
  FeatureRealtime,
  FeatureTeam,
  FeatureSecurity,
  IntegrationSection,
  MoreFeatures,
} from "@/components/FeatureSection";
import Testimonial from "@/components/Testimonial";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoCloud />

      <FeatureGrid1 />

      <Testimonial
        quote="Efter flera år i transportbranschen såg vi att det är en väldigt komplex bransch med väldigt omoderna verktyg och system som gör trafikledarna väldigt låsta. Då fick vi idén att utveckla ett verktyg som pratar med alla transportsystem."
        author="Hugo Svensson"
        role="VD & Grundare"
        company="NOGO Media"
      />

      <FeatureRealtime />

      <FeatureTeam />
      <FeatureSecurity />
      <IntegrationSection />
      <MoreFeatures />

      <div id="faq">
        <FAQSection />
      </div>

      <CTASection />
    </>
  );
}
