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
  { id: "ORD-3001", customer: "Holmen Skog AB", pickup: "Norrköping", delivery: "Stockholm", weight: "24 ton", status: "Pågår", vehicleId: "v1" },
  { id: "ORD-3002", customer: "Arla Foods", pickup: "Linköping", delivery: "Örebro", weight: "18 ton", status: "Pågår", vehicleId: "v2" },
  { id: "ORD-3003", customer: "SSAB", pickup: "Oxelösund", delivery: "Norrköping", weight: "32 ton", status: "Planerad", vehicleId: "v3" },
  { id: "ORD-3004", customer: "Scan AB", pickup: "Linköping", delivery: "Jönköping", weight: "12 ton", status: "Pågår", vehicleId: "v4" },
  { id: "ORD-3005", customer: "PostNord", pickup: "Stockholm", delivery: "Västerås", weight: "8 ton", status: "Pågår", vehicleId: "v5" },
  { id: "ORD-3006", customer: "ICA Gruppen", pickup: "Norrköping", delivery: "Linköping", weight: "15 ton", status: "Levererad", vehicleId: "v1" },
  { id: "ORD-3007", customer: "Volvo Logistics", pickup: "Göteborg", delivery: "Norrköping", weight: "28 ton", status: "Planerad", vehicleId: null },
  { id: "ORD-3008", customer: "Elektroskandia", pickup: "Nyköping", delivery: "Norrköping", weight: "6 ton", status: "Pågår", vehicleId: "v8" },
  { id: "ORD-3009", customer: "Dagab", pickup: "Stockholm", delivery: "Linköping", weight: "20 ton", status: "Planerad", vehicleId: "v7" },
  { id: "ORD-3010", customer: "Lantmännen", pickup: "Örebro", delivery: "Norrköping", weight: "22 ton", status: "Levererad", vehicleId: "v2" },
  { id: "ORD-3011", customer: "Bring Express", pickup: "Norrköping", delivery: "Jönköping", weight: "4 ton", status: "Levererad", vehicleId: "v4" },
  { id: "ORD-3012", customer: "Schenker AB", pickup: "Katrineholm", delivery: "Stockholm", weight: "16 ton", status: "Planerad", vehicleId: null },
  { id: "ORD-3013", customer: "Martin & Servera", pickup: "Norrköping", delivery: "Nyköping", weight: "10 ton", status: "Pågår", vehicleId: "v7" },
  { id: "ORD-3014", customer: "Svensk Cater", pickup: "Linköping", delivery: "Motala", weight: "9 ton", status: "Levererad", vehicleId: "v8" },
  { id: "ORD-3015", customer: "AkzoNobel", pickup: "Norrköping", delivery: "Västerås", weight: "14 ton", status: "Planerad", vehicleId: "v5" },
  { id: "ORD-3016", customer: "Siemens Energy", pickup: "Finspång", delivery: "Stockholm", weight: "30 ton", status: "Planerad", vehicleId: null },
  { id: "ORD-3017", customer: "Coop Logistik", pickup: "Örebro", delivery: "Linköping", weight: "11 ton", status: "Levererad", vehicleId: "v2" },
  { id: "ORD-3018", customer: "Saab AB", pickup: "Linköping", delivery: "Stockholm", weight: "5 ton", status: "Pågår", vehicleId: "v1" },
  { id: "ORD-3019", customer: "BillerudKorsnäs", pickup: "Norrköping", delivery: "Göteborg", weight: "26 ton", status: "Planerad", vehicleId: null },
  { id: "ORD-3020", customer: "Foodora Market", pickup: "Stockholm", delivery: "Norrköping", weight: "3 ton", status: "Levererad", vehicleId: "v8" },
];

// ── Routes (coordinate paths for active vehicles) ─────────

export const routes: RouteData[] = [
  {
    vehicleId: "v1",
    color: "#3b82f6",
    coordinates: [[16.19, 58.59], [16.4, 58.7], [16.8, 58.9], [17.3, 59.1], [18.07, 59.33]],
  },
  {
    vehicleId: "v2",
    color: "#10b981",
    coordinates: [[15.62, 58.41], [15.4, 58.55], [15.3, 58.7], [15.2, 58.95], [15.21, 59.27]],
  },
  {
    vehicleId: "v4",
    color: "#f59e0b",
    coordinates: [[15.62, 58.41], [15.3, 58.2], [14.8, 58.0], [14.16, 57.78]],
  },
  {
    vehicleId: "v5",
    color: "#8b5cf6",
    coordinates: [[18.07, 59.33], [17.5, 59.4], [17.0, 59.5], [16.55, 59.61]],
  },
  {
    vehicleId: "v7",
    color: "#06b6d4",
    coordinates: [[16.19, 58.59], [16.4, 58.65], [16.8, 58.7], [17.01, 58.75]],
  },
  {
    vehicleId: "v8",
    color: "#ec4899",
    coordinates: [[17.01, 58.75], [16.6, 58.67], [16.19, 58.59], [16.0, 58.8], [15.8, 59.0]],
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
