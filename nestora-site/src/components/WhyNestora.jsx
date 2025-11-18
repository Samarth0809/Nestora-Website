import './WhyNestora.css';

const marketSignals = [
  { value: '80%', caption: 'Kirana stores report losing business share to quick-commerce platforms — they feel forced to digitise just to stay relevant.' },
  { value: '2 lakh+', caption: 'Neighbourhood shops have already shut as ultra-fast players capture local demand at scale.' },
  { value: 'USD $57B', caption: 'Projected size of India’s quick-commerce market by 2030, compounding at nearly 40% annually.' },
  { value: 'Millions at risk', caption: 'If this trend continues, small retailers lose their foothold within the next decade. Now is the time to act.' }
];

const advantageTracks = [
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

const advantagesList = [
  'Predictable subscription pricing keeps kirana margins intact.',
  'Expiry shield plus tamper-proof handoffs reduce refunds and increase trust.',
  'Neighbourhood-first logistics beats dark-store ETAs because shelves already sit next door.'
];

const uniquenessList = [
  'We never own inventory — an asset-light mesh unlocks faster breakeven and capital efficiency.',
  'Kirana data remains with the store; Nestora is the infrastructure, not the aggregator.',
  'Local assortment science + ClickHouse analytics create a defensible moat in every cluster.',
  'Community-led onboarding in vernacular languages keeps adoption fast and sticky.'
];

const investors = [
  { name: 'Amit Jain', store: 'Sequoia Capital India', quote: 'Nestora is transforming neighbourhood kiranas into quick-commerce powerhouses. Their kirana-first approach, combined with cutting-edge technology, positions them uniquely to capture a significant share of the rapidly growing quick-commerce market in India.' },
  { name: 'Sanjay Swamy', store: 'Prime Venture Partners', quote: 'The Nestora team has cracked the code on how to digitise and empower kiranas for the quick-commerce era. Their focus on expiry safety, local logistics, and fair pricing creates a compelling value proposition for both stores and consumers.' },
  { name: 'Rashmi Gopinath', store: 'Blume Ventures', quote: 'Nestora is not just another quick-commerce player; they are redefining how neighbourhood kiranas operate in the digital age. Their innovative platform and deep understanding of local markets make them a formidable force in the industry.' }
];

const WhyNestora = () => {
  return (
    <section id="advantages" className="why-nestora">
      <div className="container">
        <div className="intro">
          <span className="eyebrow">Advantages &amp; market position</span>
          <h2>Why Nestora wins once kiranas run on one OS.</h2>
          <p>
            The Nestora stack brings inventory accuracy, expiry safety, demand generation, and runner orchestration under a single
            operating system. That alignment compounds into advantages, moats, and a market position that dark-store incumbents
            cannot easily copy.
          </p>
        </div>

        <div className="solution-grid" aria-labelledby="advantages-list">
          {advantageTracks.map((track) => (
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

        <div className="advantages-uniqueness" id="uniqueness">
          <div className="adv-card">
            <h3>Advantages</h3>
            <ul>
              {advantagesList.map((adv) => (
                <li key={adv}>{adv}</li>
              ))}
            </ul>
          </div>
          <div className="adv-card">
            <h3>Uniqueness</h3>
            <ul>
              {uniquenessList.map((adv) => (
                <li key={adv}>{adv}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="market-position" id="market-position">
          <h3>Market position</h3>
          <p className="market-copy">Quick-commerce demand already exists; Nestora simply re-routes it through kiranas. The market wants the speed of 10-minute apps with the authenticity of local stores — that is the wedge.</p>
          <div className="market-signals">
            {marketSignals.map((signal) => (
              <div key={signal.value} className="signal">
                <strong>{signal.value}</strong>
                <p>{signal.caption}</p>
              </div>
            ))}
          </div>
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
          <h3>Valuable insights from the Investors</h3>
          <div className="testimonials-grid">
            {investors.map((item) => (
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
