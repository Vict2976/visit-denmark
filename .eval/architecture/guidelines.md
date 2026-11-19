# Guidelines

Conventions backed by **≥2** real, verbatim code examples. Anything with fewer is omitted below.

## Tooling config files export a single default object built with the tool's `defineConfig` (or equivalent) helper rather than plain object literals.

- `drizzle.config.ts`:

  ```
  export default defineConfig({
  ```

- `eslint.config.js`:

  ```
  export default tseslint.config(
  ```

- `vite.config.ts`:

  ```
  export default defineConfig({
  ```

- `vitest.config.ts`:

  ```
  export default defineConfig({
  ```

## Application-level components (site chrome, heroes, CTAs) are exported as named `function` components with destructured, explicitly typed props.

- `src/components/chat-cta.tsx`:

  ```
  export function ChatCta({ question }: { question?: string }) {
  ```

- `src/components/page-hero.tsx`:

  ```
  export function PageHero({ eyebrow, title, intro, image, children }: PageHeroProps) {
  ```

- `src/components/site-footer.tsx`:

  ```
  export function SiteFooter() {
  ```

- `src/components/site-header.tsx`:

  ```
  export function SiteHeader() {
  ```

- `src/components/ui/button-group.tsx`:

  ```
  function ButtonGroup({
  ```

## Declare component prop shapes as a separate named `interface`/`type` (e.g. `XxxProps`) above the component instead of inlining them.

- `src/components/page-hero.tsx`:

  ```
  interface PageHeroProps {
  ```

- `src/components/ui/badge.tsx`:

  ```
  export interface BadgeProps
  ```

- `src/components/ai-elements/conversation.tsx`:

  ```
  export type ConversationProps = ComponentProps<typeof StickToBottom>;
  ```

- `src/components/ai-elements/message.tsx`:

  ```
  export type MessageProps = HTMLAttributes<HTMLDivElement> & {
  ```

- `src/server.ts`:

  ```
  type ServerEntry = {
  ```

## AI-element components type their props by extending `ComponentProps`/`HTMLAttributes`, destructure `className`, and spread remaining props onto the underlying element to stay composable.

- `src/components/ai-elements/conversation.tsx`:

  ```
  export type ConversationProps = ComponentProps<typeof StickToBottom>;
  ```

- `src/components/ai-elements/conversation.tsx`:

  ```
  export const Conversation = ({ className, ...props }: ConversationProps) => (
  ```

- `src/components/ai-elements/message.tsx`:

  ```
  export type MessageProps = HTMLAttributes<HTMLDivElement> & {
  ```

- `src/components/ai-elements/message.tsx`:

  ```
  export const Message = ({ className, from, ...props }: MessageProps) => (
  ```

## In `src/components/ui`, re-export Radix root/trigger primitives directly as `const` aliases when no styling is needed.

- `src/components/ui/accordion.tsx`:

  ```
  const Accordion = AccordionPrimitive.Root;
  ```

- `src/components/ui/alert-dialog.tsx`:

  ```
  const AlertDialog = AlertDialogPrimitive.Root;
  ```

- `src/components/ui/alert-dialog.tsx`:

  ```
  const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
  ```

- `src/components/ui/aspect-ratio.tsx`:

  ```
  const AspectRatio = AspectRatioPrimitive.Root;
  ```

## Styled UI primitives wrap Radix or DOM elements with `React.forwardRef` so refs reach the underlying element.

- `src/components/ui/accordion.tsx`:

  ```
  const AccordionItem = React.forwardRef<
  ```

- `src/components/ui/alert.tsx`:

  ```
  const Alert = React.forwardRef<
  ```

- `src/components/ui/avatar.tsx`:

  ```
  const Avatar = React.forwardRef<
  ```

- `src/components/ui/avatar.tsx`:

  ```
  const AvatarImage = React.forwardRef<
  ```

- `src/components/ui/breadcrumb.tsx`:

  ```
  const Breadcrumb = React.forwardRef<
  ```

- `src/components/ui/breadcrumb.tsx`:

  ```
  const BreadcrumbList = React.forwardRef<HTMLOListElement, React.ComponentPropsWithoutRef<"ol">>(
  ```

## Define visual variants with `class-variance-authority` (`cva`) in a module-level `xxxVariants` constant and merge classes via `cn`.

- `src/components/ui/alert.tsx`:

  ```
  const alertVariants = cva(
  ```

- `src/components/ui/badge.tsx`:

  ```
  const badgeVariants = cva(
  ```

- `src/components/ui/button-group.tsx`:

  ```
  const buttonGroupVariants = cva(
  ```

## Compose server-side cross-cutting concerns as TanStack Start middleware (`createMiddleware`, `createCsrfMiddleware`) registered in `src/start.ts`.

- `src/start.ts`:

  ```
  const errorMiddleware = createMiddleware().server(async ({ next }) => {
  ```

- `src/start.ts`:

  ```
  const csrfMiddleware = createCsrfMiddleware({
  ```

## Async helpers declare an explicit `Promise<T>` return type and use `async`/`await` with `fetch`/dynamic imports rather than `.then` chains.

- `src/server.ts`:

  ```
  async function getServerEntry(): Promise<ServerEntry> {
  ```

- `src/components/ai-elements/prompt-input.tsx`:

  ```
  const convertBlobUrlToDataUrl = async (url: string): Promise<string | null> => {
  ```

- `src/components/ai-elements/prompt-input.tsx`:

  ```
  const response = await fetch(url);
  ```

## Keep shared singletons and static data (QueryClient, caches, nav lists) as module-level constants rather than re-creating them inside render or request handlers.

- `src/router.tsx`:

  ```
  const queryClient = new QueryClient();
  ```

- `src/components/ai-elements/shimmer.tsx`:

  ```
  const motionComponentCache = new Map<
  ```

- `src/components/site-header.tsx`:

  ```
  const nav = [
  ```
