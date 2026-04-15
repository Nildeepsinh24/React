import React from 'react'

export default function Checkout() {
  return (
    <main className="py-5 bg-light-gray min-vh-100">
      <div className="container">
        <h2 className="fw-bold mb-4">Checkout</h2>
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
              <h5 className="fw-bold mb-4">Delivery Address</h5>
              <form className="row g-3">
                <div className="col-md-6">
                  <label className="form-label small fw-bold">First Name</label>
                  <input type="text" className="form-control rounded-3" placeholder="John" />
                </div>
                <div className="col-md-6">
                  <label className="form-label small fw-bold">Last Name</label>
                  <input type="text" className="form-control rounded-3" placeholder="Doe" />
                </div>
                <div className="col-12">
                  <label className="form-label small fw-bold">Address</label>
                  <input type="text" className="form-control rounded-3" placeholder="1234 Main St" />
                </div>
                <div className="col-md-6">
                  <label className="form-label small fw-bold">City</label>
                  <input type="text" className="form-control rounded-3" placeholder="New York" />
                </div>
                <div className="col-md-4">
                  <label className="form-label small fw-bold">State</label>
                  <select className="form-select rounded-3">
                    <option defaultValue>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="col-md-2">
                  <label className="form-label small fw-bold">Zip</label>
                  <input type="text" className="form-control rounded-3" />
                </div>
              </form>
            </div>

            <div className="card border-0 shadow-sm rounded-4 p-4">
              <h5 className="fw-bold mb-4">Payment Method</h5>
              <div className="form-check mb-3">
                <input className="form-check-input" type="radio" name="payment" id="credit" defaultChecked />
                <label className="form-check-label" htmlFor="credit">
                  Credit Card <i className="fab fa-cc-visa ms-2 text-primary"></i> <i className="fab fa-cc-mastercard ms-1 text-danger"></i>
                </label>
              </div>
              <div className="form-check mb-3">
                <input className="form-check-input" type="radio" name="payment" id="upi" />
                <label className="form-check-label" htmlFor="upi">
                  UPI / Wallet <i className="fas fa-mobile-alt ms-2 text-success"></i>
                </label>
              </div>
              <div className="form-check mb-3">
                <input className="form-check-input" type="radio" name="payment" id="cod" />
                <label className="form-check-label" htmlFor="cod">
                  Cash on Delivery
                </label>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm rounded-4 p-4 sticky-top" style={{ top: '100px' }}>
              <h5 className="fw-bold mb-4">Order Summary</h5>
              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">Item Subtotal</span>
                <span>$34.97</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">Delivery</span>
                <span>$2.00</span>
              </div>
              <div className="d-flex justify-content-between mb-3 text-success">
                <span>Discount</span>
                <span>-$5.00</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-4 mt-2">
                <span className="fw-bold fs-5">Grand Total</span>
                <span className="fw-bold fs-5">$31.97</span>
              </div>
              <button className="btn btn-swiggy w-100 py-3 rounded-pill fw-bold">
                PLACE ORDER
              </button>
              <p className="text-center text-muted x-small mt-3 mb-0">
                By placing an order, you agree to our Terms and Conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
