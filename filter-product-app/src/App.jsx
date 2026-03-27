import { useMemo, useState } from 'react'
import './App.css'

const PRODUCTS = [
  {
    id: 1,
    name: 'Polo',
    category: 'T-Shirt',
    price: 1299,
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 2,
    name: 'Men Short',
    category: 'Short',
    price: 1499,
    image:
      'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 3,
    name: 'Jeans',
    category: 'Pants',
    price: 2499,
    image:
      'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 4,
    name: 'Sneakers',
    category: 'Shoes',
    price: 3299,
    image:
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 5,
    name: 'Shirt',
    category: 'T-Shirt',
    price: 999,
    image:
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 6,
    name: 'Skirt',
    category: 'Short',
    price: 1199,
    image:
      'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 7,
    name: 'Chinos',
    category: 'Pants',
    price: 2199,
    image:
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 8,
    name: 'Boots',
    category: 'Shoes',
    price: 3799,
    image:
      'https://images.unsplash.com/photo-1520256862855-398228c41684?auto=format&fit=crop&w=500&q=80',
  },
]

const CATEGORIES = ['All', 'T-Shirt', 'Short', 'Pants', 'Shoes']

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortOption, setSortOption] = useState('default')

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase()

    const filtered = PRODUCTS.filter((product) => {
      const categoryMatch =
        selectedCategory === 'All' || product.category === selectedCategory
      const searchMatch =
        normalizedSearch.length === 0 ||
        product.name.toLowerCase().includes(normalizedSearch)

      return categoryMatch && searchMatch
    })

    if (sortOption === 'price-low') {
      return [...filtered].sort((a, b) => a.price - b.price)
    }

    if (sortOption === 'price-high') {
      return [...filtered].sort((a, b) => b.price - a.price)
    }

    return filtered
  }, [searchTerm, selectedCategory, sortOption])

  return (
    <main className="app-container">
      <section className="product-section">
        <h1>Product Filter and Search</h1>

        <div className="toolbar">
          <div className="category-row">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                className={`category-button ${
                  selectedCategory === category ? 'active' : ''
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <select
            className="toolbar-control"
            value={sortOption}
            onChange={(event) => setSortOption(event.target.value)}
          >
            <option value="default">Sort by</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>

          <input
            type="text"
            className="toolbar-control"
            placeholder="Search product"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <article key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>Category: {product.category}</p>
              <p>Price: ₹{product.price}</p>
            </article>
          ))}
        </div>
        {filteredProducts.length === 0 && (
          <p className="empty-message">No products found for this filter.</p>
        )}
      </section>
    </main>
  )
}

export default App
