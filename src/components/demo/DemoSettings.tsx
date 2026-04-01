"use client";

import { Building2, Bell, Shield, Palette } from "lucide-react";

const sections = [
  {
    icon: Building2,
    title: "Företagsinformation",
    fields: [
      { label: "Företagsnamn", value: "Mellansverige Transport AB" },
      { label: "Org.nummer", value: "556789-1234" },
      { label: "Adress", value: "Industrivägen 12, 602 23 Norrköping" },
    ],
  },
  {
    icon: Bell,
    title: "Notifikationer",
    toggles: [
      { label: "Orderaviseringar", desc: "Meddela vid nya ordrar", on: true },
      { label: "Ruttändringar", desc: "Meddela vid omplanering", on: true },
      { label: "Fordonsvarningar", desc: "Underhåll & statusförändringar", on: false },
    ],
  },
  {
    icon: Shield,
    title: "Behörigheter",
    fields: [
      { label: "Roll", value: "Trafikledare" },
      { label: "Åtkomst", value: "Ordrar, Fordon, Rutter, Rapporter" },
    ],
  },
  {
    icon: Palette,
    title: "Gränssnitt",
    toggles: [
      { label: "Kompakt vy", desc: "Visa mer data med mindre utrymme", on: false },
      { label: "Kartlager", desc: "Visa trafikdata på kartan", on: true },
    ],
  },
];

export default function DemoSettings() {
  return (
    <div className="max-w-2xl space-y-6">
      {sections.map((section) => (
        <div
          key={section.title}
          className="bg-white rounded-xl border border-gray-200 overflow-hidden"
        >
          <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
            <section.icon size={18} className="text-gray-500" />
            <h3 className="text-sm font-medium">{section.title}</h3>
          </div>
          <div className="px-5 py-4 space-y-4">
            {section.fields?.map((f) => (
              <div key={f.label} className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{f.label}</span>
                <span className="text-sm font-medium">{f.value}</span>
              </div>
            ))}
            {section.toggles?.map((t) => (
              <div key={t.label} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">{t.label}</p>
                  <p className="text-xs text-gray-400">{t.desc}</p>
                </div>
                <div
                  className={`w-9 h-5 rounded-full relative cursor-pointer transition-colors ${
                    t.on ? "bg-black" : "bg-gray-200"
                  }`}
                >
                  <div
                    className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform ${
                      t.on ? "translate-x-4" : "translate-x-0.5"
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
