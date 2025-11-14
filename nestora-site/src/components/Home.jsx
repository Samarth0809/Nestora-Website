import './Home.css';

const pitchOutline = [
  { number: '01', title: 'Problem Statement', blurb: 'Quick-commerce boom is sidelining neighbourhood kiranas.', href: '#why-nestora' },
  { number: '02', title: 'Market Opportunity', blurb: 'A $57B quick-commerce wave demands a fair, kirana-first network.', href: '#why-nestora' },
  { number: '03', title: 'Our Solution', blurb: 'Inventory visibility, expiry safety, and hyperlocal delivery in one OS.', href: '#why-nestora' },
  { number: '04', title: 'Go-To-Market Strategy', blurb: 'Phased rollout from MVP to nationwide clusters.', href: '#pilot-growth' },
  { number: '05', title: 'Team', blurb: 'Operators with deep roots in local commerce and technology.', href: '#team-contact' },
  { number: '06', title: 'Contact Information', blurb: 'Investor hotline and founder access within 24 hours.', href: '#team-contact' }
];

const buildHighlights = [
  {
    title: 'Composable architecture ready',
    detail: 'Event-driven services across inventory, ordering, and routing designed for multi-city rollout.',
    status: 'Architecture docs & data contracts signed off.'
  },
  {
    title: 'Data & analytics layer',
    detail: 'ClickHouse pipelines for SKU velocity, expiry risk, and cluster demand heatmaps.',
    status: 'Instrumentation sprint scheduled for December 2025.'
  },
  {
    title: 'Compliance-first launch',
    detail: 'Audit logs, OTP auth, and vendor KYB flows gated before first pilot.',
    status: 'Security checklist in review with advisors.'
  }
];

const Home = () => {
  return (
    <section id="home" className="home">
      {/* <div className="container hero-grid"> */}
      <div className="container">
        <div className="hero-copy">
          <span className="eyebrow">Quick commerce for the kiranas, not against them</span>
          <h1>Bringing local kiranas into the quick‑commerce fold — profitably.</h1>
          <p className="hero-lede">
            Quick‑commerce giants have trained customers to expect 10‑minute delivery, but left neighbourhood kiranas outside the game.
            Nestora gives every kirana a full‑stack platform — online ordering, expiry‑safe inventory, and professional runners — so they can win back demand in 7–10 minutes without giving up margins.
          </p>
          <div className="cta-group">
            <a href="#team-contact" className="cta primary">Book a Local Demo</a>
            <a href="#pilot-growth" className="cta ghost">See the 18-Month Roadmap</a>
          </div>
          <ul className="hero-points">
            <li><strong>Problem:</strong> A ₹600B+ kirana market is losing orders to quick‑commerce apps while most stores stay offline.</li>
            <li><strong>Our solution:</strong> A kirana‑first quick‑commerce OS — expiry‑safe inventory, tamper‑proof delivery, online + offline billing, and CRM in one platform.</li>
            <li><strong>What others don’t do:</strong> Giants run dark stores and own inventory. We turn existing kirana clusters into a networked, asset‑light dark‑store alternative, closer to every doorstep.</li>
          </ul>
        </div>
        <div className="hero-stickers" aria-hidden="true">
          <div className="sticker sticker-speed">7–10 min delivery</div>
          <div className="sticker sticker-kirana">Kirana‑first network</div>
          <div className="sticker sticker-fair">No cart size limits</div>
        </div>
      </div>

      {/* <div className="container home-economics">
        <h2>How Nestora makes money</h2>
        <ul>
          <li>Platform fee: ₹9 on orders under ₹199, ₹15 on orders ₹199 and above.</li>
          <li>Delivery fee: ₹20–25 within 3 km, ₹30 beyond.</li>
          <li>Consumer plans: ₹199 / ₹99 subscriptions for 1–3 months of free delivery.</li>
          <li>Kirana revenue share: 5–7% of monthly GMV after a scale threshold (e.g., 1000+ orders).</li>
          <li>At ~₹300 AOV and 1000 orders/day per cluster, contribution turns positive — every extra order improves profitability.</li>
        </ul>
      </div> */}
      {/* <div className="hero-visual" aria-hidden="true">
          <div className="hero-card expiry floating-card">
            <header>
              <span className="pill pill-icon">🛡 Expiry Shield</span>
              <h3>Zero-Expired Orders. Guaranteed.</h3>
              <p>Scan-to-dispatch flow blocks stale inventory before it leaves the store.</p>
            </header>
            <ol className="hero-flow">
              <li>
                <span className="step">1</span>
                <div>
                  <strong>Order</strong>
                  <p>POS receives customer basket.</p>
                </div>
              </li>
              <li>
                <span className="step">2</span>
                <div>
                  <strong>Scan</strong>
                  <p>Every SKU scanned — loose goods via Nestora barcodes.</p>
                </div>
              </li>
              <li>
                <span className="step">3</span>
                <div>
                  <strong>Validate</strong>
                  <p>System blocks expired items in real time.</p>
                </div>
              </li>
              <li>
                <span className="step">4</span>
                <div>
                  <strong>Dispatch</strong>
                  <p>Fresh-pack checklist + runner handoff.</p>
                </div>
              </li>
            </ol>
            <footer>
              <div className="badge">Refund reduction 24%</div>
              <div className="badge">Customer trust score 4.8/5</div>
            </footer>
          </div>
        </div> */}

      {/* <div className="container hero-stats">
        <div className="stat-card">
          <h3>4</h3>
          <p>Core modules in build: inventory OS, expiry shield, marketplace, runner console.</p>
        </div>
        <div className="stat-card">
          <h3>8 wks</h3>
          <p>MVP sprint roadmap locked with weekly founder reviews.</p>
        </div>
        <div className="stat-card">
          <h3>₹0</h3>
          <p>Commission burden kiranas pay on Nestora — subscriptions stay predictable.</p>
        </div>
        <div className="stat-card">
          <h3>5 advisors</h3>
          <p>Operators guiding the product build before on-ground launch.</p>
        </div>
      </div> */}

      <div className="container pitch-outline">
        <div className="outline-header">
          <span className="eyebrow">Pitch Deck</span>
          {/* <div>
            <h2>Contents</h2>
            <p className="outline-lede">Every section mirrors the investor brief — problem, market, solution, GTM, team, and contact.</p>
          </div> */}
        </div>
        <div className="outline-grid" role="list">
          {pitchOutline.map((item) => (
            <a key={item.number} href={item.href} className="outline-card" role="listitem">
              <span className="outline-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.blurb}</p>
            </a>
          ))}
        </div>
      </div>

      <div className="container build-highlights">
        <div className="build-header">
          <h2 className="section-title">Build highlights</h2>
          <p className="muted">What we are shipping ahead of the first on-ground pilot.</p>
        </div>
        <div className="build-grid">
          {buildHighlights.map((item) => (
            <article key={item.title} className="build-card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <span className="build-status">{item.status}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
