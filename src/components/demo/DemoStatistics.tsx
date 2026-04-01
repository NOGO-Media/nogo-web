"use client";

import { useState } from "react";
import { Check, Download } from "lucide-react";

// ── Data ──────────────────────────────────────────────────

const tabs = [
  "Översikt", "Ut / In", "Ekipage", "Fyllnad",
  "Arbetstid", "Retur", "Linjer", "Destinationer",
] as const;

const planresultat = [
  { label: "EKIPAGE", value: "62", sub: "av 88 tillgängliga" },
  { label: "ORDRAR I PLAN", value: "244", sub: "av 251 körbara" },
  { label: "FYLLNAD UT", value: "92.3%", sub: "856.4 / 927.8 flm" },
  { label: "ARBETSTID", value: "91.7%", sub: "538/587h" },
  { label: "ÖVERTID", value: "2", sub: null, alert: true },
  { label: "TOTAL KM", value: "36 420", sub: "62 planerade pass" },
];

const godsflode = [
  { label: "UT: LEVERANS-FLM", value: "856.4", sub: "13.8 flm/pass", color: "text-blue-600" },
  { label: "UT: FYLLNAD", value: "92.3%", sub: "snitt per pass", color: "text-blue-600" },
  { label: "IN: RETUR-FLM", value: "124.6", sub: "18 av 62 pass", color: "text-green-600" },
  { label: "IN: FYLLNAD", value: "68.4%", sub: "44 utan retur", color: "text-green-600" },
];

const resurser = [
  { label: "MULTITRIP", value: "8", sub: "sparar 8 ekipage", color: "text-blue-600" },
  { label: "RETUR", value: "18", sub: "29% av pass", color: "text-green-600" },
  { label: "LEDIG TID", value: "49h", sub: "0.8h/pass", color: "text-amber-600" },
  { label: "SNITT KM/PASS", value: "587", sub: null, color: "text-gray-600" },
  { label: "SNITT ORDRAR/PASS", value: "3.9", sub: "62 planerade pass", color: "text-gray-600" },
];

const fyllnadsData = [
  { range: "<60%", count: 1, pct: 2 },
  { range: "60-70%", count: 3, pct: 5 },
  { range: "70-80%", count: 7, pct: 11 },
  { range: "80-90%", count: 19, pct: 31 },
  { range: "90-95%", count: 22, pct: 35 },
  { range: ">95%", count: 10, pct: 16 },
];

const arbetstidData = [
  { range: "0-4h", count: 0, pct: 0 },
  { range: "4-6h", count: 4, pct: 6 },
  { range: "6-8h", count: 21, pct: 34 },
  { range: "8-10h", count: 26, pct: 42 },
  { range: "10-12h", count: 9, pct: 15 },
  { range: "12h+", count: 2, pct: 3 },
];

const ekipageData = [
  { label: "B+F+S", pct: 72.6, count: 45, color: "#6366f1" },
  { label: "B+S", pct: 17.7, count: 11, color: "#22c55e" },
  { label: "B+F", pct: 9.7, count: 6, color: "#eab308" },
];

const orderStatus = {
  summary: [
    { label: "TOTALT", value: "268", color: "text-gray-900" },
    { label: "KÖRBARA IDAG", value: "251", color: "text-blue-600" },
    { label: "EJ UPPHÄMTADE", value: "17", color: "text-amber-600" },
    { label: "TILLDELADE", value: "244", color: "text-green-600" },
    { label: "EJ TILLDELADE", value: "7", color: "text-red-600" },
    { label: "MAKULERADE", value: "0", color: "text-gray-400" },
  ],
  metrics: [
    { label: "FLM I PLAN", value: "856.4" },
    { label: "FLM KÖRBART", value: "878.2" },
    { label: "SNITT FLM/ORDER", value: "3.51" },
    { label: "SNITT VIKT/ORDER", value: "4 120 kg" },
  ],
};

const topDestinationer = [
  { name: "Stockholm", count: 34, pct: 100 },
  { name: "Jönköping", count: 28, pct: 82 },
  { name: "Norrköping", count: 24, pct: 71 },
  { name: "Örebro", count: 19, pct: 56 },
  { name: "Linköping", count: 16, pct: 47 },
];

