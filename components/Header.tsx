import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-primary text-white shadow-md">
      <nav className="max-w-4xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-bold tracking-tight">BusinessPlan.ai</Link>
        <ul className="flex gap-4 text-base">
          <li><Link href="/" className="hover:underline">Início</Link></li>
          <li><Link href="/planos" className="hover:underline">Planos</Link></li>
          <li><Link href="/sobre" className="hover:underline">Sobre</Link></li>
        </ul>
      </nav>
    </header>
  );
} 