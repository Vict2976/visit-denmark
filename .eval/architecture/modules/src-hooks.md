# Module: src/hooks

Provides reusable React client hooks for responsive mobile breakpoint detection and Supabase authentication session tracking with route invalidation.

## Key files
- `src/hooks/use-mobile.tsx`: Exports useIsMobile hook to track whether the window viewport is below the mobile breakpoint (768px).
- `src/hooks/use-session.ts`: Exports useSession hook to track client-side Supabase auth session state and trigger router invalidation on auth state changes.

## Public interface
- useIsMobile()
- useSession()

## Dependencies
- react
- @supabase/supabase-js
- @tanstack/react-router
- @/integrations/supabase/client

## Open questions
- _none_
