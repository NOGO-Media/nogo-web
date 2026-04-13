// Deterministic mock-data generator for the NOGO Dispatch demo.
// Produces a rich dataset: 7 trafikdagar, 55 cars, 60 flak, 60 släp,
// 60-100 ordrar/day across ~10-15 pass, yard units, orphans, shipment blocks.
// All data is fictional and uses generic Nordic logistics names.

// ── Types ─────────────────────────────────────────────────

export type DayStatus = "unplanned" | "draft" | "approved" | "stale" | "locked";

export type PriorityClass = "Normal" | "DHL" | "Husqvarna" | "Express";

export type TrailerType = "Flak" | "Kyl" | "Skåp" | "Container" | "Tipp";
export type SlapType = "Släp" | "Kylsläp" | "Tippsläp" | "Container";

export interface Day {
  id: string;           // YYYY-MM-DD
  date: Date;
  label: string;        // "Tis 14 apr"
  status: DayStatus;
  orderCount: number;
  shiftCount: number;
  approvedBy?: string;
  approvedAt?: string;
}

export interface Car {
  id: string;
  reg: string;          // "ABC 001"
  driver: string;
  status: "available" | "on_shift" | "maintenance";
  shiftId: string | null;
  position?: [number, number];
}

export interface Flak {
  id: string;
  reg: string;
  type: TrailerType;
  capacityFlm: number;  // 7.2
  status: "available" | "on_shift" | "yard" | "maintenance";
  shiftId: string | null;
  yardDirection?: "in" | "out";   // in = Gård (lastat igår), out = Term
}

export interface Slap {
  id: string;
  reg: string;
  type: SlapType;
  capacityFlm: number;  // 12.0
  status: "available" | "on_shift" | "yard" | "maintenance";
  shiftId: string | null;
  yardDirection?: "in" | "out";
}

export interface YardUnit {
  id: string;
  unitKind: "flak" | "slap";
  unitId: string;
  reg: string;
  destinationArea: string;
  fillPct: number;
  volumeFlm: number;
  loadedBy: string;
  loadedAt: string;             // "igår 17:42"
  state: "waiting" | "coupled" | "delivered";
  orphan: boolean;
}

export interface Order {
  id: string;           // "ORD-10001"
  dayId: string;
  shiftId: string | null;
  shipmentBlockId: string | null;
  customer: string;
  priority: PriorityClass;
  pickup: string;       // area code
  delivery: string;     // area code
  pickupAddress: string;
  deliveryAddress: string;
  weightKg: number;
  pallets: number;
  flm: number;
  trailerType: TrailerType;
  slapType: SlapType;
  pickupDate: string;   // YYYY-MM-DD
  deliveryDate: string;
  specialRules: string[];
  shipmentNo: string;
  duplicate: boolean;
  cancelled: boolean;
  stopType: "pickup" | "delivery" | "both";
}

export interface Stop {
  id: string;
  orderId: string;
  type: "pickup" | "delivery";
  seq: number;          // order within shift
  area: string;
  address: string;
  flm: number;
  weightKg: number;
  unitId: string;       // flak or slap id
}

export interface Shift {
  id: string;
  dayId: string;
  shiftNo: string;      // "550", "STOCKHOLM"
  area: string;
  carId: string;
  flakId: string | null;
  slapId: string | null;
  stopIds: string[];
  workMinutes: number;  // total working time
  maxWorkMinutes: number;
  distanceKm: number;
  flakFillPct: number;
  slapFillPct: number;
  flakOrphan: boolean;
  slapOrphan: boolean;
  hookGoIn: boolean;    // picks up yard unit from gård
  hookGoOut: boolean;   // leaves loaded unit on gård for tomorrow
}

export interface RunHistoryEntry {
  id: string;
  day: string;
  status: "success" | "failed" | "warning";
  startedAt: string;
  durationSec: number;
  distanceKm: number;
  shiftCount: number;
  planOrderCount: number;
}

