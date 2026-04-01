import Link from "next/link";
import { Mail, MapPin, ArrowRight } from "lucide-react";

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
              {[
                { icon: Mail, label: "E-post", value: "hugo@nogomedia.se" },
                { icon: MapPin, label: "Plats", value: "Norrköping, Sverige" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center shrink-0">
                    <item.icon size={18} className="text-gray-500" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">{item.label}</div>
                    <div className="font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
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
          <div>
            <form className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h2 className="text-xl font-medium mb-6">
                Beskriv er situation
              </h2>
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-2">Namn</label>
                  <input
                    type="text"
                    placeholder="Ert namn"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-gray-400 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Företag
                  </label>
                  <input
                    type="text"
                    placeholder="Företagsnamn"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-gray-400 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    E-post
                  </label>
                  <input
                    type="email"
                    placeholder="er@email.se"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-gray-400 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Antal fordon
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-gray-400 bg-white text-gray-500">
                    <option>Välj antal</option>
                    <option>5–10 fordon</option>
                    <option>10–25 fordon</option>
                    <option>25–50 fordon</option>
                    <option>50–100 fordon</option>
                    <option>100+ fordon</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Beskriv kort vad ni vill lösa
                  </label>
                  <textarea
                    placeholder="T.ex. Vi vill effektivisera orderhanteringen..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-gray-400 bg-white resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-black text-white px-6 py-3.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  Skicka förfrågan
                  <ArrowRight size={16} />
                </button>
                <p className="text-xs text-gray-400 text-center">
                  Vi svarar inom 24 timmar. Ingen bindning.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
