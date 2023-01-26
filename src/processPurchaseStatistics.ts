import { Transaction } from "./global";

const sales = {
  paymentConfirm: 0,
  cardOperatorDecline: 0,
  pendingPayment: 0,
  refunded: 0,
};

export default function statusOfTotalSales(transactionsData: Transaction[]) {
  const totalAmount = transactionsData.forEach(({ status }) => {
    if (status === "Paga") {
      sales.paymentConfirm += 1;
    } else if (status === "Recusada pela operadora de cartão") {
      sales.cardOperatorDecline += 1;
    } else if (status === "Recusada pela operadora de cartão") {
      sales.cardOperatorDecline += 1;
    } else if (status === "Aguardando pagamento") {
      sales.pendingPayment += 1;
    } else if (status === "Estornada") {
      sales.refunded += 1;
    }
  });
  return sales;
}
