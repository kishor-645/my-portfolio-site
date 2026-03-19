'use client'

import { cn } from '@/lib/utils'
import { HTMLAttributes, forwardRef } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  glow?: 'cyan' | 'purple' | 'green' | 'none'
  glass?: boolean
  hover?: boolean
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, glow = 'none', glass = true, hover = true, children, ...props }, ref) => {
    const glowStyles = {
      cyan: 'hover:shadow-[0_0_30px_rgba(0,245,255,0.3),0_0_60px_rgba(124,58,237,0.1)]',
      purple: 'hover:shadow-[0_0_30px_rgba(124,58,237,0.3),0_0_60px_rgba(0,245,255,0.1)]',
      green: 'hover:shadow-[0_0_30px_rgba(34,197,94,0.3),0_0_60px_rgba(0,245,255,0.1)]',
      none: '',
    }

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-xl transition-all duration-300',
          glass && 'glass-strong',
          glowStyles[glow],
          hover && 'hover:-translate-y-1 hover:border-accent-cyan/30',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export { Card }
