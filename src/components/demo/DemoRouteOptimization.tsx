"use client";

import { useMemo } from "react";
import { ArrowRight, CheckCircle2, AlertTriangle, Clock } from "lucide-react";
import { useDemoStore } from "./demoStore";

interface Props {
  onGoPlanering?: () => void;
}

/**
 * Summary card for the currently-selected day.
 * The real optimization flow lives in DemoPlanering — this card is a
 * dashboard-style entry point into it, not a second copy of the pipeline.
 */
export default function DemoRouteOptimization({ onGoPlanering }: Props = {}) {
  const { state, selectedDay, statusLabel, statusBadge } = useDemoStore();

  const { dayShifts, unplannedCount, totalStops, avgFill, overtimeCount, isDraft, isUnplanned } = useMemo(() => {
    const dayShifts = state.data.shifts.filter((s) => s.dayId === selectedDay.id);
    const dayOrders = state.data.orders.filter((o) => o.dayId === selectedDay.id);
    const unplannedCount = dayOrders.filter((o) => o.shiftId === null && !o.cancelled).length;
    const totalStops = dayShifts.reduce((s, sh) => s + sh.stopIds.length, 0);
    const avgFill =
      dayShifts.filter((s) => s.flakId).reduce((s, sh) => s + sh.flakFillPct, 0) /
      Math.max(dayShifts.filter((s) => s.flakId).length, 1);
    const overtimeCount = dayShifts.filter((sh) => sh.workMinutes > sh.maxWorkMinutes).length;
    return {
      dayShifts,
      unplannedCount,
      totalStops,
      avgFill,
      overtimeCount,
      isDraft: selectedDay.status === "draft",
      isUnplanned: selectedDay.status === "unplanned" || selectedDay.status === "stale",
    };
  }, [state.data, selectedDay]);

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium">Dagens plan</h3>
        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusBadge(selectedDay.status)}`}>
          {statusLabel(selectedDay.status)}
        </span>
      </div>

      <p className="text-xs text-gray-500 mb-4 leading-relaxed">
        {isUnplanned
          ? "Dagen saknar ett planeringsförslag. Generera ett i planeringsvyn — 10-stegs pipeline som partitionerar områden, kör VRP per område och optimerar hook-and-go."
          : isDraft
          ? "Ett förslag finns. Justera pass manuellt i planeringsvyn och godkänn när det ser bra ut."
          : "Dagen är godkänd. Öppna planeringsvyn om du behöver justera i efterhand."}
      </p>

      <div className="space-y-2 mb-5">
        <SummaryRow label="Pass i förslaget" value={dayShifts.length.toString()} />
        <SummaryRow label="Oplanerade ordrar" value={unplannedCount.toString()} highlight={unplannedCount > 0} />
        <SummaryRow label="Stopp att köra" value={totalStops.toString()} />
        <SummaryRow label="Snittfyllnad flak" value={`${avgFill.toFixed(0)}%`} />
        {overtimeCount > 0 && (
          <SummaryRow
            label="Övertidspass"
            value={overtimeCount.toString()}
            highlight
            icon={<AlertTriangle size={12} className="text-red-500" />}
          />
        )}
      </div>

      {onGoPlanering ? (
        <button
          onClick={onGoPlanering}
          className="mt-auto flex items-center justify-center gap-2 bg-black text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          Öppna planering
          <ArrowRight size={14} />
        </button>
      ) : (
        <div className="mt-auto text-xs text-gray-500 flex items-center gap-1.5">
          {selectedDay.status === "approved" ? (
            <>
              <CheckCircle2 size={12} className="text-green-600" />
              Godkänd {selectedDay.approvedAt}
            </>
          ) : (
            <>
              <Clock size={12} className="text-gray-400" />
              {selectedDay.label}
            </>
          )}
        </div>
      )}
    </div>
  );
}

function SummaryRow({
  label,
  value,
  highlight,
  icon,
}: {
  label: string;
  value: string;
  highlight?: boolean;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between text-xs">
      <span className="text-gray-500 inline-flex items-center gap-1.5">
        {icon}
        {label}
      </span>
      <span className={`font-medium ${highlight ? "text-red-600" : ""}`}>{value}</span>
    </div>
  );
}
