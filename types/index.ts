// Tipos base para o BusinessPlan.ai

export type PlanoDeNegocio = {
  id: string;
  nome: string;
  descricao: string;
  criadoEm: Date;
  atualizadoEm: Date;
  secoes: SecaoPlano[];
};

export type SecaoPlano = {
  id: string;
  titulo: string;
  conteudo: string;
};

export type Usuario = {
  id: string;
  nome: string;
  email: string;
}; 