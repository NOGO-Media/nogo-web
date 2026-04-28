import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import RelatedSolutions from "@/components/RelatedSolutions";

const TITLE = "Ruttoptimering mjukvara Sverige — jämförelse 2026";
const DESCRIPTION =
  "Neutral jämförelse av ruttoptimerings-mjukvara på den svenska marknaden 2026: Opter, AddSecure, Zoopit, Vertigis, Webfleet och AI-baserade alternativ. Styrkor, svagheter och vilket passar er.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/artiklar/ruttoptimering-mjukvara-sverige-jamforelse-2026",
  },
  openGraph: {
    type: "article",
    title: TITLE,
    description:
      "Jämförelse av ruttoptimering-mjukvara i Sverige 2026 — Opter, AddSecure, Zoopit, Vertigis, Webfleet, NOGO AI.",
    url: "/artiklar/ruttoptimering-mjukvara-sverige-jamforelse-2026",
    images: [
      {
        url: `/api/og?title=${encodeURIComponent(TITLE)}&kind=artikel`,
        width: 1200,
        height: 630,
        alt: "Ruttoptimering mjukvara Sverige — jämförelse 2026",
      },
    ],
    publishedTime: "2026-04-28T00:00:00Z",
    authors: ["NOGO Media AB"],
    tags: [
      "ruttoptimering Sverige",
      "ruttoptimering mjukvara",
      "Opter ruttoptimering",
      "AddSecure ruttoptimering",
      "Zoopit Sverige",
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Vilken är bästa ruttoptimerings-mjukvaran i Sverige 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Det beror på er utgångsläge. Har ni redan ett TMS som Opter eller AddSecure och vill ha bättre optimering: lägg AI-driven ruttoptimering ovanpå det istället för att byta system. Behöver ni helhetslösning från grunden för flotta utan TMS: Opter eller AddSecure är vanligast i Norden. Säljer ni hemleveranser med många stopp per rutt: Zoopit eller Webfleet är konkurrenskraftiga. För kommunal/myndighetsbruk med många zoner: Vertigis. Ingen lösning är 'bäst' i absolut mening — utvärdera mot er specifika användning.",
      },
    },
    {
      "@type": "Question",
      name: "Måste vi byta TMS för att få bra ruttoptimering?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nej. AI-driven ruttoptimering kan läggas ovanpå befintliga TMS via API eller via dataflöden ni redan har (mail, EDI, fil-importer). Att byta TMS är ett 6–12 månaders projekt med stor risk för data­förlust och driftstörning. AI-augmentering av befintligt TMS kan vara i pilot på 2–4 veckor. Validera leverantörens integration mot ert TMS innan ni binder upp er.",
      },
    },
    {
      "@type": "Question",
      name: "Vad kostar ruttoptimering-mjukvara i Sverige 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Klassiska TMS med ruttoptimering inkluderat (Opter, AddSecure, Hogia): 1500–4000 kr/fordon/månad beroende på funktioner och avtal. Ren ruttoptimering som tilläggsmodul: 500–1500 kr/fordon/månad. AI-driven optimering ovanpå befintligt TMS: 50–200 kkr engångsavgift + 5–25 kkr/månad oavsett flottstorlek. Implementationstid varierar mellan veckor (AI-overlay) och månader (helt nytt TMS).",
      },
    },
    {
      "@type": "Question",
      name: "Hur stor besparing ger ruttoptimering realistiskt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Klassisk algoritmbaserad optimering ger 10–20 % mindre körsträcka för rutter med många stopp. AI-augmentering med realtidsdata (trafik, väder, förarens körmönster) lägger på ytterligare 3–8 %. Kombinerat når pilotåkerier ofta 23 % mindre körsträcka och 18 % fler leveranser per dag. Notera: besparingen är störst på rutter med 8+ stopp; för långa enstoppskörningar är vinsten marginell (ofta <2 %).",
      },
    },
    {
      "@type": "Question",
      name: "Hur lång tid tar implementation av ruttoptimering?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Helt nytt TMS med ruttoptimering: 4–12 månader (data-migration, utbildning, drift­stabilisering). Tilläggsmodul till befintligt TMS: 4–12 veckor. AI-overlay (NOGO-modellen): 2–4 veckor i pilot, 6–8 veckor till full produktion. Skillnaden ligger främst i hur mycket integration som krävs och hur mycket kund-specifik regelkonfiguration som behövs.",
      },
    },
    {
      "@type": "Question",
      name: "Vilken ruttoptimering passar för åkerier med Opter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Opter har inbyggd ruttplanering men ingen avancerad optimering — den är list-baserad, inte algoritmisk. För åkerier som vill kvar i Opter (vilket är majoriteten av nordiska transportbolag) är AI-overlay som integrerar via Opters API mest praktiskt. NOGO Media bygger denna typ av integration. Alternativ: byta till AddSecure som har mer avancerad inbyggd optimering, men det är full systembyte.",
      },
    },
    {
      "@type": "Question",
      name: "Hur skiljer sig svenska och nordiska ruttoptimerings-leverantörer från internationella?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Svensk/nordisk leverantör (Opter, AddSecure, Hogia, NOGO) förstår nordisk reglering: kör- och vilotider enligt EU + svensk tolkning, ADR-klassningar, eFTI-format, kabotage-regler, vinterväg-realiteter, och datalagring inom EU. Internationell leverantör (Routific, OptimoRoute, Onfleet) har ofta starkare API och prisstruktur men kräver konfiguration för nordisk lagstiftning. För större internationella verksamheter är de internationella starkare; för svenska SME-åkerier är nordiska leverantörer ofta enklare att komma igång med.",
      },
    },
  ],
};

