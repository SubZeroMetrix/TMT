"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { track } from "@vercel/analytics/react";
import { header as content } from "@/lib/content";
import BrandLogo from "@/components/BrandLogo";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div
        className={`border-b border-white/10 bg-navy-deep transition-[padding] duration-200 ${
          scrolled ? "py-2" : "py-3"
        }`}
      >
        <div className="relative mx-auto max-w-container px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 min-h-[3.5rem]">
          {/* Corner mark */}
          <div className="relative z-10 shrink-0">
            <BrandLogo scrolled={scrolled} />
          </div>

          {/* Centered company name */}
          <Link
            href="/"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center leading-none px-2 max-w-[55%] sm:max-w-none"
            aria-label="The Modern Trades Mentor LLC"
          >
            <span className="block text-[9px] sm:text-[10px] font-semibold tracking-[0.22em] text-steel-light uppercase">
              The
            </span>
            <span
              className={`block font-display font-bold tracking-tight text-white uppercase ${
                scrolled ? "text-base sm:text-lg" : "text-lg sm:text-xl md:text-2xl"
              }`}
            >
              Modern
            </span>
            <span
              className={`block font-display font-semibold tracking-[0.06em] text-blue-light uppercase ${
                scrolled ? "text-[10px] sm:text-xs" : "text-xs sm:text-sm"
              }`}
            >
              Trades Mentor LLC
            </span>
          </Link>

          {/* Right: desktop nav + CTA / mobile menu */}
          <div className="relative z-10 flex items-center gap-4 shrink-0">
            <nav aria-label="Primary" className="hidden 2xl:flex items-center gap-5">
              {content.nav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[13px] font-medium text-steel-light hover:text-white transition-colors whitespace-nowrap"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link
              href={content.primaryCta.href}
              onClick={() => track("cta_click", { label: content.primaryCta.label, href: content.primaryCta.href, location: "header" })}
              className="hidden md:inline-flex items-center rounded-md bg-blue px-4 lg:px-5 py-2.5 text-[13px] font-semibold text-white shadow-cta hover:bg-blue-hover transition-colors whitespace-nowrap"
            >
              {content.primaryCta.label}
            </Link>

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
              className="2xl:hidden inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/25 bg-transparent text-white shrink-0"
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              {open ? (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          ref={drawerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="2xl:hidden fixed inset-0 top-[72px] z-40 bg-navy-deep overflow-y-auto border-t border-white/10"
        >
          <nav aria-label="Mobile Primary" className="flex flex-col gap-1 px-4 py-6">
            {content.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 px-3 py-3.5 text-base font-medium text-steel-light hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+17276003425"
              onClick={() => setOpen(false)}
              className="px-3 py-3.5 text-base font-medium text-blue-light"
            >
              Call 727-600-3425
            </a>
            <Link
              href={content.primaryCta.href}
              onClick={() => {
                track("cta_click", { label: content.primaryCta.label, href: content.primaryCta.href, location: "header_mobile_drawer" });
                setOpen(false);
              }}
              className="mt-4 inline-flex items-center justify-center rounded-md bg-blue px-5 py-3 text-base font-semibold text-white hover:bg-blue-hover"
            >
              {content.primaryCta.label}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
