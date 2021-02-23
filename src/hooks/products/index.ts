import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Product } from "../../models/products";

import { basketItemsSelector, clearBasket, moveProductToBasket, restoreProductFromBasket } from "../../state/products";

export const useBasket = () => {
  const basketItems = useSelector(basketItemsSelector);
  const dispatch = useDispatch();
  
  const move = useCallback((product: Product) => dispatch(moveProductToBasket(product)), [dispatch]);

  const restore = useCallback((product: Product) => dispatch(restoreProductFromBasket(product)), [dispatch]);

  const clear = useCallback(() => dispatch(dispatch(clearBasket())), [dispatch]);

  return {
    basketItems,
    moveToBasket: move,
    restoreFromBasket: restore,
    clearBasket: clear
  };
};