// Mock data for NOGO Dispatch demo dashboard
// All data is fictional — realistic Swedish transport/logistics data

export type OrderStatus = "Planerad" | "Pågår" | "Levererad";
export type VehicleStatus = "I trafik" | "Ledig" | "Underhåll";
export type StopType = "pickup" | "delivery";
export type ScheduleType = "driving" | "loading" | "break" | "idle";

export interface Order {
  id: string;
  customer: string;
  pickup: string;
  delivery: string;
  weight: string;
  status: OrderStatus;
  vehicleId: string | null;
}

export interface Vehicle {
  id: string;
  reg: string;
  type: string;
  driver: string;
  status: VehicleStatus;
  capacity: number; // 0-100
  position: [number, number]; // [lng, lat]
  color: string;
}

export interface RouteData {
  vehicleId: string;
  coordinates: [number, number][];
  color: string;
}

export interface Stop {
  id: string;
  orderId: string;
  type: StopType;
  position: [number, number];
  label: string;
}

export interface ScheduleBlock {
  vehicleId: string;
  start: number; // hour (6-20)
  end: number;
  type: ScheduleType;
  label?: string;
}

// ── Vehicles ──────────────────────────────────────────────

export const vehicles: Vehicle[] = [
  { id: "v1", reg: "GBH 421", type: "Dragbil", driver: "Erik Lindström", status: "I trafik", capacity: 87, position: [16.8, 58.9], color: "#3b82f6" },
  { id: "v2", reg: "KMN 892", type: "Kylbil", driver: "Maria Karlsson", status: "I trafik", capacity: 92, position: [15.9, 58.5], color: "#10b981" },
  { id: "v3", reg: "PLR 153", type: "Flakbil", driver: "Johan Svensson", status: "Ledig", capacity: 0, position: [16.19, 58.59], color: "#6b7280" },
  { id: "v4", reg: "ABC 734", type: "Skåpbil", driver: "Anna Bergman", status: "I trafik", capacity: 78, position: [15.4, 58.7], color: "#f59e0b" },
  { id: "v5", reg: "TYU 561", type: "Dragbil", driver: "Oscar Nilsson", status: "I trafik", capacity: 95, position: [17.5, 59.2], color: "#8b5cf6" },
  { id: "v6", reg: "FGH 289", type: "Containerbil", driver: "Lisa Johansson", status: "Underhåll", capacity: 0, position: [16.19, 58.59], color: "#ef4444" },
  { id: "v7", reg: "WXZ 445", type: "Kylbil", driver: "Anders Pettersson", status: "I trafik", capacity: 64, position: [14.8, 57.9], color: "#06b6d4" },
  { id: "v8", reg: "BCD 678", type: "Flakbil", driver: "Emma Gustafsson", status: "I trafik", capacity: 82, position: [16.0, 59.0], color: "#ec4899" },
];

// ── Orders ────────────────────────────────────────────────

