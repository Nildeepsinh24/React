import React from 'react'

export default function CategoryApp() {
  return (
  <section className="categories py-5 bg-light">
  <div className="container text-center">
    <h2 className="mb-4">What's on your mind?</h2>
    <div className="row row-cols-2 row-cols-md-4 row-cols-lg-6 g-4">
      <div className="col">
        <div className="category-item">
          <img
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=150&h=150"
            className="category-img"
            alt="Pizza"
          />
          <h5>Pizza</h5>
        </div>
      </div>
      <div className="col">
        <div className="category-item">
          <img
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=150&h=150"
            className="category-img"
            alt="Burger"
          />
          <h5>Burger</h5>
        </div>
      </div>
      <div className="col">
        <div className="category-item">
          <img
            src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=150&h=150"
            className="category-img"
            alt="Cakes"
          />
          <h5>Cakes</h5>
        </div>
      </div>
      <div className="col">
        <div className="category-item">
          <img
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=150&h=150"
            className="category-img"
            alt="Salads"
          />
          <h5>Salads</h5>
        </div>
      </div>
      <div className="col">
        <div className="category-item">
          <img
            src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=150&h=150"
            className="category-img"
            alt="Noodles"
          />
          <h5>Noodles</h5>
        </div>
      </div>
      <div className="col">
        <div className="category-item">
          <img
            src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=150&h=150"
            className="category-img"
            alt="Biryani"
          />
          <h5>Biryani</h5>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}
