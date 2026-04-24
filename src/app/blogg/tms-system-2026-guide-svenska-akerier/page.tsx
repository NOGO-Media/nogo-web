import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import RelatedSolutions from "@/components/RelatedSolutions";

export const metadata: Metadata = {
  title: "TMS-system 2026 — guide för åkerier",
  description:
    "Vad är ett TMS, vilka alternativ finns i Sverige och hur väljer åkerier rätt? Jämförelse av Opter, AddSecure, Cargoson, nShift och pinDeliver.",
  alternates: { canonical: "/blogg/tms-system-2026-guide-svenska-akerier" },
  openGraph: {
    type: "article",
    title: "TMS-system 2026 — guide för åkerier",
    description:
      "Neutral TMS-guide för svenska åkerier: funktioner, målgrupper, prissättning och valkriterier.",
    url: "/blogg/tms-system-2026-guide-svenska-akerier",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "NOGO Media — TMS-guide 2026" }],
    publishedTime: "2026-04-02T00:00:00Z",
    authors: ["NOGO Media AB"],
    tags: ["TMS", "transporthanteringssystem", "åkeri", "ruttoptimering"],
  },
};

const systems = [
  {
    name: "Opter",
    fit: "Små till medelstora nordiska åkerier",
    strength: "Komplett order-till-faktura och starka svenska ekonomiintegrationer",
    weakness:
      "Begränsad funktionalitet för last mile och e-handelsflöden. Passar bättre för åkerier än för rena avsändarorganisationer.",
  },
  {
    name: "AddSecure FleetVision",
    fit: "Medelstora till stora fordonsflottor",
    strength: "Kombinerar TMS med telematik, färdskrivardata och compliance",
    weakness:
      "Mer komplex implementation och högre ingångskostnad. Kan vara överdimensionerat för åkerier under 20 fordon.",
  },
  {
    name: "Cargoson",
    fit: "Avsändare och transportköpare",
    strength: "Transparent prisbild och brett transportörsnätverk",
    weakness:
      "Passar avsändare bättre än åkerier med egen flotta. Begränsat stöd för intern trafikledning och ruttoptimering.",
  },
  {
    name: "nShift",
    fit: "E-handel och retail",
    strength: "Mycket starkt TA-ekosystem och stor transportörstäckning",
    weakness:
      "Primärt byggt för e-handel och retail — inte optimerat för komplexa transportflöden med egna fordon.",
  },
  {
    name: "pinDeliver",
    fit: "Last mile och distributionsflöden",
    strength: "AI-driven ruttoptimering och kundavisering i realtid",
    weakness:
      "Fokuserat på last mile. Passar sämre för långdistans eller bulk-transport utan tydlig leveranspunkt.",
  },
];

