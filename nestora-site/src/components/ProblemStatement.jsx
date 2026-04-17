import React from 'react';
import { Store, TrendingDown, Warehouse, AlertTriangle } from 'lucide-react';
import './ProblemStatement.css';

const ProblemStatement = ({ showHeader = true, className = '' }) => {
  return (
    <section id="problem" className={`problem-section ${className}`.trim()}>
      <div className="container">
        {showHeader ? (
          <div className="section-header">
            <span className="eyebrow">The Gap</span>
            <h2>The Quick Commerce Disconnect</h2>
          </div>
        ) : null}
        <div className="problem-grid">
          <div className="problem-card card animate-fade-in">
            <div className="icon-wrapper danger">
              <Store className="problem-icon" />
              <div className="icon-badge"><AlertTriangle size={14} /></div>
            </div>
            <h3>Kiranas Left Behind</h3>
            <p>
              Quick-commerce giants trained customers to expect 10-minute delivery,
              but <strong>millions of local shops</strong> are still invisible in the digital journey.
            </p>
          </div>
          
          <div className="problem-card card animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="icon-wrapper warning">
              <TrendingDown className="problem-icon" />
            </div>
            <h3>Unfair Market</h3>
            <p>
              Without digitized inventory and logistics, kiranas are losing their
              <strong> most valuable customers</strong> and basket share to dark-store-led platforms.
            </p>
          </div>
          
          <div className="problem-card card animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="icon-wrapper dark">
              <Warehouse className="problem-icon" />
            </div>
            <h3>The Dark Store Trap</h3>
            <p>
              Competitors burn cash on <strong>high-rent dark stores</strong> and dead inventory.
              It is a capital-heavy model trying to recreate what kiranas already own.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
