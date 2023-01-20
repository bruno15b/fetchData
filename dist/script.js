import fetchData from "./fetchData.js";
async function handleData() {
    const data = await fetchData();
    if (data)
        data.map((obj) => addNames(obj));
}
function addNames(obj) {
    return (document.body.innerHTML += `<p>${obj.Nome}</p>`);
}
handleData();
//# sourceMappingURL=script.js.map