export const orders: Order[] = [
  { id: "ORD-3001", customer: "Nordic Retail AB", pickup: "Norrköping", delivery: "Stockholm", weight: "24 ton", status: "Pågår", vehicleId: "v1" },
  { id: "ORD-3002", customer: "FreshFood Distribution", pickup: "Linköping", delivery: "Örebro", weight: "18 ton", status: "Pågår", vehicleId: "v2" },
  { id: "ORD-3003", customer: "Skandia Logistik", pickup: "Oxelösund", delivery: "Norrköping", weight: "32 ton", status: "Planerad", vehicleId: "v3" },
  { id: "ORD-3004", customer: "Möbelhuset Norden", pickup: "Linköping", delivery: "Jönköping", weight: "12 ton", status: "Pågår", vehicleId: "v4" },
  { id: "ORD-3005", customer: "Skandia Frakt", pickup: "Stockholm", delivery: "Västerås", weight: "8 ton", status: "Pågår", vehicleId: "v5" },
  { id: "ORD-3006", customer: "Nordic Retail AB", pickup: "Norrköping", delivery: "Linköping", weight: "15 ton", status: "Levererad", vehicleId: "v1" },
  { id: "ORD-3007", customer: "Nordics Logistik", pickup: "Göteborg", delivery: "Norrköping", weight: "28 ton", status: "Planerad", vehicleId: null },
  { id: "ORD-3008", customer: "TechSupply AB", pickup: "Nyköping", delivery: "Norrköping", weight: "6 ton", status: "Pågår", vehicleId: "v8" },
  { id: "ORD-3009", customer: "FreshFood Distribution", pickup: "Stockholm", delivery: "Linköping", weight: "20 ton", status: "Planerad", vehicleId: "v7" },
  { id: "ORD-3010", customer: "Bygg-och-Hem", pickup: "Örebro", delivery: "Norrköping", weight: "22 ton", status: "Levererad", vehicleId: "v2" },
  { id: "ORD-3011", customer: "Demo Åkeri AB", pickup: "Norrköping", delivery: "Jönköping", weight: "4 ton", status: "Levererad", vehicleId: "v4" },
  { id: "ORD-3012", customer: "Skandia Frakt", pickup: "Katrineholm", delivery: "Stockholm", weight: "16 ton", status: "Planerad", vehicleId: null },
  { id: "ORD-3013", customer: "FreshFood Distribution", pickup: "Norrköping", delivery: "Nyköping", weight: "10 ton", status: "Pågår", vehicleId: "v7" },
  { id: "ORD-3014", customer: "FreshFood Distribution", pickup: "Linköping", delivery: "Motala", weight: "9 ton", status: "Levererad", vehicleId: "v8" },
  { id: "ORD-3015", customer: "Bygg-och-Hem", pickup: "Norrköping", delivery: "Västerås", weight: "14 ton", status: "Planerad", vehicleId: "v5" },
  { id: "ORD-3016", customer: "TechSupply AB", pickup: "Finspång", delivery: "Stockholm", weight: "30 ton", status: "Planerad", vehicleId: null },
  { id: "ORD-3017", customer: "Nordic Retail AB", pickup: "Örebro", delivery: "Linköping", weight: "11 ton", status: "Levererad", vehicleId: "v2" },
  { id: "ORD-3018", customer: "TechSupply AB", pickup: "Linköping", delivery: "Stockholm", weight: "5 ton", status: "Pågår", vehicleId: "v1" },
  { id: "ORD-3019", customer: "Pappers & Kartong Nord", pickup: "Norrköping", delivery: "Göteborg", weight: "26 ton", status: "Planerad", vehicleId: null },
  { id: "ORD-3020", customer: "FreshFood Distribution", pickup: "Stockholm", delivery: "Norrköping", weight: "3 ton", status: "Levererad", vehicleId: "v8" },
];

// ── Routes (coordinate paths for active vehicles) ─────────

export const routes: RouteData[] = [
  {
    // v1: Norrköping → Stockholm via E4
    vehicleId: "v1",
    color: "#3b82f6",
    coordinates: [
      [16.19, 58.59], [16.25, 58.63], [16.34, 58.70], [16.52, 58.75],
      [16.78, 58.78], [16.94, 58.83], [17.01, 58.88], [17.00, 58.95],
      [16.95, 59.00], [16.93, 59.06], [16.98, 59.12], [17.10, 59.17],
      [17.25, 59.20], [17.45, 59.22], [17.62, 59.24], [17.78, 59.27],
      [17.90, 59.30], [18.07, 59.33],
    ],
  },
  {
    // v2: Linköping → Örebro via rv36/E20
    vehicleId: "v2",
    color: "#10b981",
    coordinates: [
      [15.62, 58.41], [15.53, 58.45], [15.42, 58.50], [15.35, 58.54],
      [15.25, 58.58], [15.15, 58.65], [15.05, 58.72], [14.98, 58.78],
      [14.95, 58.85], [14.98, 58.92], [15.02, 58.98], [15.05, 59.05],
      [15.08, 59.12], [15.12, 59.18], [15.18, 59.23], [15.21, 59.27],
    ],
  },
  {
    // v4: Linköping → Jönköping via rv36
    vehicleId: "v4",
    color: "#f59e0b",
    coordinates: [
      [15.62, 58.41], [15.55, 58.38], [15.45, 58.33], [15.32, 58.28],
      [15.18, 58.22], [15.05, 58.17], [14.92, 58.12], [14.78, 58.06],
      [14.65, 58.00], [14.52, 57.95], [14.40, 57.90], [14.28, 57.85],
      [14.16, 57.78],
    ],
  },
  {
    // v5: Stockholm → Västerås via E18
    vehicleId: "v5",
    color: "#8b5cf6",
    coordinates: [
      [18.07, 59.33], [17.92, 59.34], [17.78, 59.36], [17.62, 59.38],
      [17.45, 59.40], [17.28, 59.43], [17.12, 59.46], [16.98, 59.50],
      [16.85, 59.53], [16.72, 59.56], [16.62, 59.59], [16.55, 59.61],
    ],
  },
  {
    // v7: Norrköping → Nyköping via E4
    vehicleId: "v7",
    color: "#06b6d4",
    coordinates: [
      [16.19, 58.59], [16.28, 58.62], [16.38, 58.65], [16.50, 58.67],
      [16.62, 58.70], [16.72, 58.72], [16.82, 58.73], [16.92, 58.74],
      [17.01, 58.75],
    ],
  },
  {
    // v8: Nyköping → Norrköping → norrut via E4
    vehicleId: "v8",
    color: "#ec4899",
    coordinates: [
      [17.01, 58.75], [16.90, 58.73], [16.78, 58.71], [16.65, 58.68],
      [16.50, 58.65], [16.38, 58.63], [16.25, 58.60], [16.19, 58.59],
      [16.15, 58.62], [16.10, 58.68], [16.05, 58.75], [16.00, 58.82],
      [15.98, 58.90], [15.95, 58.97], [15.92, 59.02],
    ],
  },
];

