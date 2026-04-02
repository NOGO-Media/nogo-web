"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Zap, Check, User, Truck, Package, ArrowRight } from "lucide-react";

const drivers = [
  { id: "F1", name: "Erik S.", license: "CE", adr: true },
  { id: "F2", name: "Anna K.", license: "CE", adr: false },
  { id: "F3", name: "Johan L.", license: "C", adr: true },
  { id: "F4", name: "Maria B.", license: "CE", adr: false },
];

const vehicles = [
  { id: "V1", type: "Dragbil", capacity: "24 ton", adr: true },
  { id: "V2", type: "Lastbil", capacity: "18 ton", adr: false },
  { id: "V3", type: "Dragbil", capacity: "24 ton", adr: true },
  { id: "V4", type: "Lastbil", capacity: "12 ton", adr: false },
];

const orders = [
  { id: "O1", from: "Norrköping", to: "Stockholm", weight: "14 ton", adr: false },
  { id: "O2", from: "Göteborg", to: "Malmö", weight: "8 ton", adr: true },
  { id: "O3", from: "Linköping", to: "Jönköping", weight: "6 ton", adr: false },
  { id: "O4", from: "Uppsala", to: "Gävle", weight: "20 ton", adr: false },
];

type Assignment = { driver: string; vehicle: string; order: string };

const assignments: Assignment[] = [
  { driver: "F1", vehicle: "V1", order: "O4" },
  { driver: "F2", vehicle: "V2", order: "O1" },
  { driver: "F3", vehicle: "V3", order: "O2" },
  { driver: "F4", vehicle: "V4", order: "O3" },
];

type State = "idle" | "matching" | "done";

