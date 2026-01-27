import '../App.css';
import Reveal from '../components/Reveal';
import ProblemStatement from '../components/ProblemStatement';
import { Helmet } from 'react-helmet-async';

function ProblemPage() {
  return (
    <div className="page-container container">
      <Helmet>
        <title>The Problem - Quick Commerce Challenges</title>
        <meta name="description" content="Understand the challenges of dark stores and centralized delivery models that Nestora is solving for local neighbourhoods." />
        <link rel="canonical" href="https://www.nestoraonline.com/problem" />
      </Helmet>
      <Reveal>
         <ProblemStatement />
      </Reveal>
    </div>
  );
}

export default ProblemPage;
