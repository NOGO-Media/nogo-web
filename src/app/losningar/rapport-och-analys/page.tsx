import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  ArrowRight,
  Play,
  ChevronRight,
  BarChart3,
  PieChart,
  TrendingUp,
  AlertTriangle,
  FileSpreadsheet,
  Layers,
  MousePointerClick,
  RotateCcw,
  Truck,
  MapPin,
  Clock,
  Package,
  ClipboardList,
  Zap,
  CheckCircle2,
} from "lucide-react";

const AnalyticsDashboardDemo = dynamic(
  () => import("@/components/rapport-analys/AnalyticsDashboardDemo"),
);
const RapportAnalysFAQ = dynamic(
  () => import("@/components/rapport-analys/RapportAnalysFAQ"),
);

const SITE_URL = "https://nogomedia.se";

export const metadata: Metadata = {
  title:
    "Rapport & analys för åkerier — realtidsstatistik för ruttoptimering | NOGO Media",
  description:
    "AI-driven rapport och analys för transportbolag i Sverige. Fyllnadsgrad, arbetstid, returflöden, linjeanalys och ekipagestatistik — i realtid, direkt i planeringsgränssnittet.",
  keywords: [
    "ruttoptimering",
    "transportplanering",
    "åkeri statistik",
    "fyllnadsgrad",
    "lastbilsplanering",
    "AI transport",
    "partigods",
    "trafikledning",
    "returoptimering",
    "ekipageanalys",
    "arbetstidskontroll",
    "ruttplanering Sverige",
  ],
  alternates: { canonical: "/losningar/rapport-och-analys" },
  openGraph: {
    title:
      "Rapport & analys — realtidsstatistik för ruttoptimering | NOGO Media",
    description:
      "AI-driven rapport och analys för transportbolag. Fyllnadsgrad, arbetstid, returflöden och linjeanalys — i realtid.",
    url: "/losningar/rapport-och-analys",
    type: "website",
    locale: "sv_SE",
    siteName: "NOGO Media",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NOGO Media — Rapport & analys i realtid",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Rapport & analys — realtidsstatistik för ruttoptimering | NOGO Media",
    description:
      "AI-driven rapport och analys för transportbolag. Fyllnadsgrad, arbetstid, returflöden och linjeanalys.",
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
        name: "Rapport & analys",
        item: `${SITE_URL}/losningar/rapport-och-analys`,
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
    name: "NOGO Rapport & Analys",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "AI-driven rapport och analys för transportbolag i Sverige. Fyllnadsgrad, arbetstid, returflöden, linjeanalys och ekipagestatistik — i realtid, direkt i planeringsgränssnittet.",
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

const analyticViews = [
  {
    icon: BarChart3,
    title: "Översikt",
    desc: "Alla nyckeltal på en sida — ekipage, fyllnad, arbetstid, övertid, körsträcka och godsflöde. Med stapeldiagram, donut och orderstatus.",
  },
  {
    icon: Package,
    title: "Ut / In — godsflödesbalans",
    desc: "Balansen mellan utgående leveranser och returgods. Nio nyckeltal, komplett passtabell och returdestinationsanalys.",
  },
  {
    icon: Truck,
    title: "Ekipage — flottutnyttjande",
    desc: "Hur flottan faktiskt används. Konfigurationstyper, fyllnad per typ, flak och släp i bruk kontra tillgängliga.",
  },
  {
    icon: PieChart,
    title: "Fyllnad — kapacitetsutnyttjande",
    desc: "Djupdykning i fyllnadsgrad per pass. Fem intervall, klickbara staplar, rödmarkering av pass under 50%.",
  },
  {
    icon: Clock,
    title: "Arbetstid — tid och kapacitet",
    desc: "Körtid, hanteringstid, ledig tid. Visuell tidsuppdelning, extremvärden och fördelning per tidsintervall.",
  },
  {
    icon: RotateCcw,
    title: "Retur — returgodsoptimering",
    desc: "Allt om inkommande flöden. Pass med och utan returgods, returdestinationer och outnyttjad kapacitet.",
  },
  {
    icon: TrendingUp,
    title: "Linjer — prestanda per rutt",
    desc: "Aggregerad statistik per linjekod. Fyllnad, körsträcka, returandel — ovärderligt för strategiska beslut.",
  },
  {
    icon: MapPin,
    title: "Destinationer — geografisk analys",
    desc: "Alla orter i planen med ut- och in-frekvens. Avslöjar obalanser och koncentrationer i godsvolym.",
  },
  {
    icon: Layers,
    title: "Multitrip — extra kapacitet",
    desc: "Pass som hinner flera turer. I praktiken gratis kapacitet — bilen och föraren är redan ute.",
  },
  {
    icon: ClipboardList,
    title: "Alla pass — komplett detaljvy",
    desc: "Samtliga pass i en tabell med 13 kolumner. Expanderbar med full detalj per pass, stopp och order.",
  },
];

const warnings = [
  {
    icon: Clock,
    title: "Övertidsvarning",
    desc: "Flaggar pass som överskrider arbetstidsgränsen med passnummer, linje och exakt överskridande.",
    accent: "text-red-500",
  },
  {
    icon: AlertTriangle,
    title: "Låg fyllnad",
    desc: "Identifierar pass under 50% fyllnad med linje och exakt fyllnadsgrad.",
    accent: "text-amber-500",
  },
  {
    icon: Package,
    title: "Shipment-konflikt",
    desc: "Upptäcker ordrar inom samma shipment som hamnar på olika pass eller saknas.",
    accent: "text-orange-500",
  },
  {
    icon: FileSpreadsheet,
    title: "Dubblettordrar",
    desc: "Identifierar ordrar som ser identiska ut i underlaget och flaggar för manuell kontroll.",
    accent: "text-blue-500",
  },
];

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Optimera planen",
    desc: "Ladda in ert orderunderlag och kör AI-optimeringen. Statistiken genereras automatiskt i samma ögonblick.",
  },
  {
    icon: Zap,
    step: "02",
    title: "Analysera och justera",
    desc: "Granska nyckeltal, klicka dig ner i detaljerna och justera planen direkt. Agera innan bilarna lämnar terminalen.",
  },
  {
    icon: CheckCircle2,
    step: "03",
    title: "Exportera och rapportera",
    desc: "Exportera komplett statistik som Excel med tio flikar. Perfekt för ledningsrapporter och uppföljning.",
  },
];