const COMPARISON: Array<{
  name: string;
  url: string;
  type: string;
  strengths: string;
  weaknesses: string;
  fits: string;
}> = [
  {
    name: "Opter",
    url: "https://opter.com",
    type: "Heltäckande TMS med inbyggd ruttplanering",
    strengths:
      "Marknadsledare i Norden (500+ åkerier). Robust orderhantering, fakturering, integration med ekonomisystem. Stark community + svensk support.",
    weaknesses:
      "Ruttoptimeringen är list-baserad, inte algoritmisk. För avancerad multi-stop-optimering räcker den inte. Byte FRÅN Opter är ett stort projekt.",
    fits: "Åkerier som vill ha helhetslösning + behöver inbyggd fakturering. Föredragen av nordiska SME-åkerier 10–100 fordon.",
  },
  {
    name: "AddSecure",
    url: "https://addsecure.se",
    type: "TMS + flotthantering + avancerad ruttoptimering",
    strengths:
      "Mer avancerad optimerings­motor än Opter. Bra fordon-tracking och realtidsdata. Stark inom större logistik­operatörer.",
    weaknesses:
      "Dyrare än Opter för mindre åkerier. Mer komplex att konfigurera. Mindre flexibel för specifik svensk åkeri-praxis.",
    fits: "Mellan-stora till stora åkerier (50+ fordon) som behöver avancerad optimering + flotttracking i ett system.",
  },
  {
    name: "Zoopit",
    url: "https://zoopit.no",
    type: "Specialiserad ruttoptimering (norsk, expanderar i Sverige)",
    strengths:
      "Bra UX, snabb implementation, prisvärd för mindre flottor. Stark inom hemleveranser och multi-stop-rutter.",
    weaknesses:
      "Ingen TMS-funktionalitet — kräver befintligt orderhantering. Mindre etablerad i Sverige än norska marknaden.",
    fits: "Åkerier med många stopp per rutt (hemleverans, e-handel) som redan har TMS men vill ha bättre rutter.",
  },
  {
    name: "Vertigis",
    url: "https://sverige.vertigis.com",
    type: "GIS-baserad ruttoptimering",
    strengths:
      "Stark på geografisk visualisering. Bra för zonbaserad planering, kommunala uppdrag, infrastruktur-relaterade transporter.",
    weaknesses:
      "Mer kartfokuserad än TMS-fokuserad. Mindre lämpad för traditionella åkerier med fokus på fakturering och kontrakt.",
    fits: "Kommunala fordonsflöden, hemtjänst-transporter, infrastrukturarbeten där geografisk zonindelning är viktigast.",
  },
  {
    name: "Webfleet",
    url: "https://www.webfleet.com",
    type: "Telematik + ruttoptimering",
    strengths:
      "Stark fordon-tracking och realtidsdata. Internationell leverantör med bred funktion. Bra integration mot fordon-hårdvara (TomTom).",
    weaknesses:
      "Optimerings­delen är inte i framkant. Bättre på att SE rutter än att FÖRESLÅ optimala. Internationell support med viss latens.",
    fits: "Internationella eller multi-nordiska flottor som behöver enhetlig telematik över länder.",
  },
  {
    name: "NOGO Media (AI-overlay)",
    url: "https://nogomedia.se",
    type: "AI-driven ruttoptimering ovanpå befintligt TMS",
    strengths:
      "Inget TMS-byte krävs — ligger som lager ovanpå Opter / AddSecure / Hogia / egenbyggda. AI-augmentering ger 23 % mindre körsträcka + 18 % fler leveranser. Pilot på 2–4 veckor.",
    weaknesses:
      "Yngre leverantör (skapad 2024), mindre referensbas än de stora. Kräver att åkeriet redan har TMS — vi ersätter inte ett.",
    fits: "Nordiska åkerier 10–100 fordon som har befintligt TMS men vill ha bättre rutter + AI-automation utan systembyte.",
  },
];

