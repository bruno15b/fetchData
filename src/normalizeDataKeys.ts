export default function normalizeDataKeys<T extends Object>(arr: T[]): Object[] {
  const normalizeKey = (key: string) => {
    return key
      .toLowerCase()
      .replace(/[^a-zA-Z0-9\s]/g, "")
      .replace(/\s+(.)/g, (match, camel) => camel.toUpperCase());
  };

  return arr.map((obj: T) => {
    const newObj: { [key: string]: unknown } = {};
    Object.keys(obj).forEach((key) => {
      const newKey = normalizeKey(key);
      newObj[newKey] = obj[key as keyof T];
    });
    return newObj;
  });
}
