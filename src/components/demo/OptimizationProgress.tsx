"use client";

import { useEffect, useState } from "react";
import { Check, Loader2, X } from "lucide-react";

export const PIPELINE_STEPS = [
  { id: 1, label: "Läser in ordrar", seconds: 4 },
  { id: 2, label: "Förbereder resurser", seconds: 6 },
  { id: 3, label: "Grupperar leveranser", seconds: 7 },
  { id: 4, label: "Geografisk analys", seconds: 11 },
  { id: 5, label: "Ruttoptimering", seconds: 38 },
  { id: 6, label: "Resursfördelning", seconds: 8 },
  { id: 7, label: "Konsoliderar transporter", seconds: 9 },
  { id: 8, label: "Tillämpar regler", seconds: 4 },
  { id: 9, label: "Planvalidering", seconds: 6 },
  { id: 10, label: "Finjusterar plan", seconds: 24 },
];

const TOTAL_ANIMATION_MS = 8500;

interface Props {
  onComplete?: () => void;
  onClose?: () => void;
  autoStart?: boolean;
  title?: string;
}

export default function OptimizationProgress({
  onComplete,
  onClose,
  autoStart = true,
  title = "Skapar planeringsförslag",
}: Props) {
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(autoStart);
  const totalSec = PIPELINE_STEPS.reduce((s, x) => s + x.seconds, 0);

  useEffect(() => {
    if (!running) return;
    const start = performance.now();
    let raf = 0;
    const loop = (t: number) => {
      const dt = Math.min((t - start) / TOTAL_ANIMATION_MS, 1);
      setElapsed(dt * totalSec);
      if (dt < 1) {
        raf = requestAnimationFrame(loop);
      } else {
        setRunning(false);
        onComplete?.();
      }
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [running, totalSec, onComplete]);

  // Determine step status (no mutation during render — precompute offsets).
  const stepStates = PIPELINE_STEPS.reduce<
    { id: number; label: string; seconds: number; status: "pending" | "active" | "done"; start: number; end: number }[]
  >((acc, step) => {
    const start = acc.length === 0 ? 0 : acc[acc.length - 1].end;
    const end = start + step.seconds;
    const status: "pending" | "active" | "done" =
      elapsed >= end ? "done" : elapsed >= start ? "active" : "pending";
    acc.push({ ...step, status, start, end });
    return acc;
  }, []);

  const overallPct = Math.min((elapsed / totalSec) * 100, 100);
  const done = overallPct >= 100;

  return (
    <div className="fixed inset-0 z-[100] bg-black/40 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl border border-gray-200 shadow-xl max-w-xl w-full">
        <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium">{title}</h3>
            <p className="text-xs text-gray-500 mt-0.5">
              {done ? "Klar" : `Optimerar · ${Math.round(elapsed)}s / ~${totalSec}s`}
            </p>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-600"
              aria-label="Stäng"
            >
              <X size={18} />
            </button>
          )}
        </div>

        <div className="px-5 py-4">
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-4">
            <div
              className={`h-full rounded-full transition-all ${
                done ? "bg-green-500" : "bg-blue-500"
              }`}
              style={{ width: `${overallPct}%` }}
            />
          </div>

          <ol className="space-y-2">
            {stepStates.map((s) => {
              const icon =
                s.status === "done" ? (
                  <Check size={14} className="text-green-600" aria-hidden="true" />
                ) : s.status === "active" ? (
                  <Loader2 size={14} className="text-blue-600 animate-spin" aria-hidden="true" />
                ) : (
                  <span className="w-2 h-2 rounded-full bg-gray-300" />
                );
              return (
                <li key={s.id} className="flex items-center gap-3 text-sm">
                  <span className="w-5 h-5 flex items-center justify-center shrink-0">
                    {icon}
                  </span>
                  <span className="text-xs text-gray-400 font-mono w-5 shrink-0">
                    {String(s.id).padStart(2, "0")}
                  </span>
                  <span
                    className={`flex-1 ${
                      s.status === "done"
                        ? "text-gray-400 line-through"
                        : s.status === "active"
                        ? "font-medium"
                        : "text-gray-500"
                    }`}
                  >
                    {s.label}
                  </span>
                  <span className="text-xs text-gray-400 font-mono shrink-0">
                    ~{s.seconds}s
                  </span>
                </li>
              );
            })}
          </ol>
        </div>

        {done && onClose && (
          <div className="px-5 py-3 border-t border-gray-100 flex justify-end">
            <button
              onClick={onClose}
              className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Visa förslag
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
