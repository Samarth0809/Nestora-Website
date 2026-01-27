import { Helmet } from 'react-helmet-async'
import '../App.css'
import Home from '../components/Home'
import Facts from '../components/Facts'
import WhatIsNestora from '../components/WhatIsNestora'
import ProblemStatement from '../components/ProblemStatement'
import Solution from '../components/Solution'
import MarketOpportunity from '../components/MarketOpportunity'
import Testimonials from '../components/Testimonials'
import Founders from '../components/Founders'
import ContactUs from '../components/ContactUs'
import Reveal from '../components/Reveal'

function LandingPage() {
  return (
    <>
      <Helmet>
        <title>Nestora - Hyperlocal Marketplace & Neighbourhood Delivery</title>
        <meta name="description" content="The Local OS for Neighbourhoods. Connecting customers, vendors, and delivery partners in a trusted hyperlocal ecosystem." />
        <link rel="canonical" href="https://www.nestoraonline.com/" />
      </Helmet>
      <Home />
      <Reveal>
        <Facts />
      </Reveal>
      <Reveal>
        <WhatIsNestora />
      </Reveal>
      <Reveal>
        <ProblemStatement />
      </Reveal>
      <Reveal>
        <Solution />
      </Reveal>
      <Reveal>
        <MarketOpportunity />
      </Reveal>
      <Reveal>
        <Testimonials />
      </Reveal>
      <Reveal>
        <Founders />
      </Reveal>
      <Reveal>
        <ContactUs />
      </Reveal>
    </>
  )
}

export default LandingPage
