# My Next.js Clerk App

This project is a Next.js application integrated with Clerk for user authentication. Below are the details for setting up and using the application.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [License](#license)

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   cd my-nextjs-clerk-app
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Set up your environment variables in the `.env.local` file. You will need to provide your Clerk API keys:
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
   CLERK_SECRET_KEY=your_secret_key
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000` to see your application in action.

## Project Structure

```
my-nextjs-clerk-app
├── app
│   ├── layout.tsx        # Wraps the application with ClerkProvider
│   └── page.tsx          # Main page of the application
├── src
│   └── middleware.ts      # Middleware for protecting routes
├── public                 # Static files
├── .env.local             # Environment variables for Clerk
├── next.config.js         # Next.js configuration
├── package.json           # npm configuration and dependencies
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```

## Environment Variables

Make sure to set the following environment variables in your `.env.local` file:

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: Your Clerk publishable key.
- `CLERK_SECRET_KEY`: Your Clerk secret key.

## Usage

This application uses Clerk's components for user authentication. You can use the following components in your application:

- `<SignInButton />`: Button for signing in users.
- `<SignUpButton />`: Button for signing up new users.
- `<UserButton />`: Displays user information when signed in.
- `<SignedIn>`: Renders children when the user is signed in.
- `<SignedOut>`: Renders children when the user is signed out.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.