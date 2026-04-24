"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, ArrowRight, Database, Cpu, Truck, FileText, BarChart3, Zap } from "lucide-react";

const tmsystems = [
  { name: "Opter", color: "#2563eb" },
  { name: "AddSecure", color: "#7c3aed" },
  { name: "Hogia", color: "#059669" },
  { name: "Barkfors", color: "#dc2626" },
  { name: "Eget system", color: "#d97706" },
];

const outputFlows = [
  { icon: Truck, label: "Optimerade rutter", color: "#22c55e" },
  { icon: FileText, label: "Orderhantering", color: "#3b82f6" },
  { icon: BarChart3, label: "Rapporter & analys", color: "#8b5cf6" },
];

type Step = "idle" | "connecting" | "syncing" | "done";

export default function IntegrationFlowDemo() {
  const [step, setStep] = useState<Step>("idle");
  const [activeTMS, setActiveTMS] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const runDemo = () => {
    setStep("connecting");
    setTimeout(() => setStep("syncing"), 1200);
    setTimeout(() => setStep("done"), 2800);
  };

  const reset = () => {
    setStep("idle");
  };

  return (
    <div ref={ref} className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
      <div className="grid md:grid-cols-5 gap-0">
        {/* Flow visualization */}
        <div className="md:col-span-3 p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-medium">Integrationsflöde</h3>
            <span className="text-xs text-gray-400">
              {step === "done" ? "Synkroniserat" : "Välj TMS nedan"}
            </span>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8">
            {/* Three column flow: TMS → NOGO → Output */}
            <div className="flex items-center justify-between gap-4 md:gap-6">
              {/* TMS Systems (left) */}
              <div className="flex flex-col gap-2 shrink-0">
                {tmsystems.map((tms, i) => (
                  <motion.button
                    key={tms.name}
                    onClick={() => step === "idle" && setActiveTMS(i)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-xs font-medium transition-all ${
                      activeTMS === i
                        ? "border-gray-800 bg-gray-50 shadow-sm"
                        : "border-gray-200 text-gray-400"
                    }`}
                  >
                    <Database size={14} style={{ color: activeTMS === i ? tms.color : "#d1d5db" }} aria-hidden="true" />
                    <span className="hidden sm:inline">{tms.name}</span>
                  </motion.button>
                ))}
              </div>

              {/* Arrows left */}
              <div className="flex flex-col items-center gap-1">
                {step !== "idle" ? (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5 }}
                    className="origin-left"
                  >
                    <div className="flex items-center gap-1">
                      <div className="w-8 md:w-12 h-0.5 bg-green-500" />
                      <ArrowRight size={12} className="text-green-500" aria-hidden="true" />
                    </div>
                  </motion.div>
                ) : (
                  <div className="flex items-center gap-1">
                    <div className="w-8 md:w-12 h-0.5 bg-gray-200" />
                    <ArrowRight size={12} className="text-gray-300" aria-hidden="true" />
                  </div>
                )}
              </div>

              {/* NOGO Engine (center) */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.4 }}
                className={`shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-2xl flex flex-col items-center justify-center transition-colors duration-500 ${
                  step === "connecting"
                    ? "bg-amber-50 border-2 border-amber-300"
                    : step === "syncing"
                    ? "bg-blue-50 border-2 border-blue-300 animate-pulse"
                    : step === "done"
                    ? "bg-green-50 border-2 border-green-300"
                    : "bg-gray-100 border-2 border-gray-200"
                }`}
              >
                {step === "done" ? (
                  <Check size={24} className="text-green-600" aria-hidden="true" />
                ) : (
                  <Cpu size={24} className={step === "syncing" ? "text-blue-600" : "text-gray-500"} aria-hidden="true" />
                )}
                <span className="text-[10px] font-semibold mt-1 text-gray-600">NOGO</span>
              </motion.div>

              {/* Arrows right */}
              <div className="flex flex-col items-center gap-1">
                {step === "done" ? (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5 }}
                    className="origin-left"
                  >
                    <div className="flex items-center gap-1">
                      <div className="w-8 md:w-12 h-0.5 bg-green-500" />
                      <ArrowRight size={12} className="text-green-500" aria-hidden="true" />
                    </div>
                  </motion.div>
                ) : (
                  <div className="flex items-center gap-1">
                    <div className="w-8 md:w-12 h-0.5 bg-gray-200" />
                    <ArrowRight size={12} className="text-gray-300" aria-hidden="true" />
                  </div>
                )}
              </div>

              {/* Output flows (right) */}
              <div className="flex flex-col gap-2 shrink-0">
                {outputFlows.map((flow, i) => (
                  <motion.div
                    key={flow.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: step === "done" ? 1 : 0.4, x: 0 } : {}}
                    transition={{ delay: step === "done" ? i * 0.15 : 0.5 + i * 0.1, duration: 0.4 }}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-xs font-medium transition-all ${
                      step === "done" ? "border-green-200 bg-green-50" : "border-gray-200 text-gray-400"
                    }`}
                  >
                    <flow.icon size={14} style={{ color: step === "done" ? flow.color : "#d1d5db" }} />
                    <span className="hidden sm:inline">{flow.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Status bar */}
            <div className="mt-6 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <div className={`w-2 h-2 rounded-full ${
                  step === "done" ? "bg-green-500" : step === "idle" ? "bg-gray-300" : "bg-amber-500 animate-pulse"
                }`} />
                {step === "idle" && "Väntar på anslutning"}
                {step === "connecting" && `Ansluter till ${tmsystems[activeTMS].name}...`}
                {step === "syncing" && "Synkroniserar ordrar och fordonsdata..."}
                {step === "done" && `${tmsystems[activeTMS].name} ansluten — 247 ordrar synkade`}
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="md:col-span-2 p-6 md:p-8 md:border-l border-t md:border-t-0 border-gray-200 flex flex-col">
          {step === "idle" && (
            <>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                Vår automation ansluter till ert befintliga TMS — via API,
                databasanslutning, filimport eller skärmautomation. Även om
                leverantören inte delar sitt API hittar vi en väg in.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Valt TMS</span>
                  <span className="font-medium">{tmsystems[activeTMS].name}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Implementation</span>
                  <span className="font-medium">2–4 veckor</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Systembyte krävs</span>
                  <span className="font-medium">Nej</span>
                </div>
              </div>
              <button
                onClick={runDemo}
                className="mt-auto flex items-center justify-center gap-2 bg-black text-white px-5 py-3 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                <Zap size={16} aria-hidden="true" />
                Simulera anslutning
              </button>
            </>
          )}

          {(step === "connecting" || step === "syncing") && (
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="w-14 h-14 rounded-full border-2 border-gray-200 border-t-black animate-spin mb-5" />
              <p className="text-sm font-medium mb-1">
                {step === "connecting" ? "Ansluter..." : "Synkroniserar..."}
              </p>
              <p className="text-xs text-gray-500">
                {step === "connecting"
                  ? `Etablerar anslutning till ${tmsystems[activeTMS].name}`
                  : "Läser ordrar, fordon och kunddata"}
              </p>
            </div>
          )}

          {step === "done" && (
            <>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <Check size={16} className="text-green-600" aria-hidden="true" />
                </div>
                <p className="text-sm font-medium">Integration klar</p>
              </div>
              <div className="space-y-3 mb-6">
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="text-sm font-medium text-green-800">247 ordrar synkade</p>
                  <p className="text-xs text-green-600">Från {tmsystems[activeTMS].name}</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm font-medium text-blue-800">38 fordon anslutna</p>
                  <p className="text-xs text-blue-600">Realtidsposition och status</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="text-sm font-medium text-purple-800">0 manuella steg</p>
                  <p className="text-xs text-purple-600">Helt automatiserat flöde</p>
                </div>
              </div>
              <button
                onClick={reset}
                className="mt-auto flex items-center justify-center gap-2 border border-gray-200 px-5 py-3 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                Testa igen
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
