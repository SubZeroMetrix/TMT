# TMT Review Proof Engine

One canonical review record. Many controlled, owner-approved uses. No duplicated truth.

## Where it lives

- **Canonical record:** `lib/reviews.ts` — one `Review` object per real review, typed, with
  the full required field set (source, reviewer, rating, text, date, original URL, TMT
  response, reuse approval + date, per-channel used-on flags, case-study flag, last-used
  date, notes, optional draft assets).
- **Website integration:** `app/reviews/page.tsx` renders `reviewsApprovedForWebsite()` —
  only records where `reuseApproved === true` AND `usedOn.website === true`. Nothing
  appears on the public site without that gate passing.
- **Source of truth for content:** GHL Reputation → Reviews module
  (`app.gohighlevel.com/v2/location/WUDohU0gxddDrFhrOsQG/reputation/reviews`), itself fed
  by the connected Google Business Profile.

## Existing components reused (not rebuilt)

- GHL Reputation/Reviews already captures reviews from GBP, already has AI-drafted replies
  posted (Reviews AI, set to "Suggestive" — human-in-the-loop, not full auto-publish).
  This engine does not duplicate that; it reads from it.
- The `/reviews` page's existing `InfoCard`-based rendering pattern was kept as-is; only its
  data source changed, from a hardcoded array to `lib/reviews.ts`.
- No new GHL custom fields, tags, or objects were created. GHL's public API exposes no
  "reviews"/"reputation" domain at all (confirmed: `search_operations` with
  `domains: ["reputation"]` returns "Unknown operation domain"; an unscoped search over 232
  candidate operations returns nothing review-related). Review data is not accessible via
  the API today — only through the GHL web UI. This is a real platform gap, not a build
  choice; a future iteration would need GHL's Reviews AI export/webhook (if one ships) or
  manual entry into `lib/reviews.ts` after checking the UI, which is the current process.

## Verified state, 2026-08-20 (fresh pull, not assumed)

`OBSERVED`, `CONFIDENCE: HIGH` — pulled live from GHL Reputation UI and cross-checked
against the public Google local pack in the same session.

| Reviewer | Rating | Date | Source | GHL AI reply posted |
|---|---|---|---|---|
| Kim Gordon | 5★ | 2026-08-20 | Google (via GBP) | Yes |
| Brandon Harvey | 5★ | 2026-08-19 | Google (via GBP) | Yes |

