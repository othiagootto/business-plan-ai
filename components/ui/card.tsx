import { ReactNode } from 'react';
import clsx from 'clsx';

// Componente Card para exibir conteúdo em caixas
export interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div className={clsx('bg-white rounded-lg shadow p-6 border border-gray-200', className)}>
      {children}
    </div>
  );
}
