"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Behöver vi ett separat BI-verktyg?",
    a: "Nej. Alla rapporter och analyser är inbyggda direkt i planeringsgränssnittet. Trafikledaren behöver aldrig lämna systemet för att se statistik — allt finns i samma vy där planeringen sker.",
  },
  {
    q: "Kan vi exportera datan till Excel?",
    a: "Ja. Med ett klick exporteras all statistik som en komplett Excel-fil med tio flikar — översikt, alla pass, ekipage, fyllnad, arbetstid, ut/in, retur, linjer, destinationer och multitrip. Perfekt för ledningsrapporter och budgetunderlag.",
  },
  {
    q: "Hur snabbt genereras statistiken?",
    a: "Statistiken genereras i realtid, i samma ögonblick som planen optimeras. Det innebär att trafikledaren kan agera direkt — justera fyllnad, omfördela returgods eller flytta ordrar innan bilarna lämnar terminalen.",
  },
  {
    q: "Vilka nyckeltal ingår?",
    a: "Systemet visar över 50 nyckeltal fördelade på tio vyer: fyllnadsgrad ut och in, arbetstidsutnyttjande, övertidsvarningar, returandel, linjeprestation, ekipageanvändning, destinationsfrekvens, multitrip-utnyttjande och orderstatus.",
  },
  {
    q: "Kan vi jämföra data mellan olika dagar?",
    a: "Ja. Systemet hanterar flera dagar simultant. Ni kan ladda in orderunderlag för olika datum, optimera varje dag separat och jämföra statistik dag för dag — fyllnad, returandel, arbetstid och mer.",
  },
  {
    q: "Flaggar systemet problem automatiskt?",
    a: "Ja. Systemet genererar automatiska varningar: övertid, låg fyllnad (under 50%), shipment-konflikter, dubblettordrar och pickup-deadline-risker. Varje varning är klickbar och leder direkt till det berörda passet.",
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

export default function RapportAnalysFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gray-50">
      <FAQJsonLd />
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium tracking-tight">
            Vanliga frågor om rapport och analys
          </h2>
          <p className="mt-4 text-gray-500">
            Svar på det transportbolag oftast undrar om realtidsstatistik och
            analysverktyg.
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
