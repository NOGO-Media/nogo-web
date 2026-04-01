import { Star } from "lucide-react";

export default function SocialProof() {
  return (
    <section className="py-20 md:py-28 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm font-medium text-gray-400 mb-4">
          Betrott av transportledare
        </p>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-12">
          Älskad av de som lever trafikledning.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              quote:
                "Vi sparade 3 timmar per dag på orderhantering redan första veckan. Våra trafikledare kan äntligen fokusera på det som kräver deras erfarenhet.",
              author: "Trafikledare",
              company: "Åkeri i Östergötland, 35 fordon",
            },
            {
              quote:
                "Det bästa var att vi inte behövde byta från Opter. Allt fungerar i vårt befintliga system, men nu gör automationen det tunga lyftet.",
              author: "Åkeriägare",
              company: "Transportbolag i Göteborg, 20 fordon",
            },
            {
              quote:
                "ROI:n var tydlig efter 30 dagar. Minskat med 40% tomkörningar och hela teamet har bättre överblick.",
              author: "Transportchef",
              company: "Speditionsföretag i Stockholm, 60 fordon",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-2xl p-8 text-left border border-transparent hover:border-gray-200 transition-colors"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="fill-black text-black" />
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div>
                <div className="text-sm font-medium">{item.author}</div>
                <div className="text-xs text-gray-500">{item.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
