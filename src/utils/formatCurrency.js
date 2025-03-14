export const formatCurrency = (number) => {
  return `Rs ${number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
};
