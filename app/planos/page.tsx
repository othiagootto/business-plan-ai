'use client';
import Card from '../../components/ui/card';
import Button from '../../components/ui/button';
import Link from 'next/link';

export default function PlanosPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <Card className="max-w-lg w-full p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Nossos Planos</h1>
        <p className="mb-6">Escolha o plano ideal para você e comece a gerar seu plano de negócios profissional agora mesmo.</p>
        <div className="flex flex-col gap-4">
          <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-2">Starter</h2>
            <p className="mb-2">R$ 97 — 1 plano PDF, suporte básico, acesso imediato</p>
            <Link href="/signup"><Button className="w-full">Começar com Starter</Button></Link>
          </div>
          <div className="border rounded p-4 bg-purple-50">
            <h2 className="text-xl font-semibold mb-2">Professional</h2>
            <p className="mb-2">R$ 197 — Planos ilimitados, suporte prioritário, acesso vitalício</p>
            <Link href="/signup"><Button className="w-full">Quero o Professional</Button></Link>
          </div>
        </div>
      </Card>
    </div>
  );
} 