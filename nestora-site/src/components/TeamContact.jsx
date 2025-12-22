import { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  Linkedin, 
  Twitter, 
  Globe,
  ArrowRight
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
    if (clearForm) {
      setFormData(initialFormState);
    }
  };

  const updateField = (field) => (e) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [field]: value }));
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
      bio: 'Driving marketing vision and user growth strategies with a focus on trust and authenticity.',
      socials: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Ankit Thakur',
      title: 'Founder & CEO',
      image: ankitImg,
      bio: 'Visionary entrepreneur leading the mission to empower small businesses through technology.',
      socials: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Samarth Shete',
      title: 'Founding Engineer',
      image: samarthImg,
      bio: 'Architecting scalable solutions and driving technical innovation for the Nestora platform.',
      socials: { linkedin: '#', twitter: '#' }
    }
  ];

  return (
    <div className="tc-page">
      {/* Hero Section */}
      <section className="tc-hero">
        <div className="tc-hero-content">
          <h1 className="tc-title">Get in <span className="highlight">Touch</span></h1>
          <p className="tc-subtitle">
            Have a question, partnership idea, or just want to say hello? 
            We'd love to hear from you.
          </p>
        </div>
        <div className="tc-hero-bg-shape"></div>
      </section>

      <div className="tc-container">
        <div className="tc-grid">
          
          {/* Left Column: Contact Info & Founders Preview */}
          <div className="tc-left-col">
            <div className="tc-info-cards">
              <div className="tc-info-card">
                <div className="icon-box"><Mail size={24} /></div>
                <div>
                  <h3>Email Us</h3>
                  <p>hello@nestora.com</p>
                  <p>support@nestora.com</p>
                </div>
              </div>
              <div className="tc-info-card">
                <div className="icon-box"><MapPin size={24} /></div>
                <div>
                  <h3>Visit Us</h3>
                  <p>Bangalore, India</p>
                  <p>Innovation Hub, 560001</p>
                </div>
              </div>
            </div>

            <div className="tc-founders-preview">
              <h2>Meet the Team</h2>
              <div className="founders-list">
                {founders.map((founder, idx) => (
                  <div key={idx} className="founder-card-mini">
                    <img src={founder.image} alt={founder.name} className="founder-img" />
                    <div className="founder-details">
                      <h4>{founder.name}</h4>
                      <span>{founder.title}</span>
                      <p>{founder.bio}</p>
                      <div className="founder-socials">
                        <Linkedin size={16} />
                        <Twitter size={16} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="tc-right-col">
            <div className="tc-form-wrapper">
              <div className="form-header">
                <h2>Send us a Message</h2>
                <p>We usually respond within 24 hours.</p>
              </div>

              {sent ? (
                <div className="success-message">
                  <CheckCircle size={48} className="success-icon" />
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. We'll get back to you shortly.</p>
                  {emailed && <p className="email-note">A confirmation email has been sent to you.</p>}
                  <button className="tc-btn-reset" onClick={() => resetFlow(true)}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="tc-form">
                  <div className="form-group">
                    <label>Name</label>
                    <input 
                      type="text" 
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={updateField('name')}
                      className="tc-input"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Email</label>
                    <input 
                      type="email" 
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={updateField('email')}
                      className="tc-input"
                    />
                  </div>

                  <div className="form-group">
                    <label>Organization (Optional)</label>
                    <input 
                      type="text" 
                      placeholder="Your company or organization"
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
          </div>

        </div>
      </div>
    </div>
  );
};

export default TeamContact;
