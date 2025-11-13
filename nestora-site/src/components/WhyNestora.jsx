import './WhyNestora.css';

const problemStatements = [
  'Quick-commerce platforms are rapidly reshaping consumer behaviour, leaving neighbourhood kiranas struggling to compete and risking irrelevance.',
  'Without an organised, tech-enabled distribution network, kiranas face declining sales, limited market access, and shrinking customer loyalty.'
];

const marketSignals = [
  { value: '80%', caption: 'Kirana stores report losing business share to quick-commerce platforms — they feel forced to digitise just to stay relevant.' },
  { value: '2 lakh+', caption: 'Neighbourhood shops have already shut as ultra-fast players capture local demand at scale.' },
  { value: 'USD $57B', caption: 'Projected size of India’s quick-commerce market by 2030, compounding at nearly 40% annually.' },
  { value: 'Millions at risk', caption: 'If this trend continues, small retailers lose their foothold within the next decade. Now is the time to act.' }
];

const solutionTracks = [
  {
    title: 'Smart inventory management for kiranas',
    blurb: 'Unified visibility across offline and online sales so stores never lose sight of stock.',
    bullets: [
      'Real-time sync solves the toughest digitisation challenge — inventory accuracy.',
      'Automated reminders and analytics prevent stockouts, overstocking, or expired goods.'
    ]
  },
  {
    title: 'Fast, tamper-free, hyperlocal delivery',
    blurb: 'Proximity-based runner network delivers within 7–10 minutes from the kirana down the lane.',
    bullets: [
      'Tamper-proof handoffs and hygienic packaging match billion-dollar quick-commerce benchmarks.',
      'Expiry validation embedded in dispatch keeps every order customer-safe.'
    ]
  },
  {
    title: 'Fair pricing & inclusive market network',
    blurb: 'Transparent subscriptions, no commissions, and equitable access for Tier-2 and Tier-3 markets.',
    bullets: [
      'Predictable pricing protects kirana margins and restores community trust.',
      'Local assortment planning keeps neighbourhood favourites always available.'
    ]
  },
  {
    title: 'Expanding local empowerment beyond kiranas',
    blurb: 'A distribution fabric that scales to every neighbourhood business, not just grocers.',
    bullets: [
      'Extends to electronics shops, vegetable vendors, restaurants, and service providers.',
      'Builds self-sufficient communities that can serve customers within minutes.'
    ]
  }
];

const momentumStats = [
  { label: '82% vendors', value: 'live in <5 days', detail: 'Field-led onboarding throughput per cluster.' },
  { label: '98% expiry compliance', value: 'tracked daily', detail: 'Automated scan-to-dispatch workflow.' },
  { label: '2.1× repeat orders', value: 'after 90 days', detail: 'Customer retention across pilot stores.' },
  { label: '12 languages', value: 'training content', detail: 'Playbooks and support for staff enablement.' }
];

const uniqueAdvantages = [
  'We do not own inventory unlike dark-store models — zero COGS keeps breakeven timelines tight.',
  'A wide range of partner shops unlocks limitless SKUs tuned to each locality’s needs.',
  'The kirana economy stands at $600B; 1% share is $6B in GMV, 5% is a $30B opportunity.',
  'Purpose-built to cover every neighbourhood so local commerce stays in local hands.'
];

const testimonials = [
  {
    quote: 'Nestora digitized our shelves in two afternoons and customers now reorder on WhatsApp with real-time stock.',
    name: 'Ravi Sharma',
    store: 'A+ Kirana, Powai'
  },
  {
    quote: 'Expiry scanning removed refund fights. We trust the system more than any aggregator app.',
    name: 'Farha Naaz',
    store: 'B Grade Store, Kurla'
  }
];

const WhyNestora = () => {
  return (
    <section id="why-nestora" className="why-nestora">
      <div className="container">
        <div className="intro">
          <span className="eyebrow">Why Nestora</span>
          <h2>Empowering kiranas to thrive in the quick-commerce era.</h2>
          <p>
            If we do not rise with neighbourhood retailers today, billion-dollar corporations will control local commerce
            tomorrow. Nestora builds the transparent, tech-enabled distribution network that keeps kiranas indispensable
            and profitable.
          </p>
        </div>

        <div className="problem-market">
          <article className="problem-card">
            <h3>Problem Statement</h3>
            <ul>
              {problemStatements.map((problem) => (
                <li key={problem}>{problem}</li>
              ))}
            </ul>
          </article>
          <article className="market-card">
            <h3>Market Opportunity</h3>
            <div className="market-signals">
              {marketSignals.map((signal) => (
                <div key={signal.value} className="signal">
                  <strong>{signal.value}</strong>
                  <p>{signal.caption}</p>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="solution-grid">
          {solutionTracks.map((track) => (
            <article key={track.title} className="solution-card">
              <h3>{track.title}</h3>
              <p className="solution-blurb">{track.blurb}</p>
              <ul>
                {track.bullets.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="stats-band">
          {momentumStats.map((stat) => (
            <div key={stat.label} className="stat">
              <span className="stat-label">{stat.label}</span>
              <strong>{stat.value}</strong>
              <p>{stat.detail}</p>
            </div>
          ))}
        </div>

        <div className="unique-advantages">
          <h3>Unique advantages</h3>
          <ul>
            {uniqueAdvantages.map((advantage) => (
              <li key={advantage}>{advantage}</li>
            ))}
          </ul>
        </div>

        <div className="comparison">
          <header>
            <h3>What makes Nestora defensible</h3>
            <p>Neighbourhood-first model beats high-commission aggregators on trust, retention, and profitability.</p>
          </header>
          <div className="comparison-grid">
            <div className="cmp-card best">
              <h4>Nestora</h4>
              <ul>
                <li>Predictable subscriptions — margins stay with the store.</li>
                <li>Cluster marketing & buyback guarantee for new SKUs.</li>
                <li>Expiry validation + QC for zero bad deliveries.</li>
                <li>Data ownership stays with vendor, analytics in ClickHouse.</li>
                <li>Local supply chain for staples, perishables, and services.</li>
              </ul>
            </div>
            <div className="cmp-card alt">
              <h4>Typical Aggregators</h4>
              <ul>
                <li>Commission + penalty deductions impact cash flow.</li>
                <li>City-level catalogues ignore micro-market demand.</li>
                <li>Manual expiry checks → frequent refunds and disputes.</li>
                <li>Customer data locked inside platform dashboards.</li>
                <li>Little support for semi-formal kiranas or services.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mission-callout">
          <p>
            We are determined to achieve this vision. With Nestora’s strategy and market position, kiranas become
            micro-inventories that serve regional needs, revolutionising India’s local market for the quick-commerce era.
          </p>
        </div>

        <div className="testimonials">
          <h3>Voices from the neighbourhood</h3>
          <div className="testimonials-grid">
            {testimonials.map((item) => (
              <blockquote key={item.name}>
                <p>“{item.quote}”</p>
                <footer>
                  <strong>{item.name}</strong>
                  <span>{item.store}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNestora;
