import { readProducts } from '../utils/readProducts.js';
import { PATH_FILES_DIR } from '../constants/products.js';
import { writeFile } from 'fs/promises';
import path from 'path';

export const createProductsFiles = async () => {
  const products = await readProducts();

  products.forEach(async (product) => {
    const fileName = product.name.toLowerCase().split(' ').join('-') + '.json';
    const filePath = path.join(PATH_FILES_DIR, fileName);
    await writeFile(filePath, JSON.stringify(product, null, 2));
    console.log('Files created');
  });
};

createProductsFiles();
