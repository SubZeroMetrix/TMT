"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { header as content } from "@/lib/content";

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
        className={`border-b border-border-light bg-white transition-[padding] duration-200 ${
          scrolled ? "py-2" : "py-3"
        }`}
      >
        <div className="mx-auto flex max-w-container items-center justify-between px-4 sm:px-6 lg:px-8 gap-4">
          {/* Full TMT lockup logo — image includes wordmark */}
          <Link href="/" className="shrink-0 py-0.5" aria-label="The Modern Trades Mentor home">
            <Image
              src="/logo.png"
              alt="The Modern Trades Mentor"
              width={220}
              height={220}
              className={`w-auto transition-[height] duration-200 ${
                scrolled ? "h-12 sm:h-14" : "h-14 sm:h-16"
              }`}
              priority
            />
          </Link>

          <nav aria-label="Primary" className="hidden xl:flex items-center gap-5 2xl:gap-6 min-w-0">
            {content.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[13px] 2xl:text-sm font-medium text-slate-nav hover:text-blue transition-colors whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden xl:block shrink-0">
            <Link
              href={content.primaryCta.href}
              className="inline-flex items-center rounded-md bg-blue px-5 py-2.5 text-[13px] 2xl:text-sm font-semibold text-white shadow-cta hover:bg-blue-hover transition-colors whitespace-nowrap"
            >
              {content.primaryCta.label}
            </Link>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="xl:hidden inline-flex h-11 w-11 items-center justify-center rounded-md border border-navy bg-white text-navy shrink-0"
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

      {open && (
        <div
          id="mobile-nav"
          ref={drawerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="xl:hidden fixed inset-0 top-[64px] z-40 bg-white overflow-y-auto border-t border-border-light"
        >
          <nav aria-label="Mobile Primary" className="flex flex-col gap-1 px-4 py-6">
            {content.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border-light px-3 py-3.5 text-base font-medium text-slate-nav hover:text-blue"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+17276003425"
              onClick={() => setOpen(false)}
              className="px-3 py-3.5 text-base font-medium text-blue"
            >
              Call 727-600-3425
            </a>
            <Link
              href={content.primaryCta.href}
              onClick={() => setOpen(false)}
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