export default function TMSGuideArticle() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Blogg", path: "/blogg" },
          { name: "TMS-system 2026 guide", path: "/blogg/tms-system-2026-guide-svenska-akerier" },
        ]}
      />
      <ArticleJsonLd
        title="TMS-system 2026: Komplett guide för svenska åkerier"
        description="Vad är ett TMS-system, vilka alternativ finns i Sverige och hur väljer åkerier rätt lösning?"
        url="/blogg/tms-system-2026-guide-svenska-akerier"
        publishedTime="2026-04-02T00:00:00Z"
        tags={["TMS", "transporthanteringssystem", "åkeri", "ruttoptimering"]}
      />
      <article className="pt-32 pb-24 md:pt-44">
      <div className="max-w-3xl mx-auto px-6">
        <Link
          href="/blogg"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-black transition-colors mb-8"
        >
          <ArrowLeft size={14} aria-hidden="true" /> Tillbaka till bloggen
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium bg-gray-100 border border-gray-200 px-3 py-1 rounded-full">
              Guide
            </span>
            <span className="text-xs text-gray-500">11 min</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15]">
            TMS-system 2026: Komplett guide för svenska åkerier
          </h1>
          <p className="mt-6 text-lg text-gray-500 leading-relaxed">
            TMS är inte längre bara för stora koncerner. För svenska åkerier är
            rätt systemval ofta skillnaden mellan reaktiv administration och
            skalbar, datadriven trafikledning.
          </p>
        </header>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-medium text-black mb-3">Vad är ett TMS?</h2>
            <p>
              Ett <strong>Transport Management System (TMS)</strong> är en plattform
              som planerar, genomför och optimerar transporter. Vanliga moduler är
              orderhantering, ruttplanering, uppdragsfördelning, spårning,
              leveransbevis, avräkning/fakturering och rapportering.
            </p>
            <p className="mt-3">
              Marknadsanalyser för 2025 visar en global TMS-marknad i spannet
              cirka <strong>15–18,5 miljarder USD</strong>, men exakta nivåer varierar
              mellan analysfirmor beroende på definition.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-black mb-3">
              TMS i Sverige: fem system att känna till
            </h2>
            <div className="space-y-3">
              {systems.map((system) => (
                <div key={system.name} className="rounded-xl border border-gray-200 p-4">
                  <h3 className="font-medium text-black">{system.name}</h3>
                  <p className="text-sm mt-1">
                    <span className="font-medium">Passar för:</span> {system.fit}
                  </p>
                  <p className="text-sm mt-1">
                    <span className="font-medium">Styrka:</span> {system.strength}
                  </p>
                  <p className="text-sm mt-1">
                    <span className="font-medium">Svaghet:</span> {system.weakness}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-black mb-3">
              Så väljer ett svenskt åkeri rätt TMS
            </h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                <strong>Definiera ert huvudproblem:</strong> kapacitetsbrist,
                tomkörning, manuell administration eller bristande uppföljning?
              </li>
              <li>
                <strong>Matcha systemtyp med affärsmodell:</strong> åkeri med egen
                flotta, speditionsupplägg eller avsändarfokus.
              </li>
              <li>
                <strong>Kontrollera integrationer:</strong> ekonomisystem (t.ex.
                Fortnox/Visma), EDI/API och eventuella telematikflöden.
              </li>
              <li>
                <strong>Granska total kostnadsbild:</strong> licens, implementation,
                utbildning, support och eventuella tillägg (t.ex. optimeringsmotor).
              </li>
              <li>
                <strong>Kör pilot med tydliga KPI:er:</strong> planeringstid,
                leveransprecision, km per leverans och andel tomkörning.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-black mb-3">Vanliga frågor</h2>
            <div className="space-y-5">
              <div>
                <h3 className="font-medium text-black">Behöver ett litet åkeri TMS?</h3>
                <p>
                  Ja, ofta tidigare än man tror. Redan vid 15–20 dagliga ordrar
                  börjar manuell hantering skapa flaskhalsar som kostar mer än ett
                  enklare TMS. Många leverantörer erbjuder skalbar prissättning
                  anpassad för mindre flotter.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-black">Vad kostar ett TMS-system för ett svenskt åkeri?</h3>
                <p>
                  Enklare molnbaserade system börjar runt 500–1 500 kr/månad för
                  små flotter. Medelstora åkerier med 10–30 fordon bör räkna med
                  2 000–8 000 kr/månad beroende på funktioner och integrationer.
                  Större implementationer med EDI, telematik och optimeringsmotor
                  kan kosta 15 000–50 000 kr/månad eller mer. Kontakta respektive
                  leverantör för exakt offert.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-black">Vad är skillnaden mellan TMS och WMS?</h3>
                <p>
                  TMS (Transport Management System) hanterar planering och
                  genomförande av transporter. WMS (Warehouse Management System)
                  hanterar lagerprocesser som inleverans, plockning och inventering.
                  Många företag behöver båda, men de löser olika problem.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-black">Hur lång tid tar det att implementera ett TMS?</h3>
                <p>
                  Enklare molnsystem kan vara igång på 2–4 veckor. Fullständiga
                  implementationer med integrationer mot ekonomisystem, EDI och
                  telematik tar vanligtvis 2–6 månader. Räkna med utbildningstid
                  för trafikledare utöver teknisk driftsättning.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-black">Kan man integrera ett TMS med befintliga system som Fortnox eller Visma?</h3>
                <p>
                  Ja, de flesta moderna TMS-system har färdiga integrationer mot
                  svenska ekonomisystem som Fortnox och Visma. Kontrollera alltid
                  vilka integrationer som ingår i grundpaketet och vad som kostar extra.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-black mb-3">Sammanfattning</h2>
            <p>
              För svenska åkerier 2026 handlar TMS-valet om att matcha system
              mot trafikflöde — inte om att välja det största eller mest kända
              namnet.
              <br />
              <br />
              Tumregler:
              <br />
              - Liten flotta med svenska ekonomiintegrationer → Opter
              <br />
              - Medelstor flotta med telematikbehov → AddSecure FleetVision
              <br />
              - Avsändare som vill jämföra priser → Cargoson
              <br />
              - E-handel och retail med många leveranspunkter → nShift
              <br />
              - Last mile och distributionsflöden → pinDeliver
              <br />
              <br />
              Börja med en nulägesanalys av era största flaskhalsar. Mät
              planeringstid, tomkörningsprocent och leveransprecision innan
              ni väljer system — annars vet ni inte vad ni ska utvärdera mot.
            </p>
          </section>
        </div>

        <RelatedSolutions slugs={["tms-integration", "trafikledning"]} />

        <div className="mt-10 bg-gray-950 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl font-medium text-white mb-3">
            Undrar ni vad manuell planering kostar i kronor?
          </h2>
          <p className="text-gray-400 mb-6">
            Se vår steg-för-steg-kalkyl för trafikledarlön,
            arbetsgivarkostnad och kostnad per bokning.
          </p>
          <Link
            href="/blogg/vad-kostar-manuell-transportplanering"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-3.5 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
          >
            Läs kostnadsartikeln <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
    </>
  );
}