// ── Stops ─────────────────────────────────────────────────

export const stops: Stop[] = [
  { id: "s1", orderId: "ORD-3001", type: "pickup", position: [16.19, 58.59], label: "Norrköping" },
  { id: "s2", orderId: "ORD-3001", type: "delivery", position: [18.07, 59.33], label: "Stockholm" },
  { id: "s3", orderId: "ORD-3002", type: "pickup", position: [15.62, 58.41], label: "Linköping" },
  { id: "s4", orderId: "ORD-3002", type: "delivery", position: [15.21, 59.27], label: "Örebro" },
  { id: "s5", orderId: "ORD-3004", type: "pickup", position: [15.62, 58.41], label: "Linköping" },
  { id: "s6", orderId: "ORD-3004", type: "delivery", position: [14.16, 57.78], label: "Jönköping" },
  { id: "s7", orderId: "ORD-3005", type: "pickup", position: [18.07, 59.33], label: "Stockholm" },
  { id: "s8", orderId: "ORD-3005", type: "delivery", position: [16.55, 59.61], label: "Västerås" },
  { id: "s9", orderId: "ORD-3008", type: "pickup", position: [17.01, 58.75], label: "Nyköping" },
  { id: "s10", orderId: "ORD-3008", type: "delivery", position: [16.19, 58.59], label: "Norrköping" },
  { id: "s11", orderId: "ORD-3013", type: "pickup", position: [16.19, 58.59], label: "Norrköping" },
  { id: "s12", orderId: "ORD-3013", type: "delivery", position: [17.01, 58.75], label: "Nyköping" },
];

// ── Schedule blocks for Gantt timeline ────────────────────

