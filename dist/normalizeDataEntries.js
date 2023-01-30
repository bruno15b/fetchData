export default function normalizeDataEntries(arr, stringToDate, stringToNumber) {
    const convertStringToDate = (dateString) => {
        const dateArray = dateString.split("/");
        const timeString = dateArray[2].split(" ");
        const date = new Date(Number(timeString[0]), Number(dateArray[1]) - 1, Number(dateArray[0]), Number(timeString[1].split(":")[0]), Number(timeString[1].split(":")[1]));
        return date;
    };
    const convertStringToNumber = (stringNumber) => {
        if (typeof stringNumber === "string") {
            const number = stringNumber === "-" ? 0 : Number(stringNumber.replace(".", "").replace(",", "."));
            return number;
        }
        else {
            return 0;
        }
    };
    return arr.map((obj) => {
        obj[stringToNumber] = convertStringToNumber(obj[stringToNumber]);
        obj[stringToDate] = convertStringToDate(obj[stringToDate]);
        return obj;
    });
}
//# sourceMappingURL=normalizeDataEntries.js.map