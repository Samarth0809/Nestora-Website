import './Pricing.css';

const revenuePoints = [
  {
    title: 'Platform fee',
    body: '₹9 on orders under ₹199, ₹15 on orders ₹199 and above.'
  },
  {
    title: 'Delivery fee',
    body: '₹20–25 within 3 km, ₹30 beyond.'
  },
  {
    title: 'Consumer plans',
    body: 'Subscriptions at ₹199 / ₹99 that provide 1–3 months of free delivery for frequent shoppers.'
  },
  {
    title: 'Kirana revenue share',
    body: '5–7% of monthly GMV after a scale threshold (e.g., 1000+ orders).' 
  },
  {
    title: 'Scale contribution note',
    body: 'At ~₹300 AOV and 1000 orders/day per cluster, contribution turns positive — every extra order improves profitability.'
  }
];

const financialHighlights = [
  { label: 'Cluster breakeven', value: '< 6 months once 1k orders/day at ₹300 AOV' },
  { label: 'Gross margin', value: '18–22% after brand credits + Nestora fee' },
  { label: 'Capex per store', value: '< ₹20k (hardware + onboarding) financed via NBFC partners' },
  { label: 'Working capital cycle', value: '20 days due to supplier credit + daily consumer settlements' }
];

const Pricing = () => {
  return (
    <section id="financials" className="pricing">
      <div className="container">
        <div className="intro">
          <span className="eyebrow">Financial model</span>
          <h2>Resilient revenue + disciplined unit economics</h2>
          <p>Projected revenue + unit economics add multiple income streams keep contribution positive while protecting kirana margin. Nestora's financial guardrails focus on rapid payback per cluster.</p>
        </div>

        <div className="pricing-grid revenue-grid">
          {revenuePoints.map((p) => (
            <article key={p.title} className="revenue-card">
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </article>
          ))}
        </div>

        <div className="roi">
          <div className="roi-card">
            <h3>Aligned incentives</h3>
            <p>Our revenue approach aligns with store profitability — Nestora grows when stores keep margin and sell more.</p>
          </div>
          <div className="roi-card alt">
            <h3>Want the deep model?</h3>
            <p>Request the investor deck or pilot plan and we’ll walk through unit economics, sample store P&L, and uplift scenarios.</p>
            <a href="#team-contact" className="plan-cta">Request the Deck</a>
          </div>
        </div>

        <div className="financial-highlights">
          {financialHighlights.map((item) => (
            <article key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
