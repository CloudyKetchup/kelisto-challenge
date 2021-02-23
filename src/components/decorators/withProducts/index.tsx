import { ComponentType, FC } from "react";

import { useSelector } from "react-redux";
import { productsListSelector } from "../../../state/products";

import { Product } from "../../../models/producets";

type WithProducts = {
  products: Product[]
};

const withProducts = (WrappedComponent: ComponentType<WithProducts>) => {

  const WrapperComponent: FC = () => {
    const products = useSelector(productsListSelector);

    return <WrappedComponent products={products}/>
  };

  WrapperComponent.displayName = `withProducts(${WrappedComponent.displayName})`;
  
  return WrapperComponent;
};

export default withProducts;