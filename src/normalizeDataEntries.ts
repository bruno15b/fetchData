interface DataObject {
  [key: string]: any;
}

export default function normalizeDataEntries<T extends DataObject>(arr: T[], stringToDate: string, stringToNumber: string): T[] {
  const convertStringToDate = (dateString: string): any => {
    const dateArray: string[] = dateString.split("/");
    const timeString = dateArray[2].split(" ");
    const date = new Date(Number(timeString[0]), Number(dateArray[1]) - 1, Number(dateArray[0]), Number(timeString[1].split(":")[0]), Number(timeString[1].split(":")[1]));
    return date;
  };

  const convertStringToNumber = (stringNumber: string): any => {
    if (typeof stringNumber === "string") {
      const number = stringNumber === "-" ? 0 : Number(stringNumber.replace(".", "").replace(",", "."));
      return number;
    } else {
      return 0;
    }
  };

  return arr.map((obj) => {
    obj[stringToNumber as keyof T] = convertStringToNumber(obj[stringToNumber]);
    obj[stringToDate as keyof T] = convertStringToDate(obj[stringToDate]);
    return obj;
  });
}
