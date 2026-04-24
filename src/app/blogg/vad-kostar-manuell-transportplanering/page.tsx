import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import RelatedSolutions from "@/components/RelatedSolutions";

export const metadata: Metadata = {
  title: "Vad kostar manuell transportplanering?",
  description:
    "Räkneexempel för svenska åkerier: lön för trafikledare, total arbetsgivarkostnad, kostnad per bokning och effekten av tomkörning.",
  alternates: { canonical: "/blogg/vad-kostar-manuell-transportplanering" },
  openGraph: {
    type: "article",
    title: "Vad kostar manuell transportplanering?",
    description:
      "Så mycket kostar manuell transportplanering i praktiken: från lönedata till kostnad per bokning.",
    url: "/blogg/vad-kostar-manuell-transportplanering",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "NOGO Media — Vad kostar manuell transportplanering" }],
    publishedTime: "2026-04-02T00:00:00Z",
    authors: ["NOGO Media AB"],
    tags: ["transportplanering", "trafikledare", "åkeri", "kostnad"],
  },
};

const costRows = [
  ["Bruttolön", "40 200 kr"],
  ["Semesterlön (12 %)", "4 824 kr"],
  ["Avtalsförsäkringar (~5 %)", "2 251 kr"],
  ["Arbetsgivaravgift (31,42 %)", "14 852 kr"],
  ["Särskild löneskatt på pension", "~440 kr"],
  ["Total arbetsgivarkostnad", "~62 567 kr/mån"],
];

export default function ManuellTransportplaneringArticle() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Blogg", path: "/blogg" },
          { name: "Vad kostar manuell transportplanering", path: "/blogg/vad-kostar-manuell-transportplanering" },
        ]}
      />
      <ArticleJsonLd
        title="Vad kostar manuell transportplanering egentligen?"
        description="Räkneexempel för svenska åkerier: lön, arbetsgivarkostnad, kostnad per bokning och effekten av tomkörning."
        url="/blogg/vad-kostar-manuell-transportplanering"
        publishedTime="2026-04-02T00:00:00Z"
        tags={["transportplanering", "trafikledare", "åkeri", "kostnad"]}
      />
      <article className="pt-32 pb-24 md:pt-44">
      <div className="max-w-3xl mx-auto px-6">
        <Link
          href="/blogg"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-black transition-colors mb-8"
        >
          <ArrowLeft size={14} aria-hidden="true" /> Tillbaka till bloggen
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium bg-gray-100 border border-gray-200 px-3 py-1 rounded-full">
              Kostnadsanalys
            </span>
            <span className="text-xs text-gray-500">8 min</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15]">
            Vad kostar manuell transportplanering egentligen?
          </h1>
          <p className="mt-6 text-lg text-gray-500 leading-relaxed">
            Många åkerier underskattar den verkliga kostnaden för manuell
            planering. Här bryter vi ned siffrorna för svenska trafikledare,
            kostnad per bokning och hur tomkörning driver kostnader uppåt.
          </p>
        </header>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-medium text-black mb-3">
              Vad tjänar en trafikledare i Sverige? (2024)
            </h2>
            <p>
              SCB-baserad statistik visar en medellön på <strong>40 200 kr/mån</strong>{" "}
              för trafikledare/transportledare. Lönespannet ligger ungefär mellan
              <strong> 32 900 och 49 900 kr/mån</strong> (10:e till 90:e percentilen).
            </p>
            <p className="mt-3">
              Över tid har lönen ökat från cirka 37 100 kr (2022) till 40 200 kr
              (2024), vilket motsvarar cirka 8,3 % uppgång över tre år.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-black mb-3">
              Den verkliga arbetsgivarkostnaden per trafikledare
            </h2>
            <p>
              En realistisk kalkyl behöver inkludera semesterlön,
              arbetsgivaravgifter, försäkringar och pensionsrelaterade skatter.
              I praktiken hamnar många bolag på <strong>40–54 %</strong> i påslag ovanpå
              bruttolön beroende på avtal och förmåner.
            </p>
            <div className="mt-4 overflow-hidden rounded-xl border border-gray-200">
              <table className="w-full text-sm">
                <tbody>
                  {costRows.map(([label, value]) => (
                    <tr key={label} className="odd:bg-white even:bg-gray-50">
                      <td className="px-4 py-3">{label}</td>
                      <td className="px-4 py-3 text-right font-medium text-black">
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3">
              Med full kalkyl blir årskostnaden ofta cirka <strong>740 000 kr</strong>
              per trafikledare.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-black mb-3">
              Vad kostar en enskild bokning när planering sker manuellt?
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>12 minuter per bokning</li>
              <li>40 bokningar per dag</li>
              <li>480 minuter = 8 timmar (en heltid)</li>
            </ul>
            <p className="mt-3">
              Med en total personalkostnad runt 62 000 kr/mån blir årskostnaden
              cirka <strong>740 000 kr</strong>. För 240 arbetsdagar och 40 bokningar per
              dag motsvarar det ungefär <strong>77 kr per bokning</strong>.
            </p>
            <p className="mt-3 text-sm text-gray-500">
              Viktigt: &quot;12 minuter per bokning&quot; bör presenteras som ett
              räkneexempel/branschuppskattning, inte som svensk officiell
              forskningssiffra.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-black mb-3">
              Hur tomkörning driver upp kostnaden ytterligare
            </h2>
            <p>
              Trafikanalys visar att cirka <strong>17 %</strong> av lastbilskilometer i
              Sverige körs tomma. Med omkring <strong>3,2 miljarder</strong> körda
              kilometer för tunga lastbilar innebär det stora kostnader i diesel,
              slitage och förartid.
            </p>
            <p className="mt-3">
              När planering sker manuellt blir det svårare att minska tomkörning
              och balansera kapacitet i realtid.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-black mb-3">Sammanfattning</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>1 trafikledare i manuell planering: cirka 740 000 kr/år</li>
              <li>2 trafikledare: cirka 1,5 MSEK/år</li>
              <li>3 trafikledare: cirka 2,2 MSEK/år</li>
              <li>Kostnad per bokning i exemplet: cirka 77 kr</li>
            </ul>
            <p className="mt-3">
              Nästa steg är att jämföra denna kostnadsbild med vad moderna
              TMS-system faktiskt kan automatisera.
            </p>
          </section>
        </div>

        <RelatedSolutions slugs={["trafikledning", "automatisk-orderhantering"]} />

        <div className="mt-10 bg-gray-950 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl font-medium text-white mb-3">
            Vill ni se vilka TMS-system som passar svenska åkerier?
          </h2>
          <p className="text-gray-400 mb-6">
            Läs vår kompletta jämförelse av TMS-system, funktioner och typiska
            användningsfall.
          </p>
          <Link
            href="/blogg/tms-system-2026-guide-svenska-akerier"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-3.5 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
          >
            Läs TMS-guiden <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
    </>
  );
}
