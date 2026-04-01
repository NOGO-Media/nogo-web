import { MessageCircle } from "lucide-react";

export default function SocialProof() {
  return (
    <section className="py-20 md:py-28 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm font-medium text-gray-400 mb-4">
          Feedback från branschen
        </p>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-12">
          Vad vi ofta får höra från bolag vi pratar med.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Vi trodde inte det här gick att automatisera hos oss.",
            "Ni förstod vår verksamhet snabbare än vi trodde.",
            "Det är imponerande att två unga killar har byggt något så träffsäkert för en så traditionell bransch.",
          ].map((quote, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-2xl p-8 text-left border border-transparent hover:border-gray-200 transition-colors"
            >
              <div className="mb-4">
                <MessageCircle size={18} className="text-gray-400" />
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                &ldquo;{quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
