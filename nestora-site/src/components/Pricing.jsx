import './Pricing.css';

const plans = [
  {
    name: 'Starter',
    price: '₹999',
    period: 'per month',
    tagline: 'Digitize shelves & activate expiry shield',
    features: [
      'POS setup + inventory scanning (up to 500 SKUs)',
      'Expiry validation workflow & QR shelf labels',
      'Bilingual staff training & 24x7 helpline',
      'Daily sales & low-stock alerts via WhatsApp'
    ]
  },
  {
    name: 'Growth',
    price: '₹1,499',
    period: 'per month',
    tagline: 'Analytics & marketplace growth engine',
    highlight: 'Most adopted',
    features: [
      'Everything in Starter',
      'ClickHouse analytics dashboard & SKU recommendations',
      'Runner app integration + OSRM routing',
      'Automated payouts & settlement reconciliation'
    ]
  },
  {
    name: 'Scale',
    price: '₹2,499',
    period: 'per month',
    tagline: 'For multi-store & regional rollouts',
    features: [
      'Everything in Growth',
      'Fraud detection signals & GPS spoofing guard',
      'Regional sharding & multi-city support',
      'Dedicated account partner + co-marketing funds'
    ]
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="intro">
          <span className="eyebrow">Pricing</span>
          <h2>Zero commissions. Keep every rupee of margin.</h2>
          <p>Choose a predictable subscription that unlocks digitization, expiry safety, and analytics for your cluster.</p>
          <div className="guarantee">30-day pilot available • Cancel anytime • Hardware financing on request</div>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <article key={plan.name} className={`pricing-card ${plan.highlight ? 'highlight' : ''}`}>
              {plan.highlight && <span className="plan-badge">{plan.highlight}</span>}
              <header>
                <h3>{plan.name}</h3>
                <p>{plan.tagline}</p>
              </header>
              <div className="price">
                <span className="amount">{plan.price}</span>
                <span className="period">{plan.period}</span>
              </div>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <a href="#team-contact" className="plan-cta">Start 30-day pilot</a>
            </article>
          ))}
        </div>

        <div className="roi">
          <div className="roi-card">
            <h3>ROI snapshot</h3>
            <p><strong>₹15k</strong> average monthly uplift per store after 90 days of going live with Nestora.</p>
            <ul>
              <li>Expiry refunds down by 38%</li>
              <li>Repeat order frequency up 2.1×</li>
              <li>Staff hours saved: 18 hrs/month via automated logs</li>
            </ul>
          </div>
          <div className="roi-card alt">
            <h3>All plans include</h3>
            <ul>
              <li>Zero commission marketplace access</li>
              <li>Runner & vendor apps with OTP security</li>
              <li>Local field manager & community events</li>
              <li>Analytics exports for investors & lenders</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
