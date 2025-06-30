'use client';
import Card from '../../components/ui/card';

export default function SobrePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <Card className="max-w-lg w-full p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Sobre o BusinessPlan.ai</h1>
        <p>
          O BusinessPlan.ai nasceu para ajudar empreendedores a criar planos de negócio profissionais, rápidos e prontos para investidores, usando inteligência artificial e as melhores práticas do mercado.
        </p>
        <p className="mt-4 text-gray-600 text-sm">Nossa missão é democratizar o acesso a ferramentas de gestão e planejamento para todos.</p>
      </Card>
    </div>
  );
} 