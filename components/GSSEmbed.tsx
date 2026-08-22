"use client";

import { useEffect, useState } from "react";
import { track } from "@vercel/analytics/react";
import { attributionQueryString } from "@/lib/attribution";
import CaptureFormEmbed from "@/components/CaptureFormEmbed";

/**
 * Client wrapper around CaptureFormEmbed for the GSS survey specifically.
 *
 * Appends the visitor's first-touch attribution as query params so GHL's
 * form_embed.js can prefill hidden fields (see lib/attribution.ts for the
 * exact field-mapping contract). Fires a `gss_view` analytics event when the
 * embed actually renders.
 *
 * `gss_completion` cannot be fired from here — that event has to come from
 * inside the survey itself (a redirect/thank-you step or a postMessage the
 * survey emits on submit), which doesn't exist until the survey is built.
 * PENDING: wire a `gss_completion` event once the GSS survey exists and its
 * completion behavior (redirect vs. postMessage) is known.
 */
export default function GSSEmbed({ url, title }: { url: string; title: string }) {
  const [fullUrl, setFullUrl] = useState(url);

  useEffect(() => {
    setFullUrl(`${url}${attributionQueryString()}`);
    track("gss_view", { url });
  }, [url]);

  return <CaptureFormEmbed url={fullUrl} title={title} />;
}
