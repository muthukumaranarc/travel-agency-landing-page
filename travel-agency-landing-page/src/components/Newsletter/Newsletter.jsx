import './Newsletter.css'

export default function Newsletter() {
  return (
    <section id="contact" className="newsletter-section">
      <div className="newsletter-content">
        <h2>Stay Inspired</h2>
        <p>Subscribe to our newsletter and get exclusive travel deals, tips, and inspiration delivered to your inbox.</p>
        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Enter your email address" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  )
}
