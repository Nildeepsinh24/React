# Session 7 – Next.js Pages and Routing

**Q1. Create a Next.js project and inside the /pages directory, add three files: home.js, explore.js, and contact.js. Each page should display a unique heading so you can confirm file-based routing is working.**

**Answer 1:**
*(Assuming the Next.js project is already created)*
**pages/home.js:**
```jsx
export default function Home() {
  return <h1>Home Page - Welcome!</h1>;
}
```
**pages/explore.js:**
```jsx
export default function Explore() {
  return <h1>Explore Page - Discover New Content!</h1>;
}
```
**pages/contact.js:**
```jsx
export default function Contact() {
  return <h1>Contact Page - Get In Touch!</h1>;
}
```
*(By navigating to `/home`, `/explore`, and `/contact`, Next.js automatically routes to these files without extra setup).*

**Q2. Add a new dynamic route to your Next.js app by creating a file named [playlistId].js inside the /pages/playlists folder. Display the playlistId from the URL on the page, simulating a Spotify playlist detail view.**

**Answer 2:**
**pages/playlists/[playlistId].js:**
```jsx
import { useRouter } from 'next/router';

export default function PlaylistDetail() {
  const router = useRouter();
  const { playlistId } = router.query;

  return (
    <div>
      <h1>Spotify Playlist Details</h1>
      <p>Now playing playlist ID: {playlistId}</p>
    </div>
  );
}
```

**Q3. Implement navigation links between your home.js, explore.js, and contact.js pages using the Link component from 'next/link'. Place the links in a simple navbar at the top of each page.**

**Answer 3:**
To avoid repeating the navbar in every file, we can create a `Navbar` component, or just include it manually in each. Here is the manual inclusion for `pages/home.js` (the same `<nav>` block applies to the others):

**pages/home.js (with Navbar):**
```jsx
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <nav style={{ display: 'flex', gap: '15px', padding: '10px', background: '#eee' }}>
        <Link href="/home">Home</Link>
        <Link href="/explore">Explore</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <h1>Home Page - Welcome!</h1>
    </div>
  );
}
```

**Q4. Set up a static path generation for your [playlistId].js dynamic route so that only three playlist pages (IDs: 101, 202, 303) are pre-rendered at build time.**

**Answer 4:**
**pages/playlists/[playlistId].js (Updated for SSG):**
```jsx
export default function PlaylistDetail({ playlistId }) {
  return (
    <div>
      <h1>Spotify Playlist Details</h1>
      <p>Now playing playlist ID: {playlistId} (Pre-rendered statically!)</p>
    </div>
  );
}

// 1. Define the specific paths to pre-render at build time
export async function getStaticPaths() {
  return {
    paths: [
      { params: { playlistId: '101' } },
      { params: { playlistId: '202' } },
      { params: { playlistId: '303' } },
    ],
    fallback: false // Any other route yields a 404 page
  };
}

// 2. Fetch data (or just pass the ID as props) for those paths
export async function getStaticProps(context) {
  return {
    props: {
      playlistId: context.params.playlistId,
    },
  };
}
```

**Q5. Use an AI tool like ChatGPT or GitHub Copilot to generate a code snippet for a Next.js dynamic route page that fetches and displays details for a Flipkart product based on productId. Paste the generated code into your project and modify it to display a custom message with the productId.**

**Answer 5:**
**pages/products/[productId].js:**
```jsx
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function FlipkartProductPage() {
  const router = useRouter();
  const { productId } = router.query;
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    if (productId) {
      // Simulating a fetch request to get product details
      setProductData({
        name: "Wireless Headphones X",
        price: "₹2,999"
      });
    }
  }, [productId]);

  if (!productData) return <p>Loading product details...</p>;

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd' }}>
      {/* Custom Message Modified by me */}
      <h1>🛒 Flipkart Custom Deal for Product: {productId}</h1>
      
      <h2>{productData.name}</h2>
      <p style={{ color: 'green', fontSize: '20px' }}>{productData.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}
```
