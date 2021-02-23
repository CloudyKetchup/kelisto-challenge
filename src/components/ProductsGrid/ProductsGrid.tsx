import React, { FC, useEffect } from "react";

import { useDispatch } from "react-redux";
import { fetchProducts } from "../../state/products";

import { Box, Grid, makeStyles } from "@material-ui/core";
import ProductItem from "./ProductItem";

import { ProductsGridProps } from "./types";

const useStyles = makeStyles(() => ({
  root: {
    padding: 20
  }
}));

const ProductsGrid: FC<ProductsGridProps> = ({ products }) => {
  const classes  = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <Box className={classes.root}>
      <Grid spacing={4} container>
        {products.map(product => (
          <Grid key={product.productId} item>
            <ProductItem data={product}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductsGrid;