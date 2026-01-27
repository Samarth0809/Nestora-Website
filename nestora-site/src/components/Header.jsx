import './Header.css';
import logo from '../assets/Nestora_logo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/" aria-label="Nestora home">
            {logo ? (
              <img src={logo} alt="Nestora logo" className="site-logo" />
            ) : (
              <h1>Nestora</h1>
            )}
            <span className="mobile-title">Nestora</span>
          </Link>
        </div>
        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/problem">Problem</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/market">Market</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/contact" className="btn btn-primary nav-cta">Contact Us</Link></li>
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
              <li><Link to="/" onClick={()=>setMobileOpen(false)}>Home</Link></li>
              <li><Link to="/about" onClick={()=>setMobileOpen(false)}>About</Link></li>
              <li><Link to="/problem" onClick={()=>setMobileOpen(false)}>Problem</Link></li>
              <li><Link to="/features" onClick={()=>setMobileOpen(false)}>Features</Link></li>
              <li><Link to="/market" onClick={()=>setMobileOpen(false)}>Market</Link></li>
              <li><Link to="/team" onClick={()=>setMobileOpen(false)}>Team</Link></li>
              <li><Link to="/contact" onClick={()=>setMobileOpen(false)}>Contact Us</Link></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
