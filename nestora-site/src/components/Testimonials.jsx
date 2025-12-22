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
      "Dark-store apps were pulling my customers away, and I had no way to compete on speed or technology. When the Nestora team approached me, I explained my biggest worries—delivery, expired stock, and margin loss. They showed me how my own store could fulfill online orders using their system. Today, my daily orders have doubled, and I don’t worry about operations anymore.",
  },
  {
    id: 2,
    name: "New Mayur Kirana",
    role: "Partner Store · Karjat",
    image: mayurImg,
    quote:
      "I told the Nestora team that I wanted to go online but found other apps complicated and risky. They walked me through how Nestora works on a simple mobile dashboard and how deliveries are handled without extra investment. Now I can track inventory, orders, and earnings directly on my phone.",
  },
  {
    id: 3,
    name: "Shree Ganesh Stores",
    role: "Partner Store · Mulund",
    image: kiranaImg,
    quote:
      "My concern was speed. Customers had started ordering from dark stores because they promised faster delivery. Nestora explained how nearby kiranas like mine could deliver in 10 minutes using local runners. I didn’t need to hire staff or stock extra inventory, and my regular customers returned.",
  },
  {
    id: 4,
    name: "Sai Krupa General Store",
    role: "Partner Store · Karjat",
    image: kirana2Img,
    quote:
      "Big delivery apps made it difficult for small shops to survive. When Nestora approached me, I shared how my walk-in sales were dropping. They showed me a model where my own customers could order online from my store. Now, I compete with big apps without losing control of my business.",
  },
  {
    id: 5,
    name: "Mahalaxmi Traders",
    role: "Partner Store · Mulund",
    image: kirana3Img,
    quote:
      "I was hesitant because most platforms ask for commission or upfront investment. Nestora explained their zero-investment onboarding and how earnings remain transparent. Within the first month, my sales increased by nearly 40%, and I felt confident scaling online.",
  },
  {
    id: 6,
    name: "Omkar Provisions",
    role: "Partner Store · Karjat",
    image: kirana4Img,
    quote:
      "Delivery quality was my biggest concern. I told the Nestora team that customers blame the shop if delivery goes wrong. They explained their runner system and tamper-proof handling. Today, deliveries are smooth, customers are satisfied, and my store’s reputation has improved.",
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
