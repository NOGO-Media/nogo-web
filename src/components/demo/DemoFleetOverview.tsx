"use client";

import { useState } from "react";
import { Truck, Container, Package } from "lucide-react";
import { useDemoStore } from "./demoStore";
import DemoYardOverview from "./DemoYardOverview";

type Tab = "cars" | "flak" | "slap";

export default function DemoFleetOverview() {
  const { state } = useDemoStore();
  const [tab, setTab] = useState<Tab>("cars");

  const cars = state.data.cars;
  const flak = state.data.flak;
  const slap = state.data.slap;

  return (
    <div className="space-y-5">
      <DemoYardOverview />

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
          <h3 className="text-sm font-medium">Fordonsflotta</h3>
          <div className="flex gap-1">
            <TabBtn active={tab === "cars"} onClick={() => setTab("cars")} icon={<Truck size={12} />}>
              Bilar ({cars.length})
            </TabBtn>
            <TabBtn active={tab === "flak"} onClick={() => setTab("flak")} icon={<Container size={12} />}>
              Flak ({flak.length})
            </TabBtn>
            <TabBtn active={tab === "slap"} onClick={() => setTab("slap")} icon={<Package size={12} />}>
              Släp ({slap.length})
            </TabBtn>
          </div>
        </div>

        <div className="max-h-[560px] overflow-y-auto">
          {tab === "cars" && <CarsList />}
          {tab === "flak" && <FlakList />}
          {tab === "slap" && <SlapList />}
        </div>
      </div>
    </div>
  );
}

function TabBtn({
  active,
  onClick,
  icon,
  children,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition-colors ${
        active
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
      }`}
    >
      {icon}
      {children}
    </button>
  );
}

function statusBadge(status: string): string {
  return {
    on_shift: "bg-green-100 text-green-700",
    available: "bg-gray-100 text-gray-700",
    yard: "bg-blue-100 text-blue-700",
    maintenance: "bg-red-100 text-red-700",
  }[status] || "bg-gray-100 text-gray-700";
}

function statusLabel(status: string): string {
  return {
    on_shift: "På pass",
    available: "Tillgänglig",
    yard: "På gård",
    maintenance: "Underhåll",
  }[status] || status;
}

function CarsList() {
  const { state } = useDemoStore();
  return (
    <div className="divide-y divide-gray-50">
      {state.data.cars.map((c) => {
        const shift = c.shiftId ? state.data.shifts.find((s) => s.id === c.shiftId) : null;
        return (
          <div key={c.id} className="flex items-center gap-4 px-5 py-3 hover:bg-gray-50/50">
            <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
              <Truck size={15} className="text-blue-600" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium font-mono">{c.reg}</span>
                <span className="text-xs text-gray-500 truncate">{c.driver}</span>
              </div>
              {shift && (
                <div className="text-[10px] text-gray-500">
                  Pass {shift.shiftNo} — {shift.area}
                </div>
              )}
            </div>
            <span className={`px-2 py-0.5 rounded-full text-xs font-medium shrink-0 ${statusBadge(c.status)}`}>
              {statusLabel(c.status)}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function FlakList() {
  const { state } = useDemoStore();
  return (
    <div className="divide-y divide-gray-50">
      {state.data.flak.map((f) => (
        <div key={f.id} className="flex items-center gap-4 px-5 py-3 hover:bg-gray-50/50">
          <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center shrink-0">
            <Container size={15} className="text-amber-600" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium font-mono">{f.reg}</span>
              <span className="text-xs text-gray-500">{f.type}</span>
            </div>
            <div className="text-[10px] text-gray-500">
              Kapacitet {f.capacityFlm.toFixed(1)} FLM
            </div>
          </div>
          <span className={`px-2 py-0.5 rounded-full text-xs font-medium shrink-0 ${statusBadge(f.status)}`}>
            {statusLabel(f.status)}
          </span>
        </div>
      ))}
    </div>
  );
}

function SlapList() {
  const { state } = useDemoStore();
  return (
    <div className="divide-y divide-gray-50">
      {state.data.slap.map((s) => (
        <div key={s.id} className="flex items-center gap-4 px-5 py-3 hover:bg-gray-50/50">
          <div className="w-9 h-9 rounded-lg bg-purple-50 flex items-center justify-center shrink-0">
            <Package size={15} className="text-purple-600" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium font-mono">{s.reg}</span>
              <span className="text-xs text-gray-500">{s.type}</span>
            </div>
            <div className="text-[10px] text-gray-500">
              Kapacitet {s.capacityFlm.toFixed(1)} FLM
            </div>
          </div>
          <span className={`px-2 py-0.5 rounded-full text-xs font-medium shrink-0 ${statusBadge(s.status)}`}>
            {statusLabel(s.status)}
          </span>
        </div>
      ))}
    </div>
  );
}
