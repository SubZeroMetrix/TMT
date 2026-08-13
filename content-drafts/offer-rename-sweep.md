# Offer Rename Sweep — one pass, after 2026-08-14

**Decision (owner, 2026-08-12):** the commercial offer is **Growth & Systems Blueprint**, TMT-wide.
Retires "Operational AI Readiness Audit" and "Technology & AI Readiness Audit" as *offer names*.

**Canonical definition — use this wording everywhere:**

> A fixed-fee diagnostic and implementation-planning engagement that identifies growth constraints,
> workflow leaks, CRM/software gaps, sales and process problems, and the highest-value actions to
> improve the business.

**Do not start before the Coastal meeting.** Until this sweep runs, the Coastal proposal says
"Blueprint" while the site says the old name. That mismatch is known and accepted — **do not fix it
one file at a time.** A partial rename is worse than either name used consistently.

## Why

The old name made AI sound like the product. Growth and systems improvement is the product; AI is used
behind the scenes where it genuinely helps. Better for contractors, manufacturers and service
businesses, and it travels to future verticals instead of dating.

**"Operational AI Readiness" survives as an internal capability only** — an optional section inside a
Blueprint when the engagement warrants it. Never the thing the customer thinks they are buying.

## Surfaces — all in one commit

| # | Surface | Where |
|---|---|---|
| 1 | Service pages / offer copy | `app/services/**` |
| 2 | Homepage offer references | `app/page.tsx` |
| 3 | Shop Visit → next-step copy | `app/book-a-strategy-call/**`, `app/contact/**` |
| 4 | FAQ entries naming the offer | `lib/seo/faqs.ts` |
| 5 | Vendor-payment FAQ | wherever the vendor-neutrality answer lives |
| 6 | Page metadata, titles, descriptions | per-page `metadata` exports |
| 7 | Schema / JSON-LD service names | `lib/seo/schema.ts` |
| 8 | `llms.txt` | `public/llms.txt` |
| 9 | Sitemap-adjacent copy | `app/sitemap.ts` if it names services |
| 10 | Insights posts referencing the offer | `app/insights/**` |
| 11 | Business brain | `~/.claude/context/tmt.md` — services list + pricing section |
| 12 | Proposal + roadmap templates | `~/tmt-commercial/the-modern-trades-mentor/` |
| 13 | Playbook references | `~/.claude/skills/play/` — `ai-readiness-audit` playbook name/refs |
| 14 | Internal planning docs | `content-drafts/**` including this file's own references |

## Rules for the pass

- **One commit, one push.** Everything named above, together. If any surface cannot be updated in the
  same pass, stop and report rather than shipping half.
- **Price is unchanged by the rename** — $1,500 fixed fee, delivered in five business days, founding
  pricing for a limited number of early engagements.
- **The free Shop Visit boundary does not change.** Still excludes solution design, vendor comparison
  and any written roadmap.
- **Keep URLs.** Do not rename routes. If a URL contains `ai-readiness`, leave it and change only the
  visible copy — a redirect chain is not worth a name change, and the URL is not the offer.
- **Do not weaken the AI credibility story.** Richard being a tradesman who understands AI stays
  central to positioning. This changes the *offer name*, not the differentiator.

## Verification before commit

```
grep -rniE "operational ai readiness|technology & ai readiness|ai readiness audit" \
  app lib public content-drafts
```

Expect zero hits as an **offer name**. Hits are acceptable only where the phrase describes a
capability *inside* a Blueprint. Then:

- build passes
- `llms.txt` and schema still valid
- Shop Visit → Blueprint → implementation ladder reads coherently on the live site
- one prospect-eye pass: read the services page and the FAQ as a contractor would

## Post-sweep

Update the brain's rename block from "SWEEP NOT YET EXECUTED" to the date it ran, and log the task in
`~/.claude/RUN_LOG.md`.
