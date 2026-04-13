"use client";

import { useMemo, useState } from "react";
import { ArrowDown, ArrowUp, Filter, Link2 } from "lucide-react";
import { useDemoStore } from "./demoStore";
import DayPicker from "./DayPicker";
import OrderDetailModal from "./OrderDetailModal";
import FilterPanel, { emptyFilters, countActiveFilters, type OrderFilters } from "./FilterPanel";
import type { Order } from "./mockGenerator";

type SortKey = "id" | "customer" | "pickup" | "delivery" | "flm" | "weight" | "priority";
type SortDir = "asc" | "desc";

const priorityColor: Record<string, string> = {
  Normal: "bg-gray-100 text-gray-700",
  DHL: "bg-red-100 text-red-700",
  Husqvarna: "bg-orange-100 text-orange-700",
  Express: "bg-purple-100 text-purple-700",
};

interface Props {
  /** When true, skip the DayPicker header (for embedded use on Översikt) */
  compact?: boolean;
}

export default function DemoOrderTable({ compact }: Props) {
  const { state, selectedDay } = useDemoStore();
  const [sortKey, setSortKey] = useState<SortKey>("id");
  const [sortDir, setSortDir] = useState<SortDir>("asc");
  const [filters, setFilters] = useState<OrderFilters>(emptyFilters);
  const [showFilters, setShowFilters] = useState(false);
  const [openOrder, setOpenOrder] = useState<string | null>(null);

  const dayOrders = useMemo(
    () => state.data.orders.filter((o) => o.dayId === selectedDay.id),
    [state.data.orders, selectedDay.id]
  );

  const filtered = useMemo(() => {
    return dayOrders.filter((o) => {
      if (filters.customers.length > 0 && !filters.customers.includes(o.customer)) return false;
      if (filters.priorities.length > 0 && !filters.priorities.includes(o.priority)) return false;
      if (filters.trailerTypes.length > 0 && !filters.trailerTypes.includes(o.trailerType)) return false;
      if (filters.slapTypes.length > 0 && !filters.slapTypes.includes(o.slapType)) return false;
      if (filters.routes.length > 0 && !filters.routes.includes(`${o.pickup}→${o.delivery}`)) return false;
      if (filters.onlyPlanned && o.shiftId === null) return false;
      if (!filters.includeDuplicates && o.duplicate) return false;
      if (filters.planStatus === "planned" && o.shiftId === null) return false;
      if (filters.planStatus === "cancelled" && !o.cancelled) return false;
      return true;
    });
  }, [dayOrders, filters]);

  const sorted = useMemo(() => {
    const arr = [...filtered];
    arr.sort((a, b) => {
      const av = getSortValue(a, sortKey);
      const bv = getSortValue(b, sortKey);
      if (av < bv) return sortDir === "asc" ? -1 : 1;
      if (av > bv) return sortDir === "asc" ? 1 : -1;
      return 0;
    });
    return arr;
  }, [filtered, sortKey, sortDir]);

  const handleSort = (key: SortKey) => {
    if (key === sortKey) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  const activeFilterCount = countActiveFilters(filters);

  return (
    <div className="space-y-4">
      {!compact && <DayPicker />}

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-100 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-sm font-medium">Ordrar ({sorted.length})</h3>
            <p className="text-[10px] text-gray-500 mt-0.5">
              {dayOrders.filter((o) => o.shiftId).length} planerade · {dayOrders.filter((o) => o.shiftId === null).length} oplanerade
            </p>
          </div>
          <button
            onClick={() => setShowFilters(true)}
            className="inline-flex items-center gap-1.5 border border-gray-200 px-3 py-1.5 rounded-md text-xs font-medium hover:bg-gray-50"
          >
            <Filter size={12} />
            Filter
            {activeFilterCount > 0 && (
              <span className="ml-1 bg-gray-900 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded-full">
                {activeFilterCount}
              </span>
            )}
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <HeaderCell label="Ordernr" sortKey="id" current={sortKey} dir={sortDir} onClick={handleSort} />
                <HeaderCell label="Kund" sortKey="customer" current={sortKey} dir={sortDir} onClick={handleSort} />
                <HeaderCell label="Prio" sortKey="priority" current={sortKey} dir={sortDir} onClick={handleSort} />
                <HeaderCell label="Upphämtning" sortKey="pickup" current={sortKey} dir={sortDir} onClick={handleSort} />
                <HeaderCell label="Avlämning" sortKey="delivery" current={sortKey} dir={sortDir} onClick={handleSort} />
                <HeaderCell label="FLM" sortKey="flm" current={sortKey} dir={sortDir} onClick={handleSort} align="right" />
                <HeaderCell label="Vikt" sortKey="weight" current={sortKey} dir={sortDir} onClick={handleSort} align="right" />
                <th className="text-left text-[10px] font-medium text-gray-500 px-5 py-3 uppercase tracking-wider">Pass</th>
              </tr>
            </thead>
            <tbody>
              {sorted.slice(0, 80).map((o) => {
                const shift = o.shiftId ? state.data.shifts.find((s) => s.id === o.shiftId) : null;
                return (
                  <tr
                    key={o.id}
                    onClick={() => setOpenOrder(o.id)}
                    className="border-b border-gray-50 hover:bg-gray-50/60 cursor-pointer"
                  >
                    <td className="px-5 py-2.5 font-mono text-xs text-gray-700">
                      <div className="flex items-center gap-2">
                        {o.id}
                        {o.shipmentBlockId && (
                          <span
                            title="Shipment-block"
                            className="inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-purple-50 text-purple-700 text-[10px] rounded"
                          >
                            <Link2 size={9} /> Block
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-5 py-2.5 text-xs">{o.customer}</td>
                    <td className="px-5 py-2.5">
                      <span className={`inline-flex px-2 py-0.5 rounded-full text-[10px] font-medium ${priorityColor[o.priority]}`}>
                        {o.priority}
                      </span>
                    </td>
                    <td className="px-5 py-2.5 text-xs text-gray-600">{o.pickup}</td>
                    <td className="px-5 py-2.5 text-xs text-gray-600">{o.delivery}</td>
                    <td className="px-5 py-2.5 text-xs text-right font-medium">{o.flm.toFixed(1)}</td>
                    <td className="px-5 py-2.5 text-xs text-right text-gray-600">{o.weightKg} kg</td>
                    <td className="px-5 py-2.5 text-xs text-gray-500">
                      {shift ? `${shift.shiftNo} · ${shift.area}` : <span className="text-amber-600">Oplanerad</span>}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {sorted.length > 80 && (
          <div className="px-5 py-3 border-t border-gray-100 text-xs text-gray-500 text-center">
            Visar 80 av {sorted.length} ordrar. Använd filter för att begränsa urvalet.
          </div>
        )}
      </div>

      {showFilters && (
        <FilterPanel value={filters} onChange={setFilters} onClose={() => setShowFilters(false)} />
      )}

      {openOrder && <OrderDetailModal orderId={openOrder} onClose={() => setOpenOrder(null)} />}
    </div>
  );
}

function HeaderCell({
  label,
  sortKey,
  current,
  dir,
  onClick,
  align = "left",
}: {
  label: string;
  sortKey: SortKey;
  current: SortKey;
  dir: SortDir;
  onClick: (k: SortKey) => void;
  align?: "left" | "right";
}) {
  const active = sortKey === current;
  return (
    <th
      onClick={() => onClick(sortKey)}
      className={`text-[10px] font-medium text-gray-500 px-5 py-3 uppercase tracking-wider cursor-pointer select-none ${
        align === "right" ? "text-right" : "text-left"
      }`}
    >
      <span className={`inline-flex items-center gap-1 ${active ? "text-gray-900" : ""}`}>
        {label}
        {active ? (
          dir === "asc" ? <ArrowUp size={10} /> : <ArrowDown size={10} />
        ) : null}
      </span>
    </th>
  );
}

function getSortValue(o: Order, key: SortKey): string | number {
  switch (key) {
    case "id":
      return o.id;
    case "customer":
      return o.customer;
    case "pickup":
      return o.pickup;
    case "delivery":
      return o.delivery;
    case "flm":
      return o.flm;
    case "weight":
      return o.weightKg;
    case "priority":
      return o.priority;
  }
}
