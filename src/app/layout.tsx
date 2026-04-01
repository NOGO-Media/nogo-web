import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Effektivisera trafikledning & dispatch | AI-automation för åkerier | NOGO Media",
  description:
    "AI-automation som ger era trafikledare timmar tillbaka — varje dag. Ruttoptimering, orderhantering och fordonstilldelning utan att byta system. NOGO Media, Norrköping.",
  keywords: [
    "trafikledning",
    "ruttoptimering åkeri",
    "TMS-system",
    "digitalisera åkeri",
    "automatisera orderhantering transport",
    "effektivisera trafikledning",
    "AI transport Sverige",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
