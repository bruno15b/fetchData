import checkArrayItems from "./checkArrayItems.js";
import fetchData from "./fetchData.js";
import normalizeDataEntries from "./normalizeDataEntries.js";
import normalizeDataKeys from "./normalizeDataKeys.js";
import appendTransactionToHTMLTable from "./appendTransactionToHTMLTable.js";
import calculateTotalAmount from "./calculateTotalAmount.js";
import appendTransactionStatisticsToHtml from "./appendTransactionStatisticsToHtml.js";
import processPurchaseStatistics from "./processPurchaseStatistics.js";
import bestDayOfAmountSales from "./bestDayOfAmountSales.js";
async function handleData() {
    const data = await fetchData();
    if (data) {
        const normalizedDataKeys = normalizeDataKeys(data);
        const transactionsData = normalizeDataEntries(normalizedDataKeys, "data", "valorR");
        if (checkArrayItems(transactionsData, "data", "status")) {
            transactionsData.forEach((obj) => {
                appendTransactionToHTMLTable(obj);
            });
            const totalAmount = calculateTotalAmount(transactionsData);
            appendTransactionStatisticsToHtml(totalAmount, ".amount");
            const status = processPurchaseStatistics(transactionsData);
            appendTransactionStatisticsToHtml(status.paymentConfirm, ".payment-confirm");
            appendTransactionStatisticsToHtml(status.cardOperatorDecline, ".card-operator-decline");
            appendTransactionStatisticsToHtml(status.pendingPayment, ".pending-payment");
            appendTransactionStatisticsToHtml(status.refunded, ".refunded");
            appendTransactionStatisticsToHtml(status.creditCard, ".credit-card");
            appendTransactionStatisticsToHtml(status.paymentSlip, ".payment-slip");
            const bestDay = bestDayOfAmountSales(transactionsData);
            appendTransactionStatisticsToHtml(bestDay, ".best-sales-day");
        }
    }
}
handleData();
//# sourceMappingURL=script.js.map