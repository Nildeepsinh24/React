# Session 3 – Writing Queries and Displaying Data

**Q1. Use the useQuery hook from @apollo/client to fetch a list of restaurants (id, name, cuisine) from a GraphQL endpoint and display their names in a React component.**

**Answer 1:**
```jsx
import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_RESTAURANTS = gql`
  query GetRestaurants {
    restaurants {
      id
      name
      cuisine
    }
  }
`;

function RestaurantList() {
  const { loading, error, data } = useQuery(GET_RESTAURANTS);

  if (loading) return <p>Loading restaurants...</p>;
  if (error) return <p>Error loading restaurants.</p>;

  return (
    <div>
      <h2>Restaurants</h2>
      <ul>
        {data.restaurants.map((restaurant) => (
          <li key={restaurant.id}>{restaurant.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantList;
```

**Q2. Build a Flipkart-style product list component that uses useQuery to fetch products (name, price, image) from a GraphQL API and renders each product's name and price in a card layout.**

**Answer 2:**
```jsx
import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      name
      price
      image
    }
  }
`;

function ProductList() {
  const { data } = useQuery(GET_PRODUCTS);

  return (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      {data && data.products.map((product) => (
        <div key={product.id} style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', width: '200px' }}>
          <img src={product.image} alt={product.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
          <h3>{product.name}</h3>
          <p style={{ fontWeight: 'bold', color: '#B12704' }}>₹{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
```

**Q3. Add loading and error state handling to your product list: show a 'Loading...' message while fetching, and display an error message if the query fails.**

**Answer 3:**
```jsx
import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      name
      price
      image
    }
  }
`;

function ProductList() {
  // Destructure loading, error, and data from the hook
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  // Conditional Rendering
  if (loading) return <p style={{ fontSize: '18px' }}>Loading products, please wait...</p>;
  if (error) return <p style={{ color: 'red' }}>Error fetching products: {error.message}</p>;

  return (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      {data.products.map((product) => (
        <div key={product.id} style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', width: '200px' }}>
          <img src={product.image} alt={product.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
          <h3>{product.name}</h3>
          <p style={{ fontWeight: 'bold', color: '#B12704' }}>₹{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
```

**Q4. Refactor your restaurant list component to extract the rendering of a single restaurant into a separate RestaurantCard component, and map over the data to display all restaurants using this new component.**

**Answer 4:**
```jsx
import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_RESTAURANTS = gql`
  query GetRestaurants {
    restaurants {
      id
      name
      cuisine
    }
  }
`;

// Extracted Component
function RestaurantCard({ restaurant }) {
  return (
    <div style={{ border: '1px solid #eee', padding: '10px', marginBottom: '10px', borderRadius: '4px' }}>
      <h4>{restaurant.name}</h4>
      <p>Cuisine: {restaurant.cuisine}</p>
    </div>
  );
}

function RestaurantList() {
  const { loading, error, data } = useQuery(GET_RESTAURANTS);

  if (loading) return <p>Loading restaurants...</p>;
  if (error) return <p>Error loading restaurants.</p>;

  return (
    <div>
      <h2>Restaurants</h2>
      <div className="restaurant-grid">
        {data.restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
}

export default RestaurantList;
```

**Q5. Debug this code: A Next.js page uses useQuery to fetch movie data but always shows 'Loading...' even when the data is available. Find and fix the issue...**

**Answer 5:**
There are multiple potential issues in the original snippet related to rendering valid React elements and ensuring lists have a unique `key`. Returning raw strings (`return 'Loading...';`) instead of JSX elements can sometimes lead to rendering or hydration issues in Next.js depending on where it's returned. Furthermore, elements created within a `.map()` function must include a unique `key` prop. Finally, you should explicitly check that `data.movies` exists before mapping to avoid crashes if `data` is returned but `movies` is null/undefined.

**Fixed Code:**
```jsx
const { loading, error, data } = useQuery(GET_MOVIES);

// 1. Ensure the component returns valid JSX elements instead of plain strings
if (loading) return <div>Loading...</div>;
if (error) return <div>Error!</div>;

// 2. Safely guard against missing data structures
if (!data || !data.movies) return <div>No data.</div>;

return (
  <ul>
    {data.movies.map((movie, index) => (
      // 3. Add a required unique 'key' prop to list items
      <li key={movie.id || index}>{movie.title}</li> 
    ))}
  </ul>
);
```
