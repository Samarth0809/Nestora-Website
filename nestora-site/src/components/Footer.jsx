import './Footer.css';
import logo from '../assets/Nestora_logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src={logo} alt="Nestora logo" className="footer-site-logo" />
            </div>
            <p>The Local OS for Neighbourhoods</p>
            <p>Connecting customers, vendors, and delivery partners in a trusted hyperlocal ecosystem.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#why-nestora">Why Nestora</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#tech-security">Tech & Security</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Business</h4>
            <ul>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#pilot-growth">Pilot & Growth</a></li>
              <li><a href="#team-contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Connect</h4>
            <p>Email: <a href="mailto:nestora.privatelimited@gmail.com">nestora.privatelimited@gmail.com</a></p>
            <p>Location: Mumbai, India</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Nestora. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
