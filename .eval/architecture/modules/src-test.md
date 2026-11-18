# Module: src/test

Provides test suites and test environment setup for the application using Vitest, covering route matching, currency calculations, and site knowledge search scoring.

## Key files
- `src/test/setup.ts`: Global test environment configuration that polyfills browser window APIs like scrollTo and matchMedia for Vitest and Testing Library.
- `src/test/app-routing.test.tsx`: Unit test verifying that router route-matching resolves pages correctly for base routes without triggering full loaders.
- `src/test/currency.test.ts`: Unit tests for currency conversion logic, fallback rate calculation, and rate inversion utilities.
- `src/test/knowledge.test.ts`: Unit tests for site knowledge keyword scoring, content ranking, and source deduplication.

## Public interface
- _none_

## Dependencies
- @/lib/currency
- @/lib/knowledge
- @/routeTree.gen
- @tanstack/react-query
- @tanstack/react-router
- @testing-library/jest-dom/vitest
- vitest

## Open questions
- _none_
