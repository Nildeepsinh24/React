import React from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function NavbarApp() {
  return (
    <>
      {/* Header */}
      <nav className="navbar navbar-expand-lg sticky-top bg-white border-bottom shadow-sm">
        <div className="container">
          <button
            className="btn border-0 me-2 d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#sidebarOffcanvas"
          >
            <i className="fas fa-bars fa-lg" />
          </button>
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <div className="logo-box d-flex align-items-center">
              <span
                className="bg-swiggy-orange text-white rounded-3 px-2 py-1 fw-bold fs-4 me-1"
                style={{ backgroundColor: "var(--swiggy-orange)" }}
              >
                J
              </span>
              <span className="fw-bold fs-4 text-dark">Jadeja Dining Hall</span>
            </div>
          </Link>
          {/* Desktop Navigation */}
          <div className="collapse navbar-collapse d-none d-lg-block mx-4">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-semibold text-uppercase small">
              <li className="nav-item">
                <NavLink className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} to="/gallery">
                  Gallery
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} to="/feedback">
                  Feedback
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="d-flex align-items-center ms-auto">
            <Link to="/cart" className="nav-link position-relative mx-2">
              <i className="fas fa-shopping-cart fa-lg" />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger cart-badge">
                2
              </span>
            </Link>
            <button className="btn btn-swiggy d-none d-md-block ms-2 rounded-pill px-4">
              Sign In
            </button>
          </div>
        </div>
      </nav>
      {/* Sidebar Offcanvas */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex={-1}
        id="sidebarOffcanvas"
      >
        <div className="offcanvas-header border-bottom shadow-sm">
          <div className="d-flex align-items-center">
            <span
              className="bg-swiggy-orange text-white rounded-3 px-2 py-1 fw-bold me-2"
              style={{ backgroundColor: "var(--swiggy-orange)" }}
            >
              J
            </span>
            <h5 className="offcanvas-title fw-bold">Jadeja Dining Hall</h5>
          </div>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" />
        </div>
        <div className="offcanvas-body p-0">
          <div className="list-group list-group-flush sidebar">
            <NavLink
              to="/"
              className={({isActive}) => `list-group-item list-group-item-action border-0 ${isActive ? 'active' : ''}`}
            >
              <i className="fas fa-home me-3" /> Home
            </NavLink>
            <NavLink
              to="/products"
              className={({isActive}) => `list-group-item list-group-item-action border-0 ${isActive ? 'active' : ''}`}
            >
              <i className="fas fa-utensils me-3" /> Products
            </NavLink>
            <NavLink
              to="/gallery"
              className={({isActive}) => `list-group-item list-group-item-action border-0 ${isActive ? 'active' : ''}`}
            >
              <i className="fas fa-images me-3" /> Gallery
            </NavLink>
            <NavLink
              to="/cart"
              className={({isActive}) => `list-group-item list-group-item-action border-0 ${isActive ? 'active' : ''}`}
            >
              <i className="fas fa-shopping-cart me-3" /> Cart
            </NavLink>
            <hr />
            <NavLink
              to="/checkout"
              className={({isActive}) => `list-group-item list-group-item-action border-0 ${isActive ? 'active' : ''}`}
            >
              <i className="fas fa-credit-card me-3" /> Checkout
            </NavLink>
            <NavLink
              to="/feedback"
              className={({isActive}) => `list-group-item list-group-item-action border-0 ${isActive ? 'active' : ''}`}
            >
              <i className="fas fa-comment-alt me-3" /> Feedback
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

