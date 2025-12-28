
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'default' | 'ghost' | 'outline'
}

export function Button({ children, className = '', variant = 'default', ...props }: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center rounded-md text-base font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
  
  const variantClasses = {
    default: '',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
    outline: 'border border-border hover:bg-accent hover:text-accent-foreground'
  }
  
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
