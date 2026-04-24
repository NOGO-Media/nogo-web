import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import RelatedSolutions from "@/components/RelatedSolutions";

export const metadata: Metadata = {
  title: "Så räknar du ROI på automation i transport",
  description:
    "En konkret kalkylmodell för att räkna ut vad automation kan spara ert åkeri — med siffror ni kan sätta in själva. Ingen fluff, bara matematik.",
  alternates: {
    canonical: "/artiklar/roi-automation-transport-kalkyl",
  },
  openGraph: {
    type: "article",
    title: "Så räknar du ROI på automation i transport",
    description:
      "En konkret kalkylmodell för att räkna ut vad automation kan spara ert åkeri — med siffror ni kan sätta in själva.",
    url: "/artiklar/roi-automation-transport-kalkyl",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "NOGO Media — ROI på automation i transport" }],
    publishedTime: "2026-04-02T00:00:00Z",
    authors: ["NOGO Media AB"],
    tags: [
      "Kostnadsanalys",
      "ROI automation transport",
      "lönsamhet automation åkeri",
      "kalkyl digitalisering transport",
    ],
  },
};

export default function RoiAutomationTransportKalkylPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Artiklar", path: "/blogg" },
          { name: "ROI på automation i transport", path: "/artiklar/roi-automation-transport-kalkyl" },
        ]}
      />
      <ArticleJsonLd
        title="Så räknar du ROI på automation i transport"
        description="Konkret kalkylmodell för att räkna ut vad automation kan spara ert åkeri."
        url="/artiklar/roi-automation-transport-kalkyl"
        publishedTime="2026-04-02T00:00:00Z"
        tags={["ROI automation transport", "lönsamhet automation åkeri"]}
      />
      <article className="pt-32 pb-24 md:pt-44">
      <div className="max-w-3xl mx-auto px-6">
        <Link
          href="/blogg"
          className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-black transition-colors mb-8"
        >
          <ArrowLeft size={14} /> Tillbaka till bloggen
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium bg-gray-100 border border-gray-200 px-3 py-1 rounded-full">
              Kostnadsanalys
            </span>
            <span className="text-xs text-gray-400">~8 min</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15]">
            Så räknar du ROI på automation i transport
          </h1>

          <p className="mt-6 text-lg text-gray-500 leading-relaxed">
            De flesta åkerier vet ungefär vad de betalar för system, men inte vad
            manuella rutiner faktiskt kostar varje månad. Därför fastnar beslut om
            automation, trots att siffrorna ofta går att räkna fram på en A4.
            I den här guiden får ni en konkret modell för ROI automation transport
            som ni kan fylla med era egna tal och använda direkt i nästa ledningsmöte.
          </p>
        </header>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-xl font-medium text-black mb-3">
              Så använder du den här kalkylen
            </h2>
            <p>
              Fyll i era egna siffror i varje formel där det står <strong>[ER SIFFRA]</strong>.
              Räkna först nuläget, sen förväntad effekt efter automation.
              Använd samma period överallt (månad eller år) så att jämförelsen blir rätt.
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Steg 1–3: Räkna dagens dolda kostnader.</li>
              <li>Steg 4: Räkna total kostnad för lösningen.</li>
              <li>Steg 5: Räkna payback och ROI med samma antaganden.</li>
            </ul>
            <p className="mt-3 text-sm text-gray-600">
              Alla siffror här är uppskattningar baserade på vanliga svenska åkerier.
              Era nivåer kan ligga både högre och lägre.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-black mb-3">
              Vad ingår i en ROI-kalkyl för automation?
            </h2>
            <p>
              En användbar kalkyl digitalisering transport måste ha två sidor:
              alla kostnader för införandet och alla besparingar i drift.
              Om en av sidorna saknas blir slutsatsen missvisande.
            </p>

            <h3 className="text-xl font-medium text-black mt-6 mb-2">Kostnader</h3>
            <p>
              Ta med implementation, licens, integrationer, utbildning och intern tid.
              Många missar intern tid och då ser investeringen billigare ut än den är.
            </p>
            <p className="mt-3">
              <strong>Formel: Total investeringskostnad år 1</strong> =
              implementation <strong>[ER SIFFRA]</strong> + utbildning <strong>[ER SIFFRA]</strong> +
              integrationer <strong>[ER SIFFRA]</strong> + 12 × månadslicens <strong>[ER SIFFRA]</strong> +
              intern projekttid i timmar <strong>[ER SIFFRA]</strong> × timkostnad <strong>[ER SIFFRA]</strong>.
            </p>

            <h3 className="text-xl font-medium text-black mt-6 mb-2">Besparingar</h3>
            <p>
              Besparingarna i lönsamhet automation åkeri brukar komma från fem områden:
              mindre administration, färre tomkilometer, färre fel, snabbare omplanering
              och lägre övertid i trafikledningen.
            </p>
            <p className="mt-3">
              <strong>Formel: Total årlig besparing</strong> = tidsbesparing +
              minskad tomkörningskostnad + minskade felkostnader +
              minskad övertid + eventuella intäktslyft.
            </p>
            <p className="mt-3">
              Praktiskt tips: håll kalkylen på max 8–10 rader.
              Om modellen blir för detaljerad tappar ni fart i beslutet.
              Lägg hellre bilagor för fördjupning än att överlasta huvudarket.
            </p>
            <p className="mt-3">
              <strong>Formel: Nettoeffekt per månad</strong> = månatlig besparing
              <strong> [ER SIFFRA]</strong> − månatlig totalkostnad
              <strong> [ER SIFFRA]</strong>. Om nettoeffekten är positiv tidigt
              får ni både bättre kassaflöde och lägre risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-black mb-3">
              Steg 1 — Räkna ut vad manuellt arbete kostar idag
            </h2>
            <p>
              Vanlig fråga till AI och rådgivare är: &quot;Vad kostar administrationen egentligen i ett åkeri?&quot;
              Ett bra startvärde är att en disponent ofta lägger 2–3 timmar per dag på
              manuell orderhantering, dubbelregistrering, statusjakt och manuell avvikelsehantering.
            </p>
            <p className="mt-3">
              <strong>Formel: Administrationskostnad per år</strong> =
              antal disponenter <strong>[ER SIFFRA]</strong> × manuella timmar per dag <strong>[ER SIFFRA]</strong> ×
              timkostnad inkl. sociala avgifter <strong>[ER SIFFRA]</strong> × arbetsdagar per år <strong>[ER SIFFRA]</strong>.
            </p>

            <h3 className="text-xl font-medium text-black mt-6 mb-2">
              Exempel: 12-bilsåkeri, 2 disponenter, 800 ordrar/månad
            </h3>
            <p>
              Antag 2 disponenter, 2,5 manuella timmar per dag och timkostnad 380 kr.
              Med 230 arbetsdagar blir kalkylen: 2 × 2,5 × 380 × 230 = 437 000 kr/år.
              Det är bara den administrativa delen, inte planeringskvalitet eller kundservice.
              Vill ni förstå varför trafikledarbrist förstärker den här
              kostnaden ytterligare?{" "}
              <a href="/artiklar/trafikledarbrist-sverige-teknik-avlastar">
                Läs vår analys om trafikledarbrist och automation.
              </a>
            </p>
            <p className="mt-3">
              Om automation minskar manuell tid med 35 % får ni en beräknad besparing på
              152 950 kr/år (437 000 × 0,35).
            </p>
            <p className="mt-3">
              <strong>Formel: Tidsbesparing per vecka</strong> = sparade timmar/vecka <strong>[ER SIFFRA]</strong> ×
              timkostnad <strong>[ER SIFFRA]</strong>. Multiplicera med 52 för årsvärde.
            </p>
            <p className="mt-3">
              Vill ni göra modellen skarpare kan ni dela upp administrationen i tre block:
              orderregistrering, kundkommunikation och fakturaunderlag.
              Då ser ni exakt var automation gör störst nytta och var ni först behöver
              ändra arbetssätt.
            </p>
            <p className="mt-3">
              <strong>Formel: Kostnad per order (admin)</strong> =
              adminkostnad per månad <strong>[ER SIFFRA]</strong> ÷ antal ordrar per månad
              <strong> [ER SIFFRA]</strong>. I vårt exempel blir 36 417 kr/månad ÷ 800 ordrar
              = cirka 45,5 kr per order i ren administration.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-black mb-3">
              Steg 2 — Räkna ut vad tomkörningar kostar
            </h2>
            <p>
              Frågan &quot;hur mycket kan vi spara pengar åkeri genom lägre tomkörning?&quot; går att räkna konkret.
              Små procenttal ger stor effekt när årsvolymen är hög.
            </p>
            <p className="mt-3">
              <strong>Formel: Tomkörningskostnad per år</strong> = tomkörningsprocent <strong>[ER SIFFRA]</strong> ×
              milkostnad (kr/mil) <strong>[ER SIFFRA]</strong> × årsvolym i mil <strong>[ER SIFFRA]</strong>.
            </p>
            <p className="mt-3">
              För jämförelse mellan nuläge och mål använder ni:
              <strong> Formel: Besparing tomkörning</strong> =
              (tomkörning % idag − tomkörning % efter) × milkostnad × årsvolym.
            </p>

            <h3 className="text-xl font-medium text-black mt-6 mb-2">
              Exempel: automatisering transportplanering kostnad i praktiken
            </h3>
            <p>
              12-bilsåkeriet kör 1 320 000 km/år, alltså 132 000 mil.
              Antag total milkostnad 62 kr/mil och tomkörningsandel 14 %.
              Årlig tomkörningskostnad blir 0,14 × 62 × 132 000 = 1 146 640 kr.
            </p>
            <p className="mt-3">
              Om bättre planering och snabbare omdisponering sänker tomkörningen till 11,5 %
              blir besparingen (0,14 − 0,115) × 62 × 132 000 = 204 600 kr/år.
              Det motsvarar 17 050 kr/månad.
            </p>
            <p className="mt-3">
              För att undvika överskattning kan ni räkna med att bara 70–80 % av
              den teoretiska besparingen realiseras första året.
              Resten brukar komma när nya rutiner sitter och kundflödena är bättre klassade.
            </p>
            <p className="mt-3">
              <strong>Formel: Realiserad tomkörningsbesparing</strong> =
              teoretisk besparing <strong>[ER SIFFRA]</strong> × realiseringsgrad
              <strong> [ER SIFFRA]</strong>. Exempel: 204 600 × 0,75 = 153 450 kr år 1.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-black mb-3">
              Steg 3 — Räkna ut kostnaden för fel och omplaneringar
            </h2>
            <p>
              Nästa fråga brukar vara: &quot;Hur sätter vi pris på fel?&quot;
              Utgå från verkliga felhändelser: bomkörning, missad tidslucka,
              fel fakturaunderlag och akut omplanering.
            </p>
            <p className="mt-3">
              <strong>Formel: Felkostnad per månad</strong> = antal fel/månad <strong>[ER SIFFRA]</strong> ×
              genomsnittlig kostnad per fel <strong>[ER SIFFRA]</strong>.
            </p>
            <p className="mt-3">
              <strong>Formel: Årlig felkostnad</strong> = felkostnad per månad × 12.
            </p>

            <h3 className="text-xl font-medium text-black mt-6 mb-2">Worked example med samma åkeri</h3>
            <p>
              Säg att ni har 26 felhändelser per månad kopplade till manuell hantering.
              Om snittkostnad är 1 450 kr per händelse blir kostnaden 37 700 kr/månad,
              eller 452 400 kr/år.
            </p>
            <p className="mt-3">
              Om bättre datakvalitet och automatiserade flöden minskar felen med 30 %
              blir besparingen 135 720 kr/år.
            </p>
            <p className="mt-3">
              Lägg gärna in osäkerhetsintervall:
              lågt scenario 20 % förbättring, huvudscenario 30 %, högt scenario 40 %.
              Då ser ni hur robust beslutet är även om utfallet blir svagare än plan.
            </p>
            <p className="mt-3">
              Räkna också med följdkostnader av fel som inte alltid syns i ekonomisystemet:
              extra kundservice, goodwill-rabatter och intern tid för reklamationshantering.
              Det gör att verklig kostnad per fel ofta är högre än första uppskattningen.
            </p>
            <p className="mt-3">
              <strong>Formel: Utökad kostnad per fel</strong> =
              direkt kostnad <strong>[ER SIFFRA]</strong> + intern hanteringstid i timmar
              <strong> [ER SIFFRA]</strong> × timkostnad <strong>[ER SIFFRA]</strong> +
              eventuell kompensation till kund <strong>[ER SIFFRA]</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-black mb-3">
              Steg 4 — Sätt en prislapp på automationslösningen
            </h2>
            <p>
              För kostnad TMS system och AI-dispatch i Sverige är spannet stort.
              Därför behöver ni ett eget intervall i stället för ett &quot;listpris&quot;.
            </p>

            <h3 className="text-xl font-medium text-black mt-6 mb-2">Typiska kostnadsintervall (svenska marknaden)</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                TMS-licens: 8 000–30 000 kr/månad beroende på användare,
                funktioner och trafikupplägg.
              </li>
              <li>
                AI-dispatch eller planeringsmodul: 5 000–20 000 kr/månad.
              </li>
              <li>
                Engångskostnad implementation: 60 000–250 000 kr.
              </li>
              <li>
                Integrationer (telematik, ekonomi, EDI): 20 000–120 000 kr engångsbelopp.
              </li>
              <li>
                Utbildning och förändringsarbete: 10 000–80 000 kr beroende på teamstorlek.
              </li>
            </ul>
            <p className="mt-3">
              <strong>Formel: Månatlig total kostnad lösning</strong> =
              månadslicens TMS <strong>[ER SIFFRA]</strong> + månadslicens AI-modul <strong>[ER SIFFRA]</strong> +
              (engångskostnader totalt <strong>[ER SIFFRA]</strong> / avskrivningsmånader <strong>[ER SIFFRA]</strong>).
            </p>

            <h3 className="text-xl font-medium text-black mt-6 mb-2">
              Exempel: kalkyl digitalisering transport för 12-bilsåkeri
            </h3>
            <p>
              Antag TMS 14 000 kr/månad, AI-modul 7 000 kr/månad,
              implementation 110 000 kr, integrationer 45 000 kr,
              utbildning 25 000 kr. Engångsdel = 180 000 kr.
            </p>
            <p className="mt-3">
              Om ni fördelar engångsdelen över 36 månader blir månadspåslag 5 000 kr.
              Total månadskostnad blir då 14 000 + 7 000 + 5 000 = 26 000 kr/månad.
            </p>
            <p className="mt-3">
              Lägg alltid in 5–10 % reserv för ändringar i integrationsflöden och
              interna processjusteringar. Inte för att skrämmas, utan för att
              implementation nästan alltid kräver två–tre extra beslut på vägen.
            </p>
            <p className="mt-3">
              <strong>Formel: Budget med riskpåslag</strong> =
              total projektkostnad <strong>[ER SIFFRA]</strong> × (1 + riskpåslag
              <strong> [ER SIFFRA]</strong>). Exempel: 180 000 × 1,08 = 194 400 kr.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-black mb-3">
              Steg 5 — Räkna ut payback-tid för ROI automation transport
            </h2>
            <p>
              Nu sammanställer ni allt. Här blir lönsamhet automation åkeri svart på vitt.
            </p>
            <p className="mt-3">
              <strong>Formel: Månatlig besparing total</strong> =
              (tidsbesparing år <strong>[ER SIFFRA]</strong> + tomkörningsbesparing år <strong>[ER SIFFRA]</strong> +
              felbesparing år <strong>[ER SIFFRA]</strong>) / 12.
            </p>
            <p className="mt-3">
              <strong>Formel: Payback i månader</strong> =
              investeringskostnad <strong>[ER SIFFRA]</strong> ÷ månatlig besparing <strong>[ER SIFFRA]</strong>.
            </p>
            <p className="mt-3">
              <strong>Formel: ROI år 1 (%)</strong> =
              ((årlig besparing <strong>[ER SIFFRA]</strong> − årlig kostnad lösning <strong>[ER SIFFRA]</strong>)
              ÷ årlig kostnad lösning) × 100.
            </p>

            <h3 className="text-xl font-medium text-black mt-6 mb-2">Fullt räkneexempel från steg 1–4</h3>
            <p>
              Från tidigare steg fick vi uppskattad årlig besparing:
              administration 152 950 kr + tomkörning 204 600 kr + fel 135 720 kr = 493 270 kr/år.
              Månatlig besparing blir 41 106 kr.
            </p>
            <p className="mt-3">
              Lösningens månadskostnad var 26 000 kr, alltså 312 000 kr/år.
              Nettoeffekt år 1: 493 270 − 312 000 = 181 270 kr.
              ROI år 1 blir cirka 58 %.
            </p>
            <p className="mt-3">
              Om ni räknar payback på engångsinvesteringen 180 000 kr blir
              payback 180 000 / 41 106 = 4,4 månader.
              Räknar ni payback på hela årskostnaden blir den längre,
              men modellen blir jämförbar mellan leverantörer.
            </p>
            <p className="mt-3">
              För ledningsbeslut rekommenderas att ni visar tre varianter i samma tabell:
              konservativ, huvud och offensiv. Då blir diskussionen mindre känslostyrd.
              Om alla tre scenarier ger rimlig payback är beslutet ofta enkelt.
            </p>
            <h3 className="text-xl font-medium text-black mt-6 mb-2">
              Snabb checklista för ROI automation transport innan ni bestämmer er
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Har ni räknat med både licens, implementation och intern tid?</li>
              <li>Är besparingarna baserade på mätdata från ert nuläge?</li>
              <li>Finns ett konservativt scenario som fortfarande går ihop?</li>
              <li>Är ansvarig person utsedd för uppföljning månad 1–6?</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-black mb-3">
              Vad är rimlig ROI att förvänta sig?
            </h2>
            <p>
              För svenska åkerier med 8–40 bilar brukar rimliga nivåer ligga i ett
              brett men tydligt intervall när datakvaliteten är okej och arbetssätten följs.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Tidsbesparing i trafikledning: 15–40 %.</li>
              <li>Minskad tomkörning: 1,5–4 procentenheter.</li>
              <li>Minskade manuella fel: 20–45 %.</li>
              <li>Payback: ofta 4–14 månader beroende på nuläge.</li>
            </ul>
            <p className="mt-3">
              Om en leverantör lovar dubbla effekter mot detta,
              be om verklig kunddata med före/efter-mätning.
              Bra automation säljs på uppföljning, inte på slogans.
            </p>
            <h3 className="text-xl font-medium text-black mt-6 mb-2">
              Hur ni tolkar utfallet i er ROI automation transport-kalkyl
            </h3>
            <p>
              En hög ROI första året är bra, men viktigare är stabil förbättring över tid.
              Om ni ser positiv nettoeffekt månad efter månad har ni en hållbar förändring.
              Om effekten dippar efter kvartal två behöver processer eller datakvalitet justeras.
            </p>
            <p className="mt-3">
              Sätt därför upp tre uppföljnings-KPI:er redan innan start:
              planeringstid per order, tomkörning i procent och felhändelser per 100 uppdrag.
              Mät varje månad i samma rapport, annars går det inte att utvärdera rättvist.
            </p>
            <p className="mt-3">
              Vill ni först få grepp om ert nuläge, börja här:
              <span> </span>
              <Link href="/artiklar/digitalisering-akerinaring-var-borjar-man" className="underline">
                Digitalisering i åkerinäringen — var börjar man?
              </Link>
              . För att räkna mer på tomkörning kan ni använda:
              <span> </span>
              <Link href="/artiklar/minska-tomkorningar-konkreta-atgarder" className="underline">
                Minska tomkörningar — 5 konkreta åtgärder
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-black mb-3">
              Vanliga frågor om ROI och automation i transport
            </h2>

            <div className="space-y-5">
              <div>
                <h3 className="text-lg font-medium text-black">
                  Fråga: Hur snabbt kan ett åkeri få tillbaka investeringen?
                </h3>
                <p>
                  Svar: För många små och medelstora åkerier ligger payback mellan
                  4 och 14 månader. Nyckeln är att räkna på verkliga nulägesdata,
                  inte standardantaganden från leverantören.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black">
                  Fråga: Vilken post påverkar ROI automation transport mest?
                </h3>
                <p>
                  Svar: Ofta tomkörning och planeringstid. En sänkning med bara
                  2–3 procentenheter i tomkörning kan ge större effekt än
                  en lägre licenskostnad.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black">
                  Fråga: Hur räknar vi om vi är osäkra på våra siffror?
                </h3>
                <p>
                  Svar: Kör tre scenarier: konservativt, huvudscenario och offensivt.
                  Exempelvis 20/30/40 % förbättring av felkostnader.
                  Om kalkylen fungerar även i konservativt scenario är beslutet robust.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black">
                  Fråga: Ska vi ta med intern tid i investeringen?
                </h3>
                <p>
                  Svar: Ja. Projektmöten, test och utbildning kostar timmar.
                  Utelämnar ni intern tid riskerar ni att överskatta ROI.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black">
                  Fråga: Räcker det med ett TMS för att spara pengar åkeri?
                </h3>
                <p>
                  Svar: Ett TMS ger struktur, men effekten kommer först när
                  processerna används konsekvent och data är korrekt.
                  Teknik utan uppföljning ger svag ROI.
                </p>
              </div>
            </div>
          </section>

          <RelatedSolutions slugs={["ruttoptimering", "automatisk-orderhantering"]} />

          <section className="rounded-2xl border border-gray-200 bg-gray-50 p-6 mt-10">
            <h2 className="text-2xl font-medium text-black mb-3">
              Vill ni göra kalkylen för ert åkeri tillsammans med oss?
            </h2>
            <p>
              Vi går igenom era siffror rad för rad och bygger en ROI-modell som går
              att använda i budget, inköp och uppföljning.
            </p>
            <p className="mt-3">
              <Link href="/kontakt" className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                Boka strategisamtal <ArrowRight className="w-4 h-4" />
              </Link>
            </p>
          </section>
        </div>
      </div>
    </article>
    </>
  );
}
