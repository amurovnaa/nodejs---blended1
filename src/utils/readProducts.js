import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

export const readProducts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');

    if (!data.trim()) {
      return [];
    }

    const products = JSON.parse(data);
    return products;
  } catch (err) {
    console.error('Error while reading products:', err);
    return [];
  }
};
