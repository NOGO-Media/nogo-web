"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  ClipboardList,
  Truck,
  Route,
  Settings,
  LogOut,
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Översikt", id: "overview" },
  { icon: ClipboardList, label: "Ordrar", id: "orders" },
  { icon: Truck, label: "Fordon", id: "vehicles" },
  { icon: Route, label: "Rutter", id: "routes" },
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
  return (
    <aside className="w-56 bg-white border-r border-gray-200 flex flex-col shrink-0">
      {/* Logo */}
      <Link
        href="/"
        className="h-14 flex items-center px-5 border-b border-gray-100 hover:bg-gray-50 transition-colors"
      >
        <svg viewBox="0 0 140 40" className="h-7 text-black" fill="none">
          <text
            x="0"
            y="30"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontSize="28"
            fontWeight="300"
            letterSpacing="6"
            fill="currentColor"
          >
            NOGO
          </text>
        </svg>
        <span className="ml-2 text-[10px] font-medium text-gray-400 uppercase tracking-wider">
          Dispatch
        </span>
      </Link>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {menuItems.map((item) => {
          const active = activeView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                active
                  ? "bg-gray-100 text-black font-medium"
                  : "text-gray-500 hover:text-black hover:bg-gray-50"
              }`}
            >
              <item.icon size={18} />
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="px-3 pb-4 border-t border-gray-100 pt-3">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-600">
            HS
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">Hugo S.</p>
            <p className="text-xs text-gray-400 truncate">Trafikledare</p>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <LogOut size={16} />
          </button>
        </div>
      </div>
    </aside>
  );
}
