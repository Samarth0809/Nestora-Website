import './Header.css';
import logo from '../assets/logo.svg';
import { useState } from 'react';
import ContactForm from './ContactForm';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <a href="#home" aria-label="Nestora home">
            {logo ? (
              <img src={logo} alt="Nestora logo" className="site-logo" />
            ) : (
              <h1>Nestora</h1>
            )}
            <span className="mobile-title">Nestora</span>
          </a>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#why-nestora">Why Nestora</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#tech-security">Tech & Security</a></li>
            <li><a href="#pricing">Business Model</a></li>
            <li><a href="#pilot-growth">Pilot & Growth</a></li>
            <li><a href="#team-contact">Team & Contact</a></li>
          </ul>
        </nav>
        <button
          className={`hamburger ${mobileOpen ? 'open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        {mobileOpen && (
          <div className="mobile-nav" role="menu">
            <ul>
              <li><a href="#home" onClick={()=>setMobileOpen(false)}>Home</a></li>
              <li><a href="#why-nestora" onClick={()=>setMobileOpen(false)}>Why Nestora</a></li>
              <li><a href="#how-it-works" onClick={()=>setMobileOpen(false)}>How It Works</a></li>
              <li><a href="#tech-security" onClick={()=>setMobileOpen(false)}>Tech & Security</a></li>
              <li><a href="#pricing" onClick={()=>setMobileOpen(false)}>Business Model</a></li>
              <li><a href="#pilot-growth" onClick={()=>setMobileOpen(false)}>Pilot & Growth</a></li>
              <li><a href="#team-contact" onClick={()=>setMobileOpen(false)}>Team & Contact</a></li>
            </ul>
          </div>
        )}
        {/* <div className="cta">
          <button className="vendor-btn" onClick={()=>setOpen(true)}>Enquiry Form</button>
        </div> */}
        {open && <ContactForm onClose={()=>setOpen(false)} />}
      </div>
    </header>
  );
};

export default Header;
