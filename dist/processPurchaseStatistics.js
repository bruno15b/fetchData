const sales = {
    paymentConfirm: 0,
    cardOperatorDecline: 0,
    pendingPayment: 0,
    refunded: 0,
    creditCard: 0,
    paymentSlip: 0,
};
export default function statusOfTotalSales(transactionsData) {
    transactionsData.forEach(({ status, formaDePagamento }) => {
        if (status === "Paga") {
            sales.paymentConfirm += 1;
        }
        else if (status === "Recusada pela operadora de cartão") {
            sales.cardOperatorDecline += 1;
        }
        else if (status === "Recusada pela operadora de cartão") {
            sales.cardOperatorDecline += 1;
        }
        else if (status === "Aguardando pagamento") {
            sales.pendingPayment += 1;
        }
        else if (status === "Estornada") {
            sales.refunded += 1;
        }
    });
    transactionsData.forEach(({ formaDePagamento }) => {
        if (formaDePagamento === "Cartão de Crédito") {
            sales.paymentSlip += 1;
        }
        else if (formaDePagamento === "Boleto") {
            sales.creditCard += 1;
        }
    });
    return sales;
}
//# sourceMappingURL=processPurchaseStatistics.js.map