export interface DemoData {
  days: Day[];
  cars: Car[];
  flak: Flak[];
  slap: Slap[];
  orders: Order[];
  stops: Stop[];
  shifts: Shift[];
  yardUnits: YardUnit[];
  history: RunHistoryEntry[];
  areas: string[];
  customers: string[];
}

// ── Constants ─────────────────────────────────────────────

export const AREAS = [
  "STOCKHOLM", "GÖTEBORG", "MALMÖ", "UPPSALA", "LINKÖPING",
  "KARLSTAD", "ÖREBRO", "NORRKÖPING", "VÄSTERÅS", "ESKILSTUNA",
  "JÖNKÖPING", "HALMSTAD", "BORÅS", "GÄVLE", "SUNDSVALL",
];

export const CUSTOMERS = [
  "Nordic Retail AB",
  "Skandia Logistik",
  "Möbelhuset Norden",
  "TechSupply AB",
  "FreshFood Distribution",
  "Bygg-och-Hem",
  "Nordics Logistik",
  "Skandia Frakt",
  "Demo Åkeri AB",
  "NorrElektronik",
  "Kylkedjan AB",
  "Pappers & Kartong Nord",
];

const PRIORITIES: PriorityClass[] = ["Normal", "Normal", "Normal", "Normal", "DHL", "Husqvarna", "Express"];
const TRAILER_TYPES: TrailerType[] = ["Flak", "Kyl", "Skåp", "Container", "Tipp"];
const SLAP_TYPES: SlapType[] = ["Släp", "Kylsläp", "Tippsläp", "Container"];

const FIRST_NAMES = [
  "Erik", "Maria", "Johan", "Anna", "Oscar", "Lisa", "Anders", "Emma",
  "Lars", "Karin", "Magnus", "Sara", "Henrik", "Ida", "Per", "Frida",
  "Fredrik", "Jenny", "Daniel", "Nina", "Mikael", "Sofia", "Tobias", "Ella",
  "Jonas", "Malin", "Patrik", "Linnea", "Rickard", "Ellen", "Simon", "Alice",
];
const LAST_NAMES = [
  "Lindström", "Karlsson", "Svensson", "Bergman", "Nilsson", "Johansson",
  "Pettersson", "Gustafsson", "Eriksson", "Andersson", "Larsson", "Olofsson",
];

const SPECIAL_RULES = [
  "Krav: kyltransport", "Krav: ADR", "Krav: sidolastning",
  "Fönsterleverans", "Kräver lift", "Endast dagtid 08-16",
  "Larma vid ankomst", "Kräver bakgavellift",
];

const ADDRESS_PREFIXES = [
  "Industrigatan", "Hamngatan", "Storgatan", "Verkstadsvägen",
  "Logistikvägen", "Fabriksgatan", "Handelsvägen", "Centrumgatan",
];

// ── Seeded RNG (mulberry32) ───────────────────────────────

