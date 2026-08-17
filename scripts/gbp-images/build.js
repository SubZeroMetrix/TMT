// One-off script: renders branded GBP post images via headless Chromium.
// Not part of the Next.js app build — run manually with `node scripts/gbp-images/build.js`.
const path = require("path");
const fs = require("fs");
const { chromium } = require("playwright-core");

const ROOT = path.resolve(__dirname, "../..");
const OUT_DIR = path.join(ROOT, "public", "gbp-posts");
const PUBLIC_DIR = path.join(ROOT, "public");

fs.mkdirSync(OUT_DIR, { recursive: true });

const NAVY_DEEP = "#071426";
const NAVY = "#0B1F3A";
const BLUE = "#2563EB";
const BLUE_LIGHT = "#60A5FA";
const SILVER_LIGHT = "#CBD5E1";

function toDataUri(relPath) {
  const abs = path.join(PUBLIC_DIR, relPath);
  const buf = fs.readFileSync(abs);
  const ext = path.extname(relPath).slice(1);
  return `data:image/${ext};base64,${buf.toString("base64")}`;
}

const logo = toDataUri("logo-mark.png");

function baseStyles() {
  return `
    @font-face { font-family: 'sys'; src: local('Arial'); }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      width: 1200px; height: 900px;
      font-family: -apple-system, 'Segoe UI', Arial, sans-serif;
      background: ${NAVY_DEEP};
      position: relative;
      overflow: hidden;
    }
    .grid {
      position: absolute; inset: 0;
      background-image:
        linear-gradient(rgba(96,165,250,0.08) 1px, transparent 1px),
        linear-gradient(90deg, rgba(96,165,250,0.08) 1px, transparent 1px);
      background-size: 48px 48px;
    }
    .glow {
      position: absolute; top: -200px; left: -150px; width: 700px; height: 700px;
      background: radial-gradient(circle, rgba(37,99,235,0.25), transparent 70%);
    }
    .frame {
      position: relative; z-index: 2;
      width: 100%; height: 100%;
      padding: 64px 72px;
      display: flex; flex-direction: column;
    }
    .brand {
      display: flex; align-items: center; gap: 16px;
    }
    .brand img { width: 52px; height: 52px; }
    .brand .name {
      color: white; font-weight: 700; font-size: 20px; letter-spacing: 0.02em;
    }
    .brand .sub {
      color: ${BLUE_LIGHT}; font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase;
    }
    .eyebrow {
      margin-top: 56px;
      color: ${BLUE_LIGHT};
      font-size: 15px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase;
    }
    .headline {
      margin-top: 20px;
      color: white; font-weight: 800; font-size: 52px; line-height: 1.12; letter-spacing: -0.01em;
      max-width: 920px;
    }
    .lede {
      margin-top: 24px;
      color: ${SILVER_LIGHT}; font-size: 22px; line-height: 1.5; max-width: 780px;
    }
    .footer {
      margin-top: auto;
      display: flex; align-items: center; justify-content: space-between;
    }
    .cta {
      display: inline-flex; align-items: center; gap: 10px;
      background: ${BLUE}; color: white; font-weight: 700; font-size: 16px;
      padding: 14px 28px; border-radius: 8px; letter-spacing: 0.02em;
    }
    .domain {
      color: rgba(203,213,225,0.6); font-size: 14px; letter-spacing: 0.04em;
    }
    .shot-wrap {
      margin-top: 36px;
      border-radius: 10px; overflow: hidden;
      border: 1px solid rgba(148,163,184,0.35);
      box-shadow: 0 30px 60px rgba(0,0,0,0.45);
      width: 720px;
    }
    .shot-wrap img { display: block; width: 100%; }
  `;
}

const posts = [
  {
    slug: "ai-operating-system",
    eyebrow: "TMT Internal Case Study",
    headline: "How TMT Built AI Into Its Own Operating System",
    lede: "One business event shouldn't always trigger one generic automation.",
    shot: "case-studies/tmt-implementation-handoff-workflow.png",
  },
  {
    slug: "when-ai-isnt-the-problem",
    eyebrow: "TMT Internal Case Study",
    headline: 'When "We Need AI" Isn’t Actually the Problem',
    lede: "What a customer asks for isn't always what the business needs.",
    shot: null,
  },
  {
    slug: "why-leads-fall-through-the-cracks",
    eyebrow: "TMT Internal Case Study",
    headline: "Why Leads Fall Through the Cracks — Even With a CRM",
    lede: "A CRM matters only when every opportunity has an owner and a next action.",
    shot: "case-studies/tmt-warm-inbound-instant-acknowledgment-workflow.png",
  },
];

function html(post) {
  const shotBlock = post.shot
    ? `<div class="shot-wrap"><img src="${toDataUri(post.shot)}" /></div>`
    : "";
  return `<!doctype html><html><head><style>${baseStyles()}</style></head>
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
      <div class="eyebrow">${post.eyebrow}</div>
      <div class="headline">${post.headline}</div>
      <div class="lede">${post.lede}</div>
      ${shotBlock}
      <div class="footer">
        <div class="cta">Learn More →</div>
        <div class="domain">themoderntradesmentor.com</div>
      </div>
    </div>
  </body></html>`;
}

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 900 } });
  for (const post of posts) {
    await page.setContent(html(post), { waitUntil: "networkidle" });
    const outPath = path.join(OUT_DIR, `${post.slug}.png`);
    await page.screenshot({ path: outPath });
    console.log("wrote", outPath);
  }
  await browser.close();
})();
