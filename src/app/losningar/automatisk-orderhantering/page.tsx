import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Play,
  FileSpreadsheet,
  MapPinned,
  Clock3,
  AlertTriangle,
  ShieldCheck,
  Route,
  CheckCircle2,
  Repeat,
  Users,
} from "lucide-react";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import RelatedSolutions from "@/components/RelatedSolutions";

const SITE_URL = "https://nogomedia.se";

export const metadata: Metadata = {
  title: "Automatisk orderhantering för åkerier",
  description:
    "Automatiserad orderhantering för svenska transportbolag. Ladda upp Excel, få en körplan med ekipage, fyllnad och arbetstider på sekunder.",
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
    title: "Automatisk orderhantering för åkerier | NOGO Media",
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
    title: "Automatisk orderhantering för åkerier | NOGO Media",
    description:
      "Från Excel till färdig plan på sekunder med AI-driven orderhantering.",
    images: ["/og-image.png"],
  },
};


function ServiceJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Automatisk orderhantering för åkerier",
    serviceType: "Transportplanering och orderhantering",
    description:
      "AI-driven orderhantering som omvandlar Excel-underlag till färdig körplan med pass, ekipage, fyllnad, arbetstid och varningar.",
    areaServed: {
      "@type": "Country",
      name: "Sweden",
    },
    provider: {
      "@type": "Organization",
      name: "NOGO Media AB",
      url: SITE_URL,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function FaqJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Behöver vi byta trafikledningssystem för att använda lösningen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nej. Lösningen tar emot samma Excel-format som ni redan exporterar i dag. Ni kan börja utan systembyte och utan ombyggnad av processer.",
        },
      },
      {
        "@type": "Question",
        name: "Hur hanterar systemet ordrar med ofullständig data?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Om deklarerad flakmeter saknas räknar systemet fram ett realistiskt värde från volym eller vikt. Det gör att även ofullständiga orderrader kan planeras korrekt.",
        },
      },
      {
        "@type": "Question",
        name: "Kan trafikledaren fortfarande göra manuella ändringar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja. Planen är ett förslag. Trafikledaren kan flytta gods mellan pass, ångra steg för steg och godkänna först när planen känns rätt.",
        },
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

const kpiCards = [
  { value: "2–4 h", label: "Mindre manuell planering per dag" },
  { value: "90%+", label: "Fyllnadsgrad i verkliga körningar" },
  { value: "0", label: "Timmar övertid i optimerade planer" },
  { value: "7–13", label: "Färre ekipage jämfört med maxflotta" },
];

const flowSteps = [
  {
    icon: FileSpreadsheet,
    title: "Ladda upp dagens underlag",
    desc: "Samma Excel-format som ni redan exporterar från trafikledningen. Ingen handpåläggning.",
  },
  {
    icon: MapPinned,
    title: "Systemet läser och kartlägger",
    desc: "Adresser, rutter, vikt, volym och flakmeter tolkas automatiskt. Saknade värden fylls med rimliga beräkningar.",
  },
  {
    icon: Route,
    title: "Planen byggs automatiskt",
    desc: "Gods läggs i rätt pass och rätt ekipage med hänsyn till arbetstid, riktning och kundprioritet.",
  },
  {
    icon: CheckCircle2,
    title: "Trafikledaren godkänner",
    desc: "Granska varningar, justera vid behov och godkänn med ett klick.",
  },
];

const transportTerms = [
  {
    title: "Smart lastpussel i stället för teknisk jargong",
    description:
      "I praktiken betyder det att systemet fyller bil, flak och släp så tätt som möjligt, utan att bryta regler eller överlasta pass.",
  },
  {
    title: "Rätt ekipage till rätt körning",
    description:
      "Systemet väljer minsta möjliga ekipage som ändå klarar godset: bil+flak, bil+släp eller fullstor kombination.",
  },
  {
    title: "Samma språk som i trafikledningen",
    description:
      "Vi använder ord som pass, fyllnad, returgods, omlastning, avgångstid och upphämtning — inte utvecklarspråk.",
  },
];

const planningHighlights = [
  "Dubbletter markeras direkt innan planering startar.",
  "Prioritetskunder tilldelas alltid först.",
  "Gods i samma shipment hålls ihop i samma pass.",
  "Returgods matchas med ekipage som ändå kör i området.",
  "Låg fyllnad slås ihop när det går utan omvägar.",
  "Kortare pass kan få extra vända för bättre kapacitetsnyttjande.",
  "Upphämtningar nära leveransområde plockas in automatiskt.",
  "Senare planeringsdagar spärras tills tidigare dag är klar.",
];

const warningLevels = [
  {
    icon: ShieldCheck,
    title: "Röda stopp",
    desc: "Planen stoppas om viktiga regler bryts, till exempel splittrat shipment eller prioriterad kund utan tilldelning.",
  },
  {
    icon: AlertTriangle,
    title: "Gula varningar",
    desc: "Flaggar underlagsproblem som dubbletter och konflikter i shipment så att trafikledaren ser vad som behöver granskas.",
  },
  {
    icon: Clock3,
    title: "Passvarningar",
    desc: "Visar pass med låg fyllnad eller risk för tidsproblem så att ni kan justera innan godkännande.",
  },
];

