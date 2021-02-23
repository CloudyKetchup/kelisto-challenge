import React, { FC } from "react";

import { Grid, Paper, Typography, Button, makeStyles } from "@material-ui/core";

import { ProductProps } from "./types";
import { useBasket } from "../../hooks";

import clsx from "clsx";

const useStyles = makeStyles(({ palette }) => ({
  root: {
    width: 250,
    padding: 20
  },
  productImage: {
    margin: "auto",
    objectFit: "cover",
    height: 200,
    width: 200
  },
  productDescription: {
    maxHeight: 88
  },
  basketButton: {
    background: palette.primary.main,
    color: palette.getContrastText(palette.text.primary)
  }
}));

const ProductItem: FC<ProductProps> = ({ data }) => {
  const { basketItems, moveToBasket } = useBasket();
  const classes  = useStyles();
  const inBasket = basketItems.includes(data);

  // usually the image source would be an url, here we load the static file
  const image = require(`../../data/${data.image}`).default;

  return (
    <Paper className={classes.root} variant="elevation" elevation={3}>
      <Grid direction="column" spacing={2} container>
        <Grid item>
          <img className={classes.productImage} src={image}/>
        </Grid>
        <Grid className={classes.productDescription} item>
          <Typography>{data.title}, {data.sku}</Typography>
          <Typography>{data.price}</Typography>
        </Grid>
        <Grid item>
          <Button
            onClick={() => moveToBasket(data)}
            className={clsx(!inBasket && classes.basketButton)}
            disabled={inBasket}
          >Add to Basket</Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProductItem;