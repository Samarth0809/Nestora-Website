import '../App.css';
import './ProblemPage.css';
import Reveal from '../components/Reveal';
import ProblemStatement from '../components/ProblemStatement';
import { Helmet } from 'react-helmet-async';

function ProblemPage() {
  return (
    <div className="problem-page">
      <Helmet>
        <title>The Problem - Quick Commerce Challenges</title>
        <meta name="description" content="Understand the challenges of dark stores and centralized delivery models that Nestora is solving for local neighbourhoods." />
        <link rel="canonical" href="https://www.nestoraonline.com/problem" />
      </Helmet>

      <section className="problem-shell">
        <div className="problem-orb problem-orb-left" />
        <div className="problem-orb problem-orb-right" />

        <Reveal>
          <div className="problem-hero">
            <div className="problem-badge">The Gap</div>
            <h1 className="problem-title">Why Quick Commerce Leaves Kiranas Behind</h1>
            <p className="problem-subtitle">
              Quick commerce changed customer expectations, but it also exposed a structural gap:
              local kiranas are still invisible inside a demand-heavy digital experience.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <ProblemStatement showHeader={false} />
        </Reveal>
      </section>
    </div>
  );
}

export default ProblemPage;
