# Identifiers in this code

Every row is a `@uxid` comment in this repository: above a declaration (`// @uxid <id>`, `# @uxid <id>` in
Python), or for an element inside its opening tag (`<button /* @uxid <id> */ ...>`). Search the code for an
id to find its place, wherever the file has moved. Ids are permanent: never edit or remove one, and copy
none: a new component gets its own on Eva's next scan.

## Components (273)

| identifier | file | description |
| --- | --- | --- |
| `src/components/ai-elements/conversation::Conversation` | src/components/ai-elements/conversation.tsx | Arrow function component. Props: className, ...props. Renders: StickToBottom. |
| `src/components/ai-elements/conversation::ConversationContent` | src/components/ai-elements/conversation.tsx | Arrow function component. Props: className, ...props. Renders: StickToBottom.Content. |
| `src/components/ai-elements/conversation::ConversationDownload` | src/components/ai-elements/conversation.tsx | Arrow function component. Props: messages, filename, formatMessage, className, children, ...props. Hooks: useCallback. Renders: Button, DownloadIcon. |
| `src/components/ai-elements/conversation::ConversationEmptyState` | src/components/ai-elements/conversation.tsx | Arrow function component. Props: className, title, description, icon, children, ...props. Renders: div, h3, p. |
| `src/components/ai-elements/conversation::ConversationScrollButton` | src/components/ai-elements/conversation.tsx | Arrow function component. Props: className, ...props. Hooks: useStickToBottomContext, useCallback. Renders: Button, ArrowDownIcon. |
| `src/components/ai-elements/message::Message` | src/components/ai-elements/message.tsx | Arrow function component. Props: className, from, ...props. Renders: div. |
| `src/components/ai-elements/message::MessageAction` | src/components/ai-elements/message.tsx | Arrow function component. Props: tooltip, children, label, variant, size, ...props. Renders: span, p, Button, TooltipProvider, Tooltip, TooltipTrigger, TooltipContent. |
| `src/components/ai-elements/message::MessageActions` | src/components/ai-elements/message.tsx | Arrow function component. Props: className, children, ...props. Renders: div. |
| `src/components/ai-elements/message::MessageBranch` | src/components/ai-elements/message.tsx | Arrow function component. Props: defaultBranch, onBranchChange, className, ...props. Hooks: useState, useCallback, useMemo. Renders: div, MessageBranchContext.Provider. |
| `src/components/ai-elements/message::MessageBranchContent` | src/components/ai-elements/message.tsx | Arrow function component. Props: children, ...props. Hooks: useMessageBranch, useMemo, useEffect. Renders: div. |
| `src/components/ai-elements/message::MessageBranchNext` | src/components/ai-elements/message.tsx | Arrow function component. Props: children, ...props. Hooks: useMessageBranch. Renders: Button, ChevronRightIcon. |
| `src/components/ai-elements/message::MessageBranchPage` | src/components/ai-elements/message.tsx | Arrow function component. Props: className, ...props. Hooks: useMessageBranch. Renders: ButtonGroupText. |
| `src/components/ai-elements/message::MessageBranchPrevious` | src/components/ai-elements/message.tsx | Arrow function component. Props: children, ...props. Hooks: useMessageBranch. Renders: Button, ChevronLeftIcon. |
| `src/components/ai-elements/message::MessageBranchSelector` | src/components/ai-elements/message.tsx | Arrow function component. Props: className, ...props. Hooks: useMessageBranch. Renders: ButtonGroup. |
| `src/components/ai-elements/message::MessageContent` | src/components/ai-elements/message.tsx | Arrow function component. Props: children, className, ...props. Renders: div. |
| `src/components/ai-elements/message::MessageResponse` | src/components/ai-elements/message.tsx | Wrapped component. Props: className, ...props. Renders: Streamdown. |
| `src/components/ai-elements/message::MessageToolbar` | src/components/ai-elements/message.tsx | Arrow function component. Props: className, children, ...props. Renders: div. |
| `src/components/ai-elements/prompt-input::PromptInput` | src/components/ai-elements/prompt-input.tsx | Arrow function component. Props: className, accept, multiple, globalDrop, syncHiddenInput, maxFiles, +5 more. Hooks: useOptionalPromptInputController, useRef, useState, useEffect, useCallback, useMemo. Renders: input, form, InputGroup, LocalReferencedSourcesContext.Provider, LocalAttachmentsContext.Provider. |
| `src/components/ai-elements/prompt-input::PromptInputActionAddAttachments` | src/components/ai-elements/prompt-input.tsx | Arrow function component. Props: label, ...props. Hooks: usePromptInputAttachments, useCallback. Renders: DropdownMenuItem, ImageIcon. |
| `src/components/ai-elements/prompt-input::PromptInputActionAddScreenshot` | src/components/ai-elements/prompt-input.tsx | Arrow function component. Props: label, onSelect, ...props. Hooks: usePromptInputAttachments, useCallback. Renders: DropdownMenuItem, Monitor. |
| `src/components/ai-elements/prompt-input::PromptInputActionMenu` | src/components/ai-elements/prompt-input.tsx | Arrow function component. Props: props: PromptInputActionMenuProps. Renders: DropdownMenu. |
| `src/components/ai-elements/prompt-input::PromptInputActionMenuContent` | src/components/ai-elements/prompt-input.tsx | Arrow function component. Props: className, ...props. Renders: DropdownMenuContent. |
| `src/components/ai-elements/prompt-input::PromptInputActionMenuItem` | src/components/ai-elements/prompt-input.tsx | Arrow function component. Props: className, ...props. Renders: DropdownMenuItem. |
| `src/components/ai-elements/prompt-input::PromptInputActionMenuTrigger` | src/components/ai-elements/prompt-input.tsx | Arrow function component. Props: className, children, ...props. Renders: DropdownMenuTrigger, PromptInputButton, PlusIcon. |
| `src/components/ai-elements/prompt-input::PromptInputBody` | src/components/ai-elements/prompt-input.tsx | Arrow function component. Props: className, ...props. Renders: div. |
| `src/components/ai-elements/prompt-input::PromptInputButton` | src/components/ai-elements/prompt-input.tsx | Arrow function component. Props: variant, className, size, tooltip, ...props. Renders: span, InputGroupButton, Tooltip, TooltipTrigger, TooltipContent. |
| `src/components/ai-elements/prompt-input::PromptInputCommand` | src/components/ai-elements/prompt-input.tsx | Arrow function component. Props: className, ...props. Renders: Command. |
| `src/components/ai-elements/prompt-input::PromptInputCommandEmpty` | src/components/ai-elements/prompt-input.tsx | Arrow function component. Props: className, ...props. Renders: CommandEmpty. |
| `src/components/ai-elements/prompt-input::PromptInputCommandGroup` | src/components/ai-elements/prompt-input.tsx | Arrow function component. Props: className, ...props. Renders: CommandGroup. |
| `src/components/ai-elements/prompt-input::PromptInputCommandInput` | src/components/ai-elements/prompt-input.tsx | Arrow function component. Props: className, ...props. Renders: CommandInput. |
| `src/components/ai-elements/prompt-input::PromptInputCommandItem` | src/components/ai-elements/prompt-input.tsx | Arrow function component. Props: className, ...props. Renders: CommandItem. |
| `src/components/ai-elements/prompt-input::PromptInputCommandList` | src/components/ai-elements/prompt-input.tsx | Arrow function component. Props: className, ...props. Renders: CommandList. |
| `src/components/ai-elements/prompt-input::PromptInputCommandSeparator` | src/components/ai-elements/prompt-input.tsx | Arrow function component. Props: className, ...props. Renders: CommandSeparator. |
| `src/components/ai-elements/prompt-input::PromptInputFooter` | src/components/ai-elements/prompt-input.tsx | Arrow function component. Props: className, ...props. Renders: InputGroupAddon. |
| `src/components/ai-elements/prompt-input::PromptInputHeader` | src/components/ai-elements/prompt-input.tsx | Arrow function component. Props: className, ...props. Renders: InputGroupAddon. |
| `src/components/ai-elements/prompt-input::PromptInputHoverCard` | src/components/ai-elements/prompt-input.tsx | Arrow function component. Props: openDelay, closeDelay, ...props. Renders: HoverCard. |
| `src/components/ai-elements/prompt-input::PromptInputHoverCardContent` | src/components/ai-elements/prompt-input.tsx | Arrow function component. Props: align, ...props. Renders: HoverCardContent. |
| `src/components/ai-elements/prompt-input::PromptInputHoverCardTrigger` | src/components/ai-elements/prompt-input.tsx | Arrow function component. Props: props: PromptInputHoverCardTriggerProps. Renders: HoverCardTrigger. |
| `src/components/ai-elements/prompt-input::PromptInputProvider` | src/components/ai-elements/prompt-input.tsx | Arrow function component. Props: initialInput, children. Hooks: useState, useCallback, useRef, useEffect, useMemo. Renders: PromptInputController.Provider, ProviderAttachmentsContext.Provider. |
| `src/components/ai-elements/prompt-input::PromptInputSelect` | src/components/ai-elements/prompt-input.tsx | Arrow function component. Props: props: PromptInputSelectProps. Renders: Select. |
| `src/components/ai-elements/prompt-input::PromptInputSelectContent` | src/components/ai-elements/prompt-input.tsx | Arrow function component. Props: className, ...props. Renders: SelectContent. |
| `src/components/ai-elements/prompt-input::PromptInputSelectItem` | src/components/ai-elements/prompt-input.tsx | Arrow function component. Props: className, ...props. Renders: SelectItem. |
| `src/components/ai-elements/prompt-input::PromptInputSelectTrigger` | src/components/ai-elements/prompt-input.tsx | Arrow function component. Props: className, ...props. Renders: SelectTrigger. |
| `src/components/ai-elements/prompt-input::PromptInputSelectValue` | src/components/ai-elements/prompt-input.tsx | Arrow function component. Props: className, ...props. Renders: SelectValue. |
| `src/components/ai-elements/prompt-input::PromptInputSubmit` | src/components/ai-elements/prompt-input.tsx | Arrow function component. Props: className, variant, size, status, onStop, onClick, +2 more. Hooks: useCallback. Renders: CornerDownLeftIcon, Spinner, SquareIcon, XIcon, InputGroupButton. |
| `src/components/ai-elements/prompt-input::PromptInputTab` | src/components/ai-elements/prompt-input.tsx | Arrow function component. Props: className, ...props. Renders: div. |
| `src/components/ai-elements/prompt-input::PromptInputTabBody` | src/components/ai-elements/prompt-input.tsx | Arrow function component. Props: className, ...props. Renders: div. |
| `src/components/ai-elements/prompt-input::PromptInputTabItem` | src/components/ai-elements/prompt-input.tsx | Arrow function component. Props: className, ...props. Renders: div. |
| `src/components/ai-elements/prompt-input::PromptInputTabLabel` | src/components/ai-elements/prompt-input.tsx | Arrow function component. Props: className, ...props. Renders: h3. |
| `src/components/ai-elements/prompt-input::PromptInputTabsList` | src/components/ai-elements/prompt-input.tsx | Arrow function component. Props: className, ...props. Renders: div. |
| `src/components/ai-elements/prompt-input::PromptInputTextarea` | src/components/ai-elements/prompt-input.tsx | Arrow function component. Props: onChange, onKeyDown, className, placeholder, ...props. Hooks: useOptionalPromptInputController, usePromptInputAttachments, useState, useCallback. Renders: InputGroupTextarea. |
| `src/components/ai-elements/prompt-input::PromptInputTools` | src/components/ai-elements/prompt-input.tsx | Arrow function component. Props: className, ...props. Renders: div. |
| `src/components/ai-elements/shimmer::ShimmerComponent` | src/components/ai-elements/shimmer.tsx | Arrow function component. Props: children, as, className, duration, spread. Hooks: useMemo. Renders: MotionComponent. |
| `src/components/chat-cta::ChatCta` | src/components/chat-cta.tsx | Function component. Props: question. Renders: section, div, h2, p, Button, Link, ArrowRight. |
| `src/components/page-hero::PageHero` | src/components/page-hero.tsx | Function component. Props: eyebrow, title, intro, image, children. Renders: section, img, div, p, h1. |
| `src/components/site-footer::SiteFooter` | src/components/site-footer.tsx | Function component. Renders: footer, div, p, Link. |
| `src/components/site-header::SiteHeader` | src/components/site-header.tsx | Function component. Hooks: useState, useSession, useQueryClient, useNavigate. Renders: header, div, img, span, nav, button, Link, Button, +4 more. |
| `src/components/ui/accordion::AccordionContent` | src/components/ui/accordion.tsx | Wrapped component. Props: className, children, ...props. Renders: div, AccordionPrimitive.Content. |
| `src/components/ui/accordion::AccordionItem` | src/components/ui/accordion.tsx | Wrapped component. Props: className, ...props. Renders: AccordionPrimitive.Item. |
| `src/components/ui/accordion::AccordionTrigger` | src/components/ui/accordion.tsx | Wrapped component. Props: className, children, ...props. Renders: AccordionPrimitive.Header, AccordionPrimitive.Trigger, ChevronDown. |
| `src/components/ui/alert-dialog::AlertDialogAction` | src/components/ui/alert-dialog.tsx | Wrapped component. Props: className, ...props. Renders: AlertDialogPrimitive.Action. |
| `src/components/ui/alert-dialog::AlertDialogCancel` | src/components/ui/alert-dialog.tsx | Wrapped component. Props: className, ...props. Renders: AlertDialogPrimitive.Cancel. |
| `src/components/ui/alert-dialog::AlertDialogContent` | src/components/ui/alert-dialog.tsx | Wrapped component. Props: className, ...props. Renders: AlertDialogPortal, AlertDialogOverlay, AlertDialogPrimitive.Content. |
| `src/components/ui/alert-dialog::AlertDialogDescription` | src/components/ui/alert-dialog.tsx | Wrapped component. Props: className, ...props. Renders: AlertDialogPrimitive.Description. |
| `src/components/ui/alert-dialog::AlertDialogFooter` | src/components/ui/alert-dialog.tsx | Arrow function component. Props: className, ...props. Renders: div. |
| `src/components/ui/alert-dialog::AlertDialogHeader` | src/components/ui/alert-dialog.tsx | Arrow function component. Props: className, ...props. Renders: div. |
| `src/components/ui/alert-dialog::AlertDialogOverlay` | src/components/ui/alert-dialog.tsx | Wrapped component. Props: className, ...props. Renders: AlertDialogPrimitive.Overlay. |
| `src/components/ui/alert-dialog::AlertDialogTitle` | src/components/ui/alert-dialog.tsx | Wrapped component. Props: className, ...props. Renders: AlertDialogPrimitive.Title. |
| `src/components/ui/alert::Alert` | src/components/ui/alert.tsx | Wrapped component. Props: className, variant, ...props. Renders: div. |
| `src/components/ui/alert::AlertDescription` | src/components/ui/alert.tsx | Wrapped component. Props: className, ...props. Renders: div. |
| `src/components/ui/alert::AlertTitle` | src/components/ui/alert.tsx | Wrapped component. Props: className, ...props. Renders: h5. |
| `src/components/ui/avatar::Avatar` | src/components/ui/avatar.tsx | Wrapped component. Props: className, ...props. Renders: AvatarPrimitive.Root. |
| `src/components/ui/avatar::AvatarFallback` | src/components/ui/avatar.tsx | Wrapped component. Props: className, ...props. Renders: AvatarPrimitive.Fallback. |
| `src/components/ui/avatar::AvatarImage` | src/components/ui/avatar.tsx | Wrapped component. Props: className, ...props. Renders: AvatarPrimitive.Image. |
| `src/components/ui/badge::Badge` | src/components/ui/badge.tsx | Function component. Props: className, variant, ...props. Renders: div. |
| `src/components/ui/breadcrumb::Breadcrumb` | src/components/ui/breadcrumb.tsx | Wrapped component. Props: ...props. Renders: nav. |
| `src/components/ui/breadcrumb::BreadcrumbEllipsis` | src/components/ui/breadcrumb.tsx | Arrow function component. Props: className, ...props. Renders: span, MoreHorizontal. |
| `src/components/ui/breadcrumb::BreadcrumbItem` | src/components/ui/breadcrumb.tsx | Wrapped component. Props: className, ...props. Renders: li. |
| `src/components/ui/breadcrumb::BreadcrumbLink` | src/components/ui/breadcrumb.tsx | Wrapped component. Props: asChild, className, ...props. Renders: Comp. |
| `src/components/ui/breadcrumb::BreadcrumbList` | src/components/ui/breadcrumb.tsx | Wrapped component. Props: className, ...props. Renders: ol. |
| `src/components/ui/breadcrumb::BreadcrumbPage` | src/components/ui/breadcrumb.tsx | Wrapped component. Props: className, ...props. Renders: span. |
| `src/components/ui/breadcrumb::BreadcrumbSeparator` | src/components/ui/breadcrumb.tsx | Arrow function component. Props: children, className, ...props. Renders: li, ChevronRight. |
| `src/components/ui/button-group::ButtonGroup` | src/components/ui/button-group.tsx | Function component. Props: className, orientation, ...props. Renders: div. |
| `src/components/ui/button-group::ButtonGroupSeparator` | src/components/ui/button-group.tsx | Function component. Props: className, orientation, ...props. Renders: Separator. |
| `src/components/ui/button-group::ButtonGroupText` | src/components/ui/button-group.tsx | Function component. Props: className, asChild, ...props. Renders: Comp. |
| `src/components/ui/button::Button` | src/components/ui/button.tsx | Wrapped component. Props: className, variant, size, asChild, ...props. Renders: Comp. |
| `src/components/ui/calendar::Calendar` | src/components/ui/calendar.tsx | Function component. Props: className, classNames, showOutsideDays, captionLayout, buttonVariant, formatters, +2 more. Renders: div, td, DayPicker, ChevronLeftIcon, ChevronRightIcon, ChevronDownIcon. |
| `src/components/ui/calendar::CalendarDayButton` | src/components/ui/calendar.tsx | Function component. Props: className, day, modifiers, ...props. Hooks: useRef, useEffect. Renders: Button. |
| `src/components/ui/card::Card` | src/components/ui/card.tsx | Wrapped component. Props: className, ...props. Renders: div. |
| `src/components/ui/card::CardContent` | src/components/ui/card.tsx | Wrapped component. Props: className, ...props. Renders: div. |
| `src/components/ui/card::CardDescription` | src/components/ui/card.tsx | Wrapped component. Props: className, ...props. Renders: div. |
| `src/components/ui/card::CardFooter` | src/components/ui/card.tsx | Wrapped component. Props: className, ...props. Renders: div. |
| `src/components/ui/card::CardHeader` | src/components/ui/card.tsx | Wrapped component. Props: className, ...props. Renders: div. |
| `src/components/ui/card::CardTitle` | src/components/ui/card.tsx | Wrapped component. Props: className, ...props. Renders: div. |
| `src/components/ui/carousel::Carousel` | src/components/ui/carousel.tsx | Wrapped component. Props: orientation, opts, setApi, plugins, className, children, +1 more. Hooks: useEmblaCarousel, useState, useCallback, useEffect. Renders: div, CarouselContext.Provider. |
| `src/components/ui/carousel::CarouselContent` | src/components/ui/carousel.tsx | Wrapped component. Props: className, ...props. Hooks: useCarousel. Renders: div. |
| `src/components/ui/carousel::CarouselItem` | src/components/ui/carousel.tsx | Wrapped component. Props: className, ...props. Hooks: useCarousel. Renders: div. |
| `src/components/ui/carousel::CarouselNext` | src/components/ui/carousel.tsx | Wrapped component. Props: className, variant, size, ...props. Hooks: useCarousel. Renders: span, Button, ArrowRight. |
| `src/components/ui/carousel::CarouselPrevious` | src/components/ui/carousel.tsx | Wrapped component. Props: className, variant, size, ...props. Hooks: useCarousel. Renders: span, Button, ArrowLeft. |
| `src/components/ui/chart::ChartContainer` | src/components/ui/chart.tsx | Wrapped component. Props: id, className, children, config, ...props. Hooks: useId. Renders: div, ChartContext.Provider, ChartStyle, RechartsPrimitive.ResponsiveContainer. |
| `src/components/ui/chart::ChartLegendContent` | src/components/ui/chart.tsx | Wrapped component. Props: className, hideIcon, payload, verticalAlign, nameKey. Hooks: useChart. Renders: div, itemConfig.icon. |
| `src/components/ui/chart::ChartStyle` | src/components/ui/chart.tsx | Arrow function component. Props: id, config. Renders: style. |
| `src/components/ui/chart::ChartTooltipContent` | src/components/ui/chart.tsx | Wrapped component. Props: active, payload, className, indicator, hideLabel, hideIndicator, +7 more. Hooks: useChart, useMemo. Renders: div, itemConfig.icon, span. |
| `src/components/ui/checkbox::Checkbox` | src/components/ui/checkbox.tsx | Wrapped component. Props: className, ...props. Renders: CheckboxPrimitive.Root, CheckboxPrimitive.Indicator, Check. |
| `src/components/ui/command::Command` | src/components/ui/command.tsx | Wrapped component. Props: className, ...props. Renders: CommandPrimitive. |
| `src/components/ui/command::CommandDialog` | src/components/ui/command.tsx | Arrow function component. Props: children, ...props. Renders: Dialog, DialogContent, Command. |
| `src/components/ui/command::CommandEmpty` | src/components/ui/command.tsx | Wrapped component. Renders: CommandPrimitive.Empty. |
| `src/components/ui/command::CommandGroup` | src/components/ui/command.tsx | Wrapped component. Props: className, ...props. Renders: CommandPrimitive.Group. |
| `src/components/ui/command::CommandInput` | src/components/ui/command.tsx | Wrapped component. Props: className, ...props. Renders: div, Search, CommandPrimitive.Input. |
| `src/components/ui/command::CommandItem` | src/components/ui/command.tsx | Wrapped component. Props: className, ...props. Renders: CommandPrimitive.Item. |
| `src/components/ui/command::CommandList` | src/components/ui/command.tsx | Wrapped component. Props: className, ...props. Renders: CommandPrimitive.List. |
| `src/components/ui/command::CommandSeparator` | src/components/ui/command.tsx | Wrapped component. Props: className, ...props. Renders: CommandPrimitive.Separator. |
| `src/components/ui/command::CommandShortcut` | src/components/ui/command.tsx | Arrow function component. Props: className, ...props. Renders: span. |
| `src/components/ui/context-menu::ContextMenuCheckboxItem` | src/components/ui/context-menu.tsx | Wrapped component. Props: className, children, ...props. Renders: span, ContextMenuPrimitive.CheckboxItem, ContextMenuPrimitive.ItemIndicator, Check. |
| `src/components/ui/context-menu::ContextMenuContent` | src/components/ui/context-menu.tsx | Wrapped component. Props: className, ...props. Renders: ContextMenuPrimitive.Portal, ContextMenuPrimitive.Content. |
| `src/components/ui/context-menu::ContextMenuItem` | src/components/ui/context-menu.tsx | Wrapped component. Props: className, inset, ...props. Renders: ContextMenuPrimitive.Item. |
| `src/components/ui/context-menu::ContextMenuLabel` | src/components/ui/context-menu.tsx | Wrapped component. Props: className, inset, ...props. Renders: ContextMenuPrimitive.Label. |
| `src/components/ui/context-menu::ContextMenuRadioItem` | src/components/ui/context-menu.tsx | Wrapped component. Props: className, children, ...props. Renders: span, ContextMenuPrimitive.RadioItem, ContextMenuPrimitive.ItemIndicator, Circle. |
| `src/components/ui/context-menu::ContextMenuSeparator` | src/components/ui/context-menu.tsx | Wrapped component. Props: className, ...props. Renders: ContextMenuPrimitive.Separator. |
| `src/components/ui/context-menu::ContextMenuShortcut` | src/components/ui/context-menu.tsx | Arrow function component. Props: className, ...props. Renders: span. |
| `src/components/ui/context-menu::ContextMenuSubContent` | src/components/ui/context-menu.tsx | Wrapped component. Props: className, ...props. Renders: ContextMenuPrimitive.SubContent. |
| `src/components/ui/context-menu::ContextMenuSubTrigger` | src/components/ui/context-menu.tsx | Wrapped component. Props: className, inset, children, ...props. Renders: ContextMenuPrimitive.SubTrigger, ChevronRight. |
| `src/components/ui/dialog::DialogContent` | src/components/ui/dialog.tsx | Wrapped component. Props: className, children, ...props. Renders: span, DialogPortal, DialogOverlay, DialogPrimitive.Content, DialogPrimitive.Close, X. |
| `src/components/ui/dialog::DialogDescription` | src/components/ui/dialog.tsx | Wrapped component. Props: className, ...props. Renders: DialogPrimitive.Description. |
| `src/components/ui/dialog::DialogFooter` | src/components/ui/dialog.tsx | Arrow function component. Props: className, ...props. Renders: div. |
| `src/components/ui/dialog::DialogHeader` | src/components/ui/dialog.tsx | Arrow function component. Props: className, ...props. Renders: div. |
| `src/components/ui/dialog::DialogOverlay` | src/components/ui/dialog.tsx | Wrapped component. Props: className, ...props. Renders: DialogPrimitive.Overlay. |
| `src/components/ui/dialog::DialogTitle` | src/components/ui/dialog.tsx | Wrapped component. Props: className, ...props. Renders: DialogPrimitive.Title. |
| `src/components/ui/drawer::Drawer` | src/components/ui/drawer.tsx | Arrow function component. Props: shouldScaleBackground, ...props. Renders: DrawerPrimitive.Root. |
| `src/components/ui/drawer::DrawerContent` | src/components/ui/drawer.tsx | Wrapped component. Props: className, children, ...props. Renders: div, DrawerPortal, DrawerOverlay, DrawerPrimitive.Content. |
| `src/components/ui/drawer::DrawerDescription` | src/components/ui/drawer.tsx | Wrapped component. Props: className, ...props. Renders: DrawerPrimitive.Description. |
| `src/components/ui/drawer::DrawerFooter` | src/components/ui/drawer.tsx | Arrow function component. Props: className, ...props. Renders: div. |
| `src/components/ui/drawer::DrawerHeader` | src/components/ui/drawer.tsx | Arrow function component. Props: className, ...props. Renders: div. |
| `src/components/ui/drawer::DrawerOverlay` | src/components/ui/drawer.tsx | Wrapped component. Props: className, ...props. Renders: DrawerPrimitive.Overlay. |
| `src/components/ui/drawer::DrawerTitle` | src/components/ui/drawer.tsx | Wrapped component. Props: className, ...props. Renders: DrawerPrimitive.Title. |
| `src/components/ui/dropdown-menu::DropdownMenuCheckboxItem` | src/components/ui/dropdown-menu.tsx | Wrapped component. Props: className, children, ...props. Renders: span, DropdownMenuPrimitive.CheckboxItem, DropdownMenuPrimitive.ItemIndicator, Check. |
| `src/components/ui/dropdown-menu::DropdownMenuContent` | src/components/ui/dropdown-menu.tsx | Wrapped component. Props: className, sideOffset, ...props. Renders: DropdownMenuPrimitive.Portal, DropdownMenuPrimitive.Content. |
| `src/components/ui/dropdown-menu::DropdownMenuItem` | src/components/ui/dropdown-menu.tsx | Wrapped component. Props: className, inset, ...props. Renders: DropdownMenuPrimitive.Item. |
| `src/components/ui/dropdown-menu::DropdownMenuLabel` | src/components/ui/dropdown-menu.tsx | Wrapped component. Props: className, inset, ...props. Renders: DropdownMenuPrimitive.Label. |
| `src/components/ui/dropdown-menu::DropdownMenuRadioItem` | src/components/ui/dropdown-menu.tsx | Wrapped component. Props: className, children, ...props. Renders: span, DropdownMenuPrimitive.RadioItem, DropdownMenuPrimitive.ItemIndicator, Circle. |
| `src/components/ui/dropdown-menu::DropdownMenuSeparator` | src/components/ui/dropdown-menu.tsx | Wrapped component. Props: className, ...props. Renders: DropdownMenuPrimitive.Separator. |
| `src/components/ui/dropdown-menu::DropdownMenuShortcut` | src/components/ui/dropdown-menu.tsx | Arrow function component. Props: className, ...props. Renders: span. |
| `src/components/ui/dropdown-menu::DropdownMenuSubContent` | src/components/ui/dropdown-menu.tsx | Wrapped component. Props: className, ...props. Renders: DropdownMenuPrimitive.SubContent. |
| `src/components/ui/dropdown-menu::DropdownMenuSubTrigger` | src/components/ui/dropdown-menu.tsx | Wrapped component. Props: className, inset, children, ...props. Renders: DropdownMenuPrimitive.SubTrigger, ChevronRight. |
| `src/components/ui/form::FormControl` | src/components/ui/form.tsx | Wrapped component. Props: ...props. Hooks: useFormField. Renders: Slot. |
| `src/components/ui/form::FormDescription` | src/components/ui/form.tsx | Wrapped component. Props: className, ...props. Hooks: useFormField. Renders: p. |
| `src/components/ui/form::FormField` | src/components/ui/form.tsx | Arrow function component. Props: ...props. Renders: FormFieldContext.Provider, Controller. |
| `src/components/ui/form::FormItem` | src/components/ui/form.tsx | Wrapped component. Props: className, ...props. Hooks: useId. Renders: div, FormItemContext.Provider. |
| `src/components/ui/form::FormLabel` | src/components/ui/form.tsx | Wrapped component. Props: className, ...props. Hooks: useFormField. Renders: Label. |
| `src/components/ui/form::FormMessage` | src/components/ui/form.tsx | Wrapped component. Props: className, children, ...props. Hooks: useFormField. Renders: p. |
| `src/components/ui/hover-card::HoverCardContent` | src/components/ui/hover-card.tsx | Wrapped component. Props: className, align, sideOffset, ...props. Renders: HoverCardPrimitive.Content. |
| `src/components/ui/input-group::InputGroup` | src/components/ui/input-group.tsx | Function component. Props: className, ...props. Renders: div. |
| `src/components/ui/input-group::InputGroupAddon` | src/components/ui/input-group.tsx | Function component. Props: className, align, ...props. Renders: div. |
| `src/components/ui/input-group::InputGroupButton` | src/components/ui/input-group.tsx | Function component. Props: className, type, variant, size, ...props. Renders: Button. |
| `src/components/ui/input-group::InputGroupInput` | src/components/ui/input-group.tsx | Function component. Props: className, ...props. Renders: Input. |
| `src/components/ui/input-group::InputGroupText` | src/components/ui/input-group.tsx | Function component. Props: className, ...props. Renders: span. |
| `src/components/ui/input-group::InputGroupTextarea` | src/components/ui/input-group.tsx | Function component. Props: className, ...props. Renders: Textarea. |
| `src/components/ui/input-otp::InputOTP` | src/components/ui/input-otp.tsx | Wrapped component. Props: className, containerClassName, ...props. Renders: OTPInput. |
| `src/components/ui/input-otp::InputOTPGroup` | src/components/ui/input-otp.tsx | Wrapped component. Props: className, ...props. Renders: div. |
| `src/components/ui/input-otp::InputOTPSeparator` | src/components/ui/input-otp.tsx | Wrapped component. Props: ...props. Renders: div, Minus. |
| `src/components/ui/input-otp::InputOTPSlot` | src/components/ui/input-otp.tsx | Wrapped component. Props: index, className, ...props. Hooks: useContext. Renders: div. |
| `src/components/ui/input::Input` | src/components/ui/input.tsx | Wrapped component. Props: className, type, ...props. Renders: input. |
| `src/components/ui/label::Label` | src/components/ui/label.tsx | Wrapped component. Props: className, ...props. Renders: LabelPrimitive.Root. |
| `src/components/ui/menubar::Menubar` | src/components/ui/menubar.tsx | Wrapped component. Props: className, ...props. Renders: MenubarPrimitive.Root. |
| `src/components/ui/menubar::MenubarCheckboxItem` | src/components/ui/menubar.tsx | Wrapped component. Props: className, children, ...props. Renders: span, MenubarPrimitive.CheckboxItem, MenubarPrimitive.ItemIndicator, Check. |
| `src/components/ui/menubar::MenubarContent` | src/components/ui/menubar.tsx | Wrapped component. Props: className, align, alignOffset, sideOffset, ...props. Renders: MenubarPrimitive.Portal, MenubarPrimitive.Content. |
| `src/components/ui/menubar::MenubarGroup` | src/components/ui/menubar.tsx | Function component. Props: ...props. Renders: MenubarPrimitive.Group. |
| `src/components/ui/menubar::MenubarItem` | src/components/ui/menubar.tsx | Wrapped component. Props: className, inset, ...props. Renders: MenubarPrimitive.Item. |
| `src/components/ui/menubar::MenubarLabel` | src/components/ui/menubar.tsx | Wrapped component. Props: className, inset, ...props. Renders: MenubarPrimitive.Label. |
| `src/components/ui/menubar::MenubarMenu` | src/components/ui/menubar.tsx | Function component. Props: ...props. Renders: MenubarPrimitive.Menu. |
| `src/components/ui/menubar::MenubarPortal` | src/components/ui/menubar.tsx | Function component. Props: ...props. Renders: MenubarPrimitive.Portal. |
| `src/components/ui/menubar::MenubarRadioGroup` | src/components/ui/menubar.tsx | Function component. Props: ...props. Renders: MenubarPrimitive.RadioGroup. |
| `src/components/ui/menubar::MenubarRadioItem` | src/components/ui/menubar.tsx | Wrapped component. Props: className, children, ...props. Renders: span, MenubarPrimitive.RadioItem, MenubarPrimitive.ItemIndicator, Circle. |
| `src/components/ui/menubar::MenubarSeparator` | src/components/ui/menubar.tsx | Wrapped component. Props: className, ...props. Renders: MenubarPrimitive.Separator. |
| `src/components/ui/menubar::MenubarShortcut` | src/components/ui/menubar.tsx | Arrow function component. Props: className, ...props. Renders: span. |
| `src/components/ui/menubar::MenubarSub` | src/components/ui/menubar.tsx | Function component. Props: ...props. Renders: MenubarPrimitive.Sub. |
| `src/components/ui/menubar::MenubarSubContent` | src/components/ui/menubar.tsx | Wrapped component. Props: className, ...props. Renders: MenubarPrimitive.SubContent. |
| `src/components/ui/menubar::MenubarSubTrigger` | src/components/ui/menubar.tsx | Wrapped component. Props: className, inset, children, ...props. Renders: MenubarPrimitive.SubTrigger, ChevronRight. |
| `src/components/ui/menubar::MenubarTrigger` | src/components/ui/menubar.tsx | Wrapped component. Props: className, ...props. Renders: MenubarPrimitive.Trigger. |
| `src/components/ui/navigation-menu::NavigationMenu` | src/components/ui/navigation-menu.tsx | Wrapped component. Props: className, children, ...props. Renders: NavigationMenuPrimitive.Root, NavigationMenuViewport. |
| `src/components/ui/navigation-menu::NavigationMenuContent` | src/components/ui/navigation-menu.tsx | Wrapped component. Props: className, ...props. Renders: NavigationMenuPrimitive.Content. |
| `src/components/ui/navigation-menu::NavigationMenuIndicator` | src/components/ui/navigation-menu.tsx | Wrapped component. Props: className, ...props. Renders: div, NavigationMenuPrimitive.Indicator. |
| `src/components/ui/navigation-menu::NavigationMenuList` | src/components/ui/navigation-menu.tsx | Wrapped component. Props: className, ...props. Renders: NavigationMenuPrimitive.List. |
| `src/components/ui/navigation-menu::NavigationMenuTrigger` | src/components/ui/navigation-menu.tsx | Wrapped component. Props: className, children, ...props. Renders: NavigationMenuPrimitive.Trigger, ChevronDown. |
| `src/components/ui/navigation-menu::NavigationMenuViewport` | src/components/ui/navigation-menu.tsx | Wrapped component. Props: className, ...props. Renders: div, NavigationMenuPrimitive.Viewport. |
| `src/components/ui/pagination::Pagination` | src/components/ui/pagination.tsx | Arrow function component. Props: className, ...props. Renders: nav. |
| `src/components/ui/pagination::PaginationContent` | src/components/ui/pagination.tsx | Wrapped component. Props: className, ...props. Renders: ul. |
| `src/components/ui/pagination::PaginationEllipsis` | src/components/ui/pagination.tsx | Arrow function component. Props: className, ...props. Renders: span, MoreHorizontal. |
| `src/components/ui/pagination::PaginationItem` | src/components/ui/pagination.tsx | Wrapped component. Props: className, ...props. Renders: li. |
| `src/components/ui/pagination::PaginationLink` | src/components/ui/pagination.tsx | Arrow function component. Props: className, isActive, size, ...props. Renders: a. |
| `src/components/ui/pagination::PaginationNext` | src/components/ui/pagination.tsx | Arrow function component. Props: className, ...props. Renders: span, PaginationLink, ChevronRight. |
| `src/components/ui/pagination::PaginationPrevious` | src/components/ui/pagination.tsx | Arrow function component. Props: className, ...props. Renders: span, PaginationLink, ChevronLeft. |
| `src/components/ui/popover::PopoverContent` | src/components/ui/popover.tsx | Wrapped component. Props: className, align, sideOffset, ...props. Renders: PopoverPrimitive.Portal, PopoverPrimitive.Content. |
| `src/components/ui/progress::Progress` | src/components/ui/progress.tsx | Wrapped component. Props: className, value, ...props. Renders: ProgressPrimitive.Root, ProgressPrimitive.Indicator. |
| `src/components/ui/radio-group::RadioGroup` | src/components/ui/radio-group.tsx | Wrapped component. Props: className, ...props. Renders: RadioGroupPrimitive.Root. |
| `src/components/ui/radio-group::RadioGroupItem` | src/components/ui/radio-group.tsx | Wrapped component. Props: className, ...props. Renders: RadioGroupPrimitive.Item, RadioGroupPrimitive.Indicator, Circle. |
| `src/components/ui/resizable::ResizableHandle` | src/components/ui/resizable.tsx | Arrow function component. Props: withHandle, className, ...props. Renders: div, Separator, GripVertical. |
| `src/components/ui/resizable::ResizablePanelGroup` | src/components/ui/resizable.tsx | Arrow function component. Props: className, ...props. Renders: Group. |
| `src/components/ui/scroll-area::ScrollArea` | src/components/ui/scroll-area.tsx | Wrapped component. Props: className, children, ...props. Renders: ScrollAreaPrimitive.Root, ScrollAreaPrimitive.Viewport, ScrollBar, ScrollAreaPrimitive.Corner. |
| `src/components/ui/scroll-area::ScrollBar` | src/components/ui/scroll-area.tsx | Wrapped component. Props: className, orientation, ...props. Renders: ScrollAreaPrimitive.ScrollAreaScrollbar, ScrollAreaPrimitive.ScrollAreaThumb. |
| `src/components/ui/select::SelectContent` | src/components/ui/select.tsx | Wrapped component. Props: className, children, position, ...props. Renders: SelectPrimitive.Portal, SelectPrimitive.Content, SelectScrollUpButton, SelectPrimitive.Viewport, SelectScrollDownButton. |
| `src/components/ui/select::SelectItem` | src/components/ui/select.tsx | Wrapped component. Props: className, children, ...props. Renders: span, SelectPrimitive.Item, SelectPrimitive.ItemIndicator, Check, SelectPrimitive.ItemText. |
| `src/components/ui/select::SelectLabel` | src/components/ui/select.tsx | Wrapped component. Props: className, ...props. Renders: SelectPrimitive.Label. |
| `src/components/ui/select::SelectScrollDownButton` | src/components/ui/select.tsx | Wrapped component. Props: className, ...props. Renders: SelectPrimitive.ScrollDownButton, ChevronDown. |
| `src/components/ui/select::SelectScrollUpButton` | src/components/ui/select.tsx | Wrapped component. Props: className, ...props. Renders: SelectPrimitive.ScrollUpButton, ChevronUp. |
| `src/components/ui/select::SelectSeparator` | src/components/ui/select.tsx | Wrapped component. Props: className, ...props. Renders: SelectPrimitive.Separator. |
| `src/components/ui/select::SelectTrigger` | src/components/ui/select.tsx | Wrapped component. Props: className, children, ...props. Renders: SelectPrimitive.Trigger, SelectPrimitive.Icon, ChevronDown. |
| `src/components/ui/separator::Separator` | src/components/ui/separator.tsx | Wrapped component. Props: className, orientation, decorative, ...props. Renders: SeparatorPrimitive.Root. |
| `src/components/ui/sheet::SheetContent` | src/components/ui/sheet.tsx | Wrapped component. Props: side, className, children, ...props. Renders: span, SheetPortal, SheetOverlay, SheetPrimitive.Content, SheetPrimitive.Close, X. |
| `src/components/ui/sheet::SheetDescription` | src/components/ui/sheet.tsx | Wrapped component. Props: className, ...props. Renders: SheetPrimitive.Description. |
| `src/components/ui/sheet::SheetFooter` | src/components/ui/sheet.tsx | Arrow function component. Props: className, ...props. Renders: div. |
| `src/components/ui/sheet::SheetHeader` | src/components/ui/sheet.tsx | Arrow function component. Props: className, ...props. Renders: div. |
| `src/components/ui/sheet::SheetOverlay` | src/components/ui/sheet.tsx | Wrapped component. Props: className, ...props. Renders: SheetPrimitive.Overlay. |
| `src/components/ui/sheet::SheetTitle` | src/components/ui/sheet.tsx | Wrapped component. Props: className, ...props. Renders: SheetPrimitive.Title. |
| `src/components/ui/sidebar::Sidebar` | src/components/ui/sidebar.tsx | Wrapped component. Props: side, variant, collapsible, className, children, ...props. Hooks: useSidebar. Renders: div, Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription. |
| `src/components/ui/sidebar::SidebarContent` | src/components/ui/sidebar.tsx | Wrapped component. Props: className, ...props. Renders: div. |
| `src/components/ui/sidebar::SidebarFooter` | src/components/ui/sidebar.tsx | Wrapped component. Props: className, ...props. Renders: div. |
| `src/components/ui/sidebar::SidebarGroup` | src/components/ui/sidebar.tsx | Wrapped component. Props: className, ...props. Renders: div. |
| `src/components/ui/sidebar::SidebarGroupAction` | src/components/ui/sidebar.tsx | Wrapped component. Props: className, asChild, ...props. Renders: Comp. |
| `src/components/ui/sidebar::SidebarGroupContent` | src/components/ui/sidebar.tsx | Wrapped component. Props: className, ...props. Renders: div. |
| `src/components/ui/sidebar::SidebarGroupLabel` | src/components/ui/sidebar.tsx | Wrapped component. Props: className, asChild, ...props. Renders: Comp. |
| `src/components/ui/sidebar::SidebarHeader` | src/components/ui/sidebar.tsx | Wrapped component. Props: className, ...props. Renders: div. |
| `src/components/ui/sidebar::SidebarInput` | src/components/ui/sidebar.tsx | Wrapped component. Props: className, ...props. Renders: Input. |
| `src/components/ui/sidebar::SidebarInset` | src/components/ui/sidebar.tsx | Wrapped component. Props: className, ...props. Renders: main. |
| `src/components/ui/sidebar::SidebarMenu` | src/components/ui/sidebar.tsx | Wrapped component. Props: className, ...props. Renders: ul. |
| `src/components/ui/sidebar::SidebarMenuAction` | src/components/ui/sidebar.tsx | Wrapped component. Props: className, asChild, showOnHover, ...props. Renders: Comp. |
| `src/components/ui/sidebar::SidebarMenuBadge` | src/components/ui/sidebar.tsx | Wrapped component. Props: className, ...props. Renders: div. |
| `src/components/ui/sidebar::SidebarMenuButton` | src/components/ui/sidebar.tsx | Wrapped component. Props: asChild, isActive, variant, size, tooltip, className, +1 more. Hooks: useSidebar. Renders: Comp, Tooltip, TooltipTrigger, TooltipContent. |
| `src/components/ui/sidebar::SidebarMenuItem` | src/components/ui/sidebar.tsx | Wrapped component. Props: className, ...props. Renders: li. |
| `src/components/ui/sidebar::SidebarMenuSkeleton` | src/components/ui/sidebar.tsx | Wrapped component. Props: className, showIcon, ...props. Hooks: useMemo. Renders: div, Skeleton. |
| `src/components/ui/sidebar::SidebarMenuSub` | src/components/ui/sidebar.tsx | Wrapped component. Props: className, ...props. Renders: ul. |
| `src/components/ui/sidebar::SidebarMenuSubButton` | src/components/ui/sidebar.tsx | Wrapped component. Props: asChild, size, isActive, className, ...props. Renders: Comp. |
| `src/components/ui/sidebar::SidebarMenuSubItem` | src/components/ui/sidebar.tsx | Wrapped component. Props: ...props. Renders: li. |
| `src/components/ui/sidebar::SidebarProvider` | src/components/ui/sidebar.tsx | Wrapped component. Props: defaultOpen, open, onOpenChange, className, style, children, +1 more. Hooks: useIsMobile, useState, useCallback, useEffect, useMemo. Renders: div, SidebarContext.Provider, TooltipProvider. |
| `src/components/ui/sidebar::SidebarRail` | src/components/ui/sidebar.tsx | Wrapped component. Props: className, ...props. Hooks: useSidebar. Renders: button. |
| `src/components/ui/sidebar::SidebarSeparator` | src/components/ui/sidebar.tsx | Wrapped component. Props: className, ...props. Renders: Separator. |
| `src/components/ui/sidebar::SidebarTrigger` | src/components/ui/sidebar.tsx | Wrapped component. Props: className, onClick, ...props. Hooks: useSidebar. Renders: span, Button, PanelLeft. |
| `src/components/ui/skeleton::Skeleton` | src/components/ui/skeleton.tsx | Function component. Props: className, ...props. Renders: div. |
| `src/components/ui/slider::Slider` | src/components/ui/slider.tsx | Wrapped component. Props: className, ...props. Renders: SliderPrimitive.Root, SliderPrimitive.Track, SliderPrimitive.Range, SliderPrimitive.Thumb. |
| `src/components/ui/sonner::Toaster` | src/components/ui/sonner.tsx | Arrow function component. Props: ...props. Renders: Sonner. |
| `src/components/ui/spinner::Spinner` | src/components/ui/spinner.tsx | Function component. Props: className, ...props. Renders: Loader2Icon. |
| `src/components/ui/switch::Switch` | src/components/ui/switch.tsx | Wrapped component. Props: className, ...props. Renders: SwitchPrimitives.Root, SwitchPrimitives.Thumb. |
| `src/components/ui/table::Table` | src/components/ui/table.tsx | Wrapped component. Props: className, ...props. Renders: div, table. |
| `src/components/ui/table::TableBody` | src/components/ui/table.tsx | Wrapped component. Props: className, ...props. Renders: tbody. |
| `src/components/ui/table::TableCaption` | src/components/ui/table.tsx | Wrapped component. Props: className, ...props. Renders: caption. |
| `src/components/ui/table::TableCell` | src/components/ui/table.tsx | Wrapped component. Props: className, ...props. Renders: td. |
| `src/components/ui/table::TableFooter` | src/components/ui/table.tsx | Wrapped component. Props: className, ...props. Renders: tfoot. |
| `src/components/ui/table::TableHead` | src/components/ui/table.tsx | Wrapped component. Props: className, ...props. Renders: th. |
| `src/components/ui/table::TableHeader` | src/components/ui/table.tsx | Wrapped component. Props: className, ...props. Renders: thead. |
| `src/components/ui/table::TableRow` | src/components/ui/table.tsx | Wrapped component. Props: className, ...props. Renders: tr. |
| `src/components/ui/tabs::TabsContent` | src/components/ui/tabs.tsx | Wrapped component. Props: className, ...props. Renders: TabsPrimitive.Content. |
| `src/components/ui/tabs::TabsList` | src/components/ui/tabs.tsx | Wrapped component. Props: className, ...props. Renders: TabsPrimitive.List. |
| `src/components/ui/tabs::TabsTrigger` | src/components/ui/tabs.tsx | Wrapped component. Props: className, ...props. Renders: TabsPrimitive.Trigger. |
| `src/components/ui/textarea::Textarea` | src/components/ui/textarea.tsx | Wrapped component. Props: className, ...props. Renders: textarea. |
| `src/components/ui/toggle-group::ToggleGroup` | src/components/ui/toggle-group.tsx | Wrapped component. Props: className, variant, size, children, ...props. Renders: ToggleGroupPrimitive.Root, ToggleGroupContext.Provider. |
| `src/components/ui/toggle-group::ToggleGroupItem` | src/components/ui/toggle-group.tsx | Wrapped component. Props: className, children, variant, size, ...props. Hooks: useContext. Renders: ToggleGroupPrimitive.Item. |
| `src/components/ui/toggle::Toggle` | src/components/ui/toggle.tsx | Wrapped component. Props: className, variant, size, ...props. Renders: TogglePrimitive.Root. |
| `src/components/ui/tooltip::TooltipContent` | src/components/ui/tooltip.tsx | Wrapped component. Props: className, sideOffset, ...props. Renders: TooltipPrimitive.Portal, TooltipPrimitive.Content. |
| `src/routes/__root::ErrorComponent` | src/routes/__root.tsx | Function component. Props: error, reset. Hooks: useRouter, useEffect. Renders: div, h1, p, button, a. |
| `src/routes/__root::NotFoundComponent` | src/routes/__root.tsx | Function component. Renders: div, h1, h2, p, Link. |
| `src/routes/__root::RootComponent` | src/routes/__root.tsx | Function component. Hooks: useRouteContext, useRouterState. Renders: div, main, QueryClientProvider, SiteHeader, Outlet, SiteFooter. |
| `src/routes/__root::RootShell` | src/routes/__root.tsx | Function component. Props: children. Renders: html, head, body, script, HeadContent, Scripts. |
| `src/routes/_authenticated/chat::ChatPage` | src/routes/_authenticated/chat.tsx | Function component. Hooks: useState, useRef, useCallback, useEffect. Renders: div, img, h1, p, h2, button, Button, RotateCcw, +4 more. |
| `src/routes/_authenticated/planner::PlannerPage` | src/routes/_authenticated/planner.tsx | Function component. Hooks: useServerFn, useState, useEffect. Renders: div, p, h1, form, button, label, Button, Loader2, +4 more. |
| `src/routes/auth::AuthPage` | src/routes/auth.tsx | Function component. Hooks: useSearch, useNavigate, useState, useEffect. Renders: section, img, h1, p, form, button, Input, Button. |
| `src/routes/cities.$slug::CityPage` | src/routes/cities.$slug.tsx | Function component. Hooks: useLoaderData. Renders: section, div, p, h2, h3, aside, PageHero, Link, +4 more. |
| `src/routes/cities.index::CitiesPage` | src/routes/cities.index.tsx | Function component. Renders: section, div, img, p, h2, span, PageHero, Link, +3 more. |
| `src/routes/currency::CurrencyPage` | src/routes/currency.tsx | Function component. Hooks: useState, useEffect, useMemo. Renders: section, div, h2, span, label, p, PageHero, Input, +4 more. |
| `src/routes/currency::CurrencySelect` | src/routes/currency.tsx | Function component. Props: value, onChange, label. Renders: Select, SelectTrigger, SelectValue, SelectContent, SelectItem. |
| `src/routes/history::HistoryPage` | src/routes/history.tsx | Function component. Renders: section, ol, li, span, p, h2, PageHero, ChatCta. |
| `src/routes/index::Index` | src/routes/index.tsx | Function component. Renders: section, img, div, p, h1, f.icon, Button, Link, +2 more. |
| `src/routes/people::PeoplePage` | src/routes/people.tsx | Function component. Renders: section, p, h2, div, l.icon, h3, PageHero, ChatCta. |
| `src/routes/visa::VisaPage` | src/routes/visa.tsx | Function component. Renders: section, div, g.icon, h2, p, ol, PageHero, Fingerprint, +4 more. |

