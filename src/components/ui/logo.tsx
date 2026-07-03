import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  logoSrc?: string;
  className?: string;
  dark?: boolean;
}

export function Logo({ logoSrc, className, dark }: LogoProps) {
  const textClass = cn(
    "font-serif text-xl tracking-wider",
    dark ? "text-ivory" : "text-charcoal",
    className,
  );

  return (
    <Link href="/" className={textClass}>
      {logoSrc ? (
        <img src={logoSrc} alt="Meru Slopes Hotel" className="h-10 w-auto object-contain" />
      ) : (
        "Meru Slopes"
      )}
    </Link>
  );
}
