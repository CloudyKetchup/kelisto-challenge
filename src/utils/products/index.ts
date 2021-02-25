import { Product } from "models/products";

/***
 * Check if the product exists in the list
 * 
 * @param {Array<Product>} products
 * @param {Product} product
 * 
 * @returns {boolean} result
 */
export const exist = (products: Product[], product: Product): boolean => {
  return products.some(({ productId }) => productId === product.productId);
};