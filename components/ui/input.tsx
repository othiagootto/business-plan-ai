import { forwardRef } from 'react';
import clsx from 'clsx';

// Interface explícita para Input
export interface InputProps {
  className?: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', placeholder, disabled, ...props }, ref) => (
    <input
      ref={ref}
      className={clsx(
        'block w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary text-gray-900 font-sans',
        className
      )}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      {...props}
    />
  )
);
Input.displayName = 'Input';

export default Input;
