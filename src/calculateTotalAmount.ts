import { Transaction } from "./global";

export default function calculateTotalAmount(transactionsData: Transaction[]) {
  const totalAmount = transactionsData.reduce((acc, obj) => (acc += obj.valorR), 0);
  return totalAmount;
}
