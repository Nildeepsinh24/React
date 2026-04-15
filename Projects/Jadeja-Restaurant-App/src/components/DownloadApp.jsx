import React from 'react'

export default function DownloadApp() {
  return (
   <section className="cta py-5">
  <div
    className="container rounded-4 bg-swiggy-orange text-white p-5 text-center"
    style={{ backgroundColor: "var(--swiggy-orange)" }}
  >
    <h2 className="display-6 fw-bold">Experience the best food in your city</h2>
    <p className="lead">
      Download the app for exclusive offers and faster ordering.
    </p>
    <div className="mt-4">
      <a href="#" className="btn btn-dark btn-lg me-2 mt-3">
        <i className="fab fa-apple me-2" /> App Store
      </a>
      <a href="#" className="btn btn-dark btn-lg mt-3">
        <i className="fab fa-google-play me-2" /> Play Store
      </a>
    </div>
  </div>
</section>

  )
}
