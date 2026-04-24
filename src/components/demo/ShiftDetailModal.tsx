"use client";

import { useMemo, useState } from "react";
import {
  X,
  Clock,
  Truck,
  ArrowDown,
  ArrowUp,
  Map as MapIcon,
  Layers,
  Package,
  ArrowRight,
} from "lucide-react";
import { useDemoStore } from "./demoStore";
import type { Shift } from "./mockGenerator";

interface Props {
  shiftId: string;
  onClose: () => void;
}

const HUB = "59.33,18.06"; // Stockholm (generisk hub-koordinat)

export default function ShiftDetailModal({ shiftId, onClose }: Props) {
  const { state, selectedDay } = useDemoStore();
  const shift = state.data.shifts.find((s) => s.id === shiftId);
  const [unitFilter, setUnitFilter] = useState<"all" | "flak" | "slap">("all");

  const { car, flak, slap, orders, stops, deliveries, pickups } = useMemo(() => {
    if (!shift) {
      return { car: null, flak: null, slap: null, orders: [], stops: [], deliveries: [], pickups: [] };
    }
    const car = state.data.cars.find((c) => c.id === shift.carId) || null;
    const flak = shift.flakId ? state.data.flak.find((f) => f.id === shift.flakId) || null : null;
    const slap = shift.slapId ? state.data.slap.find((s) => s.id === shift.slapId) || null : null;

    const stops = state.data.stops
      .filter((s) => shift.stopIds.includes(s.id))
      .sort((a, b) => a.seq - b.seq);

    const filtered = stops.filter((s) => {
      if (unitFilter === "all") return true;
      if (unitFilter === "flak") return s.unitId.startsWith("flak-");
      if (unitFilter === "slap") return s.unitId.startsWith("slap-");
      return true;
    });

    const orderIds = filtered.map((s) => s.orderId);
    const orders = state.data.orders.filter((o) => orderIds.includes(o.id));
    const deliveries = filtered.filter((s) => s.type === "delivery");
    const pickups = filtered.filter((s) => s.type === "pickup");

    return { car, flak, slap, orders, stops: filtered, deliveries, pickups };
  }, [shift, state.data, unitFilter]);

  if (!shift) return null;

  const metricCards = [
    { label: "Pass-tid", value: formatMinutes(shift.workMinutes), icon: Clock },
    { label: "Enheter", value: `${flak ? 1 : 0} / ${slap ? 1 : 0}`, icon: Layers, hint: "Flak / Släp" },
    { label: "Leveranser", value: shift.stopIds.length.toString(), icon: Package },
    { label: "Distans", value: `${shift.distanceKm} km`, icon: MapIcon },
  ];

  const stopFlow = stops.map((s) => s.area);

  const mapsUrl = buildMapsUrl(stops.map((s) => s.area));

  return (
    <div className="fixed inset-0 z-[100] bg-black/40 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-xl border border-gray-200 shadow-xl max-w-4xl w-full my-8">
        {/* Header */}
        <div className="px-5 py-4 border-b border-gray-100 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-base font-medium">Pass {shift.shiftNo} — {shift.area}</h3>
              <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${selectedDay.status === "approved" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}`}>
                {selectedDay.status === "approved" ? "Godkänd" : "Förslag"}
              </span>
            </div>
            <p className="text-xs text-gray-500">
              {car?.reg} · {car?.driver}
              {flak && <> · Flak {flak.reg}</>}
              {slap && <> · Släp {slap.reg}</>}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Stäng"
            className="text-gray-500 hover:text-gray-600 shrink-0"
          >
            <X size={18} />
          </button>
        </div>

        {/* Metric cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 px-5 pt-4">
          {metricCards.map((m) => (
            <div key={m.label} className="bg-gray-50 rounded-xl border border-gray-100 p-4">
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                <m.icon size={13} />
                <span>{m.label}</span>
              </div>
              <div className="text-lg font-semibold">{m.value}</div>
              {m.hint && <div className="text-[10px] text-gray-500 mt-0.5">{m.hint}</div>}
            </div>
          ))}
        </div>

        {/* Stop flow */}
        {stopFlow.length > 0 && (
          <div className="px-5 pt-5">
            <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Stoppflöde
            </p>
            <div className="flex items-center gap-1 flex-wrap">
              <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-gray-900 text-white">
                Hub
              </span>
              {stopFlow.map((area, i) => (
                <span key={i} className="flex items-center gap-1">
                  <ArrowRight size={12} className="text-gray-400" aria-hidden="true" />
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      i % 2 === 0 ? "bg-blue-50 text-blue-700" : "bg-amber-50 text-amber-700"
                    }`}
                  >
                    {area}
                  </span>
                </span>
              ))}
              <ArrowRight size={12} className="text-gray-400" aria-hidden="true" />
              <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-gray-900 text-white">
                Hub
              </span>
            </div>
          </div>
        )}

        {/* Hook-and-go badges */}
        {(shift.hookGoIn || shift.hookGoOut) && (
          <div className="px-5 pt-4 flex flex-wrap gap-2">
            {shift.hookGoIn && flak && (
              <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-medium px-2.5 py-1 rounded-full">
                <ArrowUp size={12} aria-hidden="true" /> Hämta från gård ({flak.reg})
              </span>
            )}
            {shift.hookGoOut && (
              <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 text-xs font-medium px-2.5 py-1 rounded-full">
                <ArrowDown size={12} aria-hidden="true" /> Lämna på gård (för imorgon)
              </span>
            )}
            {shift.flakOrphan && (
              <span className="inline-flex items-center gap-1.5 bg-red-50 text-red-700 text-xs font-medium px-2.5 py-1 rounded-full">
                Ohanterad gårdsenhet
              </span>
            )}
          </div>
        )}

        {/* Unit filter */}
        <div className="px-5 pt-4 flex items-center gap-1.5">
          {(["all", "flak", "slap"] as const).map((k) => (
            <button
              key={k}
              onClick={() => setUnitFilter(k)}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                unitFilter === k
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {k === "all" ? "Alla" : k === "flak" ? "Flak" : "Släp"}
            </button>
          ))}
          <a
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="ml-auto inline-flex items-center gap-1.5 text-xs font-medium text-blue-700 hover:text-blue-800 border border-blue-200 bg-blue-50 px-3 py-1 rounded-md"
          >
            <MapIcon size={12} /> Visa rutt i Google Maps
          </a>
        </div>

        {/* Deliveries table */}
        <Table title="Leveranser" stops={deliveries} orders={orders} />

        {/* Pickups table */}
        <Table title="Hämtningar" stops={pickups} orders={orders} />

        <div className="px-5 py-4 border-t border-gray-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-sm font-medium border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            Stäng
          </button>
        </div>
      </div>
    </div>
  );
}

