import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "TMS-system 2026: Komplett guide för svenska åkerier",
  description:
    "Vad är ett TMS-system, vilka alternativ finns i Sverige och hur väljer åkerier rätt lösning? Jämförelse av Opter, AddSecure, Cargoson, nShift och pinDeliver.",
  alternates: { canonical: "/blogg/tms-system-2026-guide-svenska-akerier" },
  openGraph: {
    type: "article",
    title: "TMS-system 2026: Komplett guide för svenska åkerier",
    description:
      "Neutral TMS-guide för svenska åkerier: funktioner, målgrupper, prissättning och valkriterier.",
    url: "/blogg/tms-system-2026-guide-svenska-akerier",
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
  },
  {
    name: "AddSecure FleetVision",
    fit: "Medelstora till stora fordonsflottor",
    strength: "Kombinerar TMS med telematik, färdskrivardata och compliance",
  },
  {
    name: "Cargoson",
    fit: "Avsändare och transportköpare",
    strength: "Transparent prisbild och brett transportörsnätverk",
  },
  {
    name: "nShift",
    fit: "E-handel och retail",
    strength: "Mycket starkt TA-ekosystem och stor transportörstäckning",
  },
  {
    name: "pinDeliver",
    fit: "Last mile och distributionsflöden",
    strength: "AI-driven ruttoptimering och kundavisering i realtid",
  },
];

export default function TMSGuideArticle() {
  return (
    <>
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
          className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-black transition-colors mb-8"
        >
          <ArrowLeft size={14} /> Tillbaka till bloggen
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium bg-gray-100 border border-gray-200 px-3 py-1 rounded-full">
              Guide
            </span>
            <span className="text-xs text-gray-400">11 min</span>
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
                  <p className="font-medium text-black">{system.name}</p>
                  <p className="text-sm mt-1">
                    <span className="font-medium">Passar för:</span> {system.fit}
                  </p>
                  <p className="text-sm mt-1">
                    <span className="font-medium">Styrka:</span> {system.strength}
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
                  Ja, ofta tidigare än man tror. Redan vid återkommande manuella
                  flaskhalsar i orderflödet kan ett enklare TMS ge tydlig effekt.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-black">Vad kostar ett TMS-system?</h3>
                <p>
                  Pris varierar kraftigt beroende på funktioner och volym.
                  Vissa leverantörer har offentlig prislista, andra offertbaserad
                  modell.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-black">Vad är skillnaden mellan TMS och WMS?</h3>
                <p>
                  TMS fokuserar på transportplanering och utförande, medan WMS
                  fokuserar på lagerprocesser.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-black mb-3">Sammanfattning</h2>
            <p>
              För svenska åkerier 2026 handlar TMS-valet mindre om &quot;vilket system
              är störst&quot; och mer om <strong>vilket system som passar ert trafikflöde</strong>.
              Börja med en tydlig nulägesanalys, mät före/efter och välj leverantör
              utifrån verkliga driftbehov.
            </p>
          </section>
        </div>

        <div className="mt-16 bg-gray-950 rounded-2xl p-8 md:p-12 text-center">
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
            Läs kostnadsartikeln <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
    </>
  );
}
