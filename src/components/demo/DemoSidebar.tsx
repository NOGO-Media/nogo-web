"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "../Logo";
import {
  LayoutDashboard,
  ClipboardList,
  Truck,
  Route,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Översikt", id: "overview" },
  { icon: ClipboardList, label: "Ordrar", id: "orders" },
  { icon: Truck, label: "Fordon", id: "vehicles" },
  { icon: Route, label: "Rutter", id: "routes" },
  { icon: BarChart3, label: "Statistik", id: "statistics" },
  { icon: Settings, label: "Inställningar", id: "settings" },
] as const;

export type ViewId = (typeof menuItems)[number]["id"];

interface DemoSidebarProps {
  activeView: ViewId;
  onViewChange: (view: ViewId) => void;
}

export default function DemoSidebar({
  activeView,
  onViewChange,
}: DemoSidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:flex w-56 bg-white border-r border-gray-200 flex-col shrink-0">
        <Link
          href="/"
          className="h-14 flex items-center px-5 border-b border-gray-100 hover:bg-gray-50 transition-colors"
        >
          <Logo className="h-6" />
          <span className="ml-2 text-[10px] font-medium text-gray-500 uppercase tracking-wider">Dispatch</span>
        </Link>

        <nav className="flex-1 px-3 py-4 space-y-1">
          {menuItems.map((item) => {
            const active = activeView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onViewChange(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                  active ? "bg-gray-100 text-black font-medium" : "text-gray-500 hover:text-black hover:bg-gray-50"
                }`}
              >
                <item.icon size={18} />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="px-3 pb-4 border-t border-gray-100 pt-3">
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-600">HS</div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">Hugo S.</p>
              <p className="text-xs text-gray-500 truncate">Trafikledare</p>
            </div>
            <button className="text-gray-500 hover:text-gray-600"><LogOut size={16} /></button>
          </div>
        </div>
      </aside>

      {/* Mobile top bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-[70] bg-white border-b border-gray-200 px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="h-5" />
          <span className="text-[10px] font-medium text-gray-500 uppercase tracking-wider">Dispatch</span>
        </Link>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2">
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-[65] bg-white pt-14">
          <nav className="px-4 py-4 space-y-1">
            {menuItems.map((item) => {
              const active = activeView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => { onViewChange(item.id); setMobileOpen(false); }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-colors ${
                    active ? "bg-gray-100 text-black font-medium" : "text-gray-500 hover:text-black hover:bg-gray-50"
                  }`}
                >
                  <item.icon size={18} />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
}
