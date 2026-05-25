# Portfolio (Next.js)

Personal portfolio website built with Next.js, showcasing projects, experience, and skills, with optional visitor tracking backed by Firebase.

## Features

- Single-page portfolio sections (hero, about, skills, experience, projects, contact)
- Responsive UI with reusable components
- Vercel Analytics integration
- Optional visitor tracking API (`/api/track`) with Firebase
- Protected admin visitors view (`/admin/visitors?key=...`)

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Firebase Admin SDK (for visitor tracking)

## Getting Started

1. Install dependencies:

```bash
npm ci
```

2. Start the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create a `.env.local` file for local development. Visitor tracking/admin view only work when Firebase credentials are configured:

```bash
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_CLIENT_EMAIL=your-client-email
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
ADMIN_PASSWORD=your-admin-password
```

Notes:
- If Firebase vars are missing, tracking safely returns `{ success: false, reason: "Firebase not configured" }`.
- The admin page requires `?key=<ADMIN_PASSWORD>`.

## Available Scripts

```bash
npm run dev    # start dev server
npm run build  # production build
npm run start  # run production server
npm run lint   # run ESLint
```

## Deployment

Deploy on Vercel (recommended for this app). Ensure all required environment variables are set in your deployment environment.

## License

This project is private unless stated otherwise by the repository owner.
