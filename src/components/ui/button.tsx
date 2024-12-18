import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils'

const buttonVariants = cva(
  'rounded-lg cursor-pointer select-none active:translate-y-2 active:border-b-[0px] transition-all duration-150',
  {
    variants: {
      variant: {
        default:
          'bg-blue-500 active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841] border-[1px] border-blue-400 [box-shadow:0_8px_0_0_#1b6ff8,0_13px_0_0_#1b70f841]',
        destructive:
          'bg-red-500 active:[box-shadow:0_0px_0_0_#dc2626,0_0px_0_0_#dc262641] border-[1px] border-red-400 [box-shadow:0_8px_0_0_#dc2626,0_13px_0_0_#dc262641]',
        secondary:
          'bg-gray-500 active:[box-shadow:0_0px_0_0_#4b5563,0_0px_0_0_#4b556341] border-[1px] border-gray-400 [box-shadow:0_8px_0_0_#4b5563,0_13px_0_0_#4b556341]',
      },
      size: {
        default: 'h-4 w-4 py-8 px-12 text-md',
        sm: 'h-2 w-2 py-6 px-8 text-xs',
        lg: 'h-6 w-6 py-12 px-16 text-[4rem]',
        long: 'h-20 w-6 py-12 px-16 text-[4rem]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  variant?: 'default' | 'destructive' | 'secondary'
  children: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <span className={cn(['flex flex-col justify-center items-center h-full text-white font-bold', className])}>
          {children}
        </span>
      </button>
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
