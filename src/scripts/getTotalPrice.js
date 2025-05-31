import { readProducts } from '../utils/readProducts.js';

export const getTotalPrice = async () => {
  let totalPrice = 0;
  try {
    const products = await readProducts();
    products.forEach((product) => {
      totalPrice += Number(product.price);
    });
    return totalPrice;
  } catch (err) {
    console.error('Error while counting total price of products:', err);
    return 0;
  }
};

console.log(await getTotalPrice());
