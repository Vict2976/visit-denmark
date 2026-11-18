# Module: src/integrations

Provides Supabase integration utilities including client and server authentication middleware, database TypeScript type definitions, and cron request verification.

## Key files
- `src/integrations/supabase/auth-attacher.ts`: Client-side TanStack Start function middleware attaching the active Supabase session bearer token to server function RPCs.
- `src/integrations/supabase/cron-auth.ts`: Request authentication utility validating incoming cron requests against configured secret tokens using timing-safe comparisons.
- `src/integrations/supabase/types.ts`: TypeScript database schema and helper types defining public database tables including chat_messages and trips.
- `src/integrations/supabase/client.ts`: Client-side Supabase client instance configuration.
- `src/integrations/supabase/client.server.ts`: Server-side Supabase client initialization.
- `src/integrations/supabase/auth-middleware.ts`: Generated Supabase server auth middleware.
- `src/integrations/supabase/previewAuthStorage.ts`: Generated preview environment authentication storage adapter.

## Public interface
- attachSupabaseAuth
- authenticateCronRequest
- Json
- Database
- Tables
- TablesInsert
- TablesUpdate
- Enums
- CompositeTypes
- Constants

## Dependencies
- @tanstack/react-start
- node:crypto

## Open questions
- _none_
