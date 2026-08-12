import Script from "next/script";

/**
 * Lead-capture form embed — same GHL widget-embed contract as
 * BookingEmbed.tsx, deliberately not reimplemented differently. GHL forms
 * and GHL booking calendars both need `form_embed.js` for auto-resize; an
 * element `id` matching the widget id keeps that script targeted correctly.
 *
 * The form itself is built and owned inside GoHighLevel (Sites > Forms),
 * same as the booking calendar — nothing here defines form fields or
 * validation. This component only embeds whatever form Richard builds
 * there, so a submission always lands in the same LeadConnector location
 * the booking widget already uses — never a second, disconnected list.
 */
export default function CaptureFormEmbed({
  url,
  title = "Get the Operational AI Readiness checklist",
}: {
  url: string;
  title?: string;
}) {
  const id = url.split("?")[0].replace(/\/$/, "").split("/").pop() ?? "capture-form";

  return (
    <>
      <iframe
        src={url}
        id={id}
        title={title}
        allow="payment"
        scrolling="no"
        className="w-full min-h-[420px] border-0 overflow-hidden"
      />
      <Script src="https://api.leadconnectorhq.com/js/form_embed.js" strategy="lazyOnload" />
    </>
  );
}
