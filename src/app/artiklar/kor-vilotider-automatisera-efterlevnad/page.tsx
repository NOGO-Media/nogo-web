import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import RelatedSolutions from "@/components/RelatedSolutions";

export const metadata: Metadata = {
  title: "Kör- och vilotider — automation i TMS",
  description:
    "Så håller svenska åkerier ordning på EU:s kör- och vilotider med TMS-automation. Färdskrivare, planering och rapportering utan manuell hantering.",
  alternates: {
    canonical: "/artiklar/kor-vilotider-automatisera-efterlevnad",
  },
  openGraph: {
    type: "article",
    title: "Kör- och vilotider — automation i TMS",
    description:
      "Så håller svenska åkerier ordning på EU:s kör- och vilotider med automatiserade regler i TMS och integrerad färdskrivardata.",
    url: "/artiklar/kor-vilotider-automatisera-efterlevnad",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "NOGO Media — Kör- och vilotider" }],
    publishedTime: "2026-04-24T00:00:00Z",
    authors: ["NOGO Media AB"],
    tags: [
      "Regelverk",
      "kör- och vilotider",
      "färdskrivare åkeri",
      "EU transportregler",
      "TMS automation",
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Hur många timmar får en lastbilsförare köra per dag i EU?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Högst 9 timmar per dag, med möjlighet att förlänga till 10 timmar två gånger per vecka. Körtiden per vecka får inte överstiga 56 timmar, och totalt 90 timmar på två på varandra följande veckor.",
      },
    },
    {
      "@type": "Question",
      name: "När måste en förare ta rast?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Efter 4 timmar och 30 minuters körning krävs rast på minst 45 minuter. Rasten kan delas i två delar: först minst 15 minuter, därefter minst 30 minuter.",
      },
    },
    {
      "@type": "Question",
      name: "Vad är skillnaden mellan dygnsvila och veckovila?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dygnsvila är minst 11 timmar per 24-timmarsperiod, kan förkortas till 9 timmar tre gånger per vecka. Veckovila är minst 45 timmar sammanhängande och kan inte kortas utan kompensation. Dessutom krävs en reducerad veckovila (24 timmar) kan växla med en normal veckovila.",
      },
    },
    {
      "@type": "Question",
      name: "Vilka böter riskerar man vid överträdelse?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I Sverige varierar sanktionsavgiften mellan ca 1 000 och 40 000 kr per överträdelse beroende på allvar. Vid grova eller systematiska överträdelser kan företag förlora trafiktillstånd (yrkestrafiktillstånd) enligt yrkestrafiklagen.",
      },
    },
    {
      "@type": "Question",
      name: "Hur kan TMS-system automatisera efterlevnaden?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Modernt TMS hämtar färdskrivardata via tachograph-filer eller API och beräknar tillgänglig körtid per förare i realtid. Systemet blockerar uppdrag som skulle leda till överträdelse, larmar vid risk och genererar automatiskt rapporter till Transportstyrelsen.",
      },
    },
    {
      "@type": "Question",
      name: "Gäller kör- och vilotider också för lätta lastbilar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Från 1 juli 2026 gäller EU:s regler även för lätta lastbilar över 2,5 ton i internationell trafik. Det är en utvidgning från tidigare regler som bara omfattade fordon över 3,5 ton. Många åkerier med transportbil- och budflotta påverkas först nu.",
      },
    },
  ],
};

