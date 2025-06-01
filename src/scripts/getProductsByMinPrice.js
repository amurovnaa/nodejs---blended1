import { readProducts } from '../utils/readProducts.js';

export const getProductsByMinPrice = async (minPrice) => {
  try {
    const products = await readProducts();

    const productsWithMinPrice = products.filter(
      (product) => product.price >= minPrice,
    );
    return productsWithMinPrice;
  } catch (err) {
    console.error('Error while searching min products:', err);
    return [];
  }
};

console.log(await getProductsByMinPrice(800));
