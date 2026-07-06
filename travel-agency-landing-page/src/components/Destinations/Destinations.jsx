import './Destinations.css'

const destinations = [
  {
    id: 1,
    name: 'Santorini, Greece',
    price: '$1,299',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=80',
    description: 'White-washed buildings overlooking the Aegean Sea'
  },
  {
    id: 2,
    name: 'Bali, Indonesia',
    price: '$899',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80',
    description: 'Tropical paradise with ancient temples and rice terraces'
  },
  {
    id: 3,
    name: 'Swiss Alps',
    price: '$2,199',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&q=80',
    description: 'Majestic mountains and serene alpine lakes'
  },
  {
    id: 4,
    name: 'Tokyo, Japan',
    price: '$1,599',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80',
    description: 'Where tradition meets cutting-edge innovation'
  },
  {
    id: 5,
    name: 'Maldives',
    price: '$2,499',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80',
    description: 'Crystal-clear waters and overwater bungalows'
  },
  {
    id: 6,
    name: 'Paris, France',
    price: '$1,399',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80',
    description: 'The city of love, art, and world-class cuisine'
  }
]

export default function Destinations() {
  return (
    <section id="destinations" className="destinations-section">
      <div className="section-header">
        <span className="section-tag">POPULAR DESTINATIONS</span>
        <h2>Explore Top Destinations</h2>
        <p>Hand-picked destinations that promise unforgettable experiences</p>
      </div>
      <div className="destinations-grid">
        {destinations.map((dest) => (
          <div key={dest.id} className="destination-card">
            <div className="dest-image">
              <img src={dest.image} alt={dest.name} loading="lazy" />
              <div className="dest-price">{dest.price}</div>
              <div className="dest-rating">
                <span>★</span> {dest.rating}
              </div>
            </div>
            <div className="dest-info">
              <h3>{dest.name}</h3>
              <p>{dest.description}</p>
              <button className="dest-btn">Explore Now →</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
