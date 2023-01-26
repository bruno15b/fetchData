export default function appendTransactionStatisticsToHtml(value: number | string, className: string) {
  if (!className) {
    throw new Error(`Error: no class name provided.`);
  }

  if (value === undefined) {
    throw new Error(`Error: no value provided.`);
  }

  const element = document.querySelector(className);
  if (!element) {
    throw new Error(`Error: no element found with the class name ${className}.`);
  }

  if (className === ".amount") {
    element.innerHTML += " R$" + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  } else {
    element.innerHTML += " " + value;
  }
}
