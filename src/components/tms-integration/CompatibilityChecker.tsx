"use client";

import { useState } from "react";
import { Check, HelpCircle } from "lucide-react";

const systems = [
  {
    name: "Opter",
    status: "full" as const,
    features: ["Orderimport", "Ruttexport", "Fordonsdata", "Kundregister", "Fakturering"],
    note: "Fullständig integration via API. 2 veckors implementation.",
  },
  {
    name: "AddSecure (Vehco)",
    status: "full" as const,
    features: ["Orderimport", "Ruttexport", "Fordonsdata", "GPS-positioner", "Kundregister"],
    note: "Fullständig integration. Stöd för realtidspositioner.",
  },
  {
    name: "Hogia Transport",
    status: "full" as const,
    features: ["Orderimport", "Ruttexport", "Fordonsdata", "Kundregister"],
    note: "Integration via Hogia Transport API. 3 veckors implementation.",
  },
  {
    name: "Barkfors",
    status: "full" as const,
    features: ["Orderimport", "Ruttexport", "Fordonsdata", "Kundregister"],
    note: "Fullständig integration med Barkfors TMS. 2–3 veckors implementation.",
  },
  {
    name: "Winking (Wise Systems)",
    status: "partial" as const,
    features: ["Orderimport", "Ruttexport", "Fordonsdata"],
    note: "Partiell integration. Utökas löpande.",
  },
  {
    name: "Eget / egenutvecklat",
    status: "custom" as const,
    features: ["Orderimport", "Ruttexport", "Fordonsdata", "Anpassade flöden"],
    note: "Vi bygger skräddarsydd integration — via API, databasanslutning, filimport (CSV/XML) eller skärmautomation. Inget API krävs.",
  },
];

export default function CompatibilityChecker() {
  const [selected, setSelected] = useState(0);
  const current = systems[selected];

  return (
    <div className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-0">
        {/* System list */}
        <div className="p-8 md:p-10">
          <h3 className="text-lg font-medium mb-2">Kompatibla system</h3>
          <p className="text-sm text-gray-500 mb-6 leading-relaxed">
            Välj ert TMS-system för att se vilka funktioner som stöds.
          </p>
          <div className="space-y-2">
            {systems.map((sys, i) => (
              <button
                key={sys.name}
                onClick={() => setSelected(i)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border text-sm text-left transition-all ${
                  selected === i
                    ? "border-gray-800 bg-white shadow-sm"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <span className="font-medium">{sys.name}</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    sys.status === "full"
                      ? "bg-green-100 text-green-700"
                      : sys.status === "partial"
                      ? "bg-amber-100 text-amber-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {sys.status === "full" ? "Full integration" : sys.status === "partial" ? "Partiell" : "Skräddarsydd"}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="p-8 md:p-10 bg-white md:border-l border-t md:border-t-0 border-gray-200">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">
            {current.name} — funktioner
          </p>
          <div className="space-y-3 mb-6">
            {current.features.map((f) => (
              <div key={f} className="flex items-center gap-3 text-sm">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <Check size={12} className="text-green-600" aria-hidden="true" />
                </div>
                <span>{f}</span>
              </div>
            ))}
            {current.status === "partial" && (
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                  <HelpCircle size={12} className="text-gray-400" aria-hidden="true" />
                </div>
                <span>Fler funktioner under utveckling</span>
              </div>
            )}
          </div>
          <div className="p-4 bg-gray-50 rounded-xl">
            <p className="text-sm text-gray-600 leading-relaxed">{current.note}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
