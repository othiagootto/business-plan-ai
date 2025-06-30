import './globals.css';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AuthProvider } from '../components/AuthProvider';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <Head>
        <title>BusinessPlan.ai — Gere seu Plano de Negócios em Minutos</title>
        <meta name="description" content="Gere planos de negócio profissionais em minutos com IA. Plataforma moderna, segura e pronta para produção." />
        <meta property="og:title" content="BusinessPlan.ai — Gere seu Plano de Negócios em Minutos" />
        <meta property="og:description" content="Gere planos de negócio profissionais em minutos com IA. Plataforma moderna, segura e pronta para produção." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/public/og-image.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={`${inter.className} bg-white text-gray-900 flex flex-col min-h-screen`}>
        <AuthProvider>
          <Header />
          <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-6">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
