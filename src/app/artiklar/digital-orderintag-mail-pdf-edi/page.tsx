import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import RelatedSolutions from "@/components/RelatedSolutions";

export const metadata: Metadata = {
  title: "Digital orderintag — mail, PDF och EDI",
  description:
    "Så automatiserar svenska åkerier orderintag från mail, PDF, Excel och EDI till TMS. Konkret flöde och realistiska träffsäkerhetsnivåer 2026.",
  alternates: {
    canonical: "/artiklar/digital-orderintag-mail-pdf-edi",
  },
  openGraph: {
    type: "article",
    title: "Digital orderintag — mail, PDF och EDI",
    description:
      "Så ersätter svenska åkerier manuell ordermatning med automation som läser mail, PDF, Excel och EDI.",
    url: "/artiklar/digital-orderintag-mail-pdf-edi",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "NOGO Media — Digital orderintag" }],
    publishedTime: "2026-04-24T00:00:00Z",
    authors: ["NOGO Media AB"],
    tags: [
      "Operations",
      "digital orderintag",
      "automatisk orderhantering",
      "EDI åkeri",
      "PDF-extraktion transport",
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Vilka orderformat kan automation hantera idag?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I praktiken alla: strukturerad EDI (EDIFACT, XML, JSON), semi-strukturerade PDF-fraktsedlar, Excel-filer från kund, mail-text med inbäddad information, och skannade dokument via OCR. Varje format har sin felprofil — EDI är nära 100 % träff, mail-text ligger oftast på 92-97 % beroende på kundvariation.",
      },
    },
    {
      "@type": "Question",
      name: "Hur tolkas ostrukturerad ordertext?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Språkmodell (LLM) extraherar fälten — avsändare, mottagare, datum, vikt, referensnummer, special­krav. Regelsystem validerar sedan mot kundavtal och TMS-master­data. Om något ser fel ut (t.ex. nytt kundformat) flaggas ordern för manuell granskning istället för att gå igenom fel.",
      },
    },
    {
      "@type": "Question",
      name: "Vad händer om AI:n tolkar fel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bra implementationer har tre spärrar: (1) konfidensnivå under tröskelvärdet skickar ordern till granskning, (2) regelvalidering mot kund­avtal fångar uppenbara fel innan TMS tar emot, (3) första dagarna efter go-live är 100 % manuell granskning tills felprofilen kartlagts. Ingen automation ska gå skarp utan shadow-läge först.",
      },
    },
    {
      "@type": "Question",
      name: "Hur lång tid tar det att sätta upp?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "För en enskild kund med standard-PDF: 1-2 dagar till första träff. För en automation som täcker de 5-10 största kunderna: 2-4 veckor i typisk pilot. Komplexitet ligger mindre i tekniken och mer i att kartlägga kunder­nas varianter och undantag.",
      },
    },
    {
      "@type": "Question",
      name: "Behöver vi byta TMS för att göra detta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nej. Automationen kopplar till ert befintliga TMS (Opter, AddSecure, Hogia, Barkfors m.fl.) via API om sådant finns, eller via databaskoppling, filimport eller skärmautomation när API saknas. Ordern landar i TMS precis som om trafikledaren matade in den manuellt.",
      },
    },
    {
      "@type": "Question",
      name: "Vad sparar vi tidsmässigt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Genomsnittlig manuell ordermatning tar 6-12 minuter inklusive kontroll. Automation gör samma sak på 30-90 sekunder. Trafikledare går från att mata order till att granska undantag — 2-3 timmar sparad tid per dag är typiskt för medelstora åkerier.",
      },
    },
  ],
};

