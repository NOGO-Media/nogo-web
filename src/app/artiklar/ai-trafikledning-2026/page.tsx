"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calculator } from "lucide-react";

// ── ROI Calculator ────────────────────────────────────────

function ROICalculator() {
  const [admins, setAdmins] = useState(3);
  const [hourlyRate, setHourlyRate] = useState(400);
  const [hoursPerDay, setHoursPerDay] = useState(8);
  const [daysPerMonth, setDaysPerMonth] = useState(20);
  const [automationPct, setAutomationPct] = useState(85);

  const monthlyCost = admins * hourlyRate * hoursPerDay * daysPerMonth;
  const monthlySaving = Math.round(monthlyCost * (automationPct / 100));
  const yearlySaving = monthlySaving * 12;
  const hoursFreed = Math.round(admins * hoursPerDay * daysPerMonth * (automationPct / 100));

  const reset = () => {
    setAdmins(3);
    setHourlyRate(400);
    setHoursPerDay(8);
    setDaysPerMonth(20);
    setAutomationPct(85);
  };

  return (
    <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 md:p-8 my-10">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center">
          <Calculator size={20} className="text-gray-700" />
        </div>
        <div>
          <h3 className="font-medium">ROI-räknare: AI-trafikledning</h3>
          <p className="text-xs text-gray-400">Räkna på er besparing på 30 sekunder</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Inputs */}
        <div className="space-y-5">
          <div>
            <label className="text-sm text-gray-600 mb-1.5 block">Antal administratörer</label>
            <input type="number" value={admins} onChange={(e) => setAdmins(Number(e.target.value))} min={1} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-gray-400" />
          </div>
          <div>
            <label className="text-sm text-gray-600 mb-1.5 block">Timkostnad inkl. sociala avgifter (SEK/h)</label>
            <input type="number" value={hourlyRate} onChange={(e) => setHourlyRate(Number(e.target.value))} min={0} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-gray-400" />
          </div>
          <div>
            <label className="text-sm text-gray-600 mb-1.5 block">Timmar per dag</label>
            <input type="number" value={hoursPerDay} onChange={(e) => setHoursPerDay(Number(e.target.value))} min={1} max={24} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-gray-400" />
          </div>
          <div>
            <label className="text-sm text-gray-600 mb-1.5 block">Arbetsdagar per månad</label>
            <input type="number" value={daysPerMonth} onChange={(e) => setDaysPerMonth(Number(e.target.value))} min={1} max={31} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-gray-400" />
          </div>
          <div>
            <label className="text-sm text-gray-600 mb-1.5 block">Automationsgrad: {automationPct}%</label>
            <input type="range" value={automationPct} onChange={(e) => setAutomationPct(Number(e.target.value))} min={50} max={95} className="w-full accent-black" />
          </div>
        </div>

        {/* Results */}
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <p className="text-xs text-gray-400 mb-1">Nuvarande månadskostnad</p>
            <p className="text-2xl font-semibold">{monthlyCost.toLocaleString("sv-SE")} kr</p>
          </div>
          <div className="bg-white rounded-xl border border-green-200 p-5">
            <p className="text-xs text-green-600 mb-1">Beräknad besparing per månad</p>
            <p className="text-2xl font-semibold text-green-700">{monthlySaving.toLocaleString("sv-SE")} kr</p>
          </div>
          <div className="bg-white rounded-xl border border-green-200 p-5">
            <p className="text-xs text-green-600 mb-1">Beräknad besparing per år</p>
            <p className="text-2xl font-semibold text-green-700">{yearlySaving.toLocaleString("sv-SE")} kr</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <p className="text-xs text-gray-400 mb-1">Tid frigjord per månad</p>
            <p className="text-2xl font-semibold">{hoursFreed} timmar</p>
          </div>
          <div className="flex items-center gap-3">
            <button type="button" onClick={reset} className="text-xs text-gray-400 hover:text-gray-600 transition-colors">Reset till standard</button>
            <Link href="/kontakt" className="ml-auto inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
              Få en ROI-analys <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      <p className="text-xs text-gray-400 mt-4">
        Beräkningen är en uppskattning. Faktisk effekt beror på processer, system och datakvalitet.
      </p>
    </div>
  );
}

// ── Article Page ──────────────────────────────────────────

