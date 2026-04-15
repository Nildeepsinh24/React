import React from 'react'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light text-center p-4">
      <div className="mb-4">
        <i className="fas fa-exclamation-triangle text-warning display-1 mb-3"></i>
        <h1 className="fw-bold display-4">404</h1>
        <h2 className="text-secondary mb-4">Oops! Page Not Found</h2>
        <p className="text-muted mb-5 max-w-500 mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/" className="btn btn-swiggy btn-lg rounded-pill px-5 shadow-sm">
          Return to Home
        </Link>
      </div>
    </div>
  )
}
