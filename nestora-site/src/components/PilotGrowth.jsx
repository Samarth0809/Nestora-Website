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
  'Acquiring 1% of this market: $6B opportunity.',
  'Nestora’s transparent pricing and expiry-safe promise power a defensible community moat.'
];

const futureVision = [
  'Create the largest kirana-led fulfilment mesh across Tier 1–3 cities.',
  'Plug lenders and FMCG partners into live store data so capital and assortment flow instantly.',
  'Expand Nestora OS modules into other neighbourhood services — pharmacies, salons, local makers.',
  'Turn every cluster into a living digital twin so planners can predict demand and reduce waste.'
];

const PilotGrowth = () => {
  return (
    <section id="expansion" className="pilot-growth">
      <div className="container">
        <div className="intro">
          <span className="eyebrow">Expansion &amp; future vision</span>
          <h2>Deliberate rollouts turn clusters into a nationwide kirana rail.</h2>
          <p>
            We build depth before breadth: prove the model inside one cluster, amplify demand through community marketing,
            then expand into every tier of the country while keeping kiranas at the centre of the quick-commerce era.
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

        <div className="future-vision">
          <h3>Future vision of Nestora</h3>
          <p>The Nestora OS becomes civic infrastructure for neighbourhood commerce — a dependable rail open to every small business.</p>
          <ul>
            {futureVision.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PilotGrowth;
