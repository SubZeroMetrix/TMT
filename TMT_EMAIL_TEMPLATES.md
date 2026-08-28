# TMT Reusable Email Templates

Draft copy for the 11 email assets flagged as deferred in `TMT_REVENUE_ACQUISITION_STATUS.md`.
**Not yet built into GHL** — these are ready-to-paste drafts for whoever builds the corresponding
email actions/workflows next (either continuing this session once the browser tool recovers, or
the owner directly). Voice follows the TMT brain: direct, local, no banned jargon (leverage,
synergy, transform, seamless, AI-powered, etc.), uses their units (calls, trucks, jobs, tickets).

---

## 1. Inquiry acknowledgment (General TMT Contact)

**Subject:** Got your message — here's what happens next

Thanks for reaching out to The Modern Trades Mentor.

We read every inquiry personally — no auto-responder loop. Expect a real reply from our team
within 1 business day.

In the meantime, if you want to see how this works in person, you can book a free 60-minute Shop
Visit — no pitch, no pressure, just a walk-through of where your systems are costing you time.

— The Modern Trades Mentor

---

## 2. Shop Visit confirmation

**Subject:** You're booked — Shop Visit confirmed

Your Shop Visit is confirmed for {{appointment.date}} at {{appointment.time}}.

What to expect: about 60 minutes on-site. We'll look at how calls, scheduling, and quoting
actually move through your shop today — no sales pitch, no vendor comparison, just a straight
look at where things are slipping.

Need to reschedule? Reply to this email or call {{location.phone}}.

---

## 3. Shop Visit reminder

**Subject:** Reminder: Shop Visit tomorrow at {{appointment.time}}

Quick reminder — we're on site tomorrow at {{appointment.time}} for your Shop Visit.

Nothing to prepare on your end. If anything's changed, reply here or call
{{location.phone}} and we'll get you rescheduled.

---

## 4. Shop Visit follow-up

**Subject:** Following up on our visit

Good to see your shop. Based on what we walked through, here's what stood out as worth fixing
first — happy to talk through it whenever works for you.

If a Growth & Systems Blueprint makes sense as the next step, reply here and we'll get something
on the calendar.

---

## 5. Blueprint inquiry acknowledgment

**Subject:** Growth & Systems Blueprint — next steps

Thanks for your interest in a Growth & Systems Blueprint.

This is where we map out exactly where your operation is leaking time and money, and what to fix
first — in priority order, not a generic checklist.

We'll follow up within 1 business day to get a conversation on the calendar.

---

## 6. Blueprint proposal sent

**Subject:** Your Growth & Systems Blueprint is ready

Your Blueprint is attached. It covers what we found, what it's costing you, and the order we'd
recommend fixing it in.

No pressure to decide today — take a look, and let's talk through any questions when you're
ready.

---

## 7. Blueprint follow-up (no response)

**Subject:** Still thinking it over?

Just checking in on the Blueprint we sent over. No rush — but if anything in there wasn't clear,
or if the priority order doesn't match how you'd tackle it, tell us and we'll adjust.

---

## 8. Modern Trades CRM Start Setup acknowledgment

**Subject:** Setup request received — here's what's next

We've got your Modern Trades CRM setup request. Someone from our team will reach out within 1
business day to confirm your plan and get provisioning started.

---

## 9. Modern Trades CRM demo confirmation

**Subject:** Your CRM demo is confirmed

Your Modern Trades CRM demo is set for {{appointment.date}} at {{appointment.time}}.

We'll walk through exactly how it handles your calls, jobs, and follow-up — using examples from
businesses like yours, not a generic slide deck.

---

## 10. Modern Trades CRM demo reminder

**Subject:** Reminder: CRM demo tomorrow

Quick reminder — your Modern Trades CRM demo is tomorrow at {{appointment.time}}. Nothing to
prepare, just bring your questions.

---

## 11. Modern Trades CRM demo follow-up

**Subject:** What did you think?

Thanks for sitting through the demo. What questions came up for you afterward? Happy to go
deeper on anything specific to how your shop runs.

---

## 12. Newsletter — Field Notes welcome

*(Already built and live in GHL — "Field Notes — Subscriber Welcome" workflow, verified working.
Included here only for reference/consistency check.)*

---

## 13. Newsletter — Growth & Systems Brief welcome

*(Already built and live — see `[NEWSLETTER] Growth & Systems Brief - Subscriber Welcome`
workflow, fire-tested and passing.)*

---

## 14. Preference confirmation

**Subject:** Your newsletter preferences are updated

Your preferences are updated. You'll only get the newsletters you asked for — nothing else.

Want to change this again later? {{preference_update_link}}

---

## 15. Unsubscribe confirmation

**Subject:** You're unsubscribed

You won't hear from us again unless you reach back out. If this was a mistake, reply here and
we'll get you resubscribed.

---

## 16. Review request

**Subject:** Got 60 seconds?

If the work we did together was useful, a quick review helps other trades owners find us —
{{review_link}}.

No pressure either way, and thanks either way.

---

## 17. Referral request

**Subject:** Know another shop that could use this?

If you know another owner dealing with the same call-handling or scheduling headaches you had,
send them our way — {{referral_link}}. We'll take good care of them.

---

## 18. Reactivation

**Subject:** Still dealing with the same bottleneck?

It's been a while since we talked. If the thing that was slowing you down is still slowing you
down, worth a quick conversation — no obligation, just a check-in.

---

## Build notes for whoever wires these in

- Merge tags shown ({{appointment.date}}, {{review_link}}, etc.) need to be mapped to the actual
  GHL merge-field/custom-value equivalents at build time — verify against `TMT_FIELD_REGISTRY.md`.
- Templates #2–4 and #9–11 are appointment-triggered — wire off the relevant calendar's booking/
  reminder/completion events once the 3 draft calendars go live (business-hours gate, see
  `TMT_LAUNCH_CHECKLIST.md`).
- Templates #16–17 (review/referral) should only fire post-delivery, gated on a verified positive
  outcome — do not blanket-send to every contact who reaches "Won."
- None of these have been sent or tested. Test each with a labeled internal contact before
  activating, per the pattern in `TMT_TEST_RESULTS.md`.
