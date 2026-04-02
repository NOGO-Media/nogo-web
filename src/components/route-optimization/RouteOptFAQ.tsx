"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Fungerar ruttoptimeringen med vårt befintliga TMS?",
    a: "Ja. Vi integrerar direkt med Opter, AddSecure, Hogia, Barkfors och andra vanliga TMS-system i Sverige. Ni behöver inte byta system — automationen läser ordrar och levererar optimerade rutter tillbaka till ert befintliga arbetsflöde.",
  },
  {
    q: "Hur hanteras ADR-transporter vid ruttoptimering?",
    a: "Automationen tar full hänsyn till ADR-klassificering, tunnelkoder och samlastregler. Rutter planeras så att farligt gods hanteras korrekt — inklusive vilka fordon som får köra vilka klasser och vilka vägar som är tillåtna.",
  },
  {
    q: "Hur lång tid tar det att implementera ruttoptimeringen?",
    a: "En typisk implementation tar 2–4 veckor. Vi börjar med ett avgränsat flöde — ofta en depå eller ett specifikt uppdragsslag — mäter resultat och skalar därifrån.",
  },
  {
    q: "Vad händer om förutsättningarna ändras under dagen?",
    a: "Automationen kan köras om i realtid. Om en order läggs till, ett fordon faller bort eller ett tidsfönster ändras kan ni köra en ny optimering som tar hänsyn till det uppdaterade läget — på under två minuter.",
  },
  {
    q: "Kan vi köra optimering flera gånger per dag?",
    a: "Ja, obegränsat antal gånger. Många åkerier kör en grundoptimering på morgonen och sedan löpande omoptimeringar under dagen när nya ordrar kommer in eller förutsättningar ändras.",
  },
  {
    q: "Tar optimeringen hänsyn till kör- och vilotider?",
    a: "Absolut. Rutter planeras med hänsyn till EU:s kör- och vilotidsregler. Automationen säkerställer att inga fordon överskrider maximal körtid och att pauser schemaläggs korrekt.",
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

export default function RouteOptFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gray-50">
      <FAQJsonLd />
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium tracking-tight">
            Vanliga frågor om ruttoptimering
          </h2>
          <p className="mt-4 text-gray-500">
            Svar på de vanligaste frågorna om vår AI-drivna ruttoptimering.
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
