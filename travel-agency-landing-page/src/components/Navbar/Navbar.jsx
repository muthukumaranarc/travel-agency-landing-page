import { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">Wanderlust</span>
        </div>
        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#destinations" onClick={() => setMobileMenuOpen(false)}>Destinations</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#testimonials" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="nav-cta">Book Now</a>
        </div>
        <button
          className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}
