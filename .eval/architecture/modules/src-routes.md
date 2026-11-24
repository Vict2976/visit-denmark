# Module: src/routes [AI]

Defines the application routing structure, layout shell, public informational pages (visa, currency, cities, culture, history), authentication flow, and authenticated AI features (conversational guide chat, itinerary planner, and server API endpoint) using TanStack Router and TanStack Start.

## Key files
- `src/routes/__root.tsx`: Root layout configuring TanStack Router, React Query provider, global HTML head tags, error/not-found boundaries, and site navigation shell.
- `src/routes/_authenticated/route.tsx`: Route layout guard enforcing authenticated Supabase sessions before rendering nested routes.
- `src/routes/_authenticated/chat.tsx`: Interactive conversational AI guide UI streaming answers from the backend and loading/persisting chat history via Supabase.
- `src/routes/_authenticated/planner.tsx`: Itinerary generator UI that submits user travel preferences via TanStack Start server functions and saves trip plans.
- `src/routes/api/chat.ts`: TanStack Start server route handler delegating POST chat requests to the server-side chat controller.
- `src/routes/auth.tsx`: Authentication view providing email/password sign-in and sign-up with redirect handling.
- `src/routes/index.tsx`: Homepage showcasing quick facts, primary navigation topics, and calls to action for the AI travel guide.
- `src/routes/currency.tsx`: Currency guide and live/fallback DKK exchange rate conversion calculator.
- `src/routes/cities.$slug.tsx`: Dynamic route displaying detailed visitor information, sights, and travel tips for a specific Danish city.
- `src/routes/cities.index.tsx`: Index listing of featured Danish cities.
- `src/routes/visa.tsx`: Informational guide on Schengen visa regulations, EES, and ETIAS entry rules.
- `src/routes/people.tsx`: Cultural guide covering Danish lifestyle, etiquette, and common phrases.
- `src/routes/history.tsx`: Chronological timeline of Danish historical milestones.

## Public interface
- Route (from src/routes/__root.tsx)
- Route (from src/routes/_authenticated/route.tsx)
- Route (from src/routes/_authenticated/chat.tsx)
- Route (from src/routes/_authenticated/planner.tsx)
- Route (from src/routes/api/chat.ts)
- Route (from src/routes/auth.tsx)
- Route (from src/routes/index.tsx)
- Route (from src/routes/currency.tsx)
- Route (from src/routes/cities.index.tsx)
- Route (from src/routes/cities.$slug.tsx)
- Route (from src/routes/visa.tsx)
- Route (from src/routes/people.tsx)
- Route (from src/routes/history.tsx)

## Dependencies
- @tanstack/react-router
- @tanstack/react-query
- @tanstack/react-start
- ai
- lucide-react
- sonner
- zod
- @/components/site-header
- @/components/site-footer
- @/components/page-hero
- @/components/chat-cta
- @/components/ui/button
- @/components/ui/input
- @/components/ui/select
- @/components/ai-elements/conversation
- @/components/ai-elements/message
- @/components/ai-elements/prompt-input
- @/components/ai-elements/shimmer
- @/integrations/supabase/client
- @/lib/lovable-error-reporting
- @/lib/cities
- @/lib/currency
- @/lib/knowledge
- @/lib/planner.functions
- @/lib/chat.server

## AI touchpoints [AI]
- `src/routes/_authenticated/chat.tsx`
- `src/routes/_authenticated/planner.tsx`
- `src/routes/api/chat.ts`

## Open questions
- Is there any client-side retry or reconnection logic for interrupted streaming responses beyond marking the response as cut off with ERROR_MARKER?
- Should non-authenticated users have limited preview access to the chat or trip planner before hitting the auth redirect guard?
