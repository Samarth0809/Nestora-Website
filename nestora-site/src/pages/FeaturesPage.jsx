import '../App.css';
import Reveal from '../components/Reveal';
import { Helmet } from 'react-helmet-async';

function FeaturesPage() {
  return (
    <div className="page-container container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
      <Helmet>
        <title>Nestora Features - Kirana OS & Delivery App</title>
        <meta name="description" content="Explore Nestora's features: Inventory management for vendors, route optimization for partners, and instant delivery for customers." />
        <link rel="canonical" href="https://www.nestoraonline.com/features" />
      </Helmet>
      <Reveal>

        <h1 className="section-title">Nestora Features</h1>
        <p className="lead-text">
          A powerful suite of tools designed for the hyperlocal marketplace ecosystem.
        </p>
      </Reveal>
      
      <section className="content-section">
        <Reveal>
          <h2>For Vendors (Kiranas)</h2>
          <ul className="feature-list">
            <li><strong>Inventory Sync:</strong> Real-time visualization of stock without manual entry.</li>
            <li><strong>Order Management:</strong> Accept and process orders in seconds.</li>
            <li><strong>Digital Storefront:</strong> Your shop, online, instantly visible to the neighbourhood.</li>
          </ul>
        </Reveal>
      </section>

      <section className="content-section">
        <Reveal>
          <h2>For Partners (Delivery)</h2>
          <ul className="feature-list">
            <li><strong>Route Optimization:</strong> Smart paths for quicker deliveries.</li>
            <li><strong>Fair Pay:</strong> Community-driven earnings model.</li>
            <li><strong>Flexibility:</strong> Work when you want, where you want.</li>
          </ul>
        </Reveal>
      </section>
    </div>
  );
}

export default FeaturesPage;
