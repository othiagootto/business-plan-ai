# BusinessPlan.ai

Gere planos de negócio profissionais em minutos com IA. Plataforma moderna, segura e pronta para produção.

## 🚀 Deploy no Vercel

1. **Clone o repositório:**
   ```bash
   git clone <repo-url>
   cd business-plan-ai
   ```
2. **Configure as variáveis de ambiente:**
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - (opcional) Outras variáveis do Supabase/Auth

   No Vercel, adicione essas variáveis em Project Settings > Environment Variables.

3. **Deploy:**
   - Clique em "Import Project" no [Vercel](https://vercel.com/import) e selecione este repositório.
   - O build será feito automaticamente.

## 🛠️ Scripts

- `npm run dev` — Desenvolvimento local
- `npm run build` — Build de produção
- `npm start` — Start em produção (standalone)

## 🔒 Boas práticas de produção
- Uso de output `standalone` para deploys serverless
- Headers de segurança configurados
- SEO otimizado (Next.js 14, fontes otimizadas, responsivo)
- Variáveis de ambiente seguras
- Autenticação e dados protegidos por RLS no Supabase

## 📈 SEO & Performance
- Estrutura semântica, responsiva e mobile-first
- Fontes otimizadas (Inter via next/font)
- Imagens e assets otimizados
- SWC minify e compressão ativados

## 📚 Stack
- Next.js 14 (App Router)
- Tailwind CSS
- Supabase Auth & Database
- TypeScript
- Lucide React Icons

---

Desenvolvido com ♥ por BusinessPlan.ai
