import React from 'react';
import './Facts.css';

const Facts = () => {
  const facts = [
    { id: 1, value: '10-15 min', label: 'Delivery Time' },
    { id: 2, value: 'Zero', label: 'Expired Orders' },
    { id: 3, value: '100%', label: 'Local Inventory' },
    { id: 4, value: '2x', label: 'Kirana Revenue' },
  ];

  return (
    <section className="facts-section">
      <div className="container">
        <div className="facts-grid">
          {facts.map((fact) => (
            <div key={fact.id} className="fact-card animate-fade-in">
              <h3 className="fact-value">{fact.value}</h3>
              <p className="fact-label">{fact.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facts;