export default function KorVilotiderArticle() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Artiklar", path: "/blogg" },
          { name: "Kör- och vilotider automatisera", path: "/artiklar/kor-vilotider-automatisera-efterlevnad" },
        ]}
      />
      <ArticleJsonLd
        title="Kör- och vilotider — automatiserad efterlevnad i TMS"
        description="Så håller svenska åkerier ordning på EU:s kör- och vilotider med automation i TMS."
        url="/artiklar/kor-vilotider-automatisera-efterlevnad"
        publishedTime="2026-04-24T00:00:00Z"
        tags={["kör- och vilotider", "färdskrivare åkeri", "EU transportregler"]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
                Regelverk
              </span>
              <span className="text-xs text-gray-400">~7 min</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15]">
              Kör- och vilotider — automatiserad efterlevnad i TMS
            </h1>

            <p className="mt-6 text-lg text-gray-500 leading-relaxed">
              Ett åkeri med 30 fordon har tusentals kör- och rastperioder per
              vecka att hålla reda på. Manuell övervakning är både
              tidskrävande och felkänslig — och en missad rast kan kosta upp
              till 40 000 kr i sanktionsavgift. Så här automatiseras
              efterlevnaden i ett modernt TMS.
            </p>
          </header>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <h2 className="text-xl font-medium text-black mb-3">
                Det här behöver ni veta
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>EU-förordning 561/2006</strong> reglerar kör- och
                  vilotider, med revideringar 2020 och 2024.
                </li>
                <li>
                  <strong>Färdskrivare (tachograph)</strong> är obligatorisk —
                  smart tachograph version 2 sedan augusti 2023 för nya fordon.
                </li>
                <li>
                  <strong>1 juli 2026</strong> utvidgas reglerna till lätta
                  lastbilar 2,5–3,5 ton i internationell trafik.
                </li>
                <li>
                  <strong>Automation i TMS</strong> kan larma innan
                  överträdelse sker och blockera omöjlig planering.
                </li>
                <li>
                  <strong>Sanktionsavgifter</strong> i Sverige: 1 000–40 000 kr
                  per överträdelse. Grova fall kan leda till förlorat
                  trafiktillstånd.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-black mb-3">
                Grunderna: körtid, rast och vila
              </h2>
              <p>
                EU-förordning 561/2006 sätter ramarna. De viktigaste
                gränsvärdena för lastbilsförare är:
              </p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left p-3 border border-gray-200 font-medium">Regel</th>
                      <th className="text-left p-3 border border-gray-200 font-medium">Gränsvärde</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border border-gray-200">Körtid per dag</td>
                      <td className="p-3 border border-gray-200">9 h (10 h två ggr/vecka)</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-gray-200">Körtid per vecka</td>
                      <td className="p-3 border border-gray-200">Max 56 h</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-gray-200">Körtid per 14 dagar</td>
                      <td className="p-3 border border-gray-200">Max 90 h</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-gray-200">Rast efter körning</td>
                      <td className="p-3 border border-gray-200">45 min efter 4,5 h körning</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-gray-200">Dygnsvila (normal)</td>
                      <td className="p-3 border border-gray-200">Minst 11 h</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-gray-200">Dygnsvila (reducerad)</td>
                      <td className="p-3 border border-gray-200">9 h, max 3 ggr/vecka</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-gray-200">Veckovila (normal)</td>
                      <td className="p-3 border border-gray-200">Minst 45 h</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-gray-200">Veckovila (reducerad)</td>
                      <td className="p-3 border border-gray-200">24 h, max varannan vecka</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                Reglerna gäller förare av fordon över 3,5 ton. Från 1 juli 2026
                utvidgas de till fordon över 2,5 ton i internationell trafik.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-black mb-3">
                Manuell hantering — varför det inte skalar
              </h2>
              <p>
                De flesta åkerier börjar med excel och manuell avläsning av
                färdskrivarkort. För 3–5 fordon fungerar det. För 20+ fordon
                blir det en tidstjuv och riskfaktor:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>
                  Föraren glömmer logga paus korrekt, trafikledaren upptäcker
                  det först vid lönekörning.
                </li>
                <li>
                  Planerare måste manuellt räkna ihop ackumulerad körtid innan
                  ett uppdrag tilldelas.
                </li>
                <li>
                  Överträdelser upptäcks först vid månatlig sammanställning —
                  för sent för att åtgärda.
                </li>
                <li>
                  Transportstyrelsen kan begära data från specifika perioder
                  — svårt att få fram snabbt ur spridda system.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-black mb-3">
                Så ser automatiserad efterlevnad ut
              </h2>
              <p>
                Ett TMS som är kopplat till färdskrivardata kan göra följande i
                realtid:
              </p>
              <div className="mt-4 space-y-4">
                <div className="rounded-xl border border-gray-200 bg-white p-5">
                  <h3 className="font-medium text-black">1. Hämta färdskrivardata automatiskt</h3>
                  <p className="mt-2 text-sm">
                    DDD-filer (kort- och fordonsdata) hämtas via telematik eller
                    fjärrnedladdning. Data är tillgänglig inom minuter från
                    körningens slut.
                  </p>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-5">
                  <h3 className="font-medium text-black">2. Beräkna tillgänglig körtid per förare</h3>
                  <p className="mt-2 text-sm">
                    Systemet visar hur mycket körtid föraren har kvar idag,
                    denna vecka och dubbelvecka. Planering sker mot faktisk
                    tillgänglighet, inte uppskattning.
                  </p>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-5">
                  <h3 className="font-medium text-black">3. Blockera omöjlig tilldelning</h3>
                  <p className="mt-2 text-sm">
                    När trafikledaren försöker lägga ett uppdrag som skulle leda
                    till överträdelse får de en varning eller hård blockering
                    — beroende på policy.
                  </p>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-5">
                  <h3 className="font-medium text-black">4. Larma proaktivt</h3>
                  <p className="mt-2 text-sm">
                    Om en förare närmar sig rastkravet pushar systemet meddelande
                    till förare och trafikledare. Problemet åtgärdas innan det
                    blir en överträdelse.
                  </p>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-5">
                  <h3 className="font-medium text-black">5. Generera rapporter</h3>
                  <p className="mt-2 text-sm">
                    Månadsrapporter till Transportstyrelsen,
                    arkiveringsrapporter (36 månader enligt EU-regler) och
                    interna uppföljningar skapas med ett klick.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-black mb-3">
                Vad krävs tekniskt?
              </h2>
              <p>
                Det finns tre vanliga sätt att få in färdskrivardata i TMS:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>
                  <strong>Fjärrnedladdning via företagskort.</strong> Kräver
                  smart tachograph och en fjärrnedladdningsenhet installerad.
                </li>
                <li>
                  <strong>Telematik-integration.</strong> Trucktillverkarens
                  system (Scania, Volvo Connect, DAF Connect, Renault
                  Optifleet) levererar data via API.
                </li>
                <li>
                  <strong>Manuell uppladdning.</strong> DDD-filer laddas upp
                  månadsvis — fungerar som backup men ger ingen realtidskontroll.
                </li>
              </ul>
              <p className="mt-3">
                För ett åkeri som vill automatisera är telematik-integration
                oftast den smidigaste vägen. De flesta moderna fordon har redan
                den tekniska kapaciteten; det handlar om att aktivera API:t
                och koppla det till TMS.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-black mb-3">
                Nya regler 2026 — lätta lastbilar
              </h2>
              <p>
                Från 1 juli 2026 omfattar EU:s kör- och vilotidsregler även
                lätta lastbilar 2,5–3,5 ton i internationell trafik. Det är en
                stor förändring för:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Budbilsverksamheter som kör över nationsgräns.</li>
                <li>E-handelslogistik med lättare fordon.</li>
                <li>Expresstransport och jouruppdrag i Norden/Baltikum.</li>
              </ul>
              <p className="mt-3">
                För åkerier med blandad flotta (tunga + lätta) blir det extra
                viktigt att systemet kan hantera båda regelsetten parallellt
                utan manuell styrning.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-black mb-3">
                Vanliga frågor
              </h2>
              <div className="space-y-5">
                {faqSchema.mainEntity.map((item, i) => (
                  <div key={i} className="rounded-xl border border-gray-200 bg-white p-5">
                    <h3 className="font-medium text-black">{item.name}</h3>
                    <p className="mt-2 text-sm">{item.acceptedAnswer.text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-black mb-3">
                Relaterade regler
              </h2>
              <p>
                Kör- och vilotider samspelar med andra regelkrav som åkerier
                behöver hantera:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>
                  <Link className="underline" href="/artiklar/efti-digitala-fraktdokument-akeri">
                    eFTI och digitala fraktdokument (2027)
                  </Link>{" "}
                  — datadelning med myndigheter.
                </li>
                <li>
                  <Link className="underline" href="/artiklar/csrd-co2-rapportering-akeri">
                    CSRD och CO2-rapportering
                  </Link>{" "}
                  — hållbarhetsrapportering per fordon och uppdrag.
                </li>
                <li>
                  <Link className="underline" href="/artiklar/trafikledarbrist-sverige-teknik-avlastar">
                    Trafikledarbrist — hur teknik avlastar
                  </Link>{" "}
                  — automation som ersätter manuell kontroll.
                </li>
              </ul>
            </section>

            <section className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <h2 className="text-xl font-medium text-black mb-3">
                Så får ni efterlevnad utan manuell hantering
              </h2>
              <p>
                NOGO bygger automation som sömlöst kopplar ihop färdskrivardata
                och körorderläggning i ert befintliga TMS — ingen systemmigration
                krävs. Er trafikledning får en realtidsbild av regelutrymmet
                för varje förare, och systemet stoppar omöjliga uppdrag innan
                de blir sanktionsavgifter.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/losningar/trafikledning"
                  className="inline-flex items-center gap-1.5 text-sm font-medium bg-black text-white px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors"
                >
                  Automatiserad trafikledning <ArrowRight size={14} />
                </Link>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-1.5 text-sm font-medium border border-gray-200 px-5 py-2.5 rounded-full hover:bg-white transition-colors"
                >
                  Boka strategisamtal
                </Link>
              </div>
            </section>
          </div>

          <RelatedSolutions slugs={["trafikledning", "tms-integration", "rapport-och-analys"]} />
        </div>
      </article>
    </>
  );
}
