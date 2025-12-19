import React from 'react';
import './MarketOpportunity.css';

const MarketOpportunity = () => {
  return (
    <section id="market" className="market-section">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">The Opportunity</span>
          <h2>Market Potential</h2>
        </div>
        <div className="market-content animate-fade-in">
          <div className="market-stat">
            <div className="circle-chart">
              <span className="chart-value">₹600B+</span>
            </div>
            <p>Kirana Market Size</p>
          </div>
          <div className="market-divider"></div>
          <div className="market-stat">
            <div className="circle-chart">
              <span className="chart-value">90%</span>
            </div>
            <p>Unorganized Retail</p>
          </div>
          <div className="market-divider"></div>
          <div className="market-stat">
            <div className="circle-chart">
              <span className="chart-value">100x</span>
            </div>
            <p>Growth Potential</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketOpportunity;
