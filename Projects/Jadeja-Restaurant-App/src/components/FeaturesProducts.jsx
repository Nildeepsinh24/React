import React from 'react'
import { Link } from 'react-router-dom'

export default function FeaturesProducts() {
  return (
    <section className="featured-products py-5">
  <div className="container">
    <div className="d-flex justify-content-between align-items-center mb-4">
      <h2>Top Rated Near You</h2>
      <Link
        to="/products"
        className="text-orange text-decoration-none fw-bold"
      >
        See all <i className="fas fa-arrow-right" />
      </Link>
    </div>
    <div className="row">
      <div className="col-md-3 col-sm-6">
        <div className="card food-card">
          <img
            src="/assets/pizza.png"
            className="card-img-top"
            alt="Domino's Pizza"
          />
          <div className="card-body">
            <h5 className="card-title">Domino's Pizza</h5>
            <p className="card-text">Pizzas, Italian</p>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <span className="rating-badge">
                <i className="fas fa-star" /> 4.2
              </span>
              <span className="fw-bold">$12.99</span>
            </div>
            <button
              className="btn btn-outline-swiggy w-100 mt-3 add-to-cart-btn"
              data-product="Domino's Pizza"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="card food-card">
          <img
            src="/assets/burger.png"
            className="card-img-top"
            alt="Burger King"
          />
          <div className="card-body">
            <h5 className="card-title">Burger King</h5>
            <p className="card-text">Burgers, American</p>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <span className="rating-badge">
                <i className="fas fa-star" /> 4.5
              </span>
              <span className="fw-bold">$8.49</span>
            </div>
            <button
              className="btn btn-outline-swiggy w-100 mt-3 add-to-cart-btn"
              data-product="Burger King"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="card food-card">
          <img
            src="/assets/salad.png"
            className="card-img-top"
            alt="Fresh Salad Co."
          />
          <div className="card-body">
            <h5 className="card-title">Fresh Salad Co.</h5>
            <p className="card-text">Healthy, Green</p>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <span className="rating-badge">
                <i className="fas fa-star" /> 4.1
              </span>
              <span className="fw-bold">$10.00</span>
            </div>
            <button
              className="btn btn-outline-swiggy w-100 mt-3 add-to-cart-btn"
              data-product="Fresh Salad"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        <div className="card food-card">
          <img
            src="/assets/sandwich.png"
            className="card-img-top"
            alt="Subway"
          />
          <div className="card-body">
            <h5 className="card-title">Subway</h5>
            <p className="card-text">Sandwiches, Fast Food</p>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <span className="rating-badge">
                <i className="fas fa-star" /> 4.0
              </span>
              <span className="fw-bold">$6.50</span>
            </div>
            <button
              className="btn btn-outline-swiggy w-100 mt-3 add-to-cart-btn"
              data-product="Subway"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}
