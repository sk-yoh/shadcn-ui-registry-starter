import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-lg text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-[14px] leading-5",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 font-medium text-[14px] leading-5",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 font-medium text-[14px] leading-5",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 font-medium text-[14px] leading-5",
        link: "text-primary underline-offset-4 hover:underline font-medium text-[14px] leading-5",
      },
      size: {
        default: "h-8 rounded-lg gap-1.5 px-3 py-1", /* ADS medium size - 32px */
        sm: "h-8 rounded-lg gap-1.5 px-3 py-1", /* ADS medium size - 32px */
        lg: "h-12 rounded-lg px-4 has-[>svg]:px-3", /* ADS large size */
        icon: "size-8", /* ADS icon button size */
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
