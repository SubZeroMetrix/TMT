# TMT Pending Workflow Specs — Ready for Build

Full trigger/condition/action specs for every remaining CRM-side workflow, written against the
live schema so building them is copy-paste execution once the browser tool recovers. All follow
the established pattern: `Opportunity changed` trigger → `In pipeline` + `Pipeline stage` filters
→ `Add task` action assigned to Richard Fritzke (`qhmSJm3teofPIZAx2ynG`) — **critical: set the
Assign To field before saving, or GHL silently skips task creation** (see `TMT_TEST_RESULTS.md`
Test 8).

**Correction to prior status:** the TMT-side qualification task is already built and published —
`[TMT] Qualified - Next Steps Task` (id `9c841266-6412-477e-a473-f3b3844c0563`), trigger: TMT
Consulting Sales / Qualified. Only the MTCRM-side equivalent below is still pending.

## Pipeline/stage ID reference (from `get-pipelines`, verified live)

**TMT Consulting Sales** — `yjHqFVsBdew2rauJrktL`
| Stage | ID |
|---|---|
| New Inquiry | `d5c778ef-e3b8-4a7c-b7c4-389d6d5b0cc8` |
| Contact Attempted | `e3621a54-8ce4-48da-8395-fb85011102b2` |
| Qualified | `428ba39a-e1c0-4d03-9a7a-8c95f95b51a0` |
| Shop Visit Requested | `05eb25cf-537d-4fc6-b47b-80cebab5e894` |
| Shop Visit Booked | `06d79840-ccdb-4880-809e-e02ee1b1164c` |
| Shop Visit Completed | `d8f05b4c-ef55-46b0-b4b3-0508eebdf896` |
| Blueprint Proposed | `3348d656-f7bc-46a8-871a-af42ba7af27f` |
| Blueprint Sold | `469d1374-e05c-4d34-bc07-cf8449d6439f` |
| Implementation Proposed | `60f69bbd-3070-4afb-82b8-69a1a12480de` |
| Won | `770d2cf8-0b49-4984-9681-93c53f550ce5` |
| Long-Term Nurture | `12735440-cdfa-4665-b1bc-a69b0b3a876f` |
| Lost/Disqualified | `23791a12-3455-42f6-b032-c2ec8b0e628e` |

**Modern Trades CRM Sales** — `WpCwXf3mQ01xCPsKtKEM`
| Stage | ID |
|---|---|
| New Setup Request | `4611f1b5-8b0b-41de-bceb-9b0d76cda0a9` |
| Contact Attempted | `469b6175-347a-4fe6-addd-f70e9f5041ae` |
| Qualified | `52487b58-207e-43b3-aad9-d2a02a3b138e` |
| Plan Selected | `96619e5a-abb7-4483-b040-07891ec1eab3` |
| Demo Requested | `638148d4-9ae8-49bd-bacf-828df095f0cf` |
| Demo Booked | `539febcc-5c42-4d52-8c48-4a89a8cccf55` |
| Demo Completed | `fdccf30b-7d5b-4794-8a55-5fd6c287af02` |
| Setup Review | `f19d9529-4e26-4eeb-ab06-6765c4971244` |
| Ready for Provisioning | `74dafc0f-a337-4729-a48a-e61d607ffab8` |
| Awaiting Payment Capability | `25e1df96-ac47-4515-91ce-09a80a1f76a7` |
| Won | `21dda3c7-bde9-4872-9599-bb0f09b0e170` |
| Long-Term Nurture | `9d4eb4a4-3bde-42c5-acd3-d4266b9a520c` |
| Lost/Disqualified | `bce90f3a-ea33-499a-bcd8-5a95e23c2fca` |

---

## 1. [MTCRM] Qualified - Next Steps Task

- **Trigger:** Opportunity changed — In pipeline Equals "Modern Trades CRM Sales" AND Pipeline
  stage Equals "Qualified" (`52487b58-207e-43b3-aad9-d2a02a3b138e`)
- **Action:** Add task
  - Title: `Determine next steps for qualified MTCRM lead`
  - Description: `Opportunity moved to Qualified. Confirm which plan fits and move to Plan Selected, or schedule a demo.`
  - Assign to: Richard Fritzke
  - Due: 1 day
