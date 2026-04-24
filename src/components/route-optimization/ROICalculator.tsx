"use client";

import { useState, useRef } from "react";
import { useInView } from "framer-motion";
import { Calculator, Fuel, Clock, Route } from "lucide-react";

const FUEL_PRICE_PER_KM = 4.5; // SEK per km (diesel avg)
const AVG_SPEED_KMH = 45; // avg speed with stops
const SAVING_FACTOR = 0.23; // 23% reduction
const WORKING_DAYS = 220; // per year

export default function ROICalculator() {
  const [vehicles, setVehicles] = useState(20);
  const [stopsPerDay, setStopsPerDay] = useState(30);
  const [kmPerDay, setKmPerDay] = useState(250);

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const dailyKmSaved = vehicles * kmPerDay * SAVING_FACTOR;
  const yearlyKmSaved = dailyKmSaved * WORKING_DAYS;
  const yearlyFuelSaved = yearlyKmSaved * FUEL_PRICE_PER_KM;
  const yearlyTimeSavedHours = (yearlyKmSaved / AVG_SPEED_KMH);

  const formatNumber = (n: number) =>
    new Intl.NumberFormat("sv-SE").format(Math.round(n));

  return (
    <div ref={ref} className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-0">
        {/* Inputs */}
        <div className="p-8 md:p-10">
          <div className="flex items-center gap-2 mb-6">
            <Calculator size={20} className="text-gray-500" />
            <h3 className="text-lg font-medium">Beräkna er besparing</h3>
          </div>
          <p className="text-sm text-gray-500 mb-8 leading-relaxed">
            Justera värdena nedan för att se hur mycket ni kan spara med
            AI-optimerade rutter. Baserat på 23% minskad körsträcka.
          </p>

          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium">Antal fordon</label>
                <span className="text-sm font-semibold bg-white border border-gray-200 rounded-lg px-3 py-1">
                  {vehicles}
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={200}
                value={vehicles}
                onChange={(e) => setVehicles(Number(e.target.value))}
                className="w-full accent-black"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>1</span>
                <span>200</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium">Stopp per dag</label>
                <span className="text-sm font-semibold bg-white border border-gray-200 rounded-lg px-3 py-1">
                  {stopsPerDay}
                </span>
              </div>
              <input
                type="range"
                min={5}
                max={100}
                value={stopsPerDay}
                onChange={(e) => setStopsPerDay(Number(e.target.value))}
                className="w-full accent-black"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>5</span>
                <span>100</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium">Körsträcka per dag (km)</label>
                <span className="text-sm font-semibold bg-white border border-gray-200 rounded-lg px-3 py-1">
                  {kmPerDay}
                </span>
              </div>
              <input
                type="range"
                min={50}
                max={800}
                step={10}
                value={kmPerDay}
                onChange={(e) => setKmPerDay(Number(e.target.value))}
                className="w-full accent-black"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>50 km</span>
                <span>800 km</span>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="p-8 md:p-10 bg-white md:border-l border-t md:border-t-0 border-gray-200">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-6">
            Uppskattad årlig besparing
          </p>

          <div className="space-y-5">
            <div
              className={`p-5 bg-green-50 rounded-xl transition-all duration-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <div className="flex items-center gap-2 mb-2">
                <Route size={16} className="text-green-600" aria-hidden="true" />
                <span className="text-xs font-medium text-green-700">Sparad körsträcka</span>
              </div>
              <p className="text-2xl font-semibold text-green-800">
                {formatNumber(yearlyKmSaved)} km
              </p>
              <p className="text-xs text-green-600 mt-1">
                {formatNumber(dailyKmSaved)} km per dag
              </p>
            </div>

            <div
              className={`p-5 bg-blue-50 rounded-xl transition-all duration-500 delay-100 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <div className="flex items-center gap-2 mb-2">
                <Fuel size={16} className="text-blue-600" />
                <span className="text-xs font-medium text-blue-700">Sparad bränslekostnad</span>
              </div>
              <p className="text-2xl font-semibold text-blue-800">
                {formatNumber(yearlyFuelSaved)} kr
              </p>
              <p className="text-xs text-blue-600 mt-1">
                Baserat på {FUEL_PRICE_PER_KM} kr/km
              </p>
            </div>

            <div
              className={`p-5 bg-purple-50 rounded-xl transition-all duration-500 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <div className="flex items-center gap-2 mb-2">
                <Clock size={16} className="text-purple-600" aria-hidden="true" />
                <span className="text-xs font-medium text-purple-700">Sparad tid</span>
              </div>
              <p className="text-2xl font-semibold text-purple-800">
                {formatNumber(yearlyTimeSavedHours)} timmar
              </p>
              <p className="text-xs text-purple-600 mt-1">
                {formatNumber(yearlyTimeSavedHours / WORKING_DAYS * 60)} minuter per dag
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
