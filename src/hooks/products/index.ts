import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Product } from "models/products";

import { basketItemsSelector, clearBasket, moveProductToBasket, restoreProductFromBasket } from "../../state/products";

/***
 * Hook for manipulating the products basket
 * 
 * @returns basket items with methods for manipulating of the products basket
 */
export const useBasket = () => {
  const basketItems = useSelector(basketItemsSelector);
  const dispatch = useDispatch();
  
  /***
   * Add the product to the basket
   * 
   * @param {Product} product
   */
  const move = useCallback((product: Product) => dispatch(moveProductToBasket(product)), [dispatch]);

  /**
   * Remove the product from the basket
   * 
   * @param {Product} product
   */
  const restore = useCallback((product: Product) => dispatch(restoreProductFromBasket(product)), [dispatch]);

  /**
   * Will empty the products basket
   */
  const clear = useCallback(() => dispatch(dispatch(clearBasket())), [dispatch]);

  return {
    basketItems,
    moveToBasket: move,
    restoreFromBasket: restore,
    clearBasket: clear
  };
};