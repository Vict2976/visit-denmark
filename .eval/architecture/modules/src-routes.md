# Module: src/routes [AI]

Application routing and page definitions for the Hej Copenhagen travel guide, covering public informational pages, authenticated chat and itinerary planning, authentication, and the server-side API chat route.

## Key files
- `src/routes/__root.tsx`: Root route component defining the overall HTML shell, TanStack Query provider, site header/footer, error/404 boundaries, and global meta tags.
- `src/routes/_authenticated/route.tsx`: Route layout boundary enforcing client-side Supabase authentication checks before loading protected child routes.
- `src/routes/_authenticated/chat.tsx`: Authenticated chat interface with conversational UI, message streaming from /api/chat, source attribution, and message history loading via Supabase.
- `src/routes/_authenticated/planner.tsx`: Authenticated trip planner page configuring travel preferences and triggering the createTripPlan server function.
- `src/routes/api/chat.ts`: Server route endpoint handling POST requests to stream AI chat completions via handleChatRequest.
- `src/routes/auth.tsx`: Authentication page handling user sign-in and sign-up with Supabase.
- `src/routes/index.tsx`: Homepage showcasing key Danish travel information highlights and navigation to sub-guides and the AI guide.
- `src/routes/cities.$slug.tsx`: Dynamic route displaying detailed guide information and sights for a specific Danish city.
- `src/routes/cities.index.tsx`: Overview page displaying list of major Danish cities.
- `src/routes/currency.tsx`: Currency guide and live/fallback exchange rate calculator for Danish krone (DKK).
- `src/routes/history.tsx`: Interactive visual timeline of Danish history.
- `src/routes/people.tsx`: Guide on Danish culture, etiquette, fashion, and common vocabulary.
- `src/routes/visa.tsx`: Guide outlining Schengen visa regulations, EES, and ETIAS requirements for Denmark visitors.

## Public interface
- Route export in src/routes/__root.tsx
- Route export in src/routes/_authenticated/route.tsx
- Route export in src/routes/_authenticated/chat.tsx
- Route export in src/routes/_authenticated/planner.tsx
- Route export in src/routes/api/chat.ts
- Route export in src/routes/auth.tsx
- Route export in src/routes/index.tsx
- Route export in src/routes/cities.$slug.tsx
- Route export in src/routes/cities.index.tsx
- Route export in src/routes/currency.tsx
- Route export in src/routes/history.tsx
- Route export in src/routes/people.tsx
- Route export in src/routes/visa.tsx

## Dependencies
- @tanstack/react-router
- @tanstack/react-query
- @tanstack/react-start
- lucide-react
- zod
- sonner
- ai
- @/integrations/supabase/client
- @/lib/chat.server
- @/lib/planner.functions
- @/lib/knowledge
- @/lib/cities
- @/lib/currency
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
- `src/routes/api/chat.ts`
- `src/routes/_authenticated/planner.tsx`
- `src/routes/__root.tsx`

## Open questions
- _none_
