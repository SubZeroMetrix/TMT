import Link from "next/link";

type BrandMarkProps = {
  size?: number;
  className?: string;
};

/** Clean SVG TMT emblem — no PNG black box. */
export function BrandMark({ size = 48, className = "" }: BrandMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="tmtRing" x1="12" y1="8" x2="84" y2="88" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E8EEF5" />
          <stop offset="0.45" stopColor="#94A3B8" />
          <stop offset="1" stopColor="#64748B" />
        </linearGradient>
        <linearGradient id="tmtBlue" x1="28" y1="20" x2="68" y2="76" gradientUnits="userSpaceOnUse">
          <stop stopColor="#60A5FA" />
          <stop offset="1" stopColor="#2563EB" />
        </linearGradient>
        <linearGradient id="tmtMetal" x1="30" y1="28" x2="66" y2="70" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F8FAFC" />
          <stop offset="0.5" stopColor="#CBD5E1" />
          <stop offset="1" stopColor="#94A3B8" />
        </linearGradient>
      </defs>

      {/* Outer ring */}
      <circle cx="48" cy="48" r="44" stroke="url(#tmtRing)" strokeWidth="4" fill="#071426" />
      {/* Inner navy ring */}
      <circle cx="48" cy="48" r="37" stroke="#1E4FCB" strokeWidth="3.5" fill="#0B1F3A" />
      {/* Rivets */}
      <circle cx="48" cy="8" r="2.2" fill="#CBD5E1" />
      <circle cx="48" cy="88" r="2.2" fill="#CBD5E1" />
      <circle cx="8" cy="48" r="2.2" fill="#CBD5E1" />
      <circle cx="88" cy="48" r="2.2" fill="#CBD5E1" />

      {/* Top accent bar */}
      <path d="M34 28h28l-3 4H37l-3-4z" fill="url(#tmtBlue)" />

      {/* TMT letters */}
      <path
        d="M26 36h10v3.2H32.2V58H29.8V39.2H26V36zm14 0h5.2l4.4 14.8L54 36h5.2v22h-3.4V42.4L51.4 58h-3.6L43.4 42.4V58H40V36zm22.5 0H72v3.2h-3.8V58h-2.4V39.2H62.5V36z"
        fill="url(#tmtMetal)"
      />

      {/* Gear arc + wrench hint */}
      <path
        d="M30 68c3.5 6.5 10.2 11 18 11s14.5-4.5 18-11"
        stroke="url(#tmtRing)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M44 70h8l1.5 3.5h-2l1 4h-9l1-4h-2L44 70z"
        fill="url(#tmtMetal)"
      />
    </svg>
  );
}

type BrandLogoProps = {
  variant?: "header" | "footer";
  scrolled?: boolean;
  className?: string;
};

/**
 * Header: mark only (name sits centered in the header bar).
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
        className={`inline-flex items-center gap-4 shrink-0 ${className}`}
        aria-label="The Modern Trades Mentor LLC home"
      >
        <BrandMark size={72} />
        <span className="leading-none">
          <span className="block text-[10px] font-semibold tracking-[0.2em] text-steel-light uppercase">
            The
          </span>
          <span className="block font-display font-bold text-white text-xl tracking-tight">
            MODERN
          </span>
          <span className="block font-display font-semibold text-blue-light text-sm tracking-wide">
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
      <BrandMark size={scrolled ? 44 : 52} />
    </Link>
  );
}
