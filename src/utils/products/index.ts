import { Product } from "../../models/products";

export const exist = (products: Product[], product: Product) => {
  return products.some(({ productId }) => productId === product.productId);
};