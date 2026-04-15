import React, { useState, useEffect, useRef } from 'react'

export default function FooterApp() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    let observer;
    const handleScroll = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    const setupLogic = () => {
      // Cleanup previous logic
      if (observer) observer.disconnect();
      window.removeEventListener('scroll', handleScroll);

      if (window.innerWidth <= 768) {
        // Mobile: Show only when footer is near
        observer = new IntersectionObserver(
          ([entry]) => setIsVisible(entry.isIntersecting),
          { rootMargin: '100px' }
        );
        if (footerRef.current) observer.observe(footerRef.current);
      } else {
        // Desktop: Show after scrolling 300px
        window.addEventListener('scroll', handleScroll);
        handleScroll();
      }
    };

    setupLogic();
    window.addEventListener('resize', setupLogic);

    return () => {
      if (observer) observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', setupLogic);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <footer ref={footerRef}>
        <div className="container">
          <div className="row">
            <div className="col-md-3 mb-4">
              <h5 className="fw-bold mb-3 small-caps">COMPANY</h5>
              <a href="#">About us</a>
              <a href="#">Team</a>
              <a href="#">Careers</a>
              <a href="#">Swiggy Blog</a>
              <a href="#">Bug Bounty</a>
            </div>
            <div className="col-md-3 mb-4">
              <h5 className="fw-bold mb-3 small-caps">CONTACT</h5>
              <a href="#">Help &amp; Support</a>
              <a href="#">Partner with us</a>
              <a href="#">Ride with us</a>
            </div>
            <div className="col-md-3 mb-4">
              <h5 className="fw-bold mb-3 small-caps">LEGAL</h5>
              <a href="#">Terms &amp; Conditions</a>
              <a href="#">Refund &amp; Cancellation</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Cookie Policy</a>
            </div>
            <div className="col-md-3 mb-4">
              <div className="social-icons">
                <h5 className="fw-bold mb-3 small-caps">KEEP IN TOUCH</h5>
                <a href="#"><i className="fab fa-facebook-f" /></a>
                <a href="#"><i className="fab fa-instagram" /></a>
                <a href="#"><i className="fab fa-twitter" /></a>
                <a href="#"><i className="fab fa-linkedin-in" /></a>
              </div>
            </div>
          </div>
          <hr className="bg-secondary mt-5" style={{ opacity: 0.1 }} />
          <div className="text-center pt-3 text-secondary">
            <small className="opacity-75">© 2026 Jadeja-Restaurant-App . Developed by Brijesh.</small>
          </div>
        </div>
      </footer>

      {/* Floating UI Elements */}
      <div className={`floating-contact ${isVisible ? 'show' : ''}`} style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)', pointerEvents: isVisible ? 'auto' : 'none', transition: 'all 0.4s ease' }}>
        <a
          href="https://wa.me/9998003879"
          className="float-btn float-whatsapp shadow-lg"
          target="_blank"
          title="WhatsApp Us"
        >
          <i className="fab fa-whatsapp" />
        </a>
        <a href="tel:9998003879" className="float-btn float-call shadow-lg" title="Call Us">
          <i className="fas fa-phone-alt" />
        </a>
      </div>

      {/* Scroll Top Button */}
      {isVisible && (
        <button 
          id="scrollTopBtn" 
          className="btn btn-swiggy rounded-circle shadow-lg animate__animated animate__fadeInUp"
          onClick={scrollToTop}
          style={{ display: 'flex' }}
        >
          <i className="fas fa-arrow-up" />
        </button>
      )}
    </>
  )
}

