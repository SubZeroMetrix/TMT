import Script from "next/script";

/**
 * Booking calendar embed.
 *
 * Handles the two providers TMT has used, because the embed contract differs
 * and getting it wrong silently produces a blank box rather than an error:
 *
 *  - **Go High Level** (`api.leadconnectorhq.com/widget/booking/<id>`)
 *    Needs `form_embed.js` to auto-resize the iframe, an element `id` that
 *    matches the widget id, `allow="payment"`, and `scrolling="no"`. Without
 *    the script the iframe keeps a fixed height and the calendar gets clipped.
 *
 *  - **Google Calendar appointment schedules**
 *    The plain share URL sends `X-Frame-Options: SAMEORIGIN` and cannot be
 *    framed at all. The embeddable variant requires `?gv=true`.
 *
 * Anything else is embedded as a plain iframe.
 */

type Provider = "ghl" | "google" | "other";

function detect(url: string): Provider {
  if (url.includes("leadconnectorhq.com")) return "ghl";
  if (url.includes("calendar.google.com") || url.includes("calendar.app.google"))
    return "google";
  return "other";
}

/** The widget id GHL's resize script keys off — the last path segment. */
function ghlWidgetId(url: string) {
  return url.split("?")[0].replace(/\/$/, "").split("/").pop() ?? "booking";
}

export default function BookingEmbed({
  url,
  title = "Schedule an onsite shop visit",
}: {
  url: string;
  title?: string;
}) {
  const provider = detect(url);

  if (provider === "ghl") {
    const id = ghlWidgetId(url);
    return (
      <>
        <iframe
          src={url}
          id={id}
          title={title}
          allow="payment"
          scrolling="no"
          className="w-full min-h-[700px] border-0 overflow-hidden"
        />
        <Script
          src="https://api.leadconnectorhq.com/js/form_embed.js"
          strategy="lazyOnload"
        />
      </>
    );
  }

  const src =
    provider === "google"
      ? `${url}${url.includes("?") ? "&" : "?"}gv=true`
      : url;

  return (
    <iframe
      src={src}
      title={title}
      className="w-full min-h-[560px] h-[640px] border-0"
      loading="lazy"
      allow="clipboard-write"
    />
  );
}
