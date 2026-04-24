import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  ArrowRight,
  Play,
  ChevronRight,
  Users,
  Zap,
  ShieldCheck,
  Bell,
  BarChart3,
  Repeat,
  UserCheck,
  ClipboardList,
  CheckCircle2,
} from "lucide-react";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

const DispatchMatchingDemo = dynamic(
  () => import("@/components/trafikledning/DispatchMatchingDemo"),
);
const TimeSavingsCalculator = dynamic(
  () => import("@/components/trafikledning/TimeSavingsCalculator"),
);
const TrafikledningFAQ = dynamic(
  () => import("@/components/trafikledning/TrafikledningFAQ"),
);

const SITE_URL = "https://nogomedia.se";

export const metadata: Metadata = {
  title: "AI-trafikledning för åkerier — Frigör 3+ timmar per dag",
  description:
    "AI-driven trafikledning som automatiserar orderhantering, förartilldelning och fordonsplanering. Minska manuellt arbete med 60%.",
  keywords: [
    "trafikledning",
    "AI trafikledning",
    "automatiserad trafikledning",
    "trafikledning åkeri",
    "orderhantering transport",
    "automatisk ordertilldelning",
    "förartilldelning",
    "fordonsplanering",
    "dispatch automation",
    "trafikledare effektivisering",
    "transportplanering automation",
    "digitalisera trafikledning",
    "automatisera orderhantering åkeri",
    "trafikledning Sverige",
  ],
  alternates: { canonical: "/losningar/trafikledning" },
  openGraph: {
    title:
      "Automatiserad trafikledning — Frigör 3+ timmar per dag | NOGO Media",
    description:
      "AI-driven trafikledning som automatiserar orderhantering och förartilldelning. Minska manuellt arbete med 60%.",
    url: "/losningar/trafikledning",
    type: "website",
    locale: "sv_SE",
    siteName: "NOGO Media",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NOGO Media — Automatiserad trafikledning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Automatiserad trafikledning — Frigör 3+ timmar per dag | NOGO Media",
    description:
      "AI-driven trafikledning som automatiserar orderhantering och förartilldelning.",
    images: ["/og-image.png"],
  },
};

function SoftwareJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "NOGO Trafikledning",
    serviceType: "Dispatch automation",
    description:
      "AI-driven trafikledning som automatiserar orderhantering, förartilldelning och fordonsplanering för svenska åkerier. Minskar manuellt arbete med 60%.",
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
    icon: UserCheck,
    title: "Automatisk förartilldelning",
    desc: "Matchar rätt förare till rätt uppdrag baserat på körkort, ADR-behörighet, position, arbetstid och kundpreferenser.",
  },
  {
    icon: Zap,
    title: "Automatisk orderhantering",
    desc: "Inkommande ordrar fördelas automatiskt baserat på kapacitet, geografi och era regler. Enklare ordrar behöver aldrig passera trafikledaren.",
  },
  {
    icon: ShieldCheck,
    title: "Regelefterlevnad",
    desc: "Kör- och vilotider, ADR-krav, viktklass och kundspecifika regler verifieras automatiskt vid varje tilldelning.",
  },
  {
    icon: Bell,
    title: "Undantagshantering",
    desc: "Sjukanmälningar, sena ordrar och kapacitetsproblem flaggas direkt. Automationen föreslår alternativ — trafikledaren beslutar.",
  },
  {
    icon: BarChart3,
    title: "Beläggningsöversikt",
    desc: "Realtidsöversikt av beläggning per förare, fordon och zon. Identifiera ledig kapacitet och flaskhalsar direkt.",
  },
  {
    icon: Repeat,
    title: "Kontinuerlig optimering",
    desc: "Automationen omfördelar löpande under dagen när förutsättningar ändras. Inga manuella omplaneringar.",
  },
];

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Ordrar kommer in",
    desc: "Ordrar hämtas automatiskt från ert TMS eller läggs in manuellt. Varje order får rätt prioritet och regler.",
  },
  {
    icon: Users,
    step: "02",
    title: "AI matchar och tilldelar",
    desc: "Automationen matchar förare, fordon och order baserat på alla era regler — körkort, ADR, kapacitet, position och tidsfönster.",
  },
  {
    icon: CheckCircle2,
    step: "03",
    title: "Trafikledaren godkänner",
    desc: "Tilldelningarna presenteras för godkännande. Trafikledaren kan justera, byta eller godkänna med ett klick.",
  },
];

