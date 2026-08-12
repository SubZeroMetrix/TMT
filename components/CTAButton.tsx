"use client";

import Link from "next/link";
import { track } from "@vercel/analytics/react";

/**
 * Every primary/secondary/ghost CTA reports its destination and label to
 * Vercel Analytics on click. This is the practical ceiling for a static
 * marketing site with no backend: it answers "what did prospects click,"
 * not "did the GHL booking widget or capture form actually complete" —
 * that would need a GHL webhook posting into an analytics event, which is
 * out of scope for this client-side setup. Don't oversell what this
 * tracks: intent (click), not confirmed conversion inside a third-party iframe.
 */
function trackCta(label: string, href: string) {
  track("cta_click", { label, href });
}

export function PrimaryCTA({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      onClick={() => trackCta(typeof children === "string" ? children : "PrimaryCTA", href)}
      className="group inline-flex items-center justify-center gap-2 rounded-md bg-blue px-7 py-3.5 text-sm font-semibold tracking-wide text-white shadow-cta transition-colors hover:bg-blue-hover"
    >
      <span>{children}</span>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
        className="transition-transform group-hover:translate-x-1"
      >
        <path
          d="M2 8h11M9 4l4 4-4 4"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}

export function SecondaryCTA({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      onClick={() => trackCta(typeof children === "string" ? children : "SecondaryCTA", href)}
      className="inline-flex items-center justify-center rounded-md border border-slate-muted bg-transparent px-7 py-3.5 text-sm font-semibold tracking-wide text-white transition-colors hover:border-blue-light hover:bg-white/10"
    >
      {children}
    </Link>
  );
}

export function GhostCTA({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      onClick={() => trackCta(typeof children === "string" ? children : "GhostCTA", href)}
      className="inline-flex items-center justify-center rounded-md bg-blue px-7 py-3.5 text-sm font-semibold tracking-wide text-white shadow-cta transition-colors hover:bg-blue-hover"
    >
      {children}
    </Link>
  );
}
