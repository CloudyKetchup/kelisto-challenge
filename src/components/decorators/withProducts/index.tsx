import { ComponentType, FC } from "react";

import { useSelector } from "react-redux";
import { productsListSelector } from "state/products";

import { Product } from "models/products";

type WithProducts = {
  products: Product[]
};

/***
 * Decorator for passing the products to the component via props
 * 
 * @param {ComponentType<WithProducts>} WrappedComponent
 * @returns {ComponentType} component with injected products
 */
const withProducts = (WrappedComponent: ComponentType<WithProducts>): ComponentType => {

  const WrapperComponent: FC = () => {
    const products = useSelector(productsListSelector);

    return <WrappedComponent products={products}/>
  };

  WrapperComponent.displayName = `withProducts(${WrappedComponent.displayName})`;
  
  return WrapperComponent;
};

export default withProducts;