"use client";

import { useState, useRef } from "react";
import { useInView, motion } from "framer-motion";
import {
  TrendingUp,
  Truck,
  Package,
  Clock,
  RotateCcw,
  AlertTriangle,
} from "lucide-react";

type ViewKey =
  | "oversikt"
  | "fyllnad"
  | "arbetstid"
  | "retur"
  | "linjer"
  | "ekipage";

const views: { key: ViewKey; label: string }[] = [
  { key: "oversikt", label: "Översikt" },
  { key: "fyllnad", label: "Fyllnad" },
  { key: "arbetstid", label: "Arbetstid" },
  { key: "retur", label: "Retur" },
  { key: "linjer", label: "Linjer" },
  { key: "ekipage", label: "Ekipage" },
];

/* ---- mock data ---- */
const fillDistribution = [
  { range: "<50%", count: 2, color: "#ef4444" },
  { range: "50–70%", count: 5, color: "#f59e0b" },
  { range: "70–85%", count: 9, color: "#3b82f6" },
  { range: "85–95%", count: 11, color: "#22c55e" },
  { range: "95–100%", count: 6, color: "#16a34a" },
];

const workTimeDistribution = [
  { range: "0–4h", count: 3 },
  { range: "4–8h", count: 8 },
  { range: "8–12h", count: 14 },
  { range: "12–16h", count: 7 },
  { range: "16h+", count: 1 },
];

const linePerformance = [
  { line: "LIN-01", passes: 8, fill: 87, retur: 62, km: 3420 },
  { line: "LIN-02", passes: 5, fill: 73, retur: 41, km: 2180 },
  { line: "LIN-03", passes: 6, fill: 92, retur: 78, km: 1840 },
  { line: "LIN-04", passes: 4, fill: 55, retur: 22, km: 3060 },
  { line: "LIN-05", passes: 3, fill: 98, retur: 85, km: 960 },
];

const equipmentTypes = [
  { type: "Bil + flak + släp", count: 14, fill: 84 },
  { type: "Bil + släp", count: 9, fill: 76 },
  { type: "Bil + flak", count: 10, fill: 68 },
];

function BarChart({
  data,
  maxVal,
  colorFn,
}: {
  data: { label: string; value: number }[];
  maxVal: number;
  colorFn?: (i: number) => string;
}) {
  return (
    <div className="space-y-2">
      {data.map((d, i) => (
        <div key={d.label} className="flex items-center gap-3">
          <span className="text-xs text-gray-500 w-14 shrink-0 text-right">
            {d.label}
          </span>
          <div className="flex-1 bg-gray-100 rounded-full h-5 overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                backgroundColor: colorFn ? colorFn(i) : "#111",
              }}
              initial={{ width: 0 }}
              animate={{ width: `${(d.value / maxVal) * 100}%` }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            />
          </div>
          <span className="text-xs font-medium w-8 text-right">{d.value}</span>
        </div>
      ))}
    </div>
  );
}

