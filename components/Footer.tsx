export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 text-gray-600 border-t border-gray-200 mt-8">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-4 gap-2">
        <span className="text-sm">&copy; {new Date().getFullYear()} BusinessPlan.ai. Todos os direitos reservados.</span>
        <nav className="flex gap-4 text-sm">
          <a href="/privacidade" className="hover:underline">Privacidade</a>
          <a href="/termos" className="hover:underline">Termos</a>
          <a href="mailto:contato@businessplan.ai" className="hover:underline">Contato</a>
        </nav>
      </div>
    </footer>
  );
} 