import { Hero } from './components/Hero'
import { EventDetails } from './components/EventDetails'
import { Schedule } from './components/Schedule'
import { Gallery } from './components/Gallery'
import { Footer } from './components/Footer'
import { GlobalSnow } from './components/GlobalSnow'
import { EVENT_CONFIG } from './config'
import './App.css'

function App() {
  const handleHeroCtaClick = () => {
    window.open(EVENT_CONFIG.googleFormUrl, '_blank')
  }

  return (
    <>
      {/* Global snow effect */}
      <GlobalSnow />
      
      <main className="overflow-x-hidden relative z-10">
        <Hero onCtaClick={handleHeroCtaClick} />
        <EventDetails />
        <Schedule />
        <Gallery />
      </main>
      <Footer />
    </>
  )
}

export default App
