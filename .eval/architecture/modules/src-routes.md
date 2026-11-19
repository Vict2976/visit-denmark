# Module: src/routes [AI]

Defines the application's page routes, layout hierarchy, navigation, and API endpoints using TanStack Router and TanStack Start, covering static informational travel guides, user authentication, and interactive AI travel planning and chat features.

## Key files
- `src/routes/__root.tsx`: Root application layout setting up QueryClientProvider, HTML shell, meta tags, global error/404 components, SiteHeader, and SiteFooter.
- `src/routes/_authenticated/route.tsx`: Protected layout route enforcing client-side Supabase session checks before loading nested authenticated routes.
- `src/routes/_authenticated/chat.tsx`: Interactive AI chat interface for conversations with the Hej Guide travel assistant, streaming responses and persisting message history via Supabase.
- `src/routes/_authenticated/planner.tsx`: Personalized trip itinerary planner calling server function createTripPlan to generate and manage custom travel plans.
- `src/routes/api/chat.ts`: TanStack Start server route POST handler dispatching chat requests to the server-side chat handler.
- `src/routes/auth.tsx`: Authentication page handling user sign-in and account registration via Supabase Auth with redirect management.
- `src/routes/cities.$slug.tsx`: Dynamic city guide page loading and displaying sights, local tips, and travel times for selected Danish cities.
- `src/routes/cities.index.tsx`: Directory page listing Danish destination cities with navigation links to individual city profiles.
- `src/routes/currency.tsx`: Danish krone guide and interactive currency converter with live exchange rate fetching.
- `src/routes/index.tsx`: Landing home page providing quick facts, travel topic cards, and entry points to AI tools and guide sections.
- `src/routes/history.tsx`: Visual timeline page covering Danish history from the Viking Age to modern Denmark.
- `src/routes/people.tsx`: Culture, etiquette, style guide, and common phrasebook for visitors to Denmark.
- `src/routes/visa.tsx`: Visa and entry requirements guide detailing Schengen rules, EES, and ETIAS procedures.

## Public interface
- Route (from src/routes/__root.tsx)
- Route (from src/routes/_authenticated/route.tsx)
- Route (from src/routes/_authenticated/chat.tsx)
- Route (from src/routes/_authenticated/planner.tsx)
- Route (from src/routes/api/chat.ts)
- Route (from src/routes/auth.tsx)
- Route (from src/routes/cities.$slug.tsx)
- Route (from src/routes/cities.index.tsx)
- Route (from src/routes/currency.tsx)
- Route (from src/routes/history.tsx)
- Route (from src/routes/index.tsx)
- Route (from src/routes/people.tsx)
- Route (from src/routes/visa.tsx)

## Dependencies
- @tanstack/react-router
- @tanstack/react-query
- @tanstack/react-start
- ai
- lucide-react
- sonner
- zod
- @/integrations/supabase/client
- @/lib/cities
- @/lib/currency
- @/lib/knowledge
- @/lib/planner.functions
- @/lib/chat.server
- @/lib/lovable-error-reporting
- @/components/site-header
- @/components/site-footer
- @/components/page-hero
- @/components/chat-cta
- @/components/ai-elements/conversation
- @/components/ai-elements/message
- @/components/ai-elements/prompt-input
- @/components/ai-elements/shimmer
- @/components/ui/button
- @/components/ui/input
- @/components/ui/select

## AI touchpoints [AI]
- `src/routes/_authenticated/chat.tsx`
- `src/routes/_authenticated/planner.tsx`
- `src/routes/api/chat.ts`

## Open questions
- _none_
