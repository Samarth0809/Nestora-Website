import '../App.css';
import './ContactPage.css';
import Reveal from '../components/Reveal';
import ContactUs from '../components/ContactUs';
import { Helmet } from 'react-helmet-async';

function ContactPage() {
  return (
    <div className="contact-page-main">
      <Helmet>
        <title>Contact Us - Nestora</title>
        <meta name="description" content="Get in touch with Nestora for partnerships, vendor onboarding, or general inquiries." />
        <link rel="canonical" href="https://www.nestoraonline.com/contact" />
      </Helmet>
      <div className="contact-page-inner">
        <Reveal>
          <ContactUs />
        </Reveal>
      </div>
    </div>
  );
}

export default ContactPage;
