import { createSlice } from "@reduxjs/toolkit";

import { ProductsState } from "./types";

import * as reducers from "./reducers";
import extraReducers from "./extraReducers";

const initialState: ProductsState = {
  productsList: [],
  basket: {
    items: []
  }
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers,
  extraReducers
});

export const {
  setProductsList,
  moveProductToBasket,
  restoreProductFromBasket,
  clearBasket
} = productsSlice.actions;

export * from "./extraReducers";
export * from "./selectors";
export default productsSlice;