"use client";

import { useState } from "react";
import { orders, vehicles, statusColor, type OrderStatus } from "./mockData";

const filters: (OrderStatus | "Alla")[] = ["Alla", "Planerad", "Pågår", "Levererad"];

export default function DemoOrderTable() {
  const [activeFilter, setActiveFilter] = useState<OrderStatus | "Alla">("Alla");

  const filtered =
    activeFilter === "Alla"
      ? orders
      : orders.filter((o) => o.status === activeFilter);

  const vehicleMap = new Map(vehicles.map((v) => [v.id, v]));

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
        <h3 className="text-sm font-medium">Ordrar</h3>
        <div className="flex gap-1">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                activeFilter === f
                  ? "bg-gray-900 text-white"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100">
              {["Ordernr", "Kund", "Upphämtning", "Avlämning", "Vikt", "Status", "Fordon"].map(
                (h) => (
                  <th
                    key={h}
                    className="text-left text-xs font-medium text-gray-500 px-5 py-3"
                  >
                    {h}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {filtered.map((order) => {
              const vehicle = order.vehicleId
                ? vehicleMap.get(order.vehicleId)
                : null;
              return (
                <tr
                  key={order.id}
                  className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                >
                  <td className="px-5 py-3 font-mono text-xs text-gray-700">
                    {order.id}
                  </td>
                  <td className="px-5 py-3 text-gray-700">{order.customer}</td>
                  <td className="px-5 py-3 text-gray-500">{order.pickup}</td>
                  <td className="px-5 py-3 text-gray-500">{order.delivery}</td>
                  <td className="px-5 py-3 text-gray-500">{order.weight}</td>
                  <td className="px-5 py-3">
                    <span
                      className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${
                        statusColor[order.status]
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-gray-500 text-xs">
                    {vehicle ? vehicle.reg : "—"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
