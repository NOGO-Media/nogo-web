import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  ArrowRight,
  Play,
  ChevronRight,
  Settings,
  Plug,
  RefreshCw,
  Shield,
  Clock,
  Layers,
  Workflow,
  Database,
  CheckCircle2,
} from "lucide-react";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import RelatedSolutions from "@/components/RelatedSolutions";

const IntegrationFlowDemo = dynamic(
  () => import("@/components/tms-integration/IntegrationFlowDemo"),
);
const CompatibilityChecker = dynamic(
  () => import("@/components/tms-integration/CompatibilityChecker"),
);
const TMSIntegrationFAQ = dynamic(
  () => import("@/components/tms-integration/TMSIntegrationFAQ"),
);

const SITE_URL = "https://nogomedia.se";

export const metadata: Metadata = {
  title: "TMS-integration för åkerier",
  description:
    "AI-automation direkt i ert befintliga TMS — Opter, AddSecure, Hogia, Barkfors eller egenutvecklat. Med eller utan API, utan migration eller stillestånd.",
  keywords: [
    "TMS-integration",
    "TMS-system åkeri",
    "TMS integration Sverige",
    "Opter integration",
    "AddSecure integration",
    "Hogia Transport integration",
    "Barkfors integration",
    "transporthanteringssystem",
    "automatisera TMS",
    "åkeri automation integration",
    "TMS API integration",
    "TMS integration utan API",
    "integrera äldre TMS system",
    "digitalisera åkeri",
    "transportplanering system",
    "TMS systemintegration",
    "automatisera orderhantering transport",
  ],
  alternates: { canonical: "/losningar/tms-integration" },
  openGraph: {
    title: "TMS-integration för åkerier | NOGO Media",
    description:
      "Integrera AI-automation direkt i ert befintliga TMS. Utan migration, omträning eller stillestånd.",
    url: "/losningar/tms-integration",
    type: "website",
    locale: "sv_SE",
    siteName: "NOGO Media",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NOGO Media — TMS-integration för åkerier",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TMS-integration för åkerier | NOGO Media",
    description:
      "Integrera AI-automation direkt i ert befintliga TMS. Utan migration eller stillestånd.",
    images: ["/og-image.png"],
  },
};

function SoftwareJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "NOGO TMS-integration",
    serviceType: "System integration",
    description:
      "AI-automation som integreras direkt i befintliga TMS-system. Opter, AddSecure, Hogia, Barkfors och fler. Ingen migration krävs.",
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
    icon: Plug,
    title: "Med eller utan API",
    desc: "Öppet API? Vi kopplar direkt. Stängt eller odokumenterat API? Vi går via databasanslutning, filimport (CSV/XML) eller skärmautomation. Inget system är för låst.",
  },
  {
    icon: RefreshCw,
    title: "Realtidssynk",
    desc: "Ordrar, fordon och statusar synkas i realtid. Inga manuella exporter, inga fördröjningar.",
  },
  {
    icon: Shield,
    title: "Säker datahantering",
    desc: "All data krypteras i transit och vila. Lagring i Sverige/EU. Fullständig GDPR-efterlevnad.",
  },
  {
    icon: Layers,
    title: "Flera system samtidigt",
    desc: "Kör flera TMS-integrationer parallellt. Perfekt för åkerier med olika system på olika depåer.",
  },
  {
    icon: Workflow,
    title: "Anpassade flöden",
    desc: "Konfigurera vilken data som synkas, hur ofta, och vilka regler som gäller. Ert sätt att arbeta, vår automation.",
  },
  {
    icon: Clock,
    title: "Snabb implementation",
    desc: "2–4 veckor från start till produktion. Vi testar i sandboxmiljö innan ni går live.",
  },
];

const steps = [
  {
    icon: Database,
    step: "01",
    title: "Kartläggning",
    desc: "Vi analyserar ert nuvarande TMS, era arbetsflöden och identifierar var automation ger störst effekt.",
  },
  {
    icon: Settings,
    step: "02",
    title: "Konfiguration",
    desc: "Vi bygger integrationen, konfigurerar dataflöden och testar i en säker sandboxmiljö med er verkliga data.",
  },
  {
    icon: CheckCircle2,
    step: "03",
    title: "Go live",
    desc: "Integrationen aktiveras i produktion. Vi övervakar och finjusterar tills allt rullar felfritt.",
  },
];

const supportedSystems = [
  "Opter",
  "AddSecure (Vehco)",
  "Hogia Transport",
  "Barkfors",
  "Winking / Wise Systems",
  "Egenutvecklade system",
  "REST / SOAP API",
  "Databasanslutning",
  "Filimport (CSV / XML / EDI)",
  "Skärmautomation",
];

