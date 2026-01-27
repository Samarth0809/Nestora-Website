import './Footer.css';
import logo from '../assets/Nestora_logo.png';
import { Link } from 'react-router-dom';

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
            <h4>Explore</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/features">Features</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>In The Community</h4>
            <ul>
              <li><Link to="/about#mission">Our Mission</Link></li>
              <li><Link to="/features#vendors">For Vendors</Link></li>
              <li><Link to="/features#partners">For Partners</Link></li>
            </ul>
          </div>
          <div className="footer-section footer-connect">
            <h4>Connect</h4>
            <p>Email: <a href="mailto:nestora.privatelimited@gmail.com">nestora.privatelimited@gmail.com</a></p>
            <p>Location: Mumbai, India</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Nestora. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
