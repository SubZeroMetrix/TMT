"use client";

import { useEffect } from "react";
import { captureAttribution } from "@/lib/attribution";

/**
 * Fires once per page load. See lib/attribution.ts for what this captures
 * and why — first-touch persists across the whole visitor lifetime,
 * current-touch resets per session.
 */
export default function AttributionCapture() {
  useEffect(() => {
    captureAttribution();
  }, []);
  return null;
}
