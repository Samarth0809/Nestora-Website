import '../App.css';
import Reveal from '../components/Reveal';
import ContactUs from '../components/ContactUs';
import { Helmet } from 'react-helmet-async';

function ContactPage() {
  return (
    <div className="page-container container">
      <Helmet>
        <title>Contact Us - Nestora</title>
        <meta name="description" content="Get in touch with Nestora for partnerships, vendor onboarding, or general inquiries." />
        <link rel="canonical" href="https://www.nestoraonline.com/contact" />
      </Helmet>
      <Reveal>
        <ContactUs />
      </Reveal>
    </div>
  );
}

export default ContactPage;