## Interactive elements (buttons, inputs, links), each inside a component (69)

| identifier | file | in | description |
| --- | --- | --- | --- |
| `src/components/ai-elements/conversation::Conversation.sticktobottom` | src/components/ai-elements/conversation.tsx | `src/components/ai-elements/conversation::Conversation` | <StickToBottom> component. |
| `src/components/ai-elements/conversation::ConversationDownload.button` | src/components/ai-elements/conversation.tsx | `src/components/ai-elements/conversation::ConversationDownload` | <Button> component. type=button. Handlers: onClick. |
| `src/components/ai-elements/conversation::ConversationScrollButton.button` | src/components/ai-elements/conversation.tsx | `src/components/ai-elements/conversation::ConversationScrollButton` | <Button> component. type=button. Handlers: onClick. |
| `src/components/ai-elements/message::MessageBranchNext.button` | src/components/ai-elements/message.tsx | `src/components/ai-elements/message::MessageBranchNext` | <Button> component. type=button, can be disabled, labelled "Next branch". Handlers: onClick. |
| `src/components/ai-elements/message::MessageBranchPrevious.button` | src/components/ai-elements/message.tsx | `src/components/ai-elements/message::MessageBranchPrevious` | <Button> component. type=button, can be disabled, labelled "Previous branch". Handlers: onClick. |
| `src/components/ai-elements/prompt-input::PromptInput.file` | src/components/ai-elements/prompt-input.tsx | `src/components/ai-elements/prompt-input::PromptInput` | File picker. labelled "Upload files". Handlers: onChange. |
| `src/components/ai-elements/prompt-input::PromptInput.form` | src/components/ai-elements/prompt-input.tsx | `src/components/ai-elements/prompt-input::PromptInput` | Form. Handlers: onSubmit. |
| `src/components/ai-elements/prompt-input::PromptInputActionAddAttachments.dropdownmenuitem` | src/components/ai-elements/prompt-input.tsx | `src/components/ai-elements/prompt-input::PromptInputActionAddAttachments` | <DropdownMenuItem> component. Handlers: onSelect. |
| `src/components/ai-elements/prompt-input::PromptInputActionAddScreenshot.dropdownmenuitem` | src/components/ai-elements/prompt-input.tsx | `src/components/ai-elements/prompt-input::PromptInputActionAddScreenshot` | <DropdownMenuItem> component. Handlers: onSelect. |
| `src/components/ai-elements/prompt-input::PromptInputSubmit.inputgroupbutton` | src/components/ai-elements/prompt-input.tsx | `src/components/ai-elements/prompt-input::PromptInputSubmit` | <InputGroupButton> component. Handlers: onClick. |
| `src/components/ai-elements/prompt-input::PromptInputTextarea.inputgrouptextarea` | src/components/ai-elements/prompt-input.tsx | `src/components/ai-elements/prompt-input::PromptInputTextarea` | <InputGroupTextarea> component. name "message". Handlers: onCompositionEnd, onCompositionStart, onKeyDown, onPaste. |
| `src/components/site-header::SiteHeader.button` | src/components/site-header.tsx | `src/components/site-header::SiteHeader` | <Button> component. labelled "Sign out". Handlers: onClick. |
| `src/components/site-header::SiteHeader.button-2` | src/components/site-header.tsx | `src/components/site-header::SiteHeader` | <Button> component. Handlers: onClick. |
| `src/components/site-header::SiteHeader.button-3` | src/components/site-header.tsx | `src/components/site-header::SiteHeader` | Button. type=button, labelled "Sign out". Handlers: onClick. |
| `src/components/site-header::SiteHeader.link` | src/components/site-header.tsx | `src/components/site-header::SiteHeader` | <Link> component. Handlers: onClick. |
| `src/components/site-header::SiteHeader.link-2` | src/components/site-header.tsx | `src/components/site-header::SiteHeader` | <Link> component. Handlers: onClick. |
| `src/components/ui/alert::Alert.div` | src/components/ui/alert.tsx | `src/components/ui/alert::Alert` | <div> element. |
| `src/components/ui/breadcrumb::BreadcrumbEllipsis.span` | src/components/ui/breadcrumb.tsx | `src/components/ui/breadcrumb::BreadcrumbEllipsis` | <span> element. |
| `src/components/ui/breadcrumb::BreadcrumbPage.span` | src/components/ui/breadcrumb.tsx | `src/components/ui/breadcrumb::BreadcrumbPage` | <span> element. |
| `src/components/ui/breadcrumb::BreadcrumbSeparator.li` | src/components/ui/breadcrumb.tsx | `src/components/ui/breadcrumb::BreadcrumbSeparator` | <li> element. |
| `src/components/ui/button-group::ButtonGroup.div` | src/components/ui/button-group.tsx | `src/components/ui/button-group::ButtonGroup` | <div> element. |
| `src/components/ui/carousel::Carousel.div` | src/components/ui/carousel.tsx | `src/components/ui/carousel::Carousel` | <div> element. Handlers: onKeyDownCapture. |
| `src/components/ui/carousel::CarouselItem.div` | src/components/ui/carousel.tsx | `src/components/ui/carousel::CarouselItem` | <div> element. |
| `src/components/ui/carousel::CarouselNext.button` | src/components/ui/carousel.tsx | `src/components/ui/carousel::CarouselNext` | <Button> component. can be disabled. Handlers: onClick. |
| `src/components/ui/carousel::CarouselPrevious.button` | src/components/ui/carousel.tsx | `src/components/ui/carousel::CarouselPrevious` | <Button> component. can be disabled. Handlers: onClick. |
| `src/components/ui/input-group::InputGroup.div` | src/components/ui/input-group.tsx | `src/components/ui/input-group::InputGroup` | <div> element. |
| `src/components/ui/input-group::InputGroupAddon.div` | src/components/ui/input-group.tsx | `src/components/ui/input-group::InputGroupAddon` | <div> element. Handlers: onClick. |
| `src/components/ui/input-otp::InputOTPSeparator.div` | src/components/ui/input-otp.tsx | `src/components/ui/input-otp::InputOTPSeparator` | <div> element. |
| `src/components/ui/input::Input.input` | src/components/ui/input.tsx | `src/components/ui/input::Input` | Text input field. |
| `src/components/ui/pagination::Pagination.nav` | src/components/ui/pagination.tsx | `src/components/ui/pagination::Pagination` | <nav> element. labelled "pagination". |
| `src/components/ui/pagination::PaginationLink.link` | src/components/ui/pagination.tsx | `src/components/ui/pagination::PaginationLink` | Link. |
| `src/components/ui/sidebar::Sidebar.sheet` | src/components/ui/sidebar.tsx | `src/components/ui/sidebar::Sidebar` | <Sheet> component. Handlers: onOpenChange. |
| `src/components/ui/sidebar::SidebarRail.button` | src/components/ui/sidebar.tsx | `src/components/ui/sidebar::SidebarRail` | Button. labelled "Toggle Sidebar". Handlers: onClick. |
| `src/components/ui/sidebar::SidebarTrigger.button` | src/components/ui/sidebar.tsx | `src/components/ui/sidebar::SidebarTrigger` | <Button> component. Handlers: onClick. |
| `src/components/ui/spinner::Spinner.loader2icon` | src/components/ui/spinner.tsx | `src/components/ui/spinner::Spinner` | <Loader2Icon> component. labelled "Loading". |
| `src/components/ui/textarea::Textarea.textarea` | src/components/ui/textarea.tsx | `src/components/ui/textarea::Textarea` | Multi-line text field. |
| `src/routes/__root::ErrorComponent.button` | src/routes/__root.tsx | `src/routes/__root::ErrorComponent` | Button. labelled "Try again". Handlers: onClick. |
| `src/routes/__root::ErrorComponent.link` | src/routes/__root.tsx | `src/routes/__root::ErrorComponent` | Link. href "/", labelled "Go home". |
| `src/routes/_authenticated/chat::ChatPage.button` | src/routes/_authenticated/chat.tsx | `src/routes/_authenticated/chat::ChatPage` | <Button> component. can be disabled, labelled "Start over". Handlers: onClick. |
| `src/routes/_authenticated/chat::ChatPage.button-2` | src/routes/_authenticated/chat.tsx | `src/routes/_authenticated/chat::ChatPage` | Button. type=button. Handlers: onClick. |
| `src/routes/_authenticated/chat::ChatPage.link` | src/routes/_authenticated/chat.tsx | `src/routes/_authenticated/chat::ChatPage` | Link. |
| `src/routes/_authenticated/chat::ChatPage.p` | src/routes/_authenticated/chat.tsx | `src/routes/_authenticated/chat::ChatPage` | <p> element. |
| `src/routes/_authenticated/chat::ChatPage.promptinput` | src/routes/_authenticated/chat.tsx | `src/routes/_authenticated/chat::ChatPage` | <PromptInput> component. Handlers: onSubmit. |
| `src/routes/_authenticated/chat::ChatPage.promptinputsubmit` | src/routes/_authenticated/chat.tsx | `src/routes/_authenticated/chat::ChatPage` | <PromptInputSubmit> component. Handlers: onStop. |
| `src/routes/_authenticated/planner::PlannerPage.button` | src/routes/_authenticated/planner.tsx | `src/routes/_authenticated/planner::PlannerPage` | Button. type=button. Handlers: onClick. |
| `src/routes/_authenticated/planner::PlannerPage.button-2` | src/routes/_authenticated/planner.tsx | `src/routes/_authenticated/planner::PlannerPage` | Button. type=button. Handlers: onClick. |
| `src/routes/_authenticated/planner::PlannerPage.button-3` | src/routes/_authenticated/planner.tsx | `src/routes/_authenticated/planner::PlannerPage` | Button. type=button. Handlers: onClick. |
| `src/routes/_authenticated/planner::PlannerPage.button-4` | src/routes/_authenticated/planner.tsx | `src/routes/_authenticated/planner::PlannerPage` | Button. Handlers: onClick. |
| `src/routes/_authenticated/planner::PlannerPage.button-5` | src/routes/_authenticated/planner.tsx | `src/routes/_authenticated/planner::PlannerPage` | <Button> component. labelled "Delete trip". Handlers: onClick. |
| `src/routes/_authenticated/planner::PlannerPage.form` | src/routes/_authenticated/planner.tsx | `src/routes/_authenticated/planner::PlannerPage` | Form. Handlers: onSubmit. |
| `src/routes/_authenticated/planner::PlannerPage.label` | src/routes/_authenticated/planner.tsx | `src/routes/_authenticated/planner::PlannerPage` | Field label. labelled "Days". |
| `src/routes/_authenticated/planner::PlannerPage.label-2` | src/routes/_authenticated/planner.tsx | `src/routes/_authenticated/planner::PlannerPage` | Field label. labelled "Month". |
| `src/routes/_authenticated/planner::PlannerPage.label-3` | src/routes/_authenticated/planner.tsx | `src/routes/_authenticated/planner::PlannerPage` | Field label. labelled "Anything else?". |
| `src/routes/_authenticated/planner::PlannerPage.link` | src/routes/_authenticated/planner.tsx | `src/routes/_authenticated/planner::PlannerPage` | Link. |
| `src/routes/_authenticated/planner::PlannerPage.number` | src/routes/_authenticated/planner.tsx | `src/routes/_authenticated/planner::PlannerPage` | Number input. Handlers: onChange. |
| `src/routes/_authenticated/planner::PlannerPage.option` | src/routes/_authenticated/planner.tsx | `src/routes/_authenticated/planner::PlannerPage` | Select option. |
| `src/routes/_authenticated/planner::PlannerPage.select` | src/routes/_authenticated/planner.tsx | `src/routes/_authenticated/planner::PlannerPage` | Dropdown select. Handlers: onChange. |
| `src/routes/_authenticated/planner::PlannerPage.textarea` | src/routes/_authenticated/planner.tsx | `src/routes/_authenticated/planner::PlannerPage` | Multi-line text field. placeholder "e.g. travelling with a toddler, vegetarian, arriving by ferry". Handlers: onChange. |
| `src/routes/auth::AuthPage.button` | src/routes/auth.tsx | `src/routes/auth::AuthPage` | Button. type=button, labelled "Create an account / Sign in". Handlers: onClick. |
| `src/routes/auth::AuthPage.form` | src/routes/auth.tsx | `src/routes/auth::AuthPage` | Form. Handlers: onSubmit. |
| `src/routes/auth::AuthPage.input` | src/routes/auth.tsx | `src/routes/auth::AuthPage` | <Input> component. type=email, placeholder "you@example.com". Handlers: onChange. |
| `src/routes/auth::AuthPage.input-2` | src/routes/auth.tsx | `src/routes/auth::AuthPage` | <Input> component. type=password, placeholder "Password". Handlers: onChange. |
| `src/routes/currency::CurrencyPage.button` | src/routes/currency.tsx | `src/routes/currency::CurrencyPage` | <Button> component. labelled "Swap currencies". Handlers: onClick. |
| `src/routes/currency::CurrencyPage.currencyselect` | src/routes/currency.tsx | `src/routes/currency::CurrencyPage` | <CurrencySelect> component. Handlers: onChange. |
| `src/routes/currency::CurrencyPage.currencyselect-2` | src/routes/currency.tsx | `src/routes/currency::CurrencyPage` | <CurrencySelect> component. Handlers: onChange. |
| `src/routes/currency::CurrencyPage.input` | src/routes/currency.tsx | `src/routes/currency::CurrencyPage` | <Input> component. Handlers: onChange. |
| `src/routes/currency::CurrencyPage.label` | src/routes/currency.tsx | `src/routes/currency::CurrencyPage` | Field label. labelled "Amount". |
| `src/routes/currency::CurrencySelect.select` | src/routes/currency.tsx | `src/routes/currency::CurrencySelect` | <Select> component. Handlers: onValueChange. |
| `src/routes/visa::VisaPage.link` | src/routes/visa.tsx | `src/routes/visa::VisaPage` | Link. |

## Instructions sent to a model (2)

| identifier | file | description |
| --- | --- | --- |
| `src/lib/chat.server::systemPrompt.prompt` | src/lib/chat.server.ts | Prompt returned by 'systemPrompt' (1720 chars). |
| `src/lib/rag.server::formatContext.prompt` | src/lib/rag.server.ts | Prompt returned by 'formatContext' (45 chars). |
