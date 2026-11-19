# Module: (root)

Root configuration files managing database migrations, linting rules, Vite/TanStack Start application build and runtime settings, and Vitest test suite execution.

## Key files
- `drizzle.config.ts`: Drizzle ORM migration configuration specifying schema path, migration output directory, and PostgreSQL connection credentials.
- `eslint.config.js`: Linting configuration using TypeScript ESLint, Prettier, and React hooks/refresh plugins, with custom import restrictions for TanStack Start.
- `vite.config.ts`: Application build and runtime configuration using @lovable.dev/vite-tanstack-config, configuring TanStack Start server entry and Vercel Nitro presets.
- `vitest.config.ts`: Test runner configuration using Vitest with jsdom environment, React plugin, setup files, and module path aliases.

## Public interface
- default export (drizzle.config.ts): DrizzleConfig object for drizzle-kit
- default export (eslint.config.js): ESLint flat configuration array
- default export (vite.config.ts): TanStack Start / Nitro configuration object
- default export (vitest.config.ts): Vitest configuration object

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
