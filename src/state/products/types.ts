import { Product } from "../../models/producets";

import { ReducerAction } from "../types";

export type ProductsState = {
  productsList: Product[]
  basket: {
    items: Product[]
  }
};

export type ProductsReducer<T> = ReducerAction<ProductsState, T>;