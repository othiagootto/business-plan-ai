-- Adicionar colunas que faltam na tabela business_plans
-- Comandos 100% seguros - só adicionam se não existirem

ALTER TABLE business_plans 
ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES users(id);

ALTER TABLE business_plans 
ADD COLUMN IF NOT EXISTS company_name VARCHAR;

-- Adicionar índice para performance
CREATE INDEX IF NOT EXISTS idx_business_plans_user_id ON business_plans(user_id); 