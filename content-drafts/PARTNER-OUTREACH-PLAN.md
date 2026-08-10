# TMT — Software Vendor Relationships

Created 2026-08-09. Audience: **software companies**, not contractors.

## The frame

Learn these products deeply, join their partner programs, train their customers on them, and
recommend each one honestly when it actually fits.

**Comp policy (revised 2026-08-09):** commissions and partner comp are accepted, and **disclosed
to the contractor before any recommendation is made**. Recommendations are made on fit alone —
vendors are never ranked by what they pay. Supersedes the earlier no-commission rule. Full
reasoning: memory `tmt-vendor-neutrality-decision`.

The outreach therefore asks for **both tracks** — the partner program *and* certification plus
paid training. The training half is the one to lead on, for two reasons: it's the larger revenue
line by a wide margin (see the comp column below), and it's the part that makes a vendor take the
call, because their real problem is customers who use 20% of the product and churn in month five.

## The five targets

Researched 2026-08-09. Program URLs and full notes in `partner-outreach/targets.csv`.

| Company | Program | Comp track | The training ask |
|---|---|---|---|
| **ServiceTitan** | Partner Program / Certified Provider | No public referral comp — the credential *is* the value; tiers up to Titanium | Sit the Certified Provider exam, then implementation + staff training |
| **FieldEdge** (Xplor) | FieldEdge Partner Network | Mixed affiliate/integration; terms not public — **ask** | Trainer slot on the Powerhouse Consulting Group model they already announced |
| **Housecall Pro** | HCP Partner Program | PartnerStack, up to ~$320/qualified referral | A place on the Business Coaching bench (operators at $3M+) |
| **Jobber** | Jobber Partner Network | PartnerStack — affiliate (~$5/signup), referral, reseller. **Ask which fits a trainer** | Jobber Academy fluency + partner-directory listing |
| **Workiz** | Workiz Partner Program | ~5 customers for $6,000 + 30% year-end bonus | Product access deep enough to train a whole office |

**Start with ServiceTitan and FieldEdge.** The ask maps to something each already does, so the yes
is easy and the credential is worth the most. Workiz is the likeliest fast reply — smallest company,
and their partner page openly courts consultants.

**Note the comp reality:** at 0–15 employee shops, referral comp is low four figures a year. A
training engagement is worth multiples of that. Ask for both, but don't trade the training
conversation to get the affiliate link.

## The sequence — 4 touches over 18 days

1. **Day 0** — both asks, training-forward, with the disclosure practice stated plainly
2. **Day 4** — the churn angle: rollouts fail on process, not product. Offer the checklist.
3. **Day 11** — send the checklist. No ask at all. Highest reply rate in the sequence.
4. **Day 18** — permission to close: "wrong fit or wrong person, just say so."

Then stop. Four emails is the ceiling. Move to LinkedIn or a conference.

## Automated vs. not

**Automated:** target research, per-company ask selection, personalized drafts for all 4 touches,
the send schedule, and flagging anything incomplete.

**Not automated, deliberately:**
- **Platform signups.** Breaks vendor ToS, dies on CAPTCHA and email verification, and opening a
  relationship by violating someone's terms is a bad first impression. Ten signups, three minutes
  each, by hand, once.
- **Sending.** Cold volume from the primary domain would put contractor email deliverability at
  risk. Drafts get reviewed and sent by hand.
- **Replies.** The reply is the entire point.

## How to run it

```
node scripts/generate-partner-outreach.mjs [--start 2026-08-12]
```

Reads `targets.csv` + `contacts.csv`, writes 20 drafts to `partner-outreach/drafts/<company>/`
and a dated table to `partner-outreach/SCHEDULE.md`. Touches no network, sends nothing.

## Blockers before anything goes out

1. **`contacts.csv` is empty** — needs a real human per company (partner / alliances / channel /
   training-partner title). All 20 drafts currently carry `[[MISSING: first_name]]` and
   `[[MISSING: email]]`.
2. **Postal address** — CAN-SPAM requires one. Set `TMT_POSTAL_ADDRESS` and re-run.
3. ~~The touch-3 asset~~ **DONE** — `assets/rollout-failure-one-pager.md` is written: six
   questions, what each weak answer predicts, a scoring table, and one free thing to do this week.
   Export to PDF before sending.
4. **Contractor-facing disclosure language doesn't exist yet.** The comp policy only holds if the
   disclosure is real — a standing paragraph for proposals, a line in the discovery-call script,
   and a public page. Needed before the first commissioned recommendation, not before the emails.

## Compliance floor

- CAN-SPAM applies to B2B: real postal address, working opt-out, honest subject lines.
- **FTC endorsement rules apply to the contractor side:** material connections to a recommended
  vendor must be disclosed clearly and conspicuously, including in content and video.
- Never claim a partnership, certification, or integration that doesn't exist yet.
- Never name a contractor client to a vendor without written permission.