const faq = [
  {
    question: "Kan vi använda lösningen för partigods och styckegods?",
    answer:
      "Ja. Sidan är byggd för daglig planering av blandat gods där vikt, volym, pallplatser och flakmeter varierar mellan ordrar.",
  },
  {
    question: "Fungerar det för flera dagar i samma fil?",
    answer:
      "Ja. Underlag kan läsas dag för dag från olika flikar, och systemet håller reda på vad som redan hämtats upp mellan dagarna.",
  },
  {
    question: "Måste allt vara helt automatiskt?",
    answer:
      "Nej. Automationen gör grovjobbet, men trafikledaren kan alltid finjustera pass manuellt innan planen godkänns.",
  },
];

export default function AutomatiskOrderhanteringPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Lösningar", path: "/losningar" }, { name: "Automatisk orderhantering", path: "/losningar/automatisk-orderhantering" }]} />
      <ServiceJsonLd />
      <FaqJsonLd />

      <section className="pt-32 pb-12 md:pt-44 md:pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl">
            <nav className="flex items-center gap-1.5 text-sm text-gray-500 mb-6">
              <Link
                href="/losningar"
                className="hover:text-gray-600 transition-colors"
              >
                Lösningar
              </Link>
              <ChevronRight size={14} aria-hidden="true" />
              <span className="text-gray-600">Automatisk orderhantering</span>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1]">
              Automatisk orderhantering —{" "}
              <span className="text-gray-400">
                från Excel till färdig körplan på sekunder.
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-500 max-w-4xl leading-relaxed">
              För svenska åkerier som vill minska manuellt planeringsarbete.
              NOGO läser orderrader, föreslår pass och säkrar att rätt gods går
              med rätt ekipage, i rätt ordning, inom rätt arbetstid.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                Boka strategimöte <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 border border-gray-200 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                <Play size={14} aria-hidden="true" />
                Testa demo
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mt-10">
            {kpiCards.map((kpi) => (
              <div key={kpi.label} className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                <p className="text-2xl font-semibold">{kpi.value}</p>
                <p className="text-sm text-gray-500 mt-1">{kpi.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-medium tracking-tight mb-8">
            Så fungerar det i trafikledningen
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {flowSteps.map((step, index) => (
              <article
                key={step.title}
                className="bg-white rounded-2xl border border-gray-200 p-6"
              >
                <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center mb-4">
                  <step.icon size={18} className="text-gray-700" />
                </div>
                <p className="text-xs text-gray-400 mb-2">Steg {index + 1}</p>
                <h3 className="font-medium mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-medium tracking-tight mb-5">
              Branschspråk i stället för tekniska termer
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Vi har ersatt utvecklarord med ord från verkligheten på åkeriet.
              I stället för att prata om avancerade algoritmer beskriver vi vad
              som faktiskt händer: hur godset packas i ekipage och hur pass
              byggs utan att köra halvtomt.
            </p>
            <div className="space-y-4">
              {transportTerms.map((item) => (
                <div
                  key={item.title}
                  className="border border-gray-200 rounded-xl p-5 bg-white"
                >
                  <h3 className="font-medium mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-black text-white rounded-2xl p-8">
            <h3 className="text-2xl font-medium mb-4">Vad systemet gör varje dag</h3>
            <ul className="space-y-3 text-sm text-white/80">
              {planningHighlights.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-medium tracking-tight mb-8">
            Varningar och kvalitet innan ni godkänner
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {warningLevels.map((item) => (
              <article key={item.title} className="bg-white border border-gray-200 rounded-2xl p-6">
                <item.icon size={18} className="text-gray-700 mb-4" />
                <h3 className="font-medium mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-medium tracking-tight mb-6">
            Byggd för svenska transportflöden
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-4xl mb-8">
            Lösningen används för trafikledning i hela Sverige — från lokala
            distributionsupplägg till längre linjer mellan terminaler. Fokus är
            samma varje dag: hög fyllnad, tydliga pass, rätt arbetstid och färre
            manuella moment.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              "Stockholm och Mälardalen",
              "Göteborg och Västsverige",
              "Malmö och Skåne",
              "Jönköping och Småland",
              "Örebro och Bergslagen",
              "Dalarna och Norrlandslinjer",
            ].map((area) => (
              <div
                key={area}
                className="border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 bg-white"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-medium tracking-tight mb-4">Vanliga frågor</h2>
            <p className="text-gray-600 leading-relaxed">
              Här är svar på frågor vi oftast får från trafikledare och
              transportchefer.
            </p>
          </div>

          <div className="space-y-4">
            {faq.map((item) => (
              <article key={item.question} className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="font-medium mb-2">{item.question}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-medium tracking-tight mb-4">Så kommer ni igång</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Boka ett kostnadsfritt möte på 30 minuter. Vi går igenom ert
            orderflöde, visar hur underlaget läses in och ger en konkret plan för
            hur ni kommer i drift.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Boka kostnadsfritt strategimöte <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link
              href="/losningar"
              className="inline-flex items-center justify-center gap-2 border border-gray-200 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Se alla lösningar <Repeat size={15} aria-hidden="true" />
            </Link>
          </div>
          <p className="mt-5 text-xs text-gray-400 inline-flex items-center gap-1.5">
            <Users size={12} aria-hidden="true" /> NOGO Media bygger autonoma AI-agenter för
            transport och logistik i Sverige.
          </p>
          <div className="max-w-3xl mx-auto text-left mt-8">
            <RelatedSolutions slugs={["trafikledning", "ruttoptimering", "tms-integration"]} />
          </div>
        </div>
      </section>
    </>
  );
}
