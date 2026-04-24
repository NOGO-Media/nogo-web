"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Check, Route, Clock, TrendingUp } from "lucide-react";

/* ── Stop locations (simulated Swedish city grid) ── */
const depot = { x: 300, y: 30 };

const stops = [
  { x: 80, y: 100 },
  { x: 180, y: 80 },
  { x: 450, y: 90 },
  { x: 520, y: 140 },
  { x: 100, y: 200 },
  { x: 250, y: 180 },
  { x: 400, y: 200 },
  { x: 550, y: 230 },
  { x: 70, y: 300 },
  { x: 200, y: 310 },
  { x: 350, y: 280 },
  { x: 480, y: 320 },
  { x: 140, y: 380 },
  { x: 300, y: 370 },
  { x: 440, y: 390 },
  { x: 560, y: 370 },
];

/* ── Unoptimized routes (3 vehicles, inefficient order) ── */
const unoptimizedRoutes = [
  {
    color: "#ef4444",
    points: [depot, stops[0], stops[5], stops[8], stops[13], stops[3], depot],
  },
  {
    color: "#f59e0b",
    points: [depot, stops[7], stops[2], stops[11], stops[4], stops[14], depot],
  },
  {
    color: "#6366f1",
    points: [depot, stops[9], stops[1], stops[15], stops[6], stops[10], stops[12], depot],
  },
];

/* ── Optimized routes (geographically clustered) ── */
const optimizedRoutes = [
  {
    color: "#22c55e",
    points: [depot, stops[1], stops[0], stops[4], stops[8], stops[12], stops[9], depot],
  },
  {
    color: "#3b82f6",
    points: [depot, stops[5], stops[10], stops[13], stops[6], stops[2], depot],
  },
  {
    color: "#8b5cf6",
    points: [depot, stops[3], stops[7], stops[15], stops[14], stops[11], depot],
  },
];

function pathFromPoints(points: { x: number; y: number }[]) {
  if (points.length < 2) return "";
  return points.reduce((d, p, i) => (i === 0 ? `M${p.x},${p.y}` : `${d} L${p.x},${p.y}`), "");
}

function totalDistance(routes: { points: { x: number; y: number }[] }[]) {
  let total = 0;
  for (const route of routes) {
    for (let i = 1; i < route.points.length; i++) {
      const dx = route.points[i].x - route.points[i - 1].x;
      const dy = route.points[i].y - route.points[i - 1].y;
      total += Math.sqrt(dx * dx + dy * dy);
    }
  }
  return total;
}

const unoptDist = totalDistance(unoptimizedRoutes);
const optDist = totalDistance(optimizedRoutes);
const savingsPct = Math.round(((unoptDist - optDist) / unoptDist) * 100);

