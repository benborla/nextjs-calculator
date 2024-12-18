import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils'

const buttonVariants = cva(
  'rounded-lg cursor-pointer select-none active:translate-y-1 transition-all duration-150',
  {
    variants: {
      variant: {
        default:
          'bg-blue-500 text-white border-b-[4px] border-blue-700 active:border-b-0 active:translate-y-1',
        destructive:
          'bg-red-500 text-white border-b-[4px] border-red-700 active:border-b-0 active:translate-y-1',
        secondary:
          'bg-gray-500 text-white border-b-[4px] border-gray-700 active:border-b-0 active:translate-y-1',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-8 px-3 py-1 text-sm',
        lg: 'h-12 px-8 py-3 text-lg',
        calc: 'h-16 w-full text-xl font-bold',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
