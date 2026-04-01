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
import SocialProof from "@/components/SocialProof";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoCloud />

      <FeatureGrid1 />

      <Testimonial
        quote="Vårt team sparar timmar varje dag. Istället för att manuellt matcha förare och fordon kan vi nu fokusera på det som faktiskt kräver vår erfarenhet."
        author="Jörgen R."
        role="Trafikledare"
        company="Rosenlunds Åkeri"
      />

      <FeatureRealtime />

      <Testimonial
        quote="Vi hade prövat att bygga egna lösningar, optimera i Excel, köra med appar. NOGO var det enda som faktiskt fungerade i vår befintliga miljö."
        author="Marcus T."
        role="Transportchef"
        company="C4 Transport"
      />

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
