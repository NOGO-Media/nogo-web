import Image from "next/image";

export default function Logo({
  className = "h-8",
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  return (
    <Image
      src={variant === "light" ? "/logo-white.png" : "/logo.png"}
      alt="NOGO"
      width={300}
      height={64}
      sizes="150px"
      className={`${className} w-auto`}
      priority
    />
  );
}
