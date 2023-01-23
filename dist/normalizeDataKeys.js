export default function normalizeDataKeys(arr) {
    const normalizeKey = (key) => {
        return key
            .toLowerCase()
            .replace(/[^a-zA-Z0-9\s]/g, "")
            .replace(/\s+(.)/g, (match, camel) => camel.toUpperCase());
    };
    return arr.map((obj) => {
        const newObj = {};
        Object.keys(obj).forEach((key) => {
            const newKey = normalizeKey(key);
            newObj[newKey] = obj[key];
        });
        return newObj;
    });
}
//# sourceMappingURL=normalizeDataKeys.js.map