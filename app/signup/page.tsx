'use client';
import SignupForm from '../../components/SignupForm';
import { AuthProvider } from '../../components/AuthProvider';
import Link from 'next/link';

export default function SignupPage() {
  return (
    <AuthProvider>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <SignupForm />
        <div className="mt-4 text-center text-sm text-gray-600">
          Já tem conta?{' '}
          <Link href="/login" className="text-primary hover:underline">Entrar</Link>
        </div>
      </div>
    </AuthProvider>
  );
} 