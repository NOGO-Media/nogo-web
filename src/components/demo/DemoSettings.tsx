"use client";

import { Building2, Bell, Shield, Palette, Truck, Route, Clock, Database } from "lucide-react";

const sections = [
  {
    icon: Building2,
    title: "Företagsinformation",
    fields: [
      { label: "Företagsnamn", value: "NOGO Åkeri" },
      { label: "Org.nummer", value: "559535-9968" },
      { label: "Adress", value: "Demogatan 7, 602 23 Norrköping" },
      { label: "Telefon", value: "011-123 45 67" },
      { label: "E-post", value: "trafik@nogoakeri.se" },
      { label: "Ansvarig", value: "Hugo Svensson" },
    ],
  },
  {
    icon: Truck,
    title: "Flottinställningar",
    fields: [
      { label: "Max ekipage", value: "88" },
      { label: "Standard körtidsregel", value: "EU (förordning 561/2006)" },
      { label: "Viktklass-standard", value: "74 ton BK1" },
      { label: "ADR-behörighet krävs", value: "Ja, för farligt gods" },
    ],
    toggles: [
      { label: "Automatisk fordonstilldelning", desc: "Matcha fordon mot order baserat på krav", on: true },
      { label: "Kapacitetsvarning", desc: "Varna vid >95% fyllnadsgrad", on: true },
    ],
  },
  {
    icon: Route,
    title: "Ruttoptimering",
    fields: [
      { label: "Optimeringsalgoritm", value: "NOGO AI v3.2" },
      { label: "Max stopp per rutt", value: "18" },
      { label: "Prioriteringsstrategi", value: "Tidsfönster → Fyllnad → Körsträcka" },
    ],
    toggles: [
      { label: "Automatisk ruttoptimering", desc: "Kör optimering vid nya ordrar", on: true },
      { label: "Returruttplanering", desc: "Inkludera returlast i optimering", on: true },
      { label: "Multitrip-optimering", desc: "Tillåt flera turer per ekipage", on: false },
    ],
  },
  {
    icon: Bell,
    title: "Notifikationer",
    toggles: [
      { label: "Orderaviseringar", desc: "Meddela vid nya ordrar", on: true },
      { label: "Ruttändringar", desc: "Meddela vid omplanering", on: true },
      { label: "Fordonsvarningar", desc: "Underhåll & statusförändringar", on: false },
      { label: "Daglig sammanfattning", desc: "E-post med KPI:er kl 18:00", on: true },
      { label: "SMS-aviseringar", desc: "Kritiska händelser via SMS", on: false },
    ],
  },
  {
    icon: Clock,
    title: "Arbetstider & regler",
    fields: [
      { label: "Planeringsperiod", value: "06:00 – 20:00" },
      { label: "Max körtid per dag", value: "9h (förlängd 10h 2 ggr/vecka)" },
      { label: "Obligatorisk rast", value: "45 min efter 4.5h" },
      { label: "Veckovila", value: "45h sammanhängande" },
    ],
    toggles: [
      { label: "Automatisk rastplanering", desc: "Lägg in raster enligt körtidsregler", on: true },
      { label: "Övertidsvarning", desc: "Varna 30 min innan maxkörtid", on: true },
    ],
  },
  {
    icon: Shield,
    title: "Behörigheter & användare",
    fields: [
      { label: "Roll", value: "Trafikledare" },
      { label: "Åtkomst", value: "Ordrar, Fordon, Rutter, Statistik, Rapporter" },
      { label: "Aktiva användare", value: "4 av 10 licenser" },
      { label: "Senaste inloggning", value: "2026-04-01 08:14" },
    ],
  },
  {
    icon: Database,
    title: "Integrationer",
    fields: [
      { label: "TMS-koppling", value: "Opter (aktiv)" },
      { label: "Senaste synk", value: "2026-04-01 10:28" },
      { label: "API-version", value: "v2.4.1" },
    ],
    toggles: [
      { label: "Automatisk orderimport", desc: "Hämta ordrar från TMS var 5:e minut", on: true },
      { label: "Statusåterkoppling", desc: "Skicka leveransstatus till TMS", on: true },
      { label: "Fortnox-integration", desc: "Synka faktureringsunderlag", on: false },
    ],
  },
  {
    icon: Palette,
    title: "Gränssnitt",
    toggles: [
      { label: "Kompakt vy", desc: "Visa mer data med mindre utrymme", on: false },
      { label: "Kartlager", desc: "Visa trafikdata på kartan", on: true },
      { label: "Realtidsuppdatering", desc: "Uppdatera dashboard automatiskt var 30:e sekund", on: true },
      { label: "Ljudnotifikationer", desc: "Spela ljud vid kritiska händelser", on: false },
    ],
  },
];

export default function DemoSettings() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
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
