// CSS/SVG-only industrial visual: blueprint grid + duct/schematic line art.
// Not a photograph — used because no licensed authentic workshop photo
// exists in the repository yet. Replace with an approved photo via the
// `founderImage`/background admin slot when one is supplied.
export default function IndustrialBackdrop() {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 h-full w-full opacity-[0.16]"
      viewBox="0 0 600 800"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" fill="none" stroke="#B9C2CE" strokeWidth="0.75" />
        </pattern>
      </defs>
      <rect width="600" height="800" fill="url(#grid)" />
      {/* Ductwork / schematic line detail */}
      <path
        d="M-20 620 H180 a20 20 0 0 0 20 -20 V420 a20 20 0 0 1 20 -20 H420"
        fill="none"
        stroke="#2C6BFF"
        strokeWidth="3"
      />
      <circle cx="420" cy="400" r="10" fill="none" stroke="#2C6BFF" strokeWidth="3" />
      <path d="M100 120 H320 V260 H520" fill="none" stroke="#B9C2CE" strokeWidth="2" />
      <circle cx="320" cy="120" r="6" fill="#B9C2CE" />
      <circle cx="520" cy="260" r="6" fill="#B9C2CE" />
      <path d="M60 700 L60 780 M60 740 L140 740" stroke="#B9C2CE" strokeWidth="2" />
    </svg>
  );
}
