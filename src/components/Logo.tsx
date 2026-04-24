import Image from "next/image";

export default function Logo({
  className = "h-8",
  variant = "dark",
  priority = false,
}: {
  className?: string;
  variant?: "dark" | "light";
  priority?: boolean;
}) {
  return (
    <Image
      src={variant === "light" ? "/logo-white.png" : "/logo.png"}
      alt="NOGO Media — AI-automation för svenska åkerier"
      width={150}
      height={32}
      sizes="150px"
      className={`${className} w-auto`}
      priority={priority}
    />
  );
}
