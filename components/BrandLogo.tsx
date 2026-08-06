import Link from "next/link";
import Image from "next/image";

type BrandLogoProps = {
  variant?: "header" | "footer";
  scrolled?: boolean;
  className?: string;
};

/** Horizontal TMT banner lockup for header / footer. */
export default function BrandLogo({
  variant = "header",
  scrolled = false,
  className = "",
}: BrandLogoProps) {
  const isFooter = variant === "footer";

  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center ${className}`}
      aria-label="The Modern Trades Mentor LLC home"
    >
      <Image
        src="/logo-banner.png"
        alt="The Modern Trades Mentor LLC"
        width={640}
        height={240}
        className={
          isFooter
            ? "h-20 sm:h-24 w-auto max-w-[280px] sm:max-w-[360px] object-contain object-left"
            : scrolled
              ? "h-12 sm:h-14 w-auto max-w-[220px] sm:max-w-[300px] object-contain object-left"
              : "h-14 sm:h-16 md:h-[4.75rem] w-auto max-w-[260px] sm:max-w-[380px] md:max-w-[440px] object-contain object-left"
        }
        priority
      />
    </Link>
  );
}
