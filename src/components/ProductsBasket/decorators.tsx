import { ComponentType, CSSProperties, FC } from "react";

import { useMediaQuery } from "@material-ui/core";

import { ProductsBasketProps } from "./types";

/***
 * Create the responsive layout basket
 * 
 * Will use page max width property for passing the responsive css style
 * to the basket component
 * 
 * @param {ComponentType<ProductsBasketProps>} WrappedComponent   basket component
 * @constructor
 */
export const withResponsiveBasket = (WrappedComponent: ComponentType<ProductsBasketProps>) => {

  // styles
  const xsmallStyle: CSSProperties = { width: 500 };
  const smallStyle: CSSProperties  = { width: 600 };

  const WrapperComponent: FC<ProductsBasketProps> = props => {
    const xsmall = useMediaQuery("(max-width: 640px)");
    const small  = useMediaQuery("(max-width: 840px)");

    /***
     * Get the style based on the media query results
     * 
     * @returns {CSSProperties | undefined}
     */
    const getStyle = (): CSSProperties | undefined => {
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