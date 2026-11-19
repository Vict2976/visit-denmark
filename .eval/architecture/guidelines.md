# Guidelines

Conventions backed by **≥2** real, verbatim code examples. Anything with fewer is omitted below.

## Tool configuration files export a single default object produced by the tool's `defineConfig` helper rather than a bare object literal.

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

## When wrapping a Radix primitive that needs no extra styling, alias the primitive directly to a const (e.g. Root/Trigger) instead of creating a wrapper component.

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

## Styled UI primitives in `src/components/ui` are declared with `React.forwardRef`, typed via `React.ElementRef` / `React.ComponentPropsWithoutRef`, so refs reach the underlying element.

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

## Define visual variants with `class-variance-authority` (`cva`) in a module-level `*Variants` const and merge with `cn`, rather than branching on props inside JSX.

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

## Application-level (non-primitive) components are named-export `function` declarations with an explicit props interface or inline typed destructuring.

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

## AI element components export their props type (derived from `ComponentProps`/`HTMLAttributes`) alongside an arrow-function component that destructures `className` and spreads the remaining props onto the underlying element.

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

## Cross-cutting server concerns (error handling, CSRF) are implemented as TanStack Start middleware consts in `src/start.ts` and composed into the Start instance rather than inlined in routes.

- `src/start.ts`:

  ```
  const errorMiddleware = createMiddleware().server(async ({ next }) => {
  ```

- `src/start.ts`:

  ```
  const csrfMiddleware = createCsrfMiddleware({
  ```

## Shared, long-lived instances and static data (QueryClient, caches, nav lists) are created once at module scope, not inside render or request handlers.

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

## Async helper functions declare an explicit `Promise<...>` return type and are kept as small private consts/functions near their call site.

- `src/server.ts`:

  ```
  async function getServerEntry(): Promise<ServerEntry> {
  ```

- `src/components/ai-elements/prompt-input.tsx`:

  ```
  const convertBlobUrlToDataUrl = async (url: string): Promise<string | null> => {
  ```

## Local shape definitions use `type` aliases declared at the top of the module for internal structures.

- `src/server.ts`:

  ```
  type ServerEntry = {
  ```

- `src/components/ai-elements/shimmer.tsx`:

  ```
  type MotionHTMLProps = MotionProps & Record<string, unknown>;
  ```
