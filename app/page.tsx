'use client';
import Link from 'next/link';
import { CheckCircle, Rocket, User, Users, Star, Shield, HelpCircle, TrendingUp, Smile } from 'lucide-react';
import Button from '../components/ui/button';
import Card from '../components/ui/card';
import { useEffect } from 'react';

export default function HomePage() {
  // Smooth scroll para âncoras
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && target.matches('a[href^="#"]')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.replace('#', '');
        if (id) {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 text-white">
      {/* HERO */}
      <section className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg animate-fade-in">
          Gere seu <span className="bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text text-transparent">Plano de Negócios Profissional</span> em 15 Minutos
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in delay-100">
          Com inteligência artificial, crie planos completos, bonitos e prontos para investidores — sem complicação.
        </p>
        <Link href="/signup">
          <Button className="px-8 py-4 text-lg font-bold shadow-xl bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600 transition-all animate-fade-in delay-200">
            Comece Agora
          </Button>
        </Link>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="py-20 px-4 bg-white text-gray-900">
        <h2 className="text-3xl font-bold text-center mb-12">Como funciona?</h2>
        <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
          <Card className="flex-1 flex flex-col items-center p-8 shadow-lg hover:scale-105 transition-transform duration-300">
            <User className="w-10 h-10 text-blue-500 mb-4" />
            <h3 className="font-semibold text-xl mb-2">1. Crie sua conta</h3>
            <p className="text-gray-600 text-center">Cadastre-se rapidamente e acesse a plataforma.</p>
          </Card>
          <Card className="flex-1 flex flex-col items-center p-8 shadow-lg hover:scale-105 transition-transform duration-300">
            <Rocket className="w-10 h-10 text-purple-500 mb-4" />
            <h3 className="font-semibold text-xl mb-2">2. Preencha o formulário</h3>
            <p className="text-gray-600 text-center">Responda perguntas simples sobre seu negócio. A IA faz o resto.</p>
          </Card>
          <Card className="flex-1 flex flex-col items-center p-8 shadow-lg hover:scale-105 transition-transform duration-300">
            <CheckCircle className="w-10 h-10 text-green-500 mb-4" />
            <h3 className="font-semibold text-xl mb-2">3. Baixe seu plano</h3>
            <p className="text-gray-600 text-center">Receba um PDF pronto para apresentar a investidores ou bancos.</p>
          </Card>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-100 text-gray-900">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 grid grid-cols-2 gap-6">
            <div className="flex flex-col items-center">
              <TrendingUp className="w-8 h-8 text-blue-500 mb-2" />
              <span className="text-2xl font-bold">+2.500</span>
              <span className="text-gray-600">Planos gerados</span>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-8 h-8 text-purple-500 mb-2" />
              <span className="text-2xl font-bold">+1.800</span>
              <span className="text-gray-600">Empreendedores atendidos</span>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-8 h-8 text-yellow-500 mb-2" />
              <span className="text-2xl font-bold">4.9/5</span>
              <span className="text-gray-600">Avaliação média</span>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="w-8 h-8 text-green-500 mb-2" />
              <span className="text-2xl font-bold">100%</span>
              <span className="text-gray-600">Privacidade garantida</span>
            </div>
          </div>
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-lg italic mb-4">“O BusinessPlan.ai me ajudou a conseguir investimento em tempo recorde. O plano ficou incrível!”</p>
              <div className="flex items-center gap-3">
                <Smile className="w-8 h-8 text-blue-500" />
                <span className="font-semibold">Marina Souza</span>
                <span className="text-gray-400 text-sm">Fundadora da TechStart</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLANOS */}
      <section id="planos" className="py-20 px-4 bg-white text-gray-900">
        <h2 className="text-3xl font-bold text-center mb-12">Escolha seu plano</h2>
        <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
          <Card className="flex-1 p-8 shadow-xl border-2 border-blue-400 bg-gradient-to-br from-blue-50 to-white hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-bold mb-2 text-blue-600 flex items-center gap-2"><User /> Starter</h3>
            <div className="text-4xl font-extrabold mb-2">R$ 97</div>
            <ul className="mb-6 space-y-2">
              <li className="flex items-center gap-2"><CheckCircle className="text-green-500" size={18} />1 plano PDF</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-green-500" size={18} />Suporte básico</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-green-500" size={18} />Acesso imediato</li>
            </ul>
            <Link href="/signup">
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded transition-all">Começar com Starter</Button>
            </Link>
          </Card>
          <Card className="flex-1 p-8 shadow-2xl border-2 border-purple-500 bg-gradient-to-br from-purple-50 to-white hover:scale-105 transition-transform duration-300 relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-purple-500 text-white text-xs px-3 py-1 rounded-full font-bold shadow">Mais Popular</div>
            <h3 className="text-xl font-bold mb-2 text-purple-700 flex items-center gap-2"><Rocket /> Professional</h3>
            <div className="text-4xl font-extrabold mb-2">R$ 197</div>
            <ul className="mb-6 space-y-2">
              <li className="flex items-center gap-2"><CheckCircle className="text-green-500" size={18} />Planos ilimitados</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-green-500" size={18} />Suporte prioritário</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-green-500" size={18} />Acesso vitalício</li>
            </ul>
            <Link href="/signup">
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded transition-all">Quero o Professional</Button>
            </Link>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-100 text-gray-900">
        <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
          <FAQItem q="Preciso de cartão de crédito para testar?" a="Não! Você pode criar sua conta e simular seu plano sem compromisso." />
          <FAQItem q="O plano é realmente aceito por bancos?" a="Sim! O PDF gerado segue padrões exigidos por investidores e bancos." />
          <FAQItem q="Posso editar o plano depois?" a="Sim, você pode revisar e editar antes de baixar o PDF final." />
          <FAQItem q="É seguro compartilhar meus dados?" a="Totalmente seguro. Seus dados são criptografados e nunca vendidos." />
          <FAQItem q="Quanto tempo demora para gerar?" a="Em média, menos de 15 minutos após preencher o formulário." />
          <FAQItem q="Posso pedir reembolso?" a="Sim, garantimos reembolso total em até 7 dias se não ficar satisfeito." />
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-purple-700 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Pronto para criar seu plano de negócios?</h2>
        <p className="text-lg mb-8">Junte-se a milhares de empreendedores e tire sua ideia do papel hoje mesmo.</p>
        <Link href="/signup">
          <Button className="px-10 py-4 text-lg font-bold shadow-xl bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600 transition-all">
            Começar agora
          </Button>
        </Link>
      </section>
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 animate-fade-in">
      <div className="flex items-center gap-2 mb-2">
        <HelpCircle className="text-blue-500" size={20} />
        <span className="font-semibold text-lg">{q}</span>
      </div>
      <p className="text-gray-700">{a}</p>
    </div>
  );
}
