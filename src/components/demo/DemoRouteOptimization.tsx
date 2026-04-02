"use client";

import { useState } from "react";
import { Zap, Check, Route, Clock, TrendingDown } from "lucide-react";

export default function DemoRouteOptimization() {
  const [state, setState] = useState<"idle" | "running" | "done">("idle");
  const [progress, setProgress] = useState(0);

  const runOptimization = () => {
    setState("running");
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setState("done");
          return 100;
        }
        return p + 4;
      });
    }, 80);
  };

  const reset = () => {
    setState("idle");
    setProgress(0);
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col">
      <h3 className="text-sm font-medium mb-4">Ruttoptimering</h3>

      {state === "idle" && (
        <>
          <p className="text-xs text-gray-500 mb-4 leading-relaxed">
            Kör AI-optimering på alla planerade och aktiva rutter för att
            minimera körsträcka och maximera fyllnadsgrad.
          </p>
          <div className="space-y-2 mb-5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-500">Rutter att optimera</span>
              <span className="font-medium">55</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-500">Fordon tillgängliga</span>
              <span className="font-medium">62</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-500">Stopp att fördela</span>
              <span className="font-medium">89</span>
            </div>
          </div>
          <button
            onClick={runOptimization}
            className="mt-auto flex items-center justify-center gap-2 bg-black text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            <Zap size={16} />
            Optimera rutter
          </button>
        </>
      )}

      {state === "running" && (
        <div className="flex-1 flex flex-col items-center justify-center py-6">
          <div className="w-12 h-12 rounded-full border-2 border-gray-200 border-t-black animate-spin mb-4" />
          <p className="text-sm font-medium mb-1">Optimerar...</p>
          <p className="text-xs text-gray-500 mb-4">
            Analyserar {55} rutter med AI
          </p>
          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-black rounded-full transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-xs text-gray-500 mt-2">{progress}%</span>
        </div>
      )}

      {state === "done" && (
        <div className="flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
              <Check size={16} className="text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium">Optimering klar</p>
              <p className="text-xs text-gray-500">55 rutter optimerade</p>
            </div>
          </div>

          <div className="space-y-3 mb-5">
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
              <Route size={16} className="text-green-600 shrink-0" />
              <div>
                <p className="text-sm font-medium text-green-800">
                  −12% körsträcka
                </p>
                <p className="text-xs text-green-600">
                  347 km sparade totalt
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
              <Clock size={16} className="text-blue-600 shrink-0" />
              <div>
                <p className="text-sm font-medium text-blue-800">
                  45 min sparad tid
                </p>
                <p className="text-xs text-blue-600">
                  Per fordon i genomsnitt
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg">
              <TrendingDown size={16} className="text-amber-600 shrink-0" />
              <div>
                <p className="text-sm font-medium text-amber-800">
                  +4% fyllnadsgrad
                </p>
                <p className="text-xs text-amber-600">
                  Från 88% till 92%
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={reset}
            className="mt-auto flex items-center justify-center gap-2 border border-gray-200 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            Kör igen
          </button>
        </div>
      )}
    </div>
  );
}
