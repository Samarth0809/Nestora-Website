import React from 'react';
import './WhatIsNestora.css';

const WhatIsNestora = () => {
  return (
    <section id="about" className="what-is-section">
      <div className="container">
        <div className="what-is-content animate-fade-in">
          <span className="eyebrow">About Us</span>
          <h2>What is NESTORA?</h2>
          <div className="text-content">
            <p className="lead-text">
              Nestora is a <strong>hyper-local quick commerce platform</strong> that connects customers with their nearest neighborhood shops (Kiranas).
            </p>
            <p>
              Unlike competitors who rely on capital-intensive "dark stores" that displace local businesses, we empower local retailers with a <strong>local business operating system</strong>. We digitize their inventory, streamline their operations, and connect them to a <strong>community-driven delivery ecosystem</strong>.
            </p>
            <p>
              Our mission is to modernize the unorganized retail sector. By leveraging the existing density of Kirana stores, we enable <strong>10-15 minute delivery</strong> without adding new warehouses to the city. This creates a sustainable model where local vendors thrive, customers get instant gratification, and the neighbourhood economy flourishes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsNestora;