export default function DispatchMatchingDemo() {
  const [state, setState] = useState<State>("idle");
  const [matchStep, setMatchStep] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const runMatching = () => {
    setState("matching");
    setMatchStep(0);
    let step = 0;
    const interval = setInterval(() => {
      step += 1;
      setMatchStep(step);
      if (step >= assignments.length) {
        clearInterval(interval);
        setTimeout(() => setState("done"), 600);
      }
    }, 700);
  };

  const reset = () => {
    setState("idle");
    setMatchStep(0);
  };

  return (
    <div ref={ref} className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
      <div className="grid md:grid-cols-5 gap-0">
        {/* Matching visualization */}
        <div className="md:col-span-3 p-6 md:p-8">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-sm font-medium">Automatisk tilldelning</h3>
            <span className="text-xs text-gray-400">
              {state === "done"
                ? `${assignments.length} tilldelningar klara`
                : `${orders.length} ordrar att fördela`}
            </span>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-5 md:p-6">
            {/* Three columns: Drivers | Vehicles | Orders */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 mb-4">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-gray-400 font-medium mb-2">
                  Förare
                </p>
                <div className="space-y-1.5">
                  {drivers.map((d, i) => {
                    const matched =
                      state !== "idle" &&
                      assignments.findIndex((a) => a.driver === d.id) < matchStep;
                    return (
                      <motion.div
                        key={d.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: i * 0.08, duration: 0.3 }}
                        className={`flex items-center gap-1.5 px-2.5 py-2 rounded-lg border text-xs transition-all duration-300 ${
                          matched
                            ? "border-green-300 bg-green-50"
                            : "border-gray-200"
                        }`}
                      >
                        <User size={12} className={matched ? "text-green-600" : "text-gray-400"} />
                        <span className="font-medium truncate">{d.name}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-wider text-gray-400 font-medium mb-2">
                  Fordon
                </p>
                <div className="space-y-1.5">
                  {vehicles.map((v, i) => {
                    const matched =
                      state !== "idle" &&
                      assignments.findIndex((a) => a.vehicle === v.id) < matchStep;
                    return (
                      <motion.div
                        key={v.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3 + i * 0.08, duration: 0.3 }}
                        className={`flex items-center gap-1.5 px-2.5 py-2 rounded-lg border text-xs transition-all duration-300 ${
                          matched
                            ? "border-green-300 bg-green-50"
                            : "border-gray-200"
                        }`}
                      >
                        <Truck size={12} className={matched ? "text-green-600" : "text-gray-400"} />
                        <span className="font-medium truncate">{v.type}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-wider text-gray-400 font-medium mb-2">
                  Ordrar
                </p>
                <div className="space-y-1.5">
                  {orders.map((o, i) => {
                    const matched =
                      state !== "idle" &&
                      assignments.findIndex((a) => a.order === o.id) < matchStep;
                    return (
                      <motion.div
                        key={o.id}
                        initial={{ opacity: 0, x: 10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6 + i * 0.08, duration: 0.3 }}
                        className={`flex items-center gap-1.5 px-2.5 py-2 rounded-lg border text-xs transition-all duration-300 ${
                          matched
                            ? "border-green-300 bg-green-50"
                            : "border-gray-200"
                        }`}
                      >
                        <Package size={12} className={matched ? "text-green-600" : "text-gray-400"} />
                        <span className="font-medium truncate">{o.from}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Assignment results */}
            <AnimatePresence>
              {state !== "idle" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-gray-100 pt-3 mt-2"
                >
                  <p className="text-[10px] uppercase tracking-wider text-gray-400 font-medium mb-2">
                    Tilldelningar
                  </p>
                  <div className="space-y-1.5">
                    {assignments.slice(0, matchStep).map((a, i) => {
                      const driver = drivers.find((d) => d.id === a.driver)!;
                      const vehicle = vehicles.find((v) => v.id === a.vehicle)!;
                      const order = orders.find((o) => o.id === a.order)!;
                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex items-center gap-2 text-xs bg-green-50 rounded-lg px-3 py-2"
                        >
                          <span className="font-medium text-green-800">{driver.name}</span>
                          <ArrowRight size={10} className="text-green-400" />
                          <span className="text-green-700">{vehicle.type}</span>
                          <ArrowRight size={10} className="text-green-400" />
                          <span className="text-green-700 truncate">
                            {order.from} → {order.to}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Controls */}
        <div className="md:col-span-2 p-6 md:p-8 md:border-l border-t md:border-t-0 border-gray-200 flex flex-col">
          {state === "idle" && (
            <>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                Automationen matchar förare, fordon och ordrar baserat på
                körkort, ADR-behörighet, kapacitet, position och tidsfönster
                — på sekunder istället för timmar.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Förare tillgängliga</span>
                  <span className="font-medium">{drivers.length}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Fordon tillgängliga</span>
                  <span className="font-medium">{vehicles.length}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Ordrar att fördela</span>
                  <span className="font-medium">{orders.length}</span>
                </div>
              </div>
              <button
                onClick={runMatching}
                className="mt-auto flex items-center justify-center gap-2 bg-black text-white px-5 py-3 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                <Zap size={16} />
                Kör automatisk tilldelning
              </button>
            </>
          )}

          {state === "matching" && (
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="w-14 h-14 rounded-full border-2 border-gray-200 border-t-black animate-spin mb-5" />
              <p className="text-sm font-medium mb-1">Tilldelar...</p>
              <p className="text-xs text-gray-500">
                Matchar {matchStep}/{assignments.length} tilldelningar
              </p>
            </div>
          )}

          {state === "done" && (
            <>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <Check size={16} className="text-green-600" />
                </div>
                <p className="text-sm font-medium">Tilldelning klar</p>
              </div>
              <div className="space-y-3 mb-6">
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="text-sm font-medium text-green-800">4 av 4 ordrar tilldelade</p>
                  <p className="text-xs text-green-600">100% automatiskt matchade</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm font-medium text-blue-800">~3 sekunder</p>
                  <p className="text-xs text-blue-600">Istället för 45 minuter manuellt</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="text-sm font-medium text-purple-800">ADR-krav uppfyllda</p>
                  <p className="text-xs text-purple-600">Alla regler automatiskt verifierade</p>
                </div>
              </div>
              <button
                onClick={reset}
                className="mt-auto flex items-center justify-center gap-2 border border-gray-200 px-5 py-3 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                Visa före-läge
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
