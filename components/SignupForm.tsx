'use client';
import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from './AuthProvider';
import Button from './ui/button';
import Input from './ui/input';

const signupSchema = z.object({
  name: z.string().min(2, 'Nome obrigatório'),
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
});

type SignupFormValues = z.infer<typeof signupSchema>;

export default function SignupForm() {
  const { signup } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues>({ resolver: zodResolver(signupSchema) });

  const onSubmit = async (data: SignupFormValues) => {
    setLoading(true);
    setError(null);
    const result = await signup(data.name, data.email, data.password);
    if (result.error) setError(result.error);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full max-w-sm mx-auto bg-white p-8 rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Criar conta</h2>
      <div>
        <label className="block mb-1 font-medium">Nome</label>
        <Input type="text" {...register('name')} disabled={loading} />
        {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
      </div>
      <div>
        <label className="block mb-1 font-medium">Email</label>
        <Input type="email" {...register('email')} disabled={loading} />
        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
      </div>
      <div>
        <label className="block mb-1 font-medium">Senha</label>
        <Input type="password" {...register('password')} disabled={loading} />
        {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
      </div>
      {error && <div className="text-red-600 text-sm text-center">{error}</div>}
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? 'Criando conta...' : 'Criar conta'}
      </Button>
    </form>
  );
} 