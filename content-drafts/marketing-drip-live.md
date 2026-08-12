# Marketing drip — live, sending to real leads

Built at Richard's explicit direction, overriding the "wait for case studies / wait for
10DLC" gate in `highlevel-automations.md` and `90-day-scorecard.md`. Content below is
honest regardless of that override: **nothing claims a measured result, because none
exist yet.** It leans on the published Insights articles and TMT's actual positioning
instead of inventing proof.

---

## Sequence: "Shop Visit → No Booking Yet" (email, 3 messages)

Applies to: a contact who filled the capture form or was otherwise added, but hasn't
booked a shop visit. Stops the moment they book (exit condition, not a hard stop count).

**Email 1 — Day 0 (immediate)**
```
Subject: The checklist, and one honest note

Hi {{contact.first_name}},

Here's the Operational AI Readiness checklist you asked for. [attach/link]

One honest note: most of what's in it isn't about AI at all — it's about whether your
follow-up, scheduling, and quoting actually move information the way you think they do.
AI is only worth talking about after that's true.

If you want a second set of eyes on your specific setup, a shop visit is free, 60
minutes, and vendor-neutral — no software pitch either way:
https://themoderntradesmentor.com/book-a-strategy-call

— Richard
The Modern Trades Mentor LLC
```

**Email 2 — Day 4**
```
Subject: What actually breaks first (field note)

Hi {{contact.first_name}},

A field note, not a pitch: https://themoderntradesmentor.com/insights/what-to-automate-first

Short version — the order most contractor businesses should tackle problems in, and why
starting with the wrong one wastes months.

Still happy to walk your specific setup in person if useful:
https://themoderntradesmentor.com/book-a-strategy-call
```

**Email 3 — Day 9 (final in this sequence)**
```
Subject: Last one from me on this

Hi {{contact.first_name}},

Last note in this series. If a shop visit is useful, it's here — free, 60 minutes, no
pressure: https://themoderntradesmentor.com/book-a-strategy-call

If not, no more emails from this sequence. You can always call or text
727-600-3425 directly.

— Richard
```

---

## SMS — single opt-in message only, not a sequence

Given real uncertainty about 10DLC/sender status, this is deliberately ONE message, sent
only to contacts who explicitly opted into SMS (checkbox on the capture form / booking
flow), not a multi-message drip. Confirm delivery on this before ever expanding to more.

```
Hi {{contact.first_name}}, it's Richard w/ The Modern Trades Mentor. Got your info —
here's your free checklist: [link]. Reply STOP to opt out anytime.
```

---

## Execution — run in the LeadConnector-authenticated terminal, in order

### 1. Precondition check (run first, report back before anything else)
```
Using leadconnector for The Modern Trades Mentor LLC (WUDohU0gxddDrFhrOsQG): check
whether this location has (a) a verified SMS-capable phone number and its current
registration/compliance status, and (b) a connected/authenticated custom email sending
domain vs. the shared default. Report both plainly — do not create or send anything yet.
```

### 2. Build the email sequence (from step 1's result — proceed regardless per instruction, but report the precondition status alongside this)
```
Using leadconnector for the same location: create a new workflow named "Nurture —
Checklist to Booking". Trigger: contact tagged "website-checklist-lead" OR added via the
AI Readiness Checklist form. Actions: 3 emails on the schedule and content below [paste
Email 1/2/3 from this file], each spaced as noted, with exit condition "appointment
booked". ACTIVATE this workflow — do not leave in draft.
```

### 3. Build the SMS message (single message, not a sequence)
```
Using leadconnector for the same location: create a workflow named "SMS — Checklist
Opt-in". Trigger: same as above, AND contact has SMS consent/opt-in = true. Action: one
SMS using [paste SMS copy from this file]. ACTIVATE this workflow.
```

### 4. If step 1 showed no verified SMS number / no 10DLC registration
```
Using leadconnector for the same location: start/check the A2P 10DLC brand and campaign
registration process for this location's SMS number. Report what's needed to complete it
and its current status.
```
