import './Header.css';
import logo from '../assets/logo.svg';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Header = () => {
  const { items, toggleCart } = useContext(CartContext);
  const count = items.reduce((s, i) => s + (i.qty || 1), 0);

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
          </a>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#why-nestora">Why Nestora</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#tech-security">Tech & Security</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#pilot-growth">Pilot & Growth</a></li>
            <li><a href="#team-contact">Team & Contact</a></li>
          </ul>
        </nav>
        <div className="cta">
          <button className="vendor-btn">Join as Vendor</button>
          <button className="cart-btn" aria-label="Open cart" onClick={toggleCart}>
            🛒<span className="cart-count" aria-hidden>{count}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
