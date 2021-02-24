import React, { FC } from "react";

import { Grid, Paper, Button } from "@material-ui/core";
import ProductDescription from "./ProductDescription";

import { useBasket } from "../../../hooks";
import { useProductItemStyles } from "../hooks";
import { withResponsiveProductItem } from "./decorators";

import { ProductProps } from "../types";
import clsx from "clsx";

const useStyles = useProductItemStyles;

const ProductItem: FC<ProductProps> = ({ data, style }) => {
  const { basketItems, moveToBasket } = useBasket();
  const classes  = useStyles();
  const inBasket = basketItems.includes(data);

  // usually the image source would be an url, here we load the static file
  const image = require(`../../../data/${data.image}`).default;

  return (
    <Paper className={classes.root} variant="elevation" elevation={3} style={style}>
      <Grid direction="column" container>
        <Grid item>
          <img className={classes.productImage} src={image}/>
        </Grid>
        <Grid className={classes.productBody} item>
          <Grid direction="column" spacing={2} container>
            <Grid className={classes.productDescription} item>
              <ProductDescription
                title={data.title}
                sku={data.sku}
                price={data.price}
              />
            </Grid>
            <Grid item>
              <Button
                onClick={() => moveToBasket(data)}
                className={clsx(!inBasket && classes.basketButton)}
                disabled={inBasket}
              >{inBasket ? "Already in basket" : "Add to Basket"}</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default withResponsiveProductItem(ProductItem);