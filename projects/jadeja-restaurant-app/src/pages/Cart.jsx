import React from 'react'
import { Link } from 'react-router-dom'

export default function Cart() {
  const cartItems = [
    { id: 1, name: "Margherita Pizza", price: 14.99, qty: 1, img: "/assets/pizza.png" },
    { id: 2, name: "Double Cheese Burger", price: 9.99, qty: 2, img: "/assets/burger.png" }
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const delivery = 2.00;
  const total = subtotal + delivery;

  return (
    <main className="py-5 bg-light-gray min-vh-100">
      <div className="container">
        <h2 className="fw-bold mb-4">Your Shopping Bag</h2>
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm rounded-4 p-4 overflow-hidden">
              {cartItems.length > 0 ? (
                <>
                  {cartItems.map((item) => (
                    <div key={item.id} className="cart-item py-3 d-flex align-items-center border-bottom last-border-0">
                      <img src={item.img} alt={item.name} className="rounded-3 shadow-sm me-4" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                      <div className="flex-grow-1">
                        <h5 className="fw-bold mb-1">{item.name}</h5>
                        <p className="text-muted small mb-0">Signature Series</p>
                      </div>
                      <div className="quantity-control d-flex align-items-center bg-light rounded-pill px-2 py-1 mx-4">
                        <button className="btn btn-sm border-0"><i className="fas fa-minus small"></i></button>
                        <span className="px-3 fw-bold">{item.qty}</span>
                        <button className="btn btn-sm border-0"><i className="fas fa-plus small"></i></button>
                      </div>
                      <div className="text-end" style={{ minWidth: '80px' }}>
                        <h6 className="fw-bold mb-0">${(item.price * item.qty).toFixed(2)}</h6>
                      </div>
                      <button className="btn text-danger ms-3"><i className="fas fa-trash-alt"></i></button>
                    </div>
                  ))}
                </>
              ) : (
                <div className="text-center py-5">
                  <i className="fas fa-shopping-basket display-1 text-light-gray mb-3"></i>
                  <h3>Your bag is empty</h3>
                  <Link to="/products" className="btn btn-swiggy mt-3 rounded-pill">Start Shopping</Link>
                </div>
              )}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm rounded-4 p-4">
              <h5 className="fw-bold mb-4">Bill Details</h5>
              <div className="d-flex justify-content-between mb-3 text-muted">
                <span>Item Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-3 text-muted">
                <span>Delivery Fee</span>
                <span>${delivery.toFixed(2)}</span>
              </div>
              <hr className="my-4" />
              <div className="d-flex justify-content-between mb-4">
                <span className="fw-bold fs-5">Total Pay</span>
                <span className="fw-bold fs-5 text-dark">${total.toFixed(2)}</span>
              </div>
              <Link to="/checkout" className="btn btn-swiggy w-100 py-3 rounded-pill fw-bold">
                PROCEED TO CHECKOUT
              </Link>
            </div>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .last-border-0:last-child { border-bottom: 0 !important; }
      `}} />
    </main>
  )
}
