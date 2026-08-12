# Execute in GoHighLevel — run these in the LeadConnector-authenticated terminal

Three things, in order. Each is copy-pasteable. Do them in this session — not the one
this document was written in — since that's the one with LeadConnector access.

---

## 1. Automation — Booking confirmed → confirmation message

Prompt for the LeadConnector-authenticated session:

> Using leadconnector, create a new workflow in this location named "Shop Visit —
> Confirmation". Trigger: Appointment Booked (or Calendar: Appointment Status changed to
> "confirmed"), scoped to the shop-visit calendar the booking widget at
> https://api.leadconnectorhq.com/widget/booking/p3Eg9CU6B1CzBII5W6jq uses. Action: send an
> email (and SMS if a verified sender number already exists — otherwise email only) to the
> contact confirming their shop visit, including the date/time and Richard's phone number
> 727-600-3425 for questions. Leave the workflow in draft/inactive until I confirm the copy.

Suggested message copy (matches the site's existing no-hype tone):

```
Subject: Your shop visit with The Modern Trades Mentor is booked

Hi {{contact.first_name}},

Your shop visit with Richard is confirmed for {{appointment.date}} at
{{appointment.time}}.

What to have ready: whoever answers your phones (if possible), a rough sense of your team
size, and 2–3 problems you'd like to talk through. No slide deck, no prep needed beyond
that.

Questions before then? Call or text 727-600-3425.

— Richard
The Modern Trades Mentor LLC
```

## 2. Automation — 24 hours before visit → reminder

Prompt for the LeadConnector-authenticated session:

> Using leadconnector, create a second workflow in this location named "Shop Visit — 24hr
> Reminder". Trigger: appointment start time minus 24 hours, same calendar as above. Action:
> send an email (and SMS if a verified sender exists) reminding the contact of tomorrow's
> visit, with an easy way to reschedule (link to the booking page) if something's changed.
> Leave in draft/inactive until I confirm the copy.

Suggested message copy:

```
Subject: Reminder — your shop visit is tomorrow

Hi {{contact.first_name}},

Quick reminder: Richard's coming by tomorrow, {{appointment.date}} at {{appointment.time}}.

Something come up? Reply to this email or call/text 727-600-3425 to move it — no problem
either way.

See you then.
— Richard
```

**Before activating either workflow:** test it against yourself first — book a real
appointment using your own contact info through the live widget, confirm both messages
actually arrive with the right merge fields, then activate for real contacts.

## 3. Build the lead-capture form (unblocks code already shipped)

The site's `/contact` page now has a capture-form section wired in and waiting — it's
hidden until this form exists and its URL is set. See `app/contact/page.tsx` and
`.env.example` → `NEXT_PUBLIC_CAPTURE_FORM_URL`.

Prompt for the LeadConnector-authenticated session:

> Using leadconnector, create a new form in this location named "AI Readiness Checklist —
> Website". Fields: Name, Email, Phone (optional). On submit, add the contact to this same
> location (same one the booking calendar uses — do not create a separate list) and tag
> them "website-checklist-lead". Give me the public embed URL for this form when done.

Then:
1. Set `NEXT_PUBLIC_CAPTURE_FORM_URL` to that embed URL in Vercel (Production env vars)
   for the `tmt` project, and redeploy.
2. Submit a real test entry through the live `/contact` page and confirm it lands as a
   contact tagged `website-checklist-lead` in the same location the booking widget feeds —
   not a second, disconnected list.

---

## What's deliberately not in this file

No broad SMS marketing setup, no nurture-sequence build, no automated review request. Per
`highlevel-automations.md` and `proof-loop.md`, those wait on 10DLC registration and real
case studies, respectively — building them now would be building against the plan, not for
it.
