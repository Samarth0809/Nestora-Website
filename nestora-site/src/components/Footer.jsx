import './Footer.css';
import { useState } from 'react';
import ContactForm from './ContactForm';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Nestora</h3>
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
            <p>Email: <a href="mailto:founders.towntap@gmail.com">founders.towntap@gmail.com</a></p>
            <p>Location: Mumbai, India</p>
            <FooterContact />
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

function FooterContact() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button className="cta-button" onClick={()=>setOpen(s=>!s)}>{open ? 'Close' : 'Request the Deck'}</button>
      {open && <ContactForm inline={true} onClose={()=>setOpen(false)} />}
    </div>
  );
}
