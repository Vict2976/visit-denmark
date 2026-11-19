# Module: src/routes [AI]

Application routing layer for Hej Copenhagen using TanStack Router and TanStack Start, providing static travel guide pages (visa, currency, cities, culture, history), authenticated views for AI chat and trip planning, client auth flows, root layout with global context, and an API chat endpoint handler.

## Key files
- `src/routes/__root.tsx`: Root application layout route defining global metadata, fonts, styles, React Query provider, header/footer layout, error boundaries, and 404 handlers.
- `src/routes/_authenticated/route.tsx`: Layout route enforcing client-side authentication check and redirecting unauthenticated users to /auth.
- `src/routes/_authenticated/chat.tsx`: Interactive chat interface for the Hej Guide AI assistant with message streaming and Supabase conversation history.
- `src/routes/_authenticated/planner.tsx`: AI trip planner interface that generates personalized Denmark itineraries via TanStack Start server functions.
- `src/routes/api/chat.ts`: Server route endpoint handling POST requests to stream AI chat completions from the server-side chat handler.
- `src/routes/auth.tsx`: User authentication page supporting sign-in, sign-up, and redirection handling using Supabase Auth.
- `src/routes/cities.$slug.tsx`: Dynamic city guide page loading detailed city information, sights, tips, and related navigation.
- `src/routes/cities.index.tsx`: Overview page displaying list of major Danish cities.
- `src/routes/currency.tsx`: Danish krone guide and interactive live/fallback currency converter page.
- `src/routes/history.tsx`: Visual timeline page detailing Danish history from the Viking Age to modern day.
- `src/routes/index.tsx`: Main landing page showcasing core guide sections, quick facts, and entry points to AI tools.
- `src/routes/people.tsx`: Cultural guide page covering Danish lifestyle, looks, etiquette, hygge, and basic vocabulary.
- `src/routes/visa.tsx`: Travel advisory and guide for Schengen visa requirements, 90/180 rules, and EES/ETIAS systems.

## Public interface
- Route: src/routes/__root.tsx (root router context)
- Route: src/routes/_authenticated/route.tsx (auth layout)
- Route: src/routes/_authenticated/chat.tsx (/chat)
- Route: src/routes/_authenticated/planner.tsx (/planner)
- Route: src/routes/api/chat.ts (/api/chat POST)
- Route: src/routes/auth.tsx (/auth)
- Route: src/routes/cities.$slug.tsx (/cities/$slug)
- Route: src/routes/cities.index.tsx (/cities)
- Route: src/routes/currency.tsx (/currency)
- Route: src/routes/history.tsx (/history)
- Route: src/routes/index.tsx (/)
- Route: src/routes/people.tsx (/people)
- Route: src/routes/visa.tsx (/visa)

## Dependencies
- @tanstack/react-router
- @tanstack/react-start
- @tanstack/react-query
- ai
- lucide-react
- sonner
- zod
- @/integrations/supabase/client
- @/lib/cities
- @/lib/currency
- @/lib/knowledge
- @/lib/lovable-error-reporting
- @/lib/planner.functions
- @/lib/chat.server
- @/components/ai-elements/conversation
- @/components/ai-elements/message
- @/components/ai-elements/prompt-input
- @/components/ai-elements/shimmer
- @/components/chat-cta
- @/components/page-hero
- @/components/site-footer
- @/components/site-header
- @/components/ui/button
- @/components/ui/input
- @/components/ui/select

## AI touchpoints [AI]
- `src/routes/_authenticated/chat.tsx`
- `src/routes/api/chat.ts`
- `src/routes/_authenticated/planner.tsx`

## Open questions
- _none_