function Table({
  title,
  stops,
  orders,
}: {
  title: string;
  stops: { id: string; orderId: string; seq: number; area: string; address: string; flm: number; weightKg: number; unitId: string }[];
  orders: { id: string; pickup: string; delivery: string; shipmentBlockId: string | null }[];
}) {
  if (stops.length === 0) return null;

  return (
    <div className="px-5 pt-4">
      <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-2">
        {title} ({stops.length})
      </p>
      <div className="overflow-x-auto rounded-lg border border-gray-100">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="text-left text-[10px] font-medium text-gray-500 px-3 py-2 uppercase tracking-wider">#</th>
              <th className="text-left text-[10px] font-medium text-gray-500 px-3 py-2 uppercase tracking-wider">Enhet</th>
              <th className="text-left text-[10px] font-medium text-gray-500 px-3 py-2 uppercase tracking-wider">Order</th>
              <th className="text-left text-[10px] font-medium text-gray-500 px-3 py-2 uppercase tracking-wider">Från</th>
              <th className="text-left text-[10px] font-medium text-gray-500 px-3 py-2 uppercase tracking-wider">Till</th>
              <th className="text-right text-[10px] font-medium text-gray-500 px-3 py-2 uppercase tracking-wider">FLM</th>
              <th className="text-right text-[10px] font-medium text-gray-500 px-3 py-2 uppercase tracking-wider">Vikt</th>
            </tr>
          </thead>
          <tbody>
            {stops.map((s, i) => {
              const order = orders.find((o) => o.id === s.orderId);
              return (
                <tr key={s.id} className="border-b border-gray-50 last:border-0">
                  <td className="px-3 py-2 text-xs font-mono text-gray-600">{i + 1}</td>
                  <td className="px-3 py-2 text-xs text-gray-600 flex items-center gap-1">
                    <Truck size={11} className="text-gray-400" aria-hidden="true" />
                    {s.unitId.startsWith("flak-") ? "Flak" : "Släp"}
                  </td>
                  <td className="px-3 py-2 text-xs font-mono">
                    {s.orderId}
                    {order?.shipmentBlockId && (
                      <span className="ml-2 inline-block px-1.5 py-0.5 bg-purple-50 text-purple-700 text-[10px] rounded">
                        Block
                      </span>
                    )}
                  </td>
                  <td className="px-3 py-2 text-xs text-gray-600">{order?.pickup || s.area}</td>
                  <td className="px-3 py-2 text-xs text-gray-600">{order?.delivery || s.area}</td>
                  <td className="px-3 py-2 text-xs text-right font-medium">{s.flm.toFixed(1)}</td>
                  <td className="px-3 py-2 text-xs text-right text-gray-600">{s.weightKg} kg</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function formatMinutes(m: number): string {
  const h = Math.floor(m / 60);
  const min = m % 60;
  return `${String(h).padStart(2, "0")}:${String(min).padStart(2, "0")}`;
}

function buildMapsUrl(areas: string[]): string {
  const waypoints = areas.join("|");
  return `https://www.google.com/maps/dir/?api=1&origin=${HUB}&destination=${HUB}&waypoints=${encodeURIComponent(waypoints)}`;
}

// Re-export the shift helper so other modules can compute metrics the same way
export function formatShiftMinutes(m: number): string {
  return formatMinutes(m);
}

export type { Shift };
