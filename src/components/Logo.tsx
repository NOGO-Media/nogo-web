import Image from "next/image";

export default function Logo({ className = "h-8" }: { className?: string }) {
  return (
    <Image
      src="/logo.svg"
      alt="NOGO"
      width={200}
      height={48}
      className={className}
      priority
    />
  );
}
