import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import RelatedSolutions from "@/components/RelatedSolutions";

export const metadata: Metadata = {
  title:
    "Digitalisering av åkeri i siffror — så långt har svenska åkerier kommit 2026",
  description:
    "Nyckeltal, mognadsnivåer och branschjämförelse: var står svenska åkerier i digitaliseringen 2026? Benchmarka ert åkeri med konkreta KPI:er.",
  keywords: [
    "digitalisering åkeri",
    "digitalisering transport",
    "nyckeltal åkeri",
    "benchmark transport",
  ],
  alternates: { canonical: "/blogg/digitalisering-akeri-2026" },
  openGraph: {
    type: "article",
    title:
      "Digitalisering av åkeri i siffror — så långt har svenska åkerier kommit 2026",
    description:
      "Var står svenska åkerier i digitaliseringen? Nyckeltal, mognadsnivåer och branschjämförelse — så benchmarkar ni ert åkeri.",
    url: "/blogg/digitalisering-akeri-2026",
    publishedTime: "2026-04-02T00:00:00Z",
    authors: ["NOGO Media AB"],
    tags: [
      "digitalisering åkeri",
      "åkerinäringen",
      "benchmark",
      "nyckeltal transport",
      "TMS",
    ],
  },
};

const maturityLevels = [
  {
    dimension: "Orderhantering",
    manual: "Telefon, e-post, fax",
    partial: "TMS med manuell inmatning",
    datadriven: "Automatisk orderimport via API",
  },
  {
    dimension: "Planering",
    manual: "Excel, whiteboard, erfarenhet",
    partial: "TMS med kartvy, manuell tilldelning",
    datadriven: "AI-optimerad rutt- och resursplanering",
  },
  {
    dimension: "Chaufförskommunikation",
    manual: "Telefon och SMS",
    partial: "App med körorder",
    datadriven: "Realtidsuppdateringar, automatisk omplanering",
  },
  {
    dimension: "Fakturering",
    manual: "Manuell sammanställning, 5–14 dagars fördröjning",
    partial: "Delvis automatiserad, 2–5 dagar",
    datadriven: "Automatisk fakturering samma dag",
  },
  {
    dimension: "Uppföljning",
    manual: "Magkänsla, sporadiska rapporter",
    partial: "Månatliga KPI-rapporter",
    datadriven: "Realtidsdashboard, automatiska avvikelser",
  },
];

const kpis = [
  {
    name: "Planeringstid per order",
    manual: "8–15 min",
    digital: "1–3 min",
  },
  {
    name: "Dagar från leverans till faktura",
    manual: "5–14 dagar",
    digital: "0–2 dagar",
  },
  {
    name: "Andel tomkörningar",
    manual: "~20%",
    digital: "10–14%",
  },
  {
    name: "Manuella systembyten per order",
    manual: "4–7 system",
    digital: "1–2 system",
  },
  {
    name: "Avvikelsehanteringstid",
    manual: "30–60 min",
    digital: "5–10 min",
  },
];

const sectorComparison = [
  { sector: "Detaljhandel", level: "Hög", pct: "~70%" },
  { sector: "Tillverkning", level: "Medel–hög", pct: "~55%" },
  { sector: "Lager & 3PL", level: "Medel", pct: "~45%" },
  { sector: "Åkerier (stora, 50+ fordon)", level: "Medel", pct: "~40%" },
  { sector: "Åkerier (små, <20 fordon)", level: "Låg", pct: "~15%" },
];

const caseStudies = [
  {
    label: "Åkeri A",
    vehicles: "8",
    region: "Småland",
    tms: "Nej (Excel + telefon)",
    gps: "Enkel GPS",
    aiDispatch: "Nej",
    emptyRunning: "~24%",
    invoiceDays: "10–14 dagar",
    planningTime: "12 min/order",
  },
  {
    label: "Åkeri B",
    vehicles: "35",
    region: "Västra Götaland",
    tms: "Opter (delvis)",
    gps: "Ja, med historik",
    aiDispatch: "Nej",
    emptyRunning: "~18%",
    invoiceDays: "4–6 dagar",
    planningTime: "6 min/order",
  },
  {
    label: "Åkeri C",
    vehicles: "80",
    region: "Mälardalen",
    tms: "TMS + AI-dispatch",
    gps: "Realtid + geofencing",
    aiDispatch: "Ja",
    emptyRunning: "~11%",
    invoiceDays: "0–1 dagar",
    planningTime: "2 min/order",
  },
];

