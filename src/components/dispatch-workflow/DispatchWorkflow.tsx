"use client";

import { useRef, useCallback, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import {
  Upload,
  Mail,
  ClipboardList,
  Route,
  Truck,
  Clock,
  Package,
  Waypoints,
  Monitor,
  BarChart3,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { WorkflowNode, type NodeGroup } from "./WorkflowNode";
import { ConnectionLines, type Connection } from "./ConnectionLines";
import { useNodePositions } from "./useNodePositions";

type WorkflowNodeData = {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  group: NodeGroup;
};

const inputNodes: WorkflowNodeData[] = [
  {
    id: "orderimport",
    icon: Upload,
    title: "Orderimport",
    subtitle: "Från ert befintliga system",
    group: "input",
  },
  {
    id: "mail",
    icon: Mail,
    title: "Mail",
    subtitle: "Ordrar via e-post",
    group: "input",
  },
];

const coreNodes: WorkflowNodeData[] = [
  {
    id: "orderhantering",
    icon: ClipboardList,
    title: "Orderhantering",
    subtitle: "Inläsning & validering",
    group: "core",
  },
  {
    id: "ruttoptimering",
    icon: Route,
    title: "Ruttoptimering",
    subtitle: "Optimal leveransordning",
    group: "core",
  },
  {
    id: "fordonsplanering",
    icon: Truck,
    title: "Fordonsplanering",
    subtitle: "Rätt ekipage till rätt last",
    group: "core",
  },
  {
    id: "tidsplanering",
    icon: Clock,
    title: "Tidsplanering",
    subtitle: "Körtid & arbetspass",
    group: "core",
  },
  {
    id: "lastkonsolidering",
    icon: Package,
    title: "Lastkonsolidering",
    subtitle: "Maximera fyllnadsgrad",
    group: "core",
  },
  {
    id: "relaplanering",
    icon: Waypoints,
    title: "Reläplanering",
    subtitle: "Terminalöverlämning",
    group: "core",
  },
];

const outputNodes: WorkflowNodeData[] = [
  {
    id: "dashboard",
    icon: Monitor,
    title: "Realtidsdashboard",
    subtitle: "Överblick & styrning",
    group: "output",
  },
  {
    id: "flotta",
    icon: Truck,
    title: "Fordonsflotta",
    subtitle: "Status & tillgänglighet",
    group: "output",
  },
  {
    id: "statistik",
    icon: BarChart3,
    title: "Statistik & KPI:er",
    subtitle: "Fyllnadsgrad & effektivitet",
    group: "output",
  },
];

const connections: Connection[] = [
  // Inputs → Core entry
  { from: "orderimport", to: "orderhantering" },
  { from: "mail", to: "orderhantering" },
  // Core flow
  { from: "orderhantering", to: "ruttoptimering" },
  { from: "orderhantering", to: "fordonsplanering" },
  { from: "orderhantering", to: "tidsplanering" },
  { from: "ruttoptimering", to: "lastkonsolidering" },
  { from: "tidsplanering", to: "lastkonsolidering" },
  { from: "lastkonsolidering", to: "relaplanering" },
  // Core → Outputs
  { from: "ruttoptimering", to: "dashboard" },
  { from: "fordonsplanering", to: "flotta" },
  { from: "relaplanering", to: "statistik" },
];

export default function DispatchWorkflow() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const nodeRefsMap = useRef<Map<string, HTMLElement>>(new Map());
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [showPulses, setShowPulses] = useState(false);

  // Start pulses after draw-in animations complete
  useEffect(() => {
    if (!isInView) return;
    const delay = 0.8 + connections.length * 0.1 + 0.6; // wait for lines to draw
    const timer = setTimeout(() => setShowPulses(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [isInView]);

  const { positions, containerSize } = useNodePositions(
    containerRef,
    nodeRefsMap
  );

  const setNodeRef = useCallback(
    (id: string) => (el: HTMLDivElement | null) => {
      if (el) {
        nodeRefsMap.current.set(id, el);
      } else {
        nodeRefsMap.current.delete(id);
      }
    },
    []
  );

  let nodeIndex = 0;

  return (
    <section ref={sectionRef} className="pb-24 md:pb-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Workflow diagram */}
        <div ref={containerRef} className="relative">
          <ConnectionLines
            connections={connections}
            positions={positions}
            containerSize={containerSize}
            isInView={isInView}
            showPulses={showPulses}
          />

          {/* Desktop: 3-column layout */}
          <div className="hidden md:grid grid-cols-[180px_1fr_180px] gap-8 items-center relative z-10">
            {/* Input column */}
            <div className="flex flex-col gap-4 justify-center">
              {inputNodes.map((node) => (
                <WorkflowNode
                  key={node.id}
                  {...node}
                  index={nodeIndex++}
                  isInView={isInView}
                  nodeRef={setNodeRef(node.id)}
                />
              ))}
            </div>

            {/* Core container */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">
                NOGO Dispatch
              </p>
              <div className="grid grid-cols-3 gap-4">
                {coreNodes.map((node) => (
                  <WorkflowNode
                    key={node.id}
                    {...node}
                    index={nodeIndex++}
                    isInView={isInView}
                    nodeRef={setNodeRef(node.id)}
                  />
                ))}
              </div>
            </div>

            {/* Output column */}
            <div className="flex flex-col gap-4 justify-center">
              {outputNodes.map((node) => (
                <WorkflowNode
                  key={node.id}
                  {...node}
                  index={nodeIndex++}
                  isInView={isInView}
                  nodeRef={setNodeRef(node.id)}
                />
              ))}
            </div>
          </div>

          {/* Mobile: single column */}
          <div className="md:hidden space-y-6 relative z-10">
            {/* Inputs */}
            <div>
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
                Input
              </p>
              <div className="grid grid-cols-2 gap-3">
                {inputNodes.map((node) => (
                  <WorkflowNode
                    key={node.id}
                    {...node}
                    index={nodeIndex++}
                    isInView={isInView}
                    nodeRef={setNodeRef(node.id)}
                  />
                ))}
              </div>
            </div>

            {/* Core */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
                NOGO Dispatch
              </p>
              <div className="grid grid-cols-2 gap-3">
                {coreNodes.map((node) => (
                  <WorkflowNode
                    key={node.id}
                    {...node}
                    index={nodeIndex++}
                    isInView={isInView}
                    nodeRef={setNodeRef(node.id)}
                  />
                ))}
              </div>
            </div>

            {/* Outputs */}
            <div>
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
                Output
              </p>
              <div className="grid grid-cols-2 gap-3">
                {outputNodes.map((node) => (
                  <WorkflowNode
                    key={node.id}
                    {...node}
                    index={nodeIndex++}
                    isInView={isInView}
                    nodeRef={setNodeRef(node.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
