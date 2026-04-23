"use client";

import { X, Package, MapPin, Scale, AlertCircle, Link2 } from "lucide-react";
import { useMemo, useState } from "react";
import { useDemoStore } from "./demoStore";

interface Props {
  orderId: string;
  onClose: () => void;
}

export default function OrderDetailModal({ orderId, onClose }: Props) {
  const { state, moveOrder, selectedDay } = useDemoStore();
  const order = state.data.orders.find((o) => o.id === orderId);
  const [moveTo, setMoveTo] = useState<string>("");

  const shifts = useMemo(
    () => state.data.shifts.filter((s) => s.dayId === order?.dayId),
    [state.data.shifts, order?.dayId]
  );

  const currentShift = shifts.find((s) => s.id === order?.shiftId);
  const isDraft = selectedDay.status === "draft";

  if (!order) return null;

  const blockSiblings = order.shipmentBlockId
    ? state.data.orders.filter(
        (o) => o.shipmentBlockId === order.shipmentBlockId && o.id !== order.id
      )
    : [];

  const handleMove = () => {
    if (!moveTo) return;
    moveOrder(order.id, moveTo === "__none__" ? null : moveTo);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/40 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-xl border border-gray-200 shadow-xl max-w-2xl w-full my-8">
        <div className="px-5 py-4 border-b border-gray-100 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-base font-medium font-mono">{order.id}</h3>
              <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                {order.priority}
              </span>
              {order.shipmentBlockId && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-purple-50 text-purple-700">
                  <Link2 size={11} /> Block ×{blockSiblings.length + 1}
                </span>
              )}
              {order.duplicate && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700">
                  Dubblett
                </span>
              )}
            </div>
            <p className="text-xs text-gray-500">
              {order.customer} · {order.trailerType} / {order.slapType}
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

        <div className="px-5 py-4 space-y-5">
          {/* Addresses */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-gray-50 rounded-lg border border-gray-100 p-4">
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                <MapPin size={13} /> Avsändare
              </div>
              <div className="text-sm font-medium">{order.pickup}</div>
              <div className="text-xs text-gray-500 mt-0.5">{order.pickupAddress}</div>
              <div className="text-xs text-gray-500 mt-1">Hämtdatum: {order.pickupDate}</div>
            </div>
            <div className="bg-gray-50 rounded-lg border border-gray-100 p-4">
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                <MapPin size={13} /> Mottagare
              </div>
              <div className="text-sm font-medium">{order.delivery}</div>
              <div className="text-xs text-gray-500 mt-0.5">{order.deliveryAddress}</div>
              <div className="text-xs text-gray-500 mt-1">Leveransdatum: {order.deliveryDate}</div>
            </div>
          </div>

          {/* Gods */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Metric icon={Package} label="FLM" value={order.flm.toFixed(1)} />
            <Metric icon={Scale} label="Vikt" value={`${order.weightKg} kg`} />
            <Metric icon={Package} label="Pall" value={order.pallets.toString()} />
            <Metric icon={Package} label="Shipment" value={order.shipmentNo} small />
          </div>

          {/* Special rules */}
          {order.specialRules.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                <AlertCircle size={13} /> Specialregler
              </div>
              <div className="flex flex-wrap gap-1.5">
                {order.specialRules.map((r) => (
                  <span
                    key={r}
                    className="px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Block siblings */}
          {blockSiblings.length > 0 && (
            <div>
              <div className="text-xs text-gray-500 mb-2">Block-syskon</div>
              <div className="flex flex-wrap gap-1.5">
                {blockSiblings.map((b) => (
                  <span
                    key={b.id}
                    className="px-2 py-0.5 rounded text-xs font-mono bg-purple-50 text-purple-700"
                  >
                    {b.id}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Current assignment + move control */}
          <div className="border-t border-gray-100 pt-4">
            <p className="text-xs text-gray-500 mb-2">Tilldelning</p>
            {currentShift ? (
              <div className="text-sm mb-3">
                Pass <span className="font-mono">{currentShift.shiftNo}</span> — {currentShift.area}
              </div>
            ) : (
              <div className="text-sm text-gray-500 mb-3">Ej tilldelat</div>
            )}
            {isDraft && (
              <div className="flex items-center gap-2">
                <select
                  value={moveTo}
                  onChange={(e) => setMoveTo(e.target.value)}
                  className="flex-1 text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white"
                >
                  <option value="">Välj pass…</option>
                  <option value="__none__">— Oplanerat —</option>
                  {shifts.map((s) => (
                    <option key={s.id} value={s.id}>
                      Pass {s.shiftNo} — {s.area}
                    </option>
                  ))}
                </select>
                <button
                  onClick={handleMove}
                  disabled={!moveTo}
                  className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium disabled:opacity-40 hover:bg-gray-800 transition-colors"
                >
                  Flytta
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="px-5 py-3 border-t border-gray-100 flex justify-end">
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

function Metric({
  icon: Icon,
  label,
  value,
  small,
}: {
  icon: typeof Package;
  label: string;
  value: string;
  small?: boolean;
}) {
  return (
    <div className="bg-gray-50 rounded-lg border border-gray-100 p-3">
      <div className="flex items-center gap-1.5 text-[10px] text-gray-500 uppercase tracking-wider mb-1">
        <Icon size={11} /> {label}
      </div>
      <div className={small ? "text-xs font-mono" : "text-base font-semibold"}>{value}</div>
    </div>
  );
}
