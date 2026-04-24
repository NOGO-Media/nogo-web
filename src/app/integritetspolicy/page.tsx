import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integritetspolicy",
  description:
    "Vi behandlar era personuppgifter enligt GDPR. Kontakta hugo@nogomedia.se om ni har frågor om er data.",
  alternates: { canonical: "/integritetspolicy" },
  openGraph: {
    title: "Integritetspolicy | NOGO Media",
    description:
      "Vi behandlar era personuppgifter enligt GDPR. Kontakta hugo@nogomedia.se om ni har frågor om er data.",
    url: "/integritetspolicy",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "NOGO Media — Integritetspolicy" }],
  },
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
