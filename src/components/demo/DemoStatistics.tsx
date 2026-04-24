"use client";

import { useMemo, useState } from "react";
import { Check, Download, TrendingUp, TrendingDown } from "lucide-react";
import { useDemoStore } from "./demoStore";
import DayPicker from "./DayPicker";

// ── Chart helpers (unchanged visual language) ─────────────

function StatCard({
  label,
  value,
  sub,
  alert,
  color,
}: {
  label: string;
  value: string;
  sub?: string | null;
  alert?: boolean;
  color?: string;
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
      <p
        className={`text-[10px] font-semibold tracking-wider mb-2 ${
          alert ? "text-red-500" : color || "text-gray-500"
        }`}
      >
        {label}
      </p>
      <p className={`text-2xl font-semibold ${alert ? "text-red-600" : ""}`}>{value}</p>
      {sub && <p className="text-xs text-gray-500 mt-1">{sub}</p>}
    </div>
  );
}

function BarChart({
  data,
  colorClass,
}: {
  data: { range: string; count: number }[];
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
              <span className="text-[10px] font-medium text-gray-600 mb-1">{d.count || ""}</span>
              <div className={`w-full rounded-t ${colorClass}`} style={{ height: `${barPct}%` }} />
            </div>
            <span className="text-[10px] text-gray-500 whitespace-nowrap mt-2">{d.range}</span>
          </div>
        );
      })}
    </div>
  );
}

