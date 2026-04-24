import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import RelatedSolutions from "@/components/RelatedSolutions";

export const metadata: Metadata = {
  title: "Opter, AddSecure eller eget? Så väljer du TMS",
  description:
    "En neutral jämförelse av TMS-system på den svenska marknaden. Styrkor, svagheter och vad som passar vilket åkeri — utan säljsnack.",
  alternates: {
    canonical: "/artiklar/tms-system-jamforelse-opter-addsecure",
  },
  openGraph: {
    type: "article",
    title: "Opter, AddSecure eller eget? Så väljer du TMS",
    description:
      "En neutral jämförelse av TMS-system på den svenska marknaden. Styrkor, svagheter och vad som passar vilket åkeri — utan säljsnack.",
    url: "/artiklar/tms-system-jamforelse-opter-addsecure",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "NOGO Media — TMS-jämförelse" }],
    publishedTime: "2026-04-02T00:00:00Z",
    authors: ["NOGO Media AB"],
    tags: [
      "Jämförelse",
      "TMS system åkeri",
      "TMS jämförelse Sverige",
      "transporthanteringssystem Sverige",
      "välja TMS åkeri",
    ],
  },
};

export default function TmsSystemJamforelseOpterAddsecurePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Artiklar", path: "/blogg" },
          { name: "TMS-jämförelse: Opter, AddSecure, eget", path: "/artiklar/tms-system-jamforelse-opter-addsecure" },
        ]}
      />
      <ArticleJsonLd
        title="Opter, AddSecure eller eget? Så väljer du TMS"
        description="Neutral jämförelse av TMS-system på den svenska marknaden."
        url="/artiklar/tms-system-jamforelse-opter-addsecure"
        publishedTime="2026-04-02T00:00:00Z"
        tags={["TMS system åkeri", "TMS jämförelse Sverige"]}
      />
      <article className="pt-32 pb-24 md:pt-44">
      <div className="max-w-3xl mx-auto px-6">
        <Link
          href="/blogg"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-black transition-colors mb-8"
        >
          <ArrowLeft size={14} /> Tillbaka till bloggen
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium bg-gray-100 border border-gray-200 px-3 py-1 rounded-full">
              Jämförelse
            </span>
            <span className="text-xs text-gray-400">~9 min</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15]">
            Opter, AddSecure eller eget? Så väljer du TMS system åkeri
          </h1>

          <p className="mt-6 text-lg text-gray-500 leading-relaxed">
            Det finns ingen universallösning för TMS system åkeri. Rätt val beror på
            storlek, transporttyp, kundkrav och hur ni redan jobbar i trafikledning,
            ekonomi och uppföljning. Den här jämförelsen är skriven för er som vill ha
            en praktisk bild av vad som fungerar i vardagen, inte en säljpitch.
          </p>
        </header>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-xl font-medium text-black mb-3">
              Så läser du den här jämförelsen
            </h2>
            <p>
              Alla system bedöms med samma kriterier: pris, funktioner,
              integrationsmöjligheter, support och skalbarhet.
            </p>
            <p className="mt-3">
              Målet är att ni snabbt ska kunna jämföra systemen på lika villkor.
              När exakta siffror inte är offentliga anges det tydligt, och ni bör alltid
              kontrollera aktuell prissättning direkt med leverantören innan beslut.
            </p>
            <p className="mt-3 text-sm text-gray-600">
              Notera: produktutbud, paket och avtalsnivåer ändras löpande. Kontrollera
              därför alltid senaste information med respektive leverantör.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-black mb-3">
              Vad är ett TMS och varför spelar valet roll?
            </h2>
            <p>
              Ett TMS (transport management system) är ert nav för order, planering,
              utförande, avvikelser och underlag till fakturering. I praktiken avgör
              systemet hur snabbt ni kan planera om, hur bra koll ni har på marginal per
              uppdrag och hur mycket manuellt dubbelarbete som blir kvar.
            </p>
            <p className="mt-3">
              Ett bra transporthanteringssystem Sverige ska passa era flöden, inte bara
              se bra ut i demo. Om ni väljer fel får ni ofta höga kringkostnader i form av
              extra administration, speciallösningar och mer intern support än ni räknat
              med.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-black mb-3">
              Jämförelsetabell — TMS-system på den svenska marknaden
            </h2>
            <div className="rounded-xl border border-gray-200 bg-white p-4 overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left px-4 py-3 font-medium border-b border-gray-200">
                      System
                    </th>
                    <th className="text-left px-4 py-3 font-medium border-b border-gray-200">
                      Passar bäst för
                    </th>
                    <th className="text-left px-4 py-3 font-medium border-b border-gray-200">
                      Prisindikation
                    </th>
                    <th className="text-left px-4 py-3 font-medium border-b border-gray-200">
                      API/integrationer
                    </th>
                    <th className="text-left px-4 py-3 font-medium border-b border-gray-200">
                      Styrka
                    </th>
                    <th className="text-left px-4 py-3 font-medium border-b border-gray-200">
                      Svaghet
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-medium border-b border-gray-100">Opter TMS</td>
                    <td className="px-4 py-3 border-b border-gray-100">
                      Små till medelstora åkerier med behov av snabb driftstart
                    </td>
                    <td className="px-4 py-3 border-b border-gray-100">
                      Vanligtvis abonnemang per användare/fordon, ofta nivåbaserat
                      (prissättning på förfrågan)
                    </td>
                    <td className="px-4 py-3 border-b border-gray-100">
                      Integrationer mot ekonomi, telematik och kundflöden; API-möjlighet
                      beroende på avtal
                    </td>
                    <td className="px-4 py-3 border-b border-gray-100">
                      Tydligt arbetsflöde för daglig planering och uppföljning
                    </td>
                    <td className="px-4 py-3 border-b border-gray-100">
                      Kan kräva processdisciplin för att ge full effekt
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium border-b border-gray-100">
                      AddSecure Transport
                    </td>
                    <td className="px-4 py-3 border-b border-gray-100">
                      Åkerier med större flottor eller höga krav på fordonsdata och
                      compliance
                    </td>
                    <td className="px-4 py-3 border-b border-gray-100">
                      Ofta paket + tilläggsmoduler + hårdvarukomponenter (prissättning på
                      förfrågan)
                    </td>
                    <td className="px-4 py-3 border-b border-gray-100">
                      Stark koppling mot fordons-/telematikdata samt partnerintegrationer
                    </td>
                    <td className="px-4 py-3 border-b border-gray-100">
                      Helhet med transport + uppkopplad fordonsmiljö
                    </td>
                    <td className="px-4 py-3 border-b border-gray-100">
                      Komplexitet och implementationstid kan bli högre
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-medium border-b border-gray-100">
                      Eget system / egenutvecklat TMS
                    </td>
                    <td className="px-4 py-3 border-b border-gray-100">
                      Åkerier med unika processer och intern produkt-/utvecklingsförmåga
                    </td>
                    <td className="px-4 py-3 border-b border-gray-100">
                      Hög initial investering + löpande utvecklings- och driftkostnad
                    </td>
                    <td className="px-4 py-3 border-b border-gray-100">
                      Full frihet, men allt ansvar för API, säkerhet och förvaltning ligger
                      hos er
                    </td>
                    <td className="px-4 py-3 border-b border-gray-100">
                      Exakt anpassning till era affärsregler
                    </td>
                    <td className="px-4 py-3 border-b border-gray-100">
                      Hög risk, lång ledtid och beroende av nyckelpersoner
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-gray-600">
              Tabellen är en TMS jämförelse Sverige på strategisk nivå. Exakt funktion och
              pris varierar med avtalsnivå, volym och integrationsomfång.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-black mb-3">Opter</h2>
            <p>
              Opter TMS är ett etablerat system på den svenska marknaden med fokus på
              åkeriers vardag: orderflöden, planering, uppföljning och fakturaunderlag.
              För många verksamheter är styrkan att komma i gång relativt snabbt utan ett
              tungt transformationsprojekt.
            </p>
            <p className="mt-3">
              Om någon frågar “Vad är Opter TMS för ett system?” är det korta svaret:
              ett branschnära TMS för åkerier som vill standardisera arbetsflöden och få
              bättre kontroll på driftdata i en och samma miljö.
            </p>

            <h3 className="text-xl font-medium text-black mt-6 mb-2">
              Passar bäst för
            </h3>
            <p>
              Små och medelstora åkerier som vill gå från kalkylblad, mejltrådar eller
              flera fristående verktyg till ett samlat TMS system åkeri.
            </p>
            <p className="mt-3">
              Passar även er som har återkommande kundupplägg och vill skala utan att
              bygga ett eget IT-team. Har ni tydliga rutiner i trafikledning brukar
              införandet gå snabbare.
            </p>

            <h3 className="text-xl font-medium text-black mt-6 mb-2">Styrkor</h3>
            <p>
              Gränssnitt och arbetsflöde upplevs ofta lätt att förstå för operativa team.
              Det brukar minska startsträckan i verksamheter där tiden för utbildning är
              begränsad.
            </p>
            <p className="mt-3">
              Bra balans mellan planering, daglig drift och underlag till ekonomi gör att
              många åkerier kan kapa manuella steg. Systemet används av många svenska
              åkerier enligt uppgifter från leverantören, vilket ofta innebär att det
              finns praktisk erfarenhet och etablerade arbetssätt att luta sig mot.
            </p>

            <h3 className="text-xl font-medium text-black mt-6 mb-2">Svagheter</h3>
            <p>
              Standardflöden är en styrka, men kan upplevas som begränsning om ni har
              ovanliga affärsregler eller mycket specialiserade processer.
            </p>
            <p className="mt-3">
              En vanlig fallgrop är att tro att systemet löser allt direkt utan att ni
              först sätter roller, datakvalitet och uppföljning. Då blir effekten lägre,
              oavsett plattform.
            </p>

            <h3 className="text-xl font-medium text-black mt-6 mb-2">Prisindikation</h3>
            <p>
              Opter TMS säljs normalt som abonnemang med nivåer beroende på funktion,
              användare, fordon och integrationsbehov. Exakt pris är i regel
              prissättning på förfrågan.
            </p>
            <p className="mt-3">
              Räkna alltid på total kostnad: licens, implementation, utbildning,
              integrationer och intern projekttid. Kontrollera aktuell prissättning
              direkt med leverantören.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-black mb-3">
              AddSecure Transport (tidigare Transics/OnTime)
            </h2>
            <p>
              AddSecure Transport är i många fall ett bredare erbjudande där
              transportstyrning kombineras med uppkopplad fordonsmiljö,
              telematik och relaterade tjänster.
            </p>
            <p className="mt-3">
              På frågan “Vad är AddSecure Transport för ett system?” är ett praktiskt
              svar: en plattform som ofta väljs när man vill kombinera TMS-funktioner med
              tät koppling till fordonsdata, spårbarhet och efterlevnad.
            </p>

            <h3 className="text-xl font-medium text-black mt-6 mb-2">
              Passar bäst för
            </h3>
            <p>
              Åkerier med större fordonsflotta, flera trafikområden eller höga krav på
              uppföljning av fordon, förare och avvikelser i realtid.
            </p>
            <p className="mt-3">
              Passar också verksamheter där ni redan använder AddSecure-nära tjänster och
              vill samla driftdata i färre system. Det kan ge tydliga vinster i överblick
              om implementationen görs ordentligt.
            </p>

            <h3 className="text-xl font-medium text-black mt-6 mb-2">Styrkor</h3>
            <p>
              Kombinationen av transportprocess och fordonsnära data är en stark punkt.
              För verksamheter med höga krav på kontroll och spårbarhet kan det minska
              behovet av separata verktyg.
            </p>
            <p className="mt-3">
              AddSecure har en stor nordisk närvaro enligt uppgifter från leverantören,
              vilket kan vara en fördel för er som kör över flera marknader eller behöver
              stöd i mer komplexa miljöer.
            </p>

            <h3 className="text-xl font-medium text-black mt-6 mb-2">Svagheter</h3>
            <p>
              När plattformen täcker mycket blir implementationen ofta mer omfattande.
              Det kräver tydlig projektledning och prioritering för att undvika att
              införandet drar ut på tiden.
            </p>
            <p className="mt-3">
              Kostnadsbilden kan också bli svårare att överblicka om flera moduler,
              hårdvarukomponenter och integrationer läggs till successivt.
            </p>

            <h3 className="text-xl font-medium text-black mt-6 mb-2">Prisindikation</h3>
            <p>
              Vanligt upplägg är paketlösning med tillägg för specifika funktioner,
              integrationer och ibland hårdvara. Exakta nivåer är normalt prissättning på
              förfrågan.
            </p>
            <p className="mt-3">
              Be alltid om en tydlig totalbild för 24–36 månader, inklusive drift,
              support, uppgraderingar och eventuella bindningstider.
              Kontrollera aktuell prissättning direkt med leverantören.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-black mb-3">
              Eget system / egenutvecklat TMS
            </h2>
            <p>
              Ett egenutvecklat TMS är exakt det det låter som: ni bygger och förvaltar
              er egen plattform. Ni får full kontroll över logik, datamodell,
              användarflöden och prioriteringar.
            </p>
            <p className="mt-3">
              På frågan “Vad är ett eget TMS för system?” är svaret att det i grunden är
              ett internt produktbolag vid sidan av åkeriet. Det ger frihet, men också
              ansvar som annars ligger hos en extern leverantör.
            </p>

            <h3 className="text-xl font-medium text-black mt-6 mb-2">
              Passar bäst för
            </h3>
            <p>
              Åkerier med unika transportupplägg där standard-TMS skapar för stora
              kompromisser, och där ni redan har intern teknikledning och budget för
              långsiktig förvaltning.
            </p>
            <p className="mt-3">
              Passar även koncerner som ser programvara som strategisk tillgång och kan
              bära investeringar över flera år utan snabb payback.
            </p>

            <h3 className="text-xl font-medium text-black mt-6 mb-2">Styrkor</h3>
            <p>
              Ni kan bygga exakt stöd för era processer och differentiera er där andra
              tvingas jobba i standardflöden. Integrationer kan designas från början efter
              era datakrav.
            </p>
            <p className="mt-3">
              Ni styr själva releaseplan, prioritering och roadmap. Ingen extern part
              avgör när en viss funktion blir tillgänglig.
            </p>

            <h3 className="text-xl font-medium text-black mt-6 mb-2">Svagheter</h3>
            <p>
              Utvecklingsrisk, personberoende och lång tid till stabil drift är de
              vanligaste problemen. Om nyckelpersoner försvinner kan tempot falla snabbt.
            </p>
            <p className="mt-3">
              Total kostnad blir ofta högre än planerat eftersom integrationsunderhåll,
              säkerhet, testning och support måste bemannas över tid.
            </p>

            <h3 className="text-xl font-medium text-black mt-6 mb-2">När är det värt det?</h3>
            <p>
              När ni har processer som ger verkligt konkurrensövertag och inte kan stödjas
              rimligt i befintliga plattformar. När ni samtidigt har mandat, budget och
              teknisk ledning att driva ett flerårigt produktarbete.
            </p>
            <p className="mt-3">
              För de flesta små och medelstora åkerier är ett etablerat TMS ändå den
              snabbare vägen till effekt. Egenutveckling blir oftast rätt först när
              verksamheten är stor nog att bära ett internt produktteam.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-black mb-3">
              Övriga alternativ att känna till
            </h2>

            <h3 className="text-xl font-medium text-black mt-6 mb-2">T5</h3>
            <p>
              T5 förekommer i många diskussioner om transporthanteringssystem Sverige,
              särskilt där verksamheten vill kombinera planering med bred ERP-liknande
              stöd. Styrkan brukar vara helhetsflöde och processdjup, men införandet kan
              kräva mer verksamhetsarbete än man först tror.
            </p>

            <h3 className="text-xl font-medium text-black mt-6 mb-2">Trimble TMS</h3>
            <p>
              Trimble TMS blir ofta aktuellt för bolag som har internationell exponering
              eller redan kör andra Trimble-relaterade lösningar. Det kan vara starkt i
              större miljöer, men det är viktigt att säkerställa lokal passform för
              svenska arbetsflöden och rapportkrav.
            </p>

            <h3 className="text-xl font-medium text-black mt-6 mb-2">Centiro</h3>
            <p>
              Centiro förknippas ofta med större transportköpare och avancerad
              transportorkestrering. För åkerier kan det vara relevant i vissa typer av
              upplägg, men ni behöver granska om lösningen matchar er operativa vardag
              eller om den är byggd för en annan roll i kedjan.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-black mb-3">
              Vilket TMS passar ert åkeri?
            </h2>
            <p>
              Här är en enkel beslutsmodell för välja TMS åkeri. Använd den som första
              sortering innan ni går in i demo, pilot och upphandling.
            </p>

            <h3 className="text-xl font-medium text-black mt-6 mb-2">
              If-then logik för TMS system åkeri
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Om ni är under 10 bilar</strong> och har begränsad intern IT-tid,
                välj ett etablerat standard-TMS med snabb implementation och låg
                initial risk.
              </li>
              <li>
                <strong>Om ni kör specialtransporter</strong> med ovanliga regler,
                utvärdera först om anpassningar räcker i standardsystem. Om inte,
                kan hybrid eller egenutvecklad modul vara rimlig.
              </li>
              <li>
                <strong>Om ni redan har ett TMS men vill lägga till AI</strong>, byt inte
                system direkt. Börja med datakvalitet, API-access och ett avgränsat
                AI-case som omplanering eller avvikelsehantering.
              </li>
              <li>
                <strong>Om ni växer snabbt</strong> och planerar fler depåer,
                prioritera skalbarhet, rollstyrning och integrationsförmåga över
                kortsiktigt lägsta licenspris.
                {" "}Vill ni också minska tomkörningarna när ni väl har rätt system på plats?{" "}
                <Link href="/artiklar/minska-tomkorningar-konkreta-atgarder" className="text-black underline underline-offset-2">
                  Läs våra 5 konkreta åtgärder mot tomkörning.
                </Link>
              </li>
              <li>
                <strong>Om ni har höga krav på telematik/compliance</strong>,
                välj plattform där fordonsdata och transportprocess redan sitter ihop
                istället för att sy ihop för många separata verktyg.
              </li>
            </ul>
            <p className="mt-4">
              Vill ni börja enkelt finns en bra grundguide här:{" "}
              <Link href="/artiklar/digitalisering-akerinaring-var-borjar-man" className="text-black underline underline-offset-2">
                Digitalisering i åkerinäringen — var börjar man?
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-black mb-3">Vad kostar det att byta TMS?</h2>
            <p>
              Själva licensen är bara en del av kostnaden. De stora posterna kommer ofta
              från migration av masterdata, integrationer, utbildning och intern
              omställning i arbetssätt.
            </p>
            <p className="mt-3">
              En realistisk nivå för små till medelstora åkerier är att planera för en
              initial projektkostnad i spannet cirka 100 000–600 000 kr,
              beroende på komplexitet. Större implementationer kan ligga betydligt högre,
              särskilt om flera system och bolag ska kopplas ihop.
            </p>
            <p className="mt-3">
              Lägg dessutom in en produktionssvacka under uppstart, vanligtvis 2–8 veckor,
              där effektiviteten tillfälligt sjunker medan teamet lär sig nya rutiner.
              {" "}Funderar ni på hur ni avlastar trafikledningen under och efter bytet?{" "}
              <Link href="/artiklar/trafikledarbrist-sverige-teknik-avlastar" className="text-black underline underline-offset-2">
                Läs vår analys om trafikledarbrist och automation.
              </Link>
              {" "}Den kostnaden missas ofta i kalkylen men påverkar helheten.
            </p>
            <p className="mt-3">
              Ett enkelt sätt att budgetera är att dela upp bytet i fyra block:
              förstudie, datamigrering, driftsättning och stabilisering. Om ett block
              saknar ägare blir projektet nästan alltid dyrare än planerat.
            </p>
            <p className="mt-3">
              Räkna också med dolda kostnader som sällan står på första offerten:
              intern tid från trafikledare, justering av kundspecifika prislistor,
              test av EDI-flöden, ändringar i fakturaprocess och extra support under
              första kvartalet efter go-live.
            </p>
            <p className="mt-3">
              För att få en rättvis jämförelse mellan leverantörer bör ni be om samma
              kalkylformat från alla: engångskostnad, löpande månadskostnad,
              integrationskostnad, utbildning och uppskattad interninsats i timmar.
              Då blir beslutet jämförbart på riktigt.
            </p>
            <p className="mt-3">
              För en egen ROI-bedömning kan ni använda den här modellen:{" "}
              <Link href="/artiklar/roi-automation-transport-kalkyl" className="text-black underline underline-offset-2">
                Så räknar du ROI på automation i transport
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-black mb-3">Vanliga frågor om TMS-val</h2>

            <div className="space-y-5">
              <div>
                <h3 className="text-lg font-medium text-black">
                  Fråga: Hur lång tid tar ett TMS-byte för ett normalt åkeri?
                </h3>
                <p>
                  Svar: Ofta 2–6 månader från start till stabil drift för ett mindre eller
                  medelstort åkeri. Tiden beror främst på datakvalitet,
                  integrationsbehov och hur mycket ni ändrar arbetssätt samtidigt.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black">
                  Fråga: Ska vi välja billigaste systemet om funktionerna verkar lika?
                </h3>
                <p>
                  Svar: Inte utan att räkna på total kostnad över minst 24 månader.
                  Billig licens kan bli dyr om implementation, support och integrationer
                  blir tunga eller om systemet kräver extra manuellt arbete.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black">
                  Fråga: När är egenutvecklat TMS ett rimligt val?
                </h3>
                <p>
                  Svar: När era processer är så unika att standardsystem skapar tydlig
                  affärsförlust, och när ni har intern förmåga att driva utveckling,
                  drift, support och säkerhet långsiktigt.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black">
                  Fråga: Kan vi lägga AI ovanpå vårt befintliga TMS i stället för att byta?
                </h3>
                <p>
                  Svar: Ja, ofta. Börja med ett tydligt område där datan redan finns,
                  till exempel avvikelser, orderklassning eller förslag på omplanering.
                  Då får ni effekt snabbare och lägre risk än ett fullskaligt byte.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black">
                  Fråga: Hur undviker vi att välja fel system?
                </h3>
                <p>
                  Svar: Kör en strukturerad TMS jämförelse Sverige med fasta kriterier,
                  begär kundreferenser i liknande trafikupplägg och genomför en avgränsad
                  pilot med riktiga data innan ni skriver långsiktigt avtal.
                </p>
              </div>
            </div>
          </section>

          <RelatedSolutions slugs={["tms-integration", "trafikledning"]} />

          <section className="rounded-2xl border border-gray-200 p-6 bg-white mt-10">
            <h2 className="text-2xl font-medium text-black mb-3">
              Osäker på vilket system som passar er?
            </h2>
            <p>
              Om ni vill ha ett neutralt bollplank för ert val av TMS system åkeri,
              börja med ett kort nulägesmöte och en enkel beslutsmatris.
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
