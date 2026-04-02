"use client";

import { Truck } from "lucide-react";
import { vehicles, vehicleStatusColor } from "./mockData";

export default function DemoFleetOverview() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="px-5 py-4 border-b border-gray-100">
        <h3 className="text-sm font-medium">Fordonsflotta</h3>
      </div>
      <div className="divide-y divide-gray-50">
        {vehicles.map((v) => (
          <div
            key={v.id}
            className="flex items-center gap-4 px-5 py-3.5 hover:bg-gray-50/50 transition-colors"
          >
            {/* Icon */}
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
              style={{ backgroundColor: v.color + "15" }}
            >
              <Truck size={18} style={{ color: v.color }} />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">{v.reg}</span>
                <span className="text-xs text-gray-500">{v.type}</span>
              </div>
              <p className="text-xs text-gray-500 mt-0.5">{v.driver}</p>
            </div>

            {/* Status */}
            <span
              className={`px-2 py-0.5 rounded-full text-xs font-medium shrink-0 ${
                vehicleStatusColor[v.status]
              }`}
            >
              {v.status}
            </span>

            {/* Capacity bar */}
            <div className="w-24 shrink-0">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] text-gray-500">Kapacitet</span>
                <span className="text-[10px] font-medium text-gray-600">
                  {v.capacity}%
                </span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all"
                  style={{
                    width: `${v.capacity}%`,
                    backgroundColor: v.color,
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
