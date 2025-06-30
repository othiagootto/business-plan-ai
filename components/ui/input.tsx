import { InputHTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';

// Componente Input reutilizável
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={clsx(
        'block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary text-gray-900 font-sans',
        className
      )}
      {...props}
    />
  )
);
Input.displayName = 'Input';

export default Input;
