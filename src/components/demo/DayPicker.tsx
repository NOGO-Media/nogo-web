"use client";

import { useDemoStore } from "./demoStore";

export default function DayPicker() {
  const { state, selectedDay, selectDay, statusDot, statusLabel } = useDemoStore();
  const days = state.data.days;

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-3">
      <div className="flex gap-2 overflow-x-auto -mx-1 px-1">
        {days.map((d) => {
          const active = d.id === selectedDay.id;
          return (
            <button
              key={d.id}
              onClick={() => selectDay(d.id)}
              className={`flex flex-col items-start gap-1 px-3 py-2 rounded-lg text-left min-w-[108px] shrink-0 border transition-colors ${
                active
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-white hover:bg-gray-50 border-gray-200 text-gray-700"
              }`}
              title={statusLabel(d.status)}
            >
              <div className="flex items-center gap-1.5 w-full">
                <span className={`w-2 h-2 rounded-full ${statusDot(d.status)}`} />
                <span className={`text-xs font-medium ${active ? "text-gray-200" : "text-gray-500"}`}>
                  {statusLabel(d.status)}
                </span>
              </div>
              <div className="text-sm font-medium whitespace-nowrap">{d.label}</div>
              <div className={`text-[10px] ${active ? "text-gray-300" : "text-gray-500"}`}>
                {d.orderCount} ordrar · {d.shiftCount} pass
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
