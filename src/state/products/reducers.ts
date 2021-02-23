import { Product } from "../../models/products";
import { ProductsReducer, ProductsState } from "./types";

import { remove } from "../../utils/array";
import { exist } from "../../utils/products";

export const setProductsList: ProductsReducer<Product[]> = (state, action) => void(state.productsList = action.payload);

export const moveProductToBasket: ProductsReducer<Product> = (state, action) => {
  const { basket } = state;
  const product = action.payload;

  if (!exist(basket.items, product)) {
    basket.items.push(product);
  }
};

export const restoreProductFromBasket: ProductsReducer<Product> = (state, action) => {
  const { basket } = state;
  const product = action.payload;

  if (exist(basket.items, product)) {
    remove(basket.items, ({ productId }) => productId === product.productId);
  }
};

export const clearBasket = (state: ProductsState) => void(state.basket.items = []);