export default function TMSIntegrationPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Lösningar", path: "/losningar" }, { name: "TMS-integration", path: "/losningar/tms-integration" }]} />
      <SoftwareJsonLd />

      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-44 md:pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-1.5 text-sm text-gray-500 mb-6">
              <Link href="/losningar" className="hover:text-gray-600 transition-colors">
                Lösningar
              </Link>
              <ChevronRight size={14} aria-hidden="true" />
              <span className="text-gray-600">TMS-integration</span>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1]">
              Automatisera utan att{" "}
              <span className="text-gray-400">byta system.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-500 max-w-2xl leading-relaxed">
              Vi bygger AI-automation som arbetar direkt i ert befintliga TMS —
              Opter, AddSecure, Hogia, Barkfors eller andra system. Med API
              eller utan — vi hittar alltid en väg in. Ingen migration, ingen
              omträning, inget stillestånd.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                Boka strategisamtal <ArrowRight size={16} aria-hidden="true" />
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
        </div>
      </section>

      {/* Key takeaway — optimized for AI snippet extraction */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <aside className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 max-w-3xl">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
              Sammanfattning
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>TMS-integration</strong> betyder att lägga ett lager av
              AI-automation ovanpå ert befintliga transporthanteringssystem.
              NOGO integrerar med Opter, AddSecure, Hogia, Barkfors och
              egenutvecklade system — med öppet API, stängt API eller helt
              utan API. Ingen migration, omträning eller stillestånd krävs.
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-gray-600">
              <li>Integration via API, databas, filimport (CSV/XML) eller skärmautomation</li>
              <li>Realtidssynkronisering av ordrar och fordon</li>
              <li>Implementation på 2–4 veckor</li>
              <li>Ni fortsätter arbeta i det system ni redan kan</li>
            </ul>
          </aside>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { value: "0", label: "Systembyte", sub: "Behåll ert befintliga TMS" },
              { value: "2–4 v", label: "Implementation", sub: "Från kartläggning till go live" },
              { value: "100%", label: "Realtidssynk", sub: "Ordrar och fordon i realtid" },
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
              Se hur integrationen fungerar
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Välj ert TMS-system och se hur data flödar mellan ert system och
              NOGO:s automationsplattform — i realtid.
            </p>
          </div>
          <IntegrationFlowDemo />
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-medium tracking-tight mb-4">
              Från kartläggning till go live
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Implementationen sker i tre steg. Ni kan använda ert TMS som
              vanligt under hela processen — ingen nertid.
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
              Byggt för svenska TMS-system
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Vi har erfarenhet av de system som svenska åkerier faktiskt
              använder — och bygger integrationer som fungerar i verkligheten.
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

      {/* Compatibility checker */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl font-medium tracking-tight mb-4">
              Stöder vi ert system?
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Vi integrerar med de vanligaste TMS-systemen i Sverige. Välj ert
              system för att se vilka funktioner som stöds.
            </p>
          </div>
          <CompatibilityChecker />
        </div>
      </section>

      {/* Supported systems (SEO text) */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-medium tracking-tight mb-6">
              TMS-system vi integrerar med
            </h2>
            <div className="flex flex-wrap gap-2 mb-8">
              {supportedSystems.map((sys) => (
                <span
                  key={sys}
                  className="bg-white border border-gray-200 px-4 py-2 rounded-full text-sm"
                >
                  {sys}
                </span>
              ))}
            </div>
            <div className="prose prose-gray max-w-none text-gray-500 text-sm leading-relaxed space-y-4">
              <p>
                De flesta svenska åkerier använder ett transporthanteringssystem
                (TMS) för att hantera ordrar, fordon och rutter. Problemet är
                att många av dessa system saknar avancerad automation —
                ruttoptimering, automatisk ordertilldelning och
                realtidsbeslutsstöd.
              </p>
              <p>
                NOGO:s integration löser det genom att lägga ett lager av
                AI-automation ovanpå ert befintliga system. Vi läser data från
                ert TMS, kör optimeringar och skickar tillbaka resultatet —
                utan att ni behöver byta plattform.
              </p>
              <p>
                Många åkerier oroar sig för att deras TMS saknar öppna
                API:er — eller har API:er som leverantören inte ger tillgång
                till. Det hindrar oss inte. Vi integrerar via REST, SOAP,
                databasanslutningar, filimport (CSV, XML, EDI) eller
                skärmautomation. Oavsett om ni kör Opter, AddSecure, Hogia
                Transport, Barkfors eller ett egenutvecklat system hittar vi en
                väg in — även när leverantören inte delar sitt API. Era
                trafikledare och förare fortsätter arbeta i det system de
                redan kan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <TMSIntegrationFAQ />

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-medium tracking-tight mb-4">
            Redo att automatisera ert TMS?
          </h2>
          <p className="text-gray-500 mb-8">
            Boka ett kostnadsfritt strategisamtal. Vi visar hur integrationen
            fungerar med just ert system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Boka strategisamtal <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center gap-2 border border-gray-200 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              <Play size={14} aria-hidden="true" />
              Testa demo
            </Link>
          </div>
          <div className="max-w-3xl mx-auto text-left">
            <RelatedSolutions slugs={["trafikledning", "ruttoptimering", "automatisk-orderhantering"]} />
          </div>
        </div>
      </section>
    </>
  );
}
