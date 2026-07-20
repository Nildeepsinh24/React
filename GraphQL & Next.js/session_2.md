# Session 2 – GraphQL Setup in React

**Q1. Install @apollo/client and graphql in a new React app using npm, then verify the installation by importing ApolloClient from @apollo/client in App.js and logging it to the console.**

**Answer 1:**
**Command to install dependencies:**
```bash
npm install @apollo/client graphql
```

**App.js (Verification):**
```jsx
import React from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache()
});

console.log('ApolloClient instantiated:', client);

function App() {
  return (
    <div>
      <h1>GraphQL Setup</h1>
    </div>
  );
}

export default App;
```

**Q2. Set up ApolloClient in your React project to connect to the public GraphQL endpoint https://countries.trevorblades.com/ and configure ApolloProvider to wrap your App component.**

**Answer 2:**
**index.js (or main.jsx):**
```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// 1. Initialize Apollo Client
const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/',
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root'));

// 2. Wrap App with ApolloProvider
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
```

**Q3. Create and run a simple GraphQL query using Apollo Client’s useQuery hook to fetch and display the names of all countries from the countries GraphQL API.**

**Answer 3:**
**CountriesList.jsx Component:**
```jsx
import React from 'react';
import { useQuery, gql } from '@apollo/client';

// Define the GraphQL query
const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      name
    }
  }
`;

function CountriesList() {
  // Execute the query
  const { data } = useQuery(GET_COUNTRIES);

  return (
    <div>
      <h2>List of Countries</h2>
      <ul>
        {data && data.countries.map((country, index) => (
          <li key={index}>{country.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CountriesList;
```

**Q4. Explain in your own words the role of ApolloProvider in a React app and how it uses React Context to provide GraphQL data to child components.**

**Answer 4:**
The `ApolloProvider` is a special wrapper component provided by Apollo Client that acts as the bridge between React and your GraphQL data. It takes the `ApolloClient` instance as a prop and uses React's native Context API under the hood to pass this client down through the entire component tree. Because of this, any child component (no matter how deeply nested) can easily access the client to execute queries or mutations (using hooks like `useQuery`) without having to manually pass the client down via props at every level. 

**Q5. Modify your previous code to display a loading message while the query is fetching data and an error message if the query fails.**

**Answer 5:**
**Modified CountriesList.jsx:**
```jsx
import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      name
    }
  }
`;

function CountriesList() {
  // Destructure loading and error states alongside data
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  // 1. Handle loading state
  if (loading) return <p>Loading countries...</p>;
  
  // 2. Handle error state
  if (error) return <p>Error fetching countries: {error.message}</p>;

  // 3. Render data once successfully fetched
  return (
    <div>
      <h2>List of Countries</h2>
      <ul>
        {data.countries.map((country, index) => (
          <li key={index}>{country.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CountriesList;
```
