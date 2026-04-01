const partners = [
  "Opter",
  "Barkfors (T5)",
  "TransPA",
  "Fortnox",
  "Hogia",
  "ABAX",
  "Scania",
  "Volvo",
  "nShift",
];

export default function LogoCloud() {
  return (
    <section className="py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm text-gray-400 mb-10">
          Fungerar med de system som svenska åkerier redan använder
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {partners.map((name) => (
            <div
              key={name}
              className="text-gray-300 font-medium text-lg tracking-wide hover:text-gray-500 transition-colors select-none"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
