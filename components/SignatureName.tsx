type SignatureNameProps = {
  children?: React.ReactNode;
  className?: string;
  /** Larger flowing signature block under a portrait */
  flourish?: boolean;
};

export default function SignatureName({
  children = "Richard",
  className = "",
  flourish = false,
}: SignatureNameProps) {
  if (flourish) {
    return (
      <span className={`inline-flex flex-col items-center ${className}`}>
        <span
          className="font-signature text-blue leading-none"
          style={{
            fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
            letterSpacing: "0.02em",
            transform: "rotate(-2deg)",
          }}
        >
          {children}
        </span>
        <svg
          className="mt-1 w-44 sm:w-56 text-blue/70"
          viewBox="0 0 220 18"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M4 12c28-10 56-12 84-6 22 5 40 8 62 3 22-5 40-9 66-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M28 15c24-4 48-5 72-2"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.45"
          />
        </svg>
      </span>
    );
  }

  return (
    <span
      className={`font-signature text-blue inline-block leading-none ${className}`}
      style={{ fontWeight: 400, letterSpacing: "0.01em" }}
    >
      {children}
    </span>
  );
}
