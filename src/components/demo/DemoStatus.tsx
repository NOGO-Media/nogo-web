"use client";

import { useMemo, useState } from "react";
import {
  Activity,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Play,
  Database,
  Globe,
  Zap,
  Truck,
  Package,
} from "lucide-react";
import { useDemoStore } from "./demoStore";
import OptimizationProgress from "./OptimizationProgress";

export default function DemoStatus() {
  const { state, selectedDay, createPlan } = useDemoStore();
  const [showProgress, setShowProgress] = useState(false);

  const dayOrders = useMemo(
    () => state.data.orders.filter((o) => o.dayId === selectedDay.id),
    [state.data.orders, selectedDay.id]
  );

  const planned = dayOrders.filter((o) => o.shiftId !== null);
  const unplanned = dayOrders.filter((o) => o.shiftId === null && !o.cancelled);
  const duplicates = dayOrders.filter((o) => o.duplicate);
  const yardPending = state.data.yardUnits.filter((u) => u.state === "waiting");

  const overtimeShifts = state.data.shifts.filter(
    (s) => s.dayId === selectedDay.id && s.workMinutes > s.maxWorkMinutes
  ).length;

  const deliveryFill = 92.3;
  const pickupFill = 71.4;
  const cancellationRate = 8.2;

  const quality = [
    {
      label: "Leveransfyllnad",
      value: `${deliveryFill.toFixed(1)}%`,
      color: metricColor(deliveryFill, 85, 70),
      hint: "Genomsnitt flak + släp",
    },
    {
      label: "Pickupfyllnad",
      value: `${pickupFill.toFixed(1)}%`,
      color: metricColor(pickupFill, 65, 50),
      hint: "Returenheter",
    },
    {
      label: "Makuleringsgrad",
      value: `${cancellationRate.toFixed(1)}%`,
      color: metricColor(10 - cancellationRate, 5, 3),
      hint: "Senaste 7 dagar",
    },
    {
      label: "Övertidsbrott",
      value: overtimeShifts.toString(),
      color: overtimeShifts === 0 ? "green" : overtimeShifts <= 2 ? "amber" : "red",
      hint: "Pass över max-tid",
    },
  ] as const;

  const healthChecks = [
    { label: "Optimizer-API", status: "ok" as const, detail: "aktiv", icon: Zap },
    { label: "Routing-tjänst", status: "ok" as const, detail: "aktiv (latency 87 ms)", icon: Globe },
    { label: "Geocode-cache", status: "ok" as const, detail: "2 134 entries", icon: Database },
    { label: "Fel i senaste körning", status: "ok" as const, detail: "inga", icon: Activity },
    { label: "Makuleringsgrad", status: "warn" as const, detail: `${cancellationRate.toFixed(1)}%`, icon: AlertTriangle },
    {
      label: "Ohanterade gårdsenheter",
      status: yardPending.filter((u) => u.orphan).length === 0 ? "ok" : "warn",
      detail: `${yardPending.filter((u) => u.orphan).length}`,
      icon: Truck,
    },
  ];

  return (
    <div className="space-y-5">
      {/* Live pipeline */}
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="text-sm font-medium flex items-center gap-2">
              <Activity size={15} aria-hidden="true" /> Optimering
            </h3>
            <p className="text-xs text-gray-500 mt-0.5">
              Typisk körtid: ~2 minuter · Senast: {state.data.history[0].durationSec}s ({state.data.history[0].status})
            </p>
          </div>
          <button
            onClick={() => setShowProgress(true)}
            className="inline-flex items-center gap-1.5 bg-black text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-800"
          >
            <Play size={13} aria-hidden="true" /> Kör optimering
          </button>
        </div>
      </div>

      {/* Quality metrics */}
      <div>
        <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-2">
          Kvalitetsmetriker
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {quality.map((q) => (
            <QualityCard key={q.label} {...q} />
          ))}
        </div>
      </div>

      {/* Health checks */}
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <h3 className="text-sm font-medium mb-3">Varningsöversikt</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {healthChecks.map((c) => (
            <div key={c.label} className="flex items-center justify-between border-b border-gray-50 py-2 last:border-0">
              <div className="flex items-center gap-2">
                <c.icon size={13} className="text-gray-400" />
                <span className="text-sm text-gray-700">{c.label}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">{c.detail}</span>
                {c.status === "ok" ? (
                  <CheckCircle2 size={15} className="text-green-600" />
                ) : c.status === "warn" ? (
                  <AlertTriangle size={15} className="text-amber-600" aria-hidden="true" />
                ) : (
                  <XCircle size={15} className="text-red-600" aria-hidden="true" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Orderstatus snapshot */}
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <h3 className="text-sm font-medium mb-4 flex items-center gap-2">
          <Package size={14} aria-hidden="true" /> Orderstatus för {selectedDay.label}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <SnapshotCard label="Totalt" value={dayOrders.length} color="text-gray-900" />
          <SnapshotCard label="Oplanerade" value={unplanned.length} color="text-amber-600" />
          <SnapshotCard label="Duplicerade" value={duplicates.length} color="text-red-600" />
          <SnapshotCard label="Gårdsenheter väntande" value={yardPending.length} color="text-blue-600" />
        </div>
        <div className="mt-4 text-xs text-gray-500">
          {planned.length} av {dayOrders.length} ordrar är tilldelade ({((planned.length / Math.max(dayOrders.length, 1)) * 100).toFixed(1)}%)
        </div>
      </div>

      {/* Run history */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-100">
          <h3 className="text-sm font-medium">Körhistorik (30 senaste)</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="text-left text-[10px] font-medium text-gray-500 px-5 py-2 uppercase tracking-wider">Dag</th>
                <th className="text-left text-[10px] font-medium text-gray-500 px-3 py-2 uppercase tracking-wider">Status</th>
                <th className="text-left text-[10px] font-medium text-gray-500 px-3 py-2 uppercase tracking-wider">Startad</th>
                <th className="text-right text-[10px] font-medium text-gray-500 px-3 py-2 uppercase tracking-wider">Varaktighet</th>
                <th className="text-right text-[10px] font-medium text-gray-500 px-3 py-2 uppercase tracking-wider">Km</th>
                <th className="text-right text-[10px] font-medium text-gray-500 px-3 py-2 uppercase tracking-wider">Ekipage</th>
                <th className="text-right text-[10px] font-medium text-gray-500 px-5 py-2 uppercase tracking-wider">Ordrar</th>
              </tr>
            </thead>
            <tbody>
              {state.data.history.map((r) => (
                <tr key={r.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50">
                  <td className="px-5 py-2.5 font-mono text-xs">{r.day}</td>
                  <td className="px-3 py-2.5">
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${
                        r.status === "success"
                          ? "bg-green-100 text-green-700"
                          : r.status === "warning"
                          ? "bg-amber-100 text-amber-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {r.status === "success" ? "OK" : r.status === "warning" ? "Varning" : "Misslyckades"}
                    </span>
                  </td>
                  <td className="px-3 py-2.5 text-xs text-gray-600">{r.startedAt}</td>
                  <td className="px-3 py-2.5 text-xs text-right">{r.durationSec}s</td>
                  <td className="px-3 py-2.5 text-xs text-right">{r.distanceKm.toLocaleString("sv-SE")}</td>
                  <td className="px-3 py-2.5 text-xs text-right">{r.shiftCount}</td>
                  <td className="px-5 py-2.5 text-xs text-right">{r.planOrderCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showProgress && (
        <OptimizationProgress
          onComplete={() => {
            if (selectedDay.status === "unplanned" || selectedDay.status === "stale") {
              createPlan(selectedDay.id);
            }
          }}
          onClose={() => setShowProgress(false)}
          title={`Optimering körs för ${selectedDay.label}`}
        />
      )}
    </div>
  );
}

function metricColor(value: number, goodThreshold: number, warnThreshold: number): "green" | "amber" | "red" {
  if (value >= goodThreshold) return "green";
  if (value >= warnThreshold) return "amber";
  return "red";
}

function QualityCard({
  label,
  value,
  hint,
  color,
}: {
  label: string;
  value: string;
  hint: string;
  color: "green" | "amber" | "red";
}) {
  const border = {
    green: "border-green-200 bg-green-50",
    amber: "border-amber-200 bg-amber-50",
    red: "border-red-200 bg-red-50",
  }[color];
  const text = {
    green: "text-green-700",
    amber: "text-amber-700",
    red: "text-red-700",
  }[color];
  return (
    <div className={`rounded-xl border p-4 ${border}`}>
      <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-1">{label}</p>
      <p className={`text-2xl font-semibold ${text}`}>{value}</p>
      <p className="text-[10px] text-gray-500 mt-1">{hint}</p>
    </div>
  );
}

function SnapshotCard({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className="text-center bg-gray-50 rounded-lg border border-gray-100 p-3">
      <p className={`text-2xl font-semibold ${color}`}>{value}</p>
      <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-0.5">{label}</p>
    </div>
  );
}
