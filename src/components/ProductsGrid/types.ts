import { ComponentType, CSSProperties } from "react";

import { Product } from "../../models/products";

export type ProductsGridProps = {
  products: Product[]
  ProductComponent?: ComponentType<ProductProps>
};

export type ProductProps = {
  data: Product
  style?: CSSProperties
};