export default function TrafikledningPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Lösningar", path: "/losningar" }, { name: "Trafikledning", path: "/losningar/trafikledning" }]} />
      <SoftwareJsonLd />

      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-44 md:pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-1.5 text-sm text-gray-400 mb-6">
              <Link
                href="/losningar"
                className="hover:text-gray-600 transition-colors"
              >
                Lösningar
              </Link>
              <ChevronRight size={14} />
              <span className="text-gray-600">Trafikledning</span>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1]">
              Mer tid för det som{" "}
              <span className="text-gray-400">kräver erfarenhet.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-500 max-w-2xl leading-relaxed">
              AI-driven trafikledning som automatiserar orderhantering,
              förartilldelning och fordonsplanering. Era trafikledare frigörs
              från det repetitiva och kan fokusera på relationer, undantag och
              de beslut som kräver omdöme.
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

      {/* Key takeaway — optimized for AI snippet extraction */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <aside className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 max-w-3xl">
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
              Sammanfattning
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>Automatiserad trafikledning</strong> innebär att en AI
              matchar förare, fordon och ordrar baserat på körkort,
              ADR-behörighet, kapacitet, position och tidsfönster —
              automatiskt. NOGO:s trafikledning minskar manuellt arbete med
              60% och frigör 3+ timmar per dag. Trafikledaren behåller
              kontrollen och fokuserar på undantag och relationer.
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-gray-600">
              <li>Automatisk förartilldelning på under 5 sekunder</li>
              <li>Regelefterlevnad: kör/vilotider, ADR, kundpreferenser</li>
              <li>Undantag flaggas — trafikledaren beslutar</li>
              <li>Integreras med ert befintliga TMS</li>
            </ul>
          </aside>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                value: "−60%",
                label: "Manuell tid",
                sub: "Mindre tid på repetitiva uppgifter",
              },
              {
                value: "3h+",
                label: "Sparad tid/dag",
                sub: "Per trafikledare i genomsnitt",
              },
              {
                value: "<5 sek",
                label: "Tilldelning",
                sub: "Förare + fordon + order",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-gray-50 rounded-2xl border border-gray-200 p-6 md:p-8 text-center"
              >
                <div className="text-3xl md:text-4xl font-semibold">
                  {stat.value}
                </div>
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
              Se automatisk tilldelning i praktiken
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Automationen matchar förare, fordon och ordrar baserat på alla era
              regler — på sekunder istället för timmar. Tryck på knappen för att
              se hur det fungerar.
            </p>
          </div>
          <DispatchMatchingDemo />
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-medium tracking-tight mb-4">
              Från order till tilldelning — i tre steg
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Automationen hanterar det repetitiva. Trafikledaren behåller
              kontrollen och fokuserar på det som kräver mänskligt omdöme.
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
                  <span className="text-xs font-mono text-gray-400">
                    {s.step}
                  </span>
                </div>
                <h3 className="text-lg font-medium mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {s.desc}
                </p>
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
              Automation som respekterar era regler
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Varje tilldelning verifieras mot era regler — körkort, ADR,
              kapacitet, kör- och vilotider, kundpreferenser och mer. Inga
              genvägar, inga undantag.
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
                <p className="text-sm text-gray-500 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Time savings calculator */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl font-medium tracking-tight mb-4">
              Hur mycket tid kan ni frigöra?
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Justera parametrarna för att beräkna hur mycket tid era
              trafikledare kan spara med automatiserad tilldelning.
            </p>
          </div>
          <TimeSavingsCalculator />
        </div>
      </section>

      {/* Human + automation section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-medium tracking-tight mb-6">
              Automationen hanterar det repetitiva — människan beslutar
            </h2>
            <div className="text-gray-500 text-sm leading-relaxed space-y-4">
              <p>
                Trafikledning handlar inte bara om att fördela ordrar. Det
                handlar om relationer med förare och kunder, om att hantera det
                oväntade och om att fatta beslut som kräver erfarenhet och
                omdöme.
              </p>
              <p>
                Vår automation tar hand om det som inte kräver mänskligt
                omdöme: tilldelning av standardordrar, matchning av förare mot
                fordon, verifiering av regler och kapacitetskontroll. Allt det
                som idag tar timmar men egentligen följer fasta mönster.
              </p>
              <p>
                Resultatet? Era trafikledare får tillbaka 3+ timmar varje dag.
                Tid de kan lägga på att bygga relationer, hantera undantag och
                göra det arbete som faktiskt kräver deras erfarenhet. Ni
                ersätter inte era trafikledare — ni ger dem superkrafter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <TrafikledningFAQ />

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-medium tracking-tight mb-4">
            Redo att frigöra era trafikledare?
          </h2>
          <p className="text-gray-500 mb-8">
            Boka ett kostnadsfritt strategisamtal. Vi visar hur automatiserad
            trafikledning fungerar med just era förutsättningar.
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
