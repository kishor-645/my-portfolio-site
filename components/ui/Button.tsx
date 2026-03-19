'use client'

import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  glow?: 'cyan' | 'purple' | 'green'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', glow = 'cyan', children, ...props }, ref) => {
    const baseStyles = 'relative font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed'

    const variants = {
      primary: 'bg-gradient-to-r from-accent-cyan/20 to-accent-purple/20 border border-accent-cyan/30 hover:border-accent-cyan/60 text-white hover:shadow-lg',
      secondary: 'bg-primary-800 border border-primary-600 hover:border-primary-500 text-white',
      ghost: 'hover:bg-primary-800/50 text-primary-300 hover:text-white',
      outline: 'border border-primary-600 hover:border-primary-400 text-white bg-transparent',
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }

    const glowStyles = {
      cyan: 'hover:shadow-[0_0_30px_rgba(0,245,255,0.4),0_0_60px_rgba(124,58,237,0.2)]',
      purple: 'hover:shadow-[0_0_30px_rgba(124,58,237,0.4),0_0_60px_rgba(0,245,255,0.2)]',
      green: 'hover:shadow-[0_0_30px_rgba(34,197,94,0.4),0_0_60px_rgba(0,245,255,0.2)]',
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], glowStyles[glow], className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
