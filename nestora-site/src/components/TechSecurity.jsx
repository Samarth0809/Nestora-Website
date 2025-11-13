import './TechSecurity.css';

const stack = [
  { layer: 'Frontend', items: 'Flutter apps (Customer / Vendor / Runner), React Admin console' },
  { layer: 'APIs', items: 'Node.js (NestJS), GraphQL gateway, REST for runner telemetry' },
  { layer: 'Data', items: 'PostgreSQL + PostGIS, ClickHouse analytics, OpenSearch discovery' },
  { layer: 'Streaming', items: 'Kafka event bus, Redis cache, WebSockets for live order tracking' },
  { layer: 'Infra', items: 'AWS / GCP with Kubernetes, Terraform IaC, managed secrets' }
];

const security = [
  'OTP + device binding for every user role',
  'AES-256 encryption at rest, TLS 1.3 in transit',
  'DPDP Act ready with consent logs & data residency controls',
  'Automated expiry + fraud detection signals piped to ClickHouse',
  'Disaster recovery runbooks and multi-region backups'
];

const architectureFlow = [
  'Vendor App',
  'Order Service',
  'Delivery Runner App',
  'Kafka Events',
  'Analytics & Ops Console'
];

const TechSecurity = () => {
  return (
    <section id="tech-security" className="tech-security">
      <div className="container">
        <div className="intro">
          <span className="eyebrow">Technology & Security</span>
          <h2>An enterprise backbone for neighbourhood-scale operations.</h2>
          <p>Best-in-class stack ensures uptime, compliance and insight across vendor, customer and runner journeys.</p>
        </div>

        <div className="stack-grid">
          {stack.map((row) => (
            <div key={row.layer} className="stack-card">
              <span className="layer">{row.layer}</span>
              <p>{row.items}</p>
            </div>
          ))}
        </div>

        <div className="architecture">
          <h3>Platform flow</h3>
          <div className="flow">
            {architectureFlow.map((item, index) => (
              <div key={item} className="flow-step">
                <span>{item}</span>
                {index < architectureFlow.length - 1 && <div className="connector" aria-hidden="true" />}
              </div>
            ))}
          </div>
          <ul className="flow-meta">
            <li>Kafka streams order, inventory, and expiry events to ClickHouse.</li>
            <li>OSRM routing & PostGIS ensure minute-level runner ETAs.</li>
            <li>Admin console provides fraud flags, payout automation, and regional sharding controls.</li>
          </ul>
        </div>

        <div className="security">
          <h3>Security & compliance checklist</h3>
          <div className="security-grid">
            {security.map((item) => (
              <div key={item} className="security-item">{item}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSecurity;
