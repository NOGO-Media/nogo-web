"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
  type ReactNode,
} from "react";
import {
  generateDemoData,
  type DemoData,
  type DayStatus,
} from "./mockGenerator";

// ── State & actions ────────────────────────────────────────

export interface DemoState {
  data: DemoData;
  selectedDayId: string;
  // history stack of previous `data` snapshots, capped at 30
  past: DemoData[];
}

type Action =
  | { type: "SELECT_DAY"; dayId: string }
  | { type: "CREATE_PLAN"; dayId: string }
  | { type: "APPROVE_DAY"; dayId: string }
  | { type: "REOPEN_DAY"; dayId: string }
  | { type: "MOVE_ORDER"; orderId: string; toShiftId: string | null }
  | { type: "UNDO" };

const MAX_UNDO = 30;

function pushHistory(state: DemoState): DemoData[] {
  const next = [...state.past, state.data];
  if (next.length > MAX_UNDO) next.shift();
  return next;
}

function updateDay(data: DemoData, dayId: string, patch: Partial<DemoData["days"][number]>): DemoData {
  return {
    ...data,
    days: data.days.map((d) => (d.id === dayId ? { ...d, ...patch } : d)),
  };
}

function reducer(state: DemoState, action: Action): DemoState {
  switch (action.type) {
    case "SELECT_DAY":
      return { ...state, selectedDayId: action.dayId };

    case "CREATE_PLAN": {
      const day = state.data.days.find((d) => d.id === action.dayId);
      if (!day) return state;
      // A plan can be (re)generated as long as the day is open — i.e. not
      // already approved or locked. This includes draft (regenerate) and
      // stale (refresh after upstream change).
      if (day.status === "approved" || day.status === "locked") return state;
      return {
        ...state,
        past: pushHistory(state),
        data: updateDay(state.data, action.dayId, { status: "draft" }),
      };
    }

    case "APPROVE_DAY": {
      const day = state.data.days.find((d) => d.id === action.dayId);
      if (!day || day.status !== "draft") return state;
      const now = new Date();
      const stamp = `${now.toISOString().slice(0, 10)} ${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
      return {
        ...state,
        past: pushHistory(state),
        data: updateDay(state.data, action.dayId, {
          status: "approved",
          approvedBy: "Hugo S.",
          approvedAt: stamp,
        }),
      };
    }

    case "REOPEN_DAY": {
      const day = state.data.days.find((d) => d.id === action.dayId);
      if (!day || day.status !== "approved") return state;
      // Cascade: find the next day (strictly after) and mark as stale if planned
      const idx = state.data.days.findIndex((d) => d.id === action.dayId);
      const next = state.data.days[idx + 1];
      let data = updateDay(state.data, action.dayId, {
        status: "draft",
        approvedBy: undefined,
        approvedAt: undefined,
      });
      if (next && (next.status === "draft" || next.status === "approved")) {
        data = updateDay(data, next.id, { status: "stale" });
      }
      return {
        ...state,
        past: pushHistory(state),
        data,
      };
    }

    case "MOVE_ORDER": {
      const { orderId, toShiftId } = action;
      const order = state.data.orders.find((o) => o.id === orderId);
      if (!order) return state;
      const day = state.data.days.find((d) => d.id === order.dayId);
      if (!day || day.status !== "draft") return state;
      if (order.shiftId === toShiftId) return state;

      // Validate destination shift belongs to the same day
      if (toShiftId) {
        const toShift = state.data.shifts.find((s) => s.id === toShiftId);
        if (!toShift || toShift.dayId !== order.dayId) return state;
      }

      const stopId = `stop-${orderId}`;
      const orders = state.data.orders.map((o) =>
        o.id === orderId ? { ...o, shiftId: toShiftId } : o
      );

      // Move the existing stop (if any) between shifts' stopIds lists.
      const shifts = state.data.shifts.map((sh) => {
        const removed = order.shiftId === sh.id && sh.stopIds.includes(stopId);
        const added = toShiftId === sh.id && !sh.stopIds.includes(stopId);
        if (!removed && !added) return sh;
        let stopIds = sh.stopIds;
        if (removed) stopIds = stopIds.filter((id) => id !== stopId);
        if (added) stopIds = [...stopIds, stopId];
        return { ...sh, stopIds };
      });

      return {
        ...state,
        past: pushHistory(state),
        data: { ...state.data, orders, shifts },
      };
    }

    case "UNDO": {
      if (state.past.length === 0) return state;
      const previous = state.past[state.past.length - 1];
      return {
        ...state,
        data: previous,
        past: state.past.slice(0, -1),
      };
    }

    default:
      return state;
  }
}

// ── Context ───────────────────────────────────────────────

interface DemoContextValue {
  state: DemoState;
  dispatch: React.Dispatch<Action>;
  selectedDay: DemoData["days"][number];
  canUndo: boolean;
  selectDay: (id: string) => void;
  createPlan: (id: string) => void;
  approveDay: (id: string) => void;
  reopenDay: (id: string) => void;
  moveOrder: (orderId: string, toShiftId: string | null) => void;
  undo: () => void;
  statusLabel: (s: DayStatus) => string;
  statusDot: (s: DayStatus) => string;
  statusBadge: (s: DayStatus) => string;
}

const DemoContext = createContext<DemoContextValue | null>(null);

function initState(): DemoState {
  const data = generateDemoData();
  return {
    data,
    selectedDayId: data.days.find((d) => d.status === "draft")?.id || data.days[0].id,
    past: [],
  };
}

export function DemoStoreProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, undefined, initState);

  const selectedDay = useMemo(
    () => state.data.days.find((d) => d.id === state.selectedDayId) || state.data.days[0],
    [state.data.days, state.selectedDayId]
  );

  const selectDay = useCallback((id: string) => dispatch({ type: "SELECT_DAY", dayId: id }), []);
  const createPlan = useCallback((id: string) => dispatch({ type: "CREATE_PLAN", dayId: id }), []);
  const approveDay = useCallback((id: string) => dispatch({ type: "APPROVE_DAY", dayId: id }), []);
  const reopenDay = useCallback((id: string) => dispatch({ type: "REOPEN_DAY", dayId: id }), []);
  const moveOrder = useCallback(
    (orderId: string, toShiftId: string | null) =>
      dispatch({ type: "MOVE_ORDER", orderId, toShiftId }),
    []
  );
  const undo = useCallback(() => dispatch({ type: "UNDO" }), []);

  const value: DemoContextValue = {
    state,
    dispatch,
    selectedDay,
    canUndo: state.past.length > 0,
    selectDay,
    createPlan,
    approveDay,
    reopenDay,
    moveOrder,
    undo,
    statusLabel,
    statusDot,
    statusBadge,
  };

  return <DemoContext.Provider value={value}>{children}</DemoContext.Provider>;
}

export function useDemoStore(): DemoContextValue {
  const ctx = useContext(DemoContext);
  if (!ctx) throw new Error("useDemoStore must be used within DemoStoreProvider");
  return ctx;
}

// ── Status helpers ────────────────────────────────────────

function statusLabel(s: DayStatus): string {
  return {
    unplanned: "Oplanerad",
    draft: "Förslag",
    approved: "Godkänd",
    stale: "Behöver uppdateras",
    locked: "Låst",
  }[s];
}

function statusDot(s: DayStatus): string {
  return {
    unplanned: "bg-gray-400",
    draft: "bg-blue-500",
    approved: "bg-green-500",
    stale: "bg-amber-500",
    locked: "bg-red-500",
  }[s];
}

function statusBadge(s: DayStatus): string {
  return {
    unplanned: "bg-gray-100 text-gray-700",
    draft: "bg-blue-100 text-blue-700",
    approved: "bg-green-100 text-green-700",
    stale: "bg-amber-100 text-amber-700",
    locked: "bg-red-100 text-red-700",
  }[s];
}
