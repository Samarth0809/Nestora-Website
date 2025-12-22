import { useState } from 'react';
import './ContactUs.css';

const initialFormState = {
  name: '',
  email: '',
  org: '',
  message: ''
};

const ContactUs = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [emailed, setEmailed] = useState(false);

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
          source: 'contact-us'
        })
      });

      if (!res.ok) {
        const text = await res.text().catch(() => null);
        throw new Error(text || 'Network response was not ok');
      }

      const payload = await res.json().catch(() => ({}));
      setSent(true);
      setEmailed(!!payload.emailed);
      setFormData(initialFormState);
    } catch (err) {
      console.error('ContactUs submission failed', err);
      setError('Submission failed — please try again or email founders.nestora@gmail.com.');
      setSent(true);
      setEmailed(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-wrapper card animate-fade-in">
          <div className="contact-info">
            <span className="eyebrow">Get in Touch</span>
            <h2>Ready to Transform Local Commerce?</h2>
            <p>Whether you're an investor, a kirana owner, or just curious, we'd love to hear from you.</p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="icon">📧</span>
                <a href="mailto:founders.nestora@gmail.com">founders.nestora@gmail.com</a>
              </div>
              <div className="contact-item">
                <span className="icon">📍</span>
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>
          
          <div className="contact-form-wrapper">
            {sent ? (
              <div className="success-message">
                <h3>Thank you!</h3>
                <p>We've received your message and will get back to you shortly.</p>
                {emailed && <p className="email-note">A confirmation email was sent to you.</p>}
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    setSent(false);
                    setError('');
                    setEmailed(false);
                  }}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3>Request a Deck / Contact Us</h3>
                {error && <div className="error-message">{error}</div>}
                
                <div className="form-group">
                  <label>Name</label>
                  <input 
                    type="text" 
                    value={formData.name} 
                    onChange={updateField('name')} 
                    placeholder="Your Name"
                  />
                </div>
                
                <div className="form-group">
                  <label>Email</label>
                  <input 
                    type="email" 
                    value={formData.email} 
                    onChange={updateField('email')} 
                    placeholder="your@email.com"
                  />
                </div>
                
                <div className="form-group">
                  <label>Organization (Optional)</label>
                  <input 
                    type="text" 
                    value={formData.org} 
                    onChange={updateField('org')} 
                    placeholder="Company Name"
                  />
                </div>
                
                <div className="form-group">
                  <label>Message</label>
                  <textarea 
                    value={formData.message} 
                    onChange={updateField('message')} 
                    placeholder="How can we help you?"
                    rows={4}
                  />
                </div>
                
                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
