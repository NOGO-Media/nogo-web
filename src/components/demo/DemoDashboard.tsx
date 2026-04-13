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
import DemoPlanering from "./DemoPlanering";
import DemoStatus from "./DemoStatus";
import { DemoStoreProvider, useDemoStore } from "./demoStore";

const DemoMap = dynamic(() => import("./DemoMap"), { ssr: false });

type BottomTab = "orders" | "fleet" | "timeline";

const viewLabels: Record<ViewId, string> = {
  overview: "Översikt",
  planering: "Planering",
  orders: "Ordrar",
  vehicles: "Fordon",
  routes: "Rutter",
  status: "Status",
  statistics: "Statistik",
  settings: "Inställningar",
};

function TopBar({ activeView }: { activeView: ViewId }) {
  const { selectedDay } = useDemoStore();
  return (
    <div className="sticky top-0 z-10 bg-gray-50/80 backdrop-blur-sm border-b border-gray-200 px-4 md:px-6 py-3 flex items-center justify-between">
      <div>
        <h1 className="text-lg font-medium">{viewLabels[activeView]}</h1>
        <p className="text-xs text-gray-500">
          {selectedDay.label} · {selectedDay.orderCount} ordrar · {selectedDay.shiftCount} pass
        </p>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <span className="text-xs text-gray-500">Live</span>
      </div>
    </div>
  );
}

function DashboardBody() {
  const [activeView, setActiveView] = useState<ViewId>("planering");
  const [bottomTab, setBottomTab] = useState<BottomTab>("orders");

  const tabs: { id: BottomTab; label: string }[] = [
    { id: "orders", label: "Ordrar" },
    { id: "fleet", label: "Fordon" },
    { id: "timeline", label: "Dagplanering" },
  ];

  return (
    <div className="fixed inset-0 z-[60] flex bg-gray-50" role="main">
      <DemoSidebar activeView={activeView} onViewChange={setActiveView} />

      <div className="flex-1 overflow-auto pt-14 md:pt-0">
        <TopBar activeView={activeView} />

        <div className="p-4 md:p-6 space-y-4 md:space-y-6">
          {/* ── Overview ── */}
          {activeView === "overview" && (
            <>
              <DemoKPICards />
              <div className="hidden md:grid grid-cols-3 gap-6">
                <div className="col-span-2">
                  <DemoMap />
                </div>
                <DemoRouteOptimization onGoPlanering={() => setActiveView("planering")} />
              </div>
              <div className="md:hidden">
                <DemoRouteOptimization onGoPlanering={() => setActiveView("planering")} />
              </div>
              <div>
                <div className="flex gap-1 mb-4 overflow-x-auto">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setBottomTab(tab.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                        bottomTab === tab.id
                          ? "bg-white border border-gray-200 text-black shadow-sm"
                          : "text-gray-500 hover:text-black hover:bg-white/50"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
                {bottomTab === "orders" && <DemoOrderTable compact />}
                {bottomTab === "fleet" && <DemoFleetOverview />}
                {bottomTab === "timeline" && <DemoTimeline />}
              </div>
            </>
          )}

          {/* ── Planering ── */}
          {activeView === "planering" && <DemoPlanering />}

          {/* ── Orders ── */}
          {activeView === "orders" && <DemoOrderTable />}

          {/* ── Vehicles ── */}
          {activeView === "vehicles" && <DemoFleetOverview />}

          {/* ── Routes ── */}
          {activeView === "routes" && (
            <>
              <DemoKPICards />
              <div className="hidden md:grid grid-cols-3 gap-6">
                <div className="col-span-2">
                  <DemoMap />
                </div>
                <DemoRouteOptimization onGoPlanering={() => setActiveView("planering")} />
              </div>
              <div className="md:hidden">
                <DemoRouteOptimization onGoPlanering={() => setActiveView("planering")} />
              </div>
              <DemoTimeline />
            </>
          )}

          {/* ── Status ── */}
          {activeView === "status" && <DemoStatus />}

          {/* ── Statistics ── */}
          {activeView === "statistics" && <DemoStatistics />}

          {/* ── Settings ── */}
          {activeView === "settings" && <DemoSettings />}
        </div>
      </div>
    </div>
  );
}

export default function DemoDashboard() {
  return (
    <DemoStoreProvider>
      <DashboardBody />
    </DemoStoreProvider>
  );
}
