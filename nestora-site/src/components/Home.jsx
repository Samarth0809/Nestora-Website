import './Home.css';

const Home = () => {
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
          {/* Placeholder for hero image */}
          <div className="image-placeholder">
            <p>Hero Image Placeholder</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
