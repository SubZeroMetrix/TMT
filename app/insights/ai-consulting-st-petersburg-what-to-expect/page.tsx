import type { Metadata } from "next";

import ArticleShell from "@/components/ArticleShell";
import { getArticle } from "@/lib/articles";

const article = getArticle("ai-consulting-st-petersburg-what-to-expect")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  alternates: {
    canonical: "/insights/ai-consulting-st-petersburg-what-to-expect",
  },
};

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mt-10 font-display text-2xl font-bold tracking-tight text-navy">
    {children}
  </h2>
);

export default function Page() {
  return (
    <ArticleShell
      slug="ai-consulting-st-petersburg-what-to-expect"
      related={[
        { label: "AI Consulting in St. Petersburg", href: "/ai-consulting-st-petersburg-fl" },
        { label: "AI Automation", href: "/ai-automation" },
        { label: "Pinellas County service area", href: "/locations/pinellas-county-fl" },
        { label: "About Richard", href: "/about" },
      ]}
    >
      <p className="text-lg text-navy/85">
        <strong>A real AI consulting engagement for a small business in St.
        Petersburg starts with someone looking at how your business actually
        runs — not with a tool recommendation.</strong> Expect a free on-site
        visit first, then a readiness audit that examines your calls,
        scheduling, quoting and follow-up, and only then a written
        recommendation about what to change, what to buy, and what to leave
        alone. If a tool gets named in the first meeting, you are in a sales
        process, not a consulting engagement.
      </p>

      <H2>What the first visit looks like</H2>

      <p>
        It happens at your shop, not on a video call, and it runs 45 to 60
        minutes. The reason is practical rather than ceremonial: how the office
        actually operates on an ordinary Tuesday is not visible on a screen
        share. The whiteboard that overrides the software, the sticky notes on
        the dispatcher&rsquo;s monitor, the tech who texts the owner instead of
        closing the job — that is the real system, and it only shows up in the
        room.
      </p>
      <p>
        You should not be asked to pay for that conversation, and you should not
        leave it owing anybody anything.
      </p>

      <H2>What gets examined</H2>

      <p>
        The questions are about operations, not technology. Expect to walk
        through how a job moves from the first call to a paid invoice, and to
        answer things like:
      </p>

      <ul className="ml-5 list-disc space-y-2">
        <li>Who builds tomorrow&rsquo;s schedule, and what do they look at while doing it?</li>
        <li>When a tech finishes a job, how does the office find out?</li>
        <li>Where does pricing come from?</li>
        <li>What happens to a call nobody answers?</li>
        <li>Who chases the estimates that did not close?</li>
        <li>Who would own a new system after it goes live?</li>
      </ul>

      <p>
        Those six answers predict whether any technology change will stick. A
        consultant who does not ask them is guessing.
      </p>

      <H2>What you should receive</H2>

      <p>
        A written recommendation, in plain language, that separates three
        things: what to fix by hand at no cost, what is worth buying, and what
        to ignore for now. Each item should have a reason attached and an order
        to do them in.
      </p>
      <p>
        A useful engagement frequently concludes that you should not buy
        anything yet. That is a legitimate outcome, and you should be able to
        get it without being made to feel like you wasted someone&rsquo;s time.
      </p>

      <H2>What is specific to St. Petersburg and Pinellas</H2>

      <p>
        Two local realities shape the recommendations here more than most
        owners expect.
      </p>
      <p>
        <strong>Drive time.</strong> Pinellas is narrow and congested, with a
        limited number of ways across the bay. How the board is built in the
        morning has an outsized effect on how many calls a truck turns by five,
        which makes scheduling a higher-leverage fix locally than it would be in
        a sprawling market.
      </p>
      <p>
        <strong>The summer peak and storm season.</strong> Call volume does not
        rise gently here, it spikes. The systems that fail first under a surge
        are the manual ones — a paper board, one phone line, and follow-up that
        depends on somebody remembering. Work done in spring is worth several
        times the same work done in August.
      </p>
      <p>
        A shop working both Pinellas and Hillsborough carries two sets of
        permitting process as well, which is worth accounting for before
        choosing software that assumes one.
      </p>

      <H2>How to tell a real engagement from a sales process</H2>

      <ul className="ml-5 list-disc space-y-2">
        <li>
          <strong>A tool is named before your process is understood.</strong>{" "}
          The recommendation was made before the diagnosis.
        </li>
        <li>
          <strong>The consultant earns a commission on what they
          recommend.</strong> Ask directly. The answer should be immediate and
          specific, and any arrangement should be disclosed before the advice,
          not after.
        </li>
        <li>
          <strong>Nothing on the list is free.</strong> Real operational fixes
          usually include several changes that cost nothing but a decision.
        </li>
        <li>
          <strong>AI is presented as the answer rather than a narrow
          tool.</strong> It belongs in specific places — after-hours call
          capture, estimate follow-up, summarizing job notes — and it is a
          liability in others, including pricing and anything that reaches a
          customer unread.
        </li>
      </ul>

      <H2>What it costs</H2>

      <p>
        Engagements should be scoped to your business rather than billed by the
        hour, and the first conversation should be free. Beyond that, be
        skeptical of anyone quoting a price before they have seen the operation
        — the number is either padded to cover the unknown or it is going to
        change later.
      </p>

      <H2>One thing to do before you call anyone</H2>

      <p>
        Write down the two or three things you most want fixed, in your own
        words, and count your missed calls for a week. Turning up to any
        consulting conversation with those two items will tell you very quickly
        whether the person across from you is listening or presenting.
      </p>
    </ArticleShell>
  );
}
