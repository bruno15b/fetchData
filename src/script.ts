import checkArrayItems from "./checkArrayItems.js";
import fetchData from "./fetchData.js";
import { APIDataTransaction, Transaction } from "./global.js";
import normalizeDataKeys from "./normalizeDataKeys.js";

async function handleData() {
  const data = await fetchData<APIDataTransaction[]>();
  if (data) {
    const normalizedData = normalizeDataKeys(data);
    if (checkArrayItems<Transaction>(normalizedData, "data", "status")) {
      normalizedData.forEach((obj) => appendNamesToHTML(obj));
    }
  }
}

function appendNamesToHTML(obj: Transaction) {
  return (document.body.innerHTML += `<p>${obj.nome}</p>`);
}
handleData();
