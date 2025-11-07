import './PilotGrowth.css';

const PilotGrowth = () => {
  const metrics = [
    { label: 'Pilot City', value: 'Mumbai (Andheri Zone)' },
    { label: 'Vendors Onboarded (Phase 1)', value: '50' },
    { label: 'Target Orders/Day', value: '1,000' },
    { label: 'Target Expansion', value: '3 zones → 3 cities (Mumbai, Pune, Ahmedabad) in 12 months' }
  ];

  const roadmap = [
    { phase: 'Q1 2024', milestone: 'Pilot launch in Andheri, Mumbai' },
    { phase: 'Q2 2024', milestone: 'Expand to 3 zones in Mumbai' },
    { phase: 'Q3 2024', milestone: 'Launch in Pune and Ahmedabad' },
    { phase: 'Q4 2024', milestone: 'Scale to 500+ vendors, 10,000+ daily orders' }
  ];

  return (
    <section id="pilot-growth" className="pilot-growth">
      <div className="container">
        <div className="section-header">
          <h2>Pilot & Growth Plan</h2>
          <p>Strategic expansion from neighbourhood to city-scale operations</p>
        </div>

        <div className="pilot-content">
          <div className="metrics">
            <h3>Current Metrics</h3>
            <div className="metrics-grid">
              {metrics.map((metric, index) => (
                <div key={index} className="metric-card">
                  <h4>{metric.label}</h4>
                  <p>{metric.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="roadmap">
            <h3>Roadmap</h3>
            <div className="roadmap-timeline">
              {roadmap.map((item, index) => (
                <div key={index} className="roadmap-item">
                  <div className="phase">{item.phase}</div>
                  <div className="milestone">{item.milestone}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PilotGrowth;
