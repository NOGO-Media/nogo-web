"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export type NodeGroup = "input" | "core" | "output";

interface WorkflowNodeProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  group: NodeGroup;
  index: number;
  isInView: boolean;
  nodeRef: (el: HTMLDivElement | null) => void;
}

const groupStyles: Record<
  NodeGroup,
  { iconBg: string; iconColor: string }
> = {
  input: {
    iconBg: "bg-blue-50 border border-blue-100",
    iconColor: "text-blue-600",
  },
  core: {
    iconBg: "bg-gray-100 border border-gray-200",
    iconColor: "text-gray-700",
  },
  output: {
    iconBg: "bg-green-50 border border-green-100",
    iconColor: "text-green-600",
  },
};

const getInitial = (group: NodeGroup) => {
  if (group === "input") return { opacity: 0, x: -30 };
  if (group === "output") return { opacity: 0, x: 30 };
  return { opacity: 0, y: 20 };
};

export function WorkflowNode({
  icon: Icon,
  title,
  subtitle,
  group,
  index,
  isInView,
  nodeRef,
}: WorkflowNodeProps) {
  const style = groupStyles[group];

  return (
    <motion.div
      ref={nodeRef}
      initial={getInitial(group)}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : getInitial(group)}
      transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
      className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
    >
      <div
        className={`w-9 h-9 rounded-lg flex items-center justify-center mb-2 ${style.iconBg}`}
      >
        <Icon size={18} className={style.iconColor} />
      </div>
      <h4 className="text-sm font-medium leading-tight">{title}</h4>
      <p className="text-xs text-gray-400 mt-0.5 leading-tight">{subtitle}</p>
    </motion.div>
  );
}
