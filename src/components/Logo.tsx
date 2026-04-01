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
      width={1827}
      height={390}
      className={`${className} w-auto`}
      priority
    />
  );
}
