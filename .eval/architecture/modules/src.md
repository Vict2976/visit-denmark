# Module: src

Configures core router initialization, TanStack Start instance setup with auth/CSRF middleware, and SSR server fetch entry handling with error page fallbacks.

## Key files
- `src/router.tsx`: Creates and configures the TanStack Router instance with QueryClient and the generated route tree.
- `src/routeTree.gen.ts`: Generated route tree module used by the router.
- `src/server.ts`: Server request handler handling SSR entry execution, error capturing, and h3 swallowed error normalization.
- `src/start.ts`: TanStack Start setup configuring Supabase authentication function middleware, CSRF protection, and error middleware.

## Public interface
- getRouter: () => Router
- default { fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> }
- startInstance: TanStack Start instance configuration

## Dependencies
- @tanstack/react-query
- @tanstack/react-router
- @tanstack/react-start
- @tanstack/react-start/server-entry
- ./lib/error-capture
- ./lib/error-page
- @/integrations/supabase/auth-attacher

## Open questions
- _none_
