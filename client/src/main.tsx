import React from "react";
import ReactDOM from "react-dom/client";

import Layout from "./components/Layout";
import "./index.css";

const domEl = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(domEl).render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);
