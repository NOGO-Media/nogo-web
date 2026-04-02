import Link from "next/link";
import Logo from "./Logo";

const footerLinks = {
  Lösningar: [
    { name: "Ruttoptimering", href: "/losningar/ruttoptimering" },
    { name: "TMS-integration", href: "/losningar/tms-integration" },
    { name: "Trafikledning", href: "/losningar/trafikledning" },
    { name: "Orderhantering", href: "/losningar" },
  ],
  Resurser: [
    { name: "Blogg", href: "/blogg" },
    { name: "Vanliga frågor", href: "/#faq" },
    { name: "Kundcase", href: "/losningar" },
  ],
  Företag: [
    { name: "Om oss", href: "/om-oss" },
    { name: "Kontakt", href: "/kontakt" },
    { name: "Karriär", href: "/kontakt" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 pb-12 border-b border-gray-800">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <Logo className="h-7" variant="light" />
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              AI-automation för svenska åkerier och transportbolag. Vi
              effektiviserar trafikledning utan att ni byter system.
            </p>
            <div className="mt-6 text-sm">
              <div>NOGO Media AB</div>
              <div>Norrköping, Sverige</div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p className="text-white text-sm font-medium mb-4">{title}</p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <div>&copy; {new Date().getFullYear()} NOGO Media AB. Alla rättigheter reserverade.</div>
          <div className="flex gap-6">
            <Link href="/kontakt" className="hover:text-white">
              Integritetspolicy
            </Link>
            <Link href="/kontakt" className="hover:text-white">
              Villkor
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
