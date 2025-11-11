import './Home.css';
import ProductCard from './ProductCard';
import sampleImg from '../assets/react.svg';

const Home = () => {
  const sampleProducts = [
    { id: 1, name: 'Everyday Essentials', price: '₹199', image: sampleImg },
    { id: 2, name: 'Fresh Snacks', price: '₹99', image: sampleImg },
    { id: 3, name: 'Household Picks', price: '₹249', image: sampleImg },
    { id: 4, name: 'Daily Fruits', price: '₹79', image: sampleImg }
  ];

  return (
    <section id="home" className="home">
      <div className="container">
        <div className="hero-content">
          <h1>The Local OS for Neighbourhoods</h1>
          <p>Connecting customers, vendors, and delivery partners in a trusted hyperlocal ecosystem.</p>
          <div className="hero-ctas">
            <button className="primary-btn">Get Started</button>
            <button className="secondary-btn">Join as Vendor</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-illustration" aria-hidden="true">
            {/* lightweight decorative illustration */}
            <svg width="360" height="260" viewBox="0 0 360 260" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="360" height="260" rx="18" fill="rgba(255,255,255,0.06)"/>
              <circle cx="80" cy="80" r="44" fill="rgba(255,255,255,0.12)"/>
              <rect x="160" y="60" width="140" height="28" rx="8" fill="rgba(255,255,255,0.12)"/>
              <rect x="160" y="108" width="100" height="18" rx="6" fill="rgba(255,255,255,0.08)"/>
              <rect x="40" y="150" width="280" height="18" rx="6" fill="rgba(255,255,255,0.06)"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Product grid (quick preview) */}
      <div className="container product-preview">
        <h2 className="section-title">Popular in your neighbourhood</h2>
        <div className="products-grid" role="list">
          {sampleProducts.map((p) => (
            <ProductCard key={p.id} id={p.id} name={p.name} price={p.price} image={p.image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
