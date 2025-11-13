import './PilotGrowth.css';

const phases = [
  {
    title: 'Phase 1 · MVP & Infrastructure',
    goal: 'MVP development, onboarding shops, and setting up the quick-commerce infrastructure.',
    highlights: [
      'Digitise the first 100 kiranas with Nestora POS, expiry shield, and unified inventory visibility.',
      'Deploy runner network operations with tamper-proof SOPs and rapid KYC completion.',
      'Instrument ClickHouse analytics for demand forecasting and shelf optimisation from day zero.'
    ]
  },
  {
    title: 'Phase 2 · Market Launch & Demand',
    goal: 'Full market launch with aggressive online marketing and PR. Goal: 10k orders/day with rising AOV.',
    highlights: [
      'Social media campaigns, content marketing, and partnerships with local influencers.',
      'Onboarded shops become our megaphone: banners, word of mouth, branded bills, and bags in every lane.',
      'Expiry-safe guarantee and fair pricing storytelling to convert loyal neighbourhood demand.'
    ]
  },
  {
    title: 'Phase 3 · National Scale',
    goal: 'Launch in Tier I cities to refine pricing and playbooks, then expand into Tier 2 and Tier 3 clusters.',
    highlights: [
      'Replicate the cluster blueprint across metros before cascading into emerging cities.',
      'Finance hardware and training to unlock rapid store activation at scale.',
      'Leverage data network effects for SKU recommendations, capital access, and community programs.'
    ]
  }
];

const pilotMetrics = [
  { label: 'Pilot city', value: 'Mumbai · Andheri cluster live' },
  { label: 'Vendors onboarded', value: '50 kiranas (Phase 1)' },
  { label: 'Target demand', value: '10,000 orders/day by Phase 2' },
  { label: 'Expansion horizon', value: 'Mumbai → Pune → Ahmedabad within 12 months' }
];

const uniqueAdvantages = [
  'We do not hold inventory — no dark-store COGS, faster breakeven, and capital-light growth.',
  'Neighbourhood variety unlocks unlimited SKUs so every micro-market gets exactly what it needs.',
  'The kirana economy is a $600B opportunity: a 1% share unlocks $6B, 5% equals $30B in GMV.',
  'Nestora’s transparent pricing and expiry-safe promise power a defensible community moat.'
];

const PilotGrowth = () => {
  return (
    <section id="pilot-growth" className="pilot-growth">
      <div className="container">
        <div className="intro">
          <span className="eyebrow">Go-to-market strategy</span>
          <h2>From MVP to nationwide kirana empowerment.</h2>
          <p>
            We scale in deliberate waves — proving the model in one cluster, amplifying demand with community-led
            marketing, then expanding into every tier of the country while keeping kiranas at the centre of the quick-commerce era.
          </p>
        </div>

        <div className="phase-grid">
          {phases.map((phase) => (
            <article key={phase.title} className="phase-card">
              <h3>{phase.title}</h3>
              <p className="phase-goal">{phase.goal}</p>
              <ul>
                {phase.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="metrics-panel">
          <h3>Pilot traction & targets</h3>
          <div className="metrics-grid">
            {pilotMetrics.map((metric) => (
              <div key={metric.label} className="metric-card">
                <span className="metric-label">{metric.label}</span>
                <strong>{metric.value}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="growth-advantages">
          <h3>Why this scales fast</h3>
          <ul>
            {uniqueAdvantages.map((advantage) => (
              <li key={advantage}>{advantage}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PilotGrowth;
