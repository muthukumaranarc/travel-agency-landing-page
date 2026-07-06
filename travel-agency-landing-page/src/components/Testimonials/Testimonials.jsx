import './Testimonials.css'

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'New York, USA',
    text: 'Wanderlust made our dream trip to Bali absolutely unforgettable! Every detail was perfectly planned.',
    rating: 5,
    avatar: 'SJ'
  },
  {
    name: 'James Chen',
    location: 'London, UK',
    text: 'The Swiss Alps tour was breathtaking. Our guide was incredibly knowledgeable and friendly.',
    rating: 5,
    avatar: 'JC'
  },
  {
    name: 'Maria Garcia',
    location: 'Madrid, Spain',
    text: 'From Santorini to Tokyo, every trip with Wanderlust has been flawless. Highly recommend!',
    rating: 5,
    avatar: 'MG'
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="section-header">
        <span className="section-tag">TESTIMONIALS</span>
        <h2>What Our Travelers Say</h2>
        <p>Real stories from real travelers who explored with us</p>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-stars">
              {'★'.repeat(t.rating)}
            </div>
            <p className="testimonial-text">"{t.text}"</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">{t.avatar}</div>
              <div>
                <h4>{t.name}</h4>
                <span>{t.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
