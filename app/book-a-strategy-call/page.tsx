import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PrimaryCTA, SecondaryCTA, GhostCTA } from "@/components/CTAButton";
import SignatureName from "@/components/SignatureName";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Book an Onsite Shop Visit",
  description:
    "Schedule an onsite strategy visit at your shop with Richard Fritzke of The Modern Trades Mentor LLC — see your real systems, team, and workflows in person across Tampa Bay.",
  alternates: { canonical: "/book-a-strategy-call" },
};

/** Paste your Go High Level calendar / booking widget URL here via env. */
const GHL_BOOKING_URL = process.env.NEXT_PUBLIC_GHL_BOOKING_URL ?? "";

const whyOnsite = [
  {
    title: "See the real operation",
    body: "Screenshots and phone calls hide the mess. In your shop, Richard sees how calls, dispatch, estimates, and follow-up actually move — or stall.",
  },
  {
    title: "Meet the people who run it",
    body: "Office staff, dispatchers, and techs tell the truth face-to-face. Adoption problems show up in five minutes when the team is in the room.",
  },
  {
    title: "Walk the workflow together",
    body: "From the front desk to the van to the invoice — you map bottlenecks on a whiteboard, not through a sales deck on Zoom.",
  },
  {
    title: "Leave with a clear next step",
    body: "You walk away knowing whether you need an audit, software changes, training, or simply to leave things alone — with no software pitch.",
  },
];

const visitAgenda = [
  "Walk-through of how a job moves from first call to paid invoice",
  "Quick look at the tools you already use (CRM, dispatch, texts, accounting)",
  "Where work piles up, gets re-entered, or falls through the cracks",
  "Staff readiness — who will actually adopt a change, and who will fight it",
  "Honest recommendation: audit, selection help, training — or wait",
];

const prepareItems = [
  "Have the person who answers phones / runs the office available if possible",
  "Pull up (or list) the software you use day-to-day — even if it is Excel and group texts",
  "Know your rough team size: office, field, owners wearing multiple hats",
  "Pick 2–3 problems you want fixed — in plain contractor language",
  "Clear a table or bay for 45–60 minutes so you can talk without interruptions",
];

const faqs = [
  {
    q: "Is this a software sales demo?",
    a: "No. The Modern Trades Mentor LLC does not sell software licenses and is not paid to push a platform. The visit is advisory — systems, process, people, and practical AI readiness.",
  },
  {
    q: "How long is the visit?",
    a: "Plan on 45–60 minutes at your shop. If the conversation is productive, it can run a bit longer — you control the clock.",
  },
  {
    q: "Do I have to buy something afterward?",
    a: "No. Many visits end with a clear DIY priority list. If a paid engagement fits, you get a scoped recommendation. If it does not fit, you will hear that too.",
  },
  {
    q: "Where do you go?",
    a: "Greater Tampa Bay — St. Petersburg, Tampa, Clearwater, and surrounding contractor shops. Remote video is available when an onsite visit is not practical.",
  },
  {
    q: "What if I am outside Tampa Bay?",
    a: "Book a remote strategy session first. Onsite travel outside the Bay can be discussed once there is a clear fit.",
  },
];

