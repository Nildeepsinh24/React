document.addEventListener('DOMContentLoaded', () => {
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
