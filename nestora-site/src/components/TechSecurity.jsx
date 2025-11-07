import './TechSecurity.css';

const TechSecurity = () => {
  const techStack = [
    { category: 'Frontend (Mobile)', tech: 'Flutter (Customer, Vendor, Runner)' },
    { category: 'Backend APIs', tech: 'Node.js (NestJS), TypeScript' },
    { category: 'Database', tech: 'PostgreSQL + PostGIS (geo queries)' },
    { category: 'Search Engine', tech: 'OpenSearch (for fast vendor/product search)' },
    { category: 'Cache / Realtime', tech: 'Redis + WebSockets' },
    { category: 'Streaming', tech: 'Kafka (order events, live location)' },
    { category: 'Infra', tech: 'AWS / GCP (EKS, S3, RDS, CloudFront)' },
    { category: 'Analytics', tech: 'ClickHouse / BigQuery' }
  ];

  const securityFeatures = [
    'AES-256 encryption',
    'OTP verification',
    'KYC checks',
    'DPDP Act (India) compliance',
    'PCI DSS for payments'
  ];

  return (
    <section id="tech-security" className="tech-security">
      <div className="container">
        <div className="section-header">
          <h2>Technology & Security</h2>
          <p>Built with enterprise-grade architecture for reliability and trust</p>
        </div>

        <div className="tech-content">
          <div className="tech-stack">
            <h3>Tech Stack</h3>
            <div className="stack-grid">
              {techStack.map((item, index) => (
                <div key={index} className="stack-item">
                  <strong>{item.category}:</strong> {item.tech}
                </div>
              ))}
            </div>
          </div>

          <div className="security-features">
            <h3>Security & Compliance</h3>
            <ul>
              {securityFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSecurity;
