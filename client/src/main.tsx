import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { StyleSheetManager, ThemeProvider } from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import router from "./router";
import { lightTheme } from "./themes";

const domEl = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(domEl).render(
  <React.StrictMode>
    <StyleSheetManager enableVendorPrefixes>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </StyleSheetManager>
  </React.StrictMode>
);
