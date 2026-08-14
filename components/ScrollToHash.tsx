"use client";

import { useEffect } from "react";

/**
 * Next.js App Router's built-in hash scroll is unreliable on first load of
 * this page — the target section renders after the initial scroll attempt,
 * so links like `/book-a-strategy-call#schedule` land at the top instead of
 * the calendar. Retry until the element exists.
 */
export default function ScrollToHash() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    // Next.js's own scroll-restoration runs after hydration and can undo an
    // immediate scrollIntoView, so keep re-asserting position for a beat
    // instead of scrolling once and trusting it to stick.
    const el = document.querySelector(hash);
    if (!el) return;

    const timers = [50, 150, 300, 600, 1000].map((delay) =>
      setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return null;
}
