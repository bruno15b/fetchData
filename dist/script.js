import checkArrayItems from "./checkArrayItems.js";
import fetchData from "./fetchData.js";
import normalizeDataEntries from "./normalizeDataEntries.js";
import normalizeDataKeys from "./normalizeDataKeys.js";
async function handleData() {
    const data = await fetchData();
    if (data) {
        const normalizedDataKeys = normalizeDataKeys(data);
        const normalizedDataEntries = normalizeDataEntries(normalizedDataKeys, "data", "valorR");
        if (checkArrayItems(normalizedDataEntries, "data", "status")) {
            console.log(normalizedDataEntries);
        }
    }
}
function appendNamesToHTML(obj) {
    return (document.body.innerHTML += `<p>${obj.nome}</p>`);
}
handleData();
//# sourceMappingURL=script.js.map