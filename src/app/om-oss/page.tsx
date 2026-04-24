import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Target,
  Lightbulb,
  Play,
  User,
} from "lucide-react";

const SITE_URL = "https://nogomedia.se";

export const metadata: Metadata = {
  title: "Om NOGO Media — AI-automation för åkerier",
  description:
    "NOGO Media bygger AI-automation för svenska åkerier — ruttoptimering, trafikledning och TMS-integration. Grundat 2025 i Norrköping.",
  keywords: [
    "NOGO Media",
    "om oss",
    "AI-automation åkeri",
    "Norrköping",
    "transportteknik Sverige",
    "åkeri automation",
  ],
  alternates: { canonical: "/om-oss" },
  openGraph: {
    type: "website",
    title: "Om NOGO Media — AI-automation för åkerier",
    description:
      "NOGO Media bygger AI-automation för svenska åkerier. Grundat 2025 i Norrköping av team med operativ transporterfarenhet.",
    url: "/om-oss",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "NOGO Media — Om oss" }],
  },
};

function AboutPageJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Om NOGO Media",
    description:
      "NOGO Media bygger AI-automation för svenska åkerier — ruttoptimering, trafikledning och TMS-integration. Grundat 2025 i Norrköping.",
    url: `${SITE_URL}/om-oss`,
    mainEntity: {
      "@type": "Organization",
      name: "NOGO Media AB",
      url: SITE_URL,
      foundingDate: "2025",
      founders: [
        {
          "@type": "Person",
          name: "Hugo Svensson",
          jobTitle: "VD & grundare",
          email: "hugo@nogomedia.se",
          worksFor: { "@type": "Organization", name: "NOGO Media AB" },
        },
        {
          "@type": "Person",
          name: "Wille Hellström",
          jobTitle: "Medgrundare & teknik",
          email: "wille@nogomedia.se",
          worksFor: { "@type": "Organization", name: "NOGO Media AB" },
        },
      ],
      employee: [
        {
          "@type": "Person",
          name: "Jonathan Lindman",
          jobTitle: "Marknad & strategi",
          email: "jonathan@nogomedia.se",
          worksFor: { "@type": "Organization", name: "NOGO Media AB" },
        },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Norrköping",
        addressRegion: "Östergötland",
        addressCountry: "SE",
      },
      areaServed: { "@type": "Country", name: "Sweden" },
      knowsAbout: [
        "AI-automation för transport",
        "Ruttoptimering",
        "Trafikledning",
        "TMS-integration",
      ],
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function BreadcrumbJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Hem",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Om oss",
        item: `${SITE_URL}/om-oss`,
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

const team = [
  {
    name: "Hugo Svensson",
    role: "VD & grundare",
    email: "hugo@nogomedia.se",
    description:
      "Bakgrund inom både tech och operativ transport. Hugo har flerårig erfarenhet från transportbranschen och leder affärsutveckling och kundrelationer. Han förstår vardagen på ett åkeri — och vet var tekniken kan göra störst skillnad.",
  },
  {
    name: "Wille Hellström",
    role: "Medgrundare & teknik",
    email: "wille@nogomedia.se",
    description:
      "Ansvarig för plattformen och AI-automationen. Wille bygger systemen som optimerar rutter, automatiserar tilldelning och integrerar med befintliga TMS — med eller utan API.",
  },
  {
    name: "Jonathan Lindman",
    role: "Marknad & strategi",
    email: "jonathan@nogomedia.se",
    description:
      "Ansvarig för marknad och strategi. Jonathan ser till att rätt åkerier hittar NOGO och att vi växer i rätt riktning.",
  },
];

export default function OmOssPage() {
  return (
    <>
      <AboutPageJsonLd />
      <BreadcrumbJsonLd />

      {/* Hero */}
      <section className="pt-32 pb-8 md:pt-44 md:pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-gray-500 mb-4">Om oss</p>
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.1]">
              Vi bygger verktyg för de som{" "}
              <span className="text-gray-400">håller Sverige rullande.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-500 leading-relaxed max-w-2xl">
              NOGO Media är ett teknikbolag i Norrköping som bygger
              AI-automation för svenska åkerier och transportbolag. Vi tror att
              den bästa tekniken inte ersätter människor — den ger dem mer tid
              att göra det de är bra på.
            </p>
          </div>
        </div>
      </section>

      {/* Key takeaway — AI snippet optimized */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <aside className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 max-w-3xl">
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
              Sammanfattning
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>NOGO Media AB</strong> är ett svenskt teknikbolag grundat
              2025 i Norrköping. Vi bygger AI-automation som hjälper åkerier att
              optimera rutter, automatisera trafikledning och integrera
              befintliga TMS-system — utan att byta plattform.
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-gray-600">
              <li>Grundat 2025 i Norrköping av team med transporterfarenhet</li>
              <li>
                AI-automation:{" "}
                <Link href="/losningar/ruttoptimering" className="underline">
                  ruttoptimering
                </Link>
                ,{" "}
                <Link href="/losningar/trafikledning" className="underline">
                  trafikledning
                </Link>
                ,{" "}
                <Link href="/losningar/tms-integration" className="underline">
                  TMS-integration
                </Link>
              </li>
              <li>Arbetar med åkerier i hela Sverige</li>
              <li>Ingen systemmigration krävs</li>
            </ul>
          </aside>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Problem-first",
                description:
                  "Vi börjar alltid med ert problem, inte med vår teknik. Automation ska lösa faktiska flaskhalsar — inte vara teknik för teknikens skull.",
              },
              {
                icon: Lightbulb,
                title: "Branschförståelse",
                description:
                  "Vi förstår skillnaden mellan en trafikledare och en dispatcher. Vi vet vad ADR-transporter innebär. Vi pratar ert språk.",
              },
              {
                icon: MapPin,
                title: "Lokal närvaro",
                description:
                  "Baserade i Norrköping, jobbar med åkerier i hela Sverige. Ni pratar med människor som förstår er bransch och era utmaningar.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="p-8 rounded-2xl bg-white border border-gray-100"
              >
                <div className="w-10 h-10 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-center mb-5">
                  <value.icon size={20} className="text-gray-700" />
                </div>
                <h2 className="text-lg font-medium mb-2">{value.title}</h2>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why we exist */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-medium mb-6">Varför vi finns</h2>
          <div className="space-y-4 text-gray-500 leading-relaxed">
            <p>
              Svenska åkerier opererar med 1–2% vinstmarginal. 19% av alla
              lastbilskilometer körs tomma. Trafikledare lägger timmar på
              uppgifter som kan automatiseras. Samtidigt blir det allt svårare
              att rekrytera erfarna trafikledare.
            </p>
            <p>
              Vi startade NOGO Media för att vi såg att tekniken finns — men
              att den inte nådde de som behöver den mest. De stora
              systemleverantörerna bygger generiska plattformar. Vi bygger
              specifik automation för svenska transportflöden.
            </p>
            <p>
              Vår filosofi är enkel: ni ska inte behöva byta system, lära om
              hela organisationen eller investera miljoner. Vi bygger
              automation som arbetar i det ni redan har — och som ger mätbar
              effekt inom veckor.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="text-2xl font-medium mb-4">Teamet bakom NOGO</h2>
            <p className="text-gray-500 leading-relaxed">
              Ett litet team med bakgrund inom transport och tech. Vi bygger det
              vi själva hade velat ha — praktisk automation utan onödig
              komplexitet.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="p-8 rounded-2xl bg-white border border-gray-100 flex flex-col"
              >
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-5">
                  <User size={20} className="text-gray-500" />
                </div>
                <h3 className="text-lg font-medium">{member.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{member.role}</p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {member.description}
                </p>
                <a
                  href={`mailto:${member.email}`}
                  className="mt-auto pt-4 text-xs text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {member.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "10 000+", label: "Åkeriföretag i Sverige" },
              { value: "19%", label: "Tomkörning (branschsnitt)" },
              { value: "1–2%", label: "Typisk vinstmarginal" },
              { value: "60–70%", label: "Minskad manuell tid" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-semibold">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geo section */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-medium mb-6">
            Baserade i Norrköping — aktiva i hela Sverige
          </h2>
          <div className="space-y-4 text-gray-500 leading-relaxed">
            <p>
              NOGO Media har sitt säte i Norrköping, Östergötland. Härifrån
              arbetar vi med åkerier i hela Sverige — från Malmö i söder till
              Luleå i norr. Vår närvaro i Norrköping ger oss närhet till en av
              Sveriges viktigaste logistikkorridorer, men vår automation är
              byggd för att fungera oavsett var i landet ni befinner er.
            </p>
            <p>
              Vi träffar gärna er på plats, men majoriteten av våra
              implementationer sker digitalt. Från kartläggning till go live
              — ni behöver inte resa till oss.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-medium tracking-tight mb-4">
            Vill ni veta mer?
          </h2>
          <p className="text-gray-500 mb-8">
            Vi berättar gärna mer om hur vi kan hjälpa just ert åkeri. Boka
            ett kostnadsfritt strategisamtal — eller utforska våra lösningar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Boka strategi-samtal <ArrowRight size={16} />
            </Link>
            <Link
              href="/losningar"
              className="inline-flex items-center justify-center gap-2 border border-gray-200 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-white transition-colors"
            >
              <Play size={14} />
              Se våra lösningar
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
