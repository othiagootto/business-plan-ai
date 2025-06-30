'use client';
import LoginForm from '../../components/LoginForm';
import { AuthProvider } from '../../components/AuthProvider';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <AuthProvider>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <LoginForm />
        <div className="mt-4 text-center text-sm text-gray-600">
          Não tem conta?{' '}
          <Link href="/signup" className="text-primary hover:underline">Cadastre-se</Link>
        </div>
      </div>
    </AuthProvider>
  );
} 