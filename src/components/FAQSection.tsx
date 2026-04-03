"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Behöver vi byta TMS-system?",
    a: "Nej. Vår automation byggs ovanpå ert befintliga system — oavsett om ni använder Opter, AddSecure, Hogia, Barkfors eller ett eget system. Ni behöver inte byta något.",
  },
  {
    q: "Hur många fordon behöver vi ha?",
    a: "Vi jobbar med allt från mindre åkerier med ett fåtal fordon till stora flottor med hundratals ekipage. Vår automation skalas efter era behov — oavsett storlek.",
  },
  {
    q: "Kan automationen hantera ADR-transporter?",
    a: "Ja. Automationen tar hänsyn till ADR-krav, viktklass, utrustning och alla andra regler ni definierar. Era regler, er automation.",
  },
  {
    q: "Hur lång tid tar det att komma igång?",
    a: "En typisk implementation tar 2–4 veckor. Vi börjar med ett avgränsat flöde, mäter resultat och skalar därifrån.",
  },
  {
    q: "Vad händer med våra trafikledare?",
    a: "De får mer tid. Automationen hanterar det repetitiva — tilldelning, matchning, enklare ordrar. Era trafikledare kan fokusera på det som kräver erfarenhet, relationer och omdöme.",
  },
  {
    q: "Hur fungerar det med GDPR?",
    a: "All data lagras i Sverige/EU. Vi följer GDPR fullt ut och har rutiner för datahantering, radering och åtkomstkontroll. Vi kan visa er vår dataskyddspolicy.",
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

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <FAQJsonLd />
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
            Vanliga frågor
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Svar på det åkerier oftast undrar.
          </p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-200"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-medium text-sm">{faq.q}</span>
                {open === i ? (
                  <Minus size={16} className="text-gray-400 shrink-0" />
                ) : (
                  <Plus size={16} className="text-gray-400 shrink-0" />
                )}
              </button>
              <div
                className="px-6 pb-5 text-sm text-gray-500 leading-relaxed"
                hidden={open !== i}
              >
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
