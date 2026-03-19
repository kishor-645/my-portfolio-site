'use client'

import { cn } from '@/lib/utils'
import { HTMLAttributes, forwardRef } from 'react'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'cyan' | 'purple' | 'green' | 'blue'
  size?: 'sm' | 'md'
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', size = 'sm', children, ...props }, ref) => {
    const variants = {
      default: 'bg-primary-700 text-primary-200 border border-primary-600',
      cyan: 'bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/30',
      purple: 'bg-accent-purple/10 text-accent-purple border border-accent-purple/30',
      green: 'bg-accent-green/10 text-accent-green border border-accent-green/30',
      blue: 'bg-accent-blue/10 text-accent-blue border border-accent-blue/30',
    }

    const sizes = {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-3 py-1 text-sm',
    }

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-full font-medium transition-all duration-200',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'

export { Badge }
