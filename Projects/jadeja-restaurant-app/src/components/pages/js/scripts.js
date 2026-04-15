document.addEventListener('DOMContentLoaded', () => {
    // Scroll to top button functionality
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    const floatingContact = document.querySelector('.floating-contact');
    
    window.onscroll = function() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            if (scrollTopBtn) scrollTopBtn.style.display = "flex";
            if (floatingContact) floatingContact.classList.add('show');
        } else {
            if (scrollTopBtn) scrollTopBtn.style.display = "none";
            if (floatingContact) floatingContact.classList.remove('show');
        }
    };

    scrollTopBtn?.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Form Validation (Bootstrap 5)
    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });

    // Simple Cart Notification
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const productName = btn.getAttribute('data-product') || 'Item';
            alert(`${productName} added to cart!`);
            updateCartCounter(1);
        });
    });

    function updateCartCounter(num) {
        const cartBadge = document.querySelector('.cart-badge');
        if (cartBadge) {
            let count = parseInt(cartBadge.textContent || '0');
            cartBadge.textContent = count + num;
        }
    }
});
