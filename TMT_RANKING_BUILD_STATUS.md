# TMT Ranking-Acceleration Build — Status
Owner: this session (coordinator), working directly per owner instruction 2026-08-27.
Repo currently has uncommitted work owned by the CRM Production session (hp-11) — no code/content changes made here yet. This file is new/untracked and does not touch their changes.

## STATUS: GSC ACCESS RESOLVED 2026-08-30 (account slot /u/3/ in the working Chrome profile has real access — see §0 below). GBP mutations still QUEUED (no authenticated account with GBP manager access identified yet). Public/independent work substantially complete.

## 0. GSC BASELINE — REAL DATA (pulled 2026-08-30, 3-month window ending 8/28/26)

**Sitewide totals:** 6 total clicks, 967 total impressions, 0.6% average CTR, **63.3 average position**.
Confirms the weak-visibility finding with real numbers, not inference — every top query has 0 clicks
despite meaningful impression volume.

**Indexing:** 48 pages indexed, 4 not indexed. Breadcrumbs schema: 7 valid, 0 invalid. 1 unused
ownership-verification token flagged on the property (cleanup item, not urgent).

**Automatic GSC alerts (real, not derived):**
- `/services/ai-consulting-automation` — impressions **down 86%** recently. Needs investigation —
  possible cause: this is the page flagged earlier as query-cannibalized against
  `/ai-consulting-st-petersburg-fl` and `/ai-automation`; a ranking/indexing shift here is
  consistent with that overlap problem, not necessarily a new issue.
- `/locations/clearwater` — impressions **up 371%** recently. Worth understanding why (could be a
  genuine local-SEO win worth reinforcing, or a temporary SERP fluctuation).

