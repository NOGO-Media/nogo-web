import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  ArrowRight,
  Play,
  Clock,
  Shield,
  RefreshCw,
  Layers,
  Truck,
  Timer,
  ChevronRight,
  FileInput,
  Cpu,
  CheckCircle2,
} from "lucide-react";

const RouteOptimizationDemo = dynamic(
  () => import("@/components/route-optimization/RouteOptimizationDemo"),
);
const ROICalculator = dynamic(
  () => import("@/components/route-optimization/ROICalculator"),
);
const RouteOptFAQ = dynamic(
  () => import("@/components/route-optimization/RouteOptFAQ"),
);

const SITE_URL = "https://nogomedia.se";

export const metadata: Metadata = {
  title: "Ruttoptimering för åkerier — AI-optimerade rutter",
  description:
    "Minska körsträckan med 23% och öka leveranserna med 18% per dag. AI-driven ruttoptimering för svenska åkerier — med hänsyn till tidsfönster, ADR-krav och kör- och vilotider.",
  keywords: [
    "ruttoptimering",
    "ruttoptimering åkeri",
    "ruttplanering transport",
    "optimera körsträcka",
    "AI ruttoptimering",
    "ruttoptimering Sverige",
    "ruttoptimering lastbil",
    "leveransplanering",
    "transportplanering",
    "ruttplanering åkeri",
    "minska körsträcka åkeri",
    "effektivisera transporter",
    "fordonsplanering",
    "logistikoptimering",
    "ADR transport ruttplanering",
  ],
  alternates: { canonical: "/losningar/ruttoptimering" },
  openGraph: {
    title: "Ruttoptimering för åkerier — AI-optimerade rutter | NOGO Media",
    description:
      "Minska körsträckan med 23% och öka leveranserna med 18% per dag. AI-driven ruttoptimering för svenska åkerier.",
    url: "/losningar/ruttoptimering",
    type: "website",
    locale: "sv_SE",
    siteName: "NOGO Media",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NOGO Media — Ruttoptimering för åkerier",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ruttoptimering för åkerier — AI-optimerade rutter | NOGO Media",
    description:
      "Minska körsträckan med 23% och öka leveranserna med 18% per dag.",
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
        name: "Ruttoptimering",
        item: `${SITE_URL}/losningar/ruttoptimering`,
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

function SoftwareJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "NOGO Ruttoptimering",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "AI-driven ruttoptimering för svenska åkerier. Minskar körsträckan med 23% och ökar leveranser per dag med 18%.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "SEK",
      description: "Kostnadsfritt strategisamtal",
    },
    provider: {
      "@type": "Organization",
      name: "NOGO Media AB",
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "Sweden",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

const features = [
  {
    icon: Clock,
    title: "Tidsfönster",
    desc: "Planerar rutter som respekterar leveranstider, hämttider och kundspecifika krav — ner till minutnivå.",
  },
  {
    icon: Shield,
    title: "ADR-klassificering",
    desc: "Automatisk hänsyn till farligt gods, tunnelkoder och samlastregler. Rätt fordon på rätt rutt.",
  },
  {
    icon: Timer,
    title: "Kör- och vilotider",
    desc: "Rutter som respekterar EU:s regelverk. Pauser planeras automatiskt utan att förare överskrider maximal körtid.",
  },
  {
    icon: Truck,
    title: "Kapacitetsoptimering",
    desc: "Fyllnadsgrad, viktbegränsningar och lastbärare — automationen maximerar varje fordons kapacitet.",
  },
  {
    icon: Layers,
    title: "Flerzonsplanering",
    desc: "Optimering över flera depåer, zoner och regioner. Hanterar även ordrar som korsar zonsgränser.",
  },
  {
    icon: RefreshCw,
    title: "Realtidsuppdateringar",
    desc: "Kör om optimeringen under dagen när nya ordrar kommer in eller förutsättningar ändras.",
  },
];

const steps = [
  {
    icon: FileInput,
    step: "01",
    title: "Importera ordrar",
    desc: "Ordrar hämtas automatiskt från ert TMS — Opter, AddSecure, Hogia, Barkfors eller via API. Ingen manuell inmatning krävs.",
  },
  {
    icon: Cpu,
    step: "02",
    title: "AI optimerar",
    desc: "Vår AI analyserar tidsfönster, kapacitet, ADR-krav, kör- och vilotider samt geografi. Optimering av 100+ stopp tar under 2 minuter.",
  },
  {
    icon: CheckCircle2,
    step: "03",
    title: "Klart att köra",
    desc: "Optimerade rutter skickas tillbaka till ert TMS och ut till förarnas enheter. Trafikledaren godkänner med ett klick.",
  },
];

export default function RuttoptimeringPage() {
  return (
    <>
      <BreadcrumbJsonLd />
      <SoftwareJsonLd />

      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-44 md:pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-sm text-gray-400 mb-6">
              <Link href="/losningar" className="hover:text-gray-600 transition-colors">
                Lösningar
              </Link>
              <ChevronRight size={14} />
              <span className="text-gray-600">Ruttoptimering</span>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1]">
              Ruttoptimering som minskar{" "}
              <span className="text-gray-400">körsträckan med 23%.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-500 max-w-2xl leading-relaxed">
              AI-driven ruttplanering för svenska åkerier. Automatisk beräkning
              av optimala rutter med hänsyn till tidsfönster, kapacitet,
              ADR-krav och kör- och vilotider — utan att ni byter TMS.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                Boka strategi-samtal <ArrowRight size={16} />
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

      {/* Stats */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { value: "−23%", label: "Körsträcka", sub: "Genomsnittlig minskning" },
              { value: "+18%", label: "Leveranser/dag", sub: "Fler stopp med samma resurser" },
              { value: "<2 min", label: "Optimeringstid", sub: "100+ stopp" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-gray-50 rounded-2xl border border-gray-200 p-6 md:p-8 text-center"
              >
                <div className="text-3xl md:text-4xl font-semibold">{stat.value}</div>
                <div className="text-sm font-medium mt-2">{stat.label}</div>
                <div className="text-xs text-gray-400 mt-1">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive demo */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl font-medium tracking-tight mb-4">
              Se skillnaden — före och efter optimering
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Manuellt planerade rutter korsar ofta varandra och missar
              möjligheter att gruppera leveranser geografiskt. Vår AI
              omstrukturerar rutterna för kortare körsträcka och fler
              leveranser.
            </p>
          </div>
          <RouteOptimizationDemo />
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-medium tracking-tight mb-4">
              Så fungerar ruttoptimeringen
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Från order till optimerad rutt — i tre steg. Automationen arbetar
              i bakgrunden medan era trafikledare fokuserar på det som kräver
              erfarenhet.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div
                key={s.step}
                className="bg-white rounded-2xl border border-gray-200 p-8"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                    <s.icon size={20} className="text-gray-600" />
                  </div>
                  <span className="text-xs font-mono text-gray-400">{s.step}</span>
                </div>
                <h3 className="text-lg font-medium mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-medium tracking-tight mb-4">
              Byggt för verkligheten
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Ruttoptimering som tar hänsyn till alla de begränsningar och regler
              som svenska åkerier hanterar varje dag.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-gray-50 rounded-xl border border-gray-200 p-6"
              >
                <f.icon size={20} className="text-gray-500 mb-4" />
                <h3 className="font-medium mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl font-medium tracking-tight mb-4">
              Vad kan ni spara?
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Justera parametrarna för att beräkna den uppskattade besparingen
              baserat på er flottas storlek och körmönster.
            </p>
          </div>
          <ROICalculator />
        </div>
      </section>

      {/* FAQ */}
      <RouteOptFAQ />

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-medium tracking-tight mb-4">
            Redo att minska körsträckan?
          </h2>
          <p className="text-gray-500 mb-8">
            Boka ett kostnadsfritt strategisamtal. Vi visar hur ruttoptimeringen
            fungerar med just era förutsättningar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Boka strategi-samtal <ArrowRight size={16} />
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
      </section>
    </>
  );
}
