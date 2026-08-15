"use client";

import Link from "next/link";
import { track } from "@vercel/analytics/react";

export default function MobileStickyCTA() {
  return (
    <div className="xl:hidden fixed bottom-0 inset-x-0 z-40 border-t border-border-light bg-white px-4 py-3 flex gap-3 [padding-bottom:calc(0.75rem+env(safe-area-inset-bottom))]">
      <a
        href="tel:+17276003425"
        aria-label="Call 727-600-3425"
        className="inline-flex items-center justify-center rounded-md border border-steel bg-white px-4 py-3 text-navy"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path
            d="M4 3h3l1.5 4L6.5 8.5a9 9 0 006 6L14 12.5l4 1.5v3a2 2 0 01-2 2C8.5 19 1 11.5 1 5a2 2 0 012-2z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      </a>
      <Link
        href="/book-a-strategy-call#schedule"
        onClick={() => track("cta_click", { label: "Book a Strategy Call", href: "/book-a-strategy-call#schedule", location: "mobile_sticky" })}
        className="flex-1 inline-flex items-center justify-center rounded-md bg-blue px-5 py-3 text-sm font-semibold text-white shadow-cta hover:bg-blue-hover"
      >
        Book a Strategy Call
      </Link>
    </div>
  );
}
