import React from 'react';
import './MarketOpportunity.css';

const MarketOpportunity = ({ showHeader = true, className = '' }) => {
  return (
    <section id="market" className={`market-section ${className}`.trim()}>
      <div className="container">
        {showHeader ? (
          <div className="section-header">
            <span className="eyebrow">The Opportunity</span>
            <h2>Market Potential</h2>
          </div>
        ) : null}
        <div className="market-content animate-fade-in">
          <div className="market-stat">
            <div className="circle-chart">
              <span className="chart-value">₹600B+</span>
            </div>
            <p>Kirana market size</p>
          </div>
          <div className="market-divider"></div>
          <div className="market-stat">
            <div className="circle-chart">
              <span className="chart-value">90%</span>
            </div>
            <p>Unorganized retail</p>
          </div>
          <div className="market-divider"></div>
          <div className="market-stat">
            <div className="circle-chart">
              <span className="chart-value">100x</span>
            </div>
            <p>Growth potential</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketOpportunity;
