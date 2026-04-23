import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-black rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 dark-grid-pattern" />

          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight">
              Redo att effektivisera er{" "}
              <span className="text-gray-400">trafikledning?</span>
            </h2>
            <p className="mt-6 text-gray-400 text-lg max-w-xl mx-auto">
              Boka ett kostnadsfritt strategisamtal. Vi visar hur automation kan
              spara tid och pengar i just ert åkeri.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-3.5 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
              >
                Boka strategi-samtal
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link
                href="/losningar"
                className="inline-flex items-center justify-center gap-2 border border-gray-700 text-gray-300 px-8 py-3.5 rounded-full text-sm font-medium hover:border-gray-500 transition-colors"
              >
                Läs mer om våra lösningar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
