import checkArrayItems from "./checkArrayItems.js";
import fetchData from "./fetchData.js";
import { APIDataTransaction, Transaction } from "./global.js";
import normalizeDataEntries from "./normalizeDataEntries.js";
import normalizeDataKeys from "./normalizeDataKeys.js";

async function handleData() {
  const data = await fetchData<APIDataTransaction[]>();
  if (data) {
    const normalizedDataKeys = normalizeDataKeys(data);
    const normalizedDataEntries = normalizeDataEntries(normalizedDataKeys, "data", "valorR");

    if (checkArrayItems<Transaction>(normalizedDataEntries, "data", "status")) {
      console.log(normalizedDataEntries);
      normalizedDataEntries.forEach((obj) => appendNamesToHTML(obj));
    }
  }
}

function appendNamesToHTML(obj: Transaction) {
  return (document.body.innerHTML += `<p>${obj.nome}</p>`);
}

handleData();
