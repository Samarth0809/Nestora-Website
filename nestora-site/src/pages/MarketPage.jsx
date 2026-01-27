import '../App.css';
import Reveal from '../components/Reveal';
import MarketOpportunity from '../components/MarketOpportunity';
import { Helmet } from 'react-helmet-async';

function MarketPage() {
  return (
    <div className="page-container container">
      <Helmet>
        <title>Market Opportunity - The Future of Local Commerce</title>
        <meta name="description" content="Analyze the growing $100B+ market for hyperlocal delivery and how Nestora is positioned to capture it." />
        <link rel="canonical" href="https://www.nestoraonline.com/market" />
      </Helmet>
      <Reveal>
        <MarketOpportunity />
      </Reveal>
    </div>
  );
}

export default MarketPage;
