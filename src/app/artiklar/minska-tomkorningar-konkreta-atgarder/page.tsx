import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import RelatedSolutions from "@/components/RelatedSolutions";

export const metadata: Metadata = {
  title: "Minska tomkörningar — 5 konkreta åtgärder",
  description:
    "17% av alla lastbilskilometer i Sverige körs tomma. Här är fem praktiska åtgärder som minskar tomkörningarna i ert åkeri — utan stora investeringar.",
  alternates: {
    canonical: "/artiklar/minska-tomkorningar-konkreta-atgarder",
  },
  openGraph: {
    type: "article",
    title: "Minska tomkörningar — 5 konkreta åtgärder",
    description:
      "Fem praktiska åtgärder för att minska tomkörningar i åkeri med bättre planering, returlass och tydlig uppföljning.",
    url: "/artiklar/minska-tomkorningar-konkreta-atgarder",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "NOGO Media — Minska tomkörningar" }],
    publishedTime: "2026-04-02T00:00:00Z",
    authors: ["NOGO Media AB"],
    tags: [
      "Praktiska tips",
      "minska tomkörningar",
      "tomkörningar åkeri",
      "returlass transport",
      "backhaul Sverige",
      "ruttoptimering lastbil",
      "effektivare transportplanering",
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Hur mycket tomkörning är normalt i ett svenskt åkeri?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Det varierar mellan trafikslag, men en vanlig nivå ligger ofta mellan 10 och 25 procent. Trafikanalys visar att 17 procent av lastbilskilometrarna i Sverige körs tomma, vilket är en bra jämförelsenivå för ett åkeri som vill förbättra sin planering.",
      },
    },
    {
      "@type": "Question",
      name: "Vilken åtgärd ger snabbast effekt för att minska tomkörningar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aktiv samordning av returlass brukar ge snabbast effekt. När trafikledningen redan vid utgående bokning säkrar ett möjligt återflöde minskar tomma mil direkt utan att ni behöver köpa nya fordon eller göra stora systembyten.",
      },
    },
    {
      "@type": "Question",
      name: "Behöver vi ett stort TMS-projekt för att börja?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nej. Börja med att samla GPS, orderstatus och planering i samma arbetsvy och följ tomkörningsprocenten varje vecka. Det räcker för att få kontroll, prioritera rätt och stegvis bygga mer effektiv transportplanering.",
      },
    },
    {
      "@type": "Question",
      name: "Hur ofta ska tomkörningsprocenten följas upp?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Varje vecka. Veckovis uppföljning gör att ni ser avvikelser direkt, kan justera rutter och boka fler returlass innan månaden är över.",
      },
    },
  ],
};

