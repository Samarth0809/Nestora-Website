import '../App.css';
import Reveal from '../components/Reveal';
import Founders from '../components/Founders';
import { Helmet } from 'react-helmet-async';

function TeamPage() {
  return (
    <div className="page-container container">
      <Helmet>
        <title>Meet the Team - Nestora</title>
        <meta name="description" content="Meet the visionaries, engineers, and operators behind Nestora's mission to revolutionize hyperlocal commerce." />
        <link rel="canonical" href="https://www.nestoraonline.com/team" />
      </Helmet>
       <Reveal>
          <div style={{ paddingTop: '80px' }}>
            <h1 className="section-title text-center">Our Team</h1>
            <p className="lead-text text-center">Building the future of neighbourhood retail.</p>
            <Founders />
          </div>
       </Reveal>
    </div>
  );
}

export default TeamPage;
