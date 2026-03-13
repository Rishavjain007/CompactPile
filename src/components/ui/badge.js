import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#BA0014] focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-[#BA0014] text-white",
        secondary: "border-transparent bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100",
        destructive: "border-transparent bg-red-600 text-white",
        outline: "text-gray-900 dark:text-gray-100",
        success: "border-transparent bg-green-600 text-white",
        warning: "border-transparent bg-yellow-600 text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Badge = React.forwardRef(({ className, variant, ...props }, ref) => {
  return (
    <div className={cn(badgeVariants({ variant }), className)} ref={ref} {...props} />
  );
});

Badge.displayName = "Badge";

export { Badge, badgeVariants };