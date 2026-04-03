import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blogg — Insikter för svenska transportföretag",
  description:
    "Guider, analyser och praktiska tips om trafikledning, digitalisering och AI-automation i åkeribranschen. Från NOGO Media.",
  alternates: { canonical: "/blogg" },
  openGraph: {
    title: "Blogg — Insikter för svenska transportföretag",
    description:
      "Guider, analyser och praktiska tips om trafikledning, digitalisering och AI-automation i åkeribranschen.",
    url: "/blogg",
  },
};

const articles = [
  {
    title: "AI Trafikledning 2026 – Så kan svenska åkerier spara miljoner",
    description:
      "AI-agenter för transportbranschen är inte längre framtidsteknik. Här går vi igenom hur svenska åkerier kan automatisera 85–95% av manuellt trafikledningsarbete — med ROI-räknare.",
    category: "AI & Automation",
    readTime: "12 min",
    slug: "ai-trafikledning-2026",
    featured: true,
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
      "Praktisk guide för små och medelstora åkerier som vill digitalisera. Steg-för-steg utan buzzwords.",
    category: "Guide",
    readTime: "7 min",
    slug: "digitalisering-akerinaring-var-borjar-man",
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
          <h2 className="text-2xl font-medium mb-3">Håll er uppdaterade</h2>
          <p className="text-gray-500 mb-8">
            Få nya artiklar och branschinsikter direkt i er inbox.
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="er@email.se"
              className="flex-1 px-4 py-3 rounded-full border border-gray-200 text-sm focus:outline-none focus:border-gray-400"
            />
            <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
              Prenumerera
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
