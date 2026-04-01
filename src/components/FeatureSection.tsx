import {
  Route,
  Clock,
  Truck,
  BarChart3,
  Zap,
  Shield,
  Users,
  Settings,
  FileText,
  TrendingUp,
  MapPin,
  Bell,
} from "lucide-react";

/* ───────────────────────────── Feature Grid 1 ─────────────────────────── */

const features1 = [
  {
    icon: Route,
    title: "Ruttoptimering",
    description:
      "Automatisk beräkning av optimala rutter för hela flottan. Minskar körsträckan och ökar antalet leveranser per dag.",
  },
  {
    icon: Clock,
    title: "Automatisk orderhantering",
    description:
      "Inkommande bokningar fördelas automatiskt till rätt förare och fordon baserat på kapacitet, plats och regler.",
  },
  {
    icon: Truck,
    title: "Fordonstilldelning",
    description:
      "Matcha rätt fordon till rätt uppdrag — med hänsyn till ADR, viktklass, utrustning och kör- och vilotider.",
  },
  {
    icon: BarChart3,
    title: "Realtidsöverblick",
    description:
      "Se hela er flotta i realtid. Fyllnadsgrad, leveransstatus och avvikelser — allt i en vy.",
  },
];

export function FeatureGrid1() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-gray-400 mb-4">
            Automation som anpassar sig
          </p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
            Bygg automation anpassat för ert åkeri.
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Varje åkeri är unikt. Vi bygger automation som passar era processer,
            era system och ert sätt att arbeta.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {features1.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-gray-50 rounded-2xl p-8 hover:bg-gray-100/80 transition-colors border border-transparent hover:border-gray-200"
            >
              <div className="w-10 h-10 bg-white rounded-xl border border-gray-200 flex items-center justify-center mb-5">
                <feature.icon size={20} className="text-gray-700" />
              </div>
              <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────── Feature Section - Realtime ──────────────────── */

export function FeatureRealtime() {
  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-medium text-gray-400 mb-4">
              Realtidsdata
            </p>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
              Trafikledning i realtid kräver realtidsdata.
            </h2>
            <p className="mt-4 text-gray-500 text-lg leading-relaxed">
              Vår automation arbetar med live-data från ert TMS, era förare och
              era kunder. Beslut fattas på sekunder istället för minuter.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Automatisk uppdatering av leveransstatus",
                "Positionsdata integrerat med orderflödet",
                "Proaktiva varningar vid avvikelser",
                "Historisk data för analys och optimering",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center mt-0.5 shrink-0">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mock data visual */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <div className="space-y-3">
              {[
                { time: "14:32", event: "ORD-2847 tilldelad Erik L.", type: "success" },
                { time: "14:31", event: "Rutt optimerad: Sthlm → Gbg (−23 km)", type: "info" },
                { time: "14:30", event: "Ny bokning mottagen: ORD-2852", type: "default" },
                { time: "14:28", event: "Maria K. levererade ORD-2841", type: "success" },
                { time: "14:25", event: "Avvikelse: ORD-2849 saknar förare", type: "warning" },
                { time: "14:22", event: "Automatisk omplanering genomförd", type: "info" },
              ].map((entry, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 py-2 border-b border-gray-50 last:border-0"
                >
                  <span className="text-xs text-gray-400 font-mono w-12 shrink-0 pt-0.5">
                    {entry.time}
                  </span>
                  <div
                    className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${
                      entry.type === "success"
                        ? "bg-green-500"
                        : entry.type === "info"
                          ? "bg-blue-500"
                          : entry.type === "warning"
                            ? "bg-amber-500"
                            : "bg-gray-400"
                    }`}
                  />
                  <span className="text-sm text-gray-600">{entry.event}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────── Feature Section - Team ──────────────────────── */

export function FeatureTeam() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-medium text-gray-400 mb-4">
            Designad för hela teamet
          </p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
            Trafikledare, förare och ledning — alla i samma system.
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Automationen avlastar trafikledarna. Förarna får tydligare
            instruktioner. Ledningen får full överblick.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Users,
              title: "Trafikledare",
              description:
                "Automatisk matchning av förare och fordon. Era trafikledare kan fokusera på det som kräver erfarenhet och omdöme.",
            },
            {
              icon: Truck,
              title: "Förare",
              description:
                "Körordrar direkt i mobilen. Optimerade rutter, tydliga instruktioner och realtidsuppdateringar.",
            },
            {
              icon: TrendingUp,
              title: "Ledning",
              description:
                "Överblick i realtid. Fyllnadsgrad, beläggning, kostnader per uppdrag — data för bättre beslut.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="text-center p-8 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all"
            >
              <div className="w-12 h-12 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-center mx-auto mb-5">
                <card.icon size={22} className="text-gray-700" />
              </div>
              <h3 className="text-lg font-medium mb-2">{card.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────── Feature Section - Security ──────────────────── */

export function FeatureSecurity() {
  return (
    <section className="py-24 md:py-32 bg-gray-950 text-white dark-grid-pattern">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-medium text-gray-500 mb-4">
            Säkerhet & regelefterlevnad
          </p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
            Skala tryggt.
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            GDPR-kompatibelt, svensk datalagring, full spårbarhet. Era
            kunders data hanteras med samma omsorg som era transporter.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-4 gap-6">
          {[
            { icon: Shield, title: "GDPR-kompatibelt", desc: "All data lagras i Sverige/EU" },
            { icon: FileText, title: "eFTI-redo", desc: "Förberedda för EU:s krav 2027" },
            { icon: Settings, title: "Full spårbarhet", desc: "Varje beslut loggas och kan granskas" },
            { icon: Bell, title: "Proaktiva varningar", desc: "Kör- och vilotider, ADR, viktklass" },
          ].map((item) => (
            <div
              key={item.title}
              className="text-center p-6"
            >
              <div className="w-12 h-12 bg-gray-800 rounded-xl border border-gray-700 flex items-center justify-center mx-auto mb-4">
                <item.icon size={20} className="text-gray-300" />
              </div>
              <h3 className="font-medium mb-1">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────── Integration Section ──────────────────────── */

export function IntegrationSection() {
  const integrations = [
    { name: "Opter", desc: "Marknadsledande TMS i Norden" },
    { name: "AddSecure", desc: "Fleet management & TMS" },
    { name: "Hogia", desc: "Transport & logistik" },
    { name: "Cargoson", desc: "Fraktbokning & jämförelse" },
    { name: "Fortnox", desc: "Ekonomi & fakturering" },
    { name: "Eget system", desc: "API-integration möjlig" },
  ];

  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-medium text-gray-400 mb-4">
            Integrationer
          </p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
            Fungerar med ert befintliga TMS.
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Ni behöver inte byta system. Vi bygger automation som arbetar
            direkt i det TMS ni redan har.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4">
          {integrations.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:border-gray-300 hover:shadow-sm transition-all"
            >
              <div className="text-lg font-medium mb-1">{item.name}</div>
              <div className="text-sm text-gray-500">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────── More Features Grid ──────────────────────── */

export function MoreFeatures() {
  const extras = [
    { icon: Zap, title: "Snabb implementation", desc: "Igång på veckor, inte månader" },
    { icon: MapPin, title: "Lokal närvaro", desc: "Baserade i Norrköping, jobbar med hela Sverige" },
    { icon: BarChart3, title: "Mätbar ROI", desc: "Se resultat i er egen data inom 30 dagar" },
    { icon: Settings, title: "Anpassningsbart", desc: "Er process, era regler, er automation" },
    { icon: Shield, title: "Svensk datalagring", desc: "All data stannar inom EU/Sverige" },
    { icon: Users, title: "Dedikerad support", desc: "Ni pratar med människor som förstår transport" },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
            Och mycket mer...
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Allt ni behöver för att effektivisera transportplaneringen.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {extras.map((item) => (
            <div key={item.title} className="text-center">
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <item.icon size={18} className="text-gray-600" />
              </div>
              <h3 className="font-medium text-sm mb-1">{item.title}</h3>
              <p className="text-xs text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
