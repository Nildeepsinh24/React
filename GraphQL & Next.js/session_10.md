# Session 10 – Mini Project: "AI-Powered Blog Platform"

**Q1. Set up a new Next.js project named insta-news, enable SSR (Server-Side Rendering), and create two pages: /feed and /about, each displaying a simple heading.**

**Answer 1:**
**Command to create project:**
```bash
npx create-next-app insta-news
cd insta-news
```
**pages/feed.js:**
```jsx
export default function Feed() {
  return <h1>Insta-News Feed (SSR Enabled)</h1>;
}

export async function getServerSideProps() {
  // SSR is explicitly enabled by exporting getServerSideProps
  return { props: {} };
}
```
**pages/about.js:**
```jsx
export default function About() {
  return <h1>About Insta-News</h1>;
}
```

**Q2. Design a GraphQL schema for a 'Post' entity with fields: id, title, content, author, and createdAt. Implement a GraphQL API endpoint in your Next.js app that returns a static list of 3 sample posts.**

**Answer 2:**
**pages/api/graphql.js:**
```javascript
import { ApolloServer, gql } from 'apollo-server-micro';

const typeDefs = gql`
  type Post {
    id: ID!
    title: String!
    content: String!
    author: String!
    createdAt: String!
  }

  type Query {
    posts: [Post!]!
  }
`;

const resolvers = {
  Query: {
    posts: () => [
      { id: '1', title: 'Tech Trends 2026', content: 'AI is everywhere and integrated into everything.', author: 'Alice', createdAt: '2026-01-01' },
      { id: '2', title: 'Next.js Routing', content: 'Server components change how we build apps.', author: 'Bob', createdAt: '2026-02-15' },
      { id: '3', title: 'GraphQL vs REST', content: 'GraphQL limits over-fetching on mobile devices.', author: 'Charlie', createdAt: '2026-03-20' },
    ],
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });
const startServer = apolloServer.start();

export default async function handler(req, res) {
  await startServer;
  await apolloServer.createHandler({ path: '/api/graphql' })(req, res);
}

export const config = { api: { bodyParser: false } };
```

**Q3. Integrate Firebase Authentication with your Next.js app so users can sign in using Google. After login, display the user's name and profile picture on the /feed page.**

**Answer 3:**
```jsx
// Assuming firebase configuration is initialized in a separate firebase.js file
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
// import { app } from '../firebase'; // Initialize Firebase App

export default function Feed() {
  const [user, setUser] = useState(null);
  
  const handleGoogleLogin = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div>
      <h1>Insta-News Feed</h1>
      {!user ? (
        <button onClick={handleGoogleLogin}>Sign in with Google</button>
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src={user.photoURL} alt="Profile" style={{ width: '40px', borderRadius: '50%' }} />
          <h3>Welcome, {user.displayName}</h3>
        </div>
      )}
    </div>
  );
}
```

**Q4. On the /feed page, fetch the list of posts from your GraphQL API and display each post's title and author. Add a button next to each post labeled 'Summarize with AI'.**

**Answer 4:**
```jsx
import { useQuery, gql } from '@apollo/client';

const GET_POSTS = gql`
  query GetPosts {
    posts { id title author content }
  }
`;

export default function FeedWithPosts() {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading Feed...</p>;
  if (error) return <p>Error loading posts.</p>;

  return (
    <div>
      <h1>Latest Posts</h1>
      {data.posts.map(post => (
        <div key={post.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
          <h2>{post.title}</h2>
          <p>By: {post.author}</p>
          <button onClick={() => alert(`Summarize logic triggered for post: ${post.id}`)}>
            Summarize with AI
          </button>
        </div>
      ))}
    </div>
  );
}
```

**Q5. Use the OpenAI API to generate a summary for a selected post when the 'Summarize with AI' button is clicked. Show the summary below the post content.**

**Answer 5:**
```jsx
import { useState } from 'react';

// Using a Next.js API route that securely calls OpenAI (to hide API keys from the frontend)
export function Summarizer({ postContent }) {
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const generateSummary = async () => {
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/summarize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: postContent })
      });
      
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Failed to summarize');
      
      setSummary(data.summary);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginTop: '10px' }}>
      <button onClick={generateSummary} disabled={loading}>
        {loading ? 'Summarizing...' : 'Summarize with AI'}
      </button>
      
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      
      {summary && (
        <div style={{ background: '#f0f0f0', padding: '10px', marginTop: '10px', borderRadius: '5px' }}>
          <strong>AI Summary:</strong>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
}
```
*(The `/api/summarize` backend route would contain the OpenAI SDK call, configured specifically to instruct the AI to limit the summary to a maximum of 2-3 sentences).*
