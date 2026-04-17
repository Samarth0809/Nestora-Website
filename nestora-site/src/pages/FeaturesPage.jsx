import '../App.css';
import './FeaturesPage.css';
import Reveal from '../components/Reveal';
import { Store, Bike, Sparkles } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

function FeaturesPage() {
  const vendorFeatures = [
    {
      title: 'Inventory Sync',
      description: 'Real-time stock visibility across storefront and operations with minimal manual effort.'
    },
    {
      title: 'Order Management',
      description: 'Accept, process, and track orders from one clean dashboard built for speed.'
    },
    {
      title: 'Digital Storefront',
      description: 'Go live in your neighborhood instantly with a trusted branded local experience.'
    }
  ];

  const partnerFeatures = [
    {
      title: 'Route Optimization',
      description: 'Smart pathing reduces travel time and improves daily delivery throughput.'
    },
    {
      title: 'Fair Earnings',
      description: 'Transparent, community-driven payouts designed for sustainable partner growth.'
    },
    {
      title: 'Flexible Workflows',
      description: 'Pick your slots, optimize your day, and manage deliveries with less friction.'
    }
  ];

  return (
    <div className="features-page-wrap">
      <Helmet>
        <title>Nestora Features - Kirana OS & Delivery App</title>
        <meta name="description" content="Explore Nestora's features: Inventory management for vendors, route optimization for partners, and instant delivery for customers." />
        <link rel="canonical" href="https://www.nestoraonline.com/features" />
      </Helmet>

      <section className="features-shell">
        <div className="features-orb features-orb-left" />
        <div className="features-orb features-orb-right" />

        <Reveal>
          <div className="features-hero">
            <div className="features-badge">
              <Sparkles size={14} />
              <span>Product Capabilities</span>
            </div>
            <h1 className="features-title">Nestora Features</h1>
            <p className="features-subtitle">
              A focused operating system for hyperlocal commerce that helps vendors scale,
              partners deliver faster, and neighborhoods buy with confidence.
            </p>
          </div>
        </Reveal>

        <div className="features-audience-grid">
          <Reveal>
            <article className="audience-card">
              <div className="audience-head">
                <div className="audience-icon vendor">
                  <Store size={18} />
                </div>
                <div>
                  <h2>For Vendors (Kiranas)</h2>
                  <p>Run your local store with digital speed and operational clarity.</p>
                </div>
              </div>
              <ul className="audience-list">
                {vendorFeatures.map((feature) => (
                  <li key={feature.title}>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal>
            <article className="audience-card">
              <div className="audience-head">
                <div className="audience-icon partner">
                  <Bike size={18} />
                </div>
                <div>
                  <h2>For Delivery Partners</h2>
                  <p>Deliver more efficiently with transparent tools and smarter routing.</p>
                </div>
              </div>
              <ul className="audience-list">
                {partnerFeatures.map((feature) => (
                  <li key={feature.title}>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>

      </section>
    </div>
  );
}

export default FeaturesPage;
