import { readProducts } from '../utils/readProducts.js';

export const getUniqueCategory = async () => {
  try {
    const existingProducts = await readProducts();
    const uniqueCategories = [
      ...new Set(existingProducts.map((product) => product.category)),
    ];
    return uniqueCategories;
  } catch (err) {
    console.error('Error while searching unique products:', err);
    return [];
  }
};

console.log(await getUniqueCategory());
