'use client'

import { cn } from '@/lib/utils'
import { HTMLAttributes, forwardRef } from 'react'

interface GlowBorderProps extends HTMLAttributes<HTMLDivElement> {
  gradient?: 'cyan-purple' | 'purple-green' | 'cyan-green'
  intensity?: 'low' | 'medium' | 'high'
}

const GlowBorder = forwardRef<HTMLDivElement, GlowBorderProps>(
  ({ className, gradient = 'cyan-purple', intensity = 'medium', children, ...props }, ref) => {
    const gradients = {
      'cyan-purple': 'from-accent-cyan via-accent-purple to-accent-cyan',
      'purple-green': 'from-accent-purple via-accent-green to-accent-purple',
      'cyan-green': 'from-accent-cyan via-accent-green to-accent-cyan',
    }

    const intensities = {
      low: 'opacity-30',
      medium: 'opacity-50',
      high: 'opacity-80',
    }

    return (
      <div
        ref={ref}
        className={cn('relative rounded-xl', className)}
        {...props}
      >
        <div
          className={cn(
            'absolute inset-0 rounded-xl bg-gradient-to-r p-[2px]',
            gradients[gradient],
            intensities[intensity]
          )}
        >
          <div className="absolute inset-0 rounded-xl bg-primary-900/95" />
        </div>
        <div className="relative z-10">
          {children}
        </div>
      </div>
    )
  }
)

GlowBorder.displayName = 'GlowBorder'

export { GlowBorder }
