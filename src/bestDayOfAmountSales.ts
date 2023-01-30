import { Transaction } from "./global.js";

export default function bestDayOfAmountSales(transactionsData: Transaction[]) {
  const total = transactionsData.map((obj) => obj.data.getDay());
  const objectCount = countNumbers(total);

  const bestDay = Number(bestDayForSales(Object.entries(objectCount))[0]);

  return bestDay;
}

function bestDayForSales(array: Array<[string, number]>) {
  return array.reduce((best, current) => {
    return current[1] > best[1] ? current : best;
  });
}

function countNumbers(numbers: number[]) {
  const count: { [key: number]: number } = {};
  numbers.forEach((item) => {
    if (!count[item]) {
      count[item] = 0;
    }
    count[item] += 1;
  });
  return count;
}
