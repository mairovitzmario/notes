import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const inputVariants = cva(
  "file:text-foreground dark:placeholder:text-muted-foreground placeholder:text-muted-foreground/50 selection:bg-primary selection:text-primary-foreground flex w-full min-w-0 outline-none file:inline-flex file:border-0 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "dark:bg-input/30 border-input rounded-md border bg-transparent shadow-xs transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        ghost: "border-0 bg-transparent shadow-none",
      },
      size: {
        default: "h-9 px-3 py-1 text-base md:text-sm file:h-7 file:text-sm",
        sm: "h-8 px-2 py-0.5 text-xs",
        lg: "h-10 px-4 py-2 text-lg",
        xl: "h-10 px-2 py-2 sm:px-6 sm:py-6 text-2xl sm:text-3xl font-bold",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
  VariantProps<typeof inputVariants> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, size, ...props }, ref) => {
    return (
      <input
        type={type}
        data-slot="input"
        className={cn(inputVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input, inputVariants }
