import './HowItWorks.css';

const modules = [
  {
    id: '01',
    title: 'Inventory OS (alpha)',
    description: 'Unified SKU master and stock ledger to sync offline shelves with the marketplace catalogue.',
    outcome: 'Status: Data model finalised; vendor beta opens Q1 2026 with advisory kiranas.'
  },
  {
    id: '02',
    title: 'Expiry Shield workflow',
    description: 'Barcode parsing, batch tracking and validation rules to block stale inventory before checkout.',
    outcome: 'Status: Scanner prototype ready; integrations with POS partners underway.'
  },
  {
    id: '03',
    title: 'Marketplace catalogue composer',
    description: 'Real-time storefront fed by vendor inventory with pricing governance and promo tooling.',
    outcome: 'Status: React front-end live for demos; vendor upload dashboard in development.'
  },
  {
    id: '04',
    title: 'Runner console & payouts',
    description: 'Routing, settlement, and audit trails so delivery partners operate transparently from day one.',
    outcome: 'Status: OSRM routing integration scheduled; payout automation spec drafted.'
  }
];

const buildFocus = [
  'ClickHouse analytics pipelines for SKU velocity, expiry forecasts, and demand heatmaps.',
  'Vendor self-serve onboarding with compliance checks before we step on-ground.',
  'Runner app prototype with OTP security, shift tracking, and settlement reports.',
  'Security checklist across auth, audit logs, and infrastructure hardening prior to launch.'
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <div className="intro">
          <span className="eyebrow">How we are solving it</span>
          <h2>The Nestora OS stitches inventory, expiry safety, and runners together.</h2>
          <p>Each module launches in sequence so kiranas get a dependable operating layer the moment we step on-ground.</p>
        </div>

        {/* <div className="workflow-grid">
          {modules.map((module) => (
            <article key={module.id} className="workflow-card">
              <header>
                <span className="step-index">{module.id}</span>
                <h3>{module.title}</h3>
              </header>
              <p>{module.description}</p>
              <div className="outcome">
                <span>Status</span>
                <p>{module.outcome}</p>
              </div>
            </article>
          ))}
        </div> */}

        {/* <div className="enablement">
          <div className="story">
            <h3>What we finish before field deployment.</h3>
            <p>
              We are sequencing engineering, data, and support workstreams so that the first on-ground launch happens on a hardened
              platform with clear playbooks and automated guardrails.
            </p>
            <ul>
              {buildFocus.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="story-card" aria-hidden="true">
            <div className="pos-screen">
              <span className="badge">Build tracker</span>
              <div className="pos-content">
                <div className="pos-line">
                  <span>Inventory OS</span>
                  <strong>Alpha</strong>
                </div>
                <div className="pos-line">
                  <span>Expiry Shield</span>
                  <strong>Prototype</strong>
                </div>
                <div className="pos-line">
                  <span>Marketplace</span>
                  <strong>Demo</strong>
                </div>
                <div className="pos-line">
                  <span>Runner console</span>
                  <strong>In spec</strong>
                </div>
                <footer>Stack: React &bull; Node &bull; ClickHouse &bull; PostGIS</footer>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default HowItWorks;
