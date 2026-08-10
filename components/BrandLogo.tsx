import Image from "next/image";
import Link from "next/link";

type BrandMarkProps = {
  size?: number;
  className?: string;
  priority?: boolean;
};

/**
 * The real TMT emblem.
 *
 * Cropped from the 1024px master (`logo-full.png`) to the circular badge only,
 * transparent background, 512px source — so it stays sharp at 2x and 3x.
 *
 * Note on the other assets:
 *  - `logo-lockup.png` is the full emblem + wordmark, but the wordmark is dark
 *    navy and disappears on the navy chrome. Use it on LIGHT backgrounds only.
 *  - `logo-full.png` is the untrimmed master with large dead margins. Keep it
 *    as the source of truth; do not render it directly.
 */
export function BrandMark({
  size = 64,
  className = "",
  priority = false,
}: BrandMarkProps) {
  return (
    <Image
      src="/logo-mark.png"
      alt=""
      width={size}
      height={size}
      priority={priority}
      className={className}
      aria-hidden="true"
    />
  );
}

type BrandLogoProps = {
  variant?: "header" | "footer";
  scrolled?: boolean;
  className?: string;
};

/**
 * Header: mark only (the name sits centered in the header bar).
 * Footer: mark + wordmark stacked.
 */
export default function BrandLogo({
  variant = "header",
  scrolled = false,
  className = "",
}: BrandLogoProps) {
  if (variant === "footer") {
    return (
      <Link
        href="/"
        className={`inline-flex items-center gap-5 shrink-0 ${className}`}
        aria-label="The Modern Trades Mentor LLC home"
      >
        <BrandMark size={96} />
        <span className="leading-none">
          <span className="block text-[10px] font-semibold tracking-[0.2em] text-steel-light uppercase">
            The
          </span>
          <span className="block font-display font-bold text-white text-2xl tracking-tight">
            MODERN
          </span>
          <span className="block font-display font-semibold text-blue-light text-base tracking-wide">
            TRADES MENTOR LLC
          </span>
        </span>
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center ${className}`}
      aria-label="The Modern Trades Mentor LLC home"
    >
      <BrandMark size={scrolled ? 54 : 64} priority />
    </Link>
  );
}
