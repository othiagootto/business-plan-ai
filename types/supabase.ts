// Tipos gerados para tabelas do Supabase

export type User = {
  id: string;
  email: string;
  name: string;
  created_at: string;
};

export type BusinessPlan = {
  id: string;
  user_id: string;
  company_name: string;
  plan_type: string;
  form_data: any; // pode ser um objeto JSON
  generated_content: string;
  pdf_url: string | null;
  status: 'draft' | 'completed' | 'error';
  created_at: string;
};

export type Payment = {
  id: string;
  user_id: string;
  plan_id: string;
  stripe_payment_intent_id: string;
  amount: number;
  currency: string;
  status: 'pending' | 'paid' | 'failed';
  created_at: string;
}; 