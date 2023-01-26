import checkArrayItems from "./checkArrayItems.js";
import fetchData from "./fetchData.js";
import { APIDataTransaction, Transaction } from "./global.js";
import normalizeDataEntries from "./normalizeDataEntries.js";
import normalizeDataKeys from "./normalizeDataKeys.js";
import appendTransactionToHTMLTable from "./appendTransactionToHTMLTable.js";
import calculateTotalAmount from "./calculateTotalAmount.js";
import appendTransactionStatisticsToHtml from "./appendTransactionStatisticsToHtml.js";
import processPurchaseStatistics from "./processPurchaseStatistics.js";

async function handleData() {
  const data = await fetchData<APIDataTransaction[]>();
  if (data) {
    const normalizedDataKeys = normalizeDataKeys(data);
    const transactionsData = normalizeDataEntries(normalizedDataKeys, "data", "valorR");

    if (checkArrayItems<Transaction>(transactionsData, "data", "status")) {
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
    }
  }
}

handleData();
