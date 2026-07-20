# Session 6 – Introduction to Next.js

**Q1. Install Node.js if not already installed, then use npx create-next-app to create a new Next.js project called insta-feed and run it locally to see the default homepage.**

**Answer 1:**
**Command to create the project:**
```bash
npx create-next-app insta-feed
```
**Command to run it locally:**
```bash
cd insta-feed
npm run dev
```
*(After running the above commands, navigating to `http://localhost:3000` will display the default Next.js homepage).*

**Q2. Inside your insta-feed Next.js project, open the pages/index.js file and replace the default content with a simple homepage that displays 'Welcome to Insta Feed!' and your name.**

**Answer 2:**
**pages/index.js:**
```jsx
import React from 'react';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to Insta Feed!</h1>
      <p>Created by: Student</p>
    </div>
  );
}
```

**Q3. Add a new page called explore.js inside the pages folder that displays a heading 'Explore Trending Reels' and a short paragraph about why server-side rendering (SSR) can help social media apps load trending content faster.**

**Answer 3:**
**pages/explore.js:**
```jsx
import React from 'react';

export default function Explore() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Explore Trending Reels</h1>
      <p>
        Server-Side Rendering (SSR) is highly beneficial for social media apps because the server 
        pre-generates the HTML with the latest trending content before sending it to the browser. 
        This means the user instantly sees fully rendered reels upon page load, eliminating the blank 
        loading screen associated with fetching massive amounts of data on the client side.
      </p>
    </div>
  );
}
```

**Q4. Compare the folder structure of your Next.js project (insta-feed) with a basic Create React App project. List 3 differences you notice in how routing and pages are handled.**

**Answer 4:**
1. **File-Based Routing:** In Next.js, the `pages/` (or `app/`) folder automatically maps files to routes (e.g., `pages/explore.js` becomes `/explore`). In Create React App (CRA), you have to manually install a library like `react-router-dom` and configure all routes inside `App.js`.
2. **No `public/index.html` entry point:** CRA uses a single `public/index.html` where React injects the entire app into a `<div id="root">`. Next.js automatically handles the document structure on the server and exposes a custom `_document.js` and `_app.js` file if you need to modify the global HTML skeleton.
3. **API Routes Integration:** Next.js provides an `api/` directory (inside `pages/api` or `app/api`) which allows you to write backend serverless functions directly within the same project. CRA is strictly frontend and does not provide an integrated API folder.

**Q5. Write a short explanation (3-4 lines) on how SSR in Next.js can improve SEO for a food delivery app like Zomato, compared to using only client-side rendering (CSR).**

**Answer 5:**
With Server-Side Rendering (SSR), Zomato's restaurant pages are fully rendered into HTML on the server before reaching the browser. This allows search engine web crawlers (like Googlebot) to immediately read the restaurant names, menus, and ratings exactly as they appear in the HTML source code. In contrast, Client-Side Rendering (CSR) serves a nearly empty HTML file and relies on Javascript to fetch data, which can cause crawlers to miss critical content, hurting search rankings.
