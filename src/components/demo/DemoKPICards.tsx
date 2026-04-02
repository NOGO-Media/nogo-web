"use client";

import {
  ClipboardList,
  Truck,
  BarChart3,
  MapPin,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

const kpis = [
  {
    label: "Aktiva ordrar idag",
    value: "244",
    change: "+12",
    trend: "up" as const,
    icon: ClipboardList,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    label: "Fordon i trafik",
    value: "62/88",
    change: "70%",
    trend: "up" as const,
    icon: Truck,
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    label: "Beräknad fyllnadsgrad",
    value: "92%",
    change: "+3%",
    trend: "up" as const,
    icon: BarChart3,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    label: "Planerade stopp kvar",
    value: "89",
    change: "-34",
    trend: "down" as const,
    icon: MapPin,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
];

export default function DemoKPICards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
      {kpis.map((kpi) => (
        <div
          key={kpi.label}
          className="bg-white rounded-xl border border-gray-200 p-5"
        >
          <div className="flex items-start justify-between mb-3">
            <div
              className={`w-9 h-9 rounded-lg flex items-center justify-center ${kpi.iconBg}`}
            >
              <kpi.icon size={18} className={kpi.iconColor} />
            </div>
            <span
              className={`inline-flex items-center gap-0.5 text-xs font-medium ${
                kpi.trend === "up" ? "text-green-700" : "text-gray-500"
              }`}
            >
              {kpi.trend === "up" ? (
                <TrendingUp size={12} />
              ) : (
                <TrendingDown size={12} />
              )}
              {kpi.change}
            </span>
          </div>
          <div className="text-2xl font-semibold tracking-tight">
            {kpi.value}
          </div>
          <div className="text-xs text-gray-500 mt-1">{kpi.label}</div>
        </div>
      ))}
    </div>
  );
}
