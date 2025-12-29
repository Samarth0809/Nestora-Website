import React from 'react';
import './Founders.css';
import ankitImg from '../assets/ankit_profile.jpeg';
import sahilImg from '../assets/sahil_profile.jpeg';
import samarthImg from '../assets/samarth_profile.png';

const Linkedin = ({ size = 24, color = "currentColor", ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color} 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Founders = () => {
  const founders = [
    {
      id: 1,
      name: 'Sahil',
      role: 'Co-Founder',
      image: sahilImg,
      bio: 'Operations expert ensuring seamless delivery and logistics.',
      linkedin: 'https://www.linkedin.com/in/sahil-deshmukh-298a60187/'
    },
    {
      id: 2,
      name: 'Ankit',
      role: 'Founder & CEO',
      image: ankitImg,
      bio: 'Visionary leader with a passion for empowering local businesses.',
      linkedin: 'https://www.linkedin.com/in/ankit-thakur-018881290/'
    },
    {
      id: 3,
      name: 'Samarth',
      role: 'Co-Founder',
      image: samarthImg,
      bio: 'Tech wizard building the robust platform behind Nestora.',
      linkedin: 'https://www.linkedin.com/in/samarth-jagakar'
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
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '8px' }}>
                  <h3 style={{ margin: 0 }}>{founder.name}</h3>
                  <a 
                    href={founder.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="LinkedIn"
                    style={{ color: '#0a66c2', display: 'flex', alignItems: 'center' }}
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
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
