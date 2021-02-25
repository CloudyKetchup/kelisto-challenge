import React, { FC, useEffect } from "react";

import { useDispatch } from "react-redux";
import { fetchProducts } from "state/products";

import { Box, Grid, makeStyles } from "@material-ui/core";
import { ProductItem } from "./ProductItem";

import { ProductsGridProps } from "./types";

const useStyles = makeStyles(() => ({
  root: {
    padding: 20
  }
}));

/***
 * Responsive grid for rendering the products
 * 
 * @param {ProductsGridProps} props
 * @constructor
 */
const ProductsGrid: FC<ProductsGridProps> = ({ products, ProductComponent = ProductItem }) => {
  const classes  = useStyles();
  const dispatch = useDispatch();

  // fetch the products
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <Box className={classes.root}>
      <Grid spacing={4} container alignItems="flex-start" justify="center">
        {products.map(product => (
          <Grid key={product.productId} item>
            <ProductComponent data={product}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductsGrid;