import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-geist-sans",
});

const SITE_URL = "https://nogomedia.se";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AI-automation för åkerier & transport | NOGO Media",
    template: "%s | AI-automation | NOGO Media",
  },
  description:
    "AI-automation som ger era trafikledare timmar tillbaka — varje dag. Ruttoptimering, orderhantering och fordonstilldelning utan att byta system. NOGO Media, Norrköping.",
  keywords: [
    "trafikledning",
    "AI trafikledning",
    "ruttoptimering åkeri",
    "TMS-system",
    "digitalisera åkeri",
    "automatisera orderhantering transport",
    "effektivisera trafikledning",
    "AI transport Sverige",
    "dispatch automation",
    "fordonstilldelning",
    "transportplanering",
    "åkeri automation",
    "NOGO Media",
    "Norrköping",
  ],
  authors: [{ name: "NOGO Media AB", url: SITE_URL }],
  creator: "NOGO Media AB",
  publisher: "NOGO Media AB",
  formatDetection: {
    email: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "sv-SE": SITE_URL,
    },
  },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: SITE_URL,
    siteName: "NOGO Media",
    title: "AI-automation för åkerier & transport | NOGO Media",
    description:
      "AI-automation som ger era trafikledare timmar tillbaka — varje dag. Ruttoptimering, orderhantering och fordonstilldelning utan att byta system.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NOGO Media — AI-automation för svenska åkerier",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-automation för åkerier & transport | NOGO Media",
    description:
      "AI-automation som ger era trafikledare timmar tillbaka — varje dag. Ruttoptimering, orderhantering och fordonstilldelning utan att byta system.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {},
  icons: {
    icon: "/favicon.ico",
    apple: "/icon-192.png",
  },
};

function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NOGO Media AB",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    description:
      "AI-automation för svenska åkerier och transportbolag. Ruttoptimering, orderhantering och trafikledning.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Demogatan 7",
      addressLocality: "Norrköping",
      postalCode: "602 23",
      addressRegion: "Östergötland",
      addressCountry: "SE",
    },
    email: "hugo@nogomedia.se",
    contactPoint: {
      "@type": "ContactPoint",
      email: "hugo@nogomedia.se",
      contactType: "sales",
      availableLanguage: ["Swedish", "English"],
      areaServed: "SE",
    },
    foundingDate: "2024",
    founders: [
      {
        "@type": "Person",
        name: "Hugo Svensson",
      },
    ],
    areaServed: {
      "@type": "Country",
      name: "Sweden",
    },
    sameAs: [
      "https://www.linkedin.com/company/nogomedia",
    ],
    knowsAbout: [
      "AI-automation för transport",
      "Ruttoptimering",
      "Trafikledning",
      "TMS-integration",
      "Logistik-automation",
      "AI-agenter för åkerier",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function ServiceJsonLd() {
  const services = [
    {
      "@type": "Service",
      name: "AI-agenter för transport",
      description:
        "AI-agenter som automatiserar trafikledning, orderhantering och förartilldelning för svenska åkerier. Agentbaserad automation som arbetar i ert befintliga TMS.",
      provider: { "@type": "Organization", name: "NOGO Media AB" },
      serviceType: "AI Automation",
      areaServed: { "@type": "Country", name: "Sweden" },
      url: `${SITE_URL}/losningar/trafikledning`,
    },
    {
      "@type": "Service",
      name: "Logistik-automation",
      description:
        "Automatiserad ruttoptimering, fordonstilldelning och orderhantering för svenska åkerier och transportbolag. Minskar körsträckan med 23% och frigör 3+ timmar per dag.",
      provider: { "@type": "Organization", name: "NOGO Media AB" },
      serviceType: "Logistics Automation",
      areaServed: { "@type": "Country", name: "Sweden" },
      url: `${SITE_URL}/losningar/ruttoptimering`,
    },
    {
      "@type": "Service",
      name: "TMS-integration",
      description:
        "Integration av AI-automation i befintliga TMS-system som Opter, AddSecure, Hogia och Barkfors. Med eller utan API — vi integrerar via databas, filimport eller skärmautomation.",
      provider: { "@type": "Organization", name: "NOGO Media AB" },
      serviceType: "System Integration",
      areaServed: { "@type": "Country", name: "Sweden" },
      url: `${SITE_URL}/losningar/tms-integration`,
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "NOGO Media — Tjänster",
    itemListElement: services.map((service, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: service,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: "NOGO Media AB",
    url: SITE_URL,
    image: `${SITE_URL}/logo.svg`,
    description:
      "AI-automation för svenska åkerier. Vi effektiviserar trafikledning, ruttoptimering och orderhantering — utan att ni byter system.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Demogatan 7",
      addressLocality: "Norrköping",
      postalCode: "602 23",
      addressRegion: "Östergötland",
      addressCountry: "SE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 58.5942,
      longitude: 16.1826,
    },
    email: "hugo@nogomedia.se",
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    serviceArea: {
      "@type": "Country",
      name: "Sweden",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={`${inter.variable} h-full antialiased`}>
      <head>
        <OrganizationJsonLd />
        <LocalBusinessJsonLd />
        <ServiceJsonLd />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