export default function AITrafikledningArticle() {
  return (
    <>
      <article className="pt-32 pb-24 md:pt-44">
        <div className="max-w-3xl mx-auto px-6">
          {/* Back link */}
          <Link href="/blogg" className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-black transition-colors mb-8">
            <ArrowLeft size={14} /> Tillbaka till bloggen
          </Link>

          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium bg-gray-100 border border-gray-200 px-3 py-1 rounded-full">AI & Automation</span>
              <span className="text-xs text-gray-400">12 min</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15]">
              AI Trafikledning 2026 – Så kan svenska åkerier spara miljoner med AI-automation
            </h1>
            <p className="mt-6 text-lg text-gray-500 leading-relaxed">
              AI trafikledning, automatiserad orderhantering och AI-agenter för transportbranschen är inte längre framtidsteknik. Här går vi igenom hur svenska åkerier kan automatisera upp till 85–95% av manuellt trafikledningsarbete under 2026.
            </p>
          </div>

          {/* Content */}
          <div className="prose-custom space-y-8">
            <p className="text-gray-600 leading-relaxed">
              För företag som hanterar omkring 400 ordrar per dag innebär AI-automation en dramatisk kostnadsförändring. I den här artikeln får ni en praktisk genomgång av hur en AI-trafikledare fungerar, vad automation innebär i kronor, hur ROI räknas ut och vilka risker som måste hanteras.
            </p>

            <h2 className="text-2xl font-medium mt-12 mb-4">Vad är AI trafikledning?</h2>
            <p className="text-gray-600 leading-relaxed">
              AI trafikledning är en mjukvarubaserad agent som kan utföra hela eller delar av dispatchprocessen automatiskt. Agenten kan bland annat:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Läsa inkommande transportordrar</li>
              <li>Matcha order mot rätt förare</li>
              <li>Kontrollera regler som ADR, zon, roll och skift</li>
              <li>Ta hänsyn till ETA och restid</li>
              <li>Fördela arbetsbelastning jämnt</li>
              <li>Flagga avvikelser för manuell hantering</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Till skillnad från traditionella TMS-system som kräver manuella klick i varje steg kan en AI-agent agera självständigt inom tydligt definierade regler och guardrails.
            </p>
            <p className="text-gray-500 text-sm">
              Ni ser ofta samma lösning beskriven som autonom dispatch, AI-driven orderfördelning, intelligent transport automation eller digital trafikledare.
            </p>

            <h2 className="text-2xl font-medium mt-12 mb-4">Kostnadsanalys: 400 kr per timme</h2>
            <p className="text-gray-600 leading-relaxed">Låt oss räkna på ett realistiskt scenario:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-600">
              <li>3 trafikledare</li>
              <li>400 ordrar per dag</li>
              <li>400 kr/timme i faktisk personalkostnad (inklusive sociala avgifter)</li>
              <li>8 timmars arbetsdag</li>
              <li>20 arbetsdagar per månad</li>
            </ul>

            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 my-6">
              <p className="text-sm font-medium mb-2">Månadskostnad för trafikledning:</p>
              <p className="text-gray-600">3 personer × 400 kr × 8 timmar × 20 arbetsdagar = <span className="font-semibold text-black">192 000 kr per månad</span></p>
            </div>

            <h3 className="text-xl font-medium mt-8 mb-3">Om 85% av arbetet automatiseras</h3>
            <p className="text-gray-600 leading-relaxed">
              Om 85% av dagens manuella arbete kan automatiseras blir den potentiella besparingen:
            </p>
            <div className="bg-green-50 rounded-xl border border-green-200 p-6 my-6 space-y-2">
              <p className="text-gray-700">85% av 192 000 kr = <span className="font-semibold text-green-700">163 200 kr per månad</span></p>
              <p className="text-gray-700">På årsbasis: <span className="font-semibold text-green-700">1 958 400 kr per år</span></p>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Och då har vi inte räknat in följdeffekter som minskade felkostnader, färre ombokningar, kortare ledtider och högre skalbarhet.
            </p>

            <h2 className="text-2xl font-medium mt-12 mb-4">Räkna på er besparing på 30 sekunder</h2>
            <p className="text-gray-600 leading-relaxed">
              Trafikledning och dispatch är ofta fullt av repetitiva moment: läsa order, matcha rätt resurs, dubbelkolla regler och uppdatera system. Med våra AI-agenter kan en stor del av det arbetet automatiseras — och människan fokuserar på undantag, kundkontakt och planering.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Fyll i ungefärliga siffror nedan. Räknaren visar en uppskattning av vad ni kan frigöra per månad och per år. Vill ni ha en mer exakt ROI-analys baserat på ert faktiska flöde och era system — kontakta oss så går vi igenom det.
            </p>
          </div>

          {/* ROI Calculator */}
          <ROICalculator />

          <div className="space-y-8">
            <h2 className="text-2xl font-medium mt-12 mb-4">Hur fungerar en AI-agent i praktiken?</h2>
            <p className="text-gray-600 leading-relaxed">En modern AI-trafikledare arbetar ofta i en tydlig sekvens:</p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-600">
              <li>Loggar in i transportportal eller TMS</li>
              <li>Läser in nya ordrar</li>
              <li>Identifierar krav (ADR, postnummerzon, transporttyp, tidsfönster)</li>
              <li>Beräknar restid och ETA</li>
              <li>Väljer optimal förare baserat på regler och kapacitet</li>
              <li>Tilldelar order</li>
              <li>Loggar beslut i dashboard</li>
              <li>Flaggar avvikelser i stället för att gissa</li>
            </ol>
            <p className="text-gray-600 leading-relaxed">
              En robust implementation inkluderar ofta heartbeat-övervakning, realtidsdashboard, ROI-panel, historisk statistik och felanalys.
            </p>

            <h2 className="text-2xl font-medium mt-12 mb-4">Är AI-trafikledning säkert?</h2>
            <p className="text-gray-600 leading-relaxed">Ja, om lösningen byggs korrekt. En seriös implementation:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Följer hårda regelkrav</li>
              <li>Gör inga fria tolkningar utanför definierade regler</li>
              <li>Flaggar osäkra ärenden</li>
              <li>Loggar alla beslut</li>
              <li>Tillåter mänsklig översyn och override</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              AI-agenten tar alltså inte bort ansvar. Den tar bort repetitiv administration så att trafikledare kan fokusera på undantag, kunddialog och planering.
            </p>

            <h2 className="text-2xl font-medium mt-12 mb-4">Vanliga frågor om AI i transportbranschen</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-2">Kan AI ersätta trafikledare?</h3>
                <p className="text-gray-600 leading-relaxed">AI kan automatisera majoriteten av repetitiva moment. Rollen för trafikledare skiftar mot undantagshantering, kunddialog och strategisk planering.</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Passar detta små åkerier?</h3>
                <p className="text-gray-600 leading-relaxed">Ja. Vi bygger system för allt från mindre åkerier till stora flottor. Särskilt bolag med cirka 200–500 ordrar per dag ser ofta stark ROI.</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Vad krävs tekniskt?</h3>
                <p className="text-gray-600 leading-relaxed">Det krävs inga systembyten eller stora IT-projekt.</p>
                <ul className="list-disc pl-6 space-y-1 text-gray-600 mt-2">
                  <li>Ett befintligt TMS, affärssystem eller orderportal</li>
                  <li>Tydliga arbetsregler (zonindelning, fordonstyper, ADR, prioriteringar m.m.)</li>
                  <li>Behörighet så att agenten kan arbeta i systemet</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-2">
                  API är en fördel — men inget krav. Agenten kan arbeta direkt i befintliga system via säker automation. Implementationen sker stegvis och utan att störa den dagliga driften.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-medium mt-12 mb-4">Varför 2026 är brytpunkten</h2>
            <p className="text-gray-600 leading-relaxed">Transportbranschen har länge varit personalintensiv, men tre saker har förändrats:</p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-600">
              <li>AI-modeller är stabilare</li>
              <li>API-integrationer är billigare</li>
              <li>Automation är bevisat skalbar i drift</li>
            </ol>
            <p className="text-gray-600 leading-relaxed">
              Åkerier som implementerar AI-trafikledning tidigt får lägre fasta kostnader, högre marginal och möjlighet att växa utan att skala administration i samma takt.
            </p>

            <h2 className="text-2xl font-medium mt-12 mb-4">Sammanfattning</h2>
            <p className="text-gray-600 leading-relaxed">
              För ett svenskt åkeri med 3 trafikledare och 400 ordrar per dag kan AI-automation innebära:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Cirka <span className="font-semibold text-black">163 000 kr</span> i månadsbesparing</li>
              <li>Nästan <span className="font-semibold text-black">2 miljoner kronor</span> i årlig besparing</li>
              <li>Högre precision i tilldelning</li>
              <li>Bättre skalbarhet i drift</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              AI-trafikledning är inte en trend. Det är nästa steg i transportbranschens digitalisering.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-gray-950 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl font-medium text-white mb-3">
              Vill ni se vad AI kan göra för ert åkeri?
            </h2>
            <p className="text-gray-400 mb-6">
              Boka ett kostnadsfritt strategisamtal. Vi kartlägger era flöden och visar konkret ROI.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-3.5 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              Boka strategi-samtal <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
