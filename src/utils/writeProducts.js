import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

export const writeProducts = async (updatedProducts) => {
  try {
    if (updatedProducts === undefined) {
      throw new Error('Undefined in writeProducts');
    }
    const data = JSON.stringify(updatedProducts, null, 2);
    await fs.writeFile(PATH_DB, data, 'utf8');
    console.log('Product is written');
  } catch (err) {
    console.error('Error while writing products:', err);
  }
};
