import { Product } from "../../models/producets";

import products from "../../data/products.json";

/***
 * In real life we would do a request to rest or something
 * like graphql, for the demo we use the json file
 * 
 * @returns {Promise<Product[]>}
 */
export const fetchProducts = async (): Promise<Product[]> => {
  return products;
};