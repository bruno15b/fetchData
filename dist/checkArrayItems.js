export default function checkArrayItems(items, key1, key2) {
    if (!Array.isArray(items)) {
        return false;
    }
    return items.every((object) => {
        return object && typeof object === "object" && key1 in object && key2 in object;
    });
}
//# sourceMappingURL=checkArrayItems.js.map