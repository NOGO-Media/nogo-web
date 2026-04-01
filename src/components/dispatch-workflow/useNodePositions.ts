"use client";

import { useEffect, useState, useCallback, useRef } from "react";

export type Position = { x: number; y: number };
export type Positions = Map<string, Position>;

export function useNodePositions(
  containerRef: React.RefObject<HTMLDivElement | null>,
  nodeRefs: React.RefObject<Map<string, HTMLElement>>
) {
  const [positions, setPositions] = useState<Positions>(new Map());
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const rafRef = useRef<number>(0);

  const measure = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    rafRef.current = requestAnimationFrame(() => {
      const container = containerRef.current;
      const nodes = nodeRefs.current;
      if (!container || !nodes) return;

      const containerRect = container.getBoundingClientRect();
      const next = new Map<string, Position>();

      nodes.forEach((el, id) => {
        const rect = el.getBoundingClientRect();
        next.set(id, {
          x: rect.left + rect.width / 2 - containerRect.left,
          y: rect.top + rect.height / 2 - containerRect.top,
        });
      });

      setContainerSize({
        width: containerRect.width,
        height: containerRect.height,
      });
      setPositions(next);
    });
  }, [containerRef, nodeRefs]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Initial measure after a short delay to let layout settle
    const timeout = setTimeout(measure, 100);

    const observer = new ResizeObserver(measure);
    observer.observe(container);

    window.addEventListener("scroll", measure, { passive: true });

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
      window.removeEventListener("scroll", measure);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [containerRef, measure]);

  return { positions, containerSize };
}
