# Tampa Bay Contractor Systems Guide — Draft Content
For `/resources/tampa-bay-contractor-systems-guide`. Draft prose, not yet placed into the repo as
a live page (no page route created — this is content prep for whoever builds it, likely hp-6f's
scope). Every placeholder marked `[NEEDS RICHARD]` requires his direct input before publishing —
per the brief's rule against inventing statistics, benchmarks, or results.

---

## Section 1 — Intro: the Tampa Bay contractor operating reality

Tampa Bay's HVAC, plumbing, electrical, and roofing contractors run their businesses across a
sprawl of service areas — Pinellas County alone stretches from St. Petersburg to Palm Harbor to
Largo, and most owner-led shops cover both Pinellas and Hillsborough. That geography means dispatch,
follow-up, and customer communication carry more operational weight here than in a single-city
market: a missed call or a slow estimate follow-up costs more when the next available slot is a
40-minute drive across the bay.

Storm season adds a second layer — call volume spikes hard and fast, and the businesses that handle
it well aren't the ones with the most software, they're the ones with a system that survives being
hit all at once. [NEEDS RICHARD: any specific storm-season pattern or example he's seen firsthand.]

## Section 2 — Missed-call recovery

A missed call from a paying customer is a lost job more often than it's a lost lead — most people
call the next contractor before they call you back. A working recovery workflow looks like:

| Step | Trigger | Action |
|---|---|---|
| 1 | Inbound call missed | Auto SMS sent within [NEEDS RICHARD: exact timing] |
| 2 | SMS sent | Callback task created for office/dispatch |
| 3 | Callback made | Logged to CRM with outcome (booked, no answer, not interested) |
| 4 | No response after [NEEDS RICHARD: window] | Second follow-up attempt |

[NEEDS RICHARD: real benchmark — what % of missed calls convert if called back within an hour vs.
a day, based on his own client work. Do not publish a number without his confirmation.]

## Section 3 — Estimate follow-up ownership

The most common failure isn't giving a bad estimate — it's giving a good one and never following up.
Ownership needs to be explicit at each stage:

- **Estimate sent** → sales/estimator owns follow-up for the first [NEEDS RICHARD: window].
- **No response** → moves to a nurture sequence, office owns it.
- **Customer requests changes** → back to estimator, not office.

Worked example (general pattern, not a specific client case): an HVAC contractor quoting a system
replacement typically loses the sale not on price, but on being the contractor who never called back
after the visit. [NEEDS RICHARD: replace with a real, anonymized pattern he's actually seen, with
his permission to reference it generically.]

## Section 4 — Field-to-office handoff

1. Tech completes job on-site.
2. Tech logs notes/photos before leaving the property (not "when I get back to the shop").
3. Office receives the job-complete signal and moves it to invoicing same day.
4. CRM record updated — job closed, invoice status tracked.

The failure point is almost always step 2 — notes/photos delayed until end of day or the next day,
which delays invoicing and creates a backlog that compounds.

## Section 5 — CRM readiness checklist

Built directly from the live TMT/Modern Trades CRM field-reconciliation work (hp-11's production
build) rather than a generic checklist — genuinely differentiated because it's drawn from an actual
production CRM audit, not a listicle:

- [ ] Every lead source captures first-touch attribution and preserves it on repeat contact.
- [ ] Email and SMS consent are tracked separately, with source and timestamp.
- [ ] Newsletter-only contacts don't accidentally create sales opportunities.
- [ ] Custom fields match what your team actually uses — not what a template assumed you'd use.
      [Cross-reference: hp-11's build found the difference between an inherited 137-field
      assumption and the actual live 99-field schema — a concrete example of this exact problem,
      usable here once hp-11's reconciliation is final and the owner approves referencing it.]
- [ ] Workflow actions have their required fields set — GHL production build encountered add-task
      actions silently failing to create tasks because an "Assign To" field was left blank, with
      no error surfaced anywhere except the execution log; usable as an anonymized example of why
      workflow failure monitoring matters, pending owner permission to reference it.

## Section 6 — Workflow failure monitoring and human approval controls

Automation that fails silently is worse than no automation — a broken workflow just looks like a
quiet CRM, and nobody notices until a customer complains that follow-up never happened. [NEEDS
RICHARD/OWNER SIGN-OFF: confirm it's fine to reference the "blank Assign To field" bug from the CRM
build generically, without naming the client, as a real example of this exact failure mode.]

## Section 7 — Trade-specific examples

General industry patterns only, no fabricated outcomes:

- **HVAC**: seasonal demand spikes make missed-call recovery highest-leverage.
- **Plumbing**: emergency-call routing and after-hours handoff are the common gap.
- **Electrical**: estimate-to-schedule gap tends to be the biggest leak (permits/inspections add
  delay that isn't communicated to the customer).
- **Roofing**: insurance-claim coordination adds a documentation-heavy handoff step that's easy to
  drop.

## Section 8 — Pinellas/Hillsborough licensing & resource links

(Already-verified real orgs from the link registry — safe to cite directly)
- Pinellas County Construction Licensing Board (pcclb.com)
- PHCC Pinellas (paphcc.com)
- RACCA (racca-florida.org)
- Tampa Bay Builders Association (members.tbba.net)
- Florida DBPR / CILB (statewide contractor licensing)

## Section 9 — Author/reviewer block

Author: Richard Fritzke. Reviewed date: [set at actual publish date].

## Section 10 — Schema & CTA

Article + Breadcrumb schema per brief. Contextual CTA at the end of Sections 2, 5, and 7 — Shop
Visit for local/onsite framing, Growth & Systems Blueprint for the structured-assessment framing.
No sitewide-identical CTA text.

---

**Status: DRAFT, not implemented as a live page.** Every `[NEEDS RICHARD]` marker must be resolved
before this goes live — no invented statistics, benchmarks, or specific outcomes ship without his
direct confirmation.