function DonutChart({
  segments,
}: {
  segments: { label: string; value: number; color: string }[];
}) {
  const total = segments.reduce((s, d) => s + d.value, 0);
  const radius = 40;
  const circumference = 2 * Math.PI * radius;

  const offsets: number[] = [];
  let running = 0;
  for (const seg of segments) {
    offsets.push(running * circumference);
    running += seg.value / total;
  }

  return (
    <div className="flex items-center gap-6">
      <svg width={100} height={100} viewBox="0 0 100 100">
        {segments.map((seg, i) => {
          const pct = seg.value / total;
          const offset = offsets[i];
          return (
            <motion.circle
              key={seg.label}
              cx={50}
              cy={50}
              r={radius}
              fill="none"
              stroke={seg.color}
              strokeWidth={12}
              strokeDasharray={`${pct * circumference} ${circumference}`}
              strokeDashoffset={-offset}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              transform="rotate(-90 50 50)"
            />
          );
        })}
      </svg>
      <div className="space-y-1.5">
        {segments.map((seg) => (
          <div key={seg.label} className="flex items-center gap-2 text-xs">
            <span
              className="w-2.5 h-2.5 rounded-full shrink-0"
              style={{ backgroundColor: seg.color }}
            />
            <span className="text-gray-600">{seg.label}</span>
            <span className="font-medium ml-auto">{seg.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function HorizontalCompare({
  left,
  right,
  leftLabel,
  rightLabel,
}: {
  left: number;
  right: number;
  leftLabel: string;
  rightLabel: string;
}) {
  const max = Math.max(left, right);
  return (
    <div className="space-y-3">
      <div>
        <div className="flex justify-between text-xs mb-1">
          <span className="text-gray-500">{leftLabel}</span>
          <span className="font-medium">{left} FLM</span>
        </div>
        <div className="bg-gray-100 rounded-full h-4 overflow-hidden">
          <motion.div
            className="h-full bg-black rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${(left / max) * 100}%` }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </div>
      <div>
        <div className="flex justify-between text-xs mb-1">
          <span className="text-gray-500">{rightLabel}</span>
          <span className="font-medium">{right} FLM</span>
        </div>
        <div className="bg-gray-100 rounded-full h-4 overflow-hidden">
          <motion.div
            className="h-full bg-gray-400 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${(right / max) * 100}%` }}
            transition={{ duration: 0.8, delay: 0.15 }}
          />
        </div>
      </div>
    </div>
  );
}

function KPI({
  label,
  value,
  sub,
  icon: Icon,
  accent,
  delay = 0,
}: {
  label: string;
  value: string;
  sub?: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  accent?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className="bg-white rounded-xl border border-gray-200 p-4"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
    >
      <div className="flex items-center gap-2 mb-1.5">
        <Icon size={14} className={accent || "text-gray-400"} />
        <span className="text-xs text-gray-500">{label}</span>
      </div>
      <p className="text-xl font-semibold">{value}</p>
      {sub && <p className="text-xs text-gray-400 mt-0.5">{sub}</p>}
    </motion.div>
  );
}

/* ---- view content ---- */

function OversiktView() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <KPI icon={Truck} label="Ekipage" value="33/38" sub="Aktiva / tillgängliga" delay={0} />
        <KPI icon={Package} label="Fyllnad ut" value="81%" sub="Mål: 85%" accent="text-blue-500" delay={0.1} />
        <KPI icon={Clock} label="Arbetstid" value="78%" sub="Utnyttjandegrad" accent="text-green-500" delay={0.2} />
        <KPI icon={AlertTriangle} label="Övertid" value="0" sub="Pass med övertid" accent="text-red-400" delay={0.3} />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">
            Fyllnadsfördelning
          </p>
          <BarChart
            data={fillDistribution.map((d) => ({
              label: d.range,
              value: d.count,
            }))}
            maxVal={12}
            colorFn={(i) => fillDistribution[i].color}
          />
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">
            Ekipagetyper
          </p>
          <DonutChart
            segments={equipmentTypes.map((e, i) => ({
              label: e.type,
              value: e.count,
              color: ["#111", "#6b7280", "#d1d5db"][i],
            }))}
          />
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">
          Godsflöde: Ut vs In
        </p>
        <HorizontalCompare
          left={1248}
          right={742}
          leftLabel="Utgående"
          rightLabel="Inkommande (retur)"
        />
        <p className="text-xs text-gray-400 mt-3">
          Returandel: 59% av utgående volym
        </p>
      </div>
    </div>
  );
}

function FyllnadView() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <KPI icon={Package} label="Snitt fyllnad" value="81%" accent="text-blue-500" />
        <KPI icon={Package} label="Median" value="84%" delay={0.1} />
        <KPI icon={Package} label="Min" value="38%" sub="Pass 17 — LIN-04" accent="text-red-400" delay={0.2} />
        <KPI icon={Package} label="Max" value="99%" sub="Pass 3 — LIN-05" accent="text-green-500" delay={0.3} />
      </div>
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">
          Pass per fyllnadsintervall
        </p>
        <BarChart
          data={fillDistribution.map((d) => ({
            label: d.range,
            value: d.count,
          }))}
          maxVal={12}
          colorFn={(i) => fillDistribution[i].color}
        />
      </div>
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
          Fyllnad ut vs Fyllnad in
        </p>
        <HorizontalCompare
          left={81}
          right={54}
          leftLabel="Utgående snitt"
          rightLabel="Returfyllnad snitt"
        />
      </div>
      <div className="bg-red-50 border border-red-200 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-2">
          <AlertTriangle size={14} className="text-red-500" aria-hidden="true" />
          <span className="text-xs font-medium text-red-700">Pass under 50% fyllnad</span>
        </div>
        <p className="text-sm text-red-600">
          2 pass identifierade — Pass 17 (LIN-04, 38%) och Pass 22 (LIN-02, 44%).
          Klicka för att granska.
        </p>
      </div>
    </div>
  );
}

function ArbetstidView() {
  const totalKortid = 68;
  const totalHandering = 22;
  const totalLedig = 10;
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        <KPI icon={Clock} label="Snitt arbetstid" value="9,4h" sub="Per pass" accent="text-blue-500" />
        <KPI icon={Clock} label="Utnyttjandegrad" value="78%" delay={0.1} />
        <KPI icon={AlertTriangle} label="Övertid" value="0 pass" accent="text-green-500" delay={0.2} />
      </div>
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">
          Tidsuppdelning
        </p>
        <div className="flex rounded-full h-6 overflow-hidden mb-3">
          <motion.div
            className="bg-black"
            initial={{ width: 0 }}
            animate={{ width: `${totalKortid}%` }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            className="bg-gray-400"
            initial={{ width: 0 }}
            animate={{ width: `${totalHandering}%` }}
            transition={{ duration: 0.8, delay: 0.1 }}
          />
          <motion.div
            className="bg-gray-200"
            initial={{ width: 0 }}
            animate={{ width: `${totalLedig}%` }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>
        <div className="flex gap-4 text-xs text-gray-500">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-black" /> Körtid {totalKortid}%
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-gray-400" /> Hantering {totalHandering}%
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-gray-200" /> Ledig {totalLedig}%
          </span>
        </div>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">
          Pass per tidsintervall
        </p>
        <BarChart
          data={workTimeDistribution.map((d) => ({
            label: d.range,
            value: d.count,
          }))}
          maxVal={15}
        />
      </div>
    </div>
  );
}

function ReturView() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        <KPI icon={RotateCcw} label="Pass med retur" value="22/33" sub="67% av alla pass" accent="text-green-500" />
        <KPI icon={Package} label="Retur-FLM" value="742" sub="Total returflakmeter" delay={0.1} />
        <KPI icon={TrendingUp} label="Returfyllnad" value="54%" sub="Snitt returpass" accent="text-blue-500" delay={0.2} />
      </div>
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">
          Utgående vs inkommande FLM
        </p>
        <HorizontalCompare
          left={1248}
          right={742}
          leftLabel="Utgående"
          rightLabel="Inkommande (retur)"
        />
      </div>
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
          Topp returdestinationer
        </p>
        <div className="space-y-2">
          {[
            { ort: "Göteborg", count: 8, flm: 186 },
            { ort: "Jönköping", count: 5, flm: 124 },
            { ort: "Malmö", count: 4, flm: 98 },
            { ort: "Borås", count: 4, flm: 87 },
            { ort: "Linköping", count: 3, flm: 64 },
          ].map((d, i) => (
            <motion.div
              key={d.ort}
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <span className="text-xs text-gray-500 w-20">{d.ort}</span>
              <div className="flex-1 bg-gray-100 rounded-full h-3 overflow-hidden">
                <motion.div
                  className="h-full bg-gray-600 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${(d.count / 8) * 100}%` }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                />
              </div>
              <span className="text-xs text-gray-400 w-20 text-right">
                {d.count}x · {d.flm} FLM
              </span>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-2">
          <AlertTriangle size={14} className="text-amber-500" aria-hidden="true" />
          <span className="text-xs font-medium text-amber-700">11 pass utan returgods</span>
        </div>
        <p className="text-sm text-amber-600">
          33% av passen kör tomma hem. Potentiell outnyttjad returkapacitet: 412 FLM.
        </p>
      </div>
    </div>
  );
}

function LinjerView() {
  const maxKm = Math.max(...linePerformance.map((l) => l.km));
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-3">
        <KPI icon={TrendingUp} label="Unika linjer" value="5" />
        <KPI icon={Truck} label="Snitt pass/linje" value="5,2" delay={0.1} />
        <KPI icon={Package} label="Snittfyllnad" value="81%" accent="text-blue-500" delay={0.2} />
      </div>
      <div className="bg-white rounded-xl border border-gray-200 p-5 overflow-x-auto">
        <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">
          Prestanda per linje
        </p>
        <table className="w-full text-xs">
          <thead>
            <tr className="text-gray-400 border-b border-gray-100">
              <th className="text-left pb-2 font-medium">Linje</th>
              <th className="text-right pb-2 font-medium">Pass</th>
              <th className="text-right pb-2 font-medium">Fyllnad</th>
              <th className="text-right pb-2 font-medium">Retur</th>
              <th className="text-right pb-2 font-medium">Km</th>
              <th className="pb-2 pl-3 font-medium w-28"></th>
            </tr>
          </thead>
          <tbody>
            {linePerformance.map((l, i) => (
              <motion.tr
                key={l.line}
                className="border-b border-gray-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.08 }}
              >
                <td className="py-2.5 font-medium">{l.line}</td>
                <td className="text-right py-2.5">{l.passes}</td>
                <td className="text-right py-2.5">
                  <span
                    className={
                      l.fill < 60
                        ? "text-red-500 font-medium"
                        : l.fill >= 90
                          ? "text-green-600 font-medium"
                          : ""
                    }
                  >
                    {l.fill}%
                  </span>
                </td>
                <td className="text-right py-2.5">{l.retur}%</td>
                <td className="text-right py-2.5">
                  {new Intl.NumberFormat("sv-SE").format(l.km)}
                </td>
                <td className="pl-3 py-2.5">
                  <div className="bg-gray-100 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full bg-black rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${(l.km / maxKm) * 100}%` }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                    />
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function EkipageView() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        <KPI icon={Truck} label="Bil+flak+släp" value="14" sub="Snitt 84% fyllnad" />
        <KPI icon={Truck} label="Bil+släp" value="9" sub="Snitt 76% fyllnad" delay={0.1} />
        <KPI icon={Truck} label="Bil+flak" value="10" sub="Snitt 68% fyllnad" delay={0.2} />
      </div>
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">
          Fyllnad per ekipagetyp
        </p>
        {equipmentTypes.map((e, i) => (
          <div key={e.type} className="mb-4 last:mb-0">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gray-500">{e.type}</span>
              <span className="font-medium">{e.fill}%</span>
            </div>
            <div className="bg-gray-100 rounded-full h-4 overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  backgroundColor:
                    e.fill >= 80 ? "#22c55e" : e.fill >= 65 ? "#3b82f6" : "#f59e0b",
                }}
                initial={{ width: 0 }}
                animate={{ width: `${e.fill}%` }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">
          Ekipagefördelning
        </p>
        <DonutChart
          segments={equipmentTypes.map((e, i) => ({
            label: e.type,
            value: e.count,
            color: ["#111", "#6b7280", "#d1d5db"][i],
          }))}
        />
      </div>
    </div>
  );
}

const viewComponents: Record<ViewKey, () => React.JSX.Element> = {
  oversikt: OversiktView,
  fyllnad: FyllnadView,
  arbetstid: ArbetstidView,
  retur: ReturView,
  linjer: LinjerView,
  ekipage: EkipageView,
};

export default function AnalyticsDashboardDemo() {
  const [activeView, setActiveView] = useState<ViewKey>("oversikt");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const ViewContent = viewComponents[activeView];

  return (
    <div
      ref={ref}
      className={`bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      {/* Tab bar */}
      <div className="border-b border-gray-200 px-4 md:px-6 overflow-x-auto">
        <div className="flex gap-0 min-w-max">
          {views.map((v) => (
            <button
              key={v.key}
              onClick={() => setActiveView(v.key)}
              className={`px-4 py-3.5 text-xs font-medium transition-colors relative whitespace-nowrap ${
                activeView === v.key
                  ? "text-black"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {v.label}
              {activeView === v.key && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"
                  layoutId="analytics-tab"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 md:p-8">
        <ViewContent />
      </div>
    </div>
  );
}
