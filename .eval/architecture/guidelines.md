# Guidelines

Conventions backed by **≥2** real, verbatim code examples. Anything with fewer is omitted below.

## Tooling config files export a single default object via the tool's defineConfig helper rather than ad-hoc exports.

- `drizzle.config.ts`:

  ```
  export default defineConfig({
  ```

- `vite.config.ts`:

  ```
  export default defineConfig({
  ```

- `vitest.config.ts`:

  ```
  export default defineConfig({
  ```

- `eslint.config.js`:

  ```
  export default tseslint.config(
  ```

## UI primitives that wrap Radix without extra styling re-export the Radix part as a plain const alias (e.g. Root/Trigger) instead of wrapping in a new component.

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

## Styled UI primitives are built with React.forwardRef, typed against the underlying element or Radix primitive props, so refs are forwarded to the DOM.

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

## Visual variants for UI primitives are defined with class-variance-authority (cva) in a `<name>Variants` const colocated with the component.

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

## AI element components export an explicit Props type derived from the underlying component/HTML attributes and destructure `className` plus rest props to allow consumer overrides.

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

## Application-level (non-primitive) components are declared as named `function` exports with an explicit props interface or inline typed destructuring.

- `src/components/chat-cta.tsx`:

  ```
  export function ChatCta({ question }: { question?: string }) {
  ```

- `src/components/page-hero.tsx`:

  ```
  interface PageHeroProps {
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

## Server-side cross-cutting concerns (error handling, CSRF) are implemented as TanStack Start middleware consts in src/start.ts and composed into the start instance.

- `src/start.ts`:

  ```
  const errorMiddleware = createMiddleware().server(async ({ next }) => {
  ```

- `src/start.ts`:

  ```
  const csrfMiddleware = createCsrfMiddleware({
  ```

## Internal helper shapes are given explicit local `type` aliases rather than inline anonymous types, especially for server entry and motion wrappers.

- `src/server.ts`:

  ```
  type ServerEntry = {
  ```

- `src/components/ai-elements/shimmer.tsx`:

  ```
  type MotionHTMLProps = MotionProps & Record<string, unknown>;
  ```

- `src/components/ai-elements/conversation.tsx`:

  ```
  export type ConversationProps = ComponentProps<typeof StickToBottom>;
  ```

## Module-level singletons (QueryClient, caches, nav config) are created once as top-level consts rather than inside components or per request.

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
