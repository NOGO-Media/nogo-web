"use client";

import { motion } from "framer-motion";
import type { Positions } from "./useNodePositions";

export type Connection = {
  from: string;
  to: string;
};

interface ConnectionLinesProps {
  connections: Connection[];
  positions: Positions;
  containerSize: { width: number; height: number };
  isInView: boolean;
  showPulses: boolean;
}

function buildPath(
  fromX: number,
  fromY: number,
  toX: number,
  toY: number
): string {
  const dx = toX - fromX;
  const dy = toY - fromY;
  const isHorizontal = Math.abs(dx) > Math.abs(dy);

  if (isHorizontal) {
    const cpOffset = Math.abs(dx) * 0.4;
    return `M ${fromX} ${fromY} C ${fromX + cpOffset} ${fromY}, ${toX - cpOffset} ${toY}, ${toX} ${toY}`;
  } else {
    const cpOffset = Math.abs(dy) * 0.4;
    return `M ${fromX} ${fromY} C ${fromX} ${fromY + cpOffset}, ${toX} ${toY - cpOffset}, ${toX} ${toY}`;
  }
}

export function ConnectionLines({
  connections,
  positions,
  containerSize,
  isInView,
  showPulses,
}: ConnectionLinesProps) {
  if (positions.size === 0 || containerSize.width === 0) return null;

  return (
    <svg
      className="absolute inset-0 pointer-events-none overflow-visible"
      width={containerSize.width}
      height={containerSize.height}
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      <defs>
        <marker
          id="arrowhead"
          markerWidth="8"
          markerHeight="6"
          refX="7"
          refY="3"
          orient="auto"
        >
          <path d="M 0 0 L 8 3 L 0 6 Z" fill="#d1d5db" />
        </marker>
        <filter id="pulse-glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {connections.map((conn, i) => {
        const from = positions.get(conn.from);
        const to = positions.get(conn.to);
        if (!from || !to) return null;

        const d = buildPath(from.x, from.y, to.x, to.y);

        return (
          <g key={`${conn.from}-${conn.to}`}>
            <motion.path
              d={d}
              fill="none"
              stroke="#d1d5db"
              strokeWidth={1.5}
              markerEnd="url(#arrowhead)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={
                isInView
                  ? { pathLength: 1, opacity: 1 }
                  : { pathLength: 0, opacity: 0 }
              }
              transition={{
                pathLength: { delay: 0.8 + i * 0.1, duration: 0.6, ease: "easeInOut" },
                opacity: { delay: 0.8 + i * 0.1, duration: 0.1 },
              }}
            />

            {showPulses && (
              <circle r="3" fill="#3b82f6" filter="url(#pulse-glow)" opacity="0.8">
                <animateMotion
                  dur={`${2 + (i % 3) * 0.5}s`}
                  repeatCount="indefinite"
                  begin={`${i * 0.3}s`}
                  path={d}
                />
              </circle>
            )}
          </g>
        );
      })}
    </svg>
  );
}
