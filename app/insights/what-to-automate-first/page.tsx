import type { Metadata } from "next";

import ArticleShell from "@/components/ArticleShell";
import { getArticle } from "@/lib/articles";

const article = getArticle("what-to-automate-first")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  alternates: { canonical: "/insights/what-to-automate-first" },
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
      slug="what-to-automate-first"
      related={[
        { label: "AI Automation", href: "/ai-automation" },
        { label: "AI Consulting in St. Petersburg", href: "/ai-consulting-st-petersburg-fl" },
        { label: "Growth & Systems Blueprint", href: "/services/technology-audit" },
      ]}
    >
      <p className="text-lg text-navy/85">
        <strong>Automate the work that repeats every day, follows the same
        steps every time, and costs you money when somebody forgets it.</strong>{" "}
        For most small service businesses that means two things before anything
        else: capturing calls you are missing, and following up on estimates
        that went quiet. Everything else — scheduling, reporting, job notes,
        marketing — comes after those two, because those two are where the money
        is already walking out the door.
      </p>

      <p>
        The mistake is starting with whatever is most annoying. The most
        annoying task is usually not the most expensive one. Annoying and
        expensive are different problems, and only one of them pays you back.
      </p>

      <H2>The test: repeats, identical, and costly when missed</H2>

      <p>
        Before automating anything, run it through three questions. A task needs
        all three, not two.
      </p>

      <H3>1. Does it repeat at least daily?</H3>
      <p>
        Something that happens twice a year is not worth automating no matter
        how irritating it is. You will spend more time setting it up and
        maintaining it than you will ever save. Write it down as a checklist
        instead and move on.
      </p>

      <H3>2. Does it follow the same steps every time?</H3>
      <p>
        Automation is very good at identical and very bad at &ldquo;it
        depends.&rdquo; If a task branches based on judgment — this customer
        gets different treatment, this job needs a look first — that judgment is
        the work, and handing it to software is how you end up apologizing to a
        customer.
      </p>

      <H3>3. Does it cost real money when it gets skipped?</H3>
      <p>
        This is the one people skip. A task that nobody notices when it does not
        happen is a task you should probably delete, not automate. If you cannot
        say what a missed instance costs, you will never be able to tell whether
        the automation worked.
      </p>

      <H2>The order that usually holds</H2>

      <H3>First: the calls you are not answering</H3>
      <p>
        This is almost always the biggest leak in a small service business, and
        it is the one owners are least able to see, because a missed call leaves
        no evidence. Nobody files a complaint about a phone that rang out. The
        job simply goes to whoever picked up.
      </p>
      <p>
        Start by measuring, not buying. For one week, count calls that went
        unanswered and calls that went to voicemail with no callback. You can
        get this from most phone systems for free. Once you have that number,
        the decision makes itself — and if the number is small, you have just
        saved yourself a subscription.
      </p>

      <H3>Second: estimates that went quiet</H3>
      <p>
        Follow-up is where these businesses lose the work they already earned.
        The estimate is written, the customer is interested, and then everyone
        gets busy. Three weeks later the job is gone and nobody can say exactly
        when it died.
      </p>
      <p>
        This one automates cleanly because the trigger is unambiguous: an
        estimate is sent, and after a set number of days there has been no reply.
        Keep the message short and keep a human reading the responses. The
        automation is the reminder, not the conversation.
      </p>

      <H3>Third: turning field notes into something billable</H3>
      <p>
        If your office regularly calls a tech to ask what actually happened on a
        job before an invoice can go out, that round trip is costing you twice —
        once in delay and once in the detail that gets lost. Summarizing notes
        into a consistent format is a genuinely good use of AI, with one rule: a
        person reads it before it reaches the customer or the invoice.
      </p>

      <H3>Fourth: work that was performed and never billed</H3>
      <p>
        Less common but expensive when it happens. Comparing completed jobs
        against issued invoices is a mechanical comparison a computer is good
        at. It is worth doing as a periodic check even if you never automate it
        fully.
      </p>

      <H2>What to leave alone</H2>

      <p>
        The list of things not to automate matters more than the list of things
        to automate, because the failures are more expensive than the wins.
      </p>

      <ul className="ml-5 list-disc space-y-2">
        <li>
          <strong>Anything that reaches a customer unread.</strong> One
          confidently wrong message to a customer costs more than a year of the
          subscription that sent it.
        </li>
        <li>
          <strong>Pricing.</strong> A wrong number is worse than a slow number.
          If pricing is inconsistent today, that is a pricebook problem, and
          automation will only make it inconsistent faster.
        </li>
        <li>
          <strong>Safety, code, and anything a licensed tech signs.</strong>{" "}
          Not a judgment to delegate to software, in any form.
        </li>
        <li>
          <strong>A process nobody can describe out loud.</strong> If two people
          in the office would explain the steps differently, there is no process
          to automate yet. Write it down first.
        </li>
      </ul>

      <H2>Before you buy anything</H2>

      <p>
        A large share of the gains available to a small business do not require
        new software at all. They require deciding who owns a step and when it
        happens. Three examples that cost nothing:
      </p>

      <ul className="ml-5 list-disc space-y-2">
        <li>Name one person who owns tomorrow&rsquo;s schedule, and have them build it from one place.</li>
        <li>Define the close-out step so a tech finishes a job at the truck, not on Friday.</li>
        <li>Give follow-up on open estimates to a named person on a set day of the week.</li>
      </ul>

      <p>
        If those three do not hold for two weeks without you pushing, no
        software was going to fix it. That is not a reason to avoid technology —
        it is the reason to fix the process first, so the technology has
        something solid to sit on.
      </p>

      <H2>One thing to do this week, that costs nothing</H2>

      <p>
        Count your missed calls for five working days. Just the number. Most
        owners are surprised, and it is the single most useful figure you can
        put in front of any decision about automation — including the decision
        to do nothing.
      </p>
    </ArticleShell>
  );
}
