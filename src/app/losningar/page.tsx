import type { Metadata } from "next";
import Link from "next/link";
import {
  Route,
  Clock,
  Truck,
  BarChart3,
  ArrowRight,
  Play,
  Zap,
  Settings,
} from "lucide-react";
export const metadata: Metadata = {
  title: "Lösningar — Ruttoptimering, TMS-integration & AI-trafikledning",
  description:
    "AI-automation anpassad för svensk transport. Ruttoptimering, TMS-integration och automatiserad trafikledning — utan att ni byter system.",
  alternates: { canonical: "/losningar" },
  openGraph: {
    title: "Lösningar — Ruttoptimering, TMS-integration & AI-trafikledning",
    description:
      "AI-automation anpassad för svensk transport. Ruttoptimering, TMS-integration och automatiserad trafikledning.",
    url: "/losningar",
  },
};

const solutions = [
  {
    icon: Route,
    title: "Ruttoptimering",
    slug: "ruttoptimering",
    subtitle: "Minska körsträckan, öka lönsamheten",
    description:
      "Automatisk beräkning av optimala rutter för hela flottan. Med hänsyn till tidsfönster, kapacitet, ADR-krav och kör- och vilotider. 40 stopp med 5 minuters extra körtid per stopp = 3,3 timmar förlorad tid per dag.",
    stats: [
      { value: "−23%", label: "Körsträcka" },
      { value: "+18%", label: "Leveranser/dag" },
    ],
  },
  {
    icon: Settings,
    title: "TMS-integration",
    slug: "tms-integration",
    subtitle: "Automatisera utan att byta system",
    description:
      "Vi bygger automation som arbetar direkt i ert befintliga TMS — Opter, AddSecure, Hogia, Barkfors eller andra system. Med öppet API, stängt API eller helt utan — vi hittar alltid en väg in. Ni slipper migration, omträning och stillestånd.",
    stats: [
      { value: "0", label: "Systembyte" },
      { value: "2–4 v", label: "Implementation" },
    ],
  },
  {
    icon: Clock,
    title: "Trafikledning",
    slug: "trafikledning",
    subtitle: "Mer tid för det som kräver erfarenhet",
    description:
      "Automatisk matchning av förare, fordon och uppdrag. Automationen hanterar det repetitiva — era trafikledare fokuserar på relationer, undantag och de beslut som kräver omdöme.",
    stats: [
      { value: "−60%", label: "Manuell tid" },
      { value: "3h+", label: "Sparad tid/dag" },
    ],
  },
];

const additionalCapabilities = [
  {
    icon: Truck,
    title: "Fordonstilldelning",
    desc: "ADR, viktklass, utrustning — automationen matchar rätt fordon till rätt uppdrag.",
  },
  {
    icon: BarChart3,
    title: "Rapporter & analys",
    desc: "Fyllnadsgrad, beläggning, kostnader per uppdrag — data för bättre beslut.",
  },
  {
    icon: Zap,
    title: "Automatisk orderhantering",
    desc: "Inkommande bokningar fördelas automatiskt baserat på kapacitet, plats och regler.",
  },
];

const SITE_URL = "https://nogomedia.se";

function CollectionJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Lösningar — AI-automation för svensk transport",
    description:
      "AI-automation anpassad för svensk transport. Ruttoptimering, TMS-integration och automatiserad trafikledning — utan att ni byter system.",
    url: `${SITE_URL}/losningar`,
    provider: {
      "@type": "Organization",
      name: "NOGO Media AB",
      url: SITE_URL,
    },
    hasPart: [
      {
        "@type": "SoftwareApplication",
        name: "Ruttoptimering",
        url: `${SITE_URL}/losningar/ruttoptimering`,
        description:
          "Automatisk beräkning av optimala rutter. Minskar körsträckan med 23% och ökar leveranser med 18%.",
      },
      {
        "@type": "SoftwareApplication",
        name: "TMS-integration",
        url: `${SITE_URL}/losningar/tms-integration`,
        description:
          "AI-automation direkt i ert befintliga TMS. Med eller utan API — vi hittar alltid en väg in.",
      },
      {
        "@type": "SoftwareApplication",
        name: "Trafikledning",
        url: `${SITE_URL}/losningar/trafikledning`,
        description:
          "Automatiserad orderhantering och förartilldelning. Minskar manuellt arbete med 60%.",
      },
    ],
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

export default function LosningarPage() {
  return (
    <>
      <CollectionJsonLd />
      {/* Hero */}
      <section className="pt-32 pb-8 md:pt-44 md:pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-gray-400 mb-4">Lösningar</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1]">
              Automation anpassad för{" "}
              <span className="text-gray-400">svensk transport.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-500 max-w-2xl leading-relaxed">
              Vi bygger AI-automation som arbetar i ert befintliga system.
              Ruttoptimering, orderhantering och trafikledning — utan att ni
              byter TMS.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          {solutions.map((sol) => (
            <div
              key={sol.slug}
              className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-transparent hover:border-gray-200 transition-colors"
            >
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="w-10 h-10 bg-white rounded-xl border border-gray-200 flex items-center justify-center mb-5">
                    <sol.icon size={20} className="text-gray-700" />
                  </div>
                  <h2 className="text-2xl font-medium mb-1">{sol.title}</h2>
                  <p className="text-gray-400 text-sm mb-4">{sol.subtitle}</p>
                  <p className="text-gray-500 leading-relaxed">
                    {sol.description}
                  </p>
                  <Link
                    href={`/losningar/${sol.slug}`}
                    className="inline-flex items-center gap-1.5 mt-6 text-sm font-medium hover:gap-2.5 transition-all"
                  >
                    Läs mer om {sol.title.toLowerCase()}{" "}
                    <ArrowRight size={14} />
                  </Link>
                </div>
                <div className="flex md:flex-col gap-4 md:justify-center">
                  {sol.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-white rounded-xl border border-gray-200 p-5 flex-1"
                    >
                      <div className="text-2xl font-semibold">{stat.value}</div>
                      <div className="text-xs text-gray-500 mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional capabilities */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-medium mb-12">Fler funktioner</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {additionalCapabilities.map((cap) => (
              <div
                key={cap.title}
                className="bg-white rounded-xl border border-gray-200 p-6"
              >
                <cap.icon size={20} className="text-gray-500 mb-4" />
                <h3 className="font-medium mb-2">{cap.title}</h3>
                <p className="text-sm text-gray-500">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-medium tracking-tight mb-4">
            Vill ni veta mer?
          </h2>
          <p className="text-gray-500 mb-8">
            Boka ett kostnadsfritt strategisamtal. Vi visar hur automation kan
            effektivisera just ert åkeri.
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
