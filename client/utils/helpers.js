export const priceFormat = (value) => {
  const newNumber = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: value.currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value.amount);
  return newNumber.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};
