# Grow 10x Digital

A digital marketing agency website built with React, TanStack Start, Tailwind CSS, and Radix UI. Originally created with [Lovable](https://lovable.dev).

## Running the app

```sh
npm install
npm run dev
```

The dev server starts on **port 5000** (`http://localhost:5000`).

## Stack

- **Framework**: TanStack Start (SSR) + React 19
- **Styling**: Tailwind CSS v4 + Radix UI components (shadcn/ui)
- **Build tool**: Vite 8
- **Config**: `@lovable.dev/vite-tanstack-config` wraps Vite/TanStack setup

## Project structure

- `src/routes/` — file-based routes (TanStack Router)
- `src/components/` — shared UI components
- `src/hooks/` — custom React hooks
- `src/lib/` — utilities
- `src/server.ts` — SSR error wrapper
- `src/start.ts` — TanStack Start entry with CSRF middleware

## User preferences

- Keep the existing project structure and stack.
