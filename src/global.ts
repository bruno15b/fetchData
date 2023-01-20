export const URL_BASE = "https://api.origamid.dev/json/transacoes.json";

export interface APIData {
  ["Cliente Novo"]: number;
  Data: string;
  Email: string;
  ["Forma de Pagamento"]: string;
  ID: number;
  Nome: string;
  Status: string;
  ["Valor (R$)"]: string;
}
