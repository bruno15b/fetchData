export const URL_BASE = "https://api.origamid.dev/json/transacoes.json";

export interface APIDataTransaction {
  ["Cliente Novo"]: number;
  Data: string;
  Email: string;
  ["Forma de Pagamento"]: string;
  ID: number;
  Nome: string;
  Status: string;
  ["Valor (R$)"]: string;
}

export interface Transaction {
  clienteNovo: number;
  data: string;
  email: string;
  formaDePagamento: string;
  id: number;
  nome: string;
  status: string;
  valorR: string;
}
