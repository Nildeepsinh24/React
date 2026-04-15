import React, { useState } from 'react'

export default function Feedback() {
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="py-5 bg-light-gray min-vh-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            {!submitted ? (
              <div className="card border-0 shadow-sm p-4 p-md-5 rounded-4 text-center">
                <img src="https://cdn-icons-png.flaticon.com/512/2038/2038898.png"
                  className="img-fluid rounded-4 mb-4 mx-auto" style={{ width: "200px" }} alt="Feedback Header" />
                <h2 className="fw-bold mb-2">How was your meal?</h2>
                <p className="text-muted mb-4">Your feedback helps us improve our service.</p>

                <div className="star-rating mb-4 d-flex justify-content-center gap-2">
                  {[1, 2, 3, 4, 5].map((val) => (
                    <i 
                      key={val}
                      className={`${rating >= val ? 'fas' : 'far'} fa-star fs-2 text-warning`} 
                      style={{ cursor: 'pointer' }}
                      onClick={() => setRating(val)}
                    />
                  ))}
                </div>

                <form className="text-start" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Your Name</label>
                    <input type="text" className="form-control rounded-3" required placeholder="John Doe" />
                  </div>
                  <div className="mb-4">
                    <label className="form-label fw-semibold">Your Review</label>
                    <textarea className="form-control rounded-3" rows="4" required
                      placeholder="Tell us about the quality, delivery speed, etc."></textarea>
                  </div>
                  <button type="submit" className="btn btn-swiggy btn-lg w-100 py-3 rounded-pill fw-bold">
                    SUBMIT FEEDBACK
                  </button>
                </form>
              </div>
            ) : (
              <div className="card border-0 shadow-sm p-5 rounded-4 text-center animate__animated animate__fadeIn">
                <div className="mb-4 text-success">
                  <i className="fas fa-check-circle display-1"></i>
                </div>
                <h2 className="fw-bold mb-3">Thank You!</h2>
                <p className="text-muted mb-4">We really appreciate your feedback and hope to serve you again soon.</p>
                <button className="btn btn-outline-swiggy rounded-pill px-4" onClick={() => setSubmitted(false)}>
                  Submit Another Review
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