Total: **2 reviews**, average 5.0/5 in GHL. Public Google search local pack shows the same:
"The Modern Trades Mentor LLC · 5.0(2)". **No sync gap found** — GHL and the public GBP
listing agree exactly. (This addresses the specific concern raised mid-build that GBP might
hold un-synced reviews GHL hasn't pulled; checked directly, not assumed.) The authenticated
GBP dashboard (`business.google.com/locations`) could not be reached directly — it requires
the owner's own Google login, same wall hit earlier this session; not pushed through.

No 1–3 star reviews exist. `SERVICE_RECOVERY` classification is implemented but has no real
record to exercise it against yet — it will apply automatically the first time a review
rated 1–3 stars is added to `lib/reviews.ts`.

## Classification (section 4 of spec)

Rule, applied in `lib/reviews.ts` at data-entry time (not yet automated — see Blockers):
4–5★ → `PROOF_CANDIDATE` (or further along the pipeline if already actioned) · 1–3★ →
`SERVICE_RECOVERY`. Both current reviews are 5★ → `PROOF_CANDIDATE` tier.

## Status per review

- **Brandon Harvey** — `PUBLISHED_USED`. Live on `/reviews` (this predates the engine; that
  prior publication is treated as the website's implicit approval record, not asserted for
  any other channel). `reuseApproved: true`, scoped to website only. LinkedIn/Facebook/sales
  collateral: not approved — the owner has not been asked.
- **Kim Gordon** — `PROOF_CANDIDATE`. `reuseApproved: null` (pending). Draft assets prepared
  in `lib/reviews.ts` (`drafts.website`, `drafts.linkedin`) — verbatim review text
  reformatted for each destination, no invented claims. **Not published anywhere.** Needs an
  explicit **REUSE APPROVED: YES/NO** decision from the owner before any use, including the
  website.

## Approval gate (section 7)

`reuseApproved` on each record is the hard gate. It defaults to `null` for anything new —
the website integration explicitly filters on `reuseApproved === true`, so an unreviewed
record cannot appear anywhere by default. Approving reuse and actually publishing to an
external channel (LinkedIn, Facebook) are kept as two separate actions: approval only
unlocks a draft for the owner to review; nothing is posted automatically. This matches
TMT's standing rule — no autonomous sending, posting, or outreach.

## Distribution / channel status (section 8)

- **Website** — usable now (gated by `reuseApproved`), live.
- **LinkedIn** (TMT company page, `urn:li:organization:130213987`) — legitimately connected
  and usable as a draft destination; corrected and verified earlier this session. A LinkedIn
  draft exists for Kim Gordon's review in `lib/reviews.ts`, unposted, pending approval.
- **Facebook** — connected per this session's GHL `get-account` verification; no draft asset
  built yet (out of scope for this pass — only the real end-to-end path was built and tested,
  per the "smallest reliable integration" instruction). Same pattern extends here later.
- **Instagram** — marked `pending`, not usable. The Instagram account connected to GHL's
  social planner is Richard's personal photography account (@cinematictropics), not a TMT
  business account — flagged this session, not TMT's to post to. No draft asset built for
  this channel.
- **Sales collateral** — not built this pass; `usedOn.salesCollateral` field exists and is
  ready to be set `true` once an actual collateral asset is produced.

## Response workflow (section 10)

Both current reviews already have an AI-drafted, human-visible reply posted in GHL (Reviews
AI set to "Suggestive" — a human reviewed/allowed it, it is not fully autonomous). Nothing
in this build changes that config. Both reviews are 5★ with no complaint content, so no
`SERVICE_RECOVERY`/dispute handling was exercised in this pass; the status value exists and
routes correctly the first time a 1–3★ review appears.

## Tracking (section 11)

`usedOn` (per-channel booleans) and `lastUsedDate` on each `Review` record are the tracking
mechanism. Currently: Brandon Harvey → website only, `lastUsedDate: 2026-08-19`. Kim Gordon →
not used anywhere yet.

## Measurement (section 12)

`UNKNOWN` — no attribution data (clicks, conversions, or bookings traceable to a specific
review's reuse) exists yet. Not fabricated. Would require UTM-tagged links or GA4 event
tracking on the `/reviews` page and on any LinkedIn post using a review, neither of which
exists today.

## End-to-end test (section 13)

Ran the real pipeline against the real Brandon Harvey review (not a fabricated test record):
inspected GHL Reputation UI → confirmed it's GBP-sourced → captured full record into
`lib/reviews.ts` → classified 5★ → `PROOF_CANDIDATE` tier → marked `reuseApproved: true` /
website-only (matching its actual prior-published state) → `reviewsApprovedForWebsite()`
returns it → `/reviews` page renders it → `npx tsc --noEmit` clean → `npm run build` clean,
`/reviews` compiles as a static route. Passed.

Also ran the newly-discovered Kim Gordon review through inspection → classification → draft
generation, and confirmed it correctly does NOT reach the website (gate correctly blocks an
unapproved record) — negative-path test passed.

## Blockers / not built this pass

- GHL's API has no reviews/reputation endpoint, so there is no automated pull — updating
  `lib/reviews.ts` after a new review appears is a manual step (check the GHL Reputation UI,
  add the record, run through classification). A future automation would need a GHL webhook
  or scheduled scrape, neither of which exists.
- Authenticated GBP dashboard check blocked by a Google login wall requiring the owner.
- No Facebook or sales-collateral draft assets built yet (real path built and tested for
  website + LinkedIn only, per "smallest reliable integration").
- No measurement/attribution wiring.

## Files changed

- `lib/reviews.ts` (new) — canonical review registry.
- `app/reviews/page.tsx` (edited) — now sources `VERIFIED_REVIEWS` from
  `reviewsApprovedForWebsite()` instead of a hardcoded array.
- `TMT_REVIEW_PROOF_ENGINE.md` (new) — this doc.

## Commit

Local commit made in `~/tmt`; **not pushed** — push needs the owner's explicit go-ahead per
standing session rule on outward-facing actions.
