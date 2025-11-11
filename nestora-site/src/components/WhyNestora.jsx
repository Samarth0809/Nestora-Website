import './WhyNestora.css';

const WhyNestora = () => {
  const features = [
    {
      title: 'Vendor-First Monetization',
      description: 'Subscription model protects small business margins. Zero commissions on orders.',
      icon: '🏪'
    },
    {
      title: 'Hyperlocal Intelligence',
      description: 'PostGIS-based demand prediction and clustering for accurate deliveries.',
      icon: '📍'
    },
    {
      title: 'Inclusivity',
      description: 'Digital presence for unorganized services like laundry, flower, repair.',
      icon: '🤝'
    },
    {
      title: 'Trust & Reliability',
      description: 'OTP-based deliveries, COD security, fraud detection engine.',
      icon: '🔒'
    },
    {
      title: 'Offline Resilience',
      description: 'Works in low-network areas, lightweight app footprint (<12 MB).',
      icon: '📶'
    },
    {
      title: 'Scalable Architecture',
      description: 'Modular microservices, region-based sharding for future expansion.',
      icon: '⚡'
    }
  ];

  return (
    <section id="why-nestora" className="why-nestora">
      <div className="container">
        <div className="section-header">
          <h2>Why Choose Nestora?</h2>
          <p>Unlike fast-commerce giants, Nestora is about trust, reliability, and inclusion for neighbourhood businesses.</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="comparison">
          <h3>How Nestora compares</h3>
          <div className="comparison-grid">
            <div className="cmp-card">
              <h4>Nestora</h4>
              <ul>
                <li>Vendor-first pricing: predictable subscription, no surprise commissions</li>
                <li>Local curation: neighbourhood-focused catalog and farmers/vendors</li>
                <li>Lower delivery distances & carbon footprint</li>
                <li>Privacy-first: minimal data collection</li>
                <li>Support for informal vendors and micro-services</li>
              </ul>
            </div>
            <div className="cmp-card">
              <h4>Typical Fast-Commerce</h4>
              <ul>
                <li>High commission fees for vendors</li>
                <li>Centralized catalogue, less local choice</li>
                <li>Optimized for speed, sometimes at margin of sustainability</li>
                <li>Broader data collection for personalization & ads</li>
                <li>Less focus on vendor livelihood</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNestora;
