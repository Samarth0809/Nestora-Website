import './Homes.css';
import TextType from './TextType';
import MagneticButton from './MagneticButton';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="container">
        <div className="hero-shell animate-fade-in">
          <div className="hero-content">
            <h2 className="eyebrow">The future of quick commerce</h2>
            <div className="hero-badge-row">
              <span className="hero-badge">Built for kiranas</span>
              <span className="hero-badge">10-minute delivery</span>
              <span className="hero-badge">Community first</span>
            </div>
            <h1 className="hero-title">
              <TextType
                text="The nearest mini-warehouse is already down the street."
                typingSpeed={40}
                pauseDuration={1500}
                showCursor={false}
                cursorCharacter="_"
                className="block highlight"
                loop={false}
              />
            </h1>
            <p className="hero-subtitle">
              We don’t build dark stores. We turn local kiranas into the fastest storefront in the neighbourhood.
              <strong className="text-dark-blue">Nestora</strong> is the hyperlocal operating system that connects inventory, orders, and deliveries without capital waste.
            </p>
            <div className="hero-metrics">
              <div className="hero-metric">
                <span className="hero-metric-value">10 min</span>
                <span className="hero-metric-label">local fulfillment goal</span>
              </div>
              <div className="hero-metric">
                <span className="hero-metric-value">100+</span>
                <span className="hero-metric-label">kiranas ready to connect</span>
              </div>
              <div className="hero-metric">
                <span className="hero-metric-value">0</span>
                <span className="hero-metric-label">dark-store dependency</span>
              </div>
            </div>
            <div className="hero-cta">
              <MagneticButton>
                <Link to="/contact" className="btn btn-primary">Join the Revolution</Link>
              </MagneticButton>
              <MagneticButton>
                <Link to="/solution" className="btn btn-secondary">See How It Works</Link>
              </MagneticButton>
            </div>
            <p className="hero-footnote">
              Trusted by neighbourhood operators, designed for fast adoption, and built to scale with real local demand.
            </p>
          </div>

          {/* Abstract representation of connection between shop and home */}
          <div className="hero-visual animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="visual-card">
              <div className="visual-card-header">
                <span className="visual-kicker">Live commerce flow</span>
                <span className="visual-status">Connected</span>
              </div>
              <div className="connection-visual">
                <div className="node shop-node">
                  <div className="node-icon-wrapper">
                    <span className="node-icon">🏪</span>
                    <div className="pulse-ring"></div>
                  </div>
                  <span className="node-label">Supercharged Kirana</span>
                  <span className="node-tag">Inventory live</span>
                </div>
                <div className="connection-line">
                  <div className="packet" aria-hidden="true">
                    <svg className="rider" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <g fill="currentColor">
                        <rect x="2" y="18" width="18" height="14" rx="2" />
                        <circle cx="18" cy="48" r="6" />
                        <circle cx="46" cy="48" r="6" />
                        <path d="M12 44h8l6-14 12-6 6 6v6h-6l-6 6h-8" />
                        <path d="M28 18c0-4 6-8 10-8s6 4 6 8c0 2-2 4-4 4s-6-2-8-2" />
                      </g>
                    </svg>
                  </div>
                  <div className="time-badge">
                    <span className="time-text">⚡ 10 min</span>
                  </div>
                </div>
                <div className="node home-node">
                  <div className="node-icon-wrapper">
                    <span className="node-icon">🏠</span>
                  </div>
                  <span className="node-label">Happy Customer</span>
                  <span className="node-tag">Order delivered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
