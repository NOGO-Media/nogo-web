import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Blogg — Insikter för svenska transportföretag",
  description:
    "Guider, analyser och praktiska tips om trafikledning, digitalisering och AI-automation i åkeribranschen. Från NOGO Media.",
  keywords: [
    "åkeri blogg",
    "trafikledning",
    "ruttoptimering",
    "digitalisering åkeri",
    "AI transport",
  ],
  alternates: { canonical: "/blogg" },
  openGraph: {
    type: "website",
    title: "Blogg — Insikter för svenska transportföretag",
    description:
      "Guider, analyser och praktiska tips om trafikledning, digitalisering och AI-automation i åkeribranschen.",
    url: "/blogg",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "NOGO Media — Blogg" }],
  },
};

const articles = [
  {
    title: "AI Trafikledning 2026 – Så kan svenska åkerier spara miljoner",
    description:
      "AI-agenter för transportbranschen är inte längre framtidsteknik. Här går vi igenom hur svenska åkerier kan automatisera 85–95% av manuellt trafikledningsarbete — med ROI-räknare.",
    category: "AI & Automation",
    readTime: "12 min",
    href: "/artiklar/ai-trafikledning-2026",
    featured: true,
  },
  {
    title: "AI-agenter för transport 2026 — vad de kan och inte kan",
    description:
      "Ärlig genomgång av vad AI-agenter faktiskt gör (och inte gör) i svenska åkerier 2026. Evidensbaserade användningsfall, gränser och en utvärderings­checklista.",
    category: "AI & Automation",
    readTime: "9 min",
    href: "/artiklar/ai-agenter-for-transport-2026",
  },
  {
    title: "Vad kostar manuell transportplanering egentligen?",
    description:
      "En trafikledare lägger 12 min per bokning. Med 40 bokningar/dag blir det 8 timmar. Vi räknar på vad manuell planering kostar ert åkeri.",
    category: "Kostnadsanalys",
    readTime: "8 min",
    slug: "vad-kostar-manuell-transportplanering",
  },
  {
    title: "TMS-system 2026: Komplett guide för svenska åkerier",
    description:
      "Vad är ett TMS? Vilka system finns i Sverige? Opter, AddSecure, Cargoson — vi jämför funktioner, pris och när du behöver ett.",
    category: "Guide",
    readTime: "11 min",
    slug: "tms-system-2026-guide-svenska-akerier",
  },
  {
    title: "Digitalisering av åkeri i siffror — så långt har svenska åkerier kommit 2026",
    description:
      "Nyckeltal, mognadsnivåer och branschjämförelse: var står svenska åkerier i digitaliseringen? Benchmarka ert åkeri med konkreta KPI:er.",
    category: "Branschanalys",
    readTime: "10 min",
    slug: "digitalisering-akeri-2026",
  },
  {
    title: "Digitalisering i åkerinäringen — var börjar man?",
    description:
      "Praktisk guide för små och medelstora åkerier som vill digitalisera. Steg-för-steg utan krångel.",
    category: "Guide",
    readTime: "7 min",
    href: "/artiklar/digitalisering-akerinaring-var-borjar-man",
  },
  {
    title: "Minska tomkörningar — 5 konkreta åtgärder",
    description:
      "17% av alla lastbilskilometer i Sverige körs tomma. Här är fem praktiska sätt att minska tomkörningarna i ert åkeri.",
    category: "Praktiska tips",
    readTime: "5 min",
    href: "/artiklar/minska-tomkorningar-konkreta-atgarder",
  },
  {
    title: "Backhaul och returlass — automatiserad matchning 2026",
    description:
      "Från 17 % tomma km mot 10 %. Så bygger svenska åkerier automatiserad backhaul-matchning i tre nivåer — med data ni redan har.",
    category: "Operations",
    readTime: "6 min",
    href: "/artiklar/backhaul-returlass-automatiserad-matchning",
  },
  {
    title: "Trafikledarbrist i Sverige — hur teknik kan avlasta",
    description:
      "Det blir allt svårare att rekrytera trafikledare. Automation kan avlasta befintlig personal och minska beroendet av nyanställningar.",
    category: "Branschanalys",
    readTime: "6 min",
    href: "/artiklar/trafikledarbrist-sverige-teknik-avlastar",
  },
  {
    title: "Så räknar du ROI på automation i transport",
    description:
      "En konkret kalkylmodell för att räkna ut vad automation kan spara er — med siffror ni kan sätta in själva.",
    category: "Kostnadsanalys",
    readTime: "8 min",
    href: "/artiklar/roi-automation-transport-kalkyl",
  },
  {
    title: "eFTI och digitala fraktdokument — är ditt åkeri redo?",
    description:
      "EU kräver digitala fraktdokument senast 2027. Här är vad ni behöver veta och göra redan nu.",
    category: "Regelverk",
    readTime: "5 min",
    href: "/artiklar/efti-digitala-fraktdokument-akeri",
  },
  {
    title: "CSRD och CO2-rapportering för åkerier 2026",
    description:
      "CSRD påverkar svenska åkerier från 2025-2028. Guide om Scope 1-3, datakrav och hur automation gör rapporteringen hanterbar.",
    category: "Regelverk",
    readTime: "8 min",
    href: "/artiklar/csrd-co2-rapportering-akeri",
  },
  {
    title: "Kör- och vilotider — automatiserad efterlevnad i TMS",
    description:
      "En missad rast kan kosta 40 000 kr. Så håller svenska åkerier ordning på EU:s kör- och vilotider med automation — och vad som ändras 2026.",
    category: "Regelverk",
    readTime: "7 min",
    href: "/artiklar/kor-vilotider-automatisera-efterlevnad",
  },
  {
    title: "Opter, AddSecure eller eget? Så väljer du TMS",
    description:
      "En neutral jämförelse av TMS-system på den svenska marknaden — styrkor, svagheter och vad som passar vilket åkeri.",
    category: "Jämförelse",
    readTime: "9 min",
    href: "/artiklar/tms-system-jamforelse-opter-addsecure",
  },
];

