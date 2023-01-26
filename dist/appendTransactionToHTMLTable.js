const table = document.querySelector(".table-body");
export default function appendTransactionToHTMLTable(obj) {
    if (table) {
        return (table.innerHTML += `
    <tr>
     <td>${obj.nome}</td>
     <td>${obj.email}</td>
     <td>${obj.valorR}</td>
     <td>${obj.formaDePagamento}</td>
     <td>${obj.status}</td>
    </tr>
    `);
    }
    else {
        return null;
    }
}
//# sourceMappingURL=appendTransactionToHTMLTable.js.map