const topLinjer = [
  { name: "Nkpg → Sthlm", info: "8 pass · 34 ordrar · 1 320 km", fyllnad: "94.2%", pct: 94 },
  { name: "Lkpg → Jkpg", info: "6 pass · 22 ordrar · 768 km", fyllnad: "91.8%", pct: 92 },
  { name: "Sthlm → Örebro", info: "5 pass · 19 ordrar · 1 010 km", fyllnad: "88.5%", pct: 89 },
  { name: "Nkpg → Gbg", info: "4 pass · 16 ordrar · 1 240 km", fyllnad: "93.1%", pct: 93 },
  { name: "Nyköping → Nkpg", info: "3 pass · 12 ordrar · 285 km", fyllnad: "86.7%", pct: 87 },
];

// ── Components ────────────────────────────────────────────

function StatCard({ label, value, sub, alert, color }: {
  label: string; value: string; sub?: string | null; alert?: boolean; color?: string;
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
      <p className={`text-[10px] font-semibold tracking-wider mb-2 ${alert ? "text-red-500" : color || "text-gray-400"}`}>
        {label}
      </p>
      <p className={`text-2xl font-semibold ${alert ? "text-red-600" : ""}`}>{value}</p>
      {sub && <p className="text-xs text-gray-400 mt-1">{sub}</p>}
    </div>
  );
}

function BarChart({ data, colorClass }: {
  data: { range: string; count: number; pct: number }[];
  colorClass: string;
}) {
  const maxCount = Math.max(...data.map((d) => d.count), 1);
  return (
    <div className="flex items-end gap-3 px-4">
      {data.map((d) => {
        const barPct = Math.max((d.count / maxCount) * 100, d.count ? 8 : 0);
        return (
          <div key={d.range} className="flex-1 flex flex-col items-center">
            <div className="w-full flex flex-col items-center justify-end" style={{ height: "120px" }}>
              <span className="text-[10px] font-medium text-gray-600 mb-1">
                {d.count || ""}
              </span>
              <div
                className={`w-full rounded-t ${colorClass}`}
                style={{ height: `${barPct}%` }}
              />
            </div>
            <span className="text-[10px] text-gray-400 whitespace-nowrap mt-2">{d.range}</span>
          </div>
        );
      })}
    </div>
  );
}

