# Guidelines

Conventions backed by **≥2** real, verbatim code examples. Anything with fewer is omitted below.

## Tooling config files are ESM modules that default-export a typed config object built with the tool's own `defineConfig`/`config` helper (drizzle-kit, Vite, Vitest, typescript-eslint).

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

## Application-level components (layout, hero, CTAs) are written as named `export function` declarations with destructured, explicitly typed props rather than arrow functions or default exports.

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

## Declare component prop shapes as a dedicated `interface`/`type` immediately above the component, deriving from `ComponentProps`, `HTMLAttributes`, or the wrapped primitive's props rather than redefining DOM attributes.

- `src/components/ai-elements/conversation.tsx`:

  ```
  export type ConversationProps = ComponentProps<typeof StickToBottom>;
  ```

- `src/components/ai-elements/message.tsx`:

  ```
  export type MessageProps = HTMLAttributes<HTMLDivElement> & {
  ```

- `src/components/page-hero.tsx`:

  ```
  interface PageHeroProps {
  ```

- `src/components/ui/badge.tsx`:

  ```
  export interface BadgeProps
  ```

- `src/components/ai-elements/shimmer.tsx`:

  ```
  type MotionHTMLProps = MotionProps & Record<string, unknown>;
  ```

## AI-element components are arrow functions that pull out `className` (and a few semantic props), merge it with `cn`, and spread the remaining `...props` onto the underlying element so callers can override styles and attributes.

- `src/components/ai-elements/conversation.tsx`:

  ```
  export const Conversation = ({ className, ...props }: ConversationProps) => (
  ```

- `src/components/ai-elements/message.tsx`:

  ```
  export const Message = ({ className, from, ...props }: MessageProps) => (
  ```

## In `src/components/ui`, follow the shadcn pattern: alias Radix root/trigger primitives directly with a `const X = XPrimitive.Root` and wrap styled subparts in `React.forwardRef` with `ElementRef`/`ComponentPropsWithoutRef` generics.

- `src/components/ui/accordion.tsx`:

  ```
  const Accordion = AccordionPrimitive.Root;
  ```

- `src/components/ui/accordion.tsx`:

  ```
  const AccordionItem = React.forwardRef<
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

## Define style variants with class-variance-authority as a module-level `<name>Variants = cva(...)` constant, then consume it in the component and export the variants alongside the component.

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

## UI primitive files export their components via a single grouped `export { ... }` statement at the bottom rather than inline exports.

- `src/components/ui/aspect-ratio.tsx`:

  ```
  export { AspectRatio };
  ```

- `src/components/ui/accordion.tsx`:

  ```
  const Accordion = AccordionPrimitive.Root;
  ```

- `src/components/ui/aspect-ratio.tsx`:

  ```
  const AspectRatio = AspectRatioPrimitive.Root;
  ```

## Compose server-side cross-cutting concerns (error handling, CSRF, auth) as TanStack Start middleware created via `createMiddleware()`/`createCsrfMiddleware()` in `src/start.ts`, not inside individual routes.

- `src/start.ts`:

  ```
  const errorMiddleware = createMiddleware().server(async ({ next }) => {
  ```

- `src/start.ts`:

  ```
  const csrfMiddleware = createCsrfMiddleware({
  ```

## Keep singletons and caches at module scope (QueryClient, motion component cache, static nav arrays) and expose a factory like `getRouter` for per-request construction instead of exporting pre-built mutable instances.

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

- `src/router.tsx`:

  ```
  export const getRouter = () => {
  ```

## Write async helpers as explicitly typed functions returning `Promise<T>` (including nullable results), with local `type` declarations for shapes they return, to keep server entry and attachment utilities self-documenting.

- `src/server.ts`:

  ```
  type ServerEntry = {
  ```

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
