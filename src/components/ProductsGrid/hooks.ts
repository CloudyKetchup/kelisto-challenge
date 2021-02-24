import { makeStyles } from "@material-ui/core";

export const useProductItemStyles = makeStyles(({ palette }) => ({
  root: {
    width: 250
  },
  productImage: {
    margin: "auto",
    objectFit: "contain",
    height: 200,
    width: "100%",
  },
  productDescription: {
    maxHeight: 88,
  },
  productBody: {
    padding: 20
  },
  basketButton: {
    background: palette.primary.main,
    color: palette.getContrastText(palette.text.primary),
    "&:hover": {
      background: palette.primary.main,
      color: palette.getContrastText(palette.text.primary)
    }
  },
  descriptionTooltip: {
    cursor: "pointer"
  },
  descriptionTooltipTitle: {
    background: palette.background.paper
  }
}));