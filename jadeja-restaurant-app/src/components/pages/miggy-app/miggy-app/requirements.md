Create a fully responsive food delivery web application UI similar to Swiggy using Bootstrap 5.1.3.

Requirements:

1. Tech Stack:
- HTML5, CSS3, Bootstrap 5.1.3
- Optional: JavaScript for interactivity
- Use Bootstrap grid system for responsiveness

2. Layout & Navigation:
- Responsive header with logo, search bar, and cart icon
- Hamburger menu (mobile view) that toggles a left sidebar navigation
- Sidebar should slide in from the left with smooth animation
- Navigation links:
  Home
  Products
  Gallery
  Cart
  Checkout
  Feedback
  Orders

3. Pages to Create:

A. Home Page:
- Hero section with slider/carousel (offers & banners)
- Categories section (food types)
- Featured products (cards)
- Client reviews/testimonials (carousel)
- Call-to-action sections
- Footer with all links

B. Products Page:
- Grid layout of food items (cards)
- Each card includes image, name, price, rating, add-to-cart button
- Filters (category, price, rating)

C. Product Details Page:
- Large product image with lightbox
- Product info (name, price, description, ratings)
- Quantity selector
- Add to cart button
- Related products section

D. Cart Page:
- List of added products
- Quantity update controls
- Remove item option
- Price summary (subtotal, taxes, total)
- Proceed to checkout button

E. Checkout Page:
- Billing details form
- Address fields
- Payment options (card, COD)
- Order summary section
- Place order button

F. Order Success Page:
- Confirmation message
- Order ID display
- Continue shopping button

G. Feedback Page:
- Rating system (stars)
- Review form (name, message)
- Submit button

H. Gallery Page:
- Image gallery grid
- Lightbox functionality on click
- Hover effects

4. Components to Include:
- Bootstrap navbar & offcanvas sidebar
- Carousel sliders
- Cards for products
- Modal/lightbox for images
- Forms with validation
- Buttons and badges
- Responsive footer with links, social icons

5. Responsiveness:
- Mobile-first design
- Works on mobile, tablet, desktop
- Proper spacing and alignment across breakpoints

6. Folder Structure:

/project-root
│
├── index.html
├── products.html
├── product-details.html
├── cart.html
├── checkout.html
├── order-success.html
├── feedback.html
├── gallery.html
│
├── /css
│   └── styles.css
│
├── /js
│   └── scripts.js
│
├── /images
│   └── (all assets)
│
├── /components
│   ├── header.html
│   ├── footer.html
│   └── sidebar.html
│
└── /vendor
    └── bootstrap-5.1.3

7. Design Style:
- Clean, modern UI similar to Swiggy
- Use orange/red accent colors
- Soft shadows, rounded cards
- Smooth hover animations

8. Extra Features:
- Sticky header
- Scroll-to-top button
- Loading animations (optional)
- Reusable components (header/footer)

Output:
- Provide complete HTML structure for all pages
- Include Bootstrap CDN links
- Include custom CSS and JS
- Ensure code is clean, well-commented, and production-ready