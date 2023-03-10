import { Transaction } from "./global.js";

export default function calculateTotalAmount(transactionsData: Transaction[]) {
  const totalAmount = transactionsData.reduce((acc, obj) => (acc += obj.valorR), 0);
  return totalAmount;
}
