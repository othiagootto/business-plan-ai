import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

// Componente Button reutilizável com variantes de cor
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'success' | 'gray';
}

export default function Button({
  children,
  className,
  variant = 'primary',
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'px-4 py-2 rounded font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
        {
          'bg-primary text-white hover:bg-blue-700 focus:ring-primary': variant === 'primary',
          'bg-success text-white hover:bg-green-700 focus:ring-success': variant === 'success',
          'bg-gray-500 text-white hover:bg-gray-700 focus:ring-gray-500': variant === 'gray',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