const faqItems = [
  {
    q: "Hur vet jag om mitt åkeri är 'digitalt nog'?",
    a: "Mät de fem nyckeltalen i artikeln: planeringstid per order, dagar till faktura, andel tomkörningar, antal systembyten per order och avvikelsehanteringstid. Om tre eller fler ligger på 'manuell' nivå har ni stor potential att effektivisera.",
  },
  {
    q: "Vilka delar av digitaliseringen ger snabbast ROI?",
    a: "Order-till-faktura-automation och minskade tomkörningar ger oftast snabbast avkastning. Ett åkeri med 20 fordon som minskar tomkörningarna med 5 procentenheter kan spara 200 000–400 000 kr per år i bränsle och tid.",
  },
  {
    q: "Måste vi byta alla system på en gång?",
    a: "Nej. Börja med att integrera det ni redan har. Ofta handlar det om att koppla ihop TMS, GPS och fakturering — inte att byta ut allt. En integration-first-strategi ger resultat utan att störa pågående verksamhet.",
  },
  {
    q: "Hur påverkar eFTI-kravet från EU mitt åkeri?",
    a: "EU:s eFTI-förordning kräver digitala fraktdokument senast 2027. Åkerier som redan har digitaliserade order- och leveransflöden är förberedda. Övriga behöver börja planera nu.",
  },
  {
    q: "Vad kostar det att INTE digitalisera?",
    a: "Den största kostnaden är ofta osynlig: förlorad tid, högre tomkörningsandel, långsammare fakturering och svårare att rekrytera trafikledare. Åkerier på manuell nivå lägger i genomsnitt 3–5 timmar mer per dag på administration jämfört med digitaliserade konkurrenter.",
  },
];

function FAQJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function DigitaliseringAkeri2026Article() {
  return (
    <>
      <ArticleJsonLd
        title="Digitalisering av åkeri i siffror — så långt har svenska åkerier kommit 2026"
        description="Nyckeltal, mognadsnivåer och branschjämförelse: var står svenska åkerier i digitaliseringen 2026?"
        url="/blogg/digitalisering-akeri-2026"
        publishedTime="2026-04-02T00:00:00Z"
        tags={["digitalisering åkeri", "åkerinäringen", "benchmark", "nyckeltal transport", "TMS"]}
      />
      <FAQJsonLd />
      <article className="pt-32 pb-24 md:pt-44">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/blogg"
            className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-black transition-colors mb-8"
          >
            <ArrowLeft size={14} /> Tillbaka till bloggen
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs bg-gray-100 border border-gray-200 px-3 py-1 rounded-full">
                Branschanalys
              </span>
              <span className="text-xs text-gray-400">10 min</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15]">
              Digitalisering av åkeri i siffror — så långt har svenska åkerier
              kommit 2026
            </h1>
            <p className="mt-6 text-lg text-gray-500 leading-relaxed">
              Alla pratar om digitalisering. Men var står svenska åkerier
              egentligen? I den här artikeln ger vi er konkreta nyckeltal,
              mognadsnivåer och branschjämförelser — så att ni kan benchmarka
              ert eget åkeri mot verkligheten.
            </p>
          </header>

          {/* Body */}
          <div className="space-y-12 text-gray-700 leading-relaxed">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-medium mb-4">
                Digitaliseringsgraden i svensk åkerinäring — en realistisk bild
              </h2>
              <p className="mb-4">
                Sverige har cirka <strong>10 000 åkeriföretag</strong>, varav
                ungefär 90% har färre än 20 fordon. Bland de stora åkerierna
                (50+ fordon) är TMS-system och GPS-spårning standard. Men bland
                de små och medelstora — som utgör majoriteten — ser
                verkligheten annorlunda ut.
              </p>
              <p className="mb-4">
                <strong>Klarspråk:</strong> De flesta svenska åkerier med 5–30
                fordon förlitar sig fortfarande på telefon, e-post och Excel för
                daglig planering. Det är ingen kritik — det är en
                branschverklighet.
              </p>

              <h3 className="text-xl font-medium mb-3 mt-8">
                Tre mognadsnivåer — var står ni?
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left px-4 py-3 font-medium border-b border-gray-200">
                        Dimension
                      </th>
                      <th className="text-left px-4 py-3 font-medium border-b border-gray-200">
                        Manuellt
                      </th>
                      <th className="text-left px-4 py-3 font-medium border-b border-gray-200">
                        Delvis digitalt
                      </th>
                      <th className="text-left px-4 py-3 font-medium border-b border-gray-200">
                        Datadrivet
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {maturityLevels.map((row, i) => (
                      <tr
                        key={row.dimension}
                        className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <td className="px-4 py-3 font-medium border-b border-gray-100">
                          {row.dimension}
                        </td>
                        <td className="px-4 py-3 border-b border-gray-100">
                          {row.manual}
                        </td>
                        <td className="px-4 py-3 border-b border-gray-100">
                          {row.partial}
                        </td>
                        <td className="px-4 py-3 border-b border-gray-100">
                          {row.datadriven}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-medium mb-4">
                Fem nyckeltal som avslöjar ert digitaliseringsläge
              </h2>
              <p className="mb-6">
                Istället för att gissa kan ni mäta. Här är fem KPI:er som visar
                var ni befinner er — och var potentialen finns.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left px-4 py-3 font-medium border-b border-gray-200">
                        Nyckeltal
                      </th>
                      <th className="text-left px-4 py-3 font-medium border-b border-gray-200">
                        Manuellt åkeri
                      </th>
                      <th className="text-left px-4 py-3 font-medium border-b border-gray-200">
                        Digitaliserat åkeri
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {kpis.map((kpi, i) => (
                      <tr
                        key={kpi.name}
                        className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <td className="px-4 py-3 font-medium border-b border-gray-100">
                          {kpi.name}
                        </td>
                        <td className="px-4 py-3 border-b border-gray-100">
                          {kpi.manual}
                        </td>
                        <td className="px-4 py-3 border-b border-gray-100 font-medium text-green-700">
                          {kpi.digital}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                <strong>Quotable fakta:</strong> Ett åkeri med 20 fordon som
                minskar planeringstiden från 12 till 3 minuter per order sparar{" "}
                <strong>~6 timmar per dag</strong> — bara på ordertilldelning.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-medium mb-4">
                Vad driver digitaliseringen 2026 — och vad bromsar
              </h2>

              <h3 className="text-xl font-medium mb-3">Tre pådrivare</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>
                  <strong>Förarbrist:</strong> Sverige saknar uppskattningsvis{" "}
                  <strong>5 000–7 000 lastbilsförare</strong> (TYA/Sveriges
                  Åkeriföretag). Automation minskar beroendet av nyanställningar
                  och frigör trafikledare.
                </li>
                <li>
                  <strong>Bränsle- och tidskostnader:</strong> Med diesel kring{" "}
                  <strong>19–21 kr/liter</strong> kostar varje onödig kilometer.
                  Optimerade rutter och minskade tomkörningar ger direkt effekt
                  på marginalen.
                </li>
                <li>
                  <strong>Kundkrav:</strong> Stora avsändare som ICA, Axfood och
                  industribolag kräver i allt högre grad digital bokning,
                  realtidsspårning och digitala fraktsedlar.
                </li>
              </ul>

              <h3 className="text-xl font-medium mb-3">Tre bromsklossar</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Investeringsosäkerhet:</strong> Med genomsnittliga
                  rörelsemarginaler på{" "}
                  <strong>2–5%</strong> i åkeribranschen
                  upplevs varje systeminvestering som en risk.
                </li>
                <li>
                  <strong>Fragmenterat systemlandskap:</strong> Många kör Opter +
                  Excel + telefon + separat GPS — inget pratar med varandra.
                </li>
                <li>
                  <strong>Kompetensbrist:</strong> Det är svårt att hitta
                  personer som förstår både transportverksamhet och digitala
                  verktyg.
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-medium mb-4">
                Branschjämförelse — åkerier vs. andra sektorer
              </h2>
              <p className="mb-6">
                Åkerinäringen ligger efter de flesta andra sektorer i
                digitaliseringsgrad. Gapet handlar inte om teknikens
                tillgänglighet — utan om adoptionstakten.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left px-4 py-3 font-medium border-b border-gray-200">
                        Sektor
                      </th>
                      <th className="text-left px-4 py-3 font-medium border-b border-gray-200">
                        Nivå
                      </th>
                      <th className="text-left px-4 py-3 font-medium border-b border-gray-200">
                        Uppskattad digitaliseringsgrad
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sectorComparison.map((row, i) => (
                      <tr
                        key={row.sector}
                        className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <td className="px-4 py-3 font-medium border-b border-gray-100">
                          {row.sector}
                        </td>
                        <td className="px-4 py-3 border-b border-gray-100">
                          {row.level}
                        </td>
                        <td className="px-4 py-3 border-b border-gray-100">
                          {row.pct}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                <strong>Klarspråk:</strong> Att vara bland de första i sin
                bransch att digitalisera är inte en risk — det är ett
                konkurrensförsprång.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-medium mb-4">
                Tre åkerier, tre digitaliseringsnivåer
              </h2>
              <p className="mb-6">
                Här är tre anonymiserade men representativa exempel som visar
                skillnaderna i praktiken.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left px-4 py-3 font-medium border-b border-gray-200" />
                      {caseStudies.map((c) => (
                        <th
                          key={c.label}
                          className="text-left px-4 py-3 font-medium border-b border-gray-200"
                        >
                          {c.label}
                          <span className="block text-xs text-gray-400 font-normal">
                            {c.vehicles} fordon, {c.region}
                          </span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {(
                      [
                        ["TMS", "tms"],
                        ["GPS-spårning", "gps"],
                        ["AI-dispatch", "aiDispatch"],
                        ["Tomkörning", "emptyRunning"],
                        ["Dagar till faktura", "invoiceDays"],
                        ["Planeringstid/order", "planningTime"],
                      ] as const
                    ).map(([label, key], i) => (
                      <tr
                        key={label}
                        className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <td className="px-4 py-3 font-medium border-b border-gray-100">
                          {label}
                        </td>
                        {caseStudies.map((c) => (
                          <td
                            key={c.label}
                            className="px-4 py-3 border-b border-gray-100"
                          >
                            {c[key]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                Åkeri C sparar uppskattningsvis{" "}
                <strong>500 000–800 000 kr per år</strong> jämfört med Åkeri A —
                i lägre bränslekostnader, snabbare fakturering och frigjord
                trafikledartid.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-medium mb-4">
                Vad händer de nästa 24 månaderna
              </h2>

              <h3 className="text-xl font-medium mb-3">
                eFTI och digitala fraktdokument
              </h3>
              <p className="mb-4">
                EU:s eFTI-förordning kräver digitala fraktdokument senast 2027.
                Åkerier som redan har digitaliserade order- och leveransflöden
                är förberedda — resten behöver börja planera nu.{" "}
                <Link
                  href="/artiklar/efti-digitala-fraktdokument-akeri"
                  className="underline"
                >
                  Läs mer om eFTI och vad det innebär för ert åkeri.
                </Link>
              </p>

              <h3 className="text-xl font-medium mb-3">
                AI som standardverktyg, inte experiment
              </h3>
              <p className="mb-4">
                AI-driven ruttoptimering och trafikledning har gått från
                pilotprojekt till produktionsverktyg. Åkerier som implementerar
                AI-automation idag ser{" "}
                <strong>23% kortare körsträckor</strong> och{" "}
                <strong>60% mindre manuellt arbete</strong> hos
                trafikledarna.{" "}
                <Link
                  href="/artiklar/ai-trafikledning-2026"
                  className="underline"
                >
                  Läs: Så kan svenska åkerier spara miljoner med AI.
                </Link>
              </p>

              <h3 className="text-xl font-medium mb-3">
                Integration som hygienfaktor
              </h3>
              <p>
                System som inte kopplas ihop via API, filimport eller
                databasanslutning blir flaskhalsar. Framtiden tillhör åkerier
                som får TMS, GPS, fakturering och AI att prata med varandra —
                oavsett leverantör.
              </p>
            </section>

            {/* Section 7: FAQ */}
            <section>
              <h2 className="text-2xl font-medium mb-6">
                Vanliga frågor om digitalisering av åkeri
              </h2>
              <div className="space-y-6">
                {faqItems.map((faq) => (
                  <div key={faq.q}>
                    <h3 className="font-medium mb-2">{faq.q}</h3>
                    <p className="text-gray-600">{faq.a}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-gray-500">
                Vill ni veta mer om hur ni kommer igång?{" "}
                <Link
                  href="/artiklar/digitalisering-akerinaring-var-borjar-man"
                  className="underline"
                >
                  Läs vår steg-för-steg-guide för digitalisering av
                  åkerinäringen.
                </Link>
              </p>
            </section>

            {/* CTA */}
            <RelatedSolutions slugs={["rapport-och-analys", "ruttoptimering"]} />

            <section className="bg-gray-950 text-white rounded-2xl p-8 md:p-12 mt-10">
              <h2 className="text-2xl md:text-3xl font-medium mb-4">
                Vill ni veta var ert åkeri står — och vad nästa steg är?
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl leading-relaxed">
                Vi hjälper er att mäta era nyckeltal och identifiera var den
                största potentialen finns. Boka ett kostnadsfritt
                strategisamtal — 30 minuter som kan spara er hundratusentals
                kronor per år.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
                >
                  Boka strategi-samtal <ArrowRight size={14} />
                </Link>
                <Link
                  href="/blogg/vad-kostar-manuell-transportplanering"
                  className="inline-flex items-center justify-center gap-2 border border-gray-700 text-gray-300 px-6 py-3 rounded-full text-sm font-medium hover:border-gray-500 hover:text-white transition-colors"
                >
                  Läs: Vad kostar manuell planering? <ArrowRight size={14} />
                </Link>
              </div>
            </section>
          </div>
        </div>
      </article>
    </>
  );
}
