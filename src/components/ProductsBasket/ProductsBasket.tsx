import React, { forwardRef } from "react";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  DialogProps,
  Fade,
  Divider,
  makeStyles,
  Typography,
  IconButton,
  Box,
  Grid
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import ListAltIcon from '@material-ui/icons/ListAlt';
import { ProductsGrid } from "../ProductsGrid";
import BasketItem from "./BasketItem";

import { useBasket } from "../../hooks";

type ProductsBasketProps = Omit<DialogProps, "onClose"> & {
  onClose: () => void
};

const useStyles = makeStyles(({ palette, spacing }) => ({
  paper: {
    maxWidth: "unset"
  },
  content: {
    width: 800,
    height: 400
  },
  clearButton: {
    color: palette.error.main
  },
  closeButton: {
    position: 'absolute',
    right: spacing(1),
    top: spacing(1),
    color: palette.grey[500],
  },
  submitButton: {
    marginLeft: 10
  },
  emptyBasketIcon: {
    textAlign: "center",
    "& svg": {
      height: "2em",
      width: "2em"
    }
  }
}));

const EmptyBasket = () => {
  const classes = useStyles();

  return (
    <Box display="flex" height="100%">
      <Box margin="auto">
        <Grid direction="column" spacing={2} container>
          <Grid className={classes.emptyBasketIcon} item>
            <ListAltIcon />
          </Grid>
          <Grid item>
            <Typography>Basket is empty</Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const ProductsBasket = forwardRef<HTMLDivElement, ProductsBasketProps>(({ onClose, ...props }, ref) => {
  const { basketItems, clearBasket } = useBasket();
  const classes = useStyles();

  const onSubmit = () => {
    onClose();

    //TODO: fire a notification
  };

  return (
    <Dialog
      keepMounted
      TransitionComponent={Fade}
      scroll="paper"
      {...props}
      classes={{
        paper: classes.paper
      }}
      open
    >
      <DialogTitle>
        <Typography>Your basket</Typography>
        <IconButton onClick={onClose} className={classes.closeButton}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <Divider/>
      <DialogContent className={classes.content}>
        {basketItems.length > 0 ? <ProductsGrid products={basketItems} ProductComponent={BasketItem}/> : <EmptyBasket/>}
      </DialogContent>
      <Divider/>
      <DialogActions>
        <Button onClick={clearBasket} className={classes.clearButton} variant="text">
          Clear
        </Button>
        <Button onClick={onSubmit} className={classes.submitButton}>
          Go to checkout
        </Button>
      </DialogActions>
    </Dialog>
  );
});

export default ProductsBasket;