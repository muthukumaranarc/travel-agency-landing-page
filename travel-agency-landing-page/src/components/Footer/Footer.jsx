import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="nav-logo">
            <span className="logo-icon">✈</span>
            <span className="logo-text">Wanderlust</span>
          </div>
          <p>Discover the world with Wanderlust Travels. We create unforgettable travel experiences tailored just for you.</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook"><span>📘</span></a>
            <a href="#" aria-label="Instagram"><span>📷</span></a>
            <a href="#" aria-label="Twitter"><span>🐦</span></a>
            <a href="#" aria-label="YouTube"><span>▶</span></a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#destinations">Destinations</a>
          <a href="#services">Services</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-section">
          <h4>Top Destinations</h4>
          <a href="#">Santorini, Greece</a>
          <a href="#">Bali, Indonesia</a>
          <a href="#">Swiss Alps</a>
          <a href="#">Tokyo, Japan</a>
          <a href="#">Maldives</a>
        </div>
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>📍 123 Travel Street, NY 10001</p>
          <p>📞 +1 (555) 123-4567</p>
          <p>✉️ hello@wanderlust.com</p>
          <p>🕐 Mon-Fri: 9AM - 8PM</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Wanderlust Travels. All rights reserved. | Made with ❤️ for travelers</p>
      </div>
    </footer>
  )
}
