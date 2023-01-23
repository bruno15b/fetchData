import { URL_BASE } from "./global.js";
export default async function fetchData() {
    try {
        const response = await fetch(URL_BASE);
        if (!response.ok)
            throw new Error("Error: " + response.status);
        const json = await response.json();
        return json;
    }
    catch (error) {
        if (error instanceof Error)
            console.error("fetchData: " + error.message);
        return null;
    }
}
//# sourceMappingURL=fetchData.js.map