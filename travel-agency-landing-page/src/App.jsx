import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Destinations from './components/Destinations/Destinations'
import Services from './components/Services/Services'
import CTA from './components/CTA/CTA'
import Testimonials from './components/Testimonials/Testimonials'
import Newsletter from './components/Newsletter/Newsletter'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Destinations />
      <Services />
      <CTA />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  )
}

export default App
