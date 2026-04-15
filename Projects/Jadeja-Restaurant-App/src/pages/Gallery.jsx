import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

export default function Gallery() {
  const [show, setShow] = useState(false);
  const [activeImg, setActiveImg] = useState('');

  const images = [
    "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800",
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800",
    "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800",
    "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800",
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800",
    "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=800"
  ];

  const handleShow = (img) => {
    setActiveImg(img);
    setShow(true);
  };

  return (
    <main className="py-5 bg-white">
      <div className="container text-center">
        <h1 className="fw-bold mb-2">Visual Feast</h1>
        <p className="text-muted mb-5">A glance at our deliciously prepared meals.</p>

        <div className="row g-4">
          {images.map((img, idx) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={idx}>
              <div className="gallery-item shadow-sm rounded-4 overflow-hidden position-relative" 
                   onClick={() => handleShow(img)}
                   style={{ cursor: 'pointer', aspectRatio: '1/1' }}>
                <img src={img} alt={`Food ${idx + 1}`} className="w-100 h-100 object-fit-cover transition-all duration-500" />
                <div className="gallery-overlay position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center opacity-0 transition-all duration-300">
                  <i className="fas fa-search-plus text-white fs-2"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal show={show} onHide={() => setShow(false)} centered size="xl" className="bg-transparent border-0">
        <Modal.Body className="p-0 position-relative">
          <img src={activeImg} className="img-fluid rounded-4 w-100" alt="Large View" />
          <button type="button" className="btn-close btn-close-white position-absolute top-0 end-0 m-3" onClick={() => setShow(false)}></button>
        </Modal.Body>
      </Modal>

      <style dangerouslySetInnerHTML={{ __html: `
        .gallery-item:hover img { transform: scale(1.1); }
        .gallery-item:hover .gallery-overlay { opacity: 1 !important; }
      `}} />
    </main>
  )
}
