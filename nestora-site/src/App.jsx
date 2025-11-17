import Header from './components/Header'
import Home from './components/Home'
import WhyNestora from './components/WhyNestora'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import PilotGrowth from './components/PilotGrowth'
import FinalPunchline from './components/FinalPunchline'
import TeamContact from './components/TeamContact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      {/* 1. Site header and navigation */}
      <Header />

      {/* 2. Hero section: problem, solution, USP, economics */}
      <Home />

      {/* 3. How we solve it */}
      <HowItWorks />

      {/* 4. Advantages, uniqueness, market position */}
      <WhyNestora />

      {/* 5. Expansion + future vision */}
      <PilotGrowth />

      {/* 6. Financial aspects */}
      <Pricing />

      {/* 7. Secondary punchline + Deck/Q&A */}
      <FinalPunchline />

      {/* 8. Team & Contact */}
      <TeamContact />

      {/* 9. Footer */}
      <Footer />
    </div>
  )
}

export default App
