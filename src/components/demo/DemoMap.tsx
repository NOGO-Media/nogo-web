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

function getSquaredDistance(a: Coordinate, b: Coordinate): number {
  const dx = a[0] - b[0];
  const dy = a[1] - b[1];

  return dx * dx + dy * dy;
}

function findClosestCoordinate(
  target: Coordinate,
  candidates: Coordinate[],
): Coordinate | null {
  if (candidates.length === 0) return null;

  let closest = candidates[0];
  let shortestDistance = getSquaredDistance(target, closest);

  for (let i = 1; i < candidates.length; i += 1) {
    const candidate = candidates[i];
    const distance = getSquaredDistance(target, candidate);

    if (distance < shortestDistance) {
      shortestDistance = distance;
      closest = candidate;
    }
  }

  return closest;
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
        const routeCoordinatesByVehicleId = new Map<string, Coordinate[]>();

        // Add routes
        for (const route of routes) {
          const roadCoordinates =
            (await fetchRoadRoute(route.coordinates)) ?? route.coordinates;

          routeCoordinatesByVehicleId.set(route.vehicleId, roadCoordinates);

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
          const routeCoordinates = routeCoordinatesByVehicleId.get(v.id) ?? [];
          const snappedPosition =
            findClosestCoordinate(v.position, routeCoordinates) ?? v.position;

          const el = document.createElement("div");
          el.className = "-translate-x-1/2 -translate-y-1/2";
          el.innerHTML = `
            <div style="
              width: 18px;
              height: 18px;
              border-radius: 4px;
              background: ${v.color};
              border: 2px solid white;
              box-shadow: 0 2px 6px rgba(0,0,0,0.25);
              display: flex;
              align-items: center;
              justify-content: center;
            ">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3 6h10v8h8v-4l-3-4h-5" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="7" cy="17" r="2" fill="white"/>
                <circle cx="17" cy="17" r="2" fill="white"/>
              </svg>
            </div>
          `;

          new maplibregl.Marker({ element: el })
            .setLngLat(snappedPosition)
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
