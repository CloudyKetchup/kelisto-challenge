import React, { FC, ComponentType } from "react";

import { createMuiTheme, ThemeOptions, ThemeProvider } from "@material-ui/core";

/***
 * Wrap the component with the theme provider from material-ui library
 * 
 * @param {ThemeOptions} options    theme options
 * @constructor
 */
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