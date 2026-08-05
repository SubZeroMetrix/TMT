import Link from "next/link";
import Image from "next/image";

type BrandLogoProps = {
  variant?: "header" | "footer";
  scrolled?: boolean;
  className?: string;
};

/** Full TMT lockup — fills header height, no cropped empty circle. */
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
        src="/logo.png"
        alt="The Modern Trades Mentor LLC"
        width={isFooter ? 280 : 320}
        height={isFooter ? 280 : 320}
        className={
          isFooter
            ? "h-28 w-auto object-contain"
            : scrolled
              ? "h-14 sm:h-16 w-auto object-contain"
              : "h-16 sm:h-20 md:h-[5.5rem] w-auto object-contain"
        }
        priority
      />
    </Link>
  );
}
