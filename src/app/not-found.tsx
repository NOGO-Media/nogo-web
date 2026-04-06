import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold mb-4">404 — Sidan hittades inte</h1>
      <p className="text-lg text-gray-400 mb-8">
        Sidan du letar efter finns inte eller har flyttats.
      </p>
      <Link
        href="/"
        className="text-blue-400 hover:text-blue-300 underline"
      >
        Tillbaka till startsidan
      </Link>
    </main>
  );
}
