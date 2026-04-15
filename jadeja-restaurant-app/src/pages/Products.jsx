import React, { useState, useMemo } from 'react'

const INITIAL_PRODUCTS = [
  { name: "Margherita Pizza", cuisine: "Italian", price: 14.99, rating: 4.3, img: "/assets/pizza.png" },
  { name: "Double Cheese Burger", cuisine: "American", price: 9.99, rating: 4.6, img: "/assets/burger.png" },
  { name: "Spicy Paneer Tacos", cuisine: "Mexican", price: 7.50, rating: 4.1, img: "/assets/tacos.png" },
  { name: "Avocado Salad Bowl", cuisine: "Healthy", price: 11.20, rating: 4.8, img: "/assets/salad.png" },
  { name: "Red Velvet Cake", cuisine: "Desserts", price: 5.50, rating: 4.9, img: "/assets/cake.png" },
  { name: "Hakka Noodles", cuisine: "Chinese", price: 8.99, rating: 4.4, img: "/assets/noodles.png" }
];

export default function Products() {
  const [sortOption, setSortOption] = useState('Relevance');

  const sortedProducts = useMemo(() => {
    let sorted = [...INITIAL_PRODUCTS];
    if (sortOption === 'Price: Low to High') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'Price: High to Low') {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'Rating') {
      sorted.sort((a, b) => b.rating - a.rating);
    }
    return sorted;
  }, [sortOption]);

  return (
    <main className="py-5 bg-light-gray">
      <div className="container">
        <div className="row">
          {/* Filters Sidebar (Desktop) */}
          <aside className="col-lg-3 d-none d-lg-block">
            <div
              className="card border-0 shadow-sm p-4 rounded-4 sticky-top"
              style={{ top: 100 }}
            >
              <h5 className="fw-bold mb-4">Filters</h5>
              <div className="mb-4">
                <h6 className="fw-semibold">Cuisines</h6>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" id="c1" />
                  <label className="form-check-label" htmlFor="c1">
                    Italian
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" id="c2" />
                  <label className="form-check-label" htmlFor="c2">
                    American
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" id="c3" />
                  <label className="form-check-label" htmlFor="c3">
                    Indian
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" id="c4" />
                  <label className="form-check-label" htmlFor="c4">
                    Chinese
                  </label>
                </div>
              </div>
              <div className="mb-4">
                <h6 className="fw-semibold">Price Range</h6>
                <input
                  type="range"
                  className="form-range"
                  min={0}
                  max={100}
                  id="priceRange"
                />
                <div className="d-flex justify-content-between mt-2">
                  <span>$0</span>
                  <span>$100</span>
                </div>
              </div>
              <div className="mb-4">
                <h6 className="fw-semibold">Rating</h6>
                <select className="form-select">
                  <option defaultValue="">Any Rating</option>
                  <option value={4}>4+ Stars</option>
                  <option value={3}>3+ Stars</option>
                </select>
              </div>
              <button className="btn btn-swiggy w-100">Apply Filters</button>
            </div>
          </aside>
          {/* Products Grid */}
          <div className="col-lg-9">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h4 className="fw-bold">Showing all delicacies</h4>
              <div className="dropdown">
                <button
                  className="btn btn-white border shadow-sm dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  Sort by: {sortOption}
                </button>
                <ul className="dropdown-menu shadow border-0">
                  <li>
                    <button className="dropdown-item py-2" onClick={() => setSortOption('Relevance')}>
                      Relevance
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item py-2" onClick={() => setSortOption('Price: Low to High')}>
                      Price: Low to High
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item py-2" onClick={() => setSortOption('Price: High to Low')}>
                      Price: High to Low
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item py-2" onClick={() => setSortOption('Rating')}>
                      Rating
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              {sortedProducts.map((product, idx) => (
                <div className="col-md-4 col-sm-6 mb-4" key={idx}>
                  <div className="card food-card shadow-sm border-0 rounded-4">
                    <img
                      src={product.img}
                      className="card-img-top rounded-top-4"
                      alt={product.name}
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <div className="card-body p-3">
                      <h5 className="card-title fw-bold mb-1">{product.name}</h5>
                      <p className="card-text text-muted small mb-2">{product.cuisine}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="rating-badge bg-success text-white px-2 py-1 rounded small">
                          <i className="fas fa-star me-1" /> {product.rating}
                        </span>
                        <span className="fw-bold text-dark">${product.price.toFixed(2)}</span>
                      </div>
                      <button className="btn btn-outline-swiggy w-100 mt-3 rounded-pill fw-semibold">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Pagination */}
            <nav className="mt-5">
              <ul className="pagination justify-content-center">
                <li className="page-item disabled"><a className="page-link rounded-start-pill" href="#">Previous</a></li>
                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link rounded-end-pill" href="#">Next</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </main>
  )
}
