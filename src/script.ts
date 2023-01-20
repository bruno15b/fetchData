import fetchData from "./fetchData.js";
import { APIData } from "./global.js";

async function handleData() {
  const data = await fetchData<APIData[]>();
  if (data) data.map((obj) => addNames(obj));
}

function addNames(obj: APIData) {
  return (document.body.innerHTML += `<p>${obj.Nome}</p>`);
}

handleData();