export default function BookStrategyCallPage() {
  return (
    <>
      {/* HERO — onsite-first */}
      <section className="relative overflow-hidden bg-navy-deep border-b border-white/10">
        <div
          className="absolute inset-0 bg-grid-blueprint bg-grid opacity-40 pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-container px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="grid lg:grid-cols-[1.15fr,0.85fr] gap-12 items-center">
            <div>
              <p className="bp-label mb-4 flex items-center gap-3">
                <span className="inline-block h-px w-8 bg-blue-light" />
                Tampa Bay · Onsite at your shop
              </p>
              <h1
                className="font-display font-bold text-white tracking-tight leading-[1.08]"
                style={{ fontSize: "clamp(1.85rem, 3.5vw + 0.6rem, 3.25rem)" }}
              >
                Book a Shop Visit —{" "}
                <span className="text-blue-light">Not Another Phone Pitch</span>
              </h1>
              <p className="mt-5 text-lg leading-relaxed max-w-xl" style={{ color: "#E2E8F0" }}>
                Get <SignatureName className="text-2xl mx-1 text-blue-light">Richard</SignatureName>{" "}
                in front of your operation. See the real systems, meet the team, and leave with a
                clear plan — before you buy another tool or lose another lead to a sales call.
              </p>
              <ul className="mt-6 space-y-2.5 max-w-lg">
                {[
                  "45–60 minutes at your shop",
                  "Vendor-neutral — no software commission",
                  "Built for owner-led teams with 0–15 employees",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "#CBD5E1" }}>
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-blue-light" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#schedule"
                  className="group inline-flex items-center justify-center gap-2 rounded-md bg-blue px-7 py-3.5 text-sm font-semibold tracking-wide text-white shadow-cta hover:bg-blue-hover transition-colors"
                >
                  Schedule your shop visit
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="transition-transform group-hover:translate-y-0.5">
                    <path d="M8 3v9M4 8l4 4 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <SecondaryCTA href="#why-onsite">Why onsite beats a phone call</SecondaryCTA>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/5] max-w-sm mx-auto overflow-hidden rounded-md border border-white/15 bg-navy">
                <Image
                  src="/richard-portrait.png"
                  alt="Richard Fritzke, founder of The Modern Trades Mentor LLC"
                  fill
                  sizes="(min-width: 1024px) 24rem, 80vw"
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="mt-4 text-center">
                <SignatureName flourish>Richard Fritzke</SignatureName>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.16em]" style={{ color: "#94A3B8" }}>
                  Founder · The Modern Trades Mentor LLC
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY ONSITE */}
      <section id="why-onsite" className="bg-surface-light scroll-mt-24">
        <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-blue mb-3">
            Why this converts better
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy tracking-tight max-w-2xl mb-4">
            Phone calls lose deals. Shop visits win trust.
          </h2>
          <p className="text-slate max-w-2xl mb-12 leading-relaxed">
            A phone pitch is easy to forget, easy to ghost, and easy for a software vendor to
            out-talk. Standing in your shop — looking at the same screens your dispatcher uses —
            builds the kind of trust that closes advisory work and stops bad software buys.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {whyOnsite.map((item, i) => (
              <div key={item.title} className="bp-frame bp-panel-light p-6">
                <span className="font-mono text-[10px] text-blue">0{i + 1}</span>
                <h3 className="mt-2 font-display font-semibold text-navy text-lg">{item.title}</h3>
                <p className="mt-2 text-sm text-slate leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AGENDA + PREPARE */}
      <section className="bg-white border-y border-border-light">
        <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8 py-16 lg:py-20 grid lg:grid-cols-2 gap-12">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-blue mb-3">
              On the visit
            </p>
            <h2 className="font-display text-3xl font-bold text-navy tracking-tight mb-6">
              What we cover in your shop
            </h2>
            <ul className="space-y-3">
              {visitAgenda.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-navy/80">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-blue" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bp-frame bp-panel-light p-7">
            <h3 className="font-display font-semibold text-navy text-lg mb-3">What to prepare</h3>
            <p className="text-sm text-slate mb-5 leading-relaxed">
              No slide deck. No formal presentation. Just your real business — ready to talk in
              plain language.
            </p>
            <ul className="space-y-3">
              {prepareItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-navy/75">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-blue" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SCHEDULE — GHL */}
      <section id="schedule" className="relative bg-navy scroll-mt-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-grid-blueprint bg-grid opacity-30 pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-container px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="max-w-2xl mb-10">
            <p className="bp-label mb-3">Step 1 · Book it</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Pick a time for your shop visit
            </h2>
            <p className="mt-4 leading-relaxed" style={{ color: "#CBD5E1" }}>
              Use the scheduler below to reserve an onsite visit at your location. Prefer a quick
              question first? Call or email — then lock the visit so it does not slip.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr,320px] gap-8 items-start">
            <div
              className="rounded-md overflow-hidden border border-white/15 bg-white min-h-[560px]"
              id="ghl-booking"
            >
              {GHL_BOOKING_URL ? (
                <iframe
                  src={GHL_BOOKING_URL}
                  title="Schedule an onsite shop visit"
                  className="w-full min-h-[560px] h-[640px] border-0"
                  loading="lazy"
                  allow="clipboard-write"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-center px-6 py-16 min-h-[560px] bg-surface-light">
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-blue mb-3">
                    Calendar ready for Go High Level
                  </p>
                  <h3 className="font-display text-2xl font-bold text-navy max-w-md">
                    Connect your GHL booking widget to go live
                  </h3>
                  <p className="mt-4 text-sm text-slate max-w-md leading-relaxed">
                    Add your Go High Level calendar / booking link as{" "}
                    <code className="font-mono text-xs bg-surface-warm px-1.5 py-0.5 rounded text-navy">
                      NEXT_PUBLIC_GHL_BOOKING_URL
                    </code>{" "}
                    in Vercel env vars. Until then, book by phone or email below.
                  </p>
                  <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    <GhostCTA href={contact.phone.href}>Call {contact.phone.label}</GhostCTA>
                    <a
                      href={contact.email.href}
                      className="inline-flex items-center justify-center rounded-md border border-navy/20 bg-white px-7 py-3.5 text-sm font-semibold text-navy hover:border-blue hover:text-blue transition-colors"
                    >
                      Email to schedule
                    </a>
                  </div>
                </div>
              )}
            </div>

            <aside className="space-y-4">
              <div className="bp-frame bp-panel p-5">
                <p className="font-mono text-[10px] uppercase tracking-wider text-blue-light mb-2">
                  Prefer to talk first?
                </p>
                <a
                  href={contact.phone.href}
                  className="font-display text-xl font-bold text-white hover:text-blue-light transition-colors"
                >
                  {contact.phone.label}
                </a>
                <p className="mt-2 text-xs" style={{ color: "#94A3B8" }}>
                  Use the call to confirm your address and time — then keep the shop visit on the
                  calendar so the lead does not go cold.
                </p>
              </div>
              <div className="bp-frame bp-panel p-5">
                <p className="font-mono text-[10px] uppercase tracking-wider text-blue-light mb-2">
                  Email
                </p>
                <a
                  href={contact.email.href}
                  className="text-sm font-semibold text-white hover:text-blue-light break-all transition-colors"
                >
                  {contact.email.label}
                </a>
                <p className="mt-2 text-xs" style={{ color: "#94A3B8" }}>
                  Include shop address, trade, team size, and 2–3 problems you want solved.
                </p>
              </div>
              <div className="bp-frame bp-panel p-5">
                <p className="font-mono text-[10px] uppercase tracking-wider text-blue-light mb-2">
                  Service area
                </p>
                <p className="text-sm text-white font-semibold">Greater Tampa Bay</p>
                <p className="mt-2 text-xs" style={{ color: "#94A3B8" }}>
                  St. Petersburg · Tampa · Clearwater · surrounding shops. Remote available when
                  needed.
                </p>
                <Link
                  href="/locations/tampa-bay"
                  className="mt-3 inline-block text-xs text-blue-light hover:text-white transition-colors"
                >
                  View service area →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* AFTER */}
      <section className="bg-surface-light">
        <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <h2 className="font-display text-3xl font-bold text-navy tracking-tight mb-4">
            What happens after the visit
          </h2>
          <p className="text-slate max-w-2xl mb-8 leading-relaxed">
            You leave with clarity — not a pressure close. If there is a fit, the usual next step is
            the Technology &amp; AI Readiness Audit or a focused engagement. If there is not a fit,
            you will know that on the spot.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Honest read",
                body: "What to fix first, what to leave alone, and whether new software is even the answer.",
              },
              {
                step: "02",
                title: "Clear path",
                body: "Audit, stack design, training, or recovery — scoped only if it makes sense for your shop.",
              },
              {
                step: "03",
                title: "Your pace",
                body: "No drip spam. No fake urgency. You decide when — and whether — to move forward.",
              },
            ].map((s) => (
              <div key={s.step} className="border-t-2 border-blue pt-4">
                <span className="font-mono text-[10px] text-blue">{s.step}</span>
                <h3 className="mt-2 font-display font-semibold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm text-slate leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white border-t border-border-light">
        <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <h2 className="font-display text-3xl font-bold text-navy tracking-tight mb-10">
            Common questions
          </h2>
          <div className="max-w-3xl space-y-6">
            {faqs.map((f) => (
              <div key={f.q} className="border-b border-border-light pb-6">
                <h3 className="font-display font-semibold text-navy">{f.q}</h3>
                <p className="mt-2 text-sm text-slate leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-navy-deep border-t border-white/10">
        <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight max-w-2xl mx-auto">
            Get in front of the customer. Keep the lead.
          </h2>
          <p className="mt-4 max-w-xl mx-auto" style={{ color: "#CBD5E1" }}>
            Schedule the shop visit now — then show up where the work actually happens.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#schedule"
              className="inline-flex items-center justify-center rounded-md bg-blue px-7 py-3.5 text-sm font-semibold text-white shadow-cta hover:bg-blue-hover transition-colors"
            >
              Schedule your shop visit
            </a>
            <PrimaryCTA href={contact.phone.href}>Call {contact.phone.label}</PrimaryCTA>
          </div>
          <p className="mt-6 text-xs" style={{ color: "#94A3B8" }}>
            No software pitch. No obligation. Vendor-neutral advisory from The Modern Trades Mentor
            LLC.
          </p>
        </div>
      </section>
    </>
  );
}
