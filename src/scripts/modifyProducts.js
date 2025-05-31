import { writeProducts } from '../utils/writeProducts.js';
import { readProducts } from '../utils/readProducts.js';

export const modifyProducts = async () => {
  try {
    const products = await readProducts();
    const modifiedProducts = products.map(({ description, ...rest }) => rest);

    await writeProducts(modifiedProducts);

    console.log('Products modified successfully.');
  } catch (err) {
    console.error('Error while modifying products:', err);
  }
};
modifyProducts();
