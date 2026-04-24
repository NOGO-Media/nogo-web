"use client";

import { useMemo, useState } from "react";
import {
  DndContext,
  useDraggable,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  Play,
  CheckCircle2,
  RotateCcw,
  Undo2,
  AlertTriangle,
  Search,
  GripVertical,
} from "lucide-react";
import { useDemoStore } from "./demoStore";
import DayPicker from "./DayPicker";
import ShiftRow from "./ShiftRow";
import ShiftDetailModal from "./ShiftDetailModal";
import OrderDetailModal from "./OrderDetailModal";
import OptimizationProgress from "./OptimizationProgress";
import type { Order } from "./mockGenerator";

export default function DemoPlanering() {
  const {
    state,
    selectedDay,
    canUndo,
    createPlan,
    approveDay,
    reopenDay,
    moveOrder,
    undo,
    statusBadge,
    statusLabel,
  } = useDemoStore();
  const [search, setSearch] = useState("");
  const [openShift, setOpenShift] = useState<string | null>(null);
  const [openOrder, setOpenOrder] = useState<string | null>(null);
  const [showProgress, setShowProgress] = useState(false);

  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 5 } }));

  const dayShifts = useMemo(
    () => state.data.shifts.filter((s) => s.dayId === selectedDay.id),
    [state.data.shifts, selectedDay.id]
  );

  const dayOrders = useMemo(
    () => state.data.orders.filter((o) => o.dayId === selectedDay.id),
    [state.data.orders, selectedDay.id]
  );

  const unplannedOrders = useMemo(() => {
    const q = search.trim().toLowerCase();
    return dayOrders
      .filter((o) => o.shiftId === null && !o.cancelled)
      .filter((o) =>
        q === ""
          ? true
          : o.id.toLowerCase().includes(q) ||
            o.customer.toLowerCase().includes(q) ||
            o.delivery.toLowerCase().includes(q)
      );
  }, [dayOrders, search]);

  const orphanYardUnits = state.data.yardUnits.filter((u) => u.orphan);

  const canCreatePlan =
    selectedDay.status !== "approved" && selectedDay.status !== "locked";
  const selectedIdx = state.data.days.findIndex((d) => d.id === selectedDay.id);
  const earlierDaysAllApproved = state.data.days
    .slice(0, selectedIdx)
    .every((d) => d.status === "approved");
  const canApprove = selectedDay.status === "draft" && earlierDaysAllApproved;
  const canReopen = selectedDay.status === "approved";
  const isDraft = selectedDay.status === "draft";
  const hasExistingPlan =
    selectedDay.status === "draft" || selectedDay.status === "stale";

  const handleDragEnd = (ev: DragEndEvent) => {
    const orderId = String(ev.active.id).replace("order-", "");
    const overId = ev.over?.id;
    if (!overId) return;
    const shiftId = String(overId).replace("shift-", "");
    if (shiftId) moveOrder(orderId, shiftId);
  };

  const handleCreatePlan = () => {
    setShowProgress(true);
  };

  const handleProgressComplete = () => {
    createPlan(selectedDay.id);
  };

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <div className="space-y-4">
        <DayPicker />

        {/* Orphan banner */}
        {orphanYardUnits.length > 0 && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
            <AlertTriangle size={18} className="text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-amber-800">
                {orphanYardUnits.length} ohanterad gårdsenhet{orphanYardUnits.length > 1 ? "er" : ""}
              </p>
              <p className="text-xs text-amber-700 mt-1">
                Väntande gårdsenheter från föregående dag som inte har återanvänts i planen:{" "}
                {orphanYardUnits.map((u) => u.reg).join(", ")}
              </p>
            </div>
          </div>
        )}

        {/* Day metadata + actions */}
        <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-5">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-base md:text-lg font-medium">Planering — {selectedDay.label}</h2>
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusBadge(selectedDay.status)}`}>
                  {statusLabel(selectedDay.status)}
                </span>
              </div>
              <p className="text-xs text-gray-500">
                {dayOrders.length} ordrar · {dayShifts.length} pass
                {selectedDay.approvedBy && (
                  <> · Godkänd av {selectedDay.approvedBy} {selectedDay.approvedAt}</>
                )}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={undo}
                disabled={!canUndo}
                className="inline-flex items-center gap-1.5 border border-gray-200 px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Undo2 size={14} /> Ångra
              </button>
              {canCreatePlan && (
                <button
                  onClick={handleCreatePlan}
                  className="inline-flex items-center gap-1.5 bg-black text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-800"
                >
                  <Play size={14} aria-hidden="true" />{" "}
                  {hasExistingPlan ? "Skapa om planeringsförslag" : "Skapa planeringsförslag"}
                </button>
              )}
              {canApprove && (
                <button
                  onClick={() => approveDay(selectedDay.id)}
                  className="inline-flex items-center gap-1.5 bg-green-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-green-700"
                >
                  <CheckCircle2 size={14} /> Godkänn
                </button>
              )}
              {selectedDay.status === "draft" && !earlierDaysAllApproved && (
                <span className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-md px-2.5 py-1.5">
                  Tidigare dagar måste godkännas först
                </span>
              )}
              {canReopen && (
                <button
                  onClick={() => reopenDay(selectedDay.id)}
                  className="inline-flex items-center gap-1.5 border border-gray-200 px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-50"
                >
                  <RotateCcw size={14} /> Öppna igen
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Main grid: pass table + unplanned sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-4">
          {/* Pass table */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
              <h3 className="text-sm font-medium">Pass ({dayShifts.length})</h3>
              <span className="text-xs text-gray-500">
                Klicka på ett pass för detaljer{isDraft && " · Dra ordrar hit"}
              </span>
            </div>

            {dayShifts.length === 0 ? (
              <div className="px-4 py-12 text-center text-sm text-gray-500">
                Inga pass än. Skapa ett planeringsförslag för att komma igång.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <div className="min-w-[940px]">
                  {/* Column headers */}
                  <div className="grid grid-cols-[76px_96px_140px_140px_72px_140px_76px_160px] gap-3 px-4 py-2 border-b border-gray-100 bg-gray-50 text-[10px] font-medium text-gray-500 uppercase tracking-wider">
                    <div>Pass</div>
                    <div>Bil</div>
                    <div>Flak</div>
                    <div>Släp</div>
                    <div className="text-center">Stopp</div>
                    <div>Arbetstid</div>
                    <div className="text-right">Dist</div>
                    <div>FLM</div>
                  </div>
                  <div className="max-h-[640px] overflow-y-auto">
                    {dayShifts.map((shift) => (
                      <ShiftRow
                        key={shift.id}
                        shift={shift}
                        isDraft={isDraft}
                        onClick={() => setOpenShift(shift.id)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Unplanned orders sidebar */}
          <aside className="bg-white rounded-xl border border-gray-200 overflow-hidden flex flex-col max-h-[720px]">
            <div className="px-4 py-3 border-b border-gray-100">
              <h3 className="text-sm font-medium">Oplanerade ordrar ({unplannedOrders.length})</h3>
              <p className="text-[10px] text-gray-500 mt-0.5">
                {isDraft ? "Drag in i ett pass" : "Endast i draft-läge kan ordrar flyttas"}
              </p>
            </div>
            <div className="px-3 py-2 border-b border-gray-100">
              <div className="relative">
                <Search size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" aria-hidden="true" />
                <input
                  type="text"
                  placeholder="Sök order / kund / till"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-7 pr-3 py-1.5 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300"
                />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto divide-y divide-gray-50">
              {unplannedOrders.length === 0 ? (
                <div className="px-4 py-10 text-center text-xs text-gray-500">
                  Inga oplanerade ordrar
                </div>
              ) : (
                unplannedOrders.map((o) => (
                  <UnplannedRow
                    key={o.id}
                    order={o}
                    draggable={isDraft}
                    onOpen={() => setOpenOrder(o.id)}
                  />
                ))
              )}
            </div>
          </aside>
        </div>
      </div>

      {showProgress && (
        <OptimizationProgress
          onComplete={handleProgressComplete}
          onClose={() => setShowProgress(false)}
        />
      )}

      {openShift && <ShiftDetailModal shiftId={openShift} onClose={() => setOpenShift(null)} />}
      {openOrder && <OrderDetailModal orderId={openOrder} onClose={() => setOpenOrder(null)} />}
    </DndContext>
  );
}

function UnplannedRow({
  order,
  draggable,
  onOpen,
}: {
  order: Order;
  draggable: boolean;
  onOpen: () => void;
}) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: `order-${order.id}`,
    disabled: !draggable,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        opacity: isDragging ? 0.5 : 1,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`px-3 py-2.5 flex items-start gap-2 hover:bg-gray-50/60 ${
        draggable ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      {draggable && (
        <button
          {...listeners}
          {...attributes}
          className="text-gray-400 hover:text-gray-600 shrink-0 mt-1"
          aria-label="Drag handle"
        >
          <GripVertical size={14} />
        </button>
      )}
      <button type="button" onClick={onOpen} className="flex-1 min-w-0 text-left">
        <div className="flex items-center gap-1.5 mb-0.5">
          <span className="font-mono text-xs font-medium">{order.id}</span>
          {order.priority !== "Normal" && (
            <span className="text-[10px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded">
              {order.priority}
            </span>
          )}
        </div>
        <div className="text-xs text-gray-700 truncate">{order.customer}</div>
        <div className="text-[10px] text-gray-500 truncate">
          {order.pickup} → {order.delivery} · {order.flm.toFixed(1)} FLM
        </div>
      </button>
    </div>
  );
}
