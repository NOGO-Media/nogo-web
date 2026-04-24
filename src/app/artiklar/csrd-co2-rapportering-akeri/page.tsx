import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import RelatedSolutions from "@/components/RelatedSolutions";

export const metadata: Metadata = {
  title: "CSRD och CO2-rapportering för åkerier 2026",
  description:
    "CSRD trädde i kraft 2024 och påverkar transportbranschen 2025–2028. Så hanterar svenska åkerier Scope 1-3, datainsamling och rapportering.",
  alternates: {
    canonical: "/artiklar/csrd-co2-rapportering-akeri",
  },
  openGraph: {
    type: "article",
    title: "CSRD och CO2-rapportering för åkerier 2026",
    description:
      "CSRD påverkar svenska åkerier från 2025-2028. Guide till Scope 1-3-utsläpp, datainsamling och hållbarhetsrapportering för transport.",
    url: "/artiklar/csrd-co2-rapportering-akeri",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "NOGO Media — CSRD och CO2-rapportering" }],
    publishedTime: "2026-04-24T00:00:00Z",
    authors: ["NOGO Media AB"],
    tags: [
      "Regelverk",
      "CSRD åkeri",
      "CO2-rapportering transport",
      "Scope 3 transport",
      "hållbarhetsrapportering åkeri",
      "ESRS transport",
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Vilka åkerier omfattas av CSRD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stora åkerier (över 250 anställda, 50 MEUR omsättning eller 25 MEUR balansomslutning, två av tre kriterier) rapporterar från räkenskapsår 2025. Noterade SME rapporterar från 2026. Mindre åkerier påverkas indirekt när stora kunder begär Scope 3-data på transporttjänster.",
      },
    },
    {
      "@type": "Question",
      name: "Vad är skillnaden mellan Scope 1, 2 och 3 för ett åkeri?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Scope 1 är direkta utsläpp från egna fordon (diesel, HVO, gas). Scope 2 är inköpt energi, främst el till depå och laddning. Scope 3 är indirekta utsläpp: underleverantörers transporter, fordon kapitalvaror, anställdas pendling. För de flesta åkerier är Scope 1 den största posten.",
      },
    },
    {
      "@type": "Question",
      name: "Hur räknar vi CO2 per transport?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bränsleförbrukning × emissionsfaktor (för diesel: ca 2,54 kg CO2 per liter). Dela sedan på last-km eller ton-km beroende på rapporteringskrav. Det mest exakta är att hämta litermängd direkt från fordonet via telematik eller tankkort och koppla mot körda kilometer per uppdrag.",
      },
    },
    {
      "@type": "Question",
      name: "Vilken data behöver vi samla in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Per fordon och uppdrag: bränsleförbrukning (liter), körda kilometer, fordonstyp, bränsletyp, vikt/volym transporterad, start- och slutpunkt. För Scope 2: elförbrukning på depån. För Scope 3: data från underleverantörer. Telematik och TMS bör kunna leverera merparten automatiskt.",
      },
    },
    {
      "@type": "Question",
      name: "Kan automation hjälpa med CSRD-rapporteringen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, markant. AI-automation kan samla telematik-, bränsle-, order- och fordonsdata kontinuerligt och beräkna emissioner per uppdrag i realtid. Det ersätter manuell excel-hantering och skapar en revisorbar dataström. NOGO kopplar detta direkt i befintligt TMS — se nogomedia.se/losningar/rapport-och-analys.",
      },
    },
    {
      "@type": "Question",
      name: "Vad händer om vi inte rapporterar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Företag som omfattas direkt riskerar böter och förlorade upphandlingar. Större risk för SME är att förlora kunder: stora avsändare (dagligvaruhandel, bygg, industri) kräver redan nu Scope 3-data från sina transportörer. Utan siffror tappar man kontrakt.",
      },
    },
  ],
};

