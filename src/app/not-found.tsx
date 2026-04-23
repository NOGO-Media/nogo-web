import Link from "next/link";
import { ArrowRight } from "lucide-react";

const popular = [
  { label: "Lösningar", href: "/losningar" },
  { label: "Trafikledning", href: "/losningar/trafikledning" },
  { label: "Ruttoptimering", href: "/losningar/ruttoptimering" },
  { label: "TMS-integration", href: "/losningar/tms-integration" },
  { label: "Blogg", href: "/blogg" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center text-center px-6 pt-32 pb-24">
      <p className="text-sm font-medium text-gray-400 mb-4">404</p>
      <h1 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.15] max-w-2xl">
        Sidan hittades inte.
      </h1>
      <p className="mt-5 text-lg text-gray-500 max-w-md">
        Länken kan vara gammal eller felstavad. Nedan finns några sidor som
        ofta besöks.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-2 max-w-xl">
        {popular.map((p) => (
          <Link
            key={p.href}
            href={p.href}
            className="inline-flex items-center gap-1.5 text-sm bg-gray-50 border border-gray-200 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            {p.label}
          </Link>
        ))}
      </div>

      <Link
        href="/"
        className="mt-10 inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
      >
        Tillbaka till startsidan <ArrowRight size={14} />
      </Link>
    </main>
  );
}
