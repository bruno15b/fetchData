export default function bestDayOfAmountSales(transactionsData) {
    const total = transactionsData.map((obj) => obj.data.getDay());
    const objectCount = countNumbers(total);
    const bestDay = Number(bestDayForSales(Object.entries(objectCount))[0]);
    return bestDay;
}
function bestDayForSales(array) {
    return array.reduce((best, current) => {
        return current[1] > best[1] ? current : best;
    });
}
function countNumbers(numbers) {
    const count = {};
    numbers.forEach((item) => {
        if (!count[item]) {
            count[item] = 0;
        }
        count[item] += 1;
    });
    return count;
}
//# sourceMappingURL=bestDayOfAmountSales.js.map