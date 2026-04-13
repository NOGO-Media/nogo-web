"use client";

import { useMemo } from "react";
import { useDemoStore } from "./demoStore";

const HOUR_START = 6;
const HOUR_END = 20;
const TOTAL_HOURS = HOUR_END - HOUR_START;
const hours = Array.from({ length: TOTAL_HOURS + 1 }, (_, i) => HOUR_START + i);

type ScheduleType = "driving" | "loading" | "break";

interface Block {
  start: number;
  end: number;
  type: ScheduleType;
  label?: string;
}

const scheduleColor: Record<ScheduleType, string> = {
  driving: "bg-blue-500",
  loading: "bg-amber-400",
  break: "bg-gray-300",
};

const scheduleLabel: Record<ScheduleType, string> = {
  driving: "Körning",
  loading: "Last/lossning",
  break: "Rast",
};

// Deterministic block synthesis from shift metadata — no shared mutable state.
function makeBlocks(workMinutes: number, area: string): Block[] {
  const workHours = workMinutes / 60;
  const endHour = Math.min(HOUR_START + workHours, HOUR_END);

  // Simple shape: load → drive out → break → drive back → unload
  const span = endHour - HOUR_START;
  const loadOut = HOUR_START + 0.5;
  const driveOutEnd = HOUR_START + span * 0.4;
  const breakEnd = driveOutEnd + 0.75;
  const driveBackEnd = HOUR_START + span * 0.9;
  const unloadEnd = endHour;

  return [
    { start: HOUR_START, end: loadOut, type: "loading", label: `Lastning` },
    { start: loadOut, end: driveOutEnd, type: "driving", label: `→ ${area}` },
    { start: driveOutEnd, end: breakEnd, type: "break" },
    { start: breakEnd, end: driveBackEnd, type: "driving", label: `← ${area}` },
    { start: driveBackEnd, end: unloadEnd, type: "loading", label: "Lossning" },
  ];
}

export default function DemoTimeline() {
  const { state, selectedDay } = useDemoStore();

  const rows = useMemo(() => {
    const dayShifts = state.data.shifts
      .filter((s) => s.dayId === selectedDay.id)
      .slice(0, 10);
    return dayShifts.map((sh) => {
      const car = state.data.cars.find((c) => c.id === sh.carId);
      return {
        id: sh.id,
        reg: car?.reg || "—",
        driver: car?.driver || "—",
        shiftNo: sh.shiftNo,
        area: sh.area,
        blocks: makeBlocks(sh.workMinutes, sh.area),
      };
    });
  }, [state.data, selectedDay.id]);

  // Current-time indicator: only show on "today" (draft or approved-today).
  // Since the demo has a fixed now, show it only on the currently-selected-draft day.
  const showNow = selectedDay.status === "draft";
  const nowHour = 10.5;

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
        <h3 className="text-sm font-medium">Dagplanering ({rows.length} av {state.data.shifts.filter((s) => s.dayId === selectedDay.id).length} pass)</h3>
        <div className="flex items-center gap-4">
          {(["driving", "loading", "break"] as const).map((type) => (
            <div key={type} className="flex items-center gap-1.5">
              <div className={`w-2.5 h-2.5 rounded-sm ${scheduleColor[type]}`} />
              <span className="text-xs text-gray-500">{scheduleLabel[type]}</span>
            </div>
          ))}
        </div>
      </div>

      {rows.length === 0 ? (
        <div className="px-5 py-10 text-center text-sm text-gray-500">
          Inga pass för {selectedDay.label}
        </div>
      ) : (
        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Time header */}
            <div className="flex border-b border-gray-100">
              <div className="w-40 shrink-0 px-5 py-2">
                <span className="text-xs text-gray-500">Pass</span>
              </div>
              <div className="flex-1 flex">
                {hours.map((h) => (
                  <div
                    key={h}
                    className="text-xs text-gray-500 text-center"
                    style={{ width: `${100 / TOTAL_HOURS}%` }}
                  >
                    {String(h).padStart(2, "0")}:00
                  </div>
                ))}
              </div>
            </div>

            {rows.map((row) => (
              <div
                key={row.id}
                className="flex items-center border-b border-gray-50 hover:bg-gray-50/30"
              >
                <div className="w-40 shrink-0 px-5 py-3">
                  <div className="text-sm font-medium font-mono">
                    {row.shiftNo} · {row.area}
                  </div>
                  <div className="text-xs text-gray-500">{row.reg} · {row.driver.split(" ")[0]}</div>
                </div>

                <div className="flex-1 relative h-10 py-1.5">
                  <div className="absolute inset-0 flex">
                    {hours.map((h) => (
                      <div
                        key={h}
                        className="border-l border-gray-100"
                        style={{ width: `${100 / TOTAL_HOURS}%` }}
                      />
                    ))}
                  </div>

                  {row.blocks.map((block, i) => {
                    const left = ((block.start - HOUR_START) / TOTAL_HOURS) * 100;
                    const width = ((block.end - block.start) / TOTAL_HOURS) * 100;
                    return (
                      <div
                        key={i}
                        className={`absolute top-1.5 bottom-1.5 rounded ${scheduleColor[block.type]}`}
                        style={{ left: `${left}%`, width: `${width}%` }}
                        title={block.label || scheduleLabel[block.type]}
                      >
                        {width > 8 && (
                          <span className="absolute inset-0 flex items-center justify-center text-[10px] text-white font-medium truncate px-1">
                            {block.label || ""}
                          </span>
                        )}
                      </div>
                    );
                  })}

                  {showNow && (
                    <div
                      className="absolute top-0 bottom-0 w-0.5 bg-red-500 z-10"
                      style={{
                        left: `${((nowHour - HOUR_START) / TOTAL_HOURS) * 100}%`,
                      }}
                    >
                      <div className="w-2 h-2 bg-red-500 rounded-full -ml-[3px] -mt-0.5" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