export default function RapportOchAnalysPage() {
  return (
    <>
      <BreadcrumbJsonLd />
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
              <span className="text-gray-600">Rapport & analys</span>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1]">
              Full insyn i din{" "}
              <span className="text-gray-400">transportplanering.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-500 max-w-2xl leading-relaxed">
              Rapport- och analysverktyg inbyggda direkt i ruttoptimeringen.
              Fyllnadsgrad, arbetstid, returflöden, linjeanalys och
              ekipagestatistik — i realtid, utan separat BI-lösning.
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

      {/* Key takeaway */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <aside className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 max-w-3xl">
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
              Sammanfattning
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>Rapport och analys i realtid</strong> innebär att
              trafikledaren ser fyllnadsgrad, arbetstid, returflöden och
              linjeprestation i samma ögonblick som planen optimeras — utan
              separat BI-verktyg och utan Excel-export. Tio dedikerade vyer med
              över 50 nyckeltal, alla klickbara, alla exporterbara.
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-gray-600">
              <li>Tio analysvyer — från översikt till detaljnivå</li>
              <li>Klickbara nyckeltal med drill-down till enskilda pass</li>
              <li>Automatiska varningar: övertid, låg fyllnad, konflikter</li>
              <li>Excel-export med tio flikar — ett klick</li>
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
                value: "10",
                label: "Analysvyer",
                sub: "Komplett bild av din drift",
              },
              {
                value: "50+",
                label: "Nyckeltal",
                sub: "Alla klickbara med drill-down",
              },
              {
                value: "1 klick",
                label: "Excel-export",
                sub: "Tio flikar, direkt",
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

      {/* Interactive dashboard demo */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl font-medium tracking-tight mb-4">
              Se analysdashboarden i praktiken
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Utforska sex av de tio analysvyerna. Klicka mellan flikarna för att
              se nyckeltal, diagram och tabeller — precis som i det riktiga
              gränssnittet.
            </p>
          </div>
          <AnalyticsDashboardDemo />
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-medium tracking-tight mb-4">
              Från optimering till insikt — i tre steg
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Statistiken genereras automatiskt. Trafikledaren analyserar, agerar
              och exporterar — allt i samma gränssnitt.
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

      {/* Ten views grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-medium tracking-tight mb-4">
              Tio analysvyer — en komplett bild av din drift
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Varje vy har egna nyckeltal, tabeller och diagram. Alla siffror är
              klickbara — klicka på ett nyckeltal och du ser exakt vilka pass som
              ligger bakom siffran.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {analyticViews.map((v) => (
              <div
                key={v.title}
                className="bg-gray-50 rounded-xl border border-gray-200 p-6"
              >
                <v.icon size={20} className="text-gray-500 mb-4" />
                <h3 className="font-medium mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactivity section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-medium tracking-tight mb-6">
                Interaktivitet — inte bara siffror
              </h2>
              <div className="text-gray-500 text-sm leading-relaxed space-y-4">
                <p>
                  Systemet är byggt för att trafikledaren ska kunna gräva i datan
                  utan att lämna gränssnittet.
                </p>
                <p>
                  Varje nyckeltal är klickbart. Klicka på &quot;pass med
                  övertid&quot; och en drill-down-panel öppnas som listar exakt
                  vilka pass det gäller med linje, ekipage, fyllnad, tid och
                  sträcka.
                </p>
                <p>
                  Tabellrader är expanderbara. Klicka på ett pass och en
                  detaljpanel fälls ut med fullständig uppdelning:
                  leverans-ordrar, returordrar, körtid, hanteringstid och
                  körsträcka.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                {
                  icon: MousePointerClick,
                  title: "Klickbara nyckeltal",
                  desc: "Tryck på valfritt nyckeltal för att se exakt vilka pass som ligger bakom siffran.",
                },
                {
                  icon: Layers,
                  title: "Expanderbara rader",
                  desc: "Klicka på ett pass i tabellen och se full detalj med ordrar, destinationer och tider.",
                },
                {
                  icon: FileSpreadsheet,
                  title: "Excel-export",
                  desc: "Exportera komplett statistik som Excel med tio flikar — ett klick, redo för ledningsrapporter.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-xl border border-gray-200 p-5 flex gap-4"
                >
                  <div className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
                    <item.icon size={16} className="text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium mb-1">{item.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Automatic warnings */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-medium tracking-tight mb-4">
              Automatiska varningar — agera innan det kostar
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Systemet identifierar problem och flaggar dem direkt i
              planeringsvyn. Varje varning är klickbar och leder till det
              berörda passet.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {warnings.map((w) => (
              <div
                key={w.title}
                className="bg-gray-50 rounded-xl border border-gray-200 p-6"
              >
                <w.icon size={20} className={`${w.accent} mb-4`} />
                <h3 className="font-medium mb-2">{w.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {w.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Realtime vs post-hoc */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-medium tracking-tight mb-6">
              Realtidsanalys slår efterhandsrapportering
            </h2>
            <div className="text-gray-500 text-sm leading-relaxed space-y-4">
              <p>
                Traditionella transportbolag sammanställer statistik i efterhand
                — ofta veckovis eller månadsvis. Problemet är att ineffektiviteter
                redan har kostat pengar innan de syns i rapporten.
              </p>
              <p>
                Med analys som genereras i samma ögonblick som planen optimeras
                kan trafikledaren agera direkt. Ser du att fyllnaden på en linje
                ligger på 62%? Justera innan bilen lämnar terminalen. Ser du att
                tre pass saknar returgods? Fördela om innan det blir
                tomkörningar.
              </p>
              <p>
                Det är skillnaden mellan att reagera och att styra.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <RapportAnalysFAQ />

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-medium tracking-tight mb-4">
            Redo att se era siffror i realtid?
          </h2>
          <p className="text-gray-500 mb-8">
            Boka ett kostnadsfritt strategisamtal på 30 minuter. Vi kartlägger
            era processer och visar hur datan kan se ut för just ert flöde.
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
