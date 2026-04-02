"use client";

import { useEffect, useRef } from "react";
import { routes, stops, vehicles } from "./mockData";

type Coordinate = [number, number];

const OSRM_BASE_URL = "https://router.project-osrm.org/route/v1/driving";

async function fetchRoadRoute(
  coordinates: Coordinate[],
): Promise<Coordinate[] | null> {
  if (coordinates.length < 2) return null;

  const startAndEndCoordinates = [coordinates[0], coordinates[coordinates.length - 1]];

  const coordinateString = startAndEndCoordinates
    .map(([lng, lat]) => `${lng},${lat}`)
    .join(";");

  const url = `${OSRM_BASE_URL}/${coordinateString}?overview=full&geometries=geojson`;

  try {
    const response = await fetch(url);
    if (!response.ok) return null;

    const data = (await response.json()) as {
      code?: string;
      routes?: Array<{
        geometry?: { coordinates?: Coordinate[] };
      }>;
    };

    if (data.code !== "Ok") return null;

    return data.routes?.[0]?.geometry?.coordinates ?? null;
  } catch {
    return null;
  }
}

export default function DemoMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<unknown>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    let map: import("maplibre-gl").Map;

    import("maplibre-gl").then((maplibregl) => {
      map = new maplibregl.Map({
        container: containerRef.current!,
        style: {
          version: 8,
          sources: {
            carto: {
              type: "raster",
              tiles: [
                "https://basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png",
              ],
              tileSize: 256,
              attribution:
                '&copy; <a href="https://carto.com/">CARTO</a> &copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>',
            },
          },
          layers: [{ id: "carto", type: "raster", source: "carto" }],
        },
        center: [16.2, 58.7],
        zoom: 7.5,
        attributionControl: false,
      });

      mapRef.current = map;

      map.on("load", async () => {
        // Add routes
        for (const route of routes) {
          const roadCoordinates =
            (await fetchRoadRoute(route.coordinates)) ?? route.coordinates;

          map.addSource(`route-${route.vehicleId}`, {
            type: "geojson",
            data: {
              type: "Feature",
              properties: {},
              geometry: {
                type: "LineString",
                coordinates: roadCoordinates,
              },
            },
          });

          map.addLayer({
            id: `route-line-${route.vehicleId}`,
            type: "line",
            source: `route-${route.vehicleId}`,
            paint: {
              "line-color": route.color,
              "line-width": 3,
              "line-opacity": 0.7,
            },
            layout: {
              "line-cap": "round",
              "line-join": "round",
            },
          });
        }

        // Add stops
        stops.forEach((stop) => {
          const el = document.createElement("div");
          el.className = "flex flex-col items-center";
          el.innerHTML = `
            <div style="
              width: 22px; height: 22px;
              border-radius: 50%;
              background: ${stop.type === "pickup" ? "#3b82f6" : "#10b981"};
              border: 2px solid white;
              box-shadow: 0 1px 3px rgba(0,0,0,0.3);
              display: flex; align-items: center; justify-content: center;
            ">
              <svg width="10" height="10" fill="white" viewBox="0 0 24 24">
                ${
                  stop.type === "pickup"
                    ? '<path d="M12 2L12 22M5 9L12 2L19 9"/>'
                    : '<path d="M12 2L12 22M5 15L12 22L19 15"/>'
                }
              </svg>
            </div>
            <div style="
              margin-top: 2px;
              background: white;
              border: 1px solid #e5e7eb;
              border-radius: 4px;
              padding: 1px 5px;
              font-size: 10px;
              font-weight: 500;
              color: #374151;
              white-space: nowrap;
              box-shadow: 0 1px 2px rgba(0,0,0,0.1);
            ">${stop.orderId}</div>
          `;

          new maplibregl.Marker({ element: el })
            .setLngLat(stop.position)
            .addTo(map);
        });

        // Add vehicle markers
        const activeVehicles = vehicles.filter((v) => v.status === "I trafik");
        activeVehicles.forEach((v) => {
          const el = document.createElement("div");
          el.className = "flex flex-col items-center";
          el.innerHTML = `
            <div style="
              width: 26px;
              height: 26px;
              background: ${v.color};
              border-radius: 9999px;
              border: 2px solid white;
              box-shadow: 0 2px 6px rgba(0,0,0,0.25);
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
            ">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M5.4 16.5a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8Zm13.2 0a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8ZM4 15.2h16.2c.4 0 .8-.4.8-.8V12c0-.8-.6-1.4-1.4-1.4h-.7l-1.4-3.3a2.2 2.2 0 0 0-2-1.3H8.5c-.9 0-1.7.5-2 1.3L5 10.6h-.6C3.6 10.6 3 11.2 3 12v2.4c0 .4.4.8.8.8H4Z"
                  fill="white"
                />
              </svg>
            </div>
          `;

          new maplibregl.Marker({ element: el })
            .setLngLat(v.position)
            .addTo(map);
        });
      });
    });

    return () => {
      if (map) map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
        <h3 className="text-sm font-medium">Kartvy</h3>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-0.5 bg-blue-500 rounded" />
            <span className="text-[10px] text-gray-400">Aktiv rutt</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-500 border border-white" />
            <span className="text-[10px] text-gray-400">Upphämtning</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-green-500 border border-white" />
            <span className="text-[10px] text-gray-400">Avlämning</span>
          </div>
        </div>
      </div>
      <div ref={containerRef} className="h-[500px] w-full" />
    </div>
  );
}
