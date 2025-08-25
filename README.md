# Next.js 15 App Router Template

A modern, full-featured Next.js 15 project template using the App Router, TypeScript, Prisma, and best practices for scalable web applications.

## Features

- **Next.js 15 App Router**: Latest routing paradigm for building scalable apps.
- **TypeScript**: Type-safe development for reliability and maintainability.
- **Prisma ORM**: Database access and migrations.
- **Authentication**: Modular authentication flows (login, register, forgot password).
- **API Routes**: Organized backend logic under `src/app/api`.
- **Reusable Components**: UI components for modals, dropdowns, navigation, and layout.
- **State Management**: Reducers and hooks for authentication and global state.
- **Testing**: Jest setup for unit and integration tests.
- **Environment Configs**: Axios, cookies, email, OTP, and more.
- **Global Styles**: Centralized CSS for consistent theming.
- **Public Assets**: SVGs, images, and icons for branding.

## Getting Started

1.  **Install dependencies**
    ```bash
    pnpm install
    # or
    npm install
    # or
    yarn install
    ```

2.  **Configure environment variables**
    Create a `.env` file based on your needs (see Prisma and Next.js docs).

3.  **Run development server**
    ```bash
    pnpm dev
    # or
    npm run dev
    # or
    yarn dev
    ```

4.  **Open your app**
    Visit [http://localhost:3000](http://localhost:3000)

## Project Structure

```
nextjs-template/
│
├── prisma/                # Prisma schema and migrations
│   └── schema.prisma
│
├── public/                # Static assets (images, SVGs)
│
├── src/
│   ├── app/               # App Router pages and layouts
│   │   ├── (protected)/   # Protected routes
│   │   │   ├── login/
│   │   │   ├── register/
│   │   │   └── forgot/
│   │   ├── (public)/      # Public routes
│   │   ├── api/           # API route handlers
│   │   ├── globals.css    # Global styles
│   │   └── manifest.ts    # PWA manifest
│   │
│   ├── components/        # Reusable UI components
│   ├── configs/           # Config files (axios, cookies, email, otp)
│   ├── constants/         # App-wide constants (e.g., navbar)
│   ├── hooks/             # Custom React hooks (e.g., useAuth)
│   ├── layouts/           # Layout components (Navbar, Footer)
│   ├── lib/               # Utility libraries (auth, cloudinary, prisma)
│   ├── providers/         # Context providers (e.g., TanStack Query)
│   ├── reducers/          # State reducers (e.g., AuthReducers)
│   ├── services/          # Service layer (e.g., Auth API calls)
│   ├── tests/             # Jest tests
│   ├── types/             # TypeScript types
│   └── utils/             # Utility functions (e.g., regex)
│
├── .env                   # Environment variables (not committed)
├── package.json           # Project metadata and scripts
├── tsconfig.json          # TypeScript configuration
├── next.config.ts         # Next.js configuration
├── postcss.config.mjs     # PostCSS configuration
├── eslint.config.mjs      # ESLint configuration
├── jest.config.ts         # Jest configuration
├── jest.setup.ts          # Jest setup
└── README.md              # Project documentation
```

## Authentication Flows

- **Login, Register, Forgot Password**: Modular pages under `src/app/(protected)/` for user authentication.
- **API Integration**: Auth routes handled via `src/app/api/auth/route.ts`.
- **State Management**: Auth state managed via reducers and hooks.

## Testing

- **Jest**: All tests are located in `src/tests/`.
  Run tests with:
  ```bash
  pnpm test
  # or
  npm test
  # or
  yarn test
  ```

## Database

- **Prisma**:
  - Schema defined in `prisma/schema.prisma`
  - Migrations managed via Prisma CLI
  - Database access via `src/lib/prisma.ts`

## Deployment

Deploy easily on [Vercel](https://vercel.com/) or any platform supporting Next.js.

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [TanStack Query](https://tanstack.com/query/latest)
- [Jest Testing](https://jestjs.io/docs/getting-started)
