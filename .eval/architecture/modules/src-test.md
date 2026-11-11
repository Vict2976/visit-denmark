# Module: src/test

Provides automated tests and test environment setup for application routing, currency conversion utilities, and knowledge base search/ranking logic used to assist users with questions about Denmark.

## Key files
- `src/test/setup.ts`: Configures Vitest test environment polyfills (window.scrollTo, window.matchMedia) and jest-dom extensions.
- `src/test/app-routing.test.tsx`: Tests TanStack Router route matching for the root route without executing loaders or rendering full DOM trees.
- `src/test/currency.test.ts`: Tests DKK peg calculations, foreign currency conversions, rate inversion, and fallback handling.
- `src/test/knowledge.test.ts`: Tests keyword-based search ranking across knowledge topics (such as visa requirements and Aarhus information) and source deduplication.

## Public interface
- _none_

## Dependencies
- @tanstack/react-query
- @tanstack/react-router
- @testing-library/jest-dom/vitest
- @/lib/currency
- @/lib/knowledge
- @/routeTree.gen
- vitest

## Open questions
- _none_
