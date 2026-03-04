import { ButtonHTMLAttributes, forwardRef } from 'react'

interface PixelButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary'
  size?: 'sm' | 'md'
}

const PixelButton = forwardRef<HTMLButtonElement, PixelButtonProps>(
  ({ className = '', variant = 'default', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'pixel-button font-pixel cursor-pointer'
    
    const sizeStyles = {
      sm: 'text-[10px] px-3 py-2',
      md: 'text-xs px-4 py-3',
    }

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${sizeStyles[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    )
  }
)

PixelButton.displayName = 'PixelButton'

export default PixelButton