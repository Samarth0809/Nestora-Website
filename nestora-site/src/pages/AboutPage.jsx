import '../App.css';
import './AboutPage.css';
import Reveal from '../components/Reveal';
import { Helmet } from 'react-helmet-async';

function AboutPage() {
  return (
    <div className="about-page">
      <Helmet>
        <title>About Nestora - Empowering Local Commerce</title>
        <meta name="description" content="Learn about Nestora's mission to digitize local Kirana stores and create a sustainable, community-driven commerce network." />
        <link rel="canonical" href="https://www.nestoraonline.com/about" />
      </Helmet>
      <section className="about-shell">
        <div className="about-orb about-orb-left" />
        <div className="about-orb about-orb-right" />

        <Reveal>
          <div className="about-hero">
            <div className="about-badge">About Nestora</div>
            <h1 className="about-title">Rebuilding Hyperlocal Commerce</h1>
            <p className="about-subtitle">
              Nestora is the Local Operating System for neighbourhoods, bringing kiranas,
              delivery partners, and customers into one trusted commerce network.
            </p>
            <div className="about-stats">
              <div className="about-stat">
                <span className="about-stat-value">1</span>
                <span className="about-stat-label">connected local ecosystem</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-value">3</span>
                <span className="about-stat-label">core stakeholder groups</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-value">100%</span>
                <span className="about-stat-label">focused on neighbourhood value</span>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="about-grid">
          <Reveal>
            <article className="about-card">
              <span className="about-card-kicker">Our Mission</span>
              <h2>Empower the local ecosystem, not replace it.</h2>
              <p>
                By connecting local Kirana stores with nearby customers through a community-
                driven delivery network, we are creating a sustainable, zero-waste commerce model.
              </p>
            </article>
          </Reveal>

          <Reveal>
            <article className="about-card">
              <span className="about-card-kicker">Who We Are</span>
              <h2>Builders, operators, and neighborhood problem-solvers.</h2>
              <p>
                We are a team of technologists, logistics experts, and community builders focused on
                solving the 10-minute delivery puzzle without the burn of dark stores.
              </p>
            </article>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
