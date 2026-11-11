# Unique selling propositions

_Each USP is sourced to a business document (verbatim) and mapped to the components that deliver it._

## Chatbot answering all questions about Denmark

The product is a chatbot that can help users with all their questions about Denmark.

- **Sources:**
  - `About_the_organisation.md`: "A chatbot that can help with all the users questions about denmark"
- **Delivered by:**
  - `src/routes/_authenticated/chat::ChatPage`, matched on named by the model while reading the business documents
  - `src/lib/chat.server::systemPrompt.prompt`, matched on named by the model while reading the business documents

## Coverage

- **Statements linked to code:** 1 of 1 · usp: 1/1
- **Artifacts reached from the business:** 2 of 445 linkable artifacts in the scan
- **How the links were made:** candidates from names, paths, routes and endpoints in your own code, confirmed by the model.

### Reach by area

- Ui: 0 of 255
- Ai elements: 0 of 70
- Other: 1 of 63
- Integrations: 0 of 19
- Routes: 1 of 8
- Root: 0 of 5
- Hooks: 0 of 4
- Test: 0 of 4
- Auth: 0 of 3
- Currency: 0 of 3
- Cities.$slug: 0 of 2
- Cities.index: 0 of 2
- History: 0 of 2
- People: 0 of 2
- Visa: 0 of 2
- Drizzle: 0 of 1

## Gaps

- ⚠️ No business rules survived sourcing. Provide explicit rules/constraints.