export default function MinskaTomkorningarArticle() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Artiklar", path: "/blogg" },
          { name: "Minska tomkörningar", path: "/artiklar/minska-tomkorningar-konkreta-atgarder" },
        ]}
      />
      <ArticleJsonLd
        title="Minska tomkörningar — 5 konkreta åtgärder"
        description="Fem praktiska åtgärder som minskar tomkörningarna i ert åkeri."
        url="/artiklar/minska-tomkorningar-konkreta-atgarder"
        publishedTime="2026-04-02T00:00:00Z"
        tags={["minska tomkörningar", "ruttoptimering lastbil", "returlass transport"]}
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
              Praktiska tips
            </span>
            <span className="text-xs text-gray-400">~5 min</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15]">
            Minska tomkörningar — 5 konkreta åtgärder
          </h1>

          <p className="mt-6 text-lg text-gray-500 leading-relaxed">
            Enligt Trafikanalys körs 17% av alla lastbilskilometer i Sverige tomma.
            Om ni vill minska tomkörningar i ert åkeri finns det snabbare vägar än
            stora förändringsprojekt. Här får ni fem konkreta arbetssätt som fungerar
            i vardagen, med fokus på returlass, planering och uppföljning.
          </p>
          <p className="mt-3 text-sm text-gray-500 leading-relaxed">
            Källa: Trafikanalys,
            <a
              className="underline ml-1"
              href="https://www.trafa.se/vagtrafik/lastbilstrafik/"
              target="_blank"
              rel="noreferrer"
            >
              statistik om lastbilstrafik
            </a>
            .
          </p>
        </header>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-xl font-medium text-black mb-3">
              Snabbversion: 5 åtgärder i korthet
            </h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                Samordna returlass transport aktivt med kunder och partneråkerier,
                så att varje utgående uppdrag får en planerad backhaul Sverige.
              </li>
              <li>
                Använd ruttoptimering lastbil som väger in tider, lossfönster,
                fordonskapacitet och faktiskt godsflöde i stället för kortaste väg.
              </li>
              <li>
                Planera per vecka och styr lastfyllnad över flera dagar, inte per
                akut order, för effektivare transportplanering.
              </li>
              <li>
                Koppla ihop GPS, TMS och orderdata i samma vy så trafikledningen ser
                luckor tidigt och kan boka retur innan bilen går tom.
              </li>
              <li>
                Mät tomkörningsprocenten varje vecka per bil, kund och område och
                justera snabbt när nivån sticker över ert mål.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-black mb-3">
              Åtgärd 1 — Samordna returtransporter aktivt för bättre backhaul Sverige
            </h2>
            <h3 className="text-xl font-medium text-black mb-2">
              Hur minskar man tomkörningar med returlass transport?
            </h3>
            <p>
              Börja med en enkel regel i trafikledningen: ingen bil lämnar terminalen
              utan att ni har kollat returmöjlighet inom samma zon. Det betyder inte
              att returlasset alltid är bokat direkt, men att någon ansvarar för att
              jaga det innan lossning är klar.
            </p>
            <p className="mt-3">
              Skapa en daglig lista över återkommande tomsträckor, till exempel
              Göteborg–Jönköping eller Örebro–Stockholm. De sträckorna ska ha en
              tydlig plan: egen säljinsats mot kund, samarbete med annat tomkörningar
              åkeri i området eller bokning via partnernätverk. När ni gör detta
              konsekvent brukar 2–5 procentenheter försvinna inom några veckor.
            </p>
            <p className="mt-3">
              Praktiskt tips: sätt en tidsgräns, exempelvis att returfrågan ska vara
              skickad senast 60 minuter efter att utgående last bekräftats. Då blir
              backhaul Sverige en rutin, inte en nödlösning vid dagens slut.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-black mb-3">
              Åtgärd 2 — Använd ruttoptimering lastbil som faktiskt hjälper er att
              minska tomkörningar
            </h2>
            <h3 className="text-xl font-medium text-black mb-2">
              Varför räcker inte Google Maps för tomkörningar åkeri?
            </h3>
            <p>
              Google Maps visar snabbaste väg mellan två punkter. Trafikledning
              behöver mer: lastfönster, maxvikt, fordonsprofil, chaufförstid,
              väntetider och möjliga returuppdrag på vägen hem. Utan de parametrarna
              optimerar ni körsträcka men missar intäkt.
            </p>
            <p className="mt-3">
              En fungerande ruttoptimering lastbil ska kunna svara på tre frågor i
              samma vy: vilken bil kan ta uppdraget, vilken ordning stoppen ska ligga
              i och var ni kan plocka ett returlass utan att missa leveranstid. Det
              här är kärnan i effektivare transportplanering.
            </p>
            <p className="mt-3">
              Sätt upp ett enkelt test i två veckor: jämför planerad tomkörning mot
              faktiskt utfall på 20–30 körningar. Om avvikelsen är stor har ni ett
              planeringsproblem, inte ett chaufförsproblem.
            </p>
            <p className="mt-3">
              Vill ni se vad manuell planering faktiskt kostar i kronor?{" "}
              <Link className="underline" href="/blogg/vad-kostar-manuell-transportplanering">
                Läs vår kostnadskalkyl för trafikledning.
              </Link>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-black mb-3">
              Åtgärd 3 — Planera veckan, inte dagen, för effektivare transportplanering
            </h2>
            <h3 className="text-xl font-medium text-black mb-2">
              Hur påverkar veckoplanering andelen tomma mil?
            </h3>
            <p>
              Dag-för-dag-planering gör att ni löser varje order separat. Då missar ni
              möjligheten att para ihop flöden över flera dagar. Veckoplanering ger
              bättre lastfyllnad och jämnare beläggning per bil.
            </p>
            <p className="mt-3">
              Jobba med förhandsbokning av återkommande körningar, även om exakta
              volymer inte är klara. Lägg preliminära kapacitetsblock i schemat på
              måndag för hela veckan. När volymerna bekräftas finjusterar ni i stället
              för att börja från noll varje eftermiddag.
            </p>
            <p className="mt-3">
              En tumregel i tomkörningar åkeri: om mer än 30% av veckans uppdrag
              planeras samma dag ökar risken för tomkörning snabbt. Sätt mål att minst
              70% ska ligga planerade 24 timmar i förväg.
            </p>
            <p className="mt-3">
              Funderar ni på vilket systemstöd som passar er planering?{" "}
              <Link className="underline" href="/blogg/tms-system-2026-guide-svenska-akerier">
                Läs vår guide till TMS-system för svenska åkerier.
              </Link>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-black mb-3">
              Åtgärd 4 — Koppla ihop er data: GPS + TMS + ordrar i samma vy
            </h2>
            <h3 className="text-xl font-medium text-black mb-2">
              Vad vinner man på en gemensam planeringsbild?
            </h3>
            <p>
              När GPS ligger i ett system, order i ett annat och kundinfo i mejlen
              ser ingen hela läget. Då upptäcker ni tomkörning för sent, ofta först i
              efteranalysen. Med en samlad vy kan trafikledningen agera när bilen
              fortfarande är nära nästa möjliga upphämtning.
            </p>
            <p className="mt-3">
              Ni behöver inte börja med ett stort IT-projekt. Första steget räcker
              långt: visa fordonsposition, orderstatus och kommande lossningar i
              samma dashboard. Lägg till en enkel markering för bilar som riskerar att
              gå tomma inom 90 minuter.
            </p>
            <p className="mt-3">
              Vill ni ta nästa steg med digitalt arbetssätt kan ni läsa:
              <span> </span>
              <Link className="underline" href="/artiklar/digitalisering-akerinaring-var-borjar-man">
                Digitalisering i åkerinäringen — var börjar man?
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-black mb-3">
              Åtgärd 5 — Mät för att minska tomkörningar varje vecka
            </h2>
            <h3 className="text-xl font-medium text-black mb-2">
              Vilka nyckeltal ska man följa för att minska tomkörningar?
            </h3>
            <p>
              Det som mäts förbättras, men bara om ni mäter rätt och ofta. Följ minst
              tre tal varje vecka: tomkörningsprocent totalt, tomkörningsprocent per
              bil och andel körningar med bokat returlass transport.
            </p>
            <p className="mt-3">
              Sätt tydliga gränser. Exempel: total tomkörning över 15% = åtgärdsmöte,
              enskild bil över 20% i två veckor = genomgång av rutt och kundmix,
              returlassandel under 60% = fokus på backhaul Sverige i nästa planering.
              Då vet alla när något behöver ändras.
            </p>
            <p className="mt-3">
              Veckovis uppföljning slår månadsrapportering eftersom ni hinner justera
              innan kostnaderna hinner bygga upp sig. Det är så ni på riktigt kan
              minska tomkörningar över tid.
            </p>
          </section>

          <section className="rounded-2xl border border-gray-200 p-6">
            <h2 className="text-2xl font-medium text-black mb-3">
              Vad är realistiskt att spara?
            </h2>
            <p>
              Ta ett enkelt exempel. Anta att ni kör 1 200 mil per vecka och ligger på
              17% tomkörning. Det betyder 204 tomma mil. Om ni med åtgärderna ovan
              sänker till 12% blir det 144 tomma mil. Skillnaden är 60 mil per vecka.
            </p>
            <p className="mt-3">
              Räknar ni med 42 kr per mil i total rörlig kostnad motsvarar det cirka
              2 520 kr per vecka, ungefär 10 000 kr per månad och drygt 130 000 kr per
              år. Det är pengar ni kan flytta till bättre marginal, fler chaufförstimmar
              eller smartare teknikstöd.
            </p>
            <p className="mt-3">
              Poängen är inte att träffa exakt krona dag ett. Poängen är att ni får en
              konkret målbild för vad effektivare transportplanering är värd i kronor.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-black mb-4">
              Vanliga frågor om tomkörningar
            </h2>

            <div className="space-y-5">
              <div>
                <h3 className="text-xl font-medium text-black">
                  Fråga: Hur mycket tomkörning är normalt i ett svenskt åkeri?
                </h3>
                <p className="mt-2">
                  Svar: Nivån varierar, men 10–25% är vanligt beroende på trafiktyp,
                  geografi och kundmix. Trafikanalys anger 17% tomma lastbilskilometer
                  i Sverige, vilket är en relevant riktpunkt för uppföljning.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-black">
                  Fråga: Vilken åtgärd brukar ge snabbast resultat?
                </h3>
                <p className="mt-2">
                  Svar: Aktiv planering av returlass transport ger ofta snabbast effekt
                  eftersom ni kan minska tomma mil direkt med befintlig fordonsflotta.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-black">
                  Fråga: Behöver vi byta hela systemmiljön för att komma i gång?
                </h3>
                <p className="mt-2">
                  Svar: Nej. Börja med en gemensam vy för position, order och planering.
                  Det räcker långt för att hitta luckor och fatta bättre beslut i
                  trafikledningen.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-black">
                  Fråga: Hur snabbt ser man ekonomisk effekt?
                </h3>
                <p className="mt-2">
                  Svar: Många ser tydlig förbättring inom 4–8 veckor när veckomätning,
                  ruttjustering och backhaul-arbete görs konsekvent.
                </p>
              </div>
            </div>
          </section>

          <RelatedSolutions slugs={["ruttoptimering", "trafikledning"]} />

          <section className="mt-10">
            <p className="text-gray-700">
              Vill ni fördjupa er i hur automatisk matchning av returlass
              fungerar tekniskt?{" "}
              <Link className="underline" href="/artiklar/backhaul-returlass-automatiserad-matchning">
                Läs Backhaul och returlass — automatiserad matchning 2026
              </Link>
              .
            </p>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-gray-50 p-6 mt-10">
            <h2 className="text-xl font-medium text-black mb-3">
              Vill ni se hur mycket ni kör tomma idag?
            </h2>
            <p>
              Vi hjälper er att räkna på nuläget och visa var ni kan minska
              tomkörningar utan stora investeringar.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/losningar/ruttoptimering"
                className="inline-flex items-center gap-1.5 text-sm font-medium bg-black text-white px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors"
              >
                Se ruttoptimering <ArrowRight size={14} aria-hidden="true" />
              </Link>
              <Link
                href="/sa-jobbar-vi"
                className="inline-flex items-center gap-1.5 text-sm font-medium border border-gray-200 px-5 py-2.5 rounded-full hover:bg-white transition-colors"
              >
                Så jobbar vi
              </Link>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-1.5 text-sm font-medium border border-gray-200 px-5 py-2.5 rounded-full hover:bg-white transition-colors"
              >
                Boka strategisamtal
              </Link>
            </div>
          </section>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </article>
    </>
  );
}
