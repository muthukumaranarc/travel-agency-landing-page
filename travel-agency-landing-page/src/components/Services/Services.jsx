import './Services.css'

const services = [
  {
    title: 'Flight Booking',
    icon: '✈️',
    description: 'Best deals on international and domestic flights with top airlines'
  },
  {
    title: 'Hotel Reservations',
    icon: '🏨',
    description: 'Luxury to budget-friendly accommodations worldwide'
  },
  {
    title: 'Tour Guides',
    icon: '🗺️',
    description: 'Expert local guides for immersive cultural experiences'
  },
  {
    title: 'Travel Insurance',
    icon: '🛡️',
    description: 'Comprehensive coverage for worry-free travel'
  },
  {
    title: 'Car Rentals',
    icon: '🚗',
    description: 'Convenient transportation solutions at your destination'
  },
  {
    title: '24/7 Support',
    icon: '🎧',
    description: 'Round-the-clock assistance wherever you are'
  }
]

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="section-header">
        <span className="section-tag">OUR SERVICES</span>
        <h2>Everything You Need</h2>
        <p>Comprehensive travel services to make your journey seamless</p>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
