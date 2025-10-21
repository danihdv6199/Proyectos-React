export const CurrencyFormatter = (value: number) => {
  return value.toLocaleString("es-Es", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  });
};
