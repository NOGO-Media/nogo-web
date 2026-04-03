import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Allmänna villkor",
  alternates: { canonical: "/villkor" },
};

export default function VillkorPage() {
  return (
    <section className="pt-32 pb-24 md:pt-44">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.1]">
          Allmänna villkor
        </h1>
        <p className="mt-6 text-lg text-gray-500 leading-relaxed">
          Allmänna villkor för NOGO Media AB:s tjänster. Kontakta oss på
          hugo@nogomedia.se för frågor.
        </p>
      </div>
    </section>
  );
}
