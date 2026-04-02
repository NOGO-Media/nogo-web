"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Vad händer med våra trafikledare?",
    a: "De får mer tid. Automationen hanterar det repetitiva — tilldelning, matchning och enklare ordrar. Era trafikledare kan fokusera på det som kräver erfarenhet: relationer med kunder, undantagshantering och de beslut som kräver omdöme.",
  },
  {
    q: "Kan automationen hantera våra specifika regler?",
    a: "Ja. Ni definierar reglerna — körkortskrav, ADR-behörighet, kundpreferenser, zonindelning, maxvikt och tidsfönster. Automationen följer dem till punkt och pricka, varje gång.",
  },
  {
    q: "Hur hanteras undantag och akuta ändringar?",
    a: "Automationen fördelar det planerade. När undantag uppstår — en förare sjukanmäler sig, en order läggs till sista minuten — flaggas det till trafikledaren som fattar beslutet. Systemet föreslår alternativ, men människan bestämmer.",
  },
  {
    q: "Fungerar det med vårt befintliga TMS?",
    a: "Ja. Vi integrerar med Opter, AddSecure, Hogia, Barkfors och andra system — med eller utan API. Ordrar läses in automatiskt och tilldelningar skickas tillbaka till ert TMS.",
  },
  {
    q: "Hur snabbt ser vi resultat?",
    a: "De flesta åkerier ser mätbar tidsbesparing inom första veckan efter go live. Implementation tar 2–4 veckor, och vi börjar med ett avgränsat flöde för att verifiera resultaten.",
  },
  {
    q: "Kan vi styra vilka ordrar som tilldelas automatiskt?",
    a: "Ja. Ni väljer vilka ordertyper, kunder eller zoner som ska hanteras automatiskt. Resten hanteras manuellt som vanligt. Ni utökar i egen takt.",
  },
];

function FAQJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function TrafikledningFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gray-50">
      <FAQJsonLd />
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium tracking-tight">
            Vanliga frågor om automatiserad trafikledning
          </h2>
          <p className="mt-4 text-gray-500">
            Svar på det åkerier oftast undrar om automatiserad orderhantering och
            trafikledning.
          </p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-medium text-sm">{faq.q}</span>
                {open === i ? (
                  <Minus size={16} className="text-gray-400 shrink-0 ml-4" />
                ) : (
                  <Plus size={16} className="text-gray-400 shrink-0 ml-4" />
                )}
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-sm text-gray-500 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
