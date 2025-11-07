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
      <Header />
      <Home />
      <WhyNestora />
      <HowItWorks />
      <TechSecurity />
      <Pricing />
      <PilotGrowth />
      <TeamContact />
      <Footer />
    </div>
  )
}

export default App
