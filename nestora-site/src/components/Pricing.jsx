import './Pricing.css';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '₹999',
      period: '/month',
      features: [
        'Up to 50 orders/month',
        'Basic analytics dashboard',
        'Customer support',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Growth',
      price: '₹1,999',
      period: '/month',
      features: [
        'Up to 200 orders/month',
        'Advanced analytics',
        'Priority customer support',
        'Marketing tools',
        'Inventory management'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '₹2,499',
      period: '/month',
      features: [
        'Unlimited orders',
        'Custom analytics',
        'Dedicated account manager',
        'API access',
        'White-label options'
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="section-header">
          <h2>Vendor Subscription Plans</h2>
          <p>Zero commissions on orders — transparent pricing that protects your margins</p>
        </div>
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <h3>{plan.name}</h3>
              <div className="price">
                <span className="amount">{plan.price}</span>
                <span className="period">{plan.period}</span>
              </div>
              <ul>
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <button className="cta-btn">Get Started</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
