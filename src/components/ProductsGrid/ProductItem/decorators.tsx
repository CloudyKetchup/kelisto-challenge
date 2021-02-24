import { ComponentType, CSSProperties, FC } from "react";

import { useMediaQuery } from "@material-ui/core";

import { ProductProps } from "../types";

export const withResponsiveProductItem = (WrappedComponent: ComponentType<ProductProps>) => {

  const xsmallStyle: CSSProperties = {
    width: 400
  };

  const smallStyle: CSSProperties = {
    width: 500
  };

  const WrapperComponent: FC<ProductProps> = props => {
    const xsmall = useMediaQuery("(max-width: 640px)");
    const small  = useMediaQuery("(max-width: 940px)");

    const getStyle = () => {
      switch (true) {
        case xsmall:
          return xsmallStyle;
        case small:
          return smallStyle;
        default:
          return undefined;
      }
    };

    return <WrappedComponent {...props} style={getStyle()}/>
  };

  return WrapperComponent;
};