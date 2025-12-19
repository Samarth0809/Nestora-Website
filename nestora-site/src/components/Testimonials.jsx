import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'Kirana Owner, Delhi',
      image: 'https://placehold.co/100x100/00BCD4/ffffff?text=RK',
      quote: "Since joining Nestora, my daily orders have doubled. I don't have to worry about delivery or expired stock anymore.",
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Customer, Mumbai',
      image: 'https://placehold.co/100x100/FF4081/ffffff?text=PS',
      quote: "I love that I can order from my trusted local shop and get it in 10 minutes. It feels good to support local businesses.",
    },
    {
      id: 3,
      name: 'Amit Singh',
      role: 'Kirana Owner, Bangalore',
      image: 'https://placehold.co/100x100/FFD700/ffffff?text=AS',
      quote: "The technology is so easy to use. I can track everything on my phone. Nestora has truly modernized my shop.",
    },
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Testimonials</span>
          <h2>What People Say</h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card card animate-fade-in">
              <div className="testimonial-image">
                <img src={testimonial.image} alt={testimonial.name} />
              </div>
              <p className="testimonial-quote">"{testimonial.quote}"</p>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <span>{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
