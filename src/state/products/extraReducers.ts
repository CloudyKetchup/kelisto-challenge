import { createAsyncThunk } from "@reduxjs/toolkit";
import { productsApi } from "api";

import { Product } from "models/products";
import { ProductsReducer } from "./types";

/***
 * Fetch the products from the api
 * 
 * @returns {Array<Product>} products
 */
export const fetchProducts = createAsyncThunk("/products/fetchProducts", async () => {
  const products = await productsApi.fetchProducts();

  return products;
});

/***
 * Action for finished fetchProducts thunk action
 * 
 * Will update the state products list
 */
const fetchProductsFulfilled: ProductsReducer<Product[]> = (state, action) => void(state.productsList = action.payload);

export default {
  [fetchProducts.fulfilled.toString()]: fetchProductsFulfilled
};