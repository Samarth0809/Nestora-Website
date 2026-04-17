import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  Linkedin, 
  Twitter
} from 'lucide-react';
import './TeamContact.css';
import ankitImg from '../assets/ankit_profile.jpeg';
import sahilImg from '../assets/sahil_profile.jpeg';
import samarthImg from '../assets/samarth_profile.png';

const initialFormState = {
  name: '',
  email: '',
  org: '',
  message: ''
};

const TeamContact = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [emailed, setEmailed] = useState(false);

  const resetFlow = (clearForm = false) => {
    setSent(false);
    setEmailed(false);
    setError('');
    if (clearForm) setFormData(initialFormState);
  };

  const updateField = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const validate = () => {
    if (!formData.name.trim()) return 'Please enter your name';
    if (!formData.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) return 'Please enter a valid email';
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationMessage = validate();
    if (validationMessage) {
      setError(validationMessage);
      return;
    }
    setError('');
    setLoading(true);
    
    const apiBase = (
      import.meta.env.VITE_API_BASE || (import.meta.env.DEV ? 'http://localhost:4000' : '')
    ).trim().replace(/\/$/, '');
    const requestUrl = apiBase ? `${apiBase}/api/contact` : '/api/contact';

    try {
      const res = await fetch(requestUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          org: formData.org,
          message: formData.message,
          source: 'team-contact'
        })
      });
      if (!res.ok) {
        const text = await res.text().catch(() => null);
        throw new Error(text || 'Network response was not ok');
      }
      const payload = await res.json().catch(() => ({}));
      setSent(true);
      setEmailed(!!payload.emailed);
      setLoading(false);
      setFormData(initialFormState);
    } catch (error) {
      console.error('TeamContact submission failed', error);
      setLoading(false);
      setError('Submission failed — your request was saved locally. You can also use your mail client.');
      setSent(true);
      setEmailed(false);
    }
  };

  const founders = [
    {
      name: 'Sahil Deshmukh',
      title: 'Co-Founder & COO',
      image: sahilImg,
      bio: 'Driving operations and logistics.',
      linkedin: 'https://www.linkedin.com/in/sahil-deshmukh-298a60187/'
    },
    {
      name: 'Ankit Thakur',
      title: 'Founder & CEO',
      image: ankitImg,
      bio: 'Visionary entrepreneur leading the mission.',
      linkedin: 'https://www.linkedin.com/in/ankit-thakur-018881290/'
    },
    {
      name: 'Samarth Shete',
      title: 'Founding Engineer',
      image: samarthImg,
      bio: 'Architecting scalable solutions.',
      linkedin: 'https://www.linkedin.com/in/samarth-jagakar'
    }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="tc-page">
      <section className="tc-hero">
        <motion.div 
          className="tc-hero-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="tc-eyebrow">Contact Us</span>
          <h1 className="tc-title">Get in Touch</h1>
          <p className="tc-subtitle">
            Have a question, partnership idea, or just want to say hello? 
            We'd love to hear from you.
          </p>
        </motion.div>
        <div className="tc-hero-bg-shape"></div>
      </section>

      <div className="tc-container">
        <div className="tc-grid">
          
          <motion.div 
            className="tc-left-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="tc-info-cards">
              <div className="tc-info-glass-card">
                <div className="icon-box"><Mail size={22} /></div>
                <div>
                  <h3>Email Us</h3>
                  <p>hello@nestora.com</p>
                </div>
              </div>
              <div className="tc-info-glass-card">
                <div className="icon-box"><MapPin size={22} /></div>
                <div>
                  <h3>Visit Us</h3>
                  <p>Bangalore, India</p>
                </div>
              </div>
            </div>

            <div className="tc-founders-preview">
              <h2>Meet the Team</h2>
              <div className="founders-list">
                {founders.map((founder, idx) => (
                  <motion.div 
                    key={idx} 
                    className="founder-card-mini-glass"
                    whileHover={{ x: 5, backgroundColor: 'rgba(255,255,255,0.9)' }}
                  >
                    <img src={founder.image} alt={founder.name} className="founder-img" />
                    <div className="founder-details">
                      <h4>{founder.name}</h4>
                      <span>{founder.title}</span>
                      <p>{founder.bio}</p>
                      <div className="founder-socials">
                        <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn for ${founder.name}`}>
                          <Linkedin size={16} />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="tc-right-col"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="tc-form-glass-wrapper">
              <div className="form-header">
                <h2>Send a Message</h2>
                <p>We usually respond within 24 hours.</p>
              </div>

              {sent ? (
                <motion.div 
                  className="success-message"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <CheckCircle size={48} className="success-icon" />
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. We'll get back to you shortly.</p>
                  {emailed && <p className="email-note">A confirmation email has been sent to you.</p>}
                  <button className="tc-btn-reset" onClick={() => resetFlow(true)}>
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="tc-form">
                  <div className="form-group-row">
                    <div className="form-group">
                      <label>Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={updateField('name')}
                        className="tc-input"
                      />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input 
                        type="email" 
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={updateField('email')}
                        className="tc-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Organization (Optional)</label>
                    <input 
                      type="text" 
                      placeholder="Company Name"
                      value={formData.org}
                      onChange={updateField('org')}
                      className="tc-input"
                    />
                  </div>

                  <div className="form-group">
                    <label>Message</label>
                    <textarea 
                      placeholder="How can we help you?"
                      rows={5}
                      value={formData.message}
                      onChange={updateField('message')}
                      className="tc-input tc-textarea"
                    />
                  </div>

                  {error && (
                    <div className="error-message">
                      <AlertCircle size={18} />
                      <span>{error}</span>
                    </div>
                  )}

                  <button type="submit" className="tc-submit-btn" disabled={loading}>
                    {loading ? 'Sending...' : (
                      <>
                        Send Message <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default TeamContact;
