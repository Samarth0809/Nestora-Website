import './FinalPunchline.css';
import { Link } from 'react-router-dom';

const punchPoints = [
  '200+ SKUs per store, expiry-proof promise, and transparent pricing win consumer trust fast.',
  'Kirana-first rails beat dark stores on speed, assortment, and capital efficiency.',
  'Cluster playbooks already proven in Mumbai, ready to replicate city by city.'
];

const qaTopics = [
  'Unit economics per cluster (AOV, CAC, contribution timing).',
  'Data platform roadmap for lenders, brands, and civic partners.',
  'Rollout plan for 12-month expansion and use of funds.'
];

const FinalPunchline = () => {
  return (
    <section id="final-punchline" className="final-punchline">
      <div className="container">
        <div className="headline">
          <span className="eyebrow">Final punch line</span>
          <h2>Nestora is the neighbourhood rail for quick commerce.</h2>
          <p>
            We already digitised kiranas, mapped real demand, and built the compliance-first runner network. The rails are
            ready — capital simply pours fuel on a system that compounds with every store onboarded.
          </p>
        </div>

        <div className="punch-grid">
          <article className="promise">
            <h3>Why this wins</h3>
            <ul>
              {punchPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>

          <article className="qa-block">
            <h3>Bring your toughest questions</h3>
            <p>We have a full diligence pack ready. Schedule 30 minutes and we will walk through:</p>
            <ul>
              {qaTopics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
            <Link to="/contact" className="cta">Book the Q&amp;A</Link>
          </article>
        </div>

        <div className="deck-cta">
          <p>Need the detailed deck, product demo, or pilot data room?</p>
          <Link to="/contact" className="cta secondary">Request Access</Link>
        </div>
      </div>
    </section>
  );
};

export default FinalPunchline;