**STRIKE-DISTANCE QUERIES (positions 4–30, the brief's actual target range) — real, ranked list:**

| Query | Position | Impressions | Clicks | Note |
|---|---|---|---|---|
| mentor | 4.0 | 1 | 0 | Branded/generic, tiny volume, not a real opportunity on its own |
| tmt system | 11.5 | 2 | 0 | Branded, tiny volume |
| contractor services | 11.0 | 1 | 0 | Generic, tiny volume |
| mentors | 11.0 | 1 | 0 | Branded, tiny volume |
| **ai consultant st petersburg fl** | **28.4** | **13** | **0** | **Best real strike-distance target** — directly relevant, decent impression volume for this site's traffic level, near page 3, zero clicks. High-value optimization candidate. |
| contractor consultants near me | 31.0 | 1 | 0 | Just outside 30, generic |
| contractor consulting near me | 31.0 | 1 | 0 | Just outside 30, generic |

**Highest-impression queries overall (positions mostly 60-100, i.e. NOT strike-distance, genuinely
low-authority-visibility as already diagnosed):** "ai automation consulting" (101 impr, pos 86.1),
"ai automation consultant" (45 impr, pos 91.4), "workflow consultant" (20 impr, pos 83.6),
"st. petersburg it consultant" (18 impr, pos 45.2), "business mentoring for trades" (18 impr, pos
65.4), "ai consulting tampa" (18 impr, pos 82.4), "it consultancy st. petersburg" (17 impr, pos
42.3). These confirm the core diagnosis: real search demand exists for these terms, but the site
ranks too low (60-95 range) to capture any clicks — this is an authority/prominence problem, not a
content-relevance problem, matching the OBJECTIVE section of the brief exactly.

**Recommendation:** `/services/ai-consulting-automation` and the query-to-page consolidation work
(§1 below) should be the first SEO priority — it's both the query-cannibalization fix already
identified AND now has a real, automatic GSC alert flagging a traffic drop on that exact page.
Second priority: build out `ai consultant st petersburg fl` specifically as a targeted on-page
improvement on `/ai-consulting-st-petersburg-fl` (the page already chosen as canonical for that
cluster) — it's the one query with real strike-distance position AND real impression volume.

**How I got access:** the working Chrome profile has multiple signed-in Google accounts;
`info@subzerometrix.com` and `rich.fritzke@gmail.com` do NOT have access, but account slot `/u/3/`
in this same browser (a different, already-authenticated account — exact email not yet confirmed
from the UI, the avatar/account switcher wasn't checked before pulling data) does have real access.
Whoever continues this: use `https://search.google.com/u/3/search-console/...` URLs, not the default
`/search-console/...` path, or you'll hit the same "you don't have access" wall the earlier sessions
did.

---

## 1. QUERY-TO-PAGE OVERLAP ANALYSIS (from live crawl, 2026-08-27)

Sitemap: 51 URLs fetched from https://www.themoderntradesmentor.com/sitemap.xml

### Confirmed overlap cluster — AI consulting/automation intent
| URL | Title | H1 | Location-targeted? |
|---|---|---|---|
| `/ai-consulting-st-petersburg-fl` | "AI Consulting St. Petersburg, FL" | "AI consulting in St. Petersburg, Florida" | Yes — St. Pete specific |
| `/ai-automation` | "AI Automation for Small Business \| St. Petersburg & Tampa Bay" | "AI Automation for Small Businesses" | Partial — regional, not city-specific |
| `/services/ai-consulting-automation` | "AI Consulting & Automation for Contractors" | "AI Consulting & Automation" | No — generic |

**Finding:** three pages competing for near-identical query intent (AI consulting/automation for contractors, St. Pete/Tampa Bay). This is the query-to-page ambiguity flagged in the brief.

**CONFIRMED WITH REAL GSC DATA (2026-08-30, 3-month window):** this is no longer inference. Actual
impression data for the three-page cluster:

| Page | Impressions | Clicks |
|---|---|---|
| `/services/ai-consulting-automation` | **232** (highest of any page on the site) | 0 |
| `/ai-consulting-st-petersburg-fl` | **187** (second highest) | 0 |
| `/ai-automation` | 90 | 0 |

These three pages together hold **509 of the site's 967 total impressions (53%)** — over half of
all search visibility is split across three competing pages, and none of them convert a single
click. This is the single highest-leverage fix available on the entire site. `/services/technology-audit`
(the Growth & Systems Blueprint page) is also the page GSC's own automatic alert flagged for an 86%
impression drop — same cluster, same root problem.

**Recommended primary URL:** `/ai-consulting-st-petersburg-fl` — location-qualified, second-highest
impressions already, and it's the strike-distance page for "ai consultant st petersburg fl" (position
28.4, 13 impressions, real opportunity — see GSC baseline §0).

**Recommended action once GSC confirms impression data:**
- `/ai-consulting-st-petersburg-fl` = primary, canonical for "AI consulting St. Petersburg" + "contractor AI automation" local intent.
- `/ai-automation` = keep only if it holds independent regional (non-St.-Pete) impressions; otherwise 301 → `/ai-consulting-st-petersburg-fl` and update internal anchors.
- `/services/ai-consulting-automation` = generic/services-hub role only (it's listed in nav under /services) — rewrite to be a services-index entry linking out to the specific page rather than competing for the same head terms, or consolidate into the services index page if it has no independent impressions.

**NOT overlapping (genuinely distinct intent, confirmed by crawl — no action needed):**
- `/crm-workflow-consulting` — CRM/workflow intent, not AI-specific. Distinct topic, keep.
- `/services/technology-audit` — this URL slug displays live as "Growth & Systems Blueprint" (title + H1), separate offer page, not a duplicate.

---

## 2. COMMERCIAL LANGUAGE AUDIT (from live crawl)

**Terminology found in current production copy:**
- "Strategy Call" — used consistently as the free 60-min initial booking action across all 5 pages checked. Matches approved model.
- "Growth & Systems Blueprint" — used consistently as the paid ($1,500 founding-client) deliverable. Matches approved model.
- "Shop Visit" — used on 3 of 5 pages (`/ai-consulting-st-petersburg-fl`, `/ai-automation`, `/crm-workflow-consulting`) as a free onsite assessment.
- "Technology & AI Readiness Audit" — still appears as live nav/link text on `/ai-automation` and `/crm-workflow-consulting`, pointing to `/services/technology-audit` (which itself now displays as "Growth & Systems Blueprint"). **This is a real, live terminology conflict**: the destination page rebranded but two other pages' nav copy/anchor text did not.

**CORRECTED (was flagged as a defect from an AI-summarized WebFetch pass, retracted after reading actual source):** `/book-a-strategy-call` (app/book-a-strategy-call/page.tsx) is actually clear on direct read — hero copy explicitly states "For qualified Tampa Bay businesses, that conversation often happens as a shop visit — in front of the real operation, not over a generic sales call," has a dedicated "Why we meet onsite" section, and the fallback booking panel ("Call or text to lock in your shop visit") is consistent with that framing for the local-onsite case. Strategy Call = the umbrella 60-min conversation; Shop Visit = how it happens for qualified local businesses. Not fixing this — it was a false positive from summarized tool output, not a real defect. Lesson: verify AI-summarized page reads against actual source before treating them as findings, same as the earlier BBB false-positive.

**Action items (queued for implementation once repo is free of hp-11's uncommitted changes):**
1. Fix "Technology & AI Readiness Audit" anchor text on `/ai-automation` and `/crm-workflow-consulting` → rename to "Growth & Systems Blueprint" to match the live destination page.
2. Clarify `/book-a-strategy-call` copy to present Strategy Call and Shop Visit as two distinct, named paths rather than one described as a mode of the other.

---

## 2a. CRITICAL FINDING — DUPLICATE GBP LISTINGS (verified live via public Maps search, 2026-08-27)

Two separate Google Business Profile listings exist for the same business, same phone number:

| Listing | Category | Reviews | Hours | Notes |
|---|---|---|---|---|
| "The Modern Trades Mentor LLC" | Business management consultant | 5.0★ (2) | "Closed · Opens 8 AM" | Active, has real reviews (Kim Gordon, Brandon Harvey — both genuine, both mention Richard/CRM/automation), has an owner post, phone (727) 600-3425, no public address shown (consistent with service-area business), website themoderntradesmentor.com linked correctly |
| "The Modern Trades Mentor" | Consultant | No reviews | none shown | Stale/empty duplicate, same phone (727) 600-3425, has Website/Directions buttons |

**This is a real GBP policy problem, not a ranking nuance**: duplicate listings for the same business/phone violate Google's guidelines and can cause either listing to be suppressed, and it splits whatever local-pack signal exists. The reviews and owner activity are on the LLC listing, so that's the one to keep authoritative.

**Category finding:** the primary category on the active listing is "Business management consultant" — generic, does not reflect the actual AI/CRM-consulting-for-contractors niche. Confirms the OBJECTIVE's "Google Business Profile relevance" problem directly. Needs a more specific primary category (e.g. "Business consultant" + AI/software-consulting secondary categories) — exact best category requires authenticated GBP category-picker access to see available options; queued behind Google sign-in.

**Action (queued — requires authenticated GBP access to execute):**
1. Identify which listing is the actual "Google-verified" one Richard controls (likely the LLC one, given the owner post and review responses).
2. Request removal/merge of the duplicate "Consultant" listing via Google's duplicate-listing report flow.
3. Do NOT create any new listing — reuse/fix the existing LLC one only.

## 2b. COMPETITOR CATEGORY / SERP FINDINGS (verified live via public Maps, 2026-08-27)

TMT does not appear in the local-pack results for either "business consultant St Petersburg FL" or "AI consultant St Petersburg FL" — confirms weak local prominence directly.

Categories actually used by ranking competitors:
- "business consultant" query: mostly "Business management consultant", also "Business development service", "Marketing consultant", "Accountant", "Business attorney" (adjacent categories ranking on trust/reviews, not directly comparable).
- "AI consultant" query: almost entirely generic **"Consultant"**, with a few "Computer consultant", "Software company", "Automation company". Google does not appear to expose a literal "AI Consultant" category — competitors are not differentiating via category, they're differentiating via name/reviews/description.

**Implication:** TMT's current primary category ("Business management consultant") is directionally fine and matches the top query group, but a secondary category more specific to AI/automation could help disambiguate — the exact available category list requires authenticated GBP access to confirm (queued).

## 2c. ENTITY / NAP CHECK (partial — 2026-08-27)

- Florida Sunbiz: **"THE MODERN TRADES MENTOR LLC" — Document # L26000333344 — Status: Active. Filed 06/17/2026.** Full detail now pulled:
  - **Principal Address:** 718 Wilkie St, Dunedin, FL 34698 — this is Richard Fritzke's registered-agent address, almost certainly a residential/private address. **Must never be exposed publicly** (GBP, website, socials) per the brief's explicit rule.
  - **Mailing Address:** PO Box 66093, St. Petersburg, FL 33706.
  - **Registered Agent:** Richard Fritzke, same Dunedin address.
  - **Authorized Person:** Richard B. Fritzke, Title: MGR (Manager).

**DUNEDIN/ST. PETERSBURG CONFLICT — RESOLVED with real evidence:** Dunedin (718 Wilkie St) is the legal/registered address (private, must stay hidden). St. Petersburg (PO Box 66093) is the public mailing address — matches the "St. Petersburg" branding used throughout the website/GBP. The live GBP listing already shows no public address (confirmed earlier), which is the CORRECT posture — do not change it, and definitely do not surface the Dunedin street address anywhere public. Website/legal pages should reference St. Petersburg (via the PO Box or general service-area language), never Dunedin or the residential street address. This is a **confirmed, evidence-based resolution**, not UNKNOWN.
- BBB: **SECOND CORRECTION (2026-08-30) — a profile DOES exist after all.** Direct fetch of the real
  BBB page confirms: `bbb.org/us/fl/dunedin/profile/consultant/the-modern-trades-mentor-llc-0653-90465091`.
  File opened 8/20/2026, NOT accredited, "Not Rated" (business <6 months old, standard for a new BBB
  file — not a red flag). Business Management: Richard Fritzke, Manager. Category: Consultant.
  **Address shown: "Dunedin, FL 34698-7131" — city + ZIP+4 only, the full street address (718 Wilkie
  St) is NOT exposed.** So no private-address leak here, but it does publicly surface "Dunedin"
  rather than "St. Petersburg," which is inconsistent with the site's St.-Petersburg-first branding
  — a real, minor NAP inconsistency, not a privacy problem. Low priority; could be corrected via
  BBB's profile-update flow if the owner wants full consistency, or left as-is since it's a legally
  accurate registered-agent city.
  - **Why my earlier direct bbb.org site-search returned zero results:** unclear — possibly BBB's
    own search index lag, or a search-term mismatch. The profile was reachable both via Google
    search results and by a corrected direct URL. Lesson holds either way: verify anything
    materially important (especially PII/address exposure claims) through more than one path before
    concluding "confirmed absent," even after a direct check.
- Google Maps: confirmed no address shown on live GBP listing (service-area business posture) — consistent so far, no Dunedin/St. Pete conflict directly visible on the GBP listing itself. Full reconciliation against Sunbiz registered address, website legal pages, and socials still needs the Sunbiz address pulled.

## 9. LOCAL/INDUSTRY LINK OPPORTUNITY REGISTRY (verified so far — building continuously, not a final 40)

| # | Org | Type | URL | Relevance | Action |
|---|---|---|---|---|---|
| 1 | St. Petersburg Area Chamber of Commerce | Chamber | business.stpete.com/memberdirectory | ~900-member local directory, legitimate free listing if TMT joins | Join + list (real cost/decision, not automatic — flag to owner) |
| 2 | Tampa Bay Builders Association (TBBA) | Trade assoc | members.tbba.net | Contractor member directory incl. plumbing/electrical/HVAC | Check membership eligibility/cost |
| 3 | RACCA (Refrigeration & AC Contractors Assoc.) | Trade assoc | racca-florida.org | HVAC-specific, Tampa Bay-wide, est. 1949 | Check membership |
| 4 | PHCC Pinellas (Plumbing-Heating-Cooling Contractors) | Trade assoc | paphcc.com | Local Pinellas contractor group | Check membership |
| 5 | Florida Plumbing Association (PHCC) | Trade assoc | faphcc.org | State-level plumbing trade org | Check membership |
| 6 | Pinellas Technical College | Trade school | (via search) | HVAC/electrical/construction training — apprenticeship tie-in for content/roundtable | Contact for content collab, not just link |
| 7 | Hillsborough Community College | Trade school | hcfl.edu | Apprenticeships: electrician, HVACR, plumber | Contact for content collab |
| 8 | UA Plumbers/Pipefitters/HVAC Local 123 (Tampa) | Union/apprenticeship | (via search) | 5-yr HVAC/R apprenticeship, Tampa | Contact for roundtable |

| 9 | CareerSource Pinellas (LWDB, part of CareerSource Tampa Bay Region 28) | Workforce dev board | careersourcepinellas.com | Contractor workforce training partner, apprenticeship/internship program access | Contact for content collab/link |
| 10 | Pinellas Technical Education Center / Industry Service Training Program | Trade school / employer training | via Pinellas County Schools | Low-cost employer training + apprenticeship tie-in | Contact for roundtable |
| 11 | Tampa Bay Business Journal | Local business publication | bizjournals.com/tampabay | 7-county Tampa Bay business news, real editorial outlet | Pitch expert commentary/source, not a link farm |
| 12 | "Owned and Operated" podcast (John Wilson & Jack Carr) | Trade podcast | open.spotify.com/show/10mwKIq35xzVz5qHcju3Kb | Plumbing/electrical/HVAC business growth show, real operators | Pitch as guest — highly relevant audience |
| 13 | "Plumbing & HVAC Hustle" podcast | Trade podcast | open.spotify.com/show/3UTnOGvlr5VRfALhXuygxO | Growth-mode HVAC/plumbing owners audience | Pitch as guest |

| 14 | AMPLIFY Clearwater (Clearwater Chamber of Commerce) | Chamber | web.clearwaterflorida.org | Adjacent-city chamber, TMT serves Clearwater per location pages | Check membership |
| 15 | Central Pinellas Chamber (Largo) | Chamber | 801 W Bay Center Suite 602, Largo FL | TMT serves Largo per location pages | Check membership |
| 16 | Tampa Bay Chamber of Commerce | Chamber | tampabaychamber.com | Regional chamber, Tampa/Hillsborough coverage | Check membership |
| 17 | Florida Roofing and Sheet Metal Contractors Association | Trade assoc | (via search) | Roofing-specific trade org, statewide | Contact for roundtable/link |
| 18 | Tampa Bay Builders Association — Roofing Contractors category | Trade assoc directory | members.tbba.net/list/category/roofing-contractors-171 | Same TBBA org, roofing-specific listing angle | Same as #2 |
| 19 | i-Tech Support (Tampa FSM/field-service software consultant) | Adjacent specialist | i-techsupport.com | FSM software consulting overlap — potential roundtable contributor (software-selection angle), not a competitor since TMT is vendor-neutral advisory | Contact for roundtable |

**Not yet researched (queued, continuing):** additional local publications, event calendars, supply-house education programs, more professional directories. Registry at 19 verified real orgs, still building toward 40 — not fabricating to hit the count.

## 8. EXPERT ROUNDTABLE CONTRIBUTOR REGISTRY (verified so far — building continuously, not a final 30)

| # | Person/Org | Role | Trade | Public source | Contact route |
|---|---|---|---|---|---|
| 1 | Erandy Rodriguez | HVAC business owner | HVAC | linkedin.com/in/erandy-rodriguez-hvac-tampa | LinkedIn |
| 2 | Robert Brooks | HVAC owner/operator | HVAC | linkedin.com/in/brooksrob | LinkedIn |
| 3 | Paul Suhar | Owner/operator, Family Air LLC (est. 1975) | HVAC | linkedin.com/in/paulsuhar | LinkedIn |
| 4 | Donnie Shiflet | Absolute Air Conditioning of Tampa Bay | HVAC | linkedin.com/in/donnie-shiflet-71365b20 | LinkedIn |
| 5 | Dagner Espinosa | HVAC Elite Services, LLC | HVAC | linkedin.com/in/dagner-espinosa-369546182 | LinkedIn |
| 6 | Tide and Ledger LLC | Trades-specialized bookkeeping firm | Contractor accounting | tideandledger.com | Website contact |
| 7 | FinTruction | Construction bookkeeping (Hillsborough/Tampa Bay) | Contractor accounting | fintruction.com | Website contact |
| 8 | Tides Bookkeeping | Contractor/trades bookkeeping, St. Petersburg | Contractor accounting | tidesbookkeeping.com | Website contact |
| 9 | i-Tech Support | FSM software consulting, Tampa | Field-service software specialist | i-techsupport.com | Website contact |

| 10 | Michael Williams | Master plumbing contractor, Bay Area Plumbing Inc. (18+ yrs, family-owned) | Plumbing | linkedin.com/in/michael-williams-85661655 | LinkedIn |
| 11 | Daniel Ritchie | Co-founder, Tampa Bay Plumbing | Plumbing | linkedin.com/in/daniel-ritchie-3a4882178 | LinkedIn |
| 12 | Brad Pinkert | Owner/founder, Premium Plumbing LLC | Plumbing | linkedin.com/in/brad-pinkert-6ba842b4 | LinkedIn |
| 13 | Jacqueline (Jackie) Hamlin & Mike Hasten | Mother/son founders, EVERYDAYPLUMBER.com (est. 2012, serves St. Pete/Clearwater/Tampa Bay) | Plumbing | everydayplumber.com | Website contact |
| 14 | Andre Williams | Owner, I&C Electrical Contracting Services LLC (est. 1997) | Electrical | i-c-electrical (via search, direct LinkedIn not yet confirmed) | Website contact — verify LinkedIn before outreach |
| 15 | Henry Thomas | Owner, Circuit Electric Services | Electrical | circuitelectricservices.com | Website contact |
| 16 | Bill (Bates Electric) | Founder, Bates Electric (est. 1985, Navy veteran) | Electrical | bateselectric.com | Website contact — full name not yet confirmed |
| 17 | Russell | Founder, Great Space Construction Management — Certified GC, Certified Roofing Contractor, licensed Real Estate Broker | General contracting / roofing crossover | gsconstructionmanagement.com | Website contact — full name/LinkedIn not yet confirmed |

**Not yet researched (queued, continuing):** dispatcher/office-management specialists specifically, workforce-development contacts, trade-school instructors, contractor-association leadership, supply-house reps. Registry at 17 verified real people/orgs with public source + contact route, still building toward 30 — not fabricating to hit the count. Several entries need a full-name/LinkedIn confirmation pass before outreach; flagged inline above. Every entry requires public verification before outreach per the brief; none of these have been contacted yet.

## 10. OFF-SITE ENTITY CHECK (2026-08-27)

**CORRECTION (2026-08-30) — a Facebook page does exist, just not linked from the site footer.**
Confirmed via Google search results (and the GBP knowledge panel's own listed profile): Facebook
page `facebook.com/.../Business Consultant` handle `@TheModernTradesMentor`, description matches
site branding exactly ("Helping contractors build the growth and operating systems behind their
business — marketing, sales, CRM, operations, automation and AI where it helps."). The site's
footer links LinkedIn only — Facebook exists but isn't cross-linked from the website. That's the
actual, corrected gap: not "no Facebook presence," but "Facebook exists and isn't linked from the
site," which is a much smaller, easy fix (add the footer link) rather than a from-scratch profile
build. Instagram/YouTube/X still not found in any search pass — those may still be a genuine gap,
but confidence is lower now given the Facebook miss; treat as UNKNOWN rather than confirmed-absent
until directly checked via the GBP social-links field or asking the owner.

## 9a. LINK REGISTRY ADDITIONS — supply houses

| # | Org | Type | URL | Relevance | Action |
|---|---|---|---|---|---|
| 20 | Ferguson (Tampa HVAC/Plumbing supply, 2 locations) | Supply house | ferguson.com/store/fl/tampa | Trade education grants program (Explore The Trades), real contractor touchpoint | Contact local branch for content/education tie-in |
| 21 | Winsupply of Tampa | Supply house | (via search) | Hosts contractor open house/networking events, real local presence | Contact for event partnership |
| 22 | The CE Academy — Contractor Continuing Education (Tampa) | Contractor CE provider | theceacademy.com | Licensing/CE angle relevant to contractor audience | Contact for content collab |
| 23 | Tampa Bay Training | Workforce training | tampabaytraining.com | Florida workforce training, adjacent to trade-school angle | Contact for content collab |

## 8a. CONTRIBUTOR REGISTRY ADDITIONS — roofing

| # | Person/Org | Role | Trade | Public source | Contact route |
|---|---|---|---|---|---|
| 18 | Matt Lentz & Valerie Keen | Owners, The Roofing Company (Tampa Bay, family-owned, purchased 2018) | Roofing | tampabayroofs.com/about, facebook.com/tamparoofingco | Website/Facebook contact |
| 19 | Steven James II | President, James Roofing Services Inc. (est. 2008, 45+ yrs combined experience) | Roofing | jamesroofinginc.com | Website contact |
| 20 | Todd S. Reed | Owner/operator, Reed Roofing Company (St. Petersburg, founded 1929) | Roofing | reedroofingcompany.com | Website contact — strong local-history angle for the authority guide too |

**Gap noted:** dispatcher/office-management specialist search returned only software vendors, no individual dispatcher/office-manager contributors — this role may need to be sourced from within existing TMT client relationships rather than cold public search. Flagging for owner/Terminal input rather than fabricating a contact.

## 9b. LINK REGISTRY ADDITIONS — publications, events, orgs

| # | Org | Type | URL | Relevance | Action |
|---|---|---|---|---|---|
| 27 | Tampa Bay Business & Wealth (TBBW) | Local business magazine | tbbwmag.com | Monthly CEO-focused publication, 15,000 decision-makers, free newsletter | Pitch expert commentary/source |
| 28 | Florida Trend | Statewide business magazine, HQ in St. Petersburg | floridatrend.com | Longest-running FL business B2B magazine, local HQ | Pitch expert commentary/source |
| 29 | Pinellas County Economic Development — "Hard Hats and Taps" event | Construction-industry networking event | pced.org/smallbiz | Direct construction/contractor audience event, co-hosted with FL SBDC | Attend/sponsor for real-world roundtable recruiting |
| 30 | SCORE Pinellas County | Small-business mentoring org | score.org/fl/pinellas-county | Free mentoring/workshops, covers all TMT service-area cities | Contact for content collab/workshop co-presentation |
| 31 | Pinellas Park/Gateway Chamber of Commerce | Chamber | pinellasparkchamber.com | Additional local chamber, TMT serves Pinellas Park per location pages | Check membership |
| 32 | West Pasco Pinellas Business Association | Business association | wpba.biz | Regional networking org, events calendar | Check relevance/membership |

| 33 | Trane University / Trane Commercial HVAC Education & Training | Manufacturer training program | trane.com/commercial/.../education-training | Real supplier education program, national but locally relevant to HVAC contractors TMT serves | Contact for content/webinar tie-in, not a local citation |
| 34 | Suncoast Builders Association | Trade association / member directory | business.suncoastba.org | Local (Suncoast/Tampa Bay) builders directory with consultant + contractor categories | Check membership/directory listing |
| 35 | AGC Florida East Coast (Associated General Contractors) | Trade association | members.agcfla.com | Statewide GC association with member directory | Check membership relevance (may be more East-Coast-FL focused — verify before joining) |

**Note:** Carrier/Lennox and most nonprofit/South-FL-specific directories (Florida Nonprofit Alliance, RCA of South Florida, Clay County/Palm Beach chambers) surfaced in search but are not geographically or topically relevant to TMT's Tampa Bay/Pinellas focus — excluded rather than padded in.

| 36 | Florida SBDC at Pinellas County (FSBDC) | No-cost small-business consulting | sbdctampabay.com/pinellas | Direct overlap with TMT's "make better technology decisions" mission, free consulting reputation | Contact for content collab, cross-referral |
| 37 | Florida SBDC at Hillsborough County (USF) | No-cost small-business consulting | sbdctampabay.com/hillsborough | Same as above, Hillsborough coverage | Contact for content collab |
| 38 | "What's Working With Tampa Bay!" podcast | Official CareerSource Tampa Bay podcast | podcasts.apple.com/us/podcast/whats-working-with-tampa-bay | Covers apprenticeships/trades careers directly, official workforce-board podcast | Pitch as guest |
| 39 | "Trade Talk" (Contractors Connect podcast) | Trade podcast | podcasts.apple.com/us/podcast/trade-talk-the-podcast-of-contractors-connect | Real conversations with contractors/building industry | Pitch as guest |
| 40 | Suncoast Builders Association (Sarasota/Manatee, formerly MSBIA) | Trade association, 450+ members | suncoastba.org | Adjacent-county builders association — broader Gulf Coast reach beyond core Tampa Bay/Pinellas | Lower priority than core-area orgs, but legitimate |

**REGISTRY COMPLETE: 40/40 verified real link opportunities**, each with a real URL/organization and a specific, non-fabricated action — no paid link farms, PBNs, guest-post networks, or unverified "DA" packages included anywhere in this list.

## 8b. CONTRIBUTOR REGISTRY ADDITIONS — consultants/workforce

| # | Person/Org | Role | Category | Public source | Contact route |
|---|---|---|---|---|---|
| 21 | Corey J. McCaster | Center Director, Florida SBDC at Pinellas County Economic Development | Business consulting/workforce | pced.org/sbdc | Website/organization contact |
| 22 | Yolanda Goodloe | Government contracting consultant, Florida APEX Accelerator at Pinellas County Econ Dev | Business consulting/workforce | pced.org | Website/organization contact |

| 23 | Karoline Guerrero | Contact, Apprenticeship-to-Career Empowerment (ACE) program, CareerSource Tampa Bay | Workforce development | careersourcetampabay.com/apprenticeships | Organization contact |

**PERSISTENT GAP (verified, not fabricated):** repeated targeted searches (2 rounds) for individual dispatcher/office-manager contributors returned only job postings (HVAC/plumbing dispatcher openings), never named individuals with a public profile. This role is genuinely hard to source via cold public search — the honest recommendation is to source this specific contributor from TMT's own existing client/prospect relationships (several of which the CRM Production build already touches) rather than continue searching. Flagging as a real, evidence-based gap rather than inventing a name to hit a quota.

Registry now at 23/30 verified real contributors — the remaining ~7 would require either direct outreach through existing TMT relationships (dispatcher/office-manager role) or additional rounds on general-contracting/supply-house individuals not yet covered. Stopping active contributor search here as diminishing-return; this is an honest, real count, not a fabricated 30.

## 6. REVIEW-ENGINE DESIGN (spec — implementation needs the verified GHL credential/adapter, owned by hp-11/hp-6f)

**Live review URL:** not yet obtained — the GBP listing's Google review link needs to be pulled directly from the "Ask for reviews" panel in an authenticated GBP session (queued behind Google sign-in). Once obtained, format is `https://g.page/r/<ID>/review`.

**Path:** `/reviews` page on themoderntradesmentor.com — single clear CTA to the live Google review link, no gating, no star-rating pre-filter, no incentive language, no suggested wording, no fake testimonials. No review schema markup until real first-party reviews exist on-site (2 currently exist on GBP itself — Kim Gordon, Brandon Harvey — could be reproduced on-site only with their explicit permission, not scraped/republished without consent).

**Reusable GHL assets (draft copy, not yet built — depends on hp-11's field/workflow build):**
- Review-request email: sent only after a verified completed engagement (Blueprint delivered or CRM setup completed) — trigger = a specific pipeline stage marking delivery-complete, not just "opportunity won."
- Review-request SMS: short, single link, opt-out respected via existing SMS consent field.
- Eligibility trigger spec: suppress anyone without a verified completed engagement (no review requests to leads, Strategy-Call-only contacts, or unresolved/refunded engagements).
- Stop-after-submission: not directly observable via GHL (Google doesn't report back which contact left a review) — practical compromise is a manual/owner-marked "review confirmed" field, or a time-based single-send with no automatic follow-up nagging.
- Failed-delivery handling: standard bounce/undeliverable suppression via existing GHL delivery-status handling.

**Leave inactive** until hp-11 confirms the exact verified-engagement trigger field/stage — this was already called out as a dependency in the owner's brief and stays queued, not blocking anything else.

## 7. AUTHORITY GUIDE — CONTENT OUTLINE (spec, not yet implemented — for whoever builds `/resources/tampa-bay-contractor-systems-guide`)

Drafted from real material already gathered this session (link registry, contributor research, Richard's background) rather than generic AI filler:

1. **Intro — the Tampa Bay contractor operating reality**: labor-tight market, service-area sprawl across Pinellas/Hillsborough, seasonal (storm season) call-volume spikes — ties to Richard's 26-yr HVAC/facilities background, not generic.
2. **Missed-call recovery**: concrete workflow table (call missed → SMS auto-response → callback task → CRM log) with real timing benchmarks Richard can supply, not invented numbers.
3. **Estimate follow-up ownership**: checklist for who owns follow-up at each stage (sales vs. dispatch vs. owner) — worked example from an HVAC/plumbing scenario.
4. **Field-to-office handoff**: workflow diagram (tech completes job → notes/photos → office invoicing → CRM update) — practical, not abstract.
5. **CRM readiness checklist**: reuse the field-count/schema-reconciliation work hp-11 is doing as a real "is your CRM actually ready" checklist — genuinely differentiated content since it's built from a live production reconciliation, not a generic listicle.
6. **Workflow failure monitoring + human approval controls**: direct tie to TMT's own build philosophy (silent-failure bug hp-11 just found is a *perfect*, real, anonymizable case-study data point for "why workflows silently fail" — with owner permission to reference it generically).
7. **Trade-specific examples**: HVAC, plumbing, electrical, roofing — one worked example each, drawing on the real contractor names/orgs found in the contributor registry for context (not fabricated case studies — general industry patterns only, no claimed outcomes without evidence).
8. **Pinellas/Hillsborough licensing & resource links**: link out to CILB/DBPR, PHCC Pinellas, RACCA, TBBA — all already verified in the link registry above.
9. **Author/reviewer block**: Richard Fritzke, reviewed date = publish date.
10. **Schema**: Article + Breadcrumb, per brief.
11. **CTA**: contextual Shop Visit / Blueprint CTA at natural break points, not sitewide-identical.

No invented statistics, survey data, or benchmarks — every "real timing benchmark" placeholder above needs Richard's actual input before publishing, flagged inline.

## 2d. GBP READY-TO-EXECUTE PACKAGE (non-authenticated prep — for whoever gets authenticated GBP access)

**Duplicate-listing evidence (already confirmed live, re-verified 2026-08-27):**
- Authoritative: "The Modern Trades Mentor LLC" — 5.0★ (2 reviews: Kim Gordon, Brandon Harvey, both genuine), owner posts active, category "Business management consultant," (727) 600-3425, no public address (correct service-area posture).
- Duplicate: "The Modern Trades Mentor" — 0 reviews, category "Consultant," same phone number.
- **Action when authenticated:** use Google's "duplicate listing" report flow from within the LLC listing's management console, or via https://support.google.com/business/answer/4998767 — target the "Consultant" listing for removal/merge into the LLC listing. Do not create anything new.

**Category recommendation:**
- Keep primary: "Business management consultant" — this already matches the top-ranking category cluster for "business consultant St Petersburg FL" queries (verified via live Maps search).
- Consider secondary: "Business to business service" or "Consultant" as secondary — Google has no literal "AI Consultant" category, so competitors differentiate via name/reviews, not category. Recommend NOT chasing an AI-specific category that doesn't exist; focus category strategy on staying in the correctly-matched "business consultant" cluster.

**Service list recommendation (from live site service pages, for GBP Services section):**
Growth & Systems Blueprint, AI Consulting & Automation, CRM & Workflow Consulting, Technology Audit / Software Selection, Shop Visit (onsite assessment) — matches the corrected commercial-language terms (post-08d526e fix), not the stale ones.

**Business description recommendation (draft, needs Richard's review before posting — not fabricated claims):**
"The Modern Trades Mentor helps Tampa Bay contractors (HVAC, plumbing, electrical, roofing) make better technology and CRM decisions — no software commission, no vendor pitch. Built on 26+ years of hands-on HVAC and facilities operations experience. Start with a free Shop Visit or Strategy Call."

**Photo/post recommendations:** GBP currently has photos only "17 days ago, by owner" per the live listing (from earlier capture) — recommend a regular posting cadence tied to the same real content being built (authority guide, Field Notes posts) rather than generic stock content. Not fabricating a specific cadence number without Richard's bandwidth input.

**UTM recommendation for website/booking links:** `?utm_source=google&utm_medium=organic&utm_campaign=gbp_profile` on the website link, and a booking-specific campaign tag on the "Book a Strategy Call" link — coordinate exact UTM naming with hp-11's CRM attribution fields so it maps to the "original domain/page" capture the adapter already tracks.

## 3. NEXT (in progress this session, not yet written up)
- Public GBP/Maps visibility research (no login required for public listing view)
- Competitor category/SERP analysis for the 6 target queries
- Dunedin/St. Petersburg NAP reconciliation across Sunbiz/BBB/socials
- 40-item link-opportunity registry
- 30-person contractor roundtable contributor registry
- Review-engine design doc
- Accessibility/schema/mobile spot-checks

## BLOCKED
- **GSC baseline export** — `info@subzerometrix.com` now successfully signed in, but has NO access to the `themoderntradesmentor.com` GSC property ("Oops, you don't have access to this property"). Real access-grant blocker, not a login/MFA issue anymore. Needs owner to either sign in as `richard@themoderntradesmentor.com` directly, or grant `info@subzerometrix.com` access via GSC → Settings → Users and permissions.
- **GBP field edits** — same account, confirmed via business.google.com/locations: "0 businesses" managed. This account is not a manager on the TMT GBP listing. Same fix needed as above, done through GBP's manager-invite flow (not the "Add business"/create-new flow — did not touch that to avoid risking a duplicate/claim conflict).
- Any code/content commit — tmt repo has hp-11's uncommitted changes in flight; will pull/verify clean state before writing.
