#!/usr/bin/env node
/**
 * TMT — software vendor partner outreach draft generator.
 *
 * Reads targets.csv + contacts.csv + templates, writes personalized drafts
 * and a send schedule. It DOES NOT SEND ANYTHING and does not touch the network.
 * Richard reviews every draft and sends by hand.
 *
 *   node scripts/generate-partner-outreach.mjs [--start YYYY-MM-DD]
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const BASE = join(ROOT, 'content-drafts', 'partner-outreach')
const OUT = join(BASE, 'drafts')

// CAN-SPAM requires a real physical postal address in every commercial email.
const ADDRESS = process.env.TMT_POSTAL_ADDRESS ?? '[POSTAL ADDRESS — REQUIRED BY CAN-SPAM, FILL BEFORE SENDING]'

// Touch cadence in days from first send.
const CADENCE = [0, 4, 11, 18]

// Per-company sentence for touch 1. Specific beats clever — each references
// something real and verifiable about that company's own program.
const HOOKS = {
  servicetitan:
    "I want to sit the Certified Provider exam and do it properly rather than skim a demo. Once I am through it I can take the shops your team does not have bandwidth to hand-hold, and train their techs on the workflows they will actually touch every day.",
  housecallpro:
    "I want enough product depth to train a shop end to end, not just get them signed up. I noticed the Business Coaching bench is operators doing real revenue rather than consultants \u2014 that is the standard I would want to be held to, and I would like to know what it takes to get there.",
  jobber:
    "I want to get properly fluent through Jobber Academy and be findable in the partner directory as someone who trains shops on Jobber. I also see affiliate, referral and reseller tracks \u2014 tell me which one actually fits somebody who trains rather than resells.",
  workiz:
    "Your partner page says you want consultants and academies. I am the consultant half of that. I would rather learn the product deeply enough to train a shop’s whole office than collect a signup bonus and disappear.",
  fieldedge:
    "I saw the Powerhouse Consulting Group announcement \u2014 individualized support, custom training, turn-key. That is close to the shape of what I do, and I would like to talk about whether there is room for another trainer on that model.",
}

function parseCSV(text) {
  const rows = []
  let row = [], field = '', quoted = false
  for (let i = 0; i < text.length; i++) {
    const c = text[i]
    if (quoted) {
      if (c === '"') { if (text[i + 1] === '"') { field += '"'; i++ } else quoted = false }
      else field += c
    } else if (c === '"') quoted = true
    else if (c === ',') { row.push(field); field = '' }
    else if (c === '\n') { row.push(field); field = ''; rows.push(row); row = [] }
    else if (c !== '\r') field += c
  }
  if (field || row.length) { row.push(field); rows.push(row) }
  const [header, ...body] = rows.filter(r => r.some(v => v !== ''))
  return body.map(r => Object.fromEntries(header.map((h, i) => [h.trim(), (r[i] ?? '').trim()])))
}

function read(p) { return readFileSync(p, 'utf8') }

function fill(tpl, vars) {
  return tpl.replace(/\{\{(\w+)\}\}/g, (m, k) =>
    vars[k] !== undefined && vars[k] !== '' ? vars[k] : `[[MISSING: ${k}]]`)
}

function addDays(iso, n) {
  const d = new Date(iso + 'T12:00:00Z')
  d.setUTCDate(d.getUTCDate() + n)
  return d.toISOString().slice(0, 10)
}

// --- inputs -----------------------------------------------------------------
const startArg = process.argv.indexOf('--start')
const START = startArg > -1 ? process.argv[startArg + 1] : new Date().toISOString().slice(0, 10)

const targets = parseCSV(read(join(BASE, 'targets.csv')))

const contactsPath = join(BASE, 'contacts.csv')
if (!existsSync(contactsPath)) {
  writeFileSync(contactsPath,
    'slug,first_name,last_name,title,email,linkedin,source\n' +
    targets.map(t => `${t.slug},,,,,,\n`).join(''))
  console.log(`Created ${contactsPath} — fill in the humans, then re-run.`)
}
const contacts = Object.fromEntries(parseCSV(read(contactsPath)).map(c => [c.slug, c]))

const templates = CADENCE.map((_, i) =>
  read(join(BASE, 'templates', `touch-${i + 1}.md`)))

// --- generate ---------------------------------------------------------------
const schedule = []
let incomplete = 0

for (const t of targets) {
  const c = contacts[t.slug] ?? {}
  const dir = join(OUT, t.slug)
  mkdirSync(dir, { recursive: true })

  const vars = {
    company: t.company,
    first_name: c.first_name || '',
    primary_ask: t.primary_ask,
    program_name: t.program_name,
    hook: HOOKS[t.slug] ?? '',
    address: ADDRESS,
  }

  templates.forEach((tpl, i) => {
    const body = fill(tpl, vars)
    if (body.includes('[[MISSING:')) incomplete++
    const sendOn = addDays(START, CADENCE[i])
    const header =
      `<!-- DRAFT — DO NOT AUTOSEND. Review, then send by hand. -->\n` +
      `<!-- to: ${c.email || '[[MISSING: email]]'}  send on or after: ${sendOn} -->\n` +
      `<!-- comp: ${t.comp_track} · program: ${t.program_url} -->\n\n`
    writeFileSync(join(dir, `touch-${i + 1}.md`), header + body)
    schedule.push({ date: sendOn, company: t.company, touch: i + 1, slug: t.slug, email: c.email || '' })
  })
}

schedule.sort((a, b) => a.date.localeCompare(b.date) || a.company.localeCompare(b.company))

const md = [
  '# Partner outreach — send schedule',
  '',
  `Generated ${new Date().toISOString().slice(0, 10)} · sequence starts ${START}`,
  '',
  '**Nothing here sends itself.** Open the draft, read it, send it yourself.',
  'Stop the whole sequence for a company the moment they reply.',
  '',
  '| Send on | Company | Touch | To | Draft |',
  '|---|---|---|---|---|',
  ...schedule.map(s =>
    `| ${s.date} | ${s.company} | ${s.touch} | ${s.email || '**needs contact**'} | \`drafts/${s.slug}/touch-${s.touch}.md\` |`),
  '',
].join('\n')

writeFileSync(join(BASE, 'SCHEDULE.md'), md)

console.log(`Wrote ${targets.length * CADENCE.length} drafts to ${OUT}`)
console.log(`Schedule: ${join(BASE, 'SCHEDULE.md')}`)
if (incomplete) console.log(`\n${incomplete} draft(s) contain [[MISSING: ...]] — fill contacts.csv and re-run.`)
if (ADDRESS.startsWith('[')) console.log('Postal address not set. Set TMT_POSTAL_ADDRESS before sending (CAN-SPAM).')
