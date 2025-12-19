import React from 'react';
import { Store, TrendingDown, Warehouse, AlertTriangle } from 'lucide-react';
import './ProblemStatement.css';

const ProblemStatement = () => {
  return (
    <section id="problem" className="problem-section">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">The Gap</span>
          <h2>The Quick Commerce Disconnect</h2>
        </div>
        <div className="problem-grid">
          <div className="problem-card card animate-fade-in">
            <div className="icon-wrapper danger">
              <Store className="problem-icon" />
              <div className="icon-badge"><AlertTriangle size={14} /></div>
            </div>
            <h3>Kiranas Left Behind</h3>
            <p>
              Quick-commerce giants have trained customers to expect 10-minute delivery, 
              but <strong>12 million local shops</strong> are invisible to the digital consumer.
            </p>
          </div>
          
          <div className="problem-card card animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="icon-wrapper warning">
              <TrendingDown className="problem-icon" />
            </div>
            <h3>Leaking Loyalty</h3>
            <p>
              Without digitized inventory and logistics, kiranas are losing their 
              <strong> most valuable customers</strong> and basket share to VC-backed apps.
            </p>
          </div>
          
          <div className="problem-card card animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="icon-wrapper dark">
              <Warehouse className="problem-icon" />
            </div>
            <h3>The Dark Store Trap</h3>
            <p>
              Competitors burn cash on <strong>high-rent dark stores</strong> and dead inventory. 
              It's a capital-heavy model trying to replicate what kiranas already own.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
