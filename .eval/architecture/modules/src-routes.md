# Module: src/routes [AI]

Defines the application route hierarchy, page components, authentication guards, and API endpoints for Hej Copenhagen using TanStack Router/Start.

## Key files
- `src/routes/__root.tsx`: Root application shell and layout containing QueryClientProvider, global head tags, site header, and footer.
- `src/routes/_authenticated/route.tsx`: Authentication layout route guarding nested pages and redirecting unauthenticated users to /auth.
- `src/routes/_authenticated/chat.tsx`: Chatbot user interface for the AI travel guide, handling message history via Supabase and streaming assistant responses.
- `src/routes/_authenticated/planner.tsx`: AI trip planner interface that generates and manages custom day-by-day itineraries across Danish cities.
- `src/routes/api/chat.ts`: TanStack Start server route handler dispatching POST requests to the backend chat stream generator.
- `src/routes/auth.tsx`: Authentication page for user login and signup using Supabase Auth.
- `src/routes/index.tsx`: Landing page displaying quick travel facts, highlights, and entry points into guide sections and the AI chat.
- `src/routes/cities.$slug.tsx`: Dynamic route rendering specific city guides, attractions, and local travel tips.
- `src/routes/cities.index.tsx`: Directory listing all featured Danish cities with travel overviews.
- `src/routes/currency.tsx`: Danish krone conversion calculator with live/fallback exchange rates and pricing guides.
- `src/routes/history.tsx`: Timeline page detailing Danish history from the Viking Age to modern times.
- `src/routes/people.tsx`: Traveler guide to Danish culture, etiquette, everyday style, and common phrases.
- `src/routes/visa.tsx`: Informational guide on Schengen visa regulations, EES, and ETIAS requirements.

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
- @tanstack/react-start
- @tanstack/react-query
- lucide-react
- sonner
- zod
- ai
- @/integrations/supabase/client
- @/lib/chat.server
- @/lib/planner.functions
- @/lib/cities
- @/lib/currency
- @/lib/knowledge
- @/lib/lovable-error-reporting

## AI touchpoints [AI]
- `src/routes/_authenticated/chat.tsx`
- `src/routes/_authenticated/planner.tsx`
- `src/routes/api/chat.ts`

## Open questions
- Are there rate limits or quota boundaries applied at the route layer for authenticated AI chat and itinerary requests beyond Supabase auth verification?
