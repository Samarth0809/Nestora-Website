import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      step: '1',
      title: 'Customer Orders',
      description: 'Customer opens Nestora app, searches for products or services nearby (within 3 km).',
      icon: '📱'
    },
    {
      step: '2',
      title: 'Vendor Confirms',
      description: 'Vendors receive the order, confirm availability & begin preparation.',
      icon: '🏪'
    },
    {
      step: '3',
      title: 'Runner Assigns',
      description: 'Delivery partner gets auto-assigned via proximity algorithm.',
      icon: '🚴'
    },
    {
      step: '4',
      title: 'Delivery & Payment',
      description: 'Delivery + payment completion. Customer confirms via OTP/COD.',
      icon: '✅'
    }
  ];

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2>How It Works</h2>
          <p>Simple 4-step process bringing neighbourhood businesses online</p>
        </div>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{step.step}</div>
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {index < steps.length - 1 && <div className="arrow">→</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
