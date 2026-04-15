import React from 'react'
import { Link } from 'react-router-dom'

export default function BannerApp() {
  return (
    
    <main>
  {/* Hero Carousel */}
  <section className="banners py-4">
    <div className="container">
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2500">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to={0}
            className="active"
          />
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to={1}
          />
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to={2}
          />
        </div>
        <div className="carousel-inner rounded-4">
          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&h=400"
              className="d-block w-100"
              alt="Slider 1"
            />
            <div className="carousel-caption d-none d-md-block text-start">
              <h1 className="display-5 fw-bold">Craving for something?</h1>
              <p>Delicious food delivered to your door.</p>
              <Link to="/products" className="btn btn-swiggy">
                Order Now
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1547573854-74d2a71d0826?auto=format&fit=crop&w=1200&h=400"
              className="d-block w-100"
              alt="Slider 2"
            />
            <div className="carousel-caption d-none d-md-block text-start">
              <h1 className="display-5 fw-bold">50% OFF on First Order</h1>
              <p>Use code: NEWUSER50</p>
              <Link to="/products" className="btn btn-swiggy">
                Get Discount
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&h=400"
              className="d-block w-100"
              alt="Slider 3"
            />
            <div className="carousel-caption d-none d-md-block text-start">
              <h1 className="display-5 fw-bold">Free Delivery</h1>
              <p>On orders above $30</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" />
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" />
        </button>
      </div>
    </div>
  </section>
</main>

  )
}
