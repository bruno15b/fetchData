export default function checkArrayItems<T>(items: unknown[], key1: keyof T, key2: keyof T): items is T[] {
  if (!Array.isArray(items)) {
    return false;
  }
  return items.every((object) => {
    return object && typeof object === "object" && key1 in object && key2 in object;
  });
}
