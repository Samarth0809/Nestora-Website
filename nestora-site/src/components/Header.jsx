import './Header.css';
import logo from '../assets/logo.svg';
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
                  <li><a href="#what-we-do">What We Do</a></li>
                  <li><a href="#problem">Problem</a></li>
                  <li><a href="#how-it-works">How We Solve</a></li>
                  <li><a href="#advantages">Advantages</a></li>
                  <li><a href="#market-position">Market Position</a></li>
                  <li><a href="#expansion">Expansion</a></li>
                  <li><a href="#financials">Financials</a></li>
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
                  <li><a href="#what-we-do" onClick={()=>setMobileOpen(false)}>What We Do</a></li>
                  <li><a href="#problem" onClick={()=>setMobileOpen(false)}>Problem</a></li>
                  <li><a href="#how-it-works" onClick={()=>setMobileOpen(false)}>How We Solve</a></li>
                  <li><a href="#advantages" onClick={()=>setMobileOpen(false)}>Advantages</a></li>
                  <li><a href="#market-position" onClick={()=>setMobileOpen(false)}>Market Position</a></li>
                  <li><a href="#expansion" onClick={()=>setMobileOpen(false)}>Expansion</a></li>
                  <li><a href="#financials" onClick={()=>setMobileOpen(false)}>Financials</a></li>
                  <li><a href="#team-contact" onClick={()=>setMobileOpen(false)}>Team & Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
