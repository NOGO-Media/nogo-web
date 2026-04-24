import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Search, Zap, Rocket, ShieldCheck, Users, Clock } from "lucide-react";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Så jobbar vi — från upptäckt till drift",
  description:
    "Så bygger NOGO AI-automation i svenska åkerier: upptäcktsmöte, pilot, produktion. 2–4 veckor till drift, utan systemmigration eller avtalsbindning.",
  alternates: { canonical: "/sa-jobbar-vi" },
  openGraph: {
    type: "website",
    title: "Så jobbar vi — från upptäckt till drift | NOGO Media",
    description:
      "NOGO:s process för att bygga AI-automation i åkeriers befintliga TMS. Tre faser, 2–4 veckor till drift, pilot utan bindning.",
    url: "/sa-jobbar-vi",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "NOGO Media — Så jobbar vi" }],
  },
};

const phases = [
  {
    icon: Search,
    number: "01",
    title: "Upptäcktsmöte",
    duration: "30–45 min",
    summary:
      "Vi förstår ert flöde innan vi föreslår något. Ingen säljpitch.",
    bullets: [
      "Genomgång av nuvarande TMS, datakällor och manuella moment",
      "Identifierar det flöde där automation ger tydligast ROI",
      "Dokumenterar era integrationskrav och tekniska begränsningar",
      "Resultat: konkret förslag på pilot inom 1 vecka",
    ],
  },
  {
    icon: Zap,
    number: "02",
    title: "Pilot",
    duration: "2–4 veckor",
    summary:
      "Ett avgränsat flöde byggs skarpt i er produktion. Utan avtalsbindning.",
    bullets: [
      "Vi bygger automation kopplad direkt till ert TMS",
      "Er trafikledning testar i riktig drift, inte sandbox",
      "Veckovis uppföljning mot mätbara mål (tidsbesparing, fyllnadsgrad, ruttkvalitet)",
      "Resultat: tydlig ROI-beräkning innan ni bestämmer nästa steg",
    ],
  },
  {
    icon: Rocket,
    number: "03",
    title: "Produktion",
    duration: "Löpande",
    summary:
      "Om piloten levererar bygger vi ut till fler flöden — i er takt.",
    bullets: [
      "Utrullning per fordonsgrupp, kund eller geografi",
      "Kontinuerlig optimering baserad på operationsdata",
      "Månatliga avstämningar på KPI:er ni själva valt",
      "Nya flöden kan läggas till när behovet uppstår",
    ],
  },
];

const principles = [
  {
    icon: ShieldCheck,
    title: "Ingen systemmigration",
    body:
      "Ni behåller ert TMS (Opter, AddSecure, Hogia, Barkfors m.fl.). Automationen bor ovanpå. Misslyckas ett NOGO-flöde går TMS tillbaka till manuell drift direkt.",
  },
  {
    icon: Users,
    title: "Er personal i förarsätet",
    body:
      "Trafikledare och chaufförer är med från dag 1. Vi bygger automationen runt deras arbetssätt — inte tvärtom. Beslutsrätt stannar hos er.",
  },
  {
    icon: Clock,
    title: "Snabb feedback",
    body:
      "Veckoavstämningar under pilot, dagliga justeringar om något inte fungerar. Ni ska märka effekt inom första 14 dagarna — annars pausar vi och omprövar.",
  },
];

export default function SaJobbarViPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Så jobbar vi", path: "/sa-jobbar-vi" }]} />

      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-44 md:pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-gray-500 mb-4">Så jobbar vi</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1]">
              Från upptäckt till produktion{" "}
              <span className="text-gray-400">på 2–4 veckor.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-500 max-w-2xl leading-relaxed">
              Vi bygger automation som lever i ert befintliga TMS. Ingen
              migration, ingen avtalsbindning under piloten, inga
              transformationsprojekt på kvartalsbasis. Tre faser — så att ni
              alltid vet var ni står.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                Boka upptäcktsmöte <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link
                href="/losningar"
                className="inline-flex items-center justify-center gap-2 border border-gray-200 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                Se våra lösningar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {phases.map((phase) => {
              const Icon = phase.icon;
              return (
                <div
                  key={phase.number}
                  className="rounded-2xl border border-gray-200 bg-white p-8 flex flex-col"
                >
                  <div className="flex items-center justify-between mb-6">
                    <Icon size={22} className="text-black" aria-hidden="true" />
                    <span className="text-xs font-medium text-gray-400">{phase.number}</span>
                  </div>
                  <h2 className="text-xl font-medium mb-1">{phase.title}</h2>
                  <p className="text-xs font-medium text-gray-400 mb-4">{phase.duration}</p>
                  <p className="text-sm text-gray-500 mb-5 leading-relaxed">{phase.summary}</p>
                  <ul className="space-y-2 text-sm text-gray-700 mt-auto">
                    {phase.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-gray-300 mt-1.5" aria-hidden="true">
                          •
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
              Principer som gör det tryggt att testa
            </h2>
            <p className="mt-4 text-gray-500">
              Vi har byggt processen så att risken att prova är minimal — och
              att ni alltid behåller kontrollen.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {principles.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="rounded-2xl bg-white border border-gray-200 p-7">
                  <Icon size={22} className="text-black mb-4" aria-hidden="true" />
                  <h3 className="font-medium mb-2">{p.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{p.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Typical timeline */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-10">
            Så ser en typisk tidslinje ut
          </h2>
          <div className="space-y-6">
            {[
              { week: "Vecka 0", item: "Upptäcktsmöte och förslag på avgränsat pilotflöde." },
              { week: "Vecka 1", item: "Uppkoppling mot TMS och datakällor. Tekniska förberedelser." },
              { week: "Vecka 2–3", item: "Automationen byggs och testas mot skarp produktionsdata." },
              { week: "Vecka 3–4", item: "Er trafikledning börjar köra skarpt med löpande uppföljning." },
              { week: "Vecka 4+", item: "Resultatmöte: tydlig ROI-siffra. Beslut om utrullning." },
            ].map((row, i) => (
              <div key={i} className="flex gap-6 pb-6 border-b border-gray-100 last:border-b-0">
                <div className="w-24 flex-shrink-0 text-sm font-medium text-gray-400">
                  {row.week}
                </div>
                <div className="text-gray-700">{row.item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-medium tracking-tight mb-4">
            Vill ni se hur piloten skulle se ut hos er?
          </h2>
          <p className="text-gray-500 mb-8">
            Vi bokar in 30 minuter där vi tittar på ert flöde och föreslår den
            mest konkreta pilot-scopen. Inget kostnadsförslag förrän ni vill ha
            det.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 bg-black text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Boka upptäcktsmöte <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
