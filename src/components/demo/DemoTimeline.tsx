"use client";

import { vehicles, schedule, scheduleColor, scheduleLabel } from "./mockData";

const HOUR_START = 6;
const HOUR_END = 20;
const TOTAL_HOURS = HOUR_END - HOUR_START;
const hours = Array.from({ length: TOTAL_HOURS + 1 }, (_, i) => HOUR_START + i);

export default function DemoTimeline() {
  const activeVehicles = vehicles.filter((v) => v.status !== "Underhåll");

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
        <h3 className="text-sm font-medium">Dagplanering</h3>
        <div className="flex items-center gap-4">
          {(["driving", "loading", "break"] as const).map((type) => (
            <div key={type} className="flex items-center gap-1.5">
              <div className={`w-2.5 h-2.5 rounded-sm ${scheduleColor[type]}`} />
              <span className="text-xs text-gray-400">{scheduleLabel[type]}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[800px]">
          {/* Time header */}
          <div className="flex border-b border-gray-100">
            <div className="w-36 shrink-0 px-5 py-2">
              <span className="text-xs text-gray-400">Fordon</span>
            </div>
            <div className="flex-1 flex">
              {hours.map((h) => (
                <div
                  key={h}
                  className="text-xs text-gray-400 text-center"
                  style={{ width: `${100 / TOTAL_HOURS}%` }}
                >
                  {String(h).padStart(2, "0")}:00
                </div>
              ))}
            </div>
          </div>

          {/* Vehicle rows */}
          {activeVehicles.map((v) => {
            const blocks = schedule.filter((s) => s.vehicleId === v.id);

            return (
              <div
                key={v.id}
                className="flex items-center border-b border-gray-50 hover:bg-gray-50/30"
              >
                {/* Vehicle label */}
                <div className="w-36 shrink-0 px-5 py-3">
                  <div className="text-sm font-medium">{v.reg}</div>
                  <div className="text-xs text-gray-400">{v.driver}</div>
                </div>

                {/* Timeline bar */}
                <div className="flex-1 relative h-10 py-1.5">
                  {/* Background grid lines */}
                  <div className="absolute inset-0 flex">
                    {hours.map((h) => (
                      <div
                        key={h}
                        className="border-l border-gray-100"
                        style={{ width: `${100 / TOTAL_HOURS}%` }}
                      />
                    ))}
                  </div>

                  {/* Schedule blocks */}
                  {blocks.map((block, i) => {
                    const left =
                      ((block.start - HOUR_START) / TOTAL_HOURS) * 100;
                    const width =
                      ((block.end - block.start) / TOTAL_HOURS) * 100;

                    return (
                      <div
                        key={i}
                        className={`absolute top-1.5 bottom-1.5 rounded ${scheduleColor[block.type]}`}
                        style={{ left: `${left}%`, width: `${width}%` }}
                        title={block.label || scheduleLabel[block.type]}
                      >
                        {width > 6 && (
                          <span className="absolute inset-0 flex items-center justify-center text-[10px] text-white font-medium truncate px-1">
                            {block.label || ""}
                          </span>
                        )}
                      </div>
                    );
                  })}

                  {/* Current time indicator */}
                  <div
                    className="absolute top-0 bottom-0 w-0.5 bg-red-500 z-10"
                    style={{
                      left: `${((10.5 - HOUR_START) / TOTAL_HOURS) * 100}%`,
                    }}
                  >
                    <div className="w-2 h-2 bg-red-500 rounded-full -ml-[3px] -mt-0.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
