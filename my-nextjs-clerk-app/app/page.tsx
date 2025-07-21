import { SignedIn, SignedOut } from '@clerk/nextjs';

export default function Home() {
  return (
    <main>
      <h1>Welcome to My Next.js Clerk App</h1>
      <SignedIn>
        <p>You are signed in!</p>
      </SignedIn>
      <SignedOut>
        <p>You are not signed in. Please sign in to access more features.</p>
      </SignedOut>
    </main>
  );
}