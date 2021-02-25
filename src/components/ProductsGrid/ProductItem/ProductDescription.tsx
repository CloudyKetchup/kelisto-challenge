import React, { FC } from "react";

import { Typography, Tooltip, withStyles } from "@material-ui/core";

import { useProductItemStyles } from "../hooks";

import { ProductDescriptionProps } from "./types";

/***
 * Tooltip for full description of a product
 * when hovering the description which was shorten
 * 
 * @constructor
 */
const DescriptionTooltip = withStyles(({ palette, shadows }) => ({
  tooltip: {
    backgroundColor: palette.background.paper,
    boxShadow: shadows[1],
    color: palette.text.primary,
    fontSize: 11,
  }
}))(Tooltip);

const useStyles = useProductItemStyles;

/***
 * Product description component, will render the title, sku and the price
 * 
 * @param {ProductDescriptionProps} props
 * @constructor
 */
const ProductDescription: FC<ProductDescriptionProps> = ({ title, sku, price }) => {
  const classes = useStyles();

  /***
   * Render the description tooltip
   * 
   * @param {string} title      the tooltip text which will appear on hover
   * @param {string} content    text which will be hovered
   * 
   * @constructor
   * @returns {JSX.Element} tooltip element
   */
  const renderTooltip = (title: string, content: string): JSX.Element => (
    <DescriptionTooltip
      title={<Typography>{title}</Typography>}
      className={classes.descriptionTooltip}
    >
      <Typography>{content}</Typography>
    </DescriptionTooltip>
  );

  /***
   * When the description is too long, it will be shorten
   * 
   * If the description was shorten, it's wrapped with a tooltip which appears on
   * mouse hover and contains the full description
   * 
   * @example
   * const longDescription = "here is a very long description of a product, and so on more like this";
   * 
   * // "here is a very long description of a prod..."
   * const shortDescription = getNormalizedDescription();
   * 
   * @returns {string | JSX.Element} description or description wrapped with tooltip
   */
  const getNormalizedDescription = (): string | JSX.Element => {
    const shortString = (str: string, length: number) => str.substring(0, length);

    const description = `${title}, ${sku}`;
    const shortDescription = `${shortString(title, 29)}... , ${sku}`;

    return title.length > 29
      ? renderTooltip(description, shortDescription)
      : description;
  };

  return (
    <>
      <Typography>{getNormalizedDescription()}</Typography>
      <Typography>{price}</Typography>
    </>
  );
};

export default ProductDescription;