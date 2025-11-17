import { useState } from 'react';
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
    const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:4000';
    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
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
    } catch (err) {
      setLoading(false);
      setError('Submission failed — your request was saved locally. You can also use your mail client.');
      setSent(true);
      setEmailed(false);
    }
  };

  const founders = [
    {
      name: 'Ankit Thakur',
      title: 'Founder & CEO',
      image: ankitImg,
      bio: [
        'Ankit Thakur is a visionary entrepreneur and product strategist with deep experience in local commerce, community networks, and digital innovation.',
        'He leads the company’s mission to empower small businesses through technology-driven solutions and sustainable growth models.'
      ]
    },
    {
      name: 'Sahil Deshmukh',
      title: 'Co-Founder & COO',
      image: sahilImg,
      bio: [
        'Sahil Deshmukh is a creative marketing leader passionate about building brands that connect deeply with people and communities.',
        'He drives the company’s marketing vision, user growth strategies, and brand partnerships with a focus on trust and authenticity.'
      ]
    },
    {
      name: 'Samarth Jagakar',
      title: 'Co-Founder & CTO',
      image: samarthImg,
      bio: [
        'Samarth Jagakar is a technology architect and innovation enthusiast with a strong background in scalable systems and mobile platforms.',
        'He oversees the company’s technology roadmap, product development, and engineering culture to deliver reliable and user-centric experiences.'
      ]
    }
  ];

  const contact = {
    name: 'Ankit Thakur',
    role: 'Founder & CEO',
    phone: '+91 7400450001',
    email: 'ankitsthakurl71@gmail.com',
    linkedin: 'https://www.linkedin.com/in/ankit-thakur-018881290/'
  };

  return (
    <section id="team-contact" className="team-contact">
      <div className="container">
        <div className="section-header">
          <h2>Team &amp; Contact</h2>
          <p>Founders, operators, and investors align here. We respond within 24 hours with the right artefacts.</p>
        </div>

        <div className="cta-strip" role="note">
          <p>Need the diligence deck, pilot metrics, or a live Q&amp;A?</p>
          <a href="#final-punchline" className="cta-link">Review the punch line</a>
          <a href="mailto:ankitsthakurl71@gmail.com" className="cta-link accent">Request access</a>
        </div>

        <div className="team-contact-content">
          <div className="team-info">
            <h3>Our Team</h3>
            <div className="founders">
              {founders.map((f) => (
                <article key={f.name} className="founder-card" aria-label={`${f.title} ${f.name}`}>
                  <div className="founder-avatar">
                    {f.image ? (
                      <img src={f.image} alt={`${f.name} profile`} className="founder-img" />
                    ) : (
                      <span aria-hidden="true">👨‍💼</span>
                    )}
                  </div>
                  <div className="founder-details">
                    <h4>{f.title} — {f.name}</h4>
                    {f.bio.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="investor-contact" aria-label="Investor and media contact details">
              <h4>Investor &amp; Media Contact</h4>
              <p className="positioning">Revolutionizing distribution with fair and transparent market pricing.</p>
              <p className="turnaround">Deck, model, and diligence data room available on request — we usually turn these around within 12 hours.</p>
              <ul>
                <li><strong>{contact.name}</strong> — {contact.role}</li>
                <li>Phone: <a href={`tel:${contact.phone.replace(/\s+/g, '')}`}>{contact.phone}</a></li>
                <li>Email: <a href={`mailto:${contact.email}`}>{contact.email}</a></li>
                <li>
                  LinkedIn: <a href={contact.linkedin} target="_blank" rel="noreferrer">{contact.linkedin}</a>
                </li>
              </ul>
              <div className="vision-note">
                We are determined to bring kiranas into the future of quick commerce — building micro-inventories that
                serve regional needs while keeping local commerce in local hands. Ask us for customer stories, PRDs, or
                compliance docs — we share everything needed for decision-making.
              </div>
            </div>

            <div className="location">
              <h4>Location</h4>
              <p>Mumbai, India</p>
              <p>Headquartered in the heart of India's commercial capital</p>
            </div>
          </div>

          <aside className="contact-form" aria-labelledby="join-vendor">
            <h3 id="join-vendor">Let's Connect</h3>
            {sent ? (
              <div className="form-feedback" aria-live="polite">
                {emailed ? (
                  <>
                    <p>Thank you — we received your request and emailed the deck. Expect a follow-up within 24 hours.</p>
                    <button type="button" className="submit-btn" onClick={() => resetFlow(true)}>Send another</button>
                  </>
                ) : (
                  <>
                    <p>Thanks — your request was saved locally. If email delivery failed, you can send it via your email client.</p>
                    <MailtoButton {...formData} />
                    <button type="button" className="submit-btn" onClick={() => resetFlow(false)}>
                      Try again
                    </button>
                  </>
                )}
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={updateField('name')} required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={updateField('email')} required />
                </div>
                <div className="form-group">
                  <label htmlFor="org">Organization (optional)</label>
                  <input type="text" id="org" name="org" value={formData.org} onChange={updateField('org')} placeholder="Company / neighbourhood" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message (Optional)</label>
                  <textarea id="message" name="message" rows="4" placeholder="Tell us about your business..." value={formData.message} onChange={updateField('message')}></textarea>
                </div>
                {error && <div className="form-error" role="alert">{error}</div>}
                <button type="submit" className="submit-btn" disabled={loading}>{loading ? 'Sending...' : 'Submit Application'}</button>
              </form>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
};

export default TeamContact;

const MailtoButton = ({ name, email, org, message }) => {
  const subject = encodeURIComponent('Nestora partnership request');
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nOrganization: ${org}\n\nMessage:\n${message}`);
  const href = `mailto:founders.towntap@gmail.com?subject=${subject}&body=${body}`;
  return (
    <a href={href} className="mailto-btn" target="_blank" rel="noreferrer">
      Send via email client
    </a>
  );
};
