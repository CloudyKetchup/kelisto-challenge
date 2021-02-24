import { ComponentType, CSSProperties, FC } from "react";

import { useMediaQuery } from "@material-ui/core";

import { ProductsBasketProps } from "./types";

export const withResponsiveBasket = (WrappedComponent: ComponentType<ProductsBasketProps>) => {

  const xsmallStyle: CSSProperties = { width: 500 };
  const smallStyle: CSSProperties  = { width: 600 };

  const WrapperComponent: FC<ProductsBasketProps> = props => {
    const xsmall = useMediaQuery("(max-width: 640px)");
    const small  = useMediaQuery("(max-width: 840px)");

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

    return (
      <WrappedComponent
        {...props}
        ContentProps={{
          ...props.ContentProps,
          style: {
            ...getStyle(),
            ...props.ContentProps?.style
          },
        }}
      />
    );
  };

  return WrapperComponent;
};