import './CTA.css'

export default function CTA() {
  return (
    <section className="cta-section">
      {/* Background Image Layer */}
      <div className="cta-bg">
        <img
          src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920&q=80"
          alt=""
          loading="lazy"
        />
      </div>
      <div className="cta-bg-overlay"></div>

      {/* Pattern Overlay */}
      <div className="cta-pattern"></div>

      {/* Decorative Elements */}
      <div className="cta-decoration cta-deco-1"></div>
      <div className="cta-decoration cta-deco-2"></div>
      <div className="cta-decoration cta-deco-3"></div>

      {/* Floating Travel Icons */}
      <div className="cta-icon cta-icon-plane">✈️</div>
      <div className="cta-icon cta-icon-globe">🌍</div>
      <div className="cta-icon cta-icon-compass">🧭</div>
      <div className="cta-icon cta-icon-map">🗺️</div>

      {/* Content */}
      <div className="cta-content">
        {/* Offer Badge */}
        <div className="cta-badge">
          <span className="cta-badge-icon">🎉</span>
          Limited Time Offer
        </div>

        {/* Star Rating */}
        <div className="cta-stars" aria-label="5 out of 5 stars">
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>

        <h2>
          Ready for Your Next <span className="cta-highlight">Adventure</span>?
        </h2>
        <p>
          Book now and get <strong>20% off</strong> on your first trip with personalized travel planning.
          Experience the journey of a lifetime with our expert guides.
        </p>

        {/* Trust Stats */}
        <div className="cta-stats">
          <div className="cta-stat">
            <span className="cta-stat-number">10K+</span>
            <span className="cta-stat-label">Bookings</span>
          </div>
          <div className="cta-stat">
            <span className="cta-stat-number">4.9★</span>
            <span className="cta-stat-label">Avg Rating</span>
          </div>
          <div className="cta-stat">
            <span className="cta-stat-number">98%</span>
            <span className="cta-stat-label">Satisfaction</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="cta-btn-wrapper">
          <button type="button" className="cta-btn">
            Start Your Journey
            <span className="cta-btn-arrow">→</span>
          </button>
          <button type="button" className="cta-btn-secondary">
            Talk to an Expert
          </button>
        </div>
      </div>
    </section>
  )
}
