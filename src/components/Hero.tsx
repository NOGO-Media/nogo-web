"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-1.5 mb-8 animate-fade-in-up">
          <span className="w-2 h-2 bg-green-500 rounded-full" />
          <span className="text-sm text-gray-600">
            AI-automation för svenska åkerier
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Ge era trafikledare{" "}
          <span className="text-gray-400">timmar tillbaka</span>
          {" "}— varje dag
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Missade bokningar, manuell matchning av förare och fordon, timmar i
          telefon. Vi automatiserar det som stjäl tid — utan att ni byter system.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Boka strategi-samtal
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/losningar"
            className="inline-flex items-center justify-center gap-2 border border-gray-200 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            <Play size={14} />
            Se hur det fungerar
          </Link>
        </div>

        {/* Hero visual — mock dashboard */}
        <div className="mt-16 md:mt-20 relative animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <div className="bg-gray-950 rounded-2xl border border-gray-800 shadow-2xl overflow-hidden max-w-5xl mx-auto">
            {/* Window controls */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800">
              <div className="w-3 h-3 rounded-full bg-gray-700" />
              <div className="w-3 h-3 rounded-full bg-gray-700" />
              <div className="w-3 h-3 rounded-full bg-gray-700" />
              <div className="ml-4 bg-gray-800 rounded px-3 py-1 text-xs text-gray-400">
                app.nogomedia.se/trafikledning
              </div>
            </div>
            {/* Dashboard mock content */}
            <div className="p-6 md:p-8 space-y-4">
              {/* Header row */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="h-4 w-48 bg-gray-800 rounded" />
                  <div className="h-3 w-32 bg-gray-800/60 rounded mt-2" />
                </div>
                <div className="flex gap-2">
                  <div className="h-8 w-24 bg-gray-800 rounded-lg" />
                  <div className="h-8 w-8 bg-gray-800 rounded-lg" />
                </div>
              </div>

              {/* Table mock */}
              <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
                {/* Table header */}
                <div className="grid grid-cols-5 gap-4 px-4 py-3 border-b border-gray-800">
                  {["Order", "Förare", "Rutt", "Status", "Tid"].map((h) => (
                    <div key={h} className="text-xs text-gray-500 font-medium">
                      {h}
                    </div>
                  ))}
                </div>
                {/* Table rows */}
                {[
                  { order: "ORD-2847", driver: "Erik L.", route: "Sthlm → Gbg", status: "Tilldelad", statusColor: "bg-green-500" },
                  { order: "ORD-2848", driver: "Maria K.", route: "Malmö → Nkpg", status: "På väg", statusColor: "bg-blue-500" },
                  { order: "ORD-2849", driver: "—", route: "Gbg → Sthlm", status: "Väntar", statusColor: "bg-amber-500" },
                  { order: "ORD-2850", driver: "Johan S.", route: "Nkpg → Sthlm", status: "Tilldelad", statusColor: "bg-green-500" },
                  { order: "ORD-2851", driver: "Anna B.", route: "Sthlm → Malmö", status: "Levererad", statusColor: "bg-gray-500" },
                ].map((row) => (
                  <div
                    key={row.order}
                    className="grid grid-cols-5 gap-4 px-4 py-3 border-b border-gray-800/50 hover:bg-gray-800/30"
                  >
                    <div className="text-xs text-gray-300 font-mono">{row.order}</div>
                    <div className="text-xs text-gray-300">{row.driver}</div>
                    <div className="text-xs text-gray-400">{row.route}</div>
                    <div className="flex items-center gap-1.5">
                      <div className={`w-1.5 h-1.5 rounded-full ${row.statusColor}`} />
                      <span className="text-xs text-gray-400">{row.status}</span>
                    </div>
                    <div className="text-xs text-gray-500">Just nu</div>
                  </div>
                ))}
              </div>

              {/* Bottom stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Aktiva ordrar", value: "47" },
                  { label: "Fyllnadsgrad", value: "89%" },
                  { label: "Automatiserade", value: "34" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-gray-900 rounded-xl border border-gray-800 p-4"
                  >
                    <div className="text-2xl font-semibold text-white">{stat.value}</div>
                    <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
