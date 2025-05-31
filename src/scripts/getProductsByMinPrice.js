import { readProducts } from '../utils/readProducts.js';

export const getProductsByMinPrice = async (minPrice) => {
  try {
    const existingProducts = await readProducts();

    const productsWithMinPrice = existingProducts.filter(
      (product) => product.price >= minPrice,
    );

    console.log(productsWithMinPrice);
    return productsWithMinPrice;
  } catch (err) {
    console.error('Error while searching min products:', err);
    return [];
  }
};

getProductsByMinPrice(800);
