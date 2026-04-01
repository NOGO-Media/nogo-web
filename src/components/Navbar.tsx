"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Lösningar", href: "/losningar" },
  { name: "Blogg", href: "/blogg" },
  { name: "Om oss", href: "/om-oss" },
  { name: "Kontakt", href: "/kontakt" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <svg viewBox="0 0 140 40" className="h-8 text-black" fill="none">
            <text
              x="0"
              y="30"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontSize="28"
              fontWeight="300"
              letterSpacing="6"
              fill="currentColor"
            >
              NOGO
            </text>
          </svg>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-gray-600 hover:text-black transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/demo"
            className="text-sm border border-gray-200 px-5 py-2.5 rounded-full hover:bg-gray-50 transition-colors"
          >
            Demo
          </Link>
          <Link
            href="/kontakt"
            className="text-sm bg-black text-white px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors"
          >
            Boka strategi-samtal
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-6 pb-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block py-3 text-gray-600 hover:text-black transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/demo"
            className="block mt-2 text-center border border-gray-200 px-5 py-2.5 rounded-full"
            onClick={() => setMobileOpen(false)}
          >
            Demo
          </Link>
          <Link
            href="/kontakt"
            className="block mt-2 text-center bg-black text-white px-5 py-2.5 rounded-full"
            onClick={() => setMobileOpen(false)}
          >
            Boka strategi-samtal
          </Link>
        </div>
      )}
    </nav>
  );
}
