import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import router from "./router";

const domEl = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(domEl).render(
  <React.StrictMode>
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  </React.StrictMode>
);
