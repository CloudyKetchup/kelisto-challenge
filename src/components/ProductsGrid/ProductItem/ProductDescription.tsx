import React, { FC } from "react";

import { Typography, Tooltip, withStyles } from "@material-ui/core";

import { useProductItemStyles } from "../hooks";

import { ProductDescriptionProps } from "./types";

const DescriptionTooltip = withStyles(({ palette, shadows }) => ({
  tooltip: {
    backgroundColor: palette.background.paper,
    boxShadow: shadows[1],
    color: palette.text.primary,
    fontSize: 11,
  }
}))(Tooltip);

const useStyles = useProductItemStyles;

const ProductDescription: FC<ProductDescriptionProps> = ({ title, sku, price }) => {
  const classes = useStyles();

  const renderTooltip = (title: string, content: string) => (
    <DescriptionTooltip
      title={<Typography>{title}</Typography>}
      className={classes.descriptionTooltip}
    >
      <Typography>{content}</Typography>
    </DescriptionTooltip>
  );

  const getNormalizedDescription = () => {
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