function DonutChart({ segments }: { segments: { label: string; count: number; pct: number; color: string }[] }) {
  const total = segments.reduce((s, d) => s + d.count, 0) || 1;
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
            <span className="text-gray-500 w-12 text-right">{s.pct.toFixed(1)}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function HorizontalBar({
  name,
  value,
  pct,
  color,
}: {
  name: string;
  value: string | number;
  pct: number;
  color: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-gray-600 w-24 shrink-0 truncate">{name}</span>
      <div className="flex-1 h-4 bg-gray-100 rounded overflow-hidden">
        <div className={`h-full rounded ${color}`} style={{ width: `${Math.max(pct, 2)}%` }} />
      </div>
      <span className="text-xs font-medium w-8 text-right shrink-0">{value}</span>
    </div>
  );
}

// ── Derive data from store ────────────────────────────────

function useDayStatistics() {
  const { state, selectedDay } = useDemoStore();

  return useMemo(() => {
    const dayOrders = state.data.orders.filter((o) => o.dayId === selectedDay.id);
    const dayShifts = state.data.shifts.filter((s) => s.dayId === selectedDay.id);

    const planned = dayOrders.filter((o) => o.shiftId !== null);
    const unplanned = dayOrders.filter((o) => o.shiftId === null && !o.cancelled);
    const cancelled = dayOrders.filter((o) => o.cancelled);

    const totalFlm = dayOrders.reduce((s, o) => s + o.flm, 0);
    const plannedFlm = planned.reduce((s, o) => s + o.flm, 0);
    const totalKm = dayShifts.reduce((s, sh) => s + sh.distanceKm, 0);
    const totalWorkMins = dayShifts.reduce((s, sh) => s + sh.workMinutes, 0);
    const maxWorkMins = dayShifts.reduce((s, sh) => s + sh.maxWorkMinutes, 0);
    const overtimeShifts = dayShifts.filter((sh) => sh.workMinutes > sh.maxWorkMinutes).length;
    const overtimeHours = dayShifts.reduce(
      (s, sh) => s + Math.max(sh.workMinutes - sh.maxWorkMinutes, 0) / 60,
      0
    );

    const avgFlakFill =
      dayShifts.filter((s) => s.flakId).reduce((s, sh) => s + sh.flakFillPct, 0) /
      Math.max(dayShifts.filter((s) => s.flakId).length, 1);
    const avgSlapFill =
      dayShifts.filter((s) => s.slapId).reduce((s, sh) => s + sh.slapFillPct, 0) /
      Math.max(dayShifts.filter((s) => s.slapId).length, 1);

    // Ekipage distribution
    const bfs = dayShifts.filter((sh) => sh.flakId && sh.slapId).length;
    const bf = dayShifts.filter((sh) => sh.flakId && !sh.slapId).length;
    const bs = dayShifts.filter((sh) => !sh.flakId && sh.slapId).length;
    const totalEkipage = bfs + bf + bs || 1;

    const ekipageData = [
      { label: "B+F+S", count: bfs, pct: (bfs / totalEkipage) * 100, color: "#6366f1" },
      { label: "B+S", count: bs, pct: (bs / totalEkipage) * 100, color: "#22c55e" },
      { label: "B+F", count: bf, pct: (bf / totalEkipage) * 100, color: "#eab308" },
    ];

    // Fill distribution (combined flak + slap)
    const fillBuckets = [
      { range: "<60%", count: 0 },
      { range: "60-70%", count: 0 },
      { range: "70-80%", count: 0 },
      { range: "80-90%", count: 0 },
      { range: "90-95%", count: 0 },
      { range: ">95%", count: 0 },
    ];
    dayShifts.forEach((sh) => {
      const pct = Math.max(sh.flakFillPct, sh.slapFillPct);
      if (pct < 60) fillBuckets[0].count++;
      else if (pct < 70) fillBuckets[1].count++;
      else if (pct < 80) fillBuckets[2].count++;
      else if (pct < 90) fillBuckets[3].count++;
      else if (pct < 95) fillBuckets[4].count++;
      else fillBuckets[5].count++;
    });

    const workBuckets = [
      { range: "0-4h", count: 0 },
      { range: "4-6h", count: 0 },
      { range: "6-8h", count: 0 },
      { range: "8-10h", count: 0 },
      { range: "10-12h", count: 0 },
      { range: "12h+", count: 0 },
    ];
    dayShifts.forEach((sh) => {
      const h = sh.workMinutes / 60;
      if (h < 4) workBuckets[0].count++;
      else if (h < 6) workBuckets[1].count++;
      else if (h < 8) workBuckets[2].count++;
      else if (h < 10) workBuckets[3].count++;
      else if (h < 12) workBuckets[4].count++;
      else workBuckets[5].count++;
    });

    // Top destinations
    const destCounts: Record<string, number> = {};
    dayOrders.forEach((o) => {
      destCounts[o.delivery] = (destCounts[o.delivery] || 0) + 1;
    });
    const topDest = Object.entries(destCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([name, count]) => ({ name, count }));
    const maxDest = Math.max(...topDest.map((d) => d.count), 1);

    // Top routes
    const routeCounts: Record<string, { count: number; km: number }> = {};
    dayShifts.forEach((sh) => {
      const areas = [sh.area];
      areas.forEach((_a, i) => {
        if (i === 0) return;
      });
    });
    dayOrders.forEach((o) => {
      const key = `${o.pickup} → ${o.delivery}`;
      routeCounts[key] = routeCounts[key] || { count: 0, km: 0 };
      routeCounts[key].count++;
    });
    const topLinjer = Object.entries(routeCounts)
      .sort((a, b) => b[1].count - a[1].count)
      .slice(0, 5)
      .map(([name, v], idx) => {
        // Deterministic "fill" derived from rank, so render is idempotent.
        const pct = 96 - idx * 2;
        return {
          name,
          info: `${v.count} ordrar`,
          fyllnad: `${pct}%`,
          pct,
        };
      });

    return {
      dayOrders,
      dayShifts,
      planned,
      unplanned,
      cancelled,
      totalFlm,
      plannedFlm,
      totalKm,
      totalWorkMins,
      maxWorkMins,
      overtimeShifts,
      overtimeHours,
      avgFlakFill,
      avgSlapFill,
      ekipageData,
      fillBuckets,
      workBuckets,
      topDest,
      maxDest,
      topLinjer,
    };
  }, [state.data, selectedDay.id]);
}

// ── Main Component ────────────────────────────────────────

const tabs = [
  "Översikt", "Ut / In", "Ekipage", "Fyllnad",
  "Arbetstid", "Retur", "Linjer", "Destinationer",
] as const;

export default function DemoStatistics() {
  const { selectedDay, statusLabel, statusBadge } = useDemoStore();
  const [activeTab, setActiveTab] = useState(0);
  const s = useDayStatistics();

  const planresultat = [
    { label: "EKIPAGE", value: s.dayShifts.length.toString(), sub: `av 55 tillgängliga` },
    { label: "ORDRAR I PLAN", value: s.planned.length.toString(), sub: `av ${s.dayOrders.length} körbara` },
    {
      label: "FYLLNAD UT",
      value: `${s.avgFlakFill.toFixed(1)}%`,
      sub: `${s.plannedFlm.toFixed(1)} / ${(s.dayShifts.length * 7.2).toFixed(1)} FLM`,
    },
    {
      label: "ARBETSTID",
      value: `${((s.totalWorkMins / Math.max(s.maxWorkMins, 1)) * 100).toFixed(1)}%`,
      sub: `${Math.round(s.totalWorkMins / 60)}/${Math.round(s.maxWorkMins / 60)}h`,
    },
    {
      label: "ÖVERTID",
      value: s.overtimeShifts.toString(),
      sub: s.overtimeHours > 0 ? `${s.overtimeHours.toFixed(1)}h` : null,
      alert: s.overtimeShifts > 0,
    },
    {
      label: "TOTAL KM",
      value: s.totalKm.toLocaleString("sv-SE"),
      sub: `${s.dayShifts.length} planerade pass`,
    },
  ];

  const godsflode = [
    {
      label: "UT: LEVERANS-FLM",
      value: s.plannedFlm.toFixed(1),
      sub: `${(s.plannedFlm / Math.max(s.dayShifts.length, 1)).toFixed(1)} flm/pass`,
      color: "text-blue-600",
    },
    {
      label: "UT: FYLLNAD",
      value: `${s.avgFlakFill.toFixed(1)}%`,
      sub: "snitt per pass",
      color: "text-blue-600",
    },
    {
      label: "IN: RETUR-FLM",
      value: (s.plannedFlm * 0.15).toFixed(1),
      sub: `${Math.round(s.dayShifts.length * 0.3)} av ${s.dayShifts.length} pass`,
      color: "text-green-600",
    },
    {
      label: "IN: FYLLNAD",
      value: `${s.avgSlapFill.toFixed(1)}%`,
      sub: `${Math.round(s.dayShifts.length * 0.7)} utan retur`,
      color: "text-green-600",
    },
  ];

  const resurser = [
    { label: "MULTITRIP", value: "8", sub: "sparar 8 ekipage", color: "text-blue-600" },
    {
      label: "RETUR",
      value: Math.round(s.dayShifts.length * 0.3).toString(),
      sub: `${Math.round((30 / 100) * 100)}% av pass`,
      color: "text-green-600",
    },
    {
      label: "LEDIG TID",
      value: `${Math.max(Math.round(s.maxWorkMins / 60 - s.totalWorkMins / 60), 0)}h`,
      sub: "0.8h/pass",
      color: "text-amber-600",
    },
    {
      label: "SNITT KM/PASS",
      value: Math.round(s.totalKm / Math.max(s.dayShifts.length, 1)).toString(),
      sub: null,
      color: "text-gray-600",
    },
    {
      label: "KM PER FLM",
      value: (s.totalKm / Math.max(s.plannedFlm, 1)).toFixed(1),
      sub: null,
      color: "text-gray-600",
    },
    {
      label: "RUTT-EFFEKTIVITET",
      value: "83%",
      sub: "vs. direkt-kör",
      color: "text-gray-600",
    },
  ];

  const orderStatus = {
    summary: [
      { label: "TOTALT", value: s.dayOrders.length.toString(), color: "text-gray-900" },
      { label: "KÖRBARA IDAG", value: s.dayOrders.filter((o) => !o.cancelled).length.toString(), color: "text-blue-600" },
      { label: "EJ UPPHÄMTADE", value: s.unplanned.length.toString(), color: "text-amber-600" },
      { label: "TILLDELADE", value: s.planned.length.toString(), color: "text-green-600" },
      { label: "EJ TILLDELADE", value: s.unplanned.length.toString(), color: "text-red-600" },
      { label: "MAKULERADE", value: s.cancelled.length.toString(), color: "text-gray-500" },
    ],
    metrics: [
      { label: "FLM I PLAN", value: s.plannedFlm.toFixed(1) },
      { label: "FLM KÖRBART", value: s.totalFlm.toFixed(1) },
      { label: "SNITT FLM/ORDER", value: (s.totalFlm / Math.max(s.dayOrders.length, 1)).toFixed(2) },
      {
        label: "SNITT VIKT/ORDER",
        value: `${Math.round(s.dayOrders.reduce((sum, o) => sum + o.weightKg, 0) / Math.max(s.dayOrders.length, 1))} kg`,
      },
    ],
  };

  const isApproved = selectedDay.status === "approved";

  return (
    <div className="space-y-5">
      <DayPicker />

      {/* Header */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-5 flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2 md:gap-3">
          <h2 className="text-base md:text-lg font-medium">Statistik för {selectedDay.label}</h2>
          <span
            className={`inline-flex items-center gap-1 ${statusBadge(selectedDay.status)} text-xs font-medium px-2 py-0.5 rounded-full`}
          >
            <Check size={12} aria-hidden="true" /> {statusLabel(selectedDay.status)}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-green-600 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> Live
          </span>
        </div>
        <button className="inline-flex items-center justify-center gap-2 border border-gray-200 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
          <Download size={14} aria-hidden="true" />
          Exportera
        </button>
      </div>

      {/* Summary bar */}
      <div className="bg-white rounded-xl border border-gray-200 px-4 md:px-5 py-3 flex flex-wrap items-center gap-4 md:gap-6">
        {orderStatus.summary.slice(0, 4).map((item) => (
          <div key={item.label} className="flex items-baseline gap-1.5">
            <span className={`text-base md:text-lg font-semibold ${item.color}`}>{item.value}</span>
            <span className="text-[10px] text-gray-500 uppercase tracking-wider">{item.label}</span>
          </div>
        ))}
        <span className="ml-auto text-xs text-green-600 font-medium inline-flex items-center gap-1">
          {isApproved ? <TrendingUp size={12} aria-hidden="true" /> : <TrendingDown size={12} aria-hidden="true" />}
          {((s.planned.length / Math.max(s.dayOrders.length, 1)) * 100).toFixed(0)}% tilldelningsgrad
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
        <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-3">
          Planresultat
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {planresultat.map((x) => (
            <StatCard key={x.label} {...x} />
          ))}
        </div>
      </div>

      {/* Godsflöde */}
      <div>
        <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-3">
          Godsflöde (planerade pass)
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {godsflode.map((x) => (
            <StatCard key={x.label} {...x} />
          ))}
        </div>
      </div>

      {/* Resurser */}
      <div>
        <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-3">
          Resurser
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {resurser.map((x) => (
            <StatCard key={x.label} {...x} />
          ))}
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="text-sm font-medium mb-4">Fyllnadsfördelning</h3>
          <BarChart data={s.fillBuckets} colorClass="bg-green-500" aria-hidden="true" />
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="text-sm font-medium mb-4">Arbetstidsfördelning</h3>
          <BarChart data={s.workBuckets} colorClass="bg-indigo-500" aria-hidden="true" />
        </div>
      </div>

      {/* Ekipage + Orderstatus */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="text-sm font-medium mb-4">Ekipagefördelning</h3>
          <DonutChart segments={s.ekipageData} />
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="text-sm font-medium mb-4">Orderstatus</h3>
          <div className="flex flex-wrap gap-3 md:gap-4 mb-4">
            {orderStatus.summary.map((item) => (
              <div key={item.label} className="text-center">
                <p className={`text-base md:text-lg font-semibold ${item.color}`}>{item.value}</p>
                <p className="text-[9px] text-gray-500 uppercase tracking-wider">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-100 pt-3 grid grid-cols-2 md:grid-cols-4 gap-3">
            {orderStatus.metrics.map((m) => (
              <div key={m.label} className="text-center">
                <p className="text-sm font-semibold">{m.value}</p>
                <p className="text-[9px] text-gray-500 uppercase tracking-wider">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top 5 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="text-sm font-medium mb-4">Top 5 destinationer</h3>
          <div className="space-y-2.5">
            {s.topDest.map((d) => (
              <HorizontalBar
                key={d.name}
                name={d.name}
                value={d.count}
                pct={(d.count / s.maxDest) * 100}
                color="bg-green-500"
              />
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="text-sm font-medium mb-4">Top 5 linjer</h3>
          <div className="space-y-3">
            {s.topLinjer.map((l) => (
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
                <p className="text-[10px] text-gray-500 mt-0.5">{l.info}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
