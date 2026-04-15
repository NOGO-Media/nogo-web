"use client";

import { useState } from "react";
import { Layers, ArrowUp, ArrowDown, AlertTriangle } from "lucide-react";
import { useDemoStore } from "./demoStore";

type YardFilter = "waiting" | "coupled" | "delivered";

export default function DemoYardOverview() {
  const { state } = useDemoStore();
  const [filter, setFilter] = useState<YardFilter>("waiting");
  const units = state.data.yardUnits.filter((u) => u.state === filter);

  const counts = {
    waiting: state.data.yardUnits.filter((u) => u.state === "waiting").length,
    coupled: state.data.yardUnits.filter((u) => u.state === "coupled").length,
    delivered: state.data.yardUnits.filter((u) => u.state === "delivered").length,
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium flex items-center gap-2">
            <Layers size={14} /> Gårdsöversikt
          </h3>
          <p className="text-xs text-gray-500 mt-0.5">
            Pre-fyllda enheter som väntar på hook-and-go
          </p>
        </div>
        <div className="flex gap-1">
          {(["waiting", "coupled", "delivered"] as const).map((k) => (
            <button
              key={k}
              onClick={() => setFilter(k)}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                filter === k
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {k === "waiting" ? "Väntar" : k === "coupled" ? "Kopplad" : "Levererad"} ({counts[k]})
            </button>
          ))}
        </div>
      </div>

      {units.length === 0 ? (
        <div className="px-5 py-10 text-center text-sm text-gray-500">
          Inga enheter i detta läge
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-5">
          {units.map((u) => {
            const fillColor =
              u.fillPct >= 100
                ? "bg-red-500"
                : u.fillPct >= 90
                ? "bg-amber-500"
                : "bg-green-500";
            return (
              <div
                key={u.id}
                className={`rounded-lg border p-4 ${
                  u.orphan ? "border-amber-200 bg-amber-50/50" : "border-gray-100 bg-gray-50/50"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="font-medium text-sm">{u.reg}</span>
                    <span className="text-[10px] uppercase tracking-wider text-gray-500">
                      {u.unitKind}
                    </span>
                  </div>
                  {u.orphan && (
                    <span
                      title="Ohanterad gårdsenhet"
                      className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-medium bg-amber-100 text-amber-700"
                    >
                      <AlertTriangle size={10} /> Ohanterad
                    </span>
                  )}
                </div>
                <div className="text-xs text-gray-600 mb-2 flex items-center gap-1">
                  {u.state === "waiting" ? (
                    <ArrowUp size={11} className="text-green-600" />
                  ) : u.state === "coupled" ? (
                    <ArrowDown size={11} className="text-blue-600" />
                  ) : (
                    <ArrowDown size={11} className="text-gray-400" />
                  )}
                  Destination: <span className="font-medium">{u.destinationArea}</span>
                </div>

                <div className="mb-2">
                  <div className="flex items-center justify-between text-[10px] text-gray-500 mb-1">
                    <span>Fyllnad</span>
                    <span className="font-medium">{u.fillPct}% · {u.volumeFlm.toFixed(1)} FLM</span>
                  </div>
                  <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${fillColor}`}
                      style={{ width: `${Math.min(u.fillPct, 100)}%` }}
                    />
                  </div>
                </div>

                <p className="text-[10px] text-gray-500">
                  Lastat av {u.loadedBy} {u.loadedAt}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
