import Header from './components/Header'
import Home from './components/Home'
import Facts from './components/Facts'
import WhatIsNestora from './components/WhatIsNestora'
import ProblemStatement from './components/ProblemStatement'
import Solution from './components/Solution'
import MarketOpportunity from './components/MarketOpportunity'
import Testimonials from './components/Testimonials'
import Founders from './components/Founders'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import BackToTop from './components/BackToTop'
import Reveal from './components/Reveal'
import './App.css'

function App() {
  return (
    <div className="App">
      <CustomCursor />
      <Header />
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
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
