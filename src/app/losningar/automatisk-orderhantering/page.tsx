import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight, Play } from "lucide-react";

const SITE_URL = "https://nogomedia.se";

export const metadata: Metadata = {
  title:
    "Automatisk orderhantering för åkerier — AI-driven ruttplanering | NOGO Media",
  description:
    "Automatiserad orderhantering för transportbolag i Sverige. Ladda upp Excel, få en komplett körplan med ekipage, fyllnad och arbetstider — utan manuellt arbete. Från order till plan på sekunder.",
  keywords: [
    "orderhantering åkeri",
    "automatisk transportplanering",
    "ruttoptimering",
    "ordertilldelning",
    "AI logistik",
    "trafikledning Sverige",
    "partigods",
    "lastplanering",
    "flakmeter",
    "ekipageplanering",
    "TMS automation",
    "godsplanering",
  ],
  alternates: { canonical: "/losningar/automatisk-orderhantering" },
  openGraph: {
    title:
      "Automatisk orderhantering för åkerier — AI-driven ruttplanering | NOGO Media",
    description:
      "Ladda upp Excel och få en komplett körplan på sekunder. AI-driven orderhantering för svenska transportbolag.",
    url: "/losningar/automatisk-orderhantering",
    type: "website",
    locale: "sv_SE",
    siteName: "NOGO Media",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NOGO Media — Automatisk orderhantering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Automatisk orderhantering för åkerier — AI-driven ruttplanering | NOGO Media",
    description:
      "Från Excel till färdig plan på sekunder med AI-driven orderhantering.",
    images: ["/og-image.png"],
  },
};

function BreadcrumbJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Lösningar",
        item: `${SITE_URL}/losningar`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Automatisk orderhantering",
        item: `${SITE_URL}/losningar/automatisk-orderhantering`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

const uploadHighlights = [
  "Tar emot standard-Excel från ert nuvarande trafikledningssystem — ingen omformatering krävs.",
  "Tolkar ordernummer, adresser, ruttkod, flakmeter, vikt, volym, pallplatser, kunddata och meddelanden automatiskt.",
  "Beräknar effektiv flakmeter via deklarerad data eller fallback från volym/vikt för robust kapacitetsplanering.",
  "Geokodar avsändare och mottagare asynkront med progress, cache och lastbilsanpassade ruttberäkningar.",
];

const automationCapabilities = [
  {
    title: "Dubblettdetektering",
    description:
      "Identiska ordrar markeras direkt med varningsflagga så att trafikledaren kan verifiera dubbletter innan planering.",
  },
  {
    title: "Prioritetsklassificering",
    description:
      "Ordrar klassas automatiskt i prioritet baserat på kundnamn, kundkod och skapare: prioritet, normal och låg prioritet.",
  },
  {
    title: "Shipment-integritet",
    description:
      "Ordrar som tillhör samma shipment hålls ihop på samma pass. Individuella flyttar blockeras för att undvika splittring.",
  },
  {
    title: "Dag-för-dag-kedjning",
    description:
      "Systemet planerar i rätt ordning mellan dagar och markerar senare dagar som inaktuella vid omplanering.",
  },
];

const optimizationSteps = [
  "Ruttgruppering i utgående och returflöden, med automatisk parning av returgods till rätt ekipage.",
  "Riktningsklustering som separerar gods med motriktade destinationer för att undvika omvägar.",
  "Constraint programming (OR-Tools CP-SAT) för packning i rätt ekipage: 7,2 / 12,0 / 19,2 flakmeter.",
  "Arbetstidskontroll per linje med nolltolerans för övertid och automatisk omlastning via terminal vid behov.",
  "Konsolidering av låg fyllnad, multitrip för korta pass och stoppordning med nearest-neighbor.",
  "Pickup-planering inom 30 km radie med deadline-kontroll och kundspecifika specialregler.",
];

const qualityControls = [
  "Hårda stopp vid regelbrott, exempelvis ej tilldelad prioritetskund eller splittrat shipment.",
  "Underlagsvarningar för shipment-konflikter och potentiella dubbletter.",
  "Planeringsvarningar för övertid, låg fyllnad och riktningsfel i pass.",
  "Full ruttkontroll per pass med stopp-typ, ETA, kapacitetsförändring och Google Maps-länk.",
];

