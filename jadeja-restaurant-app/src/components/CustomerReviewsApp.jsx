import React from 'react'

export default function CustomerReviewsApp() {
  return (
    <section className="reviews py-5 bg-white">
  <div className="container">
    <div className="text-center mb-5">
      <h2 className="fw-bold">What Our Customers Say</h2>
      <p className="text-muted">Trusted by thousands of hungry foodies</p>
    </div>
    <div className="row g-4">
      <div className="col-md-4">
        <div className="card border-0 shadow-sm p-4 rounded-4 h-100 text-center">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150"
            className="rounded-circle mx-auto mb-3 border border-3 border-warning shadow-sm"
            width={80}
            height={80}
            alt="Customer 1"
          />
          <h6 className="fw-bold mb-1">Michael Ross</h6>
          <div className="text-warning mb-2 small">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <p className="text-secondary small italic">
            "Miggy app is incredible! The delivery speed is unmatched and the
            food always arrives fresh and hot."
          </p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card border-0 shadow-sm p-4 rounded-4 h-100 text-center">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150"
            className="rounded-circle mx-auto mb-3 border border-3 border-warning shadow-sm"
            width={80}
            height={80}
            alt="Customer 2"
          />
          <h6 className="fw-bold mb-1">Jessica Lane</h6>
          <div className="text-warning mb-2 small">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
          <p className="text-secondary small italic">
            "The variety of cuisines available is amazing. I love how easy it is
            to track my order in real-time."
          </p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card border-0 shadow-sm p-4 rounded-4 h-100 text-center">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150"
            className="rounded-circle mx-auto mb-3 border border-3 border-warning shadow-sm"
            width={80}
            height={80}
            alt="Customer 3"
          />
          <h6 className="fw-bold mb-1">David Kim</h6>
          <div className="text-warning mb-2 small">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <p className="text-secondary small italic">
            "Highly recommended! The user interface is so clean and intuitive.
            Ordering food has never been this easy."
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}
