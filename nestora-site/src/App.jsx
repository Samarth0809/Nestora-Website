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
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Facts />
      <WhatIsNestora />
      <ProblemStatement />
      <Solution />
      <MarketOpportunity />
      <Testimonials />
      <Founders />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default App
