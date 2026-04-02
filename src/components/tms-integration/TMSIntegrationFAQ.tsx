"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Behöver vi byta TMS-system?",
    a: "Nej. Vår automation byggs ovanpå ert befintliga TMS — oavsett om ni använder Opter, AddSecure, Hogia, Barkfors eller ett egenutvecklat system. Ni behöver inte byta, migrera eller stänga ner något.",
  },
  {
    q: "Hur lång tid tar en integration?",
    a: "En typisk integration tar 2–4 veckor. Vi börjar med att kartlägga era arbetsflöden, konfigurerar anslutningen och testar i en sandboxmiljö innan vi går live. Ni kan använda ert TMS som vanligt under hela processen.",
  },
  {
    q: "Vad händer om vi byter TMS i framtiden?",
    a: "Vår automation är systemoberoende. Om ni byter TMS anpassar vi integrationen till ert nya system. Ni behåller alla konfigurationer, regler och optimeringar.",
  },
  {
    q: "Har ni stöd för realtidssynkronisering?",
    a: "Ja. Ordrar, fordonspositioner och statusuppdateringar synkas i realtid via API eller webhooks. Inga manuella exporter eller importer behövs.",
  },
  {
    q: "Kan ni integrera med system som saknar API eller inte ger ut det?",
    a: "Ja. Vissa TMS-leverantörer har API:er men delar inte åtkomst med tredjeparter, andra saknar API helt. Vi kringgår det via databasanslutningar, filimport (CSV, XML, EDI) eller skärmautomation. Vi har gjort det förut och hittar alltid en väg in — oavsett hur låst systemet verkar.",
  },
  {
    q: "Vem ansvarar för driften av integrationen?",
    a: "Vi övervakar integrationen löpande och hanterar eventuella avbrott eller uppdateringar. Ni kontaktar oss direkt om något behöver justeras — ni behöver inte ha egen IT-personal för detta.",
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

export default function TMSIntegrationFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gray-50">
      <FAQJsonLd />
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium tracking-tight">
            Vanliga frågor om TMS-integration
          </h2>
          <p className="mt-4 text-gray-500">
            Svar på det åkerier oftast undrar om vår integrationslösning.
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
