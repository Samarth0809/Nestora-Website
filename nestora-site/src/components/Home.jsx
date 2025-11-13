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
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Empowering kiranas to thrive in the quick-commerce era</span>
          <h1>Revolutionizing distribution with fair and transparent market pricing.</h1>
          <p className="hero-lede">
            Quick-commerce is reshaping consumer behaviour across India and local kiranas are losing share. Nestora
            keeps neighbourhood stores relevant with zero-commission monetization, expiry-safe logistics, and bilingual
            enablement so they can serve every household within minutes.
          </p>
          <div className="cta-group">
            <a href="#team-contact" className="cta primary">Book a Local Demo</a>
            <a href="#pilot-growth" className="cta ghost">See the 18-Month Roadmap</a>
          </div>
          <ul className="hero-points">
            <li>80% of kiranas report losing business to quick-commerce giants — we rebuild their moat.</li>
            <li>2 lakh+ stores have shut already; Nestora digitizes shelves in days and restores community demand.</li>
            <li>We own zero inventory, enabling kiranas to keep margins while we orchestrate 7–10 minute delivery.</li>
          </ul>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-card expiry">
            <header>
              <span className="pill">Expiry Shield</span>
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
        </div>
      </div>

      <div className="container hero-stats">
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
      </div>

      <div className="container pitch-outline">
        <div className="outline-header">
          <span className="eyebrow">Pitch Deck</span>
          <div>
            <h2>Contents</h2>
            <p className="outline-lede">Every section mirrors the investor brief — problem, market, solution, GTM, team, and contact.</p>
          </div>
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
