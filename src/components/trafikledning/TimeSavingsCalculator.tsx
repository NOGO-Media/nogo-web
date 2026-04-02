"use client";

import { useState, useRef } from "react";
import { useInView } from "framer-motion";
import { Clock, Users, Calculator, TrendingDown } from "lucide-react";

const WORKING_DAYS = 220;
const SAVING_FACTOR = 0.6; // 60% reduction in manual time

export default function TimeSavingsCalculator() {
  const [dispatchers, setDispatchers] = useState(3);
  const [ordersPerDay, setOrdersPerDay] = useState(80);
  const [minPerOrder, setMinPerOrder] = useState(8);

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const dailyManualMinutes = dispatchers * ordersPerDay * minPerOrder / dispatchers;
  const dailyManualHours = dailyManualMinutes / 60;
  const dailySavedHours = dailyManualHours * SAVING_FACTOR;
  const yearlySavedHours = dailySavedHours * WORKING_DAYS;
  const fteSaved = yearlySavedHours / (8 * WORKING_DAYS);

  const formatNumber = (n: number) =>
    new Intl.NumberFormat("sv-SE").format(Math.round(n));

  return (
    <div ref={ref} className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-0">
        {/* Inputs */}
        <div className="p-8 md:p-10">
          <div className="flex items-center gap-2 mb-6">
            <Calculator size={20} className="text-gray-500" />
            <h3 className="text-lg font-medium">Beräkna er tidsbesparing</h3>
          </div>
          <p className="text-sm text-gray-500 mb-8 leading-relaxed">
            Se hur mycket tid era trafikledare kan frigöra med automatiserad
            tilldelning och orderhantering.
          </p>

          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium">Antal trafikledare</label>
                <span className="text-sm font-semibold bg-white border border-gray-200 rounded-lg px-3 py-1">
                  {dispatchers}
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={15}
                value={dispatchers}
                onChange={(e) => setDispatchers(Number(e.target.value))}
                className="w-full accent-black"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>1</span>
                <span>15</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium">Ordrar per dag</label>
                <span className="text-sm font-semibold bg-white border border-gray-200 rounded-lg px-3 py-1">
                  {ordersPerDay}
                </span>
              </div>
              <input
                type="range"
                min={10}
                max={500}
                step={5}
                value={ordersPerDay}
                onChange={(e) => setOrdersPerDay(Number(e.target.value))}
                className="w-full accent-black"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>10</span>
                <span>500</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium">Minuter per order (manuellt)</label>
                <span className="text-sm font-semibold bg-white border border-gray-200 rounded-lg px-3 py-1">
                  {minPerOrder} min
                </span>
              </div>
              <input
                type="range"
                min={2}
                max={20}
                value={minPerOrder}
                onChange={(e) => setMinPerOrder(Number(e.target.value))}
                className="w-full accent-black"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>2 min</span>
                <span>20 min</span>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="p-8 md:p-10 bg-white md:border-l border-t md:border-t-0 border-gray-200">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-6">
            Uppskattad tidsbesparing
          </p>

          <div className="space-y-5">
            <div
              className={`p-5 bg-green-50 rounded-xl transition-all duration-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <div className="flex items-center gap-2 mb-2">
                <Clock size={16} className="text-green-600" />
                <span className="text-xs font-medium text-green-700">Sparad tid per dag</span>
              </div>
              <p className="text-2xl font-semibold text-green-800">
                {dailySavedHours.toFixed(1)} timmar
              </p>
              <p className="text-xs text-green-600 mt-1">
                Av totalt {dailyManualHours.toFixed(1)} manuella timmar
              </p>
            </div>

            <div
              className={`p-5 bg-blue-50 rounded-xl transition-all duration-500 delay-100 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <div className="flex items-center gap-2 mb-2">
                <TrendingDown size={16} className="text-blue-600" />
                <span className="text-xs font-medium text-blue-700">Sparad tid per år</span>
              </div>
              <p className="text-2xl font-semibold text-blue-800">
                {formatNumber(yearlySavedHours)} timmar
              </p>
              <p className="text-xs text-blue-600 mt-1">
                Baserat på {WORKING_DAYS} arbetsdagar
              </p>
            </div>

            <div
              className={`p-5 bg-purple-50 rounded-xl transition-all duration-500 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <div className="flex items-center gap-2 mb-2">
                <Users size={16} className="text-purple-600" />
                <span className="text-xs font-medium text-purple-700">Motsvarar heltidstjänst</span>
              </div>
              <p className="text-2xl font-semibold text-purple-800">
                {fteSaved.toFixed(1)} FTE
              </p>
              <p className="text-xs text-purple-600 mt-1">
                Tid som frigörs till annat arbete
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
