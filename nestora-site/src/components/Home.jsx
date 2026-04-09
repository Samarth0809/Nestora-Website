import './Homes.css';
import TextType from './TextType';
import MagneticButton from './MagneticButton';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="container">
        <div className="hero-content animate-fade-in">
          <h2 className="eyebrow">The Future of Quick Commerce</h2>
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
            We don't build dark stores. We wake up the sleeping giants of Indian retail:
            <strong className="text-dark-blue">The Local Kiranas.</strong>
            <br/>
            Nestora enables 10-minute delivery for FMCG products directly from local stores. Zero capital waste. 100% Community driven.
          </p>
          <div className="hero-cta">
            <MagneticButton>
              <Link to="/contact" className="btn btn-primary">Join the Revolution</Link>
            </MagneticButton>
            <MagneticButton>
              <Link to="/solution" className="btn btn-secondary">See How It Works</Link>
            </MagneticButton>
          </div>
        </div>

        {/* Animated Visual */}
        <div className="animated-hero animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <svg className="animated-illustration" viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
            {/* Store Building */}
            <g className="store-building">
              <rect x="30" y="200" width="120" height="180" rx="8" fill="#FFE8D6" stroke="#FFA63A" strokeWidth="2"/>
              <rect x="50" y="220" width="35" height="50" fill="#E8F4F8" stroke="#666" strokeWidth="1.5"/>
              <rect x="95" y="220" width="35" height="50" fill="#E8F4F8" stroke="#666" strokeWidth="1.5"/>
              <circle cx="67.5" cy="237.5" r="2" fill="#666"/>
              <circle cx="112.5" cy="237.5" r="2" fill="#666"/>
              <path d="M90 200 L110 160 L130 200" fill="#FF6B35" stroke="#FF6B35" strokeWidth="2"/>
              <text x="90" y="290" textAnchor="middle" fill="#333" fontSize="11" fontWeight="bold">Local Store</text>
            </g>

            {/* Delivery Person on Scooter */}
            <g className="delivery-person">
              <circle cx="200" cy="280" r="8" fill="#333"/>
              <ellipse cx="200" cy="300" rx="5" ry="8" fill="#FF6B35"/>
              <rect x="193" y="310" width="14" height="20" fill="#4A90E2"/>
              <circle cx="190" cy="340" r="6" fill="#333"/>
              <circle cx="210" cy="340" r="6" fill="#333"/>
              <g className="package">
                <rect x="170" y="290" width="20" height="25" fill="#FFB84D" stroke="#FF8C00" strokeWidth="1.5" rx="2"/>
                <line x1="175" y1="290" x2="175" y2="315" stroke="#FF8C00" strokeWidth="1"/>
                <line x1="180" y1="290" x2="180" y2="315" stroke="#FF8C00" strokeWidth="1"/>
              </g>
            </g>

            {/* Home/Customer */}
            <g className="customer-home">
              <rect x="260" y="220" width="110" height="140" rx="8" fill="#E8F5E9" stroke="#66BB6A" strokeWidth="2"/>
              <path d="M315 220 L260 160 L310 160 L315 190 L320 160 L370 160 L315 220" fill="#FF6B35" stroke="#FF6B35" strokeWidth="2"/>
              <rect x="280" y="240" width="30" height="35" fill="#BBDEFB" stroke="#666" strokeWidth="1.5"/>
              <circle cx="295" cy="255" r="2" fill="#666"/>
              <rect x="330" y="240" width="30" height="35" fill="#BBDEFB" stroke="#666" strokeWidth="1.5"/>
              <circle cx="345" cy="255" r="2" fill="#666"/>
              <rect x="300" y="300" width="30" height="40" fill="#8D6E63" stroke="#666" strokeWidth="1.5"/>
              <line x1="315" y1="300" x2="315" y2="340" stroke="#666" strokeWidth="1"/>
              <text x="315" y="310" textAnchor="middle" fill="#333" fontSize="11" fontWeight="bold">Home</text>
            </g>

            {/* Animated Connection Lines */}
            <g className="connection-lines">
              <path d="M 150 280 Q 200 250 260 280" stroke="#FFA63A" strokeWidth="3" fill="none" strokeDasharray="10,5" className="dash-line"/>
              <circle cx="160" cy="275" r="4" fill="#FFA63A" className="dot dot-1"/>
              <circle cx="200" cy="258" r="4" fill="#FFA63A" className="dot dot-2"/>
              <circle cx="240" cy="275" r="4" fill="#FFA63A" className="dot dot-3"/>
            </g>

            {/* Speed Indicator */}
            <g className="speed-indicator">
              <circle cx="200" cy="80" r="35" fill="none" stroke="#FFA63A" strokeWidth="2" opacity="0.2"/>
              <text x="200" y="85" textAnchor="middle" fill="#FFA63A" fontSize="24" fontWeight="bold">10</text>
              <text x="200" y="100" textAnchor="middle" fill="#666" fontSize="11">minutes</text>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Home;
