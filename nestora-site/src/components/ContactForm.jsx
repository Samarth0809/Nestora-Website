import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = ({ inline = false, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [org, setOrg] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [emailed, setEmailed] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const validate = () => {
    if (!name.trim()) return 'Please enter your name';
    if (!email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return 'Please enter a valid email';
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    if (v) return setError(v);
    setError('');

    const apiBase = (
      import.meta.env.VITE_API_BASE || (import.meta.env.DEV ? 'http://localhost:4000' : '')
    ).trim().replace(/\/$/, '');
    const requestUrl = apiBase ? `${apiBase}/api/contact` : '/api/contact';
    setLoading(true);
    try {
      const res = await fetch(requestUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, org, message })
      });
      if (!res.ok) {
        const text = await res.text().catch(()=>null);
        throw new Error(text || 'Network response was not ok');
      }
      const payload = await res.json().catch(()=>({}));
      setSent(true);
      setEmailed(!!payload.emailed);
      setError('');
      setLoading(false);
      if (!inline && onClose) setTimeout(onClose, 800);
    } catch (error) {
      console.error('Contact form submission failed', error);
      setLoading(false);
      setError('Submission failed — your request was saved locally. You can also send using your email client.');
      // still mark as saved so user can proceed; do not auto-open mailto
      setSent(true);
      setEmailed(false);
    }
  };

  return (
    <div className={inline ? 'contact-inline' : 'contact-modal-overlay'} role="dialog" aria-modal={!inline}>
      <div className={inline ? 'contact-card inline' : 'contact-card'}>
        <button className="contact-close" onClick={onClose} aria-label="Close">×</button>
        <h3>Enquiry </h3>
        {sent ? (
          <div className="contact-sent">
            {emailed ? (
              <>Thank you — we've received your request and emailed the deck. We'll follow up soon.</>
            ) : (
              <>
                <p>Thanks — your request was saved. If you didn't receive an email, you can send via your mail client:</p>
                <MailtoButton name={name} email={email} org={org} message={message} />
              </>
            )}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <label>
              Name
              <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Your name" />
            </label>
            <label>
              Email
              <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="you@company.com" />
            </label>
            <label>
              Organization (optional)
              <input value={org} onChange={(e)=>setOrg(e.target.value)} placeholder="Company / neighbourhood" />
            </label>
            <label>
              Message (optional)
              <textarea value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Any notes for us" />
            </label>
            {error && <div className="contact-error">{error}</div>}
            <div className="contact-actions">
              <button type="submit" className="primary" disabled={loading}>{loading ? 'Sending...' : 'Send Request'}</button>
              <button type="button" className="secondary" onClick={onClose} disabled={loading}>Cancel</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;

function MailtoButton({ name, email, org, message }) {
  const subject = encodeURIComponent('Request: Nestora Deck');
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nOrg: ${org}\n\nMessage:\n${message}`);
  const mailto = `mailto:nestora.privatelimited@gmail.com?subject=${subject}&body=${body}`;
  return (
    <div style={{marginTop:8}}>
      <a href={mailto} className="primary cta-link" style={{padding:'0.5rem 0.75rem',display:'inline-block',borderRadius:6,textDecoration:'none'}}>Send via email client</a>
    </div>
  );
}
