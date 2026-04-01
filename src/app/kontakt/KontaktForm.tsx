"use client";

import { ArrowRight } from "lucide-react";
import { type FormEvent } from "react";

const CONTACT_EMAIL = "hugo@nogomedia.se";

export function KontaktForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const namn = data.get("namn") as string;
    const foretag = data.get("foretag") as string;
    const email = data.get("email") as string;
    const fordon = data.get("fordon") as string;
    const meddelande = data.get("meddelande") as string;

    const subject = encodeURIComponent(
      `Förfrågan från ${namn || "webbsidan"}${foretag ? ` — ${foretag}` : ""}`
    );

    const bodyParts = [
      namn && `Namn: ${namn}`,
      foretag && `Företag: ${foretag}`,
      email && `E-post: ${email}`,
      fordon && fordon !== "Välj antal" && `Antal fordon: ${fordon}`,
      meddelande && `\nMeddelande:\n${meddelande}`,
    ]
      .filter(Boolean)
      .join("\n");

    const body = encodeURIComponent(bodyParts);

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
      >
        <h2 className="text-xl font-medium mb-6">Beskriv er situation</h2>
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-2">Namn</label>
            <input
              type="text"
              name="namn"
              placeholder="Ert namn"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-gray-400 bg-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Företag</label>
            <input
              type="text"
              name="foretag"
              placeholder="Företagsnamn"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-gray-400 bg-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">E-post</label>
            <input
              type="email"
              name="email"
              placeholder="er@email.se"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-gray-400 bg-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Antal fordon
            </label>
            <select
              name="fordon"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-gray-400 bg-white text-gray-500"
            >
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
              name="meddelande"
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
  );
}