function DonutChart({ segments }: { segments: typeof ekipageData }) {
  const total = segments.reduce((s, d) => s + d.count, 0);
  // Simple donut with CSS conic-gradient
  const nonZero = segments.filter((s) => s.count > 0);
  let gradientParts: string[] = [];
  let offset = 0;
  nonZero.forEach((s) => {
    const pct = (s.count / total) * 100;
    gradientParts.push(`${s.color} ${offset}% ${offset + pct}%`);
    offset += pct;
  });
  if (gradientParts.length === 0) gradientParts = ["#e5e7eb 0% 100%"];

  return (
    <div className="flex items-center gap-6">
      <div
        className="w-20 h-20 rounded-full shrink-0"
        style={{
          background: `conic-gradient(${gradientParts.join(", ")})`,
          mask: "radial-gradient(circle at center, transparent 55%, black 56%)",
          WebkitMask: "radial-gradient(circle at center, transparent 55%, black 56%)",
        }}
      />
      <div className="space-y-2">
        {segments.map((s) => (
          <div key={s.label} className="flex items-center gap-2 text-xs">
            <div className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ backgroundColor: s.color }} />
            <span className="text-gray-600">{s.label}</span>
            <span className="ml-auto font-medium">{s.count}</span>
            <span className="text-gray-400 w-12 text-right">{s.pct.toFixed(1)}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function HorizontalBar({ name, value, pct, color }: {
  name: string; value: string | number; pct: number; color: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-gray-600 w-24 shrink-0 truncate">{name}</span>
      <div className="flex-1 h-4 bg-gray-100 rounded overflow-hidden">
        <div
          className={`h-full rounded ${color}`}
          style={{ width: `${Math.max(pct, 2)}%` }}
        />
      </div>
      <span className="text-xs font-medium w-8 text-right shrink-0">{value}</span>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────

export default function DemoStatistics() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-lg font-medium">Statistik för tis 1 april</h2>
          <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-xs font-medium px-2 py-0.5 rounded-full">
            <Check size={12} /> Planerad
          </span>
          <span className="text-xs text-gray-400">2026-04-01 20:00</span>
        </div>
        <button className="inline-flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
          <Download size={14} />
          Exportera Excel
        </button>
      </div>

      {/* Summary bar */}
      <div className="bg-white rounded-xl border border-gray-200 px-5 py-3 flex items-center gap-6">
        {orderStatus.summary.slice(0, 4).map((s) => (
          <div key={s.label} className="flex items-baseline gap-1.5">
            <span className={`text-lg font-semibold ${s.color}`}>{s.value}</span>
            <span className="text-[10px] text-gray-400 uppercase tracking-wider">{s.label}</span>
          </div>
        ))}
        <span className="ml-auto text-xs text-green-600 font-medium">
          97% tilldelningsgrad
        </span>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 flex-wrap">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActiveTab(i)}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              activeTab === i
                ? "bg-blue-600 text-white"
                : "bg-white border border-gray-200 text-gray-500 hover:bg-gray-50"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Planresultat */}
      <div>
        <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-3">
          Planresultat
        </p>
        <div className="grid grid-cols-6 gap-3">
          {planresultat.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      </div>

      {/* Godsflöde */}
      <div>
        <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-3">
          Godsflöde (planerade pass)
        </p>
        <div className="grid grid-cols-4 gap-3">
          {godsflode.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      </div>

      {/* Resurser */}
      <div>
        <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-3">
          Resurser
        </p>
        <div className="grid grid-cols-5 gap-3">
          {resurser.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-2 gap-6">
        {/* Fyllnadsfördelning */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="text-sm font-medium mb-4">Fyllnadsfördelning</h3>
          <BarChart data={fyllnadsData} colorClass="bg-green-500" />
        </div>

        {/* Arbetstidsfördelning */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="text-sm font-medium mb-4">Arbetstidsfördelning</h3>
          <BarChart data={arbetstidData} colorClass="bg-indigo-500" />
        </div>
      </div>

      {/* Ekipage + Orderstatus */}
      <div className="grid grid-cols-2 gap-6">
        {/* Ekipagefördelning */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="text-sm font-medium mb-4">Ekipagefördelning</h3>
          <DonutChart segments={ekipageData} />
        </div>

        {/* Orderstatus */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="text-sm font-medium mb-4">Orderstatus</h3>
          <div className="flex gap-4 mb-4">
            {orderStatus.summary.map((s) => (
              <div key={s.label} className="text-center">
                <p className={`text-lg font-semibold ${s.color}`}>{s.value}</p>
                <p className="text-[9px] text-gray-400 uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-100 pt-3 grid grid-cols-4 gap-3">
            {orderStatus.metrics.map((m) => (
              <div key={m.label} className="text-center">
                <p className="text-sm font-semibold">{m.value}</p>
                <p className="text-[9px] text-gray-400 uppercase tracking-wider">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top 5 */}
      <div className="grid grid-cols-2 gap-6">
        {/* Top 5 destinationer */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="text-sm font-medium mb-4">Top 5 destinationer</h3>
          <div className="space-y-2.5">
            {topDestinationer.map((d) => (
              <HorizontalBar
                key={d.name}
                name={d.name}
                value={d.count}
                pct={d.pct}
                color="bg-green-500"
              />
            ))}
          </div>
        </div>

        {/* Top 5 linjer */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="text-sm font-medium mb-4">Top 5 linjer</h3>
          <div className="space-y-3">
            {topLinjer.map((l) => (
              <div key={l.name}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium">{l.name}</span>
                  <span className="text-xs text-green-600 font-medium">{l.fyllnad}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-3 bg-gray-100 rounded overflow-hidden">
                    <div
                      className="h-full rounded bg-green-500"
                      style={{ width: `${Math.max(l.pct, 2)}%` }}
                    />
                  </div>
                </div>
                <p className="text-[10px] text-gray-400 mt-0.5">{l.info}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
