import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          Explore the <span className="highlight">World</span><br />
          With Us
        </h1>
        <p className="hero-subtitle">
          Discover extraordinary destinations and create memories that last a lifetime.
          Your journey of a thousand miles begins with a single step.
        </p>
        <div className="hero-search">
          <div className="search-input-group">
            <input type="text" placeholder="Where do you want to go?" />
          </div>
          <button className="search-btn">Search</button>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">500+</span>
            <span className="stat-label">Destinations</span>
          </div>
          <div className="stat">
            <span className="stat-number">50K+</span>
            <span className="stat-label">Happy Travelers</span>
          </div>
          <div className="stat">
            <span className="stat-number">150+</span>
            <span className="stat-label">Partner Hotels</span>
          </div>
          <div className="stat">
            <span className="stat-number">4.9</span>
            <span className="stat-label">Average Rating</span>
          </div>
        </div>
      </div>
    </section>
  )
}
