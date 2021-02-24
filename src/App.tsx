import React from "react";
import { Switch, Route, useHistory } from "react-router";

import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { ProductsGrid } from "./components/ProductsGrid";
import { ProductsBasket } from "./components/ProductsBasket";

import { useBasket } from "./hooks";
import { withProducts, withTheme } from "./components/decorators";

import { lightThemeOptions } from "./theme";

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

  const onNavigate = (path: string) => () => history.push(path);

  return (
    <Box className={classes.root}>
      <Box className={classes.rootContainer}>
        <Grid direction="column" spacing={4} container>
          <Grid item>
            <Button className={classes.basketButton} variant="contained" onClick={onNavigate("/basket")}>
              <Typography>Your basket {basketItems.length > 0 && `(${basketItems.length} items)`}</Typography>
            </Button>
          </Grid>
          <Grid className={classes.productsContainer} item>
            <FilledProductsGrid />
            <Switch>
              <Route path="/basket" render={() => <ProductsBasket open onClose={onNavigate("/")}/>} />
            </Switch>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default withTheme(lightThemeOptions)(App);