export default function BloggPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Blogg", path: "/blogg" }]} />
      <section className="pt-32 pb-16 md:pt-44 md:pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-gray-400 mb-4">Blogg</p>
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.1]">
              Insikter för svenska{" "}
              <span className="text-gray-400">transportföretag.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-500 leading-relaxed">
              Guider, analyser och praktiska tips om trafikledning,
              digitalisering och automation i åkeribranschen.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {articles.map((article) => {
              const href = "href" in article
                ? (article as { href: string }).href
                : "slug" in article
                  ? `/blogg/${(article as { slug: string }).slug}`
                  : null;
              const inner = (
                <>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-medium bg-white border border-gray-200 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-400">
                    {article.readTime}
                  </span>
                </div>
                <h2 className="text-xl font-medium mb-3 group-hover:text-gray-700 transition-colors">
                  {article.title}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">
                  {article.description}
                </p>
                <div className="flex items-center gap-1.5 text-sm font-medium text-gray-900 group-hover:gap-2.5 transition-all">
                  Läs artikel <ArrowRight size={14} />
                </div>
                </>
              );
              const className = "group bg-gray-50 rounded-2xl p-8 border border-transparent hover:border-gray-200 hover:shadow-sm transition-all cursor-pointer block";
              return href ? (
                <Link key={article.title} href={href} className={className}>{inner}</Link>
              ) : (
                <div key={article.title} className={className}>{inner}</div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-medium mb-3">
            Vill ni höra om nya artiklar?
          </h2>
          <p className="text-gray-500 mb-8">
            Hör av er så lägger vi er på listan för branschinsikter direkt i
            inboxen.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Kontakta oss <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
