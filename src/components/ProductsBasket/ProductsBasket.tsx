import React, { forwardRef } from "react";

import { useSelector } from "react-redux";
import { productsListSelector } from "../../state/products";

import { Dialog, DialogActions, DialogContent, DialogTitle, Button, DialogProps, Fade, makeStyles } from "@material-ui/core";
import { ProductsGrid } from "../ProductsGrid";

import { useBasket } from "../../hooks";

const useStyles = makeStyles(({ palette }) => ({
  clearButton: {
    color: palette.error.main
  }
}));

const ProductsBasket = forwardRef<HTMLDivElement, DialogProps>((props, ref) => {
  const { basketItems, clearBasket } = useBasket();
  const classes = useStyles();

  const onSubmit = () => {

  };

  return (
    <Dialog keepMounted TransitionComponent={Fade} scroll="paper" {...props} open>
      <DialogTitle>Your basket</DialogTitle>
      <DialogContent>
        <ProductsGrid products={basketItems} />
      </DialogContent>
      <DialogActions>
        <Button onClick={clearBasket} className={classes.clearButton} variant="text">
          Clear
        </Button>
        <Button onClick={onSubmit} color="primary">
          To to checkout
        </Button>
      </DialogActions>
    </Dialog>
  );
});

export default ProductsBasket;