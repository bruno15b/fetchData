import checkArrayItems from "./checkArrayItems.js";
import fetchData from "./fetchData.js";
import normalizeDataKeys from "./normalizeDataKeys.js";
async function handleData() {
    const data = await fetchData();
    if (data) {
        const normalizedData = normalizeDataKeys(data);
        if (checkArrayItems(normalizedData, "data", "status")) {
            normalizedData.forEach((obj) => appendNamesToHTML(obj));
        }
    }
}
function appendNamesToHTML(obj) {
    return (document.body.innerHTML += `<p>${obj.nome}</p>`);
}
handleData();
//# sourceMappingURL=script.js.map