- **Build method:** clone `[TMT] Qualified - Next Steps Task`, swap pipeline to Modern Trades CRM
  Sales, swap stage to Qualified (MTCRM), update title/description text, confirm assignee carried
  over from clone (it should — verify, don't assume).

## 2. [MTCRM] Demo Completed - Follow-Up Task

- **Trigger:** Opportunity changed — In pipeline Equals "Modern Trades CRM Sales" AND Pipeline
  stage Equals "Demo Completed" (`fdccf30b-7d5b-4794-8a55-5fd6c287af02`)
- **Action:** Add task
  - Title: `Follow up on MTCRM demo`
  - Description: `Demo completed. Confirm interest, answer outstanding questions, and move to Setup Review or Lost/Disqualified with a reason.`
  - Assign to: Richard Fritzke
  - Due: 1 day
- **Build method:** clone `[TMT] Blueprint Proposed - Follow-Up Task` (same task-after-key-event
  shape), swap pipeline/stage, update text.

## 3. [MTCRM] Won - Handoff Task

- **Trigger:** Opportunity changed — In pipeline Equals "Modern Trades CRM Sales" AND Pipeline
  stage Equals "Won" (`21dda3c7-bde9-4872-9599-bb0f09b0e170`)
- **Action:** Add task
  - Title: `MTCRM sold — initiate provisioning`
  - Description: `Opportunity marked Won. Confirm payment capability is resolved (see Awaiting Payment Capability gate), then initiate account provisioning.`
  - Assign to: Richard Fritzke
  - Due: 1 day
- **Build method:** clone `[TMT] Won - Sold Handoff Task`, swap pipeline/stage, update text. **Use
  the delete-and-re-add pattern for the Add Task action if the clone shows any disabled-state
  artifact** — verify via Execution Logs after first live/test fire, don't just trust the builder
  UI (see the bug documented for the TMT Won workflow).

## 4. Review-eligibility workflow

**Function:** flag a contact as eligible for a review request once delivery is verified complete
— this should NOT fire on Won alone, since a review is only appropriate after the client has
actually experienced the outcome, not just signed.

- **Trigger:** Opportunity changed — In pipeline Equals "Client Delivery & Outcomes" AND Pipeline
  stage Equals "COMPLETE / NEXT ENGAGEMENT" (`d73bc67a-30e1-4adc-8ebb-c941540001ca` — confirm this
  ID against a fresh `get-pipelines` call before building; it was captured in the original
  inventory, not re-verified this pass)
- **Action 1:** Add contact tag — `review-eligible`
- **Action 2:** Add task
  - Title: `Send review request`
  - Description: `Delivery marked complete. Send the review-request email (template #16 in TMT_EMAIL_TEMPLATES.md) if not already automated.`
  - Assign to: Richard Fritzke
  - Due: 2 days (give a little buffer after completion before asking)
- **Open question:** whether to also auto-send the review email directly from this workflow once
  it exists as a GHL email action, vs. keeping it a manual task. Recommend manual task first pass
  — auto-sending review requests without a human check risks asking dissatisfied clients.

## 5. Referral-eligibility workflow

**Function:** same trigger logic as review-eligibility — a completed, successful engagement is
the right moment to ask for a referral.

- **Trigger:** same as review-eligibility (Client Delivery & Outcomes / COMPLETE-NEXT ENGAGEMENT)
  — **can likely be the same workflow as #4 with a second Add Task action, rather than a separate
  workflow**, to avoid double-triggering off the identical event. Recommend merging #4 and #5 into
  one workflow with two tasks (review + referral) unless there's a reason to keep them separate
  (e.g., different timing — referral ask often works better slightly later than review ask).
- **If built separately:**
  - Action 1: Add contact tag — `referral-eligible`
  - Action 2: Add task — Title: `Send referral request`, Description references template #17,
    due 5-7 days after delivery completion (later than the review ask, per general best practice
    of not asking for two things at once)

## 6. Dormant-lead reactivation

**Status: REUSED AND VERIFIED — no new workflow needed.** The inherited `Reactivation - Outreach
Started` workflow (id `118b9472-aab5-4e13-ab3e-6dfb6b6497aa`, published v3) already covers this
function per the original classification pass. Confirm its trigger logic still makes sense for
both TMT and MTCRM pipelines if it wasn't pipeline-scoped originally — worth a quick open-and-read
before assuming full coverage, but do not rebuild without first confirming a real gap.

---

## Build order recommendation

1. `[MTCRM] Qualified - Next Steps Task` — fastest, exact mirror of an existing pattern.
2. `[MTCRM] Demo Completed - Follow-Up Task` and `[MTCRM] Won - Handoff Task` — same pattern,
   slightly more text to customize.
3. Merged review+referral eligibility workflow — needs the stage ID re-verified first (`get-pipelines`
   before building, not from memory).
4. Confirm dormant-lead reactivation coverage — read-only check, no build needed if confirmed.

Every new workflow: verify Assign To is set before first save (the systemic bug), fire-test with
a labeled contact per `TMT_TEST_RESULTS.md`'s pattern, then document in `TMT_WORKFLOW_REGISTRY.md`.
