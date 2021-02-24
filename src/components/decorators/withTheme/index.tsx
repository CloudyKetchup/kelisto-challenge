import React, { FC, ComponentType } from "react";

import { createMuiTheme, ThemeOptions, ThemeProvider } from "@material-ui/core";

const withTheme = (options: ThemeOptions) => (WrappedComponent: ComponentType) => {

  const WrapperComponent: FC = () => {
    const theme = createMuiTheme(options);
    
    return (
      <ThemeProvider theme={theme}>
        <WrappedComponent/>
      </ThemeProvider>
    );
  };

  WrapperComponent.displayName = `withTheme(${WrappedComponent.displayName})`;

  return WrapperComponent;
};

export default withTheme;