import '../App.css';
import Reveal from '../components/Reveal';
import { Helmet } from 'react-helmet-async';

function AboutPage() {
  return (
    <div className="page-container container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
      <Helmet>
        <title>About Nestora - Empowering Local Commerce</title>
        <meta name="description" content="Learn about Nestora's mission to digitize local Kirana stores and create a sustainable, community-driven commerce network." />
        <link rel="canonical" href="https://www.nestoraonline.com/about" />
      </Helmet>
      <Reveal>

        <h1 className="section-title">About Nestora</h1>
        <p className="lead-text">
          Nestora is the Local Operating System for Neighbourhoods, reimagining how specialized hyperlocal commerce works in India and beyond.
        </p>
      </Reveal>
      
      <section className="content-section">
        <Reveal>
          <h2>Our Mission</h2>
          <p>
            We believe in empowering the local ecosystem rather than replacing it. By connecting local Kirana stores (vendors) with nearby customers through a community-driven delivery network, we are creating a sustainable, zero-waste commerce model.
          </p>
        </Reveal>
      </section>

      <section className="content-section">
        <Reveal>
          <h2>Who We Are</h2>
          <p>
             We are a team of technologists, logistics experts, and community builders passionate about solving the 10-minute delivery puzzle without the burn of dark stores.
          </p>
        </Reveal>
      </section>
    </div>
  );
}

export default AboutPage;
