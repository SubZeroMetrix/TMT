# HighLevel — Automations to Build

Internal build checklist. **Richard builds these in HighLevel; there is no API access from the
codebase**, so nothing here is automated by the site.

Build in this order. Each one either protects a booked visit or moves a deal forward — nothing here
is marketing.

---

## The seven

| # | Trigger | Action | Why it matters |
|---|---|---|---|
| 1 | Booking confirmed | Confirmation to the contact | The booking is worthless if they forget it |
| 2 | 24 hours before visit | Reminder to the contact | The single highest-value automation on this list — no-shows cost a drive across the bay |
| 3 | Booking confirmed | Internal task: prepare for shop visit | Read the three fit answers before driving |
| 4 | Visit marked complete | Internal task: send audit proposal within 24 hours | The proposal going out same-day is what converts the visit |
| 5 | Proposal sent + 3 days | Follow-up to the contact | Most deals die here, quietly |
| 6 | Proposal sent + 7 days | Second follow-up, then stop | Two is the ceiling; after that, call |
| 7 | Implementation complete + 30 days | Internal task: outcome check | This is the proof loop — see `proof-loop.md` |

**Review requests are not on this list by trigger.** A review is only requested after a real
completed engagement with a measured result, by hand, as part of the conversation in
`proof-loop.md`. Never automated, never incentivised.

---

## What not to switch on yet

- **Broad SMS marketing.** Do not send until messaging consent and sender registration (10DLC
  brand and campaign) are correctly set up. Sending before that gets numbers filtered or blocked,
  and unwinding a bad sender reputation is slow.
- **AI-powered follow-up that replies to customers unread.** Same rule as everywhere else: nothing
  reaches a customer without a person reading it first.
- **Long nurture sequences.** With no case studies yet there is nothing to nurture with. Revisit
  once the proof loop has produced two.

---

## Build notes

- Automations 1 and 2 are the minimum viable set. If only two get built this week, build those.
- Test each one against yourself before it touches a real contact.
- Keep the internal tasks (3, 4, 7) as tasks rather than emails — they are for Richard, and an
  email to yourself gets ignored.
- The booking widget on the site is already live at
  `https://api.leadconnectorhq.com/widget/booking/p3Eg9CU6B1CzBII5W6jq`, so bookings are already
  flowing into HighLevel. These automations sit on top of that.