export default function DigitalOrderintagArticle() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Artiklar", path: "/blogg" },
          { name: "Digital orderintag", path: "/artiklar/digital-orderintag-mail-pdf-edi" },
        ]}
      />
      <ArticleJsonLd
        title="Digital orderintag — från mail, PDF och EDI till TMS"
        description="Så automatiserar svenska åkerier orderintag från mail, PDF, Excel och EDI."
        url="/artiklar/digital-orderintag-mail-pdf-edi"
        publishedTime="2026-04-24T00:00:00Z"
        tags={["digital orderintag", "automatisk orderhantering", "EDI åkeri"]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
                Operations
              </span>
              <span className="text-xs text-gray-400">~7 min</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15]">
              Digital orderintag — från mail, PDF och EDI till TMS
            </h1>

            <p className="mt-6 text-lg text-gray-500 leading-relaxed">
              Trafikledare lägger ofta 2–3 timmar per dag på att skriva in
              order manuellt — från mail, PDF-fraktsedlar, Excel och enstaka
              EDI-flöden. Den tiden går att automatisera utan att byta TMS.
              Så här ser flödet ut, och vilka fallgropar som är värda att
              undvika.
            </p>
          </header>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <h2 className="text-xl font-medium text-black mb-3">
                Snabbsammanfattning
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Manuell tid:</strong> 6–12 min per order inklusive
                  kontroll.
                </li>
                <li>
                  <strong>Automatiserad tid:</strong> 30–90 sekunder per order.
                </li>
                <li>
                  <strong>Träffsäkerhet:</strong> 92–97 % för mail/PDF,
                  99 %+ för ren EDI.
                </li>
                <li>
                  <strong>Tid till pilot:</strong> 1-2 dagar för första
                  kund­format, 2-4 veckor för täckning av top-10.
                </li>
                <li>
                  <strong>Typisk besparing:</strong> 2-3 timmar trafikledar­tid
                  per dag för medelstort åkeri.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-black mb-3">
                Varför manuell ordermatning är dyrare än man tror
              </h2>
              <p>
                Räkna på ett åkeri med 80 ordrar per dag:
              </p>
              <div className="mt-4 rounded-xl border border-gray-200 bg-white p-5">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span>Snittid per order (manuellt)</span>
                    <strong>8 min</strong>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span>Total tid per dag</span>
                    <strong>~11 timmar</strong>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span>Trafikledar­tid (av detta)</span>
                    <strong>~8 timmar</strong>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span>Kostnad per dag (600 kr/h full kostnad)</span>
                    <strong>~4 800 kr</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Per år (220 arbetsdagar)</span>
                    <strong>~1 056 000 kr</strong>
                  </div>
                </div>
              </div>
              <p className="mt-4">
                Siffrorna är illustrativa. Se också{" "}
                <Link className="underline" href="/blogg/vad-kostar-manuell-transportplanering">
                  Vad kostar manuell transportplanering?
                </Link>{" "}
                för en djupare kalkyl.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-black mb-3">
                Flödet — från inkommande mail till TMS
              </h2>
              <p>
                Typisk arkitektur för ett åkeri som automatiserar orderintag:
              </p>
              <div className="mt-4 space-y-4">
                <div className="rounded-xl border border-gray-200 bg-white p-5">
                  <h3 className="font-medium text-black">
                    1. Inkassering av ordrar
                  </h3>
                  <p className="mt-2 text-sm">
                    Dedikerad mejlbrevlåda (order@...) lyssnar på kundmail. EDI
                    och API-ordrar kommer direkt till integrationspunkt.
                    Attachments (PDF, Excel) lagras med ordern.
                  </p>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-5">
                  <h3 className="font-medium text-black">
                    2. Formatklassificering
                  </h3>
                  <p className="mt-2 text-sm">
                    Systemet avgör vilken typ: ren text, PDF-fraktsedel,
                    Excel-fil, EDI-meddelande, reklamation. Varje typ går till
                    rätt parsningslogik.
                  </p>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-5">
                  <h3 className="font-medium text-black">
                    3. Extraktion av fält
                  </h3>
                  <p className="mt-2 text-sm">
                    LLM och/eller regex plockar ut avsändare, mottagare, vikt,
                    volym, upphämtnings­datum, leveransdatum, referenser,
                    special­krav. Konfidensnivå per fält sparas.
                  </p>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-5">
                  <h3 className="font-medium text-black">
                    4. Validering mot kundavtal
                  </h3>
                  <p className="mt-2 text-sm">
                    Regelsystem kontrollerar att orderdata matchar kundavtal
                    (prisklass, korrekt mottagare, giltigt ordernummer,
                    tillåten ruttyp). Okända avsändare pausas.
                  </p>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-5">
                  <h3 className="font-medium text-black">
                    5. Berikning med TMS-master­data
                  </h3>
                  <p className="mt-2 text-sm">
                    Kund-ID, geokodning av adresser, default­värden per kund,
                    kopplingar till befintliga kontrakt — allt från TMS.
                    Säkerställer att orderdata är på samma format som en
                    trafikledare skulle lägga in den.
                  </p>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-5">
                  <h3 className="font-medium text-black">
                    6. Skapande i TMS
                  </h3>
                  <p className="mt-2 text-sm">
                    Via API om det finns (Opter Plus, AddSecure, Hogia).
                    Annars databasskrivning, filimport eller skärmautomation
                    (RPA) — beroende på system. Ordern syns i TMS på samma
                    ställe som en manuellt inlagd.
                  </p>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-5">
                  <h3 className="font-medium text-black">
                    7. Bekräftelse till kund
                  </h3>
                  <p className="mt-2 text-sm">
                    Auto-bekräftelse mailas till kund med ordernummer inom
                    sekunder. Inkluderar referens som kund kan använda i senare
                    kontakt.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-black mb-3">
                Vanliga fallgropar
              </h2>
              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  <strong>Skarp från dag 1.</strong> Automation behöver
                  shadow-läge först (parallell manuell kontroll) för att
                  felprofilen ska mappa verkligheten. 1-2 veckor räcker oftast.
                </li>
                <li>
                  <strong>Samma regler för alla kunder.</strong> Kunder har
                  egna dialekter — &quot;JIT&quot; betyder olika sak i olika
                  avtal. Regelverket måste vara per kund, inte per bransch.
                </li>
                <li>
                  <strong>Ignorera undantag.</strong> 90 % av ordrarna är
                  standardordrar. De återstående 10 % är de som skapar mest
                  tidsvinst — och de är också svårast. Börja med standarder,
                  bygg ut successivt.
                </li>
                <li>
                  <strong>Ingen feedback-loop.</strong> När trafikledare
                  korrigerar automationens tolkning ska systemet lära sig.
                  Utan det stagnerar träffsäkerheten.
                </li>
                <li>
                  <strong>Parallellt system.</strong> Automationen får inte
                  skapa en sidoinstans av ordern. Bara ETT ställe i TMS där
                  sanningen bor, oavsett hur ordern kom in.
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-black mb-3">
                Realistisk träffsäkerhet per format
              </h2>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left p-3 border border-gray-200 font-medium">Format</th>
                      <th className="text-left p-3 border border-gray-200 font-medium">Träffsäkerhet</th>
                      <th className="text-left p-3 border border-gray-200 font-medium">Kommentar</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border border-gray-200">EDI (EDIFACT/XML)</td>
                      <td className="p-3 border border-gray-200">99 %+</td>
                      <td className="p-3 border border-gray-200">Strukturerat från start</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-gray-200">Excel (fast mall)</td>
                      <td className="p-3 border border-gray-200">98-99 %</td>
                      <td className="p-3 border border-gray-200">Om kolumnerna är stabila</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-gray-200">PDF-fraktsedel (kundmall)</td>
                      <td className="p-3 border border-gray-200">95-98 %</td>
                      <td className="p-3 border border-gray-200">Lite lägre på inskannade</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-gray-200">Mail-text (kontraktskund)</td>
                      <td className="p-3 border border-gray-200">92-96 %</td>
                      <td className="p-3 border border-gray-200">LLM + regler</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-gray-200">Spot-mail (okänd kund)</td>
                      <td className="p-3 border border-gray-200">80-90 %</td>
                      <td className="p-3 border border-gray-200">Kräver granskning</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-gray-200">OCR av skannat papper</td>
                      <td className="p-3 border border-gray-200">85-92 %</td>
                      <td className="p-3 border border-gray-200">Beroende av kvalitet</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4">
                Viktigt: &quot;träffsäkerhet&quot; betyder att alla fält i
                ordern extraheras korrekt. En order med 8 fält där 7 är rätt
                räknas som fel — den behöver granskning för att inte skapa
                felleverans.
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
                Relaterad läsning
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <Link className="underline" href="/artiklar/ai-agenter-for-transport-2026">
                    AI-agenter för transport 2026 — vad de kan och inte kan
                  </Link>
                  .
                </li>
                <li>
                  <Link className="underline" href="/artiklar/efti-digitala-fraktdokument-akeri">
                    eFTI och digitala fraktdokument — är ditt åkeri redo?
                  </Link>
                  .
                </li>
                <li>
                  <Link className="underline" href="/artiklar/ai-trafikledning-2026">
                    AI Trafikledning 2026 — så kan svenska åkerier spara
                    miljoner
                  </Link>
                  .
                </li>
              </ul>
            </section>

            <section className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <h2 className="text-xl font-medium text-black mb-3">
                Vill ni se ett pilotflöde för ert orderintag?
              </h2>
              <p>
                Vi plockar 1-2 av era kundformat, bygger automation runt dem
                och låter piloten köra parallellt med nuvarande hantering i
                två veckor. Efter det har ni en konkret ROI-siffra för just er
                setup.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/losningar/automatisk-orderhantering"
                  className="inline-flex items-center gap-1.5 text-sm font-medium bg-black text-white px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors"
                >
                  Automatisk orderhantering <ArrowRight size={14} aria-hidden="true" />
                </Link>
                <Link
                  href="/sa-jobbar-vi"
                  className="inline-flex items-center gap-1.5 text-sm font-medium border border-gray-200 px-5 py-2.5 rounded-full hover:bg-white transition-colors"
                >
                  Så jobbar vi
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

          <RelatedSolutions slugs={["automatisk-orderhantering", "tms-integration", "trafikledning"]} />
        </div>
      </article>
    </>
  );
}
