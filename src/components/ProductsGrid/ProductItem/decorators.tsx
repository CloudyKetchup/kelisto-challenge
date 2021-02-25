import { ComponentType, CSSProperties, FC } from "react";

import { useMediaQuery } from "@material-ui/core";

import { ProductProps } from "../types";

/***
 * Get responsive styles for the ProductItem component
 * 
 * Will use page max width property for getting the responsive styles
 * 
 * @param {ComponentType<ProductProps>} WrappedComponent
 * @constructor
 */
export const withResponsiveProductItem = (WrappedComponent: ComponentType<ProductProps>) => {

  // styles
  const xsmallStyle: CSSProperties = { width: 400 };
  const smallStyle: CSSProperties  = { width: 500 };

  const WrapperComponent: FC<ProductProps> = props => {
    const xsmall = useMediaQuery("(max-width: 640px)");
    const small  = useMediaQuery("(max-width: 940px)");

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

    return <WrappedComponent {...props} style={getStyle()}/>
  };

  return WrapperComponent;
};