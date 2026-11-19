# Module: src/lib [AI]

Provides core utilities, static travel data, client-side helpers, and server-side AI integrations (OpenRouter streaming, schema-constrained planning, and RAG knowledge retrieval).

## Key files
- `src/lib/chat.server.ts`: Handles authenticated HTTP chat requests, manages chat history in Supabase, and streams RAG-augmented AI responses.
- `src/lib/planner.functions.ts`: TanStack Start server function that takes trip requirements, fetches RAG context, generates a structured JSON itinerary via OpenRouter, and persists it to Supabase.
- `src/lib/openrouter.server.ts`: Server-side OpenRouter API client for chat streaming, JSON completion with schema enforcement, and text embeddings.
- `src/lib/rag.server.ts`: RAG search engine combining vector embeddings and keyword scoring to retrieve matching knowledge chunks.
- `src/lib/knowledge.ts`: In-memory Denmark travel knowledge base, keyword scoring, cosine similarity, and source link extraction.
- `src/lib/cities.ts`: Static metadata and sight lists for Danish cities.
- `src/lib/currency.ts`: Currency definitions, conversion math, formatting, and DKK conversion utilities.
- `src/lib/error-capture.ts`: Global error interception and formatting to preserve full cause chains and stacks.
- `src/lib/error-page.ts`: Static HTML renderer for fallback error pages.
- `src/lib/lovable-error-reporting.ts`: Client-side error boundary reporting for Lovable runtime and telemetry.
- `src/lib/utils.ts`: Class name merging utility using clsx and tailwind-merge.

## Public interface
- handleChatRequest(request: Request): Promise<Response>
- createTripPlan: TanStack Start server function
- streamChat(messages: ChatMessage[], signal?: AbortSignal): AsyncGenerator<string>
- completeJson(messages: ChatMessage[], name: string, schema: unknown): Promise<string>
- embed(texts: string[]): Promise<number[][]>
- retrieve(query: string, k?: number): Promise<KnowledgeChunk[]>
- formatContext(chunks: KnowledgeChunk[]): string
- convert(amount: number, from: string, to: string, dkkPerUnit: Record<string, number>): number
- invertDkkBaseRates(perDkk: Record<string, number>): Record<string, number>
- formatMoney(value: number, code: string): string
- keywordScores(query: string, chunks?: KnowledgeChunk[]): number[]
- cosine(a: number[], b: number[]): number
- toSources(chunks: KnowledgeChunk[]): Source[]
- describeError(error: unknown): string
- consumeLastCapturedError(): unknown
- renderErrorPage(): string
- reportLovableError(error: unknown, context?: Record<string, unknown>): void
- cn(...inputs: ClassValue[]): string

## Dependencies
- @supabase/supabase-js
- @tanstack/react-start
- zod
- clsx
- tailwind-merge
- @/integrations/supabase/types
- @/integrations/supabase/auth-middleware
- @/assets/city-copenhagen.jpg
- @/assets/city-aarhus.jpg
- @/assets/city-odense.jpg
- @/assets/city-aalborg.jpg
- @/assets/city-roskilde.jpg
- @/assets/city-helsingor.jpg

## AI touchpoints [AI]
- `src/lib/chat.server.ts`
- `src/lib/openrouter.server.ts`
- `src/lib/rag.server.ts`
- `src/lib/planner.functions.ts`

## Open questions
- _none_
