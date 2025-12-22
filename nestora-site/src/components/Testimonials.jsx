import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
 const testimonials = [
  {
    id: 1,
    name: 'Ramesh Patil',
    role: 'Kirana Store Owner, Mulund',
    image: 'https://placehold.co/100x100/00BCD4/ffffff?text=RP',
    quote:
      "When the Nestora team approached me with this idea, I immediately felt it solves real problems for local shop owners. If executed well, this can bring more customers without extra hassle.",
  },
  {
    id: 2,
    name: 'Sneha Joshi',
    role: 'Resident, Mulund',
    image: 'https://placehold.co/100x100/FF4081/ffffff?text=SJ',
    quote:
      "I really liked the Nestora concept when it was explained to me. Ordering daily groceries from nearby shops within minutes sounds very convenient and trustworthy.",
  },
  {
    id: 3,
    name: 'Mahesh More',
    role: 'Kirana Store Owner, Karjat',
    image: 'https://placehold.co/100x100/FFD700/ffffff?text=MM',
    quote:
      "Nestora’s idea is simple yet powerful. Digital orders, better stock movement, and local delivery can really help small shopkeepers like us grow in the future.",
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