export default function RuttoptimeringJamforelse2026() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Artiklar", path: "/blogg" },
          {
            name: "Ruttoptimering mjukvara Sverige — jämförelse 2026",
            path: "/artiklar/ruttoptimering-mjukvara-sverige-jamforelse-2026",
          },
        ]}
      />
      <ArticleJsonLd
        title={TITLE}
        description={DESCRIPTION}
        url="/artiklar/ruttoptimering-mjukvara-sverige-jamforelse-2026"
        publishedTime="2026-04-28T00:00:00Z"
        tags={[
          "ruttoptimering Sverige",
          "ruttoptimering mjukvara",
          "Opter",
          "AddSecure",
          "Zoopit",
        ]}
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
                Jämförelse · Ruttoptimering
              </span>
              <span className="text-xs text-gray-500">~10 min läsning</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15]">
              Ruttoptimering mjukvara Sverige — jämförelse 2026
            </h1>

            <p className="mt-6 text-lg text-gray-500 leading-relaxed">
              Neutral genomgång av sex ruttoptimerings-leverantörer i Sverige
              2026: Opter, AddSecure, Zoopit, Vertigis, Webfleet och NOGO
              Medias AI-overlay. Styrkor, svagheter och vilken som passar
              vilken typ av åkeri. Skriven för chefer som ska göra ett val,
              inte för konsulter som söker bekräftelse.
            </p>
          </header>

          <div className="space-y-10 text-gray-700 leading-relaxed">
            <section className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <h2 className="text-xl font-medium text-black mb-3">Sammanfattning per användarprofil</h2>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>
                  <strong>Har Opter, vill ha bättre rutter:</strong> Lägg
                  AI-overlay (NOGO) ovanpå — byt inte system. 2–4 veckor till
                  pilot.
                </li>
                <li>
                  <strong>Har inget TMS, behöver helhet:</strong> Opter eller
                  AddSecure beroende på storlek och budget.
                </li>
                <li>
                  <strong>Många stopp per rutt (hemleverans):</strong> Zoopit
                  eller Webfleet konkurrenskraftiga.
                </li>
                <li>
                  <strong>Kommunala/zonbaserade transporter:</strong> Vertigis.
                </li>
                <li>
                  <strong>Internationell flotta över Norden:</strong> Webfleet
                  eller AddSecure.
                </li>
                <li>
                  <strong>Vill testa AI utan att binda upp er:</strong> NOGO:s
                  AI-overlay — pilot ofta i 5-siffrigt belopp innan beslut.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-black mb-3">
                Två fundamentala val innan ni jämför
              </h2>
              <p>
                Innan ni utvärderar leverantörer behöver ni svara på två
                frågor om er utgångspunkt — annars jämför ni äpplen med
                päron:
              </p>

              <div className="mt-4 rounded-xl border border-gray-200 bg-white p-5">
                <h3 className="font-medium text-black">
                  1. Har ni ett TMS idag?
                </h3>
                <p className="mt-2 text-sm">
                  Om ja — tänk i lager: behåll TMS:t, lägg ruttoptimering
                  ovanpå. Att byta TMS är ett 6–12 månaders projekt med
                  stor risk. Att lägga AI-overlay är 2–4 veckors pilot.
                </p>
                <p className="mt-2 text-sm">
                  Om nej — då utvärderar ni helhetslösning där ruttoptimering
                  är en av många moduler (Opter, AddSecure, Hogia är de
                  vanligaste i Norden).
                </p>
              </div>

              <div className="mt-4 rounded-xl border border-gray-200 bg-white p-5">
                <h3 className="font-medium text-black">
                  2. Vilken typ av rutter kör ni?
                </h3>
                <p className="mt-2 text-sm">
                  &gt;8 stopp per rutt (hemleverans, e-handel,
                  butiksdistribution): ruttoptimering ger stor effekt
                  (15–25 % mindre körsträcka). Här är specialiserade
                  leverantörer (Zoopit, Webfleet) starka.
                </p>
                <p className="mt-2 text-sm">
                  &lt;3 stopp per rutt (långa transporter, helbil-uppdrag):
                  ruttoptimering ger marginell vinst på rutten själv. Större
                  vinst finns i orderhantering och dispatch — då är AI-overlay
                  eller heltäckande TMS bättre val än ren ruttoptimering.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-black mb-3">
                Sex leverantörer i jämförelse
              </h2>
              <div className="space-y-6">
                {COMPARISON.map((entry) => (
                  <div
                    key={entry.name}
                    className="rounded-xl border border-gray-200 bg-white p-5"
                  >
                    <div className="flex items-baseline justify-between mb-2">
                      <h3 className="text-xl font-medium text-black">
                        {entry.name}
                      </h3>
                      <a
                        href={entry.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-gray-500 hover:underline"
                      >
                        {entry.url.replace(/^https?:\/\//, "")} ↗
                      </a>
                    </div>
                    <p className="text-sm text-gray-600 italic mb-3">
                      {entry.type}
                    </p>
                    <div className="space-y-2 text-sm">
                      <p>
                        <strong className="text-black">Styrkor:</strong>{" "}
                        {entry.strengths}
                      </p>
                      <p>
                        <strong className="text-black">Svagheter:</strong>{" "}
                        {entry.weaknesses}
                      </p>
                      <p>
                        <strong className="text-black">Passar:</strong>{" "}
                        {entry.fits}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-black mb-3">
                Vad mäter ni för att jämföra?
              </h2>
              <p>
                Tre KPIer ger en rättvis jämförelse — ofta mer informativ än
                marknadsföringsmaterialet:
              </p>
              <ol className="mt-3 list-decimal pl-6 space-y-2">
                <li>
                  <strong>Mindre körsträcka per dag</strong> jämfört med er
                  nuvarande planering. Mät under minst 4 veckor och korrigera
                  för säsong (sommarperioden har annan trafikmix).
                </li>
                <li>
                  <strong>Fler leveranser per fordon per dag.</strong> Den
                  KPI:n missas ofta — kortare körsträckor är meningslösa om
                  färre leveranser hinns med.
                </li>
                <li>
                  <strong>Tid trafikledare lägger på rutten</strong>. Verktyg
                  som kräver mycket manuell konfiguration kan vara dyrare
                  totalt än de som är &quot;dyrare&quot; i licens.
                </li>
              </ol>
              <p className="mt-3">
                Begär att leverantören kör pilot mot ER data — inte mot
                en demo-miljö. Om de vägrar är det signal att produkten inte
                är tillräckligt mogen för riktig användning. Mer:{" "}
                <Link className="underline" href="/artiklar/roi-automation-transport-kalkyl">
                  ROI-kalkylmodell för transport-automation
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-black mb-3">
                Tre röda flaggor när ni utvärderar
              </h2>
              <div className="space-y-4">
                <div className="rounded-xl border-l-4 border-red-300 bg-red-50/50 p-4">
                  <p className="font-medium text-black">
                    1. &quot;Vår AI ger 30 % besparing&quot; utan
                    detaljerade förutsättningar
                  </p>
                  <p className="mt-2 text-sm">
                    Realistiskt: 10–25 % varierar kraftigt med antal stopp,
                    geografi, befintlig planering. Be om case-data från åkeri
                    liknande ert — inte generell snitt­siffra.
                  </p>
                </div>
                <div className="rounded-xl border-l-4 border-red-300 bg-red-50/50 p-4">
                  <p className="font-medium text-black">
                    2. Lång inlåsning utan exit-klausul
                  </p>
                  <p className="mt-2 text-sm">
                    SaaS-avtal med 36-månaders bindning utan möjlighet att
                    avsluta vid uteblivet ROI är en signal. Bra leverantörer
                    erbjuder pilot + 12-månaders avtal med rimlig
                    uppsägning.
                  </p>
                </div>
                <div className="rounded-xl border-l-4 border-red-300 bg-red-50/50 p-4">
                  <p className="font-medium text-black">
                    3. Otydligt om data-äganderätt
                  </p>
                  <p className="mt-2 text-sm">
                    Verifiera skriftligt: data lagras inom EU, åkeriet äger
                    den, modellen tränas inte på er data utan samtycke,
                    avtal kan avslutas utan dataförlust. Få DPA innan
                    avtal.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-black mb-3">
                Vanliga frågor
              </h2>
              <div className="space-y-5">
                {faqSchema.mainEntity.map((entry) => (
                  <div key={entry.name} className="border-l-2 border-gray-200 pl-4">
                    <h3 className="font-medium text-black">{entry.name}</h3>
                    <p className="mt-2 text-sm text-gray-600">
                      {entry.acceptedAnswer.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <h2 className="text-xl font-medium text-black mb-3">
                Vill ni se vad AI-overlay skulle ge ert åkeri?
              </h2>
              <p>
                Vi tar 30 minuter med era flöden och visar konkret vad
                ruttoptimering med AI-augmentering skulle innebära — utan
                systembyte. Mätbar pilot på 2–4 veckor om vi bestämmer
                oss.
              </p>
              <Link
                href="/kontakt"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-black hover:underline"
              >
                Boka strategisamtal <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </section>

            <RelatedSolutions />
          </div>
        </div>
      </article>
    </>
  );
}
