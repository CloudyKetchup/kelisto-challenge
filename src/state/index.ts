import { configureStore } from "@reduxjs/toolkit";

import ReduxThunk from "redux-thunk";
import ReduxLogger from "redux-logger";

import products from "./products";

export const store = configureStore({
  reducer: {
    productsReducer: products.reducer
  },
  middleware: [ReduxThunk, ReduxLogger]
});

export type AppState = ReturnType<typeof store.getState>;