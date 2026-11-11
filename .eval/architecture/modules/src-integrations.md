# Module: src/integrations

Provides Supabase integration utilities including database TypeScript schemas, client authentication request middleware for TanStack Start server functions, and cron request authentication verification.

## Key files
- `src/integrations/supabase/auth-attacher.ts`: Creates TanStack Start client function middleware that injects the active Supabase session access token into RPC request headers.
- `src/integrations/supabase/cron-auth.ts`: Authenticates incoming cron requests against environment secrets using timing-safe comparisons.
- `src/integrations/supabase/types.ts`: Defines TypeScript types for the Supabase database schema, including the chat_messages and trips tables.

## Public interface
- attachSupabaseAuth
- authenticateCronRequest(request: Request): Promise<Response | null>
- Database
- Json
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
- How are the unread generated client and middleware files (client.ts, client.server.ts, auth-middleware.ts, previewAuthStorage.ts) configured to handle preview and production authentication contexts?
