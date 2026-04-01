import Link from "next/link";
import { ArrowRight, MapPin, Target, Lightbulb } from "lucide-react";

export default function OmOssPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-44 md:pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-gray-400 mb-4">Om oss</p>
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
                <h3 className="text-lg font-medium mb-2">{value.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-medium tracking-tight mb-4">
            Vill ni veta mer?
          </h2>
          <p className="text-gray-500 mb-8">
            Vi berättar gärna mer om hur vi kan hjälpa just ert åkeri.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 bg-black text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Boka strategi-samtal <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
