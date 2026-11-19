import { Loader2Icon } from "lucide-react"

import { cn } from "@/lib/utils"

// @uxid src/components/ui/spinner::Spinner
function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <Loader2Icon /* @uxid src/components/ui/spinner::Spinner.loader2icon */
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  )
}

export { Spinner }
