import './Home.css';

const whatWeDoPoints = [
  'Digitise every neighbourhood kirana so inventory, ordering, and delivery run on one transparent OS.',
  'Move fulfilment from distant dark stores back to community shelves with tamper-proof, expiry-safe handling.',
  'Give kiranas the data, financing, and runners they need to compete with 10-minute apps without losing margin.'
];

const problemStatements = [
  'Quick-commerce platforms trained consumers to expect 10-minute delivery while sidelining neighbourhood kiranas.',
  'Without digitised inventory and dependable logistics, kiranas are leaking loyalty, basket size, and working capital.',
  'Citywide dark stores lock up demand and data — neighbourhood commerce risks becoming invisible in its own lane.'
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
            <a href="#expansion" className="cta ghost">See the 18-Month Roadmap</a>
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

      <div className="container overview-grid" id="what-we-do">
        <article className="overview-card">
          <span className="eyebrow">What we are doing</span>
          <h2>Turning every kirana into a 10-minute node.</h2>
          <ul>
            {whatWeDoPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
        <article className="overview-card" id="problem">
          <span className="eyebrow">What the problem is</span>
          <h2>Kirana demand is leaking to far-away dark stores.</h2>
          <ul>
            {problemStatements.map((statement) => (
              <li key={statement}>{statement}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Home;
