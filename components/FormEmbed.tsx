import Script from "next/script";

/**
 * GHL form embed — same contract as BookingEmbed's GHL branch (widget id +
 * form_embed.js resize script), reused here for lead-capture forms instead
 * of the booking calendar.
 */
export default function FormEmbed({
  url,
  title,
}: {
  url: string;
  title: string;
}) {
  const id = url.split("?")[0].replace(/\/$/, "").split("/").pop() ?? "form";
  return (
    <>
      <iframe
        src={url}
        id={id}
        title={title}
        className="w-full min-h-[420px] border-0"
      />
      <Script
        src="https://api.leadconnectorhq.com/js/form_embed.js"
        strategy="lazyOnload"
      />
    </>
  );
}
