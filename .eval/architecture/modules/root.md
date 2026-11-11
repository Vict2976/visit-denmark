# Module: (root)

Provide root-level build, linting, testing, and database migration configurations for the TanStack Start and Vite application.

## Key files
- `drizzle.config.ts`: Configures Drizzle Kit for PostgreSQL migrations and schema definitions using LOVABLE_DB_MIGRATION_URL.
- `eslint.config.js`: Configures ESLint rules, TypeScript linting, React hooks/refresh plugins, and restrictions against server-only Next.js imports.
- `vite.config.ts`: Sets up TanStack Start with Vite via @lovable.dev/vite-tanstack-config, configuring Vercel Nitro presets and server entry redirection.
- `vitest.config.ts`: Configures Vitest test runner with jsdom environment, React plugin, setup files, and '@' path alias resolution.

## Public interface
- default export in drizzle.config.ts (DrizzleConfig)
- default export in eslint.config.js (TSESLint flat config array)
- default export in vite.config.ts (Vite/Nitro/TanStack Start configuration)
- default export in vitest.config.ts (Vitest configuration)

## Dependencies
- drizzle-kit
- @eslint/js
- eslint-plugin-prettier/recommended
- globals
- eslint-plugin-react-hooks
- eslint-plugin-react-refresh
- typescript-eslint
- @lovable.dev/vite-tanstack-config
- vitest/config
- @vitejs/plugin-react
- node:path

## Open questions
- _none_
