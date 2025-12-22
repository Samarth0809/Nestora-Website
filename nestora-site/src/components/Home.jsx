import './Homes.css';
import TextType from './TextType';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="container">
        <div className="hero-content animate-fade-in">
          <span className="eyebrow">The Future of Quick Commerce</span>
          <div className="hero-title">
            <TextType
              text="The Nearest mini Warehouse is already Down the Street."
              typingSpeed={45}
              pauseDuration={1500}
              showCursor={false}
              cursorCharacter="_"
              className="block highlight"
              loop={false}
            />
          </div>
          <p className="hero-subtitle">
            We don't build dark stores. We wake up the sleeping giants of Indian retail:
            <strong className="text-dark-blue">The Local Kiranas.</strong>
            <br/>
            With 10-minute delivery for their FMCG products. Zero capital waste. 100% Community driven.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">Join the Revolution</a>
            <a href="#solution" className="btn btn-secondary">See How It Works</a>
          </div>
        </div>
        
       {/* Abstract representation of connection between shop and home */}
        <div className="hero-visual animate-fade-in" style={{ animationDelay: '0.3s' }}>
           <div className="connection-visual">
              <div className="node shop-node">
                <div className="node-icon-wrapper">
                  <span className="node-icon">🏪</span>
                  <div className="pulse-ring"></div>
                </div>
                <span className="node-label">Supercharged Kirana</span>
                <span className="node-tag">Inventory Live</span>
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
                <span className="node-tag">Order Delivered</span>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
