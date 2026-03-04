import { HTMLAttributes, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

interface PixelPanelProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'quest' | 'dark'
}

const PixelPanel = forwardRef<HTMLDivElement, PixelPanelProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const variants = {
      default: 'bg-game-panel border-4 border-game-border shadow-pixel',
      quest: 'bg-game-quest border-4 border-game-questBorder shadow-pixel',
      dark: 'bg-game-bg border-4 border-game-border shadow-pixel',
    }

    return (
      <div
        ref={ref}
        className={twMerge(variants[variant], 'p-4', className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

PixelPanel.displayName = 'PixelPanel'

export default PixelPanel