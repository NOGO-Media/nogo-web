import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integritetspolicy",
  alternates: { canonical: "/integritetspolicy" },
};

export default function IntegritetspolicyPage() {
  return (
    <section className="pt-32 pb-24 md:pt-44">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.1]">
          Integritetspolicy
        </h1>
        <p className="mt-6 text-lg text-gray-500 leading-relaxed">
          Vi behandlar era personuppgifter i enlighet med GDPR. Kontakta oss på
          hugo@nogomedia.se för frågor om er data.
        </p>
      </div>
    </section>
  );
}
