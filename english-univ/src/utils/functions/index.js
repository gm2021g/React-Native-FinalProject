export const sumTotal = (items) =>
  items.map((item) => item.price).reduce((acc, curr) => acc + curr, 0);
