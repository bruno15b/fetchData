export default function bestDayOfAmountSales(transactionsData) {
    const total = transactionsData.map((obj) => obj.data.getDay());
    const arrayCount = Object.values(countNumbers(total));
    const bestDay = arrayCount.indexOf(Math.max(...arrayCount));
    return bestDay;
}
function countNumbers(numbers) {
    const count = {};
    for (const number of numbers) {
        if (count[number]) {
            count[number]++;
        }
        else {
            count[number] = 1;
        }
    }
    return count;
}
//# sourceMappingURL=bestDayOfAmountSales.js.map