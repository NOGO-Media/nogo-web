import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { KontaktForm } from "./KontaktForm";

export const metadata: Metadata = {
  title: "Kontakt — Boka ett kostnadsfritt strategisamtal",
  description:
    "Boka ett 30-minuters strategisamtal med NOGO Media. Vi visar hur AI-automation kan spara tid och pengar i just ert åkeri. Norrköping, Sverige.",
  alternates: { canonical: "/kontakt" },
  openGraph: {
    title: "Kontakt — Boka ett kostnadsfritt strategisamtal",
    description:
      "Boka ett 30-minuters strategisamtal med NOGO Media. Vi visar hur AI-automation kan spara tid och pengar i just ert åkeri.",
    url: "/kontakt",
  },
};

export default function KontaktPage() {
  return (
    <section className="pt-32 pb-24 md:pt-44 md:pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left — Info */}
          <div>
            <p className="text-sm font-medium text-gray-400 mb-4">Kontakt</p>
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.1]">
              Boka ett{" "}
              <span className="text-gray-400">strategi-samtal.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-500 leading-relaxed">
              30 minuter. Kostnadsfritt. Vi visar hur automation kan spara tid
              och pengar i just ert åkeri — utan att ni byter system.
            </p>

            <div className="mt-12 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-gray-500" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">E-post</div>
                  <a href="mailto:hugo@nogomedia.se" className="font-medium hover:underline">
                    hugo@nogomedia.se
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-gray-500" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Plats</div>
                  <div className="font-medium">Norrköping, Sverige</div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <h3 className="font-medium mb-2">
                Vad händer efter ni hör av er?
              </h3>
              <div className="space-y-3 text-sm text-gray-500">
                <div className="flex gap-3">
                  <span className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs shrink-0">
                    1
                  </span>
                  Vi svarar inom 24 timmar
                </div>
                <div className="flex gap-3">
                  <span className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs shrink-0">
                    2
                  </span>
                  30 min strategisamtal — vi kartlägger era flöden
                </div>
                <div className="flex gap-3">
                  <span className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs shrink-0">
                    3
                  </span>
                  Ni får ett konkret förslag med ROI-beräkning
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <KontaktForm />
        </div>
      </div>
    </section>
  );
}
