import React, { useState } from 'react';
import './Testimonials.css';
import nileshImg from '../assets/kiranas/nilesh supermarket.jpeg';
import mayurImg from '../assets/kiranas/new mayur kirana store.jpeg';
import kiranaImg from '../assets/kiranas/kirana.jpeg';
import kirana2Img from '../assets/kiranas/kirana2.jpeg';
import kirana3Img from '../assets/kiranas/kirana3.jpeg';
import kirana4Img from '../assets/kiranas/kirana4.jpeg';

const Testimonials = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // const testimonials = [
  //   {
  //     id: 1,
  //     name: 'Nilesh Supermarket',
  //     role: 'Partner Store, Mulund',
  //     image: nileshImg,
  //     quote: "Since joining Nestora, my daily orders have doubled. I don't have to worry about delivery or expired stock anymore.",
  //   },
  //   {
  //     id: 2,
  //     name: 'New Mayur Kirana',
  //     role: 'Partner Store, Karjat',
  //     image: mayurImg,
  //     quote: "The technology is so easy to use. I can track everything on my phone. Nestora has truly modernized my shop.",
  //   },
  //   {
  //     id: 3,
  //     name: 'Shree Ganesh Stores',
  //     role: 'Partner Store, Mulund',
  //     image: kiranaImg,
  //     quote: "I love that I can serve my local customers in 10 minutes without hiring extra staff. It feels good to be part of this revolution.",
  //   },
  //   {
  //     id: 4,
  //     name: 'Sai Krupa General Store',
  //     role: 'Partner Store, Karjat',
  //     image: kirana2Img,
  //     quote: "Nestora helped me compete with the big apps. Now my regular customers order online from me instead of them.",
  //   },
  //   {
  //     id: 5,
  //     name: 'Mahalaxmi Traders',
  //     role: 'Partner Store, Mulund',
  //     image: kirana3Img,
  //     quote: "Zero investment and instant onboarding. My sales increased by 40% in just the first month of joining.",
  //   },
  //   {
  //     id: 6,
  //     name: 'Omkar Provisions',
  //     role: 'Partner Store, Karjat',
  //     image: kirana4Img,
  //     quote: "The delivery runners are professional and my customers are happy with the super fast service.",
  //   },
  // ];

const testimonials = [
  {
    id: 1,
    name: "Nilesh Supermarket",
    role: "Partner Store · Mulund",
    image: nileshImg,
    quote:
      "We are in planning with Nestora, and the model already looks strong for our local demand.",
  },
  {
    id: 2,
    name: "New Mayur Kirana",
    role: "Partner Store · Karjat",
    image: mayurImg,
    quote:
      "Our planning discussions have been clear and practical, especially around simple mobile operations.",
  },
  {
    id: 3,
    name: "Shree Ganesh Stores",
    role: "Partner Store · Mulund",
    image: kiranaImg,
    quote:
      "The 10-minute neighbourhood model fits our store, and we are optimistic about the rollout.",
  },
  {
    id: 4,
    name: "Sai Krupa General Store",
    role: "Partner Store · Karjat",
    image: kirana2Img,
    quote:
      "From our planning stage itself, Nestora feels like a partner that supports kiranas first.",
  },
  {
    id: 5,
    name: "Mahalaxmi Traders",
    role: "Partner Store · Mulund",
    image: kirana3Img,
    quote:
      "The zero-investment approach is a big reason we are moving ahead positively with Nestora.",
  },
  {
    id: 6,
    name: "Omkar Provisions",
    role: "Partner Store · Karjat",
    image: kirana4Img,
    quote:
      "Even before launch, the planning gives us confidence on quality, delivery flow, and customer trust.",
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
              <div 
                className="testimonial-image" 
                onClick={() => setSelectedImage(testimonial.image)}
               >
                <img src={testimonial.image} alt={testimonial.name} />
                <div className="zoom-hint">Tap to view</div>
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

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content">
            <img src={selectedImage} alt="Store View" />
            <button className="close-btn" onClick={() => setSelectedImage(null)}>×</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
