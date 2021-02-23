import { createAsyncThunk } from "@reduxjs/toolkit";
import { productsApi } from "../../api";

import { Product } from "../../models/producets";
import { ProductsReducer } from "./types";

export const fetchProducts = createAsyncThunk("/products/fetchProducts", async () => {
  const products = await productsApi.fetchProducts();

  return products;
});

const fetchProductsFulfilled: ProductsReducer<Product[]> = (state, action) => void(state.productsList = action.payload);

export default {
  [fetchProducts.fulfilled.toString()]: fetchProductsFulfilled
};