# Module: src

Configures core application initialization, client routing with React Query, server-side fetch handling with catastrophic error normalization, and TanStack Start instance middleware (CSRF, authentication, and error handling).

## Key files
- `src/router.tsx`: Defines and creates the client/server TanStack Router instance configured with QueryClient and the generated route tree.
- `src/server.ts`: Entrypoint for server request handling, wrapping the TanStack Start server entry and converting swallowed SSR errors or uncaught exceptions into HTML error pages.
- `src/start.ts`: Initializes the TanStack Start instance with middleware for Supabase authentication, server function CSRF protection, and error handling.
- `src/routeTree.gen.ts`: Generated file defining the TanStack Router route tree structure.

## Public interface
- getRouter()
- default { fetch(request: Request, env: unknown, ctx: unknown): Promise<Response> }
- startInstance

## Dependencies
- @tanstack/react-query
- @tanstack/react-router
- @tanstack/react-start
- @tanstack/react-start/server-entry
- @/integrations/supabase/auth-attacher
- ./lib/error-capture
- ./lib/error-page

## Open questions
- _none_
