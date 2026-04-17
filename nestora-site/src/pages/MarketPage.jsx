import '../App.css';
import './MarketPage.css';
import Reveal from '../components/Reveal';
import MarketOpportunity from '../components/MarketOpportunity';
import { Helmet } from 'react-helmet-async';

function MarketPage() {
  return (
    <div className="market-page">
      <Helmet>
        <title>Market Opportunity - The Future of Local Commerce</title>
        <meta name="description" content="Analyze the growing $100B+ market for hyperlocal delivery and how Nestora is positioned to capture it." />
        <link rel="canonical" href="https://www.nestoraonline.com/market" />
      </Helmet>

      <section className="market-shell">
        <div className="market-orb market-orb-left" />
        <div className="market-orb market-orb-right" />

        <Reveal>
          <div className="market-hero">
            <div className="market-badge">The Opportunity</div>
            <h1 className="market-title">A Massive Shift in Local Commerce</h1>
            <p className="market-subtitle">
              Kiranas dominate everyday retail, but the market is still deeply fragmented.
              Nestora is built for the scale, density, and trust that hyperlocal commerce needs.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <MarketOpportunity showHeader={false} />
        </Reveal>
      </section>
    </div>
  );
}

export default MarketPage;
