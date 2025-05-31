import { readProducts } from '../utils/readProducts.js';

export const getUniqueCategory = async () => {
  try {
    const existingProducts = await readProducts();

    const categories = existingProducts.map((product) => product.category);
    const uniqueCategories = [...new Set(categories)];

    console.log(uniqueCategories);
    return uniqueCategories;
  } catch (err) {
    console.error('Error while searching unique products:', err);
    return [];
  }
};

getUniqueCategory();
