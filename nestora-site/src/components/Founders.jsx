import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import ankitImg from '../assets/ankit_profile.jpeg';
import sahilImg from '../assets/sahil_profile.jpeg';
import samarthImg from '../assets/samarth_profile.png';
import './Founders.css';

const Founders = ({
  className = '',
  hideHeader = false,
  sectionClassName = '',
  containerClassName = ''
}) => {
  const founders = [
    {
      id: 1,
      name: 'Sahil Deshmukh',
      role: 'Co-Founder & COO',
      image: sahilImg,
      bio: 'Operations expert ensuring seamless delivery and logistics workflows.',
      linkedin: 'https://www.linkedin.com/in/sahil-deshmukh-298a60187/'
    },
    {
      id: 2,
      name: 'Ankit Thakur',
      role: 'Founder & CEO',
      image: ankitImg,
      bio: 'Visionary leader with a passion for empowering local businesses.',
      linkedin: 'https://www.linkedin.com/in/ankit-thakur-018881290/'
    },
    {
      id: 3,
      name: 'Samarth Jagakar',
      role: 'Co-Founder & Techie',
      image: samarthImg,
      bio: 'Tech wizard building the robust platform architecture behind Nestora.',
      linkedin: 'https://www.linkedin.com/in/samarth-jagakar'
    },
  ];

  return (
    <section
      id="founders"
      className={`founders-section ${sectionClassName}`}
    >
      <div className={`founders-container ${containerClassName}`}>
        {!hideHeader && (
          <motion.div
            className="founders-header"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="founders-eyebrow">
              Leadership
            </span>
            <h2 className="founders-title">
              Meet the Directors
            </h2>
          </motion.div>
        )}

        <div className={`founders-grid ${className}`}>
          {founders.map((founder, index) => (
            <motion.div
              key={founder.id}
              className="founder-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <div className="founder-card-bar" />
              <div className="founder-avatar-wrap">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="founder-avatar"
                />
              </div>
              <div className="founder-meta">
                <h3 className="founder-name">{founder.name}</h3>
                <span className="founder-role">
                  {founder.role}
                </span>
                <p className="founder-bio">{founder.bio}</p>
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="founder-link"
                  aria-label={`LinkedIn profile for ${founder.name}`}
                >
                  <Linkedin size={18} strokeWidth={2} />
                  <span>Connect</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;
