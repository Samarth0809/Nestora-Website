import './Header.css';
import logo from '../assets/logo.svg';

const Header = () => {
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
          <button>Join as Vendor</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
