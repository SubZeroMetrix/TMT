# TMT — SEO / AEO / GEO

Market: **St. Petersburg + Tampa**, core county **Pinellas**, expansion ring Hillsborough and
Pasco. This is now the default for all TMT work (`.claude/context/tmt.md` § Service area).

---

## Built and verified 2026-08-09

Production build passes. Output inspected in `.next`, not assumed.

| What | Where | Verified |
|---|---|---|
| Geographic source of truth — 33 towns, 3 counties, tiers | `lib/seo/geo.ts` | typecheck |
| JSON-LD builders — ProfessionalService, Person, WebSite, Service, FAQPage, BreadcrumbList | `lib/seo/schema.ts` | typecheck |
| Sitewide entity graph rendered on every page | `app/(frontend)/layout.tsx` | present in built HTML |
| `robots.txt` with 13 AI crawlers explicitly allowed | `app/robots.ts` | `/robots.txt` output read |
| `sitemap.xml`, 24 routes, priority by commercial intent | `app/sitemap.ts` | `/sitemap.xml` output read |
| `llms.txt` — plain-language entity file for LLM crawlers | `public/llms.txt` | file written |
| FAQ corpus — 8 general + 3 St. Pete + 3 Tampa | `lib/seo/faqs.ts` | typecheck |
| FAQPage + BreadcrumbList schema on both location pages | `locations/{st-petersburg,tampa}` | present in built HTML |

**Starting point:** the site had no sitemap, no robots file, no structured data of any kind, and
no llms.txt. For classic SEO that is a handicap; for AEO and GEO it is close to fatal, because
answer engines lean on structured data to decide whether an entity is real and worth citing.

### Why AI crawlers are allowed on purpose

`robots.ts` explicitly allows GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-User,
anthropic-ai, PerplexityBot, Perplexity-User, Google-Extended, Applebot-Extended, CCBot,
Bytespider and Meta-ExternalAgent. Blocking them would protect nothing — everything published is
marketing meant to be repeated — and it would close the channel where a contractor asks an
assistant "who helps Tampa contractors pick software" and gets a named answer.

### Why the FAQ corpus is written the way it is

Answer engines quote self-contained paragraphs. So every answer stands alone, names the place,
leads with the answer in sentence one, and contains no invented numbers. An answer that only makes
sense after reading the page around it does not get quoted.

---

## Resolved — "vendor-neutral" stays

TMT has no vendor relationships today and takes no commission from anyone, so **"vendor-neutral"
is accurate wording right now.** The location pages are unchanged and stay that way.

Two claims I had written into shipped files were wrong and are corrected: the FAQ answer about
vendor payment and the `llms.txt` section both said TMT "participates in software vendor partner
programs." Both now state the truth — no paid vendor relationship, no commission — with a promise
to disclose if that changes.

**Trigger for revisiting:** the first signed vendor agreement. At that point site copy, the FAQ
answer, `llms.txt` and a new public disclosure page all change together. The disclosure ships
before the money does.

---

## Next, in order of leverage

1. **Google Business Profile.** The single biggest local ranking factor and it does not exist yet.
   Note: the published address is a PO Box, which **cannot verify a GBP**. Needs a service-area
   business setup with a real address that stays hidden. This is Richard's action, not a code task.
2. **Render the FAQs visibly.** The schema is live but the answers are not on the page. Google
   discounts schema that does not match visible content, and it is the highest-converting content
   type for this buyer. Needs a UI pass (`ui-guard`).
3. **Two more tier-1 location pages** — Largo and Pinellas Park. `geo.ts` already has slugs.
4. **Local content cluster.** Suggested first four, all Pinellas/Tampa framed:
   - Why field service software rollouts fail in small shops *(one-pager already written for the
     vendor outreach — reuse it)*
   - What storm season does to a contractor's dispatch and phones
   - ServiceTitan vs Jobber vs Housecall Pro for a Tampa Bay shop of 5 trucks
   - The three places a Pinellas contracting business is losing money right now
5. **Reviews.** `/reviews` exists and the brain flags no testimonials as the highest-value
   marketing gap. Review schema without real reviews is a violation, so this is a collection
   problem before it is a code problem.
6. **NAP consistency audit** across every directory listing. Use exactly:
   The Modern Trades Mentor LLC · 727-600-3425 · PO Box 66093, St. Petersburg, FL 33767

---

## Reddit

Asked for and declined: karma generation. Running accounts to build a score for later promotion is
platform manipulation under Reddit's content policy, and r/HVAC and r/Plumbing identify marketers
almost immediately — being called out there is worse than being absent.

The version that works: Richard answers technical questions under his own name, with 26 years of
HVAC behind them, no link. Draft comment material and thread selection can be prepared; he posts.
