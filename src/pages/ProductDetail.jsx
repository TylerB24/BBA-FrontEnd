import { useParams, Link } from 'react-router-dom'
import products from '../data/products'
import './ProductDetail.css'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === id)

  if (!product) return (
    <main className="detail-root">
      <p>Product not found.</p>
      <Link to="/">Back</Link>
    </main>
  )

  return (
    <main className="detail-root">
      <Link to="/" className="back-link">← Back to shop</Link>
      <div className="detail-grid">
        <div className="gallery">
          {product.images.map((src, i) => (
            <img
              key={i}
              src={src}
              className="detail-image"
              alt={`${product.name} ${i+1}`}
              loading="lazy"
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://via.placeholder.com/800x600?text=Image+unavailable' }}
            />
          ))}
        </div>
        <div className="detail-info">
          <h1>{product.name}</h1>
          <p className="detail-price">${product.price.toFixed(2)}</p>
          <p className="detail-desc">{product.description}</p>
        </div>
      </div>
    </main>
  )
}
