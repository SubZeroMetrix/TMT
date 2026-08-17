// One-off: renders the non-case-study post graphics for weeks 1-4.
const path = require("path");
const fs = require("fs");
const { chromium } = require("playwright-core");

const ROOT = path.resolve(__dirname, "../..");
const OUT_DIR = path.join(ROOT, "public", "social-posts");
fs.mkdirSync(OUT_DIR, { recursive: true });

const NAVY_DEEP = "#071426";
const BLUE = "#2563EB";
const BLUE_LIGHT = "#60A5FA";
const SILVER_LIGHT = "#CBD5E1";

function toDataUri(relPath) {
  const abs = path.join(ROOT, "public", relPath);
  const buf = fs.readFileSync(abs);
  const ext = path.extname(relPath).slice(1);
  return `data:image/${ext};base64,${buf.toString("base64")}`;
}
const logo = toDataUri("logo-mark.png");

function styles() {
  return `
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { width: 1200px; height: 900px; font-family: -apple-system, 'Segoe UI', Arial, sans-serif; background: ${NAVY_DEEP}; position: relative; overflow: hidden; }
    .grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(96,165,250,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.08) 1px, transparent 1px); background-size: 48px 48px; }
    .glow { position: absolute; top: -200px; left: -150px; width: 700px; height: 700px; background: radial-gradient(circle, rgba(37,99,235,0.25), transparent 70%); }
    .frame { position: relative; z-index: 2; width: 100%; height: 100%; padding: 64px 72px; display: flex; flex-direction: column; }
    .brand { display: flex; align-items: center; gap: 16px; }
    .brand img { width: 52px; height: 52px; }
    .brand .name { color: white; font-weight: 700; font-size: 20px; }
    .brand .sub { color: ${BLUE_LIGHT}; font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; }
    .eyebrow { margin-top: 72px; color: ${BLUE_LIGHT}; font-size: 16px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; }
    .headline { margin-top: 24px; color: white; font-weight: 800; font-size: 58px; line-height: 1.14; letter-spacing: -0.01em; max-width: 980px; }
    .lede { margin-top: 28px; color: ${SILVER_LIGHT}; font-size: 24px; line-height: 1.5; max-width: 820px; }
    .footer { margin-top: auto; display: flex; align-items: center; justify-content: space-between; }
    .cta { display: inline-flex; align-items: center; gap: 10px; background: ${BLUE}; color: white; font-weight: 700; font-size: 16px; padding: 14px 28px; border-radius: 8px; }
    .domain { color: rgba(203,213,225,0.6); font-size: 14px; }
  `;
}

const posts = [
  { slug: "week1-mon-owner-question", eyebrow: "Owner Diagnostic", headline: "Who Owns Every Active Lead In Your Business Right Now?", lede: "If you can't answer immediately, that's the leak.", cta: "Think About It" },
  { slug: "week1-fri-founder", eyebrow: "Founder Insight", headline: "Most System Problems Don't Announce Themselves", lede: "They just sit there quietly, until a customer hires somebody else.", cta: "Learn More" },
  { slug: "week2-mon-business", eyebrow: "Business Problem", headline: "What Happens To An Estimate After It's Sent?", lede: "If the honest answer is “nothing, until they call us,” that's revenue sitting exposed.", cta: "Learn More" },
  { slug: "week2-fri-owner", eyebrow: "Owner Diagnostic", headline: "Can You Tell The Difference Between Signed And Paid?", lede: "Most CRMs can't. That gap is where cash-flow surprises come from.", cta: "Think About It" },
  { slug: "week3-mon-ai", eyebrow: "AI Explained", headline: "What AI Should Never Automate", lede: "Pricing, contracts, and anything that reaches a customer without a person reading it first.", cta: "Learn More" },
  { slug: "week3-fri-founder", eyebrow: "Founder Insight", headline: "A CRM Isn't A System Just Because Names Are Stored In It", lede: "It's a system when every opportunity has an owner, a next step, and a deadline.", cta: "Learn More" },
  { slug: "week4-mon-business", eyebrow: "Business Problem", headline: "Won. Signed. Paid. Delivered. Four Different Things.", lede: "Collapse them into one stage and you lose control of the handoff.", cta: "Learn More" },
  { slug: "week4-wed-ai", eyebrow: "System Breakdown", headline: "What An AI Agent Actually Needs To Know About Your Business", lede: "Files, SOPs, customer history, and permissions — not just a chatbot bolted on top.", cta: "Learn More" },
  { slug: "week4-fri-cta", eyebrow: "Growth & Systems Blueprint", headline: "Where Is Your Business Actually Losing Time?", lede: "A free Strategy Call is the fastest way to find out — no pitch, no pressure.", cta: "Book a Call" },
];

function html(p) {
  return `<!doctype html><html><head><style>${styles()}</style></head>
  <body>
    <div class="glow"></div>
    <div class="grid"></div>
    <div class="frame">
      <div class="brand">
        <img src="${logo}" />
        <div>
          <div class="name">The Modern Trades Mentor</div>
          <div class="sub">Inside the System</div>
        </div>
      </div>
      <div class="eyebrow">${p.eyebrow}</div>
      <div class="headline">${p.headline}</div>
      <div class="lede">${p.lede}</div>
      <div class="footer">
        <div class="cta">${p.cta} →</div>
        <div class="domain">themoderntradesmentor.com</div>
      </div>
    </div>
  </body></html>`;
}

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 900 } });
  for (const p of posts) {
    await page.setContent(html(p), { waitUntil: "networkidle" });
    const outPath = path.join(OUT_DIR, `${p.slug}.png`);
    await page.screenshot({ path: outPath });
    console.log("wrote", outPath);
  }
  await browser.close();
})();
