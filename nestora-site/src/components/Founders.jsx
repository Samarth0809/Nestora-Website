import React from 'react';
import './Founders.css';
import ankitImg from '../assets/ankit_profile.jpeg';
import sahilImg from '../assets/sahil_profile.jpeg';
import samarthImg from '../assets/samarth_profile.png';

const Founders = () => {
  const founders = [
    {
      id: 1,
      name: 'Ankit',
      role: 'Founder & CEO',
      image: ankitImg,
      bio: 'Visionary leader with a passion for empowering local businesses.',
    },
    {
      id: 2,
      name: 'Sahil',
      role: 'Co-Founder',
      image: sahilImg,
      bio: 'Operations expert ensuring seamless delivery and logistics.',
    },
    {
      id: 3,
      name: 'Samarth',
      role: 'Co-Founder',
      image: samarthImg,
      bio: 'Tech wizard building the robust platform behind Nestora.',
    },
  ];

  return (
    <section id="founders" className="founders-section">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Leadership</span>
          <h2>Meet the Founders</h2>
        </div>
        <div className="founders-grid">
          {founders.map((founder) => (
            <div key={founder.id} className="founder-card card animate-fade-in">
              <div className="founder-image-wrapper">
                <img src={founder.image} alt={founder.name} className="founder-image" />
              </div>
              <div className="founder-info">
                <h3>{founder.name}</h3>
                <span className="founder-role">{founder.role}</span>
                <p className="founder-bio">{founder.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;
