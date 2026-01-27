import '../App.css';
import Reveal from '../components/Reveal';
import Solution from '../components/Solution';
import { Helmet } from 'react-helmet-async';

function SolutionPage() {
  return (
    <div className="page-container container">
       <Helmet>
        <title>Our Solution - Nestora Kirana OS</title>
        <meta name="description" content="Discover how Nestora's Local OS empowers Kirana stores to compete with dark stores using hyperlocal logistics." />
        <link rel="canonical" href="https://www.nestoraonline.com/solution" />
      </Helmet>
      <Reveal>
        <Solution />
      </Reveal>
    </div>
  );
}

export default SolutionPage;
