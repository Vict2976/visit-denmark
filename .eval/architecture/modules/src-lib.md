# Module: src/lib [AI]

Provides core shared utilities, domain data (cities, currency conversions, static Denmark knowledge), server-side error capturing, and the AI/RAG pipeline (OpenRouter integration, vector retrieval, chat streaming, and itinerary trip planning) for the Denmark travel assistant.

## Key files
- `src/lib/chat.server.ts`: Handles chat API requests by authenticating users, managing message history in Supabase, augmenting queries with RAG context, and streaming responses from OpenRouter.
- `src/lib/cities.ts`: Defines static data and metadata for major Danish cities and their key sights.
- `src/lib/currency.ts`: Provides currency conversion functions, fallback exchange rates pegged to DKK, and currency formatting helpers.
- `src/lib/error-capture.ts`: Captures out-of-band and unhandled server/runtime errors, serializing cause chains and status codes.
- `src/lib/error-page.ts`: Generates a standalone fallback HTML error page for unhandled server-side load failures.
- `src/lib/knowledge.ts`: Maintains curated Denmark knowledge chunks from site pages and provides keyword scoring, cosine similarity, and source link extraction.
- `src/lib/lovable-error-reporting.ts`: Reports client-side and React error boundary exceptions to Lovable telemetry.
- `src/lib/openrouter.server.ts`: Server-side client for OpenRouter handling streaming chat completions, JSON schema completions, and embeddings.
- `src/lib/planner.functions.ts`: TanStack Start server function that validates trip planning inputs, queries the RAG pipeline, prompts the LLM for structured JSON itineraries, and persists trips to Supabase.
- `src/lib/rag.server.ts`: Executes hybrid retrieval (cached embeddings + keyword relevance) against knowledge chunks and formats context for LLM prompts.
- `src/lib/utils.ts`: Utility function for merging Tailwind CSS classes using clsx and tailwind-merge.

## Public interface
- handleChatRequest(request: Request): Promise<Response>
- cities: City[]
- currencies: CurrencyInfo[]
- fallbackDkkPerUnit: Record<string, number>
- convert(amount: number, from: string, to: string, dkkPerUnit: Record<string, number>): number
- invertDkkBaseRates(perDkk: Record<string, number>): Record<string, number>
- formatMoney(value: number, code: string): string
- describeError(error: unknown): string
- consumeLastCapturedError(): unknown
- renderErrorPage(): string
- knowledge: KnowledgeChunk[]
- keywordScores(query: string, chunks?: KnowledgeChunk[]): number[]
- cosine(a: number[], b: number[]): number
- toSources(chunks: KnowledgeChunk[]): Source[]
- reportLovableError(error: unknown, context?: Record<string, unknown>): void
- streamChat(messages: ChatMessage[], signal?: AbortSignal): AsyncGenerator<string>
- completeJson(messages: ChatMessage[], name: string, schema: unknown): Promise<string>
- embed(texts: string[]): Promise<number[][]>
- OpenRouterError
- CHAT_MODEL
- EMBED_MODEL
- planRequestSchema
- createTripPlan
- retrieve(query: string, k?: number): Promise<KnowledgeChunk[]>
- formatContext(chunks: KnowledgeChunk[]): string
- cn(...inputs: ClassValue[]): string

## Dependencies
- @supabase/supabase-js
- zod
- @tanstack/react-start
- clsx
- tailwind-merge
- @/integrations/supabase/types
- @/integrations/supabase/auth-middleware
- @/assets/*

## AI touchpoints [AI]
- `src/lib/chat.server.ts`
- `src/lib/openrouter.server.ts`
- `src/lib/planner.functions.ts`
- `src/lib/rag.server.ts`

## Open questions
- _none_
