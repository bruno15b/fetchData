import checkArrayItems from "./checkArrayItems.js";
import fetchData from "./fetchData.js";
import { APIDataTransaction, Transaction } from "./global.js";
import normalizeDataEntries from "./normalizeDataEntries.js";
import normalizeDataKeys from "./normalizeDataKeys.js";

const table = document.querySelector(".table-body");

async function handleData() {
  const data = await fetchData<APIDataTransaction[]>();
  if (data) {
    const normalizedDataKeys = normalizeDataKeys(data);
    const normalizedDataEntries = normalizeDataEntries(normalizedDataKeys, "data", "valorR");

    if (checkArrayItems<Transaction>(normalizedDataEntries, "data", "status")) {
      normalizedDataEntries.forEach((obj) => appendTransactionToHTMLTable(obj));
    }
  }
}

function appendTransactionToHTMLTable(obj: Transaction) {
  if (table) {
    return (table.innerHTML += `
    <tr>
     <td>${obj.nome}</td>
     <td>${obj.email}</td>
     <td>${obj.valorR}</td>
     <td>${obj.formaDePagamento}</td>
     <td>${obj.status}</td>
    </tr>
    `);
  } else {
    return null;
  }
}

handleData();
