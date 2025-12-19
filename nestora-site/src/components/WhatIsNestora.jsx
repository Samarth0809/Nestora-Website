import React from 'react';
import './WhatIsNestora.css';

const WhatIsNestora = () => {
  return (
    <section id="about" className="what-is-section">
      <div className="container">
        <div className="what-is-content animate-fade-in">
          <span className="eyebrow">About Us</span>
          <h2>What is NESTORA?</h2>
          <p className="lead-text">
            Nestora is a <strong>hyper-local quick commerce platform</strong> that connects customers with their nearest neighborhood shops (Kiranas).
          </p>
          <p>
            Unlike competitors who rely on dark stores, we empower local businesses to deliver groceries in <strong>10-15 minutes</strong>, keeping the community economy alive and thriving.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIsNestora;
