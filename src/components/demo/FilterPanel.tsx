"use client";

import { useMemo } from "react";
import { X } from "lucide-react";
import { useDemoStore } from "./demoStore";
import type { PriorityClass, SlapType, TrailerType } from "./mockGenerator";

export interface OrderFilters {
  customers: string[];
  priorities: PriorityClass[];
  routes: string[];      // "STOCKHOLM→GÖTEBORG"
  trailerTypes: TrailerType[];
  slapTypes: SlapType[];
  dateMode: "pickup" | "delivery" | "traffic";
  dateFrom: string;
  dateTo: string;
  onlyPlanned: boolean;
  includeDuplicates: boolean;
  planStatus: "all" | "planned" | "cancelled";
}

export const emptyFilters: OrderFilters = {
  customers: [],
  priorities: [],
  routes: [],
  trailerTypes: [],
  slapTypes: [],
  dateMode: "traffic",
  dateFrom: "",
  dateTo: "",
  onlyPlanned: false,
  includeDuplicates: false,
  planStatus: "all",
};

export function countActiveFilters(f: OrderFilters): number {
  return (
    f.customers.length +
    f.priorities.length +
    f.routes.length +
    f.trailerTypes.length +
    f.slapTypes.length +
    (f.dateFrom ? 1 : 0) +
    (f.dateTo ? 1 : 0) +
    (f.onlyPlanned ? 1 : 0) +
    (f.includeDuplicates ? 1 : 0) +
    (f.planStatus !== "all" ? 1 : 0)
  );
}

interface Props {
  value: OrderFilters;
  onChange: (f: OrderFilters) => void;
  onClose: () => void;
}

const PRIORITIES: PriorityClass[] = ["Normal", "DHL", "Husqvarna", "Express"];
const TRAILER_TYPES: TrailerType[] = ["Flak", "Kyl", "Skåp", "Container", "Tipp"];
const SLAP_TYPES: SlapType[] = ["Släp", "Kylsläp", "Tippsläp", "Container"];

export default function FilterPanel({ value, onChange, onClose }: Props) {
  const { state } = useDemoStore();
  const customers = state.data.customers;

  const routeOptions = useMemo(() => {
    const set = new Set<string>();
    state.data.orders.forEach((o) => set.add(`${o.pickup}→${o.delivery}`));
    return Array.from(set).sort().slice(0, 24);
  }, [state.data.orders]);

  const toggle = <K extends keyof OrderFilters>(key: K, item: string) => {
    const current = value[key] as unknown as string[];
    const next = current.includes(item)
      ? current.filter((x) => x !== item)
      : [...current, item];
    onChange({ ...value, [key]: next as unknown as OrderFilters[K] });
  };

  return (
    <div className="fixed inset-0 z-[90] bg-black/30 flex justify-end">
      <div className="bg-white w-full max-w-md h-full overflow-y-auto border-l border-gray-200">
        <div className="sticky top-0 bg-white px-5 py-4 border-b border-gray-100 flex items-center justify-between">
          <h3 className="text-sm font-medium">Filter</h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Stäng filter"
            className="text-gray-500 hover:text-gray-600"
          >
            <X size={18} />
          </button>
        </div>

        <div className="px-5 py-4 space-y-5">
          <Section title="Kunder">
            <div className="flex flex-col gap-1.5 max-h-44 overflow-y-auto">
              {customers.map((c) => (
                <label key={c} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={value.customers.includes(c)}
                    onChange={() => toggle("customers", c)}
                  />
                  <span>{c}</span>
                </label>
              ))}
            </div>
          </Section>

          <Section title="Prioritetsklass">
            <div className="flex flex-wrap gap-1.5">
              {PRIORITIES.map((p) => (
                <Chip
                  key={p}
                  active={value.priorities.includes(p)}
                  onClick={() => toggle("priorities", p)}
                  label={p}
                />
              ))}
            </div>
          </Section>

          <Section title="Rutter">
            <div className="flex flex-wrap gap-1.5 max-h-40 overflow-y-auto">
              {routeOptions.map((r) => (
                <Chip
                  key={r}
                  active={value.routes.includes(r)}
                  onClick={() => toggle("routes", r)}
                  label={r}
                />
              ))}
            </div>
          </Section>

          <Section title="Trailer-typer">
            <div className="flex flex-wrap gap-1.5">
              {TRAILER_TYPES.map((t) => (
                <Chip
                  key={t}
                  active={value.trailerTypes.includes(t)}
                  onClick={() => toggle("trailerTypes", t)}
                  label={t}
                />
              ))}
            </div>
          </Section>

          <Section title="Släp-typer">
            <div className="flex flex-wrap gap-1.5">
              {SLAP_TYPES.map((t) => (
                <Chip
                  key={t}
                  active={value.slapTypes.includes(t)}
                  onClick={() => toggle("slapTypes", t)}
                  label={t}
                />
              ))}
            </div>
          </Section>

          <Section title="Datumintervall">
            <div className="flex items-center gap-3 mb-3">
              {(["pickup", "delivery", "traffic"] as const).map((m) => (
                <label key={m} className="flex items-center gap-1.5 text-sm">
                  <input
                    type="radio"
                    checked={value.dateMode === m}
                    onChange={() => onChange({ ...value, dateMode: m })}
                  />
                  <span className="capitalize">
                    {m === "pickup" ? "Pickup" : m === "delivery" ? "Delivery" : "Traffic"}
                  </span>
                </label>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="date"
                value={value.dateFrom}
                onChange={(e) => onChange({ ...value, dateFrom: e.target.value })}
                className="border border-gray-200 rounded px-2 py-1.5 text-sm"
              />
              <input
                type="date"
                value={value.dateTo}
                onChange={(e) => onChange({ ...value, dateTo: e.target.value })}
                className="border border-gray-200 rounded px-2 py-1.5 text-sm"
              />
            </div>
          </Section>

          <Section title="Visning">
            <label className="flex items-center justify-between py-1.5 text-sm">
              <span>Endast planerade</span>
              <input
                type="checkbox"
                checked={value.onlyPlanned}
                onChange={(e) => onChange({ ...value, onlyPlanned: e.target.checked })}
              />
            </label>
            <label className="flex items-center justify-between py-1.5 text-sm">
              <span>Inkludera dubbletter</span>
              <input
                type="checkbox"
                checked={value.includeDuplicates}
                onChange={(e) => onChange({ ...value, includeDuplicates: e.target.checked })}
              />
            </label>
            <label className="flex items-center justify-between py-1.5 text-sm">
              <span>Status</span>
              <select
                value={value.planStatus}
                onChange={(e) =>
                  onChange({ ...value, planStatus: e.target.value as OrderFilters["planStatus"] })
                }
                className="border border-gray-200 rounded px-2 py-1 text-sm"
              >
                <option value="all">Alla</option>
                <option value="planned">Planerade</option>
                <option value="cancelled">Makulerade</option>
              </select>
            </label>
          </Section>
        </div>

        <div className="sticky bottom-0 bg-white border-t border-gray-100 px-5 py-3 flex items-center justify-between">
          <button
            onClick={() => onChange(emptyFilters)}
            className="text-sm text-gray-500 hover:text-gray-900"
          >
            Rensa alla
          </button>
          <button
            onClick={onClose}
            className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800"
          >
            Tillämpa
          </button>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-2">
        {title}
      </p>
      {children}
    </div>
  );
}

function Chip({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      className={`px-2.5 py-1 rounded-full text-xs font-medium border transition-colors ${
        active
          ? "bg-gray-900 text-white border-gray-900"
          : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
      }`}
    >
      {label}
    </button>
  );
}
