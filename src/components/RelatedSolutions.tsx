import Link from "next/link";
import { ArrowRight } from "lucide-react";

type SolutionSlug =
  | "trafikledning"
  | "ruttoptimering"
  | "tms-integration"
  | "automatisk-orderhantering"
  | "rapport-och-analys";

const SOLUTIONS: Record<
  SolutionSlug,
  { title: string; description: string }
> = {
  trafikledning: {
    title: "Trafikledning",
    description:
      "AI-automation som tar över det repetitiva i trafikledarrollen — tilldelning, matchning och uppföljning — utan att ni byter system.",
  },
  ruttoptimering: {
    title: "Ruttoptimering",
    description:
      "Automatisk beräkning av optimala rutter. Minskar körsträckan med 23 % och ökar leveranser per dag.",
  },
  "tms-integration": {
    title: "TMS-integration",
    description:
      "AI-automation som arbetar direkt i ert befintliga TMS — med eller utan API. Vi hittar alltid en väg in.",
  },
  "automatisk-orderhantering": {
    title: "Automatisk orderhantering",
    description:
      "Från inkommande order till planerad körning — AI läser mail, PDF och EDI, skapar uppdrag och tilldelar fordon automatiskt.",
  },
  "rapport-och-analys": {
    title: "Rapport & analys",
    description:
      "Tio analysvyer med 50+ nyckeltal direkt i planeringsgränssnittet — utan separat BI-verktyg.",
  },
};

export default function RelatedSolutions({
  slugs,
  heading = "Relaterade lösningar",
}: {
  slugs: SolutionSlug[];
  heading?: string;
}) {
  return (
    <aside
      aria-label={heading}
      className="mt-16 pt-10 border-t border-gray-200"
    >
      <h2 className="text-xl font-medium mb-6">{heading}</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {slugs.map((slug) => {
          const solution = SOLUTIONS[slug];
          return (
            <Link
              key={slug}
              href={`/losningar/${slug}`}
              className="group block rounded-2xl border border-gray-200 p-5 hover:border-gray-300 hover:shadow-sm transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="font-medium text-sm mb-1.5">
                    {solution.title}
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {solution.description}
                  </p>
                </div>
                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="text-gray-400 shrink-0 mt-1 group-hover:translate-x-0.5 transition-transform"
                />
              </div>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
