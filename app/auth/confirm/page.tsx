'use client';
import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { supabase } from '../../../lib/supabase';
import Card from '../../../components/ui/card';
import Button from '../../../components/ui/button';

export default function ConfirmPage() {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('');
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const handleEmailConfirmation = async () => {
      const token_hash = searchParams.get('token_hash');
      const type = searchParams.get('type');

      if (!token_hash || !type) {
        setStatus('error');
        setMessage('Parâmetros de confirmação ausentes ou inválidos.');
        return;
      }
      if (type !== 'signup') {
        setStatus('error');
        setMessage('Tipo de confirmação inválido.');
        return;
      }

      try {
        const { error } = await supabase.auth.verifyOtp({
          token_hash,
          type: 'signup',
        });

        if (error) {
          setStatus('error');
          setMessage(error.message);
        } else {
          setStatus('success');
          setMessage('Email confirmado com sucesso! Redirecionando...');
          setTimeout(() => router.push('/dashboard'), 2000);
        }
      } catch {
        setStatus('error');
        setMessage('Erro ao confirmar email. Tente novamente.');
      }
    };

    handleEmailConfirmation();
  }, [searchParams, router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Card className="max-w-md w-full p-8 text-center">
        {status === 'loading' && (
          <>
            <h1 className="text-2xl font-bold mb-4">Confirmando email...</h1>
            <p className="text-gray-600">Aguarde enquanto processamos sua confirmação.</p>
          </>
        )}

        {status === 'success' && (
          <>
            <h1 className="text-2xl font-bold mb-4 text-green-600">Email Confirmado!</h1>
            <p className="text-gray-600 mb-4">{message}</p>
            <Button onClick={() => router.push('/dashboard')} className="w-full">
              Ir para Dashboard
            </Button>
          </>
        )}

        {status === 'error' && (
          <>
            <h1 className="text-2xl font-bold mb-4 text-red-600">Erro na Confirmação</h1>
            <p className="text-gray-600 mb-4">{message}</p>
            <Button onClick={() => router.push('/login')} className="w-full">
              Voltar ao Login
            </Button>
          </>
        )}
      </Card>
    </div>
  );
} 