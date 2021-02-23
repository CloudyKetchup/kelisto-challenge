import React from "react";
import { Switch, Route, useHistory } from "react-router";

import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { ProductsGrid } from "./components/ProductsGrid";
import { useBasket } from "./hooks";

import { withProducts } from "./components/decorators";
import ProductsBasket from "./components/ProductsBasket/ProductsBasket";

const FilledProductsGrid = withProducts(ProductsGrid);

const useStyles = makeStyles(() => ({
  root: {
    height: "100%",
    width: "100%",
    display: "flex"
  },
  rootContainer: {
    margin: "auto",
    marginTop: 100,
    width: "90%",
    display: "flex"
  },
  basketButton: {
    float: "right",
    textTransform: "unset",
    background: "unset",
    padding: 10,
    textAlign: "center"
  },
  productsContainer: {
    minHeight: "70vh"
  }
}));

const App = () => {
  const { basketItems } = useBasket();
  const history = useHistory();
  const classes = useStyles();

  const onBasketClick = () => history.push("/basket");

  return (
    <Box className={classes.root}>
      <Box className={classes.rootContainer}>
        <Grid direction="column" spacing={4} container>
          <Grid item>
            <Button className={classes.basketButton} variant="contained" onClick={onBasketClick}>
              <Typography>Your basket {basketItems.length > 0 && `(${basketItems.length} items)`}</Typography>
            </Button>
          </Grid>
          <Grid className={classes.productsContainer} item>
            <FilledProductsGrid />
            <Switch>
              <Route path="/basket" component={ProductsBasket} />
            </Switch>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default App;
