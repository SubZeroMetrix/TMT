import type { Metadata } from "next";

import ArticleShell from "@/components/ArticleShell";
import { getArticle } from "@/lib/articles";

const article = getArticle("choose-a-field-service-crm")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  alternates: { canonical: "/insights/choose-a-field-service-crm" },
};

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mt-10 font-display text-2xl font-bold tracking-tight text-navy">
    {children}
  </h2>
);

const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="mt-7 font-display text-lg font-semibold text-navy">{children}</h3>
);

export default function Page() {
  return (
    <ArticleShell
      slug="choose-a-field-service-crm"
      related={[
        { label: "CRM & Workflow Consulting", href: "/crm-workflow-consulting" },
        { label: "Software Selection & Stack Design", href: "/services/software-selection" },
        { label: "Technology & AI Readiness Audit", href: "/services/technology-audit" },
        { label: "AI Consulting in St. Petersburg", href: "/ai-consulting-st-petersburg-fl" },
      ]}
    >
      <p className="text-lg text-navy/85">
        <strong>A field service CRM demo is built to show you the finished
        state, not the work required to get there.</strong> The software in the
        demo already has a complete pricebook, clean customer records, and a
        dispatcher who knows the system. You have none of that on day one. The
        gap between the demo and your first month is where shops lose money,
        lose faith, and end up blaming a product that was never wrong for them
        in the first place.
      </p>

      <p>
        Six questions surface that gap before you sign. Ask all six of every
        vendor, and ask them on a call rather than by email — the hesitations
        are informative.
      </p>

      <H2>1. &ldquo;What does setup actually require from us?&rdquo;</H2>

      <p>
        The honest answer involves your time, not theirs. Ask specifically who
        builds the pricebook, who enters customer history, and how many hours
        your office should expect to spend in the first month.
      </p>
      <p>
        The pricebook is the one that ambushes people. If your shop has never
        had a written pricebook, you are not doing data entry during setup — you
        are making hundreds of pricing decisions for the first time, while still
        running calls. That is a project with its own timeline, and it is the
        single most common reason a go-live date slips by months.
      </p>

      <H2>2. &ldquo;What happens to my data if I leave?&rdquo;</H2>

      <p>
        Ask what you can export, in what format, and whether it includes job
        history, attachments and photos — not just a customer list. A vendor
        confident in their product answers this immediately. A vendor who
        deflects is telling you the exit cost is part of the business model.
      </p>
      <p>
        You are not being pessimistic by asking. You are pricing the risk of
        being wrong, which is the whole job when you are the one signing.
      </p>

      <H2>3. &ldquo;What is the real cost at my size, in year two?&rdquo;</H2>

      <p>
        Per-user pricing is only the visible part. Ask about implementation
        fees, payment processing rates if their payments product is bundled, SMS
        and call charges, add-on modules that turn out to be required for the
        workflow you were shown, and what happens to the price when the
        introductory term ends.
      </p>
      <p>
        Then ask what the total looks like if you add two techs. Growth is the
        point, and some pricing models punish it hard.
      </p>

      <H2>4. &ldquo;Which parts of the demo are add-ons?&rdquo;</H2>

      <p>
        Demos are assembled from the top tier. The dispatch board that
        impressed you, the automated follow-up, the reporting — ask which tier
        each one lives in, and re-price against the tier you would actually
        buy. It is a fair question and a good vendor will answer it plainly.
      </p>

      <H2>5. &ldquo;Who at my company has to change how they work?&rdquo;</H2>

      <p>
        Every platform assumes a way of operating. Some assume a dedicated
        dispatcher. Some assume techs close out jobs at the truck. Some assume
        someone owns follow-up on open estimates.
      </p>
      <p>
        Write down which assumptions the product makes, then look honestly at
        whether those roles exist in your shop today. If three of them do not,
        the software is not the next step — defining those roles is. This is the
        difference between a rollout that sticks and one that quietly reverts
        inside 90 days.
      </p>

      <H2>6. &ldquo;Can I talk to a shop my size that uses it?&rdquo;</H2>

      <p>
        Not their flagship reference customer with forty trucks. A shop with a
        crew like yours, in a market like yours. Ask that shop one question:
        what surprised you in month two?
      </p>
      <p>
        If a vendor cannot produce a customer at your size, that is real
        information about who the product is built for.
      </p>

      <H2>Matching the platform to the shop</H2>

      <p>
        There is no best field service CRM, only a best fit, and the deciding
        factor is usually how much process discipline already exists rather than
        headcount.
      </p>

      <ul className="ml-5 list-disc space-y-2">
        <li>
          <strong>A written pricebook, a dedicated dispatcher, and consistent
          close-out.</strong> The heavier platforms will repay the setup, because
          you can actually use what you are paying for.
        </li>
        <li>
          <strong>Owner still dispatching, pricing partly in someone&rsquo;s
          head.</strong> Lighter tools tend to win, because the setup burden is
          survivable and the team will actually adopt it.
        </li>
        <li>
          <strong>Neither, and nobody owns the board.</strong> Fix that first.
          Any platform you buy in this state becomes an expensive place to store
          the same confusion.
        </li>
      </ul>

      <H2>The trap to avoid</H2>

      <p>
        The expensive mistake is not picking the wrong product. It is buying a
        product that assumes processes you have not built yet, then concluding
        that software does not work for a business your size. That conclusion
        can cost a shop years, because the next good recommendation gets
        dismissed before it is heard.
      </p>

      <H2>One thing to do this week, that costs nothing</H2>

      <p>
        Before you take another demo, write down who builds tomorrow&rsquo;s
        schedule, where your prices come from, and who chases estimates that did
        not close. If you cannot answer all three in one sentence each, you have
        learned more about your next software decision than any demo will tell
        you.
      </p>
    </ArticleShell>
  );
}
