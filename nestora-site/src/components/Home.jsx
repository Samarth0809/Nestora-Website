import './Homes.css';
import TextType from './TextType';
import MagneticButton from './MagneticButton';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="container">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-content">
            <h2 className="eyebrow">Hyperlocal Quick Commerce</h2>
            <h1 className="hero-title">
              <TextType
                text="The Nearest mini Warehouse is already Down the Street."
                typingSpeed={45}
                pauseDuration={1500}
                showCursor={false}
                cursorCharacter="_"
                className="block highlight"
                loop={false}
              />
            </h1>
            <p className="hero-subtitle">
              We empower local kiranas with technology to deliver FMCG products in 10 minutes. Zero capital waste. 100% community-driven.
            </p>
            <div className="hero-cta">
              <MagneticButton>
                <Link to="/contact" className="btn btn-primary">Start Your Journey</Link>
              </MagneticButton>
              <MagneticButton>
                <Link to="/solution" className="btn btn-secondary">Learn More</Link>
              </MagneticButton>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">10</div>
              <div className="stat-unit">min</div>
              <div className="stat-label">Delivery</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">0%</div>
              <div className="stat-unit">Capital</div>
              <div className="stat-label">For Stores</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">∞</div>
              <div className="stat-unit">Scale</div>
              <div className="stat-label">Potential</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-unit">Local</div>
              <div className="stat-label">Impact</div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="features-section">
          <h2 className="section-title">Why Nestora</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-number">01</div>
              <h3>Empower Local Stores</h3>
              <p>Enable neighborhood kiranas to become instant commerce hubs without heavy capital investment.</p>
            </div>
            <div className="feature-card">
              <div className="feature-number">02</div>
              <h3>Lightning Fast</h3>
              <p>10-minute delivery powered by distributed local inventory. No warehouses, pure efficiency.</p>
            </div>
            <div className="feature-card">
              <div className="feature-number">03</div>
              <h3>Community First</h3>
              <p>Build thriving local ecosystems where customers support neighborhood businesses directly.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
