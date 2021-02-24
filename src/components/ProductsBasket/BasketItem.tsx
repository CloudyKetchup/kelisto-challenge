import React, { FC } from "react";

import ClearIcon from '@material-ui/icons/Clear';
import { Grid, Paper, makeStyles, Box } from "@material-ui/core";
import { ProductDescription } from "../ProductsGrid";

import { ProductProps, useProductItemStyles } from "../ProductsGrid";

import { useBasket, useHover } from "../../hooks";

type ClearOverlayProps = { onClick: () => void };

const useStyles = makeStyles(({ palette }) => ({
  root: {
    position: "relative",
    cursor: "pointer"
  },
  overlayRoot: {
    background: `${palette.error.main}CC`,
    color: palette.common.white,
    height: "100%",
    width: "100%",
    zIndex: 99,
    position: "absolute",
    display: "flex"
  }
}));

const ClearOverlay: FC<ClearOverlayProps> = ({ onClick }) => {
  const classes = useStyles();

  return (
    <Box className={classes.overlayRoot} onClick={onClick}>
      <Box margin="auto">
        <ClearIcon/>
      </Box>
    </Box>
  );
};

const BasketItem: FC<ProductProps> = ({ data }) => {
  const classes = useStyles();
  const productItemClasses  = useProductItemStyles();
  const [hoverRef, isHover] = useHover();
  const { restoreFromBasket } = useBasket();

  const image = require(`../../data/${data.image}`).default;

  return (
    <Paper ref={hoverRef} className={classes.root}>
      {isHover && <ClearOverlay onClick={() => restoreFromBasket(data)} />}
      <Paper className={productItemClasses.root} variant="elevation" elevation={3}>
        <Grid direction="column" spacing={2} container>
          <Grid item>
            <img className={productItemClasses.productImage} src={image} />
          </Grid>
          <Grid className={productItemClasses.productDescription} item>
            <ProductDescription
              title={data.title}
              sku={data.sku}
              price={data.price}
            />
          </Grid>
        </Grid>
      </Paper>
    </Paper>
  );
};

export default BasketItem;