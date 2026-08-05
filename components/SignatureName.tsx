export default function SignatureName({
  children = "Richard",
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`font-signature text-blue-light inline-block leading-none ${className}`}
      style={{ fontWeight: 400 }}
    >
      {children}
    </span>
  );
}