export default function CsrdCo2RapporteringArticle() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Artiklar", path: "/blogg" },
          { name: "CSRD och CO2-rapportering", path: "/artiklar/csrd-co2-rapportering-akeri" },
        ]}
      />
      <ArticleJsonLd
        title="CSRD och CO2-rapportering för åkerier 2026"
        description="Svenska åkerier påverkas av CSRD från 2025-2028. Praktisk guide om Scope 1-3, datakrav och automatiserad rapportering."
        url="/artiklar/csrd-co2-rapportering-akeri"
        publishedTime="2026-04-24T00:00:00Z"
        tags={["CSRD åkeri", "CO2-rapportering transport", "Scope 3 transport", "ESRS"]}
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
            <ArrowLeft size={14} /> Tillbaka till bloggen
          </Link>

          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium bg-gray-100 border border-gray-200 px-3 py-1 rounded-full">
                Regelverk
              </span>
              <span className="text-xs text-gray-400">~8 min</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15]">
              CSRD och CO2-rapportering för åkerier 2026
            </h1>

            <p className="mt-6 text-lg text-gray-500 leading-relaxed">
              EU:s hållbarhetsdirektiv CSRD trädde i kraft 2024 och rullas ut i
              vågor fram till 2028. För svenska åkerier betyder det nya krav på
              att mäta och rapportera utsläpp — både för egen räkning och som
              leverantör till större kunder. Här är vad ni behöver veta för att
              komma igång.
            </p>
          </header>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <h2 className="text-xl font-medium text-black mb-3">
                Det här behöver ni veta
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Vad är CSRD?</strong> EU:s Corporate Sustainability
                  Reporting Directive. Standardiserar hur företag rapporterar
                  utsläpp och hållbarhetsdata i formatet ESRS.
                </li>
                <li>
                  <strong>Vem omfattas?</strong> Stora företag från räkenskapsår
                  2025. Noterade SME från 2026. Övriga SME från 2028 (om de
                  uppfyller kriterierna).
                </li>
                <li>
                  <strong>Vad ska mätas?</strong> Scope 1 (direkt),
                  Scope 2 (energi) och Scope 3 (värdekedja) för växthusgaser.
                </li>
                <li>
                  <strong>Indirekt effekt:</strong> SME-åkerier som inte
                  omfattas direkt får ändå krav på sig via stora kunders
                  Scope 3-rapportering.
                </li>
                <li>
                  <strong>Vad krävs i praktiken?</strong> Datainsamling per
                  fordon och uppdrag, revisorbar beräkning, granskad
                  hållbarhetsrapport.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-black mb-3">
                Vad är CSRD och ESRS?
              </h2>
              <p>
                CSRD står för <em>Corporate Sustainability Reporting
                Directive</em> och ersätter den tidigare NFRD (Non-Financial
                Reporting Directive). Direktivet trädde i kraft 2024 och
                implementeras i svensk lag via ändringar i årsredovisningslagen.
              </p>
              <p className="mt-3">
                Kärnan är att hållbarhetsrapportering ska vara lika strukturerad
                och revisorsgranskad som finansiell rapportering. Det sker
                enligt standarder kallade <strong>ESRS</strong> (European
                Sustainability Reporting Standards) — bland annat ESRS E1 som
                täcker klimatförändringar och växthusgasutsläpp.
              </p>
              <p className="mt-3">
                För transport innebär det att utsläpp ska kunna redovisas per
                fordon, per uppdrag och per tjänst — och i många fall även för
                underleverantörer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-black mb-3">
                Scope 1, 2 och 3 för ett åkeri — konkret
              </h2>
              <p>
                Utsläppen delas in i tre kategorier. För ett åkeri ser
                fördelningen oftast ut så här:
              </p>
              <div className="mt-4 space-y-4">
                <div className="rounded-xl border border-gray-200 bg-white p-5">
                  <h3 className="font-medium text-black">
                    Scope 1 — Direkta utsläpp (oftast 80–95 % av totalen)
                  </h3>
                  <p className="mt-2 text-sm">
                    Bränsle som förbränns i egna fordon: diesel, HVO100, gas
                    (CNG/LNG), bensin i servicebilar. Räknas som kg CO2e per
                    liter × förbrukning.
                  </p>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-5">
                  <h3 className="font-medium text-black">
                    Scope 2 — Inköpt energi (oftast 2–10 %)
                  </h3>
                  <p className="mt-2 text-sm">
                    El till depå, tvätthall, kontor och eventuell elladdning.
                    Kan redovisas både location-based (nationell elmix) och
                    market-based (avtalad grön el).
                  </p>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-5">
                  <h3 className="font-medium text-black">
                    Scope 3 — Värdekedjan (varierar kraftigt)
                  </h3>
                  <p className="mt-2 text-sm">
                    Underleverantörers transporter, fordon som kapitalvaror
                    (tillverkning och skrotning), anställdas pendling, inköpta
                    tjänster. För åkerier som mycket kör åt underleverantörer
                    blir Scope 3 snabbt stort.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-black mb-3">
                Så räknar ni CO2 per transport
              </h2>
              <p>
                Grundformeln är enkel:
              </p>
              <div className="my-4 rounded-xl border border-gray-200 bg-gray-50 p-5 font-mono text-sm">
                kg CO2e = liter bränsle × emissionsfaktor
              </div>
              <p>
                För fossildiesel är emissionsfaktorn cirka{" "}
                <strong>2,54 kg CO2 per liter</strong> (well-to-wheel).
                HVO100 har en betydligt lägre faktor, men den exakta siffran
                varierar med råvarukälla — använd leverantörsspecifika värden
                där det går.
              </p>
              <p className="mt-3">
                Därefter normaliseras utsläppet per transport enligt kundens
                eller standardens krav:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>
                  <strong>kg CO2 per ton-kilometer</strong> (GLEC-ramverket).
                </li>
                <li>
                  <strong>kg CO2 per uppdrag.</strong>
                </li>
                <li>
                  <strong>kg CO2 per levererad kolli.</strong>
                </li>
              </ul>
              <p className="mt-3">
                För att få kvalitetssäkrade siffror behöver ni koppla ihop
                bränsledata (från tankkort eller telematik) med körsträcka och
                lastdata per uppdrag. Det är där automationen i ett TMS blir
                avgörande.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-black mb-3">
                Data ni behöver samla in
              </h2>
              <p>
                För en revisorbar rapport räcker det inte med årlig bränslenota.
                Ni behöver datapunkter kopplade till enskilda transporter:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Bränsleförbrukning i liter per fordon och dag.</li>
                <li>Bränsletyp (diesel, HVO100, LNG, el).</li>
                <li>Körda kilometer per fordon och uppdrag.</li>
                <li>Last i ton eller m³ per uppdrag.</li>
                <li>Fordonstyp, vikt­klass och Euro-klass.</li>
                <li>Start- och slutpunkt per uppdrag (för ton-km).</li>
                <li>Elförbrukning på depå (Scope 2).</li>
                <li>Underleverantörsdata vid inköpta transporter (Scope 3).</li>
              </ul>
              <p className="mt-3">
                Modernt TMS och telematik samlar redan in merparten automatiskt.
                Utmaningen är att <em>koppla ihop</em> datan så att varje
                utsläppssiffra kan spåras bakåt till en verklig transport.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-black mb-3">
                Vanliga fallgropar
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Manuell excel-hantering.</strong> Fungerar ett år, men
                  blir ohållbart när revisorer kräver spårbarhet per transport.
                </li>
                <li>
                  <strong>Gissade emissionsfaktorer.</strong> Generiska
                  branschsnitt accepteras inte längre av stora kunder som har
                  egna Scope 3-mål.
                </li>
                <li>
                  <strong>Ignorera underleverantörer.</strong> Om 30 % av era
                  uppdrag körs av inhyrda bilar är deras utsläpp er Scope 3 —
                  och måste in i rapporten.
                </li>
                <li>
                  <strong>Separat hållbarhetssystem.</strong> Dubbelarbete och
                  datakonflikter uppstår. Bättre att bygga ovanpå befintligt
                  TMS-dataflöde.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-black mb-3">
                Automation gör rapporteringen hanterbar
              </h2>
              <p>
                För åkerier med 10–150 fordon är manuell CSRD-rapportering en
                dränering av administrativ kapacitet. Automation kan:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>
                  Samla bränsledata direkt från tankkort och telematik varje
                  dygn.
                </li>
                <li>
                  Matcha förbrukning mot körda kilometer och utfört uppdrag.
                </li>
                <li>
                  Beräkna kg CO2 per uppdrag, fordon och kund i realtid.
                </li>
                <li>
                  Generera rapporter i ESRS-format eller skicka Scope 3-data
                  direkt till kund.
                </li>
                <li>
                  Larma vid avvikelser (ovanligt hög förbrukning, datahål).
                </li>
              </ul>
              <p className="mt-3">
                Det är också så stora avsändare börjar kräva att data levereras
                — automatiserat, granskningsbart och realtidsnära. Åkerier som
                har det i sitt system vinner kontrakt.
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

            <section className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <h2 className="text-xl font-medium text-black mb-3">
                Nästa steg för ert åkeri
              </h2>
              <p>
                Oavsett om ni omfattas direkt eller via era kunder är CSRD en
                fråga om datadisciplin. Det börjar med att koppla ihop bränsle-,
                fordon- och orderdata — och det är precis den typ av arbete
                NOGO bygger automation för. Vill ni se hur era data kan se ut i
                ett rapport- och analysflöde, börja här:
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/losningar/rapport-och-analys"
                  className="inline-flex items-center gap-1.5 text-sm font-medium bg-black text-white px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors"
                >
                  Rapport &amp; analys <ArrowRight size={14} />
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

          <RelatedSolutions slugs={["rapport-och-analys", "trafikledning", "tms-integration"]} />
        </div>
      </article>
    </>
  );
}
