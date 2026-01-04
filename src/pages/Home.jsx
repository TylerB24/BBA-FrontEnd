import products from '../data/products'
import ProductCard from '../components/ProductCard'
import './Home.css'

export default function Home() {
  const product = products[0]

  return (
    <main className="home-root">
      <h1>Featured Product</h1>
      <section className="product-panel">
        <ProductCard product={product} />
      </section>
    </main>
  )
}
