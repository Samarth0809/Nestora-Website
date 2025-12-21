import './Header.css';
import logo from '../assets/Nestora_Logo.png';
import { useState } from 'react';

const Header = () => {
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
            <li><a href="#about">About</a></li>
            <li><a href="#problem">Problem</a></li>
            <li><a href="#solution">Solution</a></li>
            <li><a href="#market">Market</a></li>
            <li><a href="#founders">Team</a></li>
            <li><a href="#contact" className="btn btn-primary nav-cta">Contact Us</a></li>
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
              <li><a href="#about" onClick={()=>setMobileOpen(false)}>About</a></li>
              <li><a href="#problem" onClick={()=>setMobileOpen(false)}>Problem</a></li>
              <li><a href="#solution" onClick={()=>setMobileOpen(false)}>Solution</a></li>
              <li><a href="#market" onClick={()=>setMobileOpen(false)}>Market</a></li>
              <li><a href="#founders" onClick={()=>setMobileOpen(false)}>Team</a></li>
              <li><a href="#contact" onClick={()=>setMobileOpen(false)}>Contact Us</a></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
