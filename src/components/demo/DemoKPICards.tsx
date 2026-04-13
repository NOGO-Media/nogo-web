"use client";

import { useMemo } from "react";
import {
  ClipboardList,
  Truck,
  BarChart3,
  MapPin,
} from "lucide-react";
import { useDemoStore } from "./demoStore";

export default function DemoKPICards() {
  const { state, selectedDay } = useDemoStore();

  const kpis = useMemo(() => {
    const dayOrders = state.data.orders.filter((o) => o.dayId === selectedDay.id);
    const dayShifts = state.data.shifts.filter((s) => s.dayId === selectedDay.id);
    const planned = dayOrders.filter((o) => o.shiftId !== null);
    const unplanned = dayOrders.filter((o) => o.shiftId === null && !o.cancelled);

    const activeCars = state.data.cars.filter((c) => c.status === "on_shift").length;
    const totalCars = state.data.cars.length;

    const avgFlakFill =
      dayShifts.filter((s) => s.flakId).reduce((s, sh) => s + sh.flakFillPct, 0) /
      Math.max(dayShifts.filter((s) => s.flakId).length, 1);

    const totalStops = dayShifts.reduce((sum, sh) => sum + sh.stopIds.length, 0);

    return [
      {
        label: "Ordrar i plan",
        value: planned.length.toString(),
        sub: `${dayOrders.length} totalt`,
        icon: ClipboardList,
        iconBg: "bg-blue-50",
        iconColor: "text-blue-600",
      },
      {
        label: "Fordon i trafik",
        value: `${activeCars}/${totalCars}`,
        sub: `${dayShifts.length} pass`,
        icon: Truck,
        iconBg: "bg-green-50",
        iconColor: "text-green-600",
      },
      {
        label: "Beräknad fyllnadsgrad",
        value: `${avgFlakFill.toFixed(0)}%`,
        sub: "snitt per flak",
        icon: BarChart3,
        iconBg: "bg-amber-50",
        iconColor: "text-amber-600",
      },
      {
        label: "Planerade stopp",
        value: totalStops.toString(),
        sub: `${unplanned.length} ordrar kvar`,
        icon: MapPin,
        iconBg: "bg-purple-50",
        iconColor: "text-purple-600",
      },
    ];
  }, [state.data, selectedDay.id]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
      {kpis.map((kpi) => (
        <div key={kpi.label} className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-start justify-between mb-3">
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${kpi.iconBg}`}>
              <kpi.icon size={18} className={kpi.iconColor} />
            </div>
            <span className="text-xs font-medium text-gray-400">{kpi.sub}</span>
          </div>
          <div className="text-2xl font-semibold tracking-tight">{kpi.value}</div>
          <div className="text-xs text-gray-500 mt-1">{kpi.label}</div>
        </div>
      ))}
    </div>
  );
}
