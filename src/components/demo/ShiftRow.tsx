"use client";

import { useDroppable } from "@dnd-kit/core";
import { ArrowDown, ArrowUp, Truck } from "lucide-react";
import { useDemoStore } from "./demoStore";
import type { Shift } from "./mockGenerator";

interface Props {
  shift: Shift;
  onClick: () => void;
  isDraft: boolean;
}

function formatTime(mins: number): string {
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return `${h}:${String(m).padStart(2, "0")}`;
}

function fillColor(pct: number): string {
  if (pct >= 100) return "bg-red-500";
  if (pct >= 90) return "bg-amber-500";
  return "bg-green-500";
}

export default function ShiftRow({ shift, onClick, isDraft }: Props) {
  const { state } = useDemoStore();
  const car = state.data.cars.find((c) => c.id === shift.carId);
  const flak = shift.flakId ? state.data.flak.find((f) => f.id === shift.flakId) : null;
  const slap = shift.slapId ? state.data.slap.find((s) => s.id === shift.slapId) : null;

  const { isOver, setNodeRef } = useDroppable({
    id: `shift-${shift.id}`,
    disabled: !isDraft,
  });

  const stopCount = shift.stopIds.length;
  const workPct = Math.min((shift.workMinutes / shift.maxWorkMinutes) * 100, 120);
  const workOver = shift.workMinutes > shift.maxWorkMinutes;

  return (
    <div
      ref={setNodeRef}
      onClick={onClick}
      className={`grid grid-cols-[76px_96px_140px_140px_72px_140px_76px_160px] gap-3 items-center px-4 py-3 border-b border-gray-50 text-sm cursor-pointer transition-colors ${
        isOver ? "bg-blue-50" : "hover:bg-gray-50/60"
      }`}
    >
      {/* Pass-nr / område */}
      <div>
        <div className="font-mono text-xs font-medium">{shift.shiftNo}</div>
        <div className="text-[10px] text-gray-500 truncate">{shift.area}</div>
      </div>

      {/* Bil */}
      <div className="text-xs text-gray-700">
        <div className="flex items-center gap-1">
          <Truck size={11} className="text-gray-400" aria-hidden="true" />
          {car?.reg || "—"}
        </div>
        <div className="text-[10px] text-gray-500 truncate">{car?.driver}</div>
      </div>

      {/* Flak */}
      <div className="text-xs">
        {flak ? (
          <div className="flex items-center gap-1">
            <span>{flak.reg}</span>
            {shift.hookGoIn && <ArrowUp size={10} className="text-green-600" aria-hidden="true" />}
            {shift.hookGoOut && <ArrowDown size={10} className="text-amber-600" aria-hidden="true" />}
          </div>
        ) : (
          <span className="text-gray-400">—</span>
        )}
        {flak && (
          <div className="text-[10px] text-gray-500">{flak.type}</div>
        )}
      </div>

      {/* Släp */}
      <div className="text-xs">
        {slap ? (
          <div className="flex items-center gap-1">
            <span>{slap.reg}</span>
            {shift.hookGoIn && <ArrowUp size={10} className="text-green-600" aria-hidden="true" />}
            {shift.hookGoOut && <ArrowDown size={10} className="text-amber-600" aria-hidden="true" />}
          </div>
        ) : (
          <span className="text-gray-400">—</span>
        )}
        {slap && (
          <div className="text-[10px] text-gray-500">{slap.type}</div>
        )}
      </div>

      {/* Stopp */}
      <div className="text-center">
        <div className="text-xs font-medium">{stopCount}</div>
        <div className="text-[10px] text-gray-500">stopp</div>
      </div>

      {/* Arbetstid */}
      <div>
        <div className="flex items-center justify-between">
          <span className="text-xs">{formatTime(shift.workMinutes)}</span>
          <span className={`text-[10px] ${workOver ? "text-red-600 font-medium" : "text-gray-500"}`}>
            {Math.round(workPct)}%
          </span>
        </div>
        <div className="h-1.5 bg-gray-100 rounded-full mt-1 overflow-hidden">
          <div
            className={`h-full rounded-full ${workOver ? "bg-red-500" : "bg-blue-500"}`}
            style={{ width: `${Math.min(workPct, 100)}%` }}
          />
        </div>
      </div>

      {/* Distans */}
      <div className="text-xs text-right">
        <div>{shift.distanceKm}</div>
        <div className="text-[10px] text-gray-500">km</div>
      </div>

      {/* FLM bars */}
      <div className="space-y-1">
        <FillBar label="F" pct={shift.flakFillPct} hidden={!flak} />
        <FillBar label="S" pct={shift.slapFillPct} hidden={!slap} />
      </div>
    </div>
  );
}

function FillBar({ label, pct, hidden }: { label: string; pct: number; hidden: boolean }) {
  if (hidden) return <div className="h-1.5" />;
  return (
    <div className="flex items-center gap-1.5">
      <span className="text-[10px] text-gray-500 w-2 shrink-0">{label}</span>
      <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${fillColor(pct)}`}
          style={{ width: `${Math.min(pct, 100)}%` }}
        />
      </div>
      <span className="text-[10px] text-gray-500 w-7 text-right shrink-0">{pct}%</span>
    </div>
  );
}
