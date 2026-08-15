import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

const COLUMNS = [
  {
    // These five must stay identical to the services listed on the Google
    // Business Profile. A mismatch between GBP services and the site is a
    // conflicting signal about what the business actually does.
    title: "Services",
    links: [
      { label: "Growth & Systems Blueprint", href: "/services/technology-audit" },
      { label: "AI Automation Consulting", href: "/ai-automation" },
      { label: "CRM & Workflow Consulting", href: "/crm-workflow-consulting" },
      {
        label: "Software Selection & Implementation Planning",
        href: "/services/software-selection",
      },
      {
        label: "Contractor Technology Consulting",
        href: "/ai-consulting-st-petersburg-fl",
      },
      { label: "All services", href: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Richard", href: "/about" },
      { label: "Insights", href: "/insights" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Service Area",
    links: [
      { label: "St. Petersburg, FL", href: "/locations/st-petersburg" },
      { label: "Clearwater, FL", href: "/locations/clearwater" },
      { label: "Tampa, FL", href: "/locations/tampa" },
      { label: "Greater Tampa Bay", href: "/locations/tampa-bay" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Terms of Use", href: "/legal/terms" },
      { label: "Accessibility Statement", href: "/legal/accessibility" },
      { label: "AI & Professional Guidance Disclaimer", href: "/legal/ai-disclaimer" },
    ],
  },
];

const LINKEDIN_URL = "https://www.linkedin.com/company/the-modern-trades-mentor-llc/";

export default function Footer() {
  return (
    <footer className="relative bg-navy-deep text-silver-light border-t border-white/10 overflow-hidden">
      <div
        className="absolute inset-0 bg-grid-blueprint bg-grid opacity-40 pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-container px-4 sm:px-6 lg:px-8 pt-14 pb-28 xl:pb-14">
        <div className="mb-12">
          <BrandLogo variant="footer" />
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-light mb-4">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-silver-light/90 hover:text-blue-light transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="tech-divider mt-12 mb-8" />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-silver">
            <p className="font-semibold text-white font-display">The Modern Trades Mentor LLC</p>
            {/*
              Labelled as a mailing address on purpose. TMT is a service-area
              business — this is not a location customers visit, and it is
              deliberately absent from the business schema.
            */}
            <p className="mt-1 font-mono text-xs text-silver">
              <span className="text-silver/70">Mailing address:</span> PO Box 66093,
              St. Petersburg, FL 33767
            </p>
            <p className="mt-1 text-xs text-silver">
              Serving Pinellas &amp; Hillsborough counties — on site at your shop
            </p>
            <p className="mt-1 font-mono text-xs">
              <a href="tel:+17276003425" className="text-blue-light hover:text-white transition-colors">
                727-600-3425
              </a>
              <span className="text-silver/60 mx-2">·</span>
              <a
                href="mailto:Richard@TheModernTradesMentor.com"
                className="text-blue-light hover:text-white transition-colors"
              >
                Richard@TheModernTradesMentor.com
              </a>
            </p>
          </div>

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="The Modern Trades Mentor on LinkedIn"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-steel/50 text-blue-light hover:bg-white/10 transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM.5 8.75h4.98V23.5H.5V8.75zM8.98 8.75h4.77v2.02h.07c.66-1.25 2.28-2.57 4.7-2.57 5.02 0 5.95 3.3 5.95 7.6v8.7h-4.98v-7.72c0-1.84-.03-4.21-2.57-4.21-2.57 0-2.96 2-2.96 4.08v7.85H8.98V8.75z" />
            </svg>
          </a>
        </div>

        <p className="mt-8 text-xs text-silver/85 max-w-3xl leading-relaxed">
          Experience references are provided for professional background only and do not imply
          endorsement by any current or former employer or government entity. The Modern Trades
          Mentor provides technology and operations guidance for contractors; it does not provide
          legal, tax, or licensed professional-engineering services.
        </p>

        <p className="mt-4 font-mono text-[11px] uppercase tracking-wider text-silver/75">
          © {new Date().getFullYear()} The Modern Trades Mentor LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
