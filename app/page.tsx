'use client';
import Link from 'next/link';
import { CheckCircle, Star, Zap, FileText, Download, Menu, X } from 'lucide-react';
import Button from '../components/ui/button';
import Card from '../components/ui/card';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER FIXO */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 10 ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-blue-600">
              BusinessPlan.ai
            </Link>

            {/* Menu Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#como-funciona" className="text-gray-700 hover:text-blue-600 transition-colors">
                Como Funciona
              </Link>
              <Link href="#precos" className="text-gray-700 hover:text-blue-600 transition-colors">
                Preços
              </Link>
              <Link href="#exemplos" className="text-gray-700 hover:text-blue-600 transition-colors">
                Exemplos
              </Link>
              <Link href="/login" className="text-gray-700 hover:text-blue-600 transition-colors">
                Login
              </Link>
              <Link href="/signup">
                <Button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold">
                  Criar Plano
                </Button>
              </Link>
            </nav>

            {/* Menu Mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Menu Mobile Dropdown */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="px-4 py-4 space-y-4">
                <Link href="#como-funciona" className="block text-gray-700 hover:text-blue-600">
                  Como Funciona
                </Link>
                <Link href="#precos" className="block text-gray-700 hover:text-blue-600">
                  Preços
                </Link>
                <Link href="#exemplos" className="block text-gray-700 hover:text-blue-600">
                  Exemplos
                </Link>
                <Link href="/login" className="block text-gray-700 hover:text-blue-600">
                  Login
                </Link>
                <Link href="/signup">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold">
                    Criar Plano
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 flex items-center pt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LADO ESQUERDO */}
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Crie seu Plano de Negócios Profissional em 15 Minutos
              </h1>
              <p className="text-xl text-blue-100 mt-6 mb-8">
                IA avançada + Templates aprovados por investidores e bancos
              </p>
              
              {/* Lista de benefícios */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-400" size={20} />
                  <span>Aprovado por 500+ investidores</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-400" size={20} />
                  <span>Templates seguem padrão SBA</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-green-400" size={20} />
                  <span>Geração em português brasileiro</span>
                </div>
              </div>

              {/* Botões */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/signup">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold">
                    Criar Meu Plano Agora
                  </Button>
                </Link>
                <Link href="#exemplos">
                  <Button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                    Ver Exemplo Grátis
                  </Button>
                </Link>
              </div>
            </div>

            {/* LADO DIREITO - Mockup Dashboard */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-gray-100 rounded-lg p-4 mb-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
                    <CheckCircle size={16} />
                    <span className="text-sm font-medium">Plano Gerado</span>
                  </div>
                </div>
              </div>

              {/* Cards flutuantes */}
              <div className="absolute -top-4 -right-4 bg-orange-500 text-white p-3 rounded-lg shadow-lg">
                <Zap size={20} />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-purple-500 text-white p-3 rounded-lg shadow-lg">
                <FileText size={20} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF SECTION */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Mais de 10.000 planos gerados</h2>
          
          {/* Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center">
                <div className="w-16 h-8 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>

          {/* Depoimentos */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Marina Silva",
                company: "TechStart",
                rating: 5,
                text: "Consegui investimento em tempo recorde com o plano gerado!"
              },
              {
                name: "Carlos Santos",
                company: "EcoSolutions",
                rating: 5,
                text: "O melhor investimento que fiz para minha startup."
              },
              {
                name: "Ana Costa",
                company: "FoodTech",
                rating: 5,
                text: "Plano profissional e completo. Recomendo!"
              }
            ].map((testimonial, i) => (
              <Card key={i} className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">&quot;{testimonial.text}&quot;</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA SECTION */}
      <section id="como-funciona" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Como Funciona</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1. Responda 7 Perguntas",
                icon: <FileText className="w-12 h-12 text-blue-600" />,
                description: "Formulário simples e intuitivo sobre seu negócio"
              },
              {
                step: "2. IA Gera Conteúdo",
                icon: <Zap className="w-12 h-12 text-purple-600" />,
                description: "Nossa IA analisa e cria conteúdo profissional"
              },
              {
                step: "3. Baixe PDF Profissional",
                icon: <Download className="w-12 h-12 text-green-600" />,
                description: "Pronto para apresentar a investidores"
              }
            ].map((item, i) => (
              <Card key={i} className="bg-white shadow-lg rounded-xl p-8 hover:shadow-xl transition-shadow text-center">
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.step}</h3>
                <p className="text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="precos" className="bg-gradient-to-r from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Escolha seu Plano</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* STARTER CARD */}
            <Card className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Starter</h3>
              <div className="text-5xl font-bold text-blue-600 mb-6">R$ 97</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <span>15 páginas profissionais</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <span>11 seções essenciais</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <span>IA otimizada para PMEs</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <span>PDF para impressão</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <span>Suporte por email</span>
                </li>
              </ul>
              <Link href="/signup">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold">
                  Escolher Starter
                </Button>
              </Link>
            </Card>

            {/* PROFESSIONAL CARD */}
            <Card className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl shadow-xl p-8 text-white relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-orange-500 text-white rounded-full px-4 py-1 text-sm font-bold">
                  MAIS POPULAR
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Professional</h3>
              <div className="text-5xl font-bold mb-6">R$ 197</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="text-green-300" size={20} />
                  <span>25 páginas detalhadas</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="text-green-300" size={20} />
                  <span>18 seções completas</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="text-green-300" size={20} />
                  <span>IA avançada + análises de mercado</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="text-green-300" size={20} />
                  <span>PDF premium com gráficos</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="text-green-300" size={20} />
                  <span>Suporte prioritário</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="text-green-300" size={20} />
                  <span>Revisões ilimitadas por 30 dias</span>
                </li>
              </ul>
              <Link href="/signup">
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold">
                  Escolher Professional
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold mb-4">BusinessPlan.ai</h3>
              <p className="text-sm">Crie planos de negócio profissionais em minutos com IA.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#como-funciona" className="hover:text-white">Como Funciona</Link></li>
                <li><Link href="#precos" className="hover:text-white">Preços</Link></li>
                <li><Link href="#exemplos" className="hover:text-white">Exemplos</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/help" className="hover:text-white">Central de Ajuda</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contato</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy" className="hover:text-white">Privacidade</Link></li>
                <li><Link href="/terms" className="hover:text-white">Termos</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2024 BusinessPlan.ai. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
