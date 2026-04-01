import type { Metadata } from "next";
import DemoDashboard from "@/components/demo/DemoDashboard";

export const metadata: Metadata = {
  title: "NOGO Dispatch — Demo",
  description: "Interaktiv demo av NOGO Dispatch — ruttplanering och disponering för svenska åkerier.",
};

export default function DemoPage() {
  return <DemoDashboard />;
}
