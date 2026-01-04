import { Link } from 'react-router-dom'
import './ProductCard.css'

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <img className="product-image" src={product.images[0]} alt={product.name} />
        <div className="product-info">
          <h2 className="product-name">{product.name}</h2>
          <p className="product-price">${product.price.toFixed(2)}</p>
          <p className="product-short">{product.shortDescription}</p>
        </div>
      </Link>
    </article>
  )
}