export default function RouteOptimizationDemo() {
  const [state, setState] = useState<"before" | "running" | "after">("before");
  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (state !== "running") return;
    let current = 0;
    const interval = setInterval(() => {
      current += 3;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setProgress(100);
        setState("after");
      } else {
        setProgress(current);
      }
    }, 60);
    return () => clearInterval(interval);
  }, [state]);

  const startOptimization = () => {
    setProgress(0);
    setState("running");
  };

  const routes = state === "after" ? optimizedRoutes : unoptimizedRoutes;

  return (
    <div ref={ref} className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
      <div className="grid md:grid-cols-5 gap-0">
        {/* SVG Map */}
        <div className="md:col-span-3 p-6 md:p-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium">
              {state === "after" ? "Optimerade rutter" : "Nuvarande rutter"}
            </h3>
            <span className="text-xs text-gray-400">
              {state === "after" ? "3 fordon — optimerade" : "3 fordon — manuell planering"}
            </span>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-4 relative">
            <svg viewBox="0 0 620 420" className="w-full h-auto" aria-hidden="true">
              {/* Grid lines */}
              {[0, 1, 2, 3, 4].map((i) => (
                <line
                  key={`h${i}`}
                  x1={0}
                  y1={i * 105}
                  x2={620}
                  y2={i * 105}
                  stroke="#f3f4f6"
                  strokeWidth={1}
                />
              ))}
              {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                <line
                  key={`v${i}`}
                  x1={i * 103}
                  y1={0}
                  x2={i * 103}
                  y2={420}
                  stroke="#f3f4f6"
                  strokeWidth={1}
                />
              ))}

              {/* Routes */}
              {state !== "running" &&
                routes.map((route, i) => (
                  <motion.path
                    key={`${state}-${i}`}
                    d={pathFromPoints(route.points)}
                    fill="none"
                    stroke={route.color}
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity={0.7}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={
                      isInView || state === "after"
                        ? { pathLength: 1, opacity: 0.7 }
                        : { pathLength: 0, opacity: 0 }
                    }
                    transition={{
                      pathLength: { delay: i * 0.3, duration: 0.8, ease: "easeInOut" },
                      opacity: { delay: i * 0.3, duration: 0.2 },
                    }}
                  />
                ))}

              {/* Running state: pulsing lines */}
              {state === "running" &&
                unoptimizedRoutes.map((route, i) => (
                  <path
                    key={`running-${i}`}
                    d={pathFromPoints(route.points)}
                    fill="none"
                    stroke="#d1d5db"
                    strokeWidth={2}
                    strokeDasharray="6 4"
                    opacity={0.5}
                  />
                ))}

              {/* Stops */}
              {stops.map((stop, i) => (
                <motion.g
                  key={`stop-${i}`}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ delay: 0.5 + i * 0.04, duration: 0.3 }}
                >
                  <circle cx={stop.x} cy={stop.y} r={6} fill="white" stroke="#d1d5db" strokeWidth={1.5} />
                  <circle cx={stop.x} cy={stop.y} r={2.5} fill="#6b7280" />
                </motion.g>
              ))}

              {/* Depot */}
              <motion.g
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                <rect x={depot.x - 12} y={depot.y - 12} width={24} height={24} rx={6} fill="#111" />
                <text x={depot.x} y={depot.y + 1} textAnchor="middle" dominantBaseline="middle" fill="white" fontSize={10} fontWeight={600}>
                  D
                </text>
              </motion.g>
            </svg>
          </div>
        </div>

        {/* Controls & Metrics */}
        <div className="md:col-span-2 p-6 md:p-8 md:border-l border-t md:border-t-0 border-gray-200 flex flex-col">
          {state === "before" && (
            <>
              <div className="mb-6">
                <p className="text-sm text-gray-500 leading-relaxed">
                  Manuellt planerade rutter korsar ofta varandra och missar
                  möjligheter att gruppera stopp geografiskt. Tryck på knappen
                  för att se skillnaden.
                </p>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Stopp att fördela</span>
                  <span className="font-medium">{stops.length}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Fordon</span>
                  <span className="font-medium">3</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Nuvarande körsträcka</span>
                  <span className="font-medium">{Math.round(unoptDist)} km</span>
                </div>
              </div>
              <button
                onClick={startOptimization}
                className="mt-auto flex items-center justify-center gap-2 bg-black text-white px-5 py-3 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                <Zap size={16} aria-hidden="true" />
                Optimera rutter
              </button>
            </>
          )}

          {state === "running" && (
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="w-14 h-14 rounded-full border-2 border-gray-200 border-t-black animate-spin mb-5" />
              <p className="text-sm font-medium mb-1">Optimerar {stops.length} stopp...</p>
              <p className="text-xs text-gray-500 mb-5">
                Analyserar tidsfönster, kapacitet och geografi
              </p>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-black rounded-full transition-all duration-75"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-xs text-gray-400 mt-2">{progress}%</span>
            </div>
          )}

          {state === "after" && (
            <>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <Check size={16} className="text-green-600" aria-hidden="true" />
                </div>
                <p className="text-sm font-medium">Optimering klar</p>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <Route size={16} className="text-green-600 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium text-green-800">−{savingsPct}% körsträcka</p>
                    <p className="text-xs text-green-600">{Math.round(unoptDist - optDist)} km sparade</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <Clock size={16} className="text-blue-600 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium text-blue-800">52 min sparad tid</p>
                    <p className="text-xs text-blue-600">Per fordon i genomsnitt</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                  <TrendingUp size={16} className="text-purple-600 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium text-purple-800">+18% leveranser/dag</p>
                    <p className="text-xs text-purple-600">Fler stopp med samma resurser</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setState("before")}
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
