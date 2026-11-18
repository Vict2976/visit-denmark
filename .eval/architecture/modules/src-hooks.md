# Module: src/hooks

Provides reusable React hooks for UI responsive breakpoint detection and Supabase client-side authentication session state management with route invalidation.

## Key files
- `src/hooks/use-mobile.tsx`: Hook that listens to window matchMedia queries to detect whether the viewport is smaller than the mobile breakpoint (768px).
- `src/hooks/use-session.ts`: Hook that monitors Supabase authentication state, manages session/user state, and invalidates the TanStack router on auth changes.

## Public interface
- useIsMobile(): boolean
- useSession(): { session: Session | null, user: User | null, loading: boolean }

## Dependencies
- react
- @supabase/supabase-js
- @tanstack/react-router
- @/integrations/supabase/client

## Open questions
- _none_
