"use client";

import { ArrowRight, Loader2, Check } from "lucide-react";
import { type FormEvent, useState } from "react";

export function KontaktForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    const body = {
      namn: data.get("namn") as string,
      foretag: data.get("foretag") as string,
      email: data.get("email") as string,
      fordon: data.get("fordon") as string,
      meddelande: data.get("meddelande") as string,
    };

    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 flex flex-col items-center justify-center text-center min-h-[400px]">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <Check size={24} className="text-green-600" />
        </div>
        <h2 className="text-xl font-medium mb-2">Tack för er förfrågan!</h2>
        <p className="text-gray-500">
          Vi har mottagit ert meddelande och återkommer inom 24 timmar.
        </p>
      </div>
    );
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
              required
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
            disabled={status === "loading"}
            className="w-full flex items-center justify-center gap-2 bg-black text-white px-6 py-3.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors disabled:opacity-50"
          >
            {status === "loading" ? (
              <>
                Skickar...
                <Loader2 size={16} className="animate-spin" />
              </>
            ) : (
              <>
                Skicka förfrågan
                <ArrowRight size={16} />
              </>
            )}
          </button>
          {status === "error" && (
            <p className="text-sm text-red-500 text-center">
              Något gick fel. Försök igen eller maila oss direkt.
            </p>
          )}
          <p className="text-xs text-gray-400 text-center">
            Vi svarar inom 24 timmar. Ingen bindning.
          </p>
        </div>
      </form>
    </div>
  );
}
