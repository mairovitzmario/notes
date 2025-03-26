import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { InputProps } from "./input"

const textareaVariants = cva(
  "data-slot='textarea' flex field-sizing-content w-full min-w-0 outline-none placeholder:text-muted-foreground/50 dark:placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "dark:bg-input/30 border-input rounded-md border bg-transparent shadow-xs transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        ghost: "border-0 bg-transparent shadow-none",
      },
      size: {
        default: "min-h-16 px-3 py-2 text-base md:text-sm",
        sm: "min-h-10 px-2 py-1 text-xs",
        lg: "min-h-24 px-2 sm:px-6 py-1 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  VariantProps<typeof textareaVariants> { }

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(textareaVariants({ variant, size }), className)}
        {...props}
      />
    )
  }
);

export { Textarea, textareaVariants }
