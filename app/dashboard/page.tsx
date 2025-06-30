'use client';
import { AuthProvider, useAuth } from '../../components/AuthProvider';
import ProtectedRoute from '../../components/ProtectedRoute';
import Button from '../../components/ui/button';

export default function DashboardPage() {
  return (
    <AuthProvider>
      <ProtectedRoute>
        <DashboardContent />
      </ProtectedRoute>
    </AuthProvider>
  );
}

function DashboardContent() {
  const { user, logout, loading } = useAuth();
  const handleLogout = async () => {
    if (window.confirm('Deseja realmente sair?')) {
      await logout();
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded shadow w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-2">Bem-vindo, {user?.user_metadata?.name || user?.email}!</h1>
        <p className="text-gray-600 mb-6">Você está logado no BusinessPlan.ai</p>
        <Button variant="gray" onClick={handleLogout} disabled={loading}>
          {loading ? 'Saindo...' : 'Sair'}
        </Button>
      </div>
    </div>
  );
} 