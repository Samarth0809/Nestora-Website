import './TeamContact.css';
import ankitImg from '../assets/ankit_profile.jpeg';
import sahilImg from '../assets/sahil_profile.jpeg';
import samarthImg from '../assets/samarth_profile.png';

const TeamContact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your interest! We will get back to you soon.');
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

  return (
    <section id="team-contact" className="team-contact">
      <div className="container">
        <div className="section-header">
          <h2>Team & Contact</h2>
          <p>Join the Nestora ecosystem and be part of the neighbourhood revolution</p>
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

            <div className="location">
              <h4>Location</h4>
              <p>Mumbai, India</p>
              <p>Headquartered in the heart of India's commercial capital</p>
            </div>
          </div>
        </div>

        {/* Contact form moved below the team section to be full width within the container */}
        <aside className="contact-form" aria-labelledby="join-vendor">
          <h3 id="join-vendor">Join as Vendor</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="business">Business Type</label>
              <select id="business" name="business" required>
                <option value="">Select your business type</option>
                <option value="grocery">Grocery Store</option>
                <option value="restaurant">Restaurant</option>
                <option value="laundry">Laundry Service</option>
                <option value="tailor">Tailor</option>
                <option value="electrician">Electrician</option>
                <option value="other">Other Services</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="location">Location (City/Area)</label>
              <input type="text" id="location" name="location" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message (Optional)</label>
              <textarea id="message" name="message" rows="4" placeholder="Tell us about your business..."></textarea>
            </div>
            <button type="submit" className="submit-btn">Submit Application</button>
          </form>
        </aside>
      </div>
    </section>
  );
};

export default TeamContact;
