"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import DemoSidebar, { type ViewId } from "./DemoSidebar";
import DemoKPICards from "./DemoKPICards";
import DemoOrderTable from "./DemoOrderTable";
import DemoFleetOverview from "./DemoFleetOverview";
import DemoRouteOptimization from "./DemoRouteOptimization";
import DemoTimeline from "./DemoTimeline";

const DemoMap = dynamic(() => import("./DemoMap"), { ssr: false });

type BottomTab = "orders" | "fleet" | "timeline";

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
            <h1 className="text-lg font-medium">Översikt</h1>
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
          {/* KPI cards */}
          <DemoKPICards />

          {/* Map + Route optimization */}
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2">
              <DemoMap />
            </div>
            <DemoRouteOptimization />
          </div>

          {/* Bottom tabbed section */}
          <div>
            {/* Tab buttons */}
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

            {/* Tab content */}
            {bottomTab === "orders" && <DemoOrderTable />}
            {bottomTab === "fleet" && <DemoFleetOverview />}
            {bottomTab === "timeline" && <DemoTimeline />}
          </div>
        </div>
      </div>
    </div>
  );
}
