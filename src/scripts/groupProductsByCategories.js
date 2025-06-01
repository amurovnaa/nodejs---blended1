import { readProducts } from '../utils/readProducts.js';

export const groupProductsByCategories = async () => {
  try {
    const products = await readProducts();
    const groupedByCategory = {};

    for (const { category, name } of products) {
      if (!groupedByCategory[category]) {
        groupedByCategory[category] = [];
      }
      groupedByCategory[category].push(name);
    }

    return groupedByCategory;
  } catch (error) {
    console.error('Failed to group products by categories:', error);
    return {};
  }
};
console.log(await groupProductsByCategories());
