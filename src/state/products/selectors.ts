import { Product } from "../../models/products";
import { Selector } from "../types";

export const productsListSelector: Selector<Product[]> = state => state.productsReducer.productsList;
export const basketItemsSelector: Selector<Product[]>  = state => state.productsReducer.basket.items;