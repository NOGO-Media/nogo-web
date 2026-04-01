"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import DemoSidebar, { type ViewId } from "./DemoSidebar";
import DemoKPICards from "./DemoKPICards";
import DemoOrderTable from "./DemoOrderTable";
import DemoFleetOverview from "./DemoFleetOverview";
import DemoRouteOptimization from "./DemoRouteOptimization";
import DemoTimeline from "./DemoTimeline";
import DemoSettings from "./DemoSettings";
import DemoStatistics from "./DemoStatistics";

const DemoMap = dynamic(() => import("./DemoMap"), { ssr: false });

type BottomTab = "orders" | "fleet" | "timeline";

const viewLabels: Record<ViewId, string> = {
  overview: "Översikt",
  orders: "Ordrar",
  vehicles: "Fordon",
  routes: "Rutter",
  statistics: "Statistik",
  settings: "Inställningar",
};

export default function DemoDashboard() {
  const [activeView, setActiveView] = useState<ViewId>("overview");
  const [bottomTab, setBottomTab] = useState<BottomTab>("orders");

  const tabs: { id: BottomTab; label: string }[] = [
    { id: "orders", label: "Ordrar" },
    { id: "fleet", label: "Fordon" },
    { id: "timeline", label: "Dagplanering" },
  ];

  return (
    <div className="fixed inset-0 z-[60] flex bg-gray-50">
      <DemoSidebar activeView={activeView} onViewChange={setActiveView} />

      <div className="flex-1 overflow-auto">
        {/* Top bar */}
        <div className="sticky top-0 z-10 bg-gray-50/80 backdrop-blur-sm border-b border-gray-200 px-6 py-3 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-medium">{viewLabels[activeView]}</h1>
            <p className="text-xs text-gray-400">
              Tisdag 1 april 2026 — 10:32
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs text-gray-500">Live</span>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* ── Overview ── */}
          {activeView === "overview" && (
            <>
              <DemoKPICards />
              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-2">
                  <DemoMap />
                </div>
                <DemoRouteOptimization />
              </div>
              <div>
                <div className="flex gap-1 mb-4">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setBottomTab(tab.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        bottomTab === tab.id
                          ? "bg-white border border-gray-200 text-black shadow-sm"
                          : "text-gray-500 hover:text-black hover:bg-white/50"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
                {bottomTab === "orders" && <DemoOrderTable />}
                {bottomTab === "fleet" && <DemoFleetOverview />}
                {bottomTab === "timeline" && <DemoTimeline />}
              </div>
            </>
          )}

          {/* ── Orders ── */}
          {activeView === "orders" && (
            <>
              <DemoKPICards />
              <DemoOrderTable />
            </>
          )}

          {/* ── Vehicles ── */}
          {activeView === "vehicles" && (
            <>
              <DemoKPICards />
              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-2">
                  <DemoFleetOverview />
                </div>
                <div className="space-y-6">
                  <div className="bg-white rounded-xl border border-gray-200 p-5">
                    <h3 className="text-sm font-medium mb-4">Flottstatus</h3>
                    <div className="space-y-3">
                      {[
                        { label: "I trafik", count: 6, color: "bg-green-500" },
                        { label: "Ledig", count: 1, color: "bg-gray-400" },
                        { label: "Underhåll", count: 1, color: "bg-red-500" },
                      ].map((s) => (
                        <div key={s.label} className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className={`w-2.5 h-2.5 rounded-full ${s.color}`} />
                            <span className="text-sm text-gray-600">{s.label}</span>
                          </div>
                          <span className="text-sm font-medium">{s.count}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex justify-between text-xs text-gray-400 mb-1">
                        <span>Beläggning</span>
                        <span>75%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: "75%" }} />
                      </div>
                    </div>
                  </div>
                  <DemoTimeline />
                </div>
              </div>
            </>
          )}

          {/* ── Routes ── */}
          {activeView === "routes" && (
            <>
              <DemoKPICards />
              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-2">
                  <DemoMap />
                </div>
                <DemoRouteOptimization />
              </div>
              <DemoTimeline />
            </>
          )}

          {/* ── Statistics ── */}
          {activeView === "statistics" && <DemoStatistics />}

          {/* ── Settings ── */}
          {activeView === "settings" && <DemoSettings />}
        </div>
      </div>
    </div>
  );
}
