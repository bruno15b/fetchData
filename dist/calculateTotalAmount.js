export default function calculateTotalAmount(transactionsData) {
    const totalAmount = transactionsData.reduce((acc, obj) => (acc += obj.valorR), 0);
    return totalAmount;
}
//# sourceMappingURL=calculateTotalAmount.js.map