import Header from './components/Header'
import Home from './components/Home'
import WhyNestora from './components/WhyNestora'
import HowItWorks from './components/HowItWorks'
import TechSecurity from './components/TechSecurity'
import Pricing from './components/Pricing'
import PilotGrowth from './components/PilotGrowth'
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

      {/* 3. Why Nestora: market, uniqueness, opportunity */}
      <WhyNestora />

      {/* 4. How It Works: modules, flow, onboarding */}
      <HowItWorks />

      {/* 5. Tech & Security: reliability, compliance, infra */}
      <TechSecurity />

      {/* 6. Pricing: consumer plans, kirana fees, revenue share */}
      <Pricing />

      {/* 7. Pilot & Growth: rollout plan, scale, profitability */}
      <PilotGrowth />

      {/* 8. Team & Contact: founders, contact form, location */}
      <TeamContact />

      {/* 9. Footer: links, final CTA */}
      <Footer />
    </div>
  )
}

export default App
