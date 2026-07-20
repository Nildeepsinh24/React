# Session 9 – Authentication and Environment Variables

**Q1. Create a new Next.js app and set up authentication using NextAuth.js with Google as a provider. Ensure that after logging in, the user's name and email are displayed on the homepage.**

**Answer 1:**
*(Assuming `npm install next-auth` is done)*

**pages/api/auth/[...nextauth].js:**
```jsx
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
});
```

**pages/index.js:**
```jsx
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <p>Welcome, {session.user.name}</p>
        <p>Email: {session.user.email}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }
  return (
    <div>
      <p>Not signed in</p>
      <button onClick={() => signIn("google")}>Sign in with Google</button>
    </div>
  );
}
```
*(You also need to wrap your app in `<SessionProvider>` inside `pages/_app.js` for `useSession` to work).*

**Q2. Add a .env.local file to your Next.js project and store your Google Client ID and Client Secret as environment variables. Update your NextAuth.js configuration to use these variables instead of hardcoding the values.**

**Answer 2:**
**.env.local:**
```env
GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-google-client-secret-string
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=a_random_secret_string_for_encryption
```
*(The configuration in Answer 1 already utilizes `process.env.GOOGLE_CLIENT_ID` and `process.env.GOOGLE_CLIENT_SECRET`, which Next.js will automatically securely load from this `.env.local` file).*

**Q3. Protect the /api/secret route in your Next.js app so that only authenticated users can access it. If an unauthenticated user tries to access this route, return a 401 Unauthorized response.**

**Answer 3:**
**pages/api/secret.js:**
```javascript
import { getServerSession } from "next-auth/next";
// Import the authOptions from your [...nextauth].js file
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(401).json({ message: "401 Unauthorized - You must be logged in." });
  }

  res.status(200).json({ message: "Success! Here is the top secret data.", user: session.user });
}
```

**Q4. Build a Profile page that only shows user details if the session is valid. If the user is not logged in, redirect them to the login page.**

**Answer 4:**
**pages/profile.js:**
```jsx
import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";

export default function Profile() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      // Redirect to login if unauthenticated
      signIn(); 
    }
  }, [status]);

  if (status === "loading") {
    return <p>Loading profile...</p>;
  }

  if (status === "authenticated") {
    return (
      <div>
        <h1>My Profile</h1>
        <p>Name: {session.user.name}</p>
        <p>Email: {session.user.email}</p>
      </div>
    );
  }

  return null;
}
```

**Q5. Use ChatGPT or GitHub Copilot to help you write a function that logs out the user and redirects them to the homepage. Paste the code you generated and note which AI tool you used.**

**Answer 5:**
**AI Tool Used:** ChatGPT

**Generated Code:**
```jsx
import { signOut } from "next-auth/react";

// Function to log out the user and redirect to the homepage
const handleLogout = async () => {
  await signOut({ callbackUrl: "/" }); // Signs out and navigates back to root
};

// Usage in a component:
// <button onClick={handleLogout}>Log Out</button>
```
