export const currencyFormatter = (value: number) => {
  return value.toLocaleString('es-ES', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 2,
  });
};
