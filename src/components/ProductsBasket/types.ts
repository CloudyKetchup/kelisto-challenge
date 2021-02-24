import { DialogContentProps, DialogProps } from "@material-ui/core";
import { RefObject } from "react";

export type ProductsBasketProps = Omit<Omit<DialogProps, "onClose">, "ref"> & {
  ref?: RefObject<HTMLDivElement>
  onClose: () => void
  ContentProps?: Partial<DialogContentProps>
};