function mulberry32(seed: number) {
  let s = seed >>> 0;
  return function () {
    s |= 0;
    s = (s + 0x6d2b79f5) | 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function pick<T>(rng: () => number, arr: readonly T[]): T {
  return arr[Math.floor(rng() * arr.length)];
}

function pickSome<T>(rng: () => number, arr: readonly T[], min: number, max: number): T[] {
  const n = min + Math.floor(rng() * (max - min + 1));
  const shuffled = [...arr].sort(() => rng() - 0.5);
  return shuffled.slice(0, n);
}

function randInt(rng: () => number, min: number, max: number): number {
  return min + Math.floor(rng() * (max - min + 1));
}

function randFloat(rng: () => number, min: number, max: number, decimals = 1): number {
  const v = min + rng() * (max - min);
  const p = Math.pow(10, decimals);
  return Math.round(v * p) / p;
}

// ── Helpers ───────────────────────────────────────────────

function formatRegNumber(prefix: string, n: number): string {
  return `${prefix} ${String(n).padStart(3, "0")}`;
}

function formatYmd(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function formatDayLabel(d: Date): string {
  const weekdays = ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"];
  const months = ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"];
  return `${weekdays[d.getDay()]} ${d.getDate()} ${months[d.getMonth()]}`;
}

// ── Main generator ────────────────────────────────────────

export function generateDemoData(seed = 1337, now = new Date("2026-04-14T09:30:00")): DemoData {
  const rng = mulberry32(seed);

  // ── Days (3 bakåt, idag, 3 framåt = 7 days) ─────────────
  const days: Day[] = [];
  for (let offset = -3; offset <= 3; offset++) {
    const d = new Date(now);
    d.setDate(d.getDate() + offset);
    const id = formatYmd(d);

    let status: DayStatus;
    if (offset < -1) status = "approved";
    else if (offset === -1) status = "approved";
    else if (offset === 0) status = "draft";
    else if (offset === 1) status = "draft";
    else if (offset === 2) status = "unplanned";
    else status = "unplanned";

    days.push({
      id,
      date: d,
      label: formatDayLabel(d),
      status,
      orderCount: 0,
      shiftCount: 0,
      approvedBy: status === "approved" ? "Hugo S." : undefined,
      approvedAt: status === "approved" ? `${id} 19:42` : undefined,
    });
  }

  // ── Cars: 55 ───────────────────────────────────────────
  const cars: Car[] = [];
  for (let i = 1; i <= 55; i++) {
    const first = pick(rng, FIRST_NAMES);
    const last = pick(rng, LAST_NAMES);
    cars.push({
      id: `car-${i}`,
      reg: formatRegNumber("ABC", i),
      driver: `${first} ${last}`,
      status: i <= 50 ? "on_shift" : i === 55 ? "maintenance" : "available",
      shiftId: null,
    });
  }

  // ── Flak: 60 ───────────────────────────────────────────
  const flak: Flak[] = [];
  for (let i = 1; i <= 60; i++) {
    flak.push({
      id: `flak-${i}`,
      reg: formatRegNumber("FLK", i),
      type: pick(rng, TRAILER_TYPES),
      capacityFlm: 7.2,
      status: i <= 50 ? "on_shift" : i <= 56 ? "yard" : i === 60 ? "maintenance" : "available",
      shiftId: null,
    });
  }

  // ── Släp: 60 ───────────────────────────────────────────
  const slap: Slap[] = [];
  for (let i = 1; i <= 60; i++) {
    slap.push({
      id: `slap-${i}`,
      reg: formatRegNumber("SLP", i),
      type: pick(rng, SLAP_TYPES),
      capacityFlm: 12.0,
      status: i <= 50 ? "on_shift" : i <= 56 ? "yard" : i === 60 ? "maintenance" : "available",
      shiftId: null,
    });
  }

  // ── Generate orders, shifts, stops per day ─────────────
  const orders: Order[] = [];
  const stops: Stop[] = [];
  const shifts: Shift[] = [];
  let orderCounter = 10000;
  let shiftCounter = 0;

  for (const day of days) {
    const isPlanned = day.status === "approved" || day.status === "draft";
    const orderCount = isPlanned ? randInt(rng, 75, 100) : randInt(rng, 60, 80);
    const shiftCount = isPlanned ? randInt(rng, 12, 15) : randInt(rng, 10, 13);
    day.orderCount = orderCount;
    day.shiftCount = shiftCount;

    // Shipment-block groups (some orders travel together)
    const blockGroups: string[][] = [];
    for (let b = 0; b < 3; b++) {
      const size = randInt(rng, 2, 4);
      const blockId = `BLK-${day.id}-${b + 1}`;
      const orderIdsInBlock: string[] = [];
      for (let i = 0; i < size; i++) {
        orderIdsInBlock.push(`ORD-${++orderCounter}`);
      }
      blockGroups.push([blockId, ...orderIdsInBlock]);
    }

    // Pre-create order ids
    const remaining = orderCount - blockGroups.reduce((s, g) => s + g.length - 1, 0);
    const allOrderIds: string[] = blockGroups.flatMap((g) => g.slice(1));
    for (let i = 0; i < remaining; i++) {
      allOrderIds.push(`ORD-${++orderCounter}`);
    }

    // Create shifts for this day
    const dayShifts: Shift[] = [];
    for (let s = 0; s < shiftCount; s++) {
      const area = AREAS[s % AREAS.length];
      const carIdx = (shiftCounter * 3 + s) % cars.length;
      const car = cars[carIdx];
      const hookGoIn = s % 5 === 0;
      const hookGoOut = s % 7 === 0;
      const flakReg = flak[(shiftCounter + s) % flak.length];
      const slapReg = slap[(shiftCounter + s + 2) % slap.length];

      const shift: Shift = {
        id: `shift-${day.id}-${s + 1}`,
        dayId: day.id,
        shiftNo: ((500 + s * 10) % 900 + 100).toString(),
        area,
        carId: car.id,
        flakId: isPlanned ? flakReg.id : null,
        slapId: isPlanned && s % 4 !== 0 ? slapReg.id : null,
        stopIds: [],
        workMinutes: randInt(rng, 420, 620),
        maxWorkMinutes: 600,
        distanceKm: randInt(rng, 120, 640),
        flakFillPct: randInt(rng, 60, 99),
        slapFillPct: randInt(rng, 55, 98),
        flakOrphan: hookGoIn && s % 3 === 0,
        slapOrphan: false,
        hookGoIn,
        hookGoOut,
      };
      dayShifts.push(shift);
      shifts.push(shift);
      shiftCounter++;
    }

    // Distribute orders into shifts. Leave ~5 unplanned for draft days
    const unplannedCount = day.status === "draft" ? randInt(rng, 4, 8) : 0;
    const plannedCount = allOrderIds.length - unplannedCount;

    let oi = 0;
    for (const orderId of allOrderIds) {
      const isInBlock = blockGroups.find((g) => g.includes(orderId));
      const blockId = isInBlock ? isInBlock[0] : null;

      let shiftId: string | null = null;
      if (oi < plannedCount && isPlanned) {
        const shiftIdx = oi % dayShifts.length;
        shiftId = dayShifts[shiftIdx].id;
      }
      oi++;

      const pickupArea = pick(rng, AREAS);
      let deliveryArea = pick(rng, AREAS);
      while (deliveryArea === pickupArea) deliveryArea = pick(rng, AREAS);

      const trailerType = pick(rng, TRAILER_TYPES);
      const slapType = pick(rng, SLAP_TYPES);
      const priority = pick(rng, PRIORITIES);
      const flm = randFloat(rng, 0.5, 4.5);
      const weight = Math.round(flm * 1100 + randInt(rng, -200, 600));
      const rules = rng() < 0.25 ? pickSome(rng, SPECIAL_RULES, 1, 2) : [];

      const order: Order = {
        id: orderId,
        dayId: day.id,
        shiftId,
        shipmentBlockId: blockId,
        customer: pick(rng, CUSTOMERS),
        priority,
        pickup: pickupArea,
        delivery: deliveryArea,
        pickupAddress: `${pick(rng, ADDRESS_PREFIXES)} ${randInt(rng, 1, 88)}`,
        deliveryAddress: `${pick(rng, ADDRESS_PREFIXES)} ${randInt(rng, 1, 88)}`,
        weightKg: Math.max(weight, 150),
        pallets: randInt(rng, 1, 12),
        flm,
        trailerType,
        slapType,
        pickupDate: day.id,
        deliveryDate: day.id,
        specialRules: rules,
        shipmentNo: `SHP-${randInt(rng, 100000, 999999)}`,
        duplicate: rng() < 0.02,
        cancelled: rng() < 0.01,
        stopType: rng() < 0.15 ? "both" : rng() < 0.5 ? "pickup" : "delivery",
      };
      orders.push(order);

      // Create stops for this order (if assigned)
      if (shiftId) {
        const shift = dayShifts.find((sh) => sh.id === shiftId)!;
        const unitId = rng() < 0.5 && shift.slapId ? shift.slapId : shift.flakId || shift.slapId!;
        const seq = shift.stopIds.length + 1;
        const stopType = order.stopType === "both" ? (rng() < 0.5 ? "pickup" : "delivery") : order.stopType;
        const stop: Stop = {
          id: `stop-${orderId}`,
          orderId,
          type: stopType,
          seq,
          area: stopType === "pickup" ? pickupArea : deliveryArea,
          address: stopType === "pickup" ? order.pickupAddress : order.deliveryAddress,
          flm,
          weightKg: order.weightKg,
          unitId,
        };
        stops.push(stop);
        shift.stopIds.push(stop.id);
      }
    }
  }

  // ── Yard units (some waiting, some coupled, some orphans) ──
  const yardUnits: YardUnit[] = [];
  const yardFlak = flak.filter((f) => f.status === "yard");
  const yardSlap = slap.filter((f) => f.status === "yard");

  yardFlak.forEach((f, i) => {
    const orphan = i === 0;                  // 1 orphan flak
    yardUnits.push({
      id: `yard-flak-${i}`,
      unitKind: "flak",
      unitId: f.id,
      reg: f.reg,
      destinationArea: pick(rng, AREAS),
      fillPct: randInt(rng, 70, 98),
      volumeFlm: randFloat(rng, 5.5, 7.0),
      loadedBy: `${pick(rng, FIRST_NAMES)} ${pick(rng, LAST_NAMES).charAt(0)}.`,
      loadedAt: `igår ${randInt(rng, 15, 19)}:${String(randInt(rng, 0, 59)).padStart(2, "0")}`,
      state: orphan ? "waiting" : i < 3 ? "waiting" : i < 5 ? "coupled" : "delivered",
      orphan,
    });
  });
  yardSlap.forEach((s, i) => {
    const orphan = i === 1;                  // 1 orphan släp
    yardUnits.push({
      id: `yard-slap-${i}`,
      unitKind: "slap",
      unitId: s.id,
      reg: s.reg,
      destinationArea: pick(rng, AREAS),
      fillPct: randInt(rng, 65, 96),
      volumeFlm: randFloat(rng, 8.5, 11.8),
      loadedBy: `${pick(rng, FIRST_NAMES)} ${pick(rng, LAST_NAMES).charAt(0)}.`,
      loadedAt: `igår ${randInt(rng, 15, 19)}:${String(randInt(rng, 0, 59)).padStart(2, "0")}`,
      state: orphan ? "waiting" : i < 3 ? "waiting" : i < 5 ? "coupled" : "delivered",
      orphan,
    });
  });

  // ── History (30 senaste körningar) ─────────────────────
  const history: RunHistoryEntry[] = [];
  for (let i = 0; i < 30; i++) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    history.push({
      id: `run-${i + 1}`,
      day: formatYmd(d),
      status: i === 2 ? "warning" : i === 7 ? "failed" : "success",
      startedAt: `${String(randInt(rng, 5, 8)).padStart(2, "0")}:${String(randInt(rng, 0, 59)).padStart(2, "0")}`,
      durationSec: randInt(rng, 96, 148),
      distanceKm: randInt(rng, 24000, 39000),
      shiftCount: randInt(rng, 10, 15),
      planOrderCount: randInt(rng, 220, 280),
    });
  }

  return {
    days,
    cars,
    flak,
    slap,
    orders,
    stops,
    shifts,
    yardUnits,
    history,
    areas: AREAS,
    customers: CUSTOMERS,
  };
}

// Lazy singleton so all components share the same deterministic dataset.
let _cache: DemoData | null = null;
export function getDemoData(): DemoData {
  if (!_cache) _cache = generateDemoData();
  return _cache;
}
