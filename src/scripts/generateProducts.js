import { createFakeProduct } from '../utils/createFakeProduct.js';
import { readProducts } from '../utils/readProducts.js';
import { writeProducts } from '../utils/writeProducts.js';

export const generateProducts = async (count) => {
  try {
    const existingProducts = await readProducts();

    const newProducts = [];
    for (let i = 0; i < count; i++) {
      const fakeProducts = createFakeProduct();
      newProducts.push(fakeProducts);
    }
    existingProducts.push(...newProducts);

    await writeProducts(existingProducts);

    console.log(`${count} products generated.`);
  } catch (err) {
    console.error('Error while generating contacts', err);
  }
};

generateProducts(7);