export const schedule: ScheduleBlock[] = [
  // v1 - Erik (Nkpg → Sthlm)
  { vehicleId: "v1", start: 6, end: 6.5, type: "loading", label: "Lastning Nkpg" },
  { vehicleId: "v1", start: 6.5, end: 9, type: "driving", label: "Nkpg → Sthlm" },
  { vehicleId: "v1", start: 9, end: 9.5, type: "loading", label: "Lossning Sthlm" },
  { vehicleId: "v1", start: 9.5, end: 10, type: "break" },
  { vehicleId: "v1", start: 10, end: 10.5, type: "loading", label: "Lastning Sthlm" },
  { vehicleId: "v1", start: 10.5, end: 13, type: "driving", label: "Sthlm → Lkpg" },
  { vehicleId: "v1", start: 13, end: 13.75, type: "break" },
  { vehicleId: "v1", start: 13.75, end: 16, type: "driving", label: "Lkpg → Nkpg" },
  // v2 - Maria (Lkpg → Örebro)
  { vehicleId: "v2", start: 7, end: 7.5, type: "loading", label: "Lastning Lkpg" },
  { vehicleId: "v2", start: 7.5, end: 10.5, type: "driving", label: "Lkpg → Örebro" },
  { vehicleId: "v2", start: 10.5, end: 11, type: "loading", label: "Lossning Örebro" },
  { vehicleId: "v2", start: 11, end: 11.5, type: "break" },
  { vehicleId: "v2", start: 11.5, end: 14.5, type: "driving", label: "Örebro → Nkpg" },
  { vehicleId: "v2", start: 14.5, end: 15, type: "loading", label: "Lossning Nkpg" },
  // v4 - Anna (Lkpg → Jkpg)
  { vehicleId: "v4", start: 8, end: 8.5, type: "loading", label: "Lastning Lkpg" },
  { vehicleId: "v4", start: 8.5, end: 10.5, type: "driving", label: "Lkpg → Jkpg" },
  { vehicleId: "v4", start: 10.5, end: 11, type: "loading", label: "Lossning Jkpg" },
  { vehicleId: "v4", start: 11, end: 11.5, type: "break" },
  { vehicleId: "v4", start: 11.5, end: 13.5, type: "driving", label: "Jkpg → Lkpg" },
  { vehicleId: "v4", start: 13.5, end: 14, type: "loading", label: "Lastning Lkpg" },
  { vehicleId: "v4", start: 14, end: 16, type: "driving", label: "Lkpg → Nkpg" },
  // v5 - Oscar (Sthlm → Västerås)
  { vehicleId: "v5", start: 6, end: 6.5, type: "loading", label: "Lastning Sthlm" },
  { vehicleId: "v5", start: 6.5, end: 8, type: "driving", label: "Sthlm → Västerås" },
  { vehicleId: "v5", start: 8, end: 8.5, type: "loading", label: "Lossning Västerås" },
  { vehicleId: "v5", start: 8.5, end: 10, type: "driving", label: "Västerås → Sthlm" },
  { vehicleId: "v5", start: 10, end: 10.75, type: "break" },
  { vehicleId: "v5", start: 10.75, end: 11.25, type: "loading", label: "Lastning Sthlm" },
  { vehicleId: "v5", start: 11.25, end: 14, type: "driving", label: "Sthlm → Nkpg" },
  // v7 - Anders (Nkpg → Nyköping)
  { vehicleId: "v7", start: 9, end: 9.5, type: "loading", label: "Lastning Nkpg" },
  { vehicleId: "v7", start: 9.5, end: 11, type: "driving", label: "Nkpg → Nyköping" },
  { vehicleId: "v7", start: 11, end: 11.5, type: "loading", label: "Lossning Nyköping" },
  { vehicleId: "v7", start: 11.5, end: 12.25, type: "break" },
  { vehicleId: "v7", start: 12.25, end: 13.75, type: "driving", label: "Nyköping → Nkpg" },
  // v8 - Emma (Nyköping → Nkpg → norr)
  { vehicleId: "v8", start: 6.5, end: 7, type: "loading", label: "Lastning Nyköping" },
  { vehicleId: "v8", start: 7, end: 8.5, type: "driving", label: "Nyköping → Nkpg" },
  { vehicleId: "v8", start: 8.5, end: 9, type: "loading", label: "Lossning Nkpg" },
  { vehicleId: "v8", start: 9, end: 9.5, type: "break" },
  { vehicleId: "v8", start: 9.5, end: 10, type: "loading", label: "Lastning Nkpg" },
  { vehicleId: "v8", start: 10, end: 12.5, type: "driving", label: "Nkpg → norr" },
  { vehicleId: "v8", start: 12.5, end: 13, type: "loading", label: "Lossning" },
];

// ── Helpers ───────────────────────────────────────────────

export const statusColor: Record<OrderStatus, string> = {
  Planerad: "bg-amber-100 text-amber-700",
  Pågår: "bg-blue-100 text-blue-700",
  Levererad: "bg-green-100 text-green-700",
};

export const vehicleStatusColor: Record<VehicleStatus, string> = {
  "I trafik": "bg-green-100 text-green-700",
  Ledig: "bg-gray-100 text-gray-600",
  Underhåll: "bg-red-100 text-red-700",
};

export const scheduleColor: Record<ScheduleType, string> = {
  driving: "bg-blue-500",
  loading: "bg-amber-400",
  break: "bg-gray-300",
  idle: "bg-gray-100",
};

export const scheduleLabel: Record<ScheduleType, string> = {
  driving: "Körning",
  loading: "Last/lossning",
  break: "Rast",
  idle: "Ledig",
};