export default function AutomatiskOrderhanteringPage() {
  return (
    <>
      <BreadcrumbJsonLd />

      <section className="pt-32 pb-12 md:pt-44 md:pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <nav className="flex items-center gap-1.5 text-sm text-gray-400 mb-6">
              <Link
                href="/losningar"
                className="hover:text-gray-600 transition-colors"
              >
                Lösningar
              </Link>
              <ChevronRight size={14} />
              <span className="text-gray-600">Automatisk orderhantering</span>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1]">
              Automatisk orderhantering —{" "}
              <span className="text-gray-400">
                från Excel till färdig plan på sekunder.
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-500 max-w-3xl leading-relaxed">
              Trafikledaren börjar dagen med hundratals orderrader i Excel.
              NOGO tolkar underlaget, geokodar adresser, klassificerar
              prioritet och bygger en komplett körplan med rätt ekipage, fyllnad
              och arbetstider — utan manuellt pussel.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                Boka strategimöte <ArrowRight size={16} />
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 border border-gray-200 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                <Play size={14} />
                Testa demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <aside className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 max-w-4xl">
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
              Snabb sammanfattning
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>Automatisk orderhantering</strong> innebär att ni laddar
              upp ert befintliga Excel-underlag och får tillbaka en färdig plan
              med pass, ekipage, stopptider och kvalitetsvarningar. Systemet
              hanterar även ofullständig data, shipment-regler, arbetstider och
              kedjning mellan planeringsdagar.
            </p>
          </aside>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-medium tracking-tight mb-5">
              Från uppladdning till strukturerad orderdata
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Plattformen läser samma filformat som ert system redan exporterar.
              Varje orderrad omvandlas automatiskt till en strukturerad profil
              med all data som krävs för planering, validering och uppföljning.
            </p>
            <ul className="space-y-3 text-sm text-gray-600">
              {uploadHighlights.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-900 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-medium mb-4">Ordervyn i gränssnittet</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              En sökbar och filtrerbar tabell ger full kontroll över underlaget.
              Statuschips visar bland annat Alla, Körbara idag, Ej upphämtade,
              Tilldelade och Ej tilldelade. Trafikledaren kan filtrera på rutt,
              söka i realtid och öppna en detaljpanel per order.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              I detaljpanelen visas rutt, full adress, kapacitetsdata,
              kundinformation, shipment, tilldelat pass samt
              avgångs-/ankomsttider. Mottagaradressen öppnas direkt i Google
              Maps med ett klick.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-medium tracking-tight mb-8">
            Intelligens före optimering
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {automationCapabilities.map((capability) => (
              <article
                key={capability.title}
                className="bg-white border border-gray-200 rounded-2xl p-6"
              >
                <h3 className="font-medium mb-2">{capability.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {capability.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-medium tracking-tight mb-4">
            Optimering i 13 steg — från order till pass
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-4xl mb-8">
            När trafikledaren klickar på Optimera kör systemet en
            flerstegspipeline för att skapa en körbar plan med maximal fyllnad
            och korrekt arbetstid. Planen innehåller även pickups, returflöden,
            konsolidering och stoppordning.
          </p>
          <div className="grid lg:grid-cols-2 gap-4">
            {optimizationSteps.map((step) => (
              <div
                key={step}
                className="border border-gray-200 rounded-xl p-5 bg-white text-sm text-gray-700"
              >
                {step}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-medium tracking-tight mb-4">
              Manuell justering med full kontroll
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              AI:n föreslår planen, men trafikledaren har alltid sista ordet.
              Ordrar kan flyttas mellan pass med direkt uppdatering av fyllnad
              och arbetstid. Shipment-regler skyddas automatiskt så att helheten
              inte bryts.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Varje ändring loggas i ångringshistorik och kan rullas tillbaka
              steg för steg. Vid godkännande visas kontrollsumma med antal pass
              och antal ordrar innan planen sparas.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <h3 className="text-xl font-medium mb-4">
              Varningar och kvalitetskontroll
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              {qualityControls.map((warning) => (
                <li key={warning} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-900 shrink-0" />
                  <span>{warning}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-medium tracking-tight mb-4">
              Flottöversikt, persistens och spårbarhet
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Flottvyn visar dragbilar, flak och släp med status, kapacitet och
              kopplingar. En bilpositionstabell ger startläge per fordon:
              slutlossningsort, ledig kapacitet, kvarvarande arbetstid och
              eventuella spetsbyten.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Planer, ordrar och manuella ändringar sparas till Supabase med
              tidsstämplad versionshistorik. Ni kan stänga webbläsaren och
              fortsätta där ni slutade, med full spårbarhet över vem som ändrade
              vad och när.
            </p>
          </div>
          <div className="bg-black text-white rounded-2xl p-8">
            <h3 className="text-2xl font-medium mb-4">Varför det spelar roll</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              Manuell planering av 200 ordrar per dag tar ofta 2–4 timmar.
              Automatiseringen reducerar det till minuter: ladda upp, optimera,
              granska varningar och godkänn.
            </p>
            <p className="text-white/80 leading-relaxed">
              I körningar med verklig data ses fyllnadsgrader över 90%, noll
              övertid och 7–13 sparade ekipage per dag jämfört med maxflottan.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-medium tracking-tight mb-4">
            Så kommer ni igång
          </h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Vi bygger AI-automation som arbetar direkt i era befintliga system.
            Ingen integration, ingen ombyggnad och inga nya arbetsflöden —
            bara resultat.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 bg-black text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Boka kostnadsfritt strategimöte (30 min) <ArrowRight size={16} />
          </Link>
          <p className="mt-5 text-xs text-gray-400">
            NOGO Media bygger autonoma AI-agenter för transport och logistik i
            Sverige.
          </p>
        </div>
      </section>
    </>
  );
}
