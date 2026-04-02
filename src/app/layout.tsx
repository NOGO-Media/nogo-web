import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
    template: "%s | NOGO Media",
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
      addressCountry: "SE",
    },
    email: "hugo@nogomedia.se",
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
    sameAs